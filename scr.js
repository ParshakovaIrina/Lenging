const caruselObj=[
    {
        name: "Men's formula for <b>energy, endurance, and immunity</b>", 
        img: "image/desktop/men1.jpg"
    },

    {
        name: "Realize your potential <b>at any age</b>", 
        img: "image/desktop/men2.jpg"
    },

    {
        name: "Take <b>more</b> from life", 
        img: "image/desktop/men3.jpg"
    }
]

let i=0;
setInterval(nextSlide, 5000);

function nextSlide(){ 
    if(i==caruselObj.length-1)i=0; else i++;
    showSlide(i);
}
function backSlide(){
    if(i==0) i=caruselObj.length-1; else i--;
    showSlide(i);
}
 function showSlide(i)
 {
   
    tex.innerHTML=caruselObj[i].name;
    nam.innerHTML='<img class="slider-body-image-size" src="'+caruselObj[i].img+'">';
    
 }

 function startTimer() {
    let my_timer = document.getElementById("my_timer");
    let time = my_timer.innerHTML;
    let arr = time.split(":");
    let h = arr[0];
    let m = arr[1];
    let s = arr[2];
    if (s == 0) {
      if (m == 0) {
        if (h == 0) {
          alert("Время вышло");
          window.location.reload();
          return;
        }
        h--;
        m = 60;
        if (h < 10) h = "0" + h;
      }
      m--;
      if (m < 10) m = "0" + m;
      s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
    setTimeout(startTimer, 1000);
  }

  jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
    });
    });