var app = new Vue({
    el: '#app',
    data: {
        list: [
            [{
                    id: 1,
                    name: '香辣鸡翅',
                    price: 7,
                    count: 1,
                    isBuy: false,
                    cls: '麦当劳'
                },
                {
                    id: 2,
                    name: '薯条',
                    price: 5,
                    count: 1,
                    isBuy: false,
                    cls: '麦当劳'
                },
                {
                    id: 3,
                    name: '墨西哥鸡肉卷',
                    price: 7,
                    count: 1,
                    isBuy: false,
                    cls: '麦当劳'
                },
                {
                    id: 4,
                    name: '原味鸡腿堡',
                    price: 8,
                    count: 1,
                    isBuy: false,
                    cls: '麦当劳'
                }
            ],
            [{
                    id: 5,
                    name: '苹果',
                    price: 7,
                    count: 1,
                    isBuy: false,
                    cls: '水果'
                },
                {
                    id: 6,
                    name: '香蕉',
                    price: 5,
                    count: 1,
                    isBuy: false,
                    cls: '水果'
                },
                {
                    id: 7,
                    name: '三华李',
                    price: 7,
                    count: 1,
                    isBuy: false,
                    cls: '水果'
                },
                {
                    id: 8,
                    name: '橙子',
                    price: 8,
                    count: 1,
                    isBuy: false,
                    cls: '水果'
                }
            ],
            [{
                    id: 9,
                    name: '水壶',
                    price: 7,
                    count: 1,
                    isBuy: false,
                    cls: '宿舍用品'
                },
                {
                    id: 10,
                    name: '纸巾',
                    price: 5,
                    count: 1,
                    isBuy: false,
                    cls: '宿舍用品'
                },
                {
                    id: 11,
                    name: '六神花露水',
                    price: 7,
                    count: 1,
                    isBuy: false,
                    cls: '宿舍用品'
                },
                {
                    id: 12,
                    name: '充电线',
                    price: 8,
                    count: 1,
                    isBuy: false,
                    cls: '宿舍用品'
                }
            ]
        ],
        checkBoxAll: false,
        // 存放isBuy为true的元素
        checkBoxModel: []
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                for (var j = 0; j < this.list[i].length; j++) {
                    var temp = this.list[i][j];
                    if (temp.isBuy) {
                        total += temp.price * temp.count;
                    }
                }
            }
            // 千位分隔符转换
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods: {
        // 减少
        handleReduce: function (index, inindex) {
            if (this.list[index][inindex].count === 1) return;
            this.list[index][inindex].count--;
        },
        // 增加
        handleAdd: function (index, inindex) {
            this.list[index][inindex].count++;
        },
        // 移除
        handleRemove: function (index, inindex) {
            this.list[index].splice(inindex, 1);
            this.checkBoxModel.splice(inindex,1);
        },
        // 点击全选实现
        checkAll: function () {
            var _this = this;
            if (_this.checkBoxAll) {
                _this.checkBoxModel = [];
                _this.checkBoxAll = false;
                // 对list数组进行循环将isBuy改为false
                for (var i = 0; i < this.list.length; i++) {
                    for (var j = 0; j < this.list[i].length; j++) {
                        this.list[i][j].isBuy = false;
                    }
                }
            } else {

                _this.checkBoxModel = [];
                for (var i = 0; i < this.list.length; i++) {
                    _this.list[i].forEach(function (initem) {
                        // 压入
                        _this.checkBoxModel.push(initem.id);
                    })
                }

                // 为了全选时将所有的isBuy设为true
                for (var i = 0; i < this.list.length; i++) {
                    for (var j = 0; j < this.list[i].length; j++) {
                        this.list[i][j].isBuy = true;
                    }
                }
                _this.checkBoxAll = true;


            }
    },
    checkOne: function (index, inindex) {
        if (this.list[index][inindex].isBuy) {
            this.list[index][inindex].isBuy = false;
        } else {
            this.list[index][inindex].isBuy = true;
        }
    },
    classNa: function (index) {
        for (var i = 0; i < this.list.length; i++) {
            for(var j = 0;j <this.list[i].length;j++){
                if (index === i) {
                    return this.list[i][j].cls;
                }
            }
        }
    }
}
})