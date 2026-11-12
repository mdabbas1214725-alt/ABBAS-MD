const { smd } = require('../lib');
smd({ pattern: "abbas45", desc: "abbas md feature 45", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 45 Activated ✅*"); });
