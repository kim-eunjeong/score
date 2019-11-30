function person() {
	this.arms = 2;
	this.legs = 2;
}

// arms의 출력 결과는 무엇인가? 에러남-> person()호출하기전에 글로벌this값이 지정하지 않았기에 에러남
// console.log(arms);
// Person() 실행결과는 무엇인가? 그 이유는? return이 없으므로 undefind
console.log(person());
// arms의 출력 결과는 무엇인가?  여기서 사용된 this는 무엇인가? 글로벌this
console.log(arms);