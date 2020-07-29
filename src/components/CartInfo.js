
let cartinfo = new Vue({
        el: '#cart_info',
        delimiters: ['[[', ']]'],
        data(){
            return {
                form: { 
                    quantity: '1',
                    size: ''
                }
            }
        },
    });