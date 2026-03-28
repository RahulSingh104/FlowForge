# 🚀 FlowForge

FlowForge is a visual pipeline builder that allows users to create and manage node-based workflows using an interactive drag-and-drop interface.

## ✨ Features

- 🧩 Node-based workflow builder (Input, Output, LLM, Text)
- 🔗 Connect nodes visually using edges
- ⚙️ Dynamic node abstraction for scalable architecture
- 📝 Smart Text Node with variable parsing ({{variable}})
- 📈 Backend integration with FastAPI
- 🔍 Pipeline validation (node count, edge count, DAG detection)

## 🛠️ Tech Stack

- Frontend: React.js, React Flow
- Backend: FastAPI (Python)
- Styling: CSS / Tailwind (customizable)

## 🚀 How It Works

1. Create nodes and connect them to form a pipeline
2. Click "Submit" to send pipeline data to backend
3. Backend analyzes:
   - Number of nodes
   - Number of edges
   - Whether the pipeline is a DAG (Directed Acyclic Graph)
4. Displays results in a user-friendly alert

## 🎯 Purpose

This project demonstrates frontend architecture (component abstraction), graph-based logic, and fullstack integration.

---

💡 Built as part of a frontend technical assessment.