// 사람 이름을 저장할 배열
var names = ["신재훈", "임도현", "박승기", "이지성", "정지윤", 
            "장선빈", "나상원", "이병창", "서동찬", "신관수", 
            "김승우", "이소민", "안혜영", "최희수", "강병찬", 
            "김민경", "강나윤", "최진석", "좌종윤", "박선영", 
            "김시우", "채수만", "박리나", "왕주희", "김지은", 
            "이정미", "최선이", "김민정(최선이)", "이현지(최선이)", "신주연(최선이)", 
            "이다열(이병창)", "이다현(임도현)", "유하진(나상원)", "진현호(김지은)", "이학현(강병찬)", 
            "유하진(나상원)", "최경재(장선빈)", "김상준(김승우)", "김진홍(박리나)", "권예서(강나윤)", 
            "박서현(강나윤)", "임혜민(강나윤)", "김운태(신관수)", "조민지(신관수)", "꽝"];

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
