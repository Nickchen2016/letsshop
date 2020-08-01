let cookiesArr = document.cookie.split('; ');
for(let i=0;i<cookiesArr.length;i++){
    if(cookiesArr[i].split('=')[0].includes('Lets_shop')){
        itemNum+=Number(JSON.parse(cookiesArr[i].split('=')[1]).quantity)
    }
}