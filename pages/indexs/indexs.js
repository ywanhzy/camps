// pages/indexs/indexs.js
var CONFIG = require('../../utils/config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0,
    selectCurrent: 0,
    hasNoCoupons: true,
    strText: "11111",
    coupons: [],
  },
  goToQr: function () {
    wx.navigateTo({
      url: '../qrcode/qrcode'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //playingList
    wx.request({
      url: CONFIG.API_URL.GET_CamperRecommend,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        // that.data.coupons = res.data.data
        // that.data.hasNoCoupons=false
        // that.data.strText = "sfdsfdfdfsd"
        console.log(res.data)
        if (res.data.res_code == 200) {
          console.log("ok")
          that.setData({
            hasNoCoupons: false,
            coupons: res.data.data,
            strText: "dfsdfdssd"
          });
        }

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
  onShareAppMessage: function (options) {
    console.log('onShareAppMessage')
    var shareObj = {
      title: '标题',
      desc: '描述',
      path: '/pages/index/index',
      success: function () {
        console.log('success')
      },
      fail: function () {
        console.log('fail')
      },
      complete: function () {
        // 转发结束之后的回调（转发成不成功都会执行）
      }
    };

    // 来自页面内的按钮的转发
    if (options.from == 'button') {
      var eData = options.target.dataset;
      console.log(eData.name);     // shareBtn
      // 此处可以修改 shareObj 中的内容
      shareObj.path = '/pages/btnname/btnname?btn_name=' + eData.name;
    }
    // 返回shareObj
    return shareObj;
  }
})