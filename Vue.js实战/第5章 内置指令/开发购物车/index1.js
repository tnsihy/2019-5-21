var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: '香辣鸡翅',
                price: 7,
                count: 1,
                isBuy : false
            },
            {
                id: 2,
                name: '薯条',
                price: 5,
                count: 1,
                isBuy : false
            },
            {
                id: 3,
                name: '墨西哥鸡肉卷',
                price: 7,
                count: 1,
                isBuy : false
            },
            {
                id: 4,
                name: '原味鸡腿堡',
                price: 8,
                count: 1,
                isBuy : false
            }
        ],
        checkBoxAll : false,
        // 存放isBuy为true的元素
        checkBoxModel : []
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                if(this.list[i].isBuy){
                    var item = this.list[i];
                    total += item.price * item.count;
                }
            }
            // 千位分隔符转换
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods: {
        // 减少
        handleReduce:function(index){
            if(this.list[index].count === 1) return;
            this.list[index].count--;
        },
        // 增加
        handleAdd:function(index){
            this.list[index].count++;
        },
        // 移除
        handleRemove:function(index){
            this.list.splice(index,1);
        },
        // 点击全选实现
        checkAll:function(){
            var _this = this;
            if(_this.checkBoxAll){
                _this.checkBoxModel = [];
                _this.checkBoxAll = false;
                // 对list数组进行循环将isBuy改为false
                for(var i = 0 ;i<this.list.length;i++){
                    this.list[i].isBuy = false;
                }
            }else{
                _this.checkBoxModel = [];
                _this.list.forEach(function(item){
                    // 压入
                    _this.checkBoxModel.push(item.id);
                })
                _this.checkBoxModel.forEach(function(i){
                    _this.list[i-1].isBuy = true;
                })
                _this.checkBoxAll = true;
            }
        },
        checkOne:function(index){
            if(this.list[index].isBuy){
                this.list[index].isBuy = false;
            }else{
                this.list[index].isBuy = true;
            }
        }
    }
})