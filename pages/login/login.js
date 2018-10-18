// pages/login/login.js
var app = getApp()
Page({
  data: {
    username: '',
    password: ''
  },

  // 获取输入账号
  usernameInput: function(e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function() {
    var Username = this.data.username;
    var Password = this.data.password;
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名密码为空',
        icon: 'loading',
        duration: 2000
      })
    }
    else{
      wx.request({
        url: 'https://sharingumbra.cn/userlogin.php',
        data: {
          username:Username,
          password:Password
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        method: "POST",
        success: function (res) {
          //console.log('返回的code' + res.data)
          if (res.data == '300') { //这里修改成跳转的页面        
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 2000
            }),
            wx.navigateTo({
              url: '../index/index'
            })
          }
          else if (res.data == '400') {
            wx.showToast({
              title: '账号密码不存在',
              icon: 'loading',
              duration: 2000
            })
          }
          else {
            wx.showToast({
              title: '出错',
              icon: 'loading',
              duration: 2000
            })
          }
        }  
      })
    }
  } 
})