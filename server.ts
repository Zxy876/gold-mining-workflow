import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const KNOWLEDGE_BASE = [
    { id: 1, title: "React Hook", content: "useMemo(() => compute(a, b), [a, b]); // 性能优化金矿" },
    { id: 2, title: "Python Decorator", content: "@logger\ndef critical_function(): pass # 逻辑切面金矿" },
    { id: 3, title: "CSS Grid", content: "display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));" },
    { id: 4, title: "SQL Index", content: "CREATE INDEX idx_user_email ON users(email); // 查询加速金矿" },
    { id: 5, title: "Docker Multi-stage", content: "FROM node:20 AS builder\nWORKDIR /app\nCOPY . .\nRUN npm run build" },
    { id: 6, title: "FastAPI Endpoint", content: "@app.get('/api/retrieve')\nasync def retrieve(query: str): return results" }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route: /api/retrieve
  app.get("/api/retrieve", (req, res) => {
    const query = (req.query.query as string || "").toLowerCase();
    const top_k = parseInt(req.query.top_k as string || "3");
    
    const results = KNOWLEDGE_BASE.filter(item => 
        item.content.toLowerCase().includes(query) || 
        item.title.toLowerCase().includes(query)
    ).slice(0, top_k);
    
    res.json(results);
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
