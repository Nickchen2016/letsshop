const { default: Axios } = require("axios");

let cartinfo = new Vue({
        el: '#cart_info',
        delimiters: ['[[', ']]'],
        data(){
            return {
                form: {
                    product_id: document.getElementById('product_id').value,
                    quantity: '1',
                    price: document.getElementById('price_tag').innerHTML,
                    size: ''
                }
            }
        },
        methods: {
            updateCookie(){
                axios.get('/products')
                .then(res=>{
                    console.log('data!', res.data)
                }).catch(error=>{
                    console.log(error)
                })
                // let cookiesKey = [];
                // let cookiesArr = document.cookie.split('; ');
                // for(let i=0;i<cookiesArr.length;i++){
                //     cookiesKey.push(cookiesArr[i].split('=')[0]);
                // }
                // console.log(cookiesArr);
                // if(!cookiesKey.includes('open_sub_popup')){
                    // }
                            // document.cookie = 'Lets_shop_'+this.form.product_id+'='+JSON.stringify(this.form)+';path=/'
                            // setTimeout(function(){
                            // alert("Your Cookie : " + document.cookie);
                            // },3000)
            }
        },
    });