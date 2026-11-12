const { smd } = require('../lib');
smd({ pattern: "abbas4", desc: "abbas md feature 4", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 4 Activated ✅*"); });
