const { smd } = require('../lib');
smd({ pattern: "abbas16", desc: "abbas md feature 16", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 16 Activated ✅*"); });
