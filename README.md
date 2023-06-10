# ISW_PARCIAL2
Repositorio para el parcial 2 de CI/CD


"build": "echo \"Compilando la aplicación...\" && node app.js",
"deploy": "echo \"Desplegando la aplicación...\""


 steps:
      - name: Deploy to production
        uses: johnbeynon/render-deploy-action@v0.0.8
        with:
          service-id: ${{ secrets.SERVICE_ID}}
          api-key: ${{ secrets.RENDER_API_KEY}}

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