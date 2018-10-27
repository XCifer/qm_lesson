// miniprogram/pages/index/index.js
const db = wx.cloud.database()
// const photos= db.collection('photos')
// const userInfo = db.collection('userInfo')

exports.main = async()=>{
  const photoInfo=[]
  const photos = await db.collection("photos").get()
  for (let i = 0; i < photos.data.length; i++) {
    const photo=photos[i]
    
  }
}

Page({
  http:function(){
    wx.cloud.callFunction({
      name:"http",
      data:{a:1}
    }).then(res=>{
      console.log(JSON.parse(res.result));
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})