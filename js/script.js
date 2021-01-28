// menu_btn class na knopke burgera
document.querySelector('.menu_btn').addEventListener('click',() => {
    //.toggle() dobavlyaet class esli ego net i udalyaet esli on est'
    document.querySelector('.menu_btn').classList.toggle('active')
    document.querySelector('.header_menu').classList.toggle('active')
})
// .header_menu_item eto class kotoryi v ssylkah menu
//nujen dlya zakrytiya pri klike na nih
document.querySelectorAll('.header_menu_item').forEach((oneLink) => {
    //oneLink eto name odnoi ssylki menu. Nazvanie produmyvaem sami
   oneLink.addEventListener('click',() => {
           document.querySelector('.menu_btn').classList.toggle('active')
           document.querySelector('.header_menu').classList.toggle('active')
       })
})