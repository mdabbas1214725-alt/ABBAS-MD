const { smd } = require('../lib');
smd({ pattern: "abbas12", desc: "abbas md feature 12", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 12 Activated ✅*"); });
