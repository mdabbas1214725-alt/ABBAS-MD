const { smd } = require('../lib');
smd({ pattern: "abbas9", desc: "abbas md feature 9", category: "abbas", filename: __filename, }, async (m) => { await m.send("*ABBAS-MD Feature 9 Activated ✅*"); });
