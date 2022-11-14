var fullImgBx = document.getElementById("fullImgBx")
var fullImg = document.getElementById("fullImg")

function openFullImg(pic){
    fullImgBx.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg (){
    fullImgBx.style.display = "none";
}