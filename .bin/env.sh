#!/bin/bash

# Copies env/project_x.js  to common/project.js depending on "ENV"
_ENV=${ENV:-dev}
echo "Using project_$_ENV.js"
cp ./env/project_$_ENV.js ./common/project.js
