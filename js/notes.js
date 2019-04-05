 new Vue({
     el: '#app',
     data: {
         newItem:'',
         items: [],
         title: 'My to-do list',
     },
     methods: function () {
         if (isLocalStorage() /* function to detect if localstorage is supported*/ ) {
             localStorage.setItem('YourItem', this.input)
            
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
             }
         }
     }

 });