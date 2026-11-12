const { smd } = require('../lib');
smd({ pattern: "abbas3", desc: "abbas md feature 3", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 3 Activated ✅*"); });
