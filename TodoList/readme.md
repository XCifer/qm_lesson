- 模板里有 if else for 指令  
    模板里存在业务逻辑 wx:if wx:else wx:for  

    界面状态 登录前，登陆后

    数据驱动界面状态
    hasUserInfo 决定界面有两种 wx:if wx:else

- 微信的生态和机制  
    小程序优势 可以获得用户信息，在微信里，  
    可以把小程序分享到讨论组  

    用户信息，隐私，要获取授权  
    button 询问  特殊 open-type="getUserInfo"
    bindgetuserinfo='getUserInfo' 
    block显示的过程  
- setData()  
  改变data里数据的值
  并且拥有让界面里里相关部分热更新的能力  

- wx:key  
    循环一定要加唯一性的key  
    列表纸发生改变  如果更接替换  整个列表的wxml 太浪费了，key，找到相应的那个进行更新