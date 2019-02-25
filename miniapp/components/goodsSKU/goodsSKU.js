function e(e, n, a) {
    return n in e ? Object.defineProperty(e, n, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = a, e;
}

var config = require("../../wxc.config.js");

Component({
    properties: {
        goods: {
            type: Object,
            value: {
                price: parseFloat(419).toFixed(2),
                title: "测试商品标题",
                skus: [ {
                    name: "minions Vacation",
                    checked: !0
                }, {
                    name: "minions Eyes",
                    checked: !1
                }, {
                    name: "minions Banane",
                    checked: !1
                }, {
                    name: "minions Mel&Kevin&Bob",
                    checked: !1
                } ],
                images: []
            }
        },
        skuimage: {
            type: String
        },
        num: {
            type: Number,
            value: 1
        },
        hidden: {
            type: Boolean
        }
    },
    data: {
        currentIndex: 0
    },
    methods: {
        closeSkuModal: function(e) {
            this.triggerEvent("closeSkuModal");
        },
        buyConfirm: function(e) {
            var n = this, a = {
                color: n.data.goods.skus[n.data.currentIndex].name,
                num: n.data.num,
                image: n.data.goods.images[n.data.currentIndex]
            };
            n.triggerEvent("buyConfirm", a);
        },
        selectSkuColor: function(a) {
            var t = this, i = a.currentTarget.id, o = t.data.goods.skus, r = t.data.goods.images;
            if (o[t.data.currentIndex].checked = !1, 0 == o[i].checked) {
                var s;
                o[i].checked = !0, t.setData((s = {
                    currentIndex: i
                }, e(s, "goods.skus", o), e(s, "skuimage", config.mediaUrl + r[i]), s));
            }
        },
        increaseNum: function(e) {
            this.setData({
                num: this.data.num + 1
            });
        },
        decreaseNum: function(e) {
            var n = this, a = n.data.num - 1;
            1 <= a && n.setData({
                num: a
            });
        }
    }
});