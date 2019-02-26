require("../../utils/util");

Component({
    options: {},
    properties: {
        title: {
            type: String
        },
        hidden: {
            type: Boolean
        },
        confirmColor: {
            type: String,
            observer: function(t) {
                this.setData({
                    tintColor: "color:" + t
                });
            }
        }
    },
    data: {},
    methods: {
        confirm: function(ref) {
            this.triggerEvent("confirm", ref.detail);
        }
    },
    ready: function() {}
});