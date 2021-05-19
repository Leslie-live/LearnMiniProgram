// page/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "message":"哈哈哈哈"

  },
  handleBtnClick() {
    console.log ("按钮被点击"),
    this.setData({
      message:"hhahahaha"
    })
  }

})