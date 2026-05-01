document.addEventListener('DOMContentLoaded',()=>{
    let btnBack = document.getElementById('Reverse');
    btnBack.addEventListener('click',()=>{
        window.history.go(-1);
    });
});
