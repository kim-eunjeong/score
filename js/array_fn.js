let books = [
	{title: "Three Little Pigs", price: 20, author: "Jacobs", rank: 1},
	{title: "Alice in Wonderland", price: 25, author: "Carroll", rank: 2},
	{title: "Seven Dwarfs", price: 35, author: "Disney", rank: 3},
	{title: "Swallow's gift", price: 15, author: "Unknown", rank: 4},
];

let book = {title: "Cinderella", price: 30, author: "Perrault", rank: 5};

// 11. rank가 3보다 적은 책들을 모은 새로운 배열을 리턴하시오.
// result = books.filter(booke => {
// 	if(booke.rank < 3){
// 		return true
// 	}else{
// 		return false
// 	//	숫자 0 null undefined 빈스트링 => 모두 false 반환
// 	}
// });
result = books.filter(booke => booke.rank < 3);
console.log(result)
