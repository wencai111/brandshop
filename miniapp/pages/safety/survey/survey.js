var a = require("../../../data/question.js"), e = require("../../../osann.config.js"), t = getApp();

Page({
    data: {
        titleURL: "../../../images/title-rule.png",
        qsList: [],
        questionText: "",
        answerA: "",
        answerB: "",
        answerC: "",
        result: "",
        resultText: "回答错误",
        answerText: "答案：",
        tip: "",
        qimage: "",
        viewIndex: 0,
        hiddenResultModal: !0,
        btnstyle: "btncontinue.png",
        resultImage: "",
        btnStartImage: e.mediaUrl + "/images/btnstart.png",
        surveyBackground: e.mediaUrl + "/images/safety-survey-background.jpg",
        sharingImagePath: ""
    },
    onLoad: function(e) {
        this.setData({
            qsList: a.safetyQuestions
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        console.log("reset survey ...");
        var a = this;
        t.globalData.qIndex = 0, t.globalData.score = 0, a.setData({
            questionText: "",
            answerA: "",
            answerB: "",
            answerC: "",
            result: "",
            resultText: "回答错误",
            answerText: "答案：",
            tip: "",
            qimage: "",
            viewIndex: 0,
            hiddenResultModal: !0,
            btnstyle: "btncontinue.png"
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(a) {
        return {
            title: "测一测安全底线在哪里",
            path: "/pages/safety/survey/survey",
            imageUrl: e.mediaUrl + "/images/survey-share.jpg",
            success: function(a) {},
            fail: function(a) {},
            complete: function() {}
        };
    },
    startSurveyTapHandler: function(a) {
        var e = this;
        t.globalData.qIndex = 0, e.setData({
            viewIndex: 1,
            titleURL: "../../../images/title-question.png",
            questionText: e.data.qsList[t.globalData.qIndex].question,
            answerA: e.data.qsList[t.globalData.qIndex].answerA,
            answerB: e.data.qsList[t.globalData.qIndex].answerB,
            answerC: e.data.qsList[t.globalData.qIndex].answerC,
            qimage: "../../../images/" + e.data.qsList[t.globalData.qIndex].qimage,
            result: e.data.qsList[t.globalData.qIndex].result
        });
    },
    answerTapHandler: function(a) {
        var e = "回答错误", s = this;
        s.data.result == a.currentTarget.id && (e = "回答正确", t.globalData.score += 10), s.setData({
            hiddenResultModal: !1,
            resultText: e,
            answerText: "答案：" + s.data.result,
            tip: s.data.qsList[t.globalData.qIndex].tip
        });
    },
    nextTapHandler: function() {
        var a = this;
        if (0 <= t.globalData.qIndex && 9 > t.globalData.qIndex) t.globalData.qIndex++, 
        a.setData({
            hiddenResultModal: !0,
            questionText: a.data.qsList[t.globalData.qIndex].question,
            answerA: a.data.qsList[t.globalData.qIndex].answerA,
            answerB: a.data.qsList[t.globalData.qIndex].answerB,
            answerC: a.data.qsList[t.globalData.qIndex].answerC,
            qimage: "../../../images/" + a.data.qsList[t.globalData.qIndex].qimage,
            result: a.data.qsList[t.globalData.qIndex].result
        }), 9 == t.globalData.qIndex && a.setData({
            btnstyle: e.mediaUrl + "/images/btncompleted.png"
        }); else if (9 == t.globalData.qIndex) {
            t.globalData.qIndex = 0, a.setData({
                viewIndex: 2,
                titleURL: "../../../images/title-result.png"
            }), console.log("Score : ", t.globalData.score);
            var s = "";
            100 == t.globalData.score ? s = "../../../images/best.png" : 80 == t.globalData.score || 90 == t.globalData.score ? s = "../../../images/good.png" : 60 == t.globalData.score || 70 == t.globalData.score ? s = "../../../images/qualified.png" : 60 > t.globalData.score && (s = "../../../images/non-qualified.png"), 
            a.setData({
                resultImage: s
            }), t.globalData.score = 0;
        }
    },
    snapshotTapHandler: function() {
        var a = this;
        console.log("create snapshot image ..."), wx.showLoading({
            title: "正在生成 ..."
        });
        var e = wx.createCanvasContext("sharingCanvas", a);
        e.drawImage("../../../images/safety-survey-background.jpg", 0, 0, 750, 1206), e.drawImage("../../../images/title-result.png", 212, 215, 335, 72), 
        e.drawImage("../../../images/wxqrcode.png", 125, 923, 500, 185), wx.getStorage({
            key: "userInfo",
            success: function(t) {
                console.log(t.data), wx.getImageInfo({
                    src: t.data.avatarUrl,
                    success: function(t) {
                        console.log("local avatar info is ", t), e.drawImage(t.path, 290, 662, 136, 136), 
                        e.drawImage(a.data.resultImage, 41, 324, 668, 553), e.draw(), setTimeout(function() {
                            wx.canvasToTempFilePath({
                                canvasId: "sharingCanvas",
                                success: function(e) {
                                    console.log(e.tempFilePath), a.setData({
                                        sharingImagePath: e.tempFilePath,
                                        viewIndex: 3
                                    }), wx.hideLoading();
                                },
                                fail: function(a) {
                                    console.log(a);
                                }
                            }, a);
                        }, 200);
                    }
                });
            }
        });
    },
    saveImageTapHandler: function(a) {
        console.log("保存到相册");
        var e = this;
        wx.getSetting({
            success: function(a) {
                a.authSetting["scope.writePhotosAlbum"] ? e.saveImageToPhotosAlbum() : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function(a) {
                        e.saveImageToPhotosAlbum();
                    },
                    fail: function(a) {
                        wx.showToast({
                            title: "存储海报失败"
                        });
                    }
                });
            }
        });
    },
    saveImageToPhotosAlbum: function() {
        var a = this;
        wx.saveImageToPhotosAlbum({
            filePath: this.data.sharingImagePath,
            success: function(e) {
                console.log("保存成功 ..."), wx.showToast({
                    title: "海报保存成功",
                    icon: "success",
                    complete: function(e) {
                        a.setData({
                            viewIndex: 2
                        });
                    }
                });
            },
            fail: function() {
                wx.showToast({
                    title: "海报保存失败",
                    icon: "none"
                });
            }
        });
    }
});