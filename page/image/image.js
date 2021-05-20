// page/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:""
  },
  handleChoosePic(){
    //系统api，让用户在相册中选择图片或者拍照
    wx.chooseImage({
      success:(res) => {
        //1：取出路径
        const path = res.tempFilePaths[0];
        //设置imagepath
        this.setData({
          imagePath : path
        })
      }
    })
  },
  zyhandImageLoad(){
    console.log("图片加载完成")
  }


})