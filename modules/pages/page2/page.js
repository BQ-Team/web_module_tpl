/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var baseModule = require('baseModule');
    module.exports = $.extend({}, baseModule, {
        title: "页面2",
        //数据
        data: function () {
            return {
                list: [{id: 1, name: "abc"}, {id: 2, name: "efg"}]
            };
        },
        //组件init 仅执行一次
        ready: function (params) {

            //事件初始化
            logger.log(this.title, 'ready , 事件初始化');
            this.html.on("click", ".topage1", function () {
                jumpPage('#pages/page1', '123456789')
            });

        },
        //每次切换进入到该组件 都会被执行
        load: function (params) {
            logger.log(this.title, ' load');
        }
    });
});