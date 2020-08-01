const drop_menu = document.getElementById('drop_menu');
const hover_menu = document.getElementById('hover_menu');

if(drop_menu){
    drop_menu.addEventListener('mouseover', ()=>{
        hover_menu.style.display='grid';
    })
    hover_menu.addEventListener('mouseover', ()=>{
        hover_menu.style.display='grid';
    })
    drop_menu.addEventListener('mouseleave', ()=>{
        hover_menu.style.display='none';
    })
    hover_menu.addEventListener('mouseleave', ()=>{
        hover_menu.style.display='none';
    })
}

// function to count the cart items on page load.
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