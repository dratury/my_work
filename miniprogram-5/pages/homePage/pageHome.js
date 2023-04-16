// pages/homePage/pageHome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList:[],
    userList:{},
    List:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getImage(),
    this.getUser()
    this.getList()
  },
  // 详情页跳转details
  detailsCom(data){
    wx.navigateTo({
      url: "/pages/details/details?id="+data.currentTarget.dataset.id,
    })
  },
  // 店家推荐
  getList(){
    wx.request({
      url: 'https://api.it120.cc/noodles/shop/goods/list',
      method:"POST",
      data:{},
      success: (res) => {
        this.setData({
          List:res.data.data
        })
      }
    })
  },
  // 餐厅介绍
  getUser(){
    wx.request({
      url: 'https://api.it120.cc/noodles/shop/subshop/list',
      method:"POST",
      data:{},
      success: (res) => {
        this.setData({
          userList:res.data.data[0]
        })
      }
    })
  },
  // 轮播图
  getImage(){
    wx.request({
      url: 'https://api.it120.cc/noodles/banner/list',
      method:"GET",
      data:{},
      success: (res) => {
        this.setData({
          imageList:res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})