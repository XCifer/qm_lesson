const app = getApp();
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    console.log('应用启动了')
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bca995ee6742c1bf8220c35/ikcamp/video#!method=get',
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        // const {slides,vehicles,stories} = res.data ;
        // console.log(slides,vehicles,stories);
        // this.globalData.slides = slides;
        // this.globalData.vehicles = vehicles;
        // this.globalData.stories = stories;
        console.log(res.data)
        Object.assign(this.globalData,res.data)
        console.log(this.globalData)
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData:{//不会自动运行
    // userInfo: null
    motto:"test"
  }
})