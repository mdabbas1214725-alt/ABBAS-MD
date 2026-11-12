const express = require('express');
const { default: makeWASocket, useMultiFileAuthState, delay, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');
const pino = require('pino');
const app = express();

app.get('/', (req, res) => {
  res.send('<h2 style="text-align:center;font-family:sans-serif">ABBAS-MD Pair Site Working ✅</h2><p style="text-align:center">Use /code?number=92300xxxxxxx</p>');
});

app.get('/code', async (req, res) => {
  let num = req.query.number;
  if (!num) return res.status(400).json({ error: "Number ?number=9230xxxx" });
  num = num.replace(/[^0-9]/g, '');
  const { state, saveCreds } = await useMultiFileAuthState('./auth');
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
      let code = await sock.requestPairingCode(num);
      code = code?.match(/.{1,4}/g)?.join("-") || code;
      res.json({ code: code, status: "ABBAS-MD Pair Success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  } else {
    res.json({ message: "Already paired" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("ABBAS-MD Pair Running on " + PORT));
