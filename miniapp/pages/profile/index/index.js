var config = require("../../../wxc.config.js");

getApp();

Page({
    data: {
        goonImage: config.mediaUrl + "/images/goon.png"
    },
    onLoad: function(o) {},
    unpaidOrder: function() {
        wx.navigateTo({
            url: "/pages/product/orderlist/orderlist?status=0"
        });
    },
    unshippedOrder: function() {
        wx.navigateTo({
            url: "/pages/product/orderlist/orderlist?status=1"
        });
    },
    unreceiptOrder: function() {
        wx.navigateTo({
            url: "/pages/product/orderlist/orderlist?status=2"
        });
    },
    refundingOrder: function() {
        wx.navigateTo({
            url: "/pages/product/orderlist/orderlist?status=3"
        });
    },
    completedOrder: function() {
        wx.navigateTo({
            url: "/pages/product/orderlist/orderlist?status=4"
        });
    },
    addressTapHandler: function(o) {
        wx.chooseAddress({
            success: function(o) {
                console.log(o.userName), console.log(o.postalCode), console.log(o.provinceName), 
                console.log(o.cityName), console.log(o.countyName), console.log(o.detailInfo), console.log(o.nationalCode), 
                console.log(o.telNumber);
            }
        });
    },
    makePhoneCallTapHandler: function(o) {
        wx.makePhoneCall({
            phoneNumber: "027-87228982"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});