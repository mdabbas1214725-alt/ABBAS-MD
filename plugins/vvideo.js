const { smd } = require('../lib');
smd({ pattern: "vvideo", desc: "view once video", category: "owner", filename: __filename, }, async (m, match, { conn }) => { let q = m.quoted; if (!q) return await m.send("*Reply to view-once video*"); await conn.sendMessage(m.chat, { video: await q.download(), caption: q.caption || "" }, { quoted: m }); });
