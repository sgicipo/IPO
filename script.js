document.addEventListener("DOMContentLoaded", function() {
    // 각 슬라이드 정보 (배경색, 이미지, 텍스트, 링크)
    const slides = [
        {
            bg: "#476ef3",
            img: "images/img_screen1.png",
            text: "<div style='font-size:15px; line-height:1.3;'>" +
                    "<span style='font-weight:600; font-size:25px;'>WITH SGI,</span><br>" +
                    "<span style='font-weight:600; font-size:22px; line-height:1.7;'>Your Best Credit Partner</span><br>" +
                    "<span style='font-weight:600;'>Best Credit Partner</span>" + 
                    "<span style='font-weight:300;'>로서</span><br>" +
                    "<span style='font-weight:300;'>대한민국 경제발전과 늘 함께해왔습니다.<br><br>" +
                    "<span style='font-weight:400;'>회사 소개 →" +
                  "</div>",
            link: "company.html" // 1번 슬라이드 링크
        },
          {
            bg: "#796aff",
            img: "images/img_screen2.png",
            text: "<div style='font-size:15px; line-height:1.3;'>" +
                    "<span style='font-weight:600; font-size:25px;'>내 보유주수</span><br>" +
                    "<span style='font-weight:600; font-size:25px; line-height:1.7;'>확인을 한눈에!</span><br>" +
                    "<span style='font-weight:300;'>증권계좌 한 번으로 할 일을 한눈에!</span><br>" +
                    "<span style='font-weight:300;'>원하는 업무를 빠르게!</span><br><br>" +
                    "<span style='font-weight:400;'>확인하러 가기 →" +
                  "</div>",
            link: "login.html" // 2번 슬라이드 링크     
        },
        {
            bg: "#2298f2", 
            img: "images/img_screen3.png", 
            text: "<div style='font-size:15px; line-height:1.3;'>" +
                    "<span style='font-weight:600; font-size:25px;'>증권체결도</span><br>" +
                    "<span style='font-weight:600; font-size:25px; line-height:1.7;'>전자서명으로 간편하게!</span><br>" +
                    "<span style='font-weight:300;'>CSAP SaaS 인증</span><br>" +
                    "<span style='font-weight:300;'>이폼사인으로 안전하게!</span><br><br>" +
                    "<span style='font-weight:400;'>「전자서명법」 자세히 보기 →" +
                  "</div>",
            link: "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EC%9E%90%EB%AC%B8%EC%84%9C%20%EB%B0%8F%20%EC%A0%84%EC%9E%90%EA%B1%B0%EB%9E%98%20%EA%B8%B0%EB%B3%B8%EB%B2%95", // 외부 링크
            openLink: function() {
                window.open(this.link, '_blank'); // 새 창에서 링크 열기
            }
        }        
    ];
  
    let currentIndex = 0;
    const bannerBg = document.querySelector('.banner-bg');
    const bannerContent = document.querySelector('.banner-content');
    const bannerImg = document.querySelector('.banner-img');
    const bannerText = document.querySelector('.banner-text');

    function showNextSlide() {
        const currentSlide = slides[currentIndex];

        // 배경색 변경
        bannerBg.style.backgroundColor = currentSlide.bg;

        // 기존 fade 효과 제거 후 리플로우 강제 발생
        bannerContent.classList.remove('fade');
        bannerImg.classList.remove('fade');  // 이미지에도 적용
        void bannerContent.offsetWidth;

        // 이미지 & 텍스트 변경
        bannerImg.src = currentSlide.img;
        bannerText.innerHTML = currentSlide.text;

        // fade 효과 재적용
        bannerContent.classList.add('fade');
        bannerImg.classList.add('fade');  // 이미지에도 적용

        // 배너 클릭 시 해당 슬라이드 링크로 이동
        bannerContent.onclick = function() {
            window.location.href = currentSlide.link;
        };

        // 다음 슬라이드 인덱스 업데이트
        currentIndex = (currentIndex + 1) % slides.length;
    }

    // 첫 슬라이드 바로 표시
    showNextSlide();

    // 5초마다 슬라이드 전환
    setInterval(showNextSlide, 5000);
});





// 뉴스 항목들을 순차적으로 보여주기 위한 스크립트
const newsItems = document.querySelectorAll('.news-content');
let currentIndex = 0;

// 뉴스 항목을 순차적으로 바꾸는 함수
function showNextNews() {
    // 이전 뉴스 항목 숨기기
    if (currentIndex > 0) {
        newsItems[currentIndex - 1].classList.remove('show');
    }

    // 현재 뉴스 항목 보이기
    newsItems[currentIndex].classList.add('show');

    // 다음 뉴스 항목으로 이동
    currentIndex = (currentIndex + 1) % newsItems.length;
}

// 3초마다 뉴스 항목을 변경
setInterval(showNextNews, 3000);

// 처음 실행 시 첫 번째 뉴스 항목을 보여줍니다.
showNextNews();


// 준비중 팝업 열기
function showUnderConstruction() {
    const popup = document.getElementById('underConstructionPopup'); // 팝업을 찾음
    popup.classList.add('show'); // 팝업을 열기 위한 show 클래스 추가
}

// 팝업 닫기
function closePopup() {
    const popup = document.getElementById('underConstructionPopup'); // 팝업을 찾음
    popup.classList.remove('show'); // 팝업을 닫기 위해 show 클래스 제거
}




