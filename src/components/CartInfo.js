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
                document.cookie = 'Lets_shop_'+this.form.product_id+'='+JSON.stringify(this.form)+';path=/'
                this.checkitems();
                // axios.get('/api/products')
                // .then(res=>{
                //     console.log('data!', res.data)
                //     res.data.foreach(e=>{
                //         if(e.id==this.form.product_id){

                //         }
                //     })
                // }).catch(error=>{
                //     console.log(error)
                // })
            },
            checkitems(){
                let itemNum = 0;
                let cookiesArr = document.cookie.split('; ');
                for(let i=0;i<cookiesArr.length;i++){
                    if(cookiesArr[i].split('=')[0].includes('Lets_shop')){
                        itemNum+=Number(JSON.parse(cookiesArr[i].split('=')[1]).quantity)
                    }
                }
                document.getElementById('item_num').innerHTML = itemNum
            }
        },
        beforeMount(){
            this.checkitems();
        }
    });