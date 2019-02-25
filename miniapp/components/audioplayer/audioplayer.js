var config = require("../../wxc.config.js");

Component({
    properties: {
        posterPath: {
            type: String,
            value: config.mediaUrl + "/audios/10.jpg"
        },
        statusImagePath: {
            type: String,
            value: "../../images/play.png"
        },
        playtime: {
            type: String,
            value: "00.00"
        },
        percent: {
            type: Number,
            value: 0
        },
        duartion: {
            type: String,
            value: "59:59"
        },
        intro: {
            type: String,
            value: "听欧颂爷爷讲故事"
        }
    },
    data: {},
    methods: {}
});