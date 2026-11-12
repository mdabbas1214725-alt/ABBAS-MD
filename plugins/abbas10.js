const { smd } = require('../lib');
smd({ pattern: "abbas10", desc: "abbas md feature 10", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 10 Activated ✅*"); });
