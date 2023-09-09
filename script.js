// 사람 이름을 저장할 배열
var names = ["최어빈", "최여진", "서동근", "김경민", "이은빈", 
            "이정환", "나상원", "오다정", "권도희", "김정환", 
            "김지영", "유지윤", "황현숙", "이유석", "홍승표", 
            "황수연", "박준규", "김준범", "김범수", "최세이", 
            "강선아", "김형욱", "안재우", "정지애", "이병창", 
            "신재훈", "김태승", "이현지", "이인영", "락.김지현", 
            "김용범", "김다연", "이창환", "이원엽", "이동원", 
            "황민욱", "강승모", "김가람", "김세린", "채수만", 
            "클.김지현", "권택선", "최한결", "김정현", "최주성", 
            "이숙경", "이정훈", "이지성", "오수정", "최선이"];

// 랜덤으로 이름을 선택하는 함수
function pickName() {
  // 배열에서 랜덤으로 하나의 이름을 선택한다.
  var name = names[Math.floor(Math.random() * names.length)];
  // 선택된 이름을 반환한다.
  return name;
}

// HTML 요소들을 가져온다.
var box = document.getElementById("box");
var button = document.getElementById("button");
var list = document.getElementById("list");

// 버튼에 클릭 이벤트 리스너를 추가한다.
button.addEventListener("click", function() {
  // 랜덤으로 이름을 선택한다.
  var name = pickName();
  // 선택된 이름을 박스에 표시한다.
  box.innerHTML = name;
  
  // 선택된 이름을 목록에 추가한다.
  var item = document.createElement("li");
  item.textContent = name;
  list.appendChild(item);
});
