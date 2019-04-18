new Vue({
    el: '#app',
    data: {
        newItem: '',
        items: [],
        title: 'to-do list',
    },
    mounted() {
        if (localStorage.getItem('items')) {
            try {
                this.items = JSON.parse(localStorage.getItem('items'));
            } catch (e) {
                localStorage.removeItem('items');
            }
        }
    },
    methods: {
        addItem: function () {
            var text;
            text = this.newItem.trim();
            if (text) {
                this.items.push({
                    text: text
                });
                this.newItem = '';
                this.saveItems();
            }
        },
        deleteItem(x) {
            this.items.splice(x, 1);
            this.saveItems();
        },
        saveItems() {
            const parsed = JSON.stringify(this.items);
            localStorage.setItem('items', parsed);
        }
    }

});

new Vue({
    el: '#app1',
    data: {
        newItem: '',
        items1: [],
        title: 'school',
    },
    mounted() {
        if (localStorage.getItem('items1')) {
            try {
                this.items1 = JSON.parse(localStorage.getItem('items1'));
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
        deleteItem1(x) {
            this.items1.splice(x, 1);
            this.saveItems1();
        },
        saveItems1() {
            const parsed = JSON.stringify(this.items1);
            localStorage.setItem('items1', parsed);
        }
    }

});

new Vue({
    el: '#app2',
    data: {
        newItem: '',
        items2: [],
        title: 'work',
    },
    mounted() {
        if (localStorage.getItem('items2')) {
            try {
                this.items2 = JSON.parse(localStorage.getItem('items2'));
            } catch (e) {
                localStorage.removeItem('items2');
            }
        }
    },
    methods: {
        addItem2: function () {
            var text;
            text = this.newItem.trim();
            if (text) {
                this.items2.push({
                    text: text
                });
                this.newItem = '';
                this.saveItems2();
            }
        },
        deleteItem2(x) {
            this.items2.splice(x, 1);
            this.saveItems2();
        },
        saveItems2() {
            const parsed = JSON.stringify(this.items2);
            localStorage.setItem('items2', parsed);
        }
    }

});

new Vue({
    el: '#app3',
    data: {
        newItem: '',
        items3: [],
        title: 'other',
    },
    mounted() {
        if (localStorage.getItem('items3')) {
            try {
                this.items3 = JSON.parse(localStorage.getItem('items3'));
            } catch (e) {
                localStorage.removeItem('items3');
            }
        }
    },
    methods: {
        addItem3: function () {
            var text;
            text = this.newItem.trim();
            if (text) {
                this.items3.push({
                    text: text
                });
                this.newItem = '';
                this.saveItems3();
            }
        },
        deleteItem3(x) {
            this.items3.splice(x, 1);
            this.saveItems3();
        },
        saveItems3() {
            const parsed = JSON.stringify(this.items3);
            localStorage.setItem('items3', parsed);
        }
    }

});

document.getElementById("go-to0").addEventListener("click", function () {

    document.getElementById("app").style.display = "block";
    document.getElementById("list-of-notes").style.display = "none";


})
document.getElementById("go-to1").addEventListener("click", function () {

    document.getElementById("app1").style.display = "block";
    document.getElementById("list-of-notes").style.display = "none";

})
document.getElementById("go-to2").addEventListener("click", function () {

    document.getElementById("app2").style.display = "block";
    document.getElementById("list-of-notes").style.display = "none";
})
document.getElementById("go-to3").addEventListener("click", function () {

    document.getElementById("app3").style.display = "block";
    document.getElementById("list-of-notes").style.display = "none";
})
document.getElementById("left").addEventListener("click", function () {
    document.getElementById("app").style.display = "none";
    document.getElementById("list-of-notes").style.display = "block";
})
document.getElementById("left1").addEventListener("click", function () {
    document.getElementById("app1").style.display = "none";
    document.getElementById("list-of-notes").style.display = "block";
})
document.getElementById("left2").addEventListener("click", function () {
    document.getElementById("app2").style.display = "none";
    document.getElementById("list-of-notes").style.display = "block";
})
document.getElementById("left3").addEventListener("click", function () {
    document.getElementById("app3").style.display = "none";
    document.getElementById("list-of-notes").style.display = "block";
})