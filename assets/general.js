document.getElementById('show_menu').addEventListener('mouseover', ()=>{
    document.getElementById('hover_menu').style.display='grid';
})
document.getElementById('hover_menu').addEventListener('mouseover', ()=>{
    document.getElementById('hover_menu').style.display='grid';
})
document.getElementById('show_menu').addEventListener('mouseleave', ()=>{
    document.getElementById('hover_menu').style.display='none';
})
document.getElementById('hover_menu').addEventListener('mouseleave', ()=>{
    document.getElementById('hover_menu').style.display='none';
})


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