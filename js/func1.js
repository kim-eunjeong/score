// myName("Yan", "Fan");

// 아래는 함수 선언문(function definition)이다. 함수 표현식으로 바꾸시오.
// 함수 선언문과 함수 표현식의 차이점은 무엇인가? 표현식으로 바꾸면 에러가 나는가 안나는가?
// function myName(first, last) {
// 	console.log(first + last);
// }
//자바스크립트 처음부터 끝까지 실행하면서 포이팅되어 먼저 호출하여도 실행된다.

//함수표현식 -> 변수를 선언하고 익명함수를 작성한다.
var myName = function (first, last) {
	console.log(first + last);
}
//실행X -> var myName까지만 포이스팅되어 안된다. 그러므로 위에서 호출하지 않고 아래에서 호출해야한다.
myName("Yan", "Fan");

//애로우펑션
var myName =  (first, last) => console.log(first + last);




