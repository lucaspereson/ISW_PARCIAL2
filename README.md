# ISW_PARCIAL2
Repositorio para el parcial 2 de CI/CD


"build": "echo \"Compilando la aplicación...\" && node app.js",
"deploy": "echo \"Desplegando la aplicación...\""

const resultado1Element = document.getElementById("resultado1");
resultado1Element.innerHTML = '3^2 = ' + square(3);

const resultado2Element = document.getElementById("resultado2");
resultado2Element.innerHTML = '8^2 = ' + square(8);

     steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Install Render CLI
        run: |
          curl -fLo render https://render.com/static/render-cli-linux
          chmod +x render
          sudo mv render /usr/local/bin/

      - name: Deploy to Render.com
        run: render deploy -- --name lsp-isw

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



      - name: Deploy
        env:
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID}}
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN}}
        run:  npx netlify-cliv deploy --dir=public --prod