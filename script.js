// 사람 이름을 저장할 배열
var names = ["김철수", "이영희", "박민수", "최지원", "한지민", "정현우", "김민지", "이수연", "박준호", "최영훈",
            "한수진", "정민아", "김현수", "이지연", "박지훈", "최은지", "한영민", "정성호", "김지연", "이현우",
            "박은주", "최민호", "한지혜", "정수민", "김영훈", "이민아", "박성현", "최지혜", "한현우", "정지원",
            "김수진", "이성민", "박영희", "최현수", "한민수", "정영훈", "김지훈", "이은주", "박현우", "최수연",
            "한지원", "정민호", "김영미", "이지혜", "박성민", "최지연", "한성호", "정은지", "김현우", "이지원"];

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
