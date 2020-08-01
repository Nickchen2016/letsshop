import Vue from 'vue';
import axios from 'axios';
import OrderView from './components/Order_list.vue';

let cart_list = new Vue({
    el: '#cart_box',
    render: h=>h(OrderView),
    delimiters: ['[[', ']]']
});