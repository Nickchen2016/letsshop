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
            <button v-if='customer.length>0'>Process to Payment</button>
            <button v-else v-on:click='redirect()'>Login First</button>
    </div>
</template>


<script>
    export default {
        name: "OrderView",
        delimiters: ['[[', ']]'],
        data(){
            return {
                arr: [],
                customer: document.getElementById('drop_menu').getAttribute('data')
            }
        },
        methods: {
            obteinCookie(){
                let cookies = document.cookie.split('; ');
                for(let i=0;i<cookies.length;i++){
                    if(cookies[i].split('=')[0].includes('Lets_shop')){
                        this.arr.push(JSON.parse(cookies[i].split('=')[1]))
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
            }
        },
        beforeMount(){
            this.obteinCookie();
        }
    }
</script>