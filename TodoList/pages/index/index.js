//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    status: 1,//任务状态 
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    lists: [{
      text: '看电影',
      status: 1
    }, {
      text: '吃饭',
      status: 0
    }],
    curLists: [
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {

  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    setTimeout(() => {
      this.setData({
        curLists: this.data.lists
      })
    }, 2000);
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  addTodoShow() {
    const list = this.data.lists;
    list.push({ "text": "dadadsa" })
    this.setData({
      lists: list
    })
  },
  showStatus(e) {
    let status = e.currentTarget.dataset.status;
    if (status == this.data.status) return;
    let lists = this.data.lists;
    lists.filter((item) => {
      return item.status == status
    })

    this.setData({
      status: status
    })
  }
})
