#!/bin/bash
#Iniciamos los 2 servicios:
echo "Iniciando mongodb y node"
node src/app.js & mongod
exit 0