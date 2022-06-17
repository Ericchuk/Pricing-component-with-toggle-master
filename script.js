let input = document.querySelector("input");
let anual = document.querySelectorAll(".Annually");
let month = document.querySelectorAll(".monthly");
// console.log(anual, month)
function shove(){
    let toggle = document.querySelector("input");
    for(let i = 0; i < anual.length; i++){
        if(toggle.checked != true){
            // for
            anual[i].style.display = "flex";
            month[i].style.display = "none";
            // console.log(month.textContent)
        }else{
            month[i].style.display = "flex",
            anual[i].style.display = "none"
            // console.log("www")
        }
    }
    
}

input.addEventListener("click", shove)