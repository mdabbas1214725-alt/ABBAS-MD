const { smd } = require('../lib');
smd({ pattern: "abbas15", desc: "abbas md feature 15", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 15 Activated ✅*"); });
