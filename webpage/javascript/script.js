let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
}


let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  searchForm.classList.remove("active");
 shoppingCart.classList.toggle("active");
 loginForm.classList.remove("active");
 navbar.classList.remove("active");
}


let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
loginForm.classList.toggle("active");
navbar.classList.remove("active");
} 




let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
navbar.classList.toggle("active");
} 


window.onscroll=()=>{
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
}
