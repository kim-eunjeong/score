//생성자함수규칙
// 1. 내부적으로 자기 자신을 가르키는 this가 생성된다. {} 빈객체 생성
// 2. 리턴문이 없으면 this가 리턴
// 3. 리턴문이 있으면 리턴되는 타입이 객체일 경우만 유효

function Person() { //생성자함수로 정의하겠다는 의미로 대문자로 정의한다.
	this.arms = 2;
	this.legs = 2;
	// return {a:1}; 결과{ a: 1 }
	//return 3; 결과 객체가 아니면 this 리턴
}
//es6 class문법으로 확장

// 자바스크립트에서 객체를 생성하는 2가지 방법은 무엇인가? 아래는 어떤 방법인가?
var person = new Person(); //생성자함수로 정의하므로써 동적으로 만들수있다.

// 실행 결과는 무엇인가? 실행결과에 대해서 설명하시오.
console.log(person);
//리턴문Person { arms: 2, legs: 2 }

// literal 객체로  person 객체를 생성하시오.
// var person = { arms: 2, legs: 2 }

// 실행 결과는 무엇인가? 여기서 사용된 this는 무엇인가?
console.log(arms);
// 만일 this.arms, this.legs가 없다면 new Person()의 결과는 무엇인가?
//생성자함수의 this는 자기자신을 가르키는 this가 되므로 함수의 글로벌this가 아니므로 에러발생