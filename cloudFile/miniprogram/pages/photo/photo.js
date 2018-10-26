// miniprogram/pages/photo/photo.js
const db = wx.cloud.database()
const photos = db.collection('getPhotos')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  downloadPhoto:function(){
    wx.cloud.downloadFile({
      fileID:this.data.photos,
      success: function(res) {
        wx.saveImageToPhotosAlbums({
          filePath: res.tempFilePath,
          success: function() {
            console.log('保存成功')
            wx.showToast({
              title: '保存成功',
              icon: 'success'
            })
          },
          fail: err=> {
            console.log(err)
          }
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    photos.doc(options.id).get({
      success: function(res) {
        this.setData({
          photo:res.data.image,
          id:options.id
        })
      }
    })
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