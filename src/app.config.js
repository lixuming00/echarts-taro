export default defineAppConfig({
  pages: [
    'pages/home/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fbda31',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    backgroundColor: '#BCBCBC',
    enablePullDownRefresh: false
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: `./static/images/home.png`,
        selectedIconPath: './static/images/home_.png'
      }
    ],
    'color': '#BDBDBD',
    'selectedColor': '#fbda31',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  usingComponents: {
    "ec-canvas": './components/ec-canvas/ec-canvas'
  }
})
