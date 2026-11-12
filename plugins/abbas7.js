const { smd } = require('../lib');
smd({ pattern: "abbas7", desc: "abbas md feature 7", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 7 Activated ✅*"); });
