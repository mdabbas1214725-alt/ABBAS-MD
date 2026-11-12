const { smd } = require('../lib');
smd({ pattern: "abbas23", desc: "abbas md feature 23", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 23 Activated ✅*"); });
