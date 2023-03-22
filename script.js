var slideIndex = 0;
SlideShow();

function SlideShow() {
    // 얘 자체를 멈춤 플래그가 0일 때만 실행하도록 if문 넣기

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

// slide-button 안에 있는 button을 누르면 멈춤 플래그를 1로 바꿈
// 