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
            <input type='number' class='item_quantity' min='1' placeholder='1'>
            <div>{{ item.size }}</div>
            <div>${{ item.price * item.quantity }}</div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "OrderView",
        data(){
            return {
                arr: [] 
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
            }
        },
        beforeMount(){
            this.obteinCookie();
        }
    }
</script>