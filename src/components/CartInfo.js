
let cartinfo = new Vue({
        el: '#cart_info',
        delimiters: ['[[', ']]'],
        data(){
            return {
                form: {
                    product_id: document.getElementById('product_id').value,
                    quantity: '1',
                    size: ''
                }
            }
        },
        methods: {
            updateCookie(){
                let cookiesKey = [];
                let cookiesArr = document.cookie.split('; ');
                console.log(cookiesArr);
                // for(let i=0;i<cookiesArr.length;i++){
                //     cookiesKey.push(cookiesArr[i].split('=')[0]);
                // }
                // if(!cookiesKey.includes('open_sub_popup')){
                //     document.cookie = 'open_sub_popup=open_only_first_load';
                //     setTimeout(function(){
                //     alert("Your Cookie : " + document.cookie);
                //     },3000)
                // }
            }
        },
    });