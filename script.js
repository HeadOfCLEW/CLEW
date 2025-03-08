// 사람 이름을 저장할 배열
var names = ["신재훈", "지승한", "박승기", "이지성", "조준희", 
            "이광현", "나상원", "이병창", "고지연", "김은지", 
            "문혜윤", "노영현", "안혜영", "박여은", "황다인", 
            "임도현", "강나윤", "김시윤", "이정민", "제예진", 
            "강민규", "박예지", "서홍익", "강병찬", "다시"];

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
