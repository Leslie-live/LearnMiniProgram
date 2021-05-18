Page({
  data:{
    name:"CodeWhy-01",
    age:18,
    students:[
      {id:110,name:"code1",age:31},
      {id:111,name:"code2",age:32},
      {id:112,name:"code3",age:33}
    ],
    counter:0
  },
  handleBtnClick (){
    // 错误做法，数值可以改变，但是界面不会刷新
    // this.data.counter +=1;
    // console.log(this.data.counter)

    this.setData({
      counter:this.data.counter +1
    })
  },
  handlejianBtnClick(){
    this.setData({
      counter:this.data.counter -1
    })
  }

})