document.querySelectorAll('.size_radio').forEach(e=>{
    e.addEventListener('click',()=>{
        helper();
        if(e.checked){
            e.parentNode.style.border = '1px solid black';
        }
    })
})


function helper(){
document.querySelectorAll('.size_radio').forEach(e=>{
    e.parentNode.style.border = '1px solid lightgray';
})
}