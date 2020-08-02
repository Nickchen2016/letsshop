import Vue from 'vue';
import axios from 'axios';

let product_detail = new Vue({
        el: '#cart_info',
        delimiters: ['[[', ']]'],
        data(){
            return {
                form: {
                    product_id: document.getElementById('product_id').value,
                    title: document.getElementById('product_title').innerHTML,
                    quantity: '1',
                    price: document.getElementById('price_tag').innerHTML,
                    size: '',
                    primary_image: document.getElementById('primary_image').innerHTML
                }
            }
        },
        methods: {
            updateCookie(){
                document.cookie = 'Lets_shop_'+this.form.product_id+'='+JSON.stringify(this.form)+';path=/'
                this.checkitems();

                document.getElementById('notification_tab').style.transform = 'translateX(0)'; // In order to achieve slide animation, we have to keep a consistent value of the dislpay
                document.getElementById('notification_tab').innerHTML = 'You just added 1 '+ this.form.title + ' into your cart';
                setTimeout(() => {
                    document.getElementById('notification_tab').style.transform = 'translateX(120%)';
                }, 8000);

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
                if(itemNum>0){
                    document.getElementById('item_num').style.display = 'flex';
                    document.getElementById('item_num').innerHTML = itemNum;
                }else{
                    document.getElementById('item_num').style.display = 'none';
                }
            }
        }
    });

    export default product_detail;