//new Vue({
//    el: '#app',
//    data: {
//        newItem: '',
//        items: [],
//        title: 'My to-do list',
//    },
//    mounted() {
//        if (localStorage.getItem('items')) {
//            try {
//                this.items = JSON.parse(localStorage.getItem('items'));
//            } catch (e) {
//                localStorage.removeItem('items');
//            }
//        }
//    },
//    methods: {
//        addItem: function () {
//            var text;
//            text = this.newItem.trim();
//            if (text) {
//                this.items.push({
//                    text: text
//                });
//                this.newItem = '';
//                this.saveItems();
//            }
//        },
//        deleteItem(x){
//            this.items.splice(x, 1);
//            this.saveItems();
//        },
//        saveItems() {
//            const parsed = JSON.stringify(this.items);
//            localStorage.setItem('items', parsed);
//        }
//    }
//
//});

new Vue({
    el: '#app1',
    data: {
        newItem: '',
        items1: [],
        title: 'My to-do list',
    },
    mounted() {
        if (localStorage.getItem('items1')) {
            try {
                this.items = JSON.parse(localStorage.getItem('items1'));
            } catch (e) {
                localStorage.removeItem('items1');
            }
        }
    },
    methods: {
        addItem1: function () {
            var text;
            text = this.newItem.trim();
            if (text) {
                this.items1.push({
                    text: text
                });
                this.newItem = '';
                this.saveItems1();
            }
        },
        deleteItem1(x){
            this.items1.splice(x, 1);
            this.saveItems1();
        },
        saveItems1() {
            const parsed = JSON.stringify(this.items1);
            localStorage.setItem('items1', parsed);
        }
    }

});
