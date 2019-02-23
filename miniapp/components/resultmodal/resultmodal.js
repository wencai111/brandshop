var config = require("../../wxc.config.js");

Component({
    options: {},
    properties: {
        result: {
            type: String
        },
        answer: {
            type: String
        },
        tip: {
            type: String
        },
        hidden: {
            type: Boolean
        },
        btnstyle: {
            type: String
        }
    },
    attached: function() {
        this.setData({
            btnstyle: config.mediaUrl + "/images/btncontinue.png"
        });
    },
    data: {},
    methods: {
        nextquestion: function() {
            this.triggerEvent("nextquestion");
        }
    },
    ready: function() {}
});