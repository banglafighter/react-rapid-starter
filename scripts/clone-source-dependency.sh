#!/bin/bash

DEPENDENCY_DIR="dependencies"
mkdirs "$DEPENDENCY_DIR"
cd "$DEPENDENCY_DIR"

git clone https://github.com/banglafighter/react-boot-spec.git
git clone https://github.com/banglafighter/react-rapid-app.git
git clone https://github.com/banglafighter/react-rapid-bootstrap.git
git clone https://github.com/banglafighter/react-rapid-i18n.git
