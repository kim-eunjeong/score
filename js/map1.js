// 아래 실행결과를 예측하고 map과 forEach의 차이점을 설명하시오.
var items = ['1', '2', '3', '4', '5'];
var newItems = items.map(item => parseInt(item));
console.log(items);
console.log(newItems); //결과 : 문자를 숫자로 변환하여  [ 1, 2, 3, 4, 5 ]
//map은 루프를 돌면서 새로운 배열로 만들어 리턴해준다.

//forEach는 루프만 돌뿐
var newItems2 = items.forEach(item => parseInt(item));
console.log(newItems2); //결과 undefined