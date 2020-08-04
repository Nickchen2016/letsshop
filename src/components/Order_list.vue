<template>
    <div class='item_list_box'>
        <div class='item_info'>
            <span>Product List</span>
            <span>Title</span>
            <span>Quantity</span>
            <span>Size</span>
            <span>Subtotal</span>
        </div>
            <div class='item_info' v-for='item in arr' :key='item.product_id'>
                <div class='product_img'>
                    <img :src="item.primary_image" width='100'>
                </div>
                <div>{{ item.title }}</div>
                <input type='number' v-on:click='updateCookie(item.product_id)' v-model='item.quantity' class='item_quantity' min='1'>
                <div>{{ item.size }}</div>
                <div>${{ item.price * item.quantity }}</div>
            </div>
            <button v-if='customer.length>0' v-on:click.prevent='payment()'>Process to Payment</button>
            <button v-else v-on:click='redirect()'>Login First</button>
    </div>
</template>


<script>
import axios from 'axios';
    export default {
        name: "OrderView",
        delimiters: ['[[', ']]'],
        data(){
            return {
                arr: [],
                customer: document.getElementById('drop_menu').getAttribute('data'),
                csrftoken: ''
            }
        },
        methods: {
            obteinCookie(){
                let cookies = document.cookie.split('; ');
                for(let i=0;i<cookies.length;i++){
                    if(cookies[i].split('=')[0].includes('Lets_shop')){
                        this.arr.push(JSON.parse(cookies[i].split('=')[1]));
                    }else if(cookies[i].split('=')[0]==='csrftoken'){
                        this.csrftoken = cookies[i].split('=')[1]
                    }
                }
            },
            updateCookie(id){
                this.arr.forEach(e=>{
                    if(e.product_id==id){
                        document.cookie = 'Lets_shop_'+e.product_id+'='+JSON.stringify(e)+';path=/';
                        this.itemCounter()
                    }
                })
            },
            itemCounter(){
                let itemNum = 0;
                let cookiesArr = document.cookie.split('; ');
                for(let i=0;i<cookiesArr.length;i++){
                    if(cookiesArr[i].split('=')[0].includes('Lets_shop')){
                        itemNum+=Number(JSON.parse(cookiesArr[i].split('=')[1]).quantity)
                    }
                }
                if(itemNum>0){
                    document.getElementById('item_num').style.display = 'flex';
                    document.getElementById('item_num').innerHTML = itemNum
                }else{
                    document.getElementById('item_num').style.display = 'none';
                }
            },
            redirect(){
                window.location.href="http://127.0.0.1:8000/accounts/login/"
            },
            payment(){
                let query = {'user': Number(this.customer)};
                let header = {headers: {"Content-type": "application/json",'X-CSRFToken': this.csrftoken}}
                axios.post('/api/orders/',query, header)
                .then(res=>{
                    console.log('data!', res.data.id)
                    this.saveProduct(header,res.data.id);
                }).catch(error=>{
                    console.log(error.response)
                })
            },
            saveProduct(header,order_id){
                for(let r=0;r<this.arr.length;r++){
                    let data = {
                            'order': Number(order_id),
                            'product': Number(this.arr[r].product_id),
                            'size': this.arr[r].size,
                            'quantity': Number(this.arr[r].quantity),
                            'subtotal': Number(this.arr[r].quantity)*Number(this.arr[r].price)
                    }
                    axios.post('/api/orderproducts/', data, header)
                        .then(res=>{
                            console.log('product!', res)
                        }).catch(error=>{
                            console.log(error.response)
                    })
                }
            }
        },
        beforeMount(){
            this.obteinCookie();
        }
    }
</script>