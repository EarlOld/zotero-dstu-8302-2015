#!/bin/bash

# Script to copy the CSL file and start the citation server
# Usage: ./run-server.sh

set -e

PROJECT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
CSL_FILE="${PROJECT_ROOT}/dstu-8302-2015.csl"
CITEPROC_DIR="${PROJECT_ROOT}/citeproc-node"
CITEPROC_CSL_DIR="${CITEPROC_DIR}/csl"

echo "🚀 Starting ДСТУ 8302:2015 Citation Server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check if CSL file exists
if [ ! -f "$CSL_FILE" ]; then
    echo "❌ Error: CSL file not found at $CSL_FILE"
    exit 1
fi

echo "📋 Copying CSL file..."
cp "$CSL_FILE" "$CITEPROC_CSL_DIR/"
echo "✅ CSL file copied to $CITEPROC_CSL_DIR/"

echo ""
echo "📦 Starting web server..."
echo "Server will run on http://localhost:8085"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

cd "$CITEPROC_DIR"
npm start
