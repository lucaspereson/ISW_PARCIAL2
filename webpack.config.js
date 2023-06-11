const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'salida.js',
  },
  module: {
    rules: [
      // Reglas de carga para diferentes tipos de archivos
      // por ejemplo, transpilar archivos JS con Babel
    ],
  },
  // Otros plugins y configuraciones de Webpack
};
