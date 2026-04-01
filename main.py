# main.py (Reference Implementation)
from fastapi import FastAPI, Query
from typing import List, Optional
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for frontend connectivity
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

KNOWLEDGE_BASE = [
    {"id": 1, "title": "React Hook", "content": "useMemo(() => compute(a, b), [a, b]); // 性能优化金矿"},
    {"id": 2, "title": "Python Decorator", "content": "@logger\ndef critical_function(): pass # 逻辑切面金矿"},
    {"id": 3, "title": "CSS Grid", "content": "display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));"},
    {"id": 4, "title": "SQL Index", "content": "CREATE INDEX idx_user_email ON users(email); // 查询加速金矿"},
    {"id": 5, "title": "Docker Multi-stage", "content": "FROM node:20 AS builder\nWORKDIR /app\nCOPY . .\nRUN npm run build"},
    {"id": 6, "title": "FastAPI Endpoint", "content": "@app.get('/api/retrieve')\nasync def retrieve(query: str): return results"}
]

@app.get("/api/retrieve")
async def retrieve(query: Optional[str] = "", top_k: int = 3):
    results = [
        item for item in KNOWLEDGE_BASE 
        if query.lower() in item["content"].lower() or query.lower() in item["title"].lower()
    ]
    return results[:top_k]

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3000)
