# ISW_PARCIAL2
Repositorio para el parcial 2 de CI/CD


"build": "echo \"Compilando la aplicación...\" && node app.js",
"deploy": "echo \"Desplegando la aplicación...\""


#name: Build on push
#run-name: ${{ github.actor }} activo el flujo de trabajo
#on: 
#  push:
#    paths-ignore:
#      - ".github/**"
#
#jobs:
#  build:
#    runs-on: ubuntu-latest
#    steps:
#      - uses: actions/checkout@v3
#      - uses: actions/setup-node@v3
#        with:
#          node-version: '14'
#      - name: Build
#        env:
#          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID}}
#          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN}}
#        run:  npm install -g bats
#              bats -v
#              npx netlify-cliv deploy --dir=public --prod