const counts = document.querySelectorAll(".count"); 
//sweet alert
const load=setTimeout(()=>{
    Swal.fire({
        title: "Welcome to Fittness website",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
},5000)
//function of count up
function countUp() {
  counts.forEach((card) => {
    const target = parseInt(card.getAttribute("data-target"));
    let current = 0; 
    const timer = setInterval(() => {
      current += 1; 
      card.innerText = current; 
      if (current >= target) { 
        clearInterval(timer);
      }
    }, 10);
  });
}

countUp();
