from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

origins = [
  "*"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins = origins,
  allow_credentials = True,
  allow_methods = ["GET"],
  allow_headers = ["*"],
)

@app.get("/getneowsinfo/{startdate}&{enddate}")
async def getneowsinfo(startdate: str, enddate: str):
  print(startdate, enddate)
  apikey = "bMnrC6qR1zVWGnGLPhdqzCaI9wk2f7Os6WINeNRQ"
  neowsinfo = requests.get(f"https://api.nasa.gov/neo/rest/v1/feed?start_date={startdate}&end_date={enddate}&api_key={apikey}")
  return {neowsinfo.text}
