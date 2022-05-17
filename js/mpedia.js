//////////////////////////moheyy//////////////////////////////

function themo87() {
    var elementmo87 = document.body;//dark home/contact
    elementmo87.classList.toggle("dark_mode87");
    var momo =document.getElementsByClassName("info-about87")// form
    momo.classList.toggle("dark_mode665");
    var newstyle= document.getElementsByClassName('');
    
    momo.style.border='1px solid #191919';
    var popups=document.getElementsByClassName('comp-form87');//popup
    popups.classList.toggle("darkopopo");
    document.getElementById('F2').setAttribute("style", "background-image: url('../media/wall-roman.jpg');");
    document.getElementById('begain87').style.backgroundImage.src="../media/wall-roman.jpg";
    var popo=document.getElementsByClassName("comp-form87");
    popo.classList.toggle("darkopopo");
}
function signthemo87(){

    var logmo=document.body;//signin
    logmo.classList.toggle("darklog87");
}
function checkForm(form)
{
if(form.inputfield.value == "") {
    alert("Error: Input is empty!");
    form.inputfield.focus();
    return false;
}
var re = /^[\w ]+$/;
if(!re.test(form.inputfield.value)) {
    alert("Error: Input contains invalid characters!");
    form.inputfield.focus();
    return false;
    }
    return true;
}
checkForm();
function signthemo87(){

    var logmo=document.body;//signin
    logmo.classList.toggle("darklog87");
}
    function bg() {

        var imgCount = 3;
        var dir = '../media/';
        // I changed your random generator
           //floor: helps getting a random integer
        var randomCount = (Math.floor(Math.random() * imgCount));
        // I changed your array to the literal notation. The literal notation is preferred.
        var images = ['wally-night.jpg', 'wallpaper22.jpg', 'waaall-night.jpg'];
        // I changed this section to just define the style attribute the best way I know how.
        document.getElementById('F2').setAttribute("style", "background-image: url(' + dir + images[randomCount] + ')");
        
    }

     bg();
/////////////////////////////madiha//////////////////////////////////////
// var sou = document.getElementById("foobar");
// sou.play();
//changeTheme

const setTheme = theme=>document.documentElement.className = theme;

//ChangeSize

const setsize = size => document.documentElement.className = size;

//InfoAboutKings
function showDiv() {
   document.getElementById('kingInfo').style.display = "block";
}
function closediv() {
   document.getElementById('kingInfo').style.display = "none";
}
function showDiv2() {
   document.getElementById('kingInfo2').style.display = "block";
}
function closediv2() {
   document.getElementById('kingInfo2').style.display = "none";
}
function showDiv3() {
   document.getElementById('kingInfo3').style.display = "block";
}
function closediv3() {
   document.getElementById('kingInfo3').style.display = "none";
}
function showDiv4() {
   document.getElementById('kingInfo4').style.display = "block";
}
function closediv4() {
   document.getElementById('kingInfo4').style.display = "none";
}
function showDiv5() {
   document.getElementById('kingInfo5').style.display = "block";
}
function closediv5() {
   document.getElementById('kingInfo5').style.display = "none";
}
function showDiv6() {
   document.getElementById('kingInfo6').style.display = "block";
}
function closediv6() {
   document.getElementById('kingInfo6').style.display = "none";
}

/////////////////////////maram//////////////////////////////
function pOver(obj) {
    obj.style="background-color: #445b60; font-size:25px;";
  }
  function pOut(obj) {
    obj.style="background-color: #7697a0;font-size:20px";

  }
  function paOver(obj) {

    obj.style="background-color: #445b60; font-size:25px;";
  }
  function paOut(obj) {
    obj.style="background-color:#c2c8c5;font-size:20px;";
  }

  function them() {
    var element = document.body;
    element.classList.toggle("dark-mode91");
 }

 function me(){
   document.getElementById("thank91").style.display="block";

 }
 function mer(){
  document.getElementById("sorr91").style.display="block";
}
/*function myFunction() {
  let text;
  let person = prompt("If you have a complaint,enter it");
  if (person == null || person == "") {
    text = "";
  } else {
    text =  "Thank you";
  }
  document.getElementById("for").innerHTML = text;
}*/

// /////////////////////maryam////////////////////////////////


function theme07() {
  var element07 = document.body;
  element07.classList.toggle("dark-mode07");
}


/////////////////////mahmouddemooooooo///////////////////////////////////

function them67() {
    var demothm = document.body;
    demothm.classList.toggle("dark_mode67");
    var momo =document.getElementById("comp-form67");
    momo.style.border.replace('1px solid #191919');
  }


  /////////////muhame yassssssssser//////////*/
var responsiveSlider = function() {

    var slider = document.getElementById("slider48");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap48");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener("resize", function() {
    sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function() {
    if(count > 1) {
        count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
    }
    else if(count = 1) {
        count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
}
};

    var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
}
    else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
    }
};

next.addEventListener("click", function() {
  nextSlide();
  });
  
prev.addEventListener("click", function() {
  prevSlide();
  });
  
setInterval(function() {
  nextSlide()
  }, 3000);
  
  };
  
window.onload = function() {
  responsiveSlider();  
  }


/*//////////////////asssssshhhhhhhhraaaaaaaaaaaaaaaf//////////////////*/
function dark56(){
    var ashraf=document.body;
    ashraf.classList.toggle("dark-mode56");
}
function changeText(text)
{
    var display = document.getElementById.innerHTML('but56-nxt');
    display.innerHTML = "";
    display.innerHTML = text;
}

function defaultText()
{
    var display = document.getElementById.innerHTML('but56-nxt');
    display.innerHTML = "";
    display.innerHTML = "Click to more";
}
function mouseOver() {
    document.getElementById("demooo").style.color = "red";
  }

  function mouseOut() {
    document.getElementById("demooo").style.color = "black";
  }
