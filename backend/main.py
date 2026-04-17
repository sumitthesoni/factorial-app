from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Number(BaseModel):
    number:int

@app.post("/factorial")
def calculate_fact(data:Number):
    try:
        n=data.number

        fact=1
        for i in range(1,n+1):
            fact*=i
        
        return {"result":fact}
    except:
        return {"result":"Something went wrong try again later"}
        
