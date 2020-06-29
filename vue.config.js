module.exports = {
  devServer: {
    proxy: {
        '/jisuapi': {
            target: 'https://way.jd.com',
            ws: true,
            changeOrigin: true,
          //   pathRewrite: {
          //     '^/jisuapi': ''
          // }
        } 
    }
  },
  configureWebpack: {
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }  
  },
  
}