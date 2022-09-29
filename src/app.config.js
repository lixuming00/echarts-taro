export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/devices/index',
    'pages/profit/index',
    'pages/welcome/index',
    'pages/login/index',
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
      },
      {
        pagePath: 'pages/devices/index',
        text: '设备管理',
        iconPath: `./static/images/device.png`,
        selectedIconPath: './static/images/device_.png'
      },
      {
        pagePath: 'pages/profit/index',
        text: '提现记录',
        iconPath: `./static/images/list.png`,
        selectedIconPath: './static/images/list_.png'
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
