const sections = document.querySelectorAll(".section");
// console.log(sections)
const navLi = document.querySelectorAll("nav .navbox ul.nav_item li");
// console.log(navLi)
window.addEventListener("scroll",() => {
  let current = "";
// console.log(scrollY);
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
   if(scrollY >=sectionTop){
    current=section.getAttribute('Id');
    console.log(current)
   }
})

  navLi.forEach(li => {
    li.classList.remove(".active");
    if (li.classList.contains(current)) {
      li.classList.add(".active");
    }
  })
})