# from fastapi import FastAPI, Form

# app = FastAPI()

# @app.get('/')
# def read_root():
#     return {'Ping': 'Pong'}

# @app.post('/pipelines/parse')
# def parse_pipeline(pipeline: str = Form(...)):
#     return {'status': 'parsed'}




from fastapi import FastAPI

app = FastAPI()

@app.post("/pipelines/parse")
async def parse_pipeline(data: dict):
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    num_nodes = len(nodes)
    num_edges = len(edges)

    def is_dag(nodes, edges):
        graph = {node['id']: [] for node in nodes}

        for edge in edges:
            graph[edge['source']].append(edge['target'])

        visited = set()
        rec_stack = set()

        def dfs(node):
            if node in rec_stack:
                return False
            if node in visited:
                return True

            visited.add(node)
            rec_stack.add(node)

            for neighbor in graph[node]:
                if not dfs(neighbor):
                    return False

            rec_stack.remove(node)
            return True

        return all(dfs(node) for node in graph)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag(nodes, edges)
    }