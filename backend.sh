#!/usr/bin/env bash

[[ ! -d reports ]] && { echo "Directory: <reports> not found."; exit 1; }
[[ ! -d cgi-bin ]] && mkdir -p cgi-bin
cd reports


for file in *.txt; do
touch "$file".cgi
echo " " >> "$file".cgi
sed -i  '1i #!/bin/bash' "$file".cgi
while IFS= read -r line; do
echo "echo \"$line\"" >> "$file".cgi
done < "$file"
chmod +x "$file".cgi
mv "$file".cgi "$HOME"/SOC-simulator/cgi-bin
done
