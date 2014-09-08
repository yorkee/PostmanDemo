#! /bin/bash

type node >/dev/null 2>&1 || { echo >&2 "I require node.js, but it's not installed.  Aborting."; exit 1; }
type mongo >/dev/null 2>&1 || { echo >&2 "I require MongoDB, but it's not installed.  Aborting."; exit 1; }

echo >&2 "Found node.js and MongoDB..."
echo >&2 "Invoking node.js package manager for dependencies..."
npm install
echo >&2 "Packages installed."
exit 0