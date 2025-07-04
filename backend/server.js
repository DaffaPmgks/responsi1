
// backend/server.js
const express = require('express');
const cors    = require('cors');
const { educationHistory, skills, projects } = require('./data');

const app = express();
app.use(cors());
app.use(express.json());           // ⬅️  Tambahkan ini untuk membaca body JSON

// ─── ROUTES ─────────────────────────────────────────────
// Root info
app.get('/', (_, res) => {
  res.send('REST API is running. Endpoints: /api/skills, /api/projects, /api/educationHistory');
});

// ==== READ (GET) ====================================================
app.get('/api/skills',           (_, res) => res.json(skills));
app.get('/api/projects',         (_, res) => res.json(projects));
app.get('/api/educationHistory', (_, res) => res.json(educationHistory));

// ==== CREATE (POST) =================================================
app.post('/api/skills', (req, res) => {
  const { name, level } = req.body;
  if (!name || !level) return res.status(400).json({ msg: 'name & level wajib' });

  const newSkill = { id: Date.now(), name, level };
  skills.push(newSkill);
  res.status(201).json(newSkill);
});

// ==== UPDATE (PUT) ==================================================
app.put('/api/skills/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = skills.findIndex(s => s.id === id);
  if (idx === -1) return res.status(404).json({ msg: 'skill tidak ditemukan' });

  skills[idx] = { ...skills[idx], ...req.body };
  res.json(skills[idx]);
});

// ==== DELETE ========================================================
app.delete('/api/skills/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = skills.findIndex(s => s.id === id);
  if (idx === -1) return res.status(404).json({ msg: 'skill tidak ditemukan' });

  const removed = skills.splice(idx, 1)[0];
  res.json(removed);
});
// ────────────────────────────────────────────────────────

// *listen* SELALU diletakkan PALING BAWAH
const PORT = 3000;
app.listen(PORT, () => console.log(`API ready → http://localhost:${PORT}`));
