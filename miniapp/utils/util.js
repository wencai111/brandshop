var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), r = e.getMonth() + 1, o = e.getDate(), u = e.getHours(), a = e.getMinutes(), i = e.getSeconds();
        return [ n, r, o ].map(t).join("/") + " " + [ u, a, i ].map(t).join(":");
    },
    formatSecond: function(e) {
        return [ parseInt(e / 60), e % 60 ].map(t).join(":");
    },
    formatTimeStr: function(e) {
        return [ e.getFullYear(), e.getMonth() + 1, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds() ].map(t).join("");
    }
};