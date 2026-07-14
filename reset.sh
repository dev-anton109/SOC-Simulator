#!/bin/bash

# This script resets cgi-bin, node-modules
# package.json and package-lock.json .

rm -rf cgi-bin; rm -rf node-modules
rm package.json; rm package-lock.json

echo "Done."
