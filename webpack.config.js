module.exports = {
    entry:'./src/app/index.js',
    output:{
        path: __dirname + '/src/public', 
        filename: 'bundle.js'
    },
    node:{
        fs:'empty',
        tls: 'empty',
       net: 'empty',
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              options: {
                  presets: ['env', 'react', 'es2015'],
                  plugins: ['transform-class-properties']
              }
        },


        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          },
          {
          test: /\.(sa|sc|c)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.mp4$/,
          use: 'file-loader?name=videos/[name].[ext]',
         }
    ]
    }
};