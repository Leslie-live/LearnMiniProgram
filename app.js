App({

  //1:小程序进入场景
  //2：监听生命周期函数






  // 生命周期函数   后台存活两个小时

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("小程序初始化完成了：function"),
    //异步调用
    wx.getUserInfo({
      // 数据拿到之前，在回调
      // success: function(res){
      //   console.log(res)
      // }
      
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log("界面显示出来 onShow")
    // console.log(options)
    switch (options.scene) {
      case 1001:
        
        break;
        case 1005:
        
        break;
    
      default:
        break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面被隐藏时候出发：onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("当小程序发生错误时候执行：onError")
  },
  globalData:{
    name:"codewhy",
    age:18
  }



})
