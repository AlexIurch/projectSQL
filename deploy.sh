#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# Замініть <USERNAME> на ваше ім'я користувача на GitHub
# і projectSQL на ім'я вашого репозиторія
git push -f git@github.com:AlexIurch/projectSQL.git main:gh-pages

cd -
