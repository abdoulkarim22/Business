// let indicator = document.querySelectorAll(".indicator").children;
// let li = document.querySelector(".items").children;

// for (let i of li ) {
//     const name = i.querySelector("strong");
//     const x =name.textContent;
//     i.setAttribute("data-category", x)
// }
// for (let i = 0; i < indicator.length; i++) {
//     indicator[i].onclick = function () {
//         for (let x = 0; x < indicator.length; x++) {
//             indicator[x].classList.remove("active") 
//         }
//         this.classList.add('active'); 
//         const displayItems = this.getAttribute('data-filter')
//         for (let z = 0; z < array.length; z++) {
//             li[z].style.transform = 'scale(0)';
//             setTimeout(() =>{
//                 li[z].style.display = 'none'

//             },500);
//             if ((li[z].getAttribute('data-category') == displayItems) || displayItems == 'All') {
//                setTimeout(()=>{
//                 li[z].style.display = 'none';
//                }, 500); 
               
//             }
//         }
//     }
    
// }
function searchProduits() {
    const input =document.getElementById("input");
    console.log(input);
}
searchProduits();