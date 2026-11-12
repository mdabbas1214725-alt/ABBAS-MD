const { smd } = require('../lib');
smd({ pattern: "abbas5", desc: "abbas md feature 5", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 5 Activated ✅*"); });
