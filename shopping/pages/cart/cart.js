// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hasList: false,
        carts: [],
        totalPrice: 0,
        selectAllStatus: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    selectedList: function (e) {
        const index = e.currentTarget.dataset.index;
        const carts = this.data.carts;   
        carts[index].selected = !carts[index].selected;
        this.setData({
            carts:carts,
            selectAllStatus:this.getSelectStatus(),
            totalPrice:this.getTotalPrice()
        })

    },
    deleteList:function(e){
        let index = e.currentTarget.dataset.index;
        let carts = this.data.carts;
        carts = carts.filter((element,i)=>{
            return index!=i;
        })
        this.setData({
            carts:carts
        })
        this.setData({
            selectAllStatus:this.getSelectStatus(),
            totalPrice:this.getTotalPrice(),

        })
        console.log(carts,this.data.totalPrice);
        if(carts.length==0){
            this.data.hasList = false;
        }
    }, 
    selectAll:function(){
        let selectAllStatus = this.data.selectAllStatus;
        let carts = this.data.carts;
        carts.forEach(element => {
            element.selected = !selectAllStatus;
        });
        this.setData({carts:carts,
            selectAllStatus:this.getSelectStatus(),
            totalPrice:this.getTotalPrice()
        })
    },
    minusCount:function(e){
        const index = e.currentTarget.dataset.index;
        const carts = this.data.carts;
        if (carts[index].num>1)
            carts[index].num--;
        this.setData({
            carts:carts,
            totalPrice:this.getTotalPrice()
        })
    },
    addCount:function(e){
        const index = e.currentTarget.dataset.index;
        const carts = this.data.carts;     
        carts[index].num++;
        this.setData({
            carts:carts,
            totalPrice:this.getTotalPrice()
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        setTimeout(() => {
            this.setData({
                hasList: true,
                carts: [
                    {
                        id: 1, title: 'iphone',
                        image:"/image/s5.png"
                        ,num: 1, price: 867, selected: true
                    },
                    {
                        id: 2, title: 'ipad',
                        image:"/image/s6.png",
                        num: 1, price: 450, selected: true
                    },
                    {
                        id: 3, title: '刀',
                        image:"/image/s4.png",
                        num: 1, price: 4, selected: false
                    }
                ]
            })
            this.setData({
                totalPrice: this.getTotalPrice()
            })
        }, 1000);
    },
    getTotalPrice: function () {
        let carts = this.data.carts;
        let total = 0;
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].selected) {
                total += carts[i].num * carts[i].price;
            }
        }
        return total.toFixed(2)

    },
    getSelectStatus:function(){
        let carts = this.data.carts;
        for (let i = 0; i < carts.length; i++) {
            if (!carts[i].selected) {
                return false;
            }         
        }
        return true;
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
