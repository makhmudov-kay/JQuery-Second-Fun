
// console.log($("div"));
let x = $("div")
.on("click", function () {
    $(this).removeAttr("title")
})
.html("Проверка метода HTML!")
.css({
    fontSize: "50px",
    color: "white",
    background: "#00ff50"
})
$("div").hover(function () {
    $(this).css("height", "50vh")
}, function () {
    $(this).css("height", "100px")
}).dblclick(function () {
    $(this).css({
        background: "blue",
        color: "white",
        width: Math.floor(Math.random() * (window.innerWidth + 1 - 50) + 50) + "px" 
    })
}).attr({
    title: "Проверка добавления атрибута TITLE",
    class: "active"
}).mouseover(function () {
    $(this).contains("active")
})

$("h1").on("click", function () {
    $(this).next().toggleClass("collapse")
})
console.log(x);

$("div").on("click", function () {
    $(this).prev().removeClass("active").css({
        background: "black",
        color: "green",
        fontSize: "34px"
    })
})

$("h2").child().css({
    background: "#39b3a2",
    color: "red",
    fontSize: "100px"
})
console.log($("h2"));
