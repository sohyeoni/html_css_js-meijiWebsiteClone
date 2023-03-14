var slideIndex = 0;
SlideShow();

function SlideShow() {
    var i;
    var imgList = document.getElementsByClassName('slide-item');

    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    slideIndex++;
    
    if(slideIndex > imgList.length) { slideIndex = 1; }
    imgList[slideIndex - 1].style.display = "block";

    // 타이머 동작 (5s?)
    setTimeout(SlideShow, 5000);
}