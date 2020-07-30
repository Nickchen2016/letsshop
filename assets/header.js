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