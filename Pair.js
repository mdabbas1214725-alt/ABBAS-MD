const express = require('express');
const app = express();
const fs = require('fs');
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, makeCacheableSignalKeyStore } = require("@whiskeysockets/baileys");

app.use(express.json());

app.get('/', (req,res) => {
  res.send(`
  <h2>ABBA'S MD Pair Code</h2>
  <input id="num" placeholder="9230xxxxxxx">
  <button onclick="getCode()">Get Code</button>
  <p id="result"></p>
  <script>
    async function getCode(){
      let number = document.getElementById('num').value;
      let r = await fetch('/code?number='+number);
      let d = await r.json();
      document.getElementById('result').innerText = 'Your Code: ' + (d.code || d.error);
    }
  </script>
  `);
});

app.get('/code', async (req,res) => {
  let num = req.query.number;
  if(!num) return res.send({error:"Number do"});
  num = num.replace(/[^0-9]/g,'');
  const id = Math.random().toString(36).substring(2,10);
  const { state, saveCreds } = await useMultiFileAuthState('./session/'+id);
  try{
    let sock = makeWASocket({
      auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level:"fatal"}).child({level:"fatal"})) },
      printQRInTerminal: false,
      logger: pino({level:"fatal"}).child({level:"fatal"}),
      browser: ["Chrome","Chrome",""]
    });
    if(!sock.authState.creds.registered){
      await delay(1500);
      let code = await sock.requestPairingCode(num);
      res.send({code: code});
    }
    sock.ev.on('creds.update', saveCreds);
    sock.ev.on('connection.update', async (s)=>{
      if(s.connection == "open"){
        await delay(3000);
        let data = fs.readFileSync('./session/'+id+'/creds.json');
        let session = Buffer.from(data).toString('base64');
        await sock.sendMessage(sock.user.id, {text: session});
        await sock.ws.close();
        fs.rmSync('./session/'+id, {recursive:true, force:true});
      }
    });
  }catch(e){
    res.send({error:"Service Unavailable"});
  }
});

app.listen(3000, ()=> console.log("Pair Server running on 3000"));
