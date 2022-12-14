module.exports = {
  theme: {
    'primary-color': '#1a47b0',
  },
  // px2viewportOptions: {
  //   unitToConvert: 'px',		// (String) 需要转换的单位，默认为"px"
  //   viewportWidth: 1920,		// (Number) 设计稿的视口宽度
  //   // viewportHeight: 900,			// (Number) 设计稿的视口高度
  //   unitPrecision: 5,			// (Number) 单位转换后保留的精度
  //   propList: ['*'],			//  (Array) 能转化为vw的属性列表
  //   viewportUnit: 'vw',		//  (String) 希望使用的视口单位
  //   fontViewportUnit: 'vw',	// (String) 字体使用的视口单位
  //   selectorBlackList: [],	// (Array) 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
  //   minPixelValue: 1,			// (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
  //   mediaQuery: false,		//  (Boolean) 媒体查询里的单位是否需要转换单位
  //   replace: true,			// (Boolean) 是否直接更换属性值，而不添加备用属性
  //   exclude: [],///(\/|\\)(node_modules)(\/|\\)/,			//  (Array or Regexp) 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
  //   landscape: false,			// (Boolean) 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
  //   landscapeUnit: 'vw',
  //   landscapeWidth: 1920
  // },
  devServer: {
    proxy: {
      '/m1': {
        target: 'http://127.0.0.1:4523',
        // http://127.0.0.1:4523/m1/1239079-0-default/api/v2/operation/login
        // target: 'https://devops.cspiretech.com',
        // pathRewrite: { '^/api/devops': '' },
        changeOrigin: true,
      }
    }
  }
}


