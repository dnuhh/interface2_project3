new Vue({
    el: '#app',
    data: {
        newItem: '',
        items: [],
        title: 'My to-do list',
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
                    text: text,
                    checked: false
                });
                this.newItem = '';
                this.saveItems();
            }
        },
        deleteItem(x){
            this.items.splice(x, 1);
            this.saveItems();
        },
        saveItems() {
            const parsed = JSON.stringify(this.items);
            localStorage.setItem('items', parsed);
        }
    }

});

function showIcon(){
    console.log(0);
    document.getElementById("trash").style.display="block";
}