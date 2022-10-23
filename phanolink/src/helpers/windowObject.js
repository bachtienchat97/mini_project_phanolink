

const wd = window;
const objWindow = wd.onclick = function (event){
  const modal = document.getElementById("modal-1");
  if(event) {
    if (event.target === modal) {
       const res = modal.style.display = "none";
       return res;
    }
  }
}

export default objWindow;
