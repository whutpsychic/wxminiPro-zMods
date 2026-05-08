// pages/main/main.ts
import { developing } from '@/appConfig'
import modMenu from '@/data/mods'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    modMenu,  // 模组菜单
  },

  // 点击选择菜单项
  onClickItem(e: any) {
    const item: ModItem = e.currentTarget.dataset.item;
    console.log(item)
    // 跳转到具体模组介绍页
    wx.navigateTo({
      url: `../${item.id}/${item.id}`,
    })
  },

  // 声明
  statement() {
    wx.showModal({
      title: '声明',
      content: '凡是未收录至本手册的模组，默认都被视为不再维护。感谢您长久以来的选择与消费。',
      confirmText: '好的',
      cancelText: '知道了',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    if (!developing) {
      this.statement()
    }
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