var acc = document.getElementsByClassName("accordion");
let humburger = document.querySelector(".humburger")
let close = document.querySelector(".close")

let first = document.querySelector(".first")
let second = document.querySelector(".second")
let third = document.querySelector(".third")

// var i;

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

humburger.addEventListener("click",()=>{
  document.querySelector(".sidebar").style.display="flex"
  document.body.style.overflow="hidden"
})

close.addEventListener("click",()=>{
  document.querySelector(".sidebar").style.display="none"
  document.body.style.overflow="visible"
})

first.addEventListener("click",()=>{
  document.querySelector(".bottom-divider1").style.display="block"
  document.querySelector(".bottom-divider2").style.display="none"
  document.querySelector(".bottom-divider3").style.display="none"
  document.querySelector(".one").style.display="flex"
  document.querySelector(".sec").style.display="none"
  document.querySelector(".thi").style.display="none"
})
second.addEventListener("click",()=>{
  document.querySelector(".bottom-divider2").style.display="block"
  document.querySelector(".bottom-divider1").style.display="none"
  document.querySelector(".bottom-divider3").style.display="none"
  document.querySelector(".sec").style.display="flex"
  document.querySelector(".one").style.display="none"
  document.querySelector(".thi").style.display="none"
})
third.addEventListener("click",()=>{
  document.querySelector(".bottom-divider1").style.display="none"
  document.querySelector(".bottom-divider2").style.display="none"
  document.querySelector(".bottom-divider3").style.display="block"
  document.querySelector(".one").style.display="none"
  document.querySelector(".sec").style.display="none"
  document.querySelector(".thi").style.display="flex"

})