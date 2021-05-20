// page/home/home.js

// const app = getApp()

// const name = app.globalData.name
// const age = app.globalData.age

// console.log()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    "message":"哈哈哈哈",
    // 初始化数据
    list:[]

  },
  handleBtnClick() {
    console.log ("按钮被点击"),
    this.setData({
      message:"hhahahaha"
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  },

// --------------------1:监听页面的生命周期函数----------------
//页面被加载出来
   onload(){
    console.log("----------")
     wx.request({
       url: 'http://yapi.exmarttech.com/mock/58/v1/app/mini_pro/activity/my_apply_list',
       success:(res) => {
         console.log(res);
         const data = res.data.data.list;
         this.setData({
           list:data

         })
       }
     })

     onsole.log("----------")

   },
   //页面显示出来
   onShow() {

  },
  //页面初次渲染完成时
   onReady(){

   },
   //当页面隐藏时候
   onHide() {

   },
   //
   onUnload() {

   },

   //---------------3：监听wxml的相关事件
   handleViewClick() {
     console.log("哈哈哈哈被点击了")
   },
   
   //---------------4：其他事件
   onPageScroll(obj){
    //  console.log(obj)
   },
   //监听页面滚动到底部
   onReachBottom(){
    console.log("页面滚动到底部")
   },
   //下拉刷新
   onPullDownRefresh(){
     console.log("页面下拉刷新")
   }







})