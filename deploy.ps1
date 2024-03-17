# abort on errors
$ErrorActionPreference = "Stop"

# build
npm run build

# navigate into the build output directory
Set-Location dist

# if you are deploying to a custom domain and have a CNAME file
# Set-Content -Path 'CNAME' -Value 'www.example.com'

# initializing a new git repository
git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f 'git@github.com:<USERNAME>/<USERNAME>.github.io.git' main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# Replace <USERNAME> with your GitHub username
# and <REPO> with your repository name
git push -f 'git@github.com:AlexIurch/projectSQL.git' main:gh-pages

# navigating back to the root directory
Set-Location ..
