#!/bin/bash

# This script resets cgi-bin, node-modules
# package.json and package-lock.json .

rm -rf cgi-bin node_modules
rm package.json package-lock.json

echo "Done."
