$(function(){
    $(document).scroll(function(){
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

var menu = document.getElementById("bar");
var items = document.getElementById("navbar");

items.style.right= "-360px";

menu.onclick = function(){
    if(items.style.right == "-360px"){
        items.style.right = "0";
    }else{
        items.style.right = "-360px";
    }
}
var i = 0;  //start point
var images = [];
var time = 3000;

//image list
images[0] = 'images/9.jpg';
images[1] = 'images/6.jpg';
images[2] = 'images/7.jpg';
images[3] = 'images/8.jpg';
images[4] = 'images/2.jpg';
images[5] = 'images/10.jpg';
images[6] = 'images/11.jpg';
images[7] = 'images/12.jpg';
images[8] = 'images/13.jpg';
images[9] = 'images/14.jpg';
images[10] = 'images/15.jpg';
images[11] = 'images/17.jpg';

// change image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;