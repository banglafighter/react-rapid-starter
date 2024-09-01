#!/bin/bash

DEPENDENCY_DIR="dependencies"
mkdir -p "$DEPENDENCY_DIR"
cd "$DEPENDENCY_DIR"

git clone https://github.com/banglafighter/react-boot-spec.git -b dev
git clone https://github.com/banglafighter/react-rapid-app.git -b dev
git clone https://github.com/banglafighter/react-rapid-bootstrap.git -b dev
git clone https://github.com/banglafighter/react-rapid-i18n.git -b dev
