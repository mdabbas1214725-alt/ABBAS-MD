const express = require('express');
const app = express();
const { default: makeWASocket, useMultiFileAuthState, delay, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');
const pino = require('pino');
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('<h1>ABBAS-MD Pair Site</h1><p>Use /code?number=9230xxxx</p>');
});

app.get('/code', async (req, res) => {
  let num = req.query.number;
  if (!num) return res.json({ error: "Number do ?number=9230xxxx" });
  num = num.replace(/[^0-9]/g, '');
  if (fs.existsSync('./pair/auth')) fs.rmSync('./pair/auth', { recursive: true, force: true });
  const { state, saveCreds } = await useMultiFileAuthState('./pair/auth');
  const sock = makeWASocket({
    auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" })) },
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    browser: ["ABBAS-MD", "Chrome", "1.0"]
  });
  sock.ev.on('creds.update', saveCreds);
  await delay(3000);
  if (!sock.authState.creds.registered) {
    try {
      const code = await sock.requestPairingCode(num);
      res.json({ code: code?.match(/.{1,4}/g)?.join("-") || code });
    } catch (e) {
      res.json({ error: e.message, tip: "Number sahi likho 923xxxxxxxx, 2 min wait karo" });
    }
  }
});

app.listen(3000, () => console.log("Running on 3000"));
