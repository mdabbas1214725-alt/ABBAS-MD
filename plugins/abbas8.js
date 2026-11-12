const { smd } = require('../lib');
smd({ pattern: "abbas8", desc: "abbas md feature 8", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 8 Activated ✅*"); });
