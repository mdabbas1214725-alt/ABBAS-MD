const { smd } = require('../lib');
smd({ pattern: "abbas50", desc: "abbas md feature 50", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 50 Activated ✅*"); });
