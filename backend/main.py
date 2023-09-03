from fastapi import FastAPI, Request
from backend.addMiddleware import addMiddleware
from user import userRouter as userRouter

app = FastAPI()
addMiddleware(app)

app.include_router(userRouter)


# root 읽기
@app.get("/")
async def read_root(request: Request):
    if request is None:
        return {"message": "Request is None"}

    domain = request.headers.get("host")
    return {
        "message": f"Hello from {domain}, You are succesfully connected to API server"
    }
