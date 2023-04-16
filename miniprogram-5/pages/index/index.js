// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    activeKey: 0,
    leftUser:[],
    userInfo:[],
    AllLsit:[]
  },
    // 详情页跳转details
    detailsCom(data){
      wx.navigateTo({
        url: "/pages/details/details?id="+data.currentTarget.dataset.id,
      })
    },
  // 事件处理函数
  bindViewTap() {
   
  },
  onLoad() {
    this.getLeft()
    this.getUserList()
    // wx.request({
    //   url: 'https://api.it120.cc/noodles/shop/goods/list',
    //   method:"POST",
    //   data:{},
    //   success: (res) => {
    //     this.setData({
    //     })
    //   }
    // })
  },
  // 菜单
  getUserList(){
    wx.request({
      url: 'https://api.it120.cc/noodles/shop/goods/list',
      method:"POST",
      data:{},
      success: (res) => {
        this.setData({
          AllLsit:res.data.data
        })
      }
    })
  },
  // 侧边栏
  getLeft(){
    wx.request({
      url: 'https://api.it120.cc/noodles/shop/goods/category/all',
      method:"GET",
      data:{},
      success: (res) => {
        this.setData({
          leftUser:res.data.data
        })
      }
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
