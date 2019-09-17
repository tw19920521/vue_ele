/* const data = require('./mock/data.json')

const seller = data.seller
const goods = data.goods
const ratings = data.ratings */

module.exports = {
  outputDir: 'dist',
  lintOnSave: false,
  devServer: {
		open: true,
		
/* mock 第一种*/
/*     before(app) {
      app.get('/seller', (req, res) => {
        res.json({
          errno: 0,
          data: seller
        })
      }),
        app.get('/goods', (req, res) => {
          res.json({
            errno: 0,
            data: goods
          })
        }),
        app.get('/ratings', (req, res) => {
          res.json({
            errno: 0,
            data: ratings
          })
        })
    } */
	},
	
  configureWebpack: {
    devServer: {
      port: 8000
    }
  }
}
