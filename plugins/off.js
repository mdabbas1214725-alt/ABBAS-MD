const { smd } = require('../lib');
smd({ pattern: "off", desc: "bot off", category: "owner", filename: __filename, }, async (m) => { await m.send("_Bot shutting down..._"); process.exit(0); });
