const { smd } = require('../lib');
smd({ pattern: "abbas32", desc: "abbas md feature 32", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 32 Activated ✅*"); });
