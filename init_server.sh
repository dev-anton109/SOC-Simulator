#!/bin/bash

# Define the port you want to use
PORT=8000

[[ -f package.json ]] || { npm init -y && npm install express cors; }
[[ -d cgi-bin ]] || ./backend.sh

echo "Starting server on port $PORT..."
echo "Open your browser and go to http://localhost:$PORT"

# Run Python's built-in HTTP server
python3 -m http.server --cgi $PORT
