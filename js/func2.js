// let circleArea = function(pi, r) {
// 	let area = pi * r * r;
// 	return area;
// };
// 위는 함수 표현식이다. 익명함수 부분을 애로우 펑션으로 바꾸시오

let circleArea = (pi, r) => pi * r * r;
//한문장일때는 중괄호{ }와 return문 생략가능

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"