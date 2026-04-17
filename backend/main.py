from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Create FastAPI app instance
app = FastAPI()

# Enable CORS (Cross-Origin Resource Sharing)
# This allows your frontend (React, etc.) to call this API from any origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (use specific domains in production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Request body model using Pydantic
class Number(BaseModel):
    number: int  # Input number for factorial calculation


# POST endpoint to calculate factorial
@app.post("/factorial")
def calculate_fact(data: Number):
    try:
        n = data.number  # Extract number from request body

        # Initialize factorial result
        fact = 1

        # Compute factorial using loop
        for i in range(1, n + 1):
            fact *= i

        # Return result as JSON
        return {"result": fact}

    except Exception as e:
        # Handle unexpected errors gracefully
        return {"result": "Something went wrong. Please try again later."}
