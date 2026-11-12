const { smd } = require('../lib');
smd({ pattern: "abbas11", desc: "abbas md feature 11", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 11 Activated ✅*"); });
