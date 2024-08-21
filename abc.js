var a = document.querySelector(".hamburger");
var b = document.querySelector(".header_container");
var c = document.querySelector(".main_menu");
var d = document.querySelector(".li_header1");
let i = 0;
a.addEventListener("click", function(){
    // if( i % 2 == 0){
    //     console.log("ad");
    //     b.style.height = "600px";
    //     c.style.display = "block";
    //     d.style.display = "block";
    // }
    // else {
    //     b.style.height = "150px";
    //     c.style.display = "none";
    //     d.style.display = "none";
    // }
    // i++;

    c.classList.toggle("nav_menu")
    b.classList.toggle("container_height")
    

}
)

window.addEventListener("resize", function() {
    if (window.innerWidth >= 961) {
        c.style.display = "block";
        d.style.display = "none";
    }
});
