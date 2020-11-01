function Stankin(){
    document.getElementById("stankin").innerHTML = "Обучаюсь в самом лучшем вузе во вселенной";
}
function Photo() {
    let myImg = document.getElementById('photo');
    if (myImg.src ==  "http://localhost:3000/static/source/MyPhoto2.jpg") {
        myImg.style.outlineColor = "#F00";
        myImg.src = "static/source/MyPhoto1.jpg";
    } else {
        myImg.style.outlineColor = "#dd14d3";
        myImg.src = "static/source/MyPhoto2.jpg";
    }

}