const { smd } = require('../lib');
smd({ pattern: "abbas30", desc: "abbas md feature 30", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 30 Activated ✅*"); });
