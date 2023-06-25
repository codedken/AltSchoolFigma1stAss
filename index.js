// $(window).on("beforeunload", function () {
//   $(window).scrollTop(0);
// });

// make the faq section collapsible

const rows = document.querySelectorAll(".faq-items .collapse .row");

for (let i = 0; i < rows.length; i++) {
  rows[i].addEventListener("click", function(){
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    }else{
      content.style.display = "block";
    }
    const img = rows[i].lastElementChild;
    if(content.style.display === "block"){
      img.src = "./assets/icons/minus.svg"
    }else{
      img.src = "./assets/icons/plus.svg"
    }
  });
}
