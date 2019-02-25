var config = require("../../../wxc.config.js");
var appData = getApp();

Page({
    data: {
        goods: [],
        goodsIndex: config.mediaUrl + "/images/goods-index.jpg",
        goodsCoupon: config.mediaUrl + "/images/goods-coupon.jpg",
        goodsBanner: config.mediaUrl + "/images/goods-banner.jpg",
        showCouponDetail: !0,
        hiddenLoginModel: !0
    },
    //通过openId获取用户信息
    wxfetchUserInfoWithOpenID: function (openid) {
        debugger;
        var _this = this;
        wx.getSetting({
            success: function (ref) {
                debugger;
                console.log("输出 auth.openid -> ", openid);
                if (ref.authSetting["scope.userInfo"]) {
                    console.log("已经授权，无需弹出系统授权框，可以直接调用getUserInfo获取用户信息");
                    wx.getUserInfo({
                        lang: "zh_CN",
                        withCredentials: !0,
                        success: function (t) {
                            appData.globalData.userInfo = t.userInfo;
                            console.log("non-open-type UserInfo : ", appData.globalData.userInfo);
                            wx.setStorage({
                                key: "userInfo",
                                data: a.globalData.userInfo
                            });
                            _this.wxdecryptUserInfo(openid, t.rawData, t.signature, t.iv, t.encryptedData);
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(t);
                            }
                        }
                    });
                } else {
                    console.log("未授权，请调起授权登录");
                    _this.setData({
                        hiddenLoginModel: !1
                    });
                }
            }
        });
    },
    //弹窗授权单击授权
    comfirmLoginTapHandler: function (ref) {
        debugger;
        var _this = this;
        _this.setData({
            hiddenLoginModel: !0
        });
         console.log("open-type userinfo ", ref.detail);
         wx.setStorage({
            key: "userInfo",
            data: ref.detail.userInfo
        });
        _this.wxdecryptUserInfo(appData.globalData.openid, ref.detail.rawData, ref.detail.signature, ref.detail.iv, ref.detail.encryptedData);
    },
    //用户信息保存数据库（用户信息提交后台解密，保存）
    wxdecryptUserInfo: function (openid, rawData, signature, iv, encryptedData) {
        wx.request({
            url: config.apiUrl + "/wxc/wxxcx/sendUserinfo.aspx",
            method: "POST",
            data: {
                openid: openid,
                rawData: rawData,
                signature: signature,
                iv: iv,
                encryptedData: encryptedData
            },
            success: function (ref) {
                console.log("解析用户信息&保存数据库成功 : ", ref);
                 wx.setStorage({
                    key: "userid",
                    data: ref.data
                });
                appData.globalData.userid = parseInt(ref.data);
            },
            fail: function (ref) {
                console.log("解析用户信息&保存数据库错误 : ", ref);
            }
        });
    },
    //弹出领取优惠证窗体
    goodsCouponTapHandler: function (ref) {
        var _this = this;
        if(0 === appData.globalData.userid && "" !== appData.globalData.openid ){
            console.log("开始授权！");
            _this.wxfetchUserInfoWithOpenID(appData.globalData.openid)
        }
        _this.setData({
            showCouponDetail: !1
        });
    },
    //领取优惠卷
    GetCouponTapHandler: function (e) {
        var _this = this;
        wx.request({
            url: config.apiUrl + "/coupon/new",
            method: "POST",
            data: {
                openid: appData.globalData.openid,
                userid: appData.globalData.userid,
                coupon_id: 1,
                coupon_name: "小黄人立减红包",
                status: 0,
                source: 5
            },
            success: function (ref) {
                wx.showToast({
                    title: "领取成功",
                    image: "../../../images/success.png",
                    duration: 1e3,
                    mask: !0,
                    success: function () {},
                    fail: function () {},
                    complete: function () {}
                });
            }
        });
        _this.setData({
            showCouponDetail: !0
        });
    },
    //跳转产品详情页面
    goodsBannerTapHandler: function () {
        var _this = this;
        if(0 === appData.globalData.userid && "" !== appData.globalData.openid){
            console.log("开始授权！");
            _this.wxfetchUserInfoWithOpenID(appData.globalData.openid)
        }
        var param="goodsID=" + _this.data.goods[0].goodsID + "&price=" + _this.data.goods[0].price + "&title=" + _this.data.goods[0].goods_title;
        wx.navigateTo({
            url: "/pages/product/goods/goods?" + param
        });
    },
    onLoad: function (e) {
        var _this= this;
        wx.showLoading({
            title: "努力加载 ..."
        });
        console.log("产品首页 app ->", appData.globalData);
        if(0 === appData.globalData.userid && "" !== appData.globalData.openid ){
            console.log("已经授权！");
            _this.wxfetchUserInfoWithOpenID(appData.globalData.openid);
        }
        //获取产品
        wx.request({
            url: config.apiUrl + "/goods",
            method: "POST",
            success: function (ref) {
                ref.data.data.forEach(function (item) {
                    item.price = item.price / 100;
                });
                _this.setData({
                    goods: ref.data.data
                });
                console.log(_this.data.goods);
            },
            fail: function (ref) {
                console.log("failure from ", config.apiUrl + "/goods"), console.log(ref);
            },
            complete: function () {
                wx.hideLoading();
            }
        });
    },
    ////跳转产品详情页面
    buynowTapHandler: function (e) {
        var id = e.currentTarget.id;
        var _this=this;
        if(0 === appData.globalData.userid && "" !== appData.globalData.openid ){
            console.log("开始授权！");
            _this.wxfetchUserInfoWithOpenID(appData.globalData.openid);
        }
        var param = "goodsID=" + _this.data.goods[id].goodsID + "&price=" + _this.data.goods[id].price + "&title=" + _this.data.goods[id].goods_title;
        wx.navigateTo({
            url: "/pages/product/goods/goods?" + param
        });
    },
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    onShareAppMessage: function () {
        return {
            title: "小黄人守护儿童乘车安全底线",
            path: "/pages/product/index/index",
            imageUrl: config.mediaUrl + "/images/goods-share.jpg",
            success: function (o) {},
            fail: function (o) {},
            complete: function () {}
        };
    }
});