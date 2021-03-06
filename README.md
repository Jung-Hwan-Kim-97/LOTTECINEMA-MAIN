# LOTTECINEMA-main-page

## FEAT 
- OMDB API를 이용해 데이터를 비동기로 불러와 데이터를 화면에 삽입
- SWIPER 라이브러리를 이용해 영화포스터,공지사항의 내용을 슬라이드화 
- SCSS를 이용해 Stylie 작업 
- netlify를 이용해 사이트 배포 
[LOTTE-MAIN-link](https://resonant-bublanina-cb3245.netlify.app/)
- 검색창에 avengers,Avengers,AVENGERS라고 입력후 SEARCH-icon클릭하면 관련영화 5개 출력 
- 검색창에 hunger,Hunger,HUNGER라고 입력후 SEARCH-icon클릭하면 관련영화 5개 출력 

## 사이트를 만들며 생긴 경험 
- scss를 처음으로 사용해 봤고 중첩과 @mix-in, @include기능을 유용하게 사용했다

- 비동기 처리를 axios로 했으나 promise와 async,await,callback에 개념을 잡았다
아직 잘 다루지는 못하나 비동기가 JS에서 난이도가 높다는 점, 필자가 개념을 어느정도 이해했다는 점에서 불가능 하지는 않다고 판단했고 꾸준히 연습해야겠다고 느꼈다  

- DOM API를 프로젝트에 적용 해 봤다

- Swiper라는 라이브러리를 처음 사용해 봤는데 프로젝트를 진행하며 익숙 해졌다

- 사이트를 만들 때 flex로만 레이아웃을 잡다보니 grid를 사용하지 않았었는데
이번에 grid로 만들면 좋을 것 같다고 느낀 content가 있었고, 구현하는데 성공했다.

- 처음 사이트를 만들 때 보다 레이아웃을 어떻게 잡아야 하는지에 대한 관점이 생겼다

- 다음번에는 미디어 쿼리를 이용해 반응형 작업을 해봐야겠다는 욕심이 생겼다 

- JS파일을 모듈화 하여 관리하는게 익숙해졌다 

- bundler , npm(Node Package Manager)라이브러리 사용을 해보았다  
담번엔 webPack으로 도전 해 볼 생각이다


## 사이트 만들며 생긴 문제점
- 비동기로 불러온 데이터를 화면에 삽입하기위해 document.queryselector를 사용했는데 
불러올 데이터가 늘어날 수록 queryselector 또한 늘어났다 좀 더 효율 적인 방법으로 데이터를 작성 할 수 있다면 좋았겠지만 아직 방법을 찾지 못한점에 아쉬움이 남는다 

- scss로 styilng 하며 position 속성을 사용했을때 화면이 늘어나거나 줄어드는 경우 해당 요소가 같이 움직이는 현상을 다루는 능력이 아직 미숙하다고 느꼇다 flex는 다소 익숙하게 다루게 되었다고 생각하지만 grid나 position은 아직 미숙하다 

- 상단 매뉴바에 마우스를 hover했을때 매뉴바안에 또다른 매뉴가 있는 상태를 구현했으나 마우스를 때었을때 또다른 매뉴가 바로 없어지기 때문에 클릭을 할 수 없는 현상이 발생하였다 이문제는 향후 수정할 계획

- gsap을 이용해 animation 처리를 하고자 했으나 안한것보다 못한 결과를 반환했기때문에 해당 파일은 제외했다. 좀 더 효율적으로 다룰 수 있게 노력해야겠다.