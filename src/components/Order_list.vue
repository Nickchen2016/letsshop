<template>
    <ul>
        <li v-for='item in arr' :key='item.product_id'>
        {{ item.price }}
        </li>
    </ul>
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