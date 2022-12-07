export const keyDownObj = window.addEventListener("keydown", function(e) {
  const searchProduct = document.getElementById("wrapper-search-products");
  if(e.keyCode === 191 && e.key === "/") {
    searchProduct.style.display = "block";
  }
});

export const keyDownSearch = window.addEventListener("keydown", function(e) {
  if(e.keyCode === 13) {
    console.log(e)
  }
});