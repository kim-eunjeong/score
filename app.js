// const title = React.createElement(
// 	'h1',
// 	{id:'main-title',title:'This is a title'},
// 	'My First React Element'
// );

//JSX문법으로 쉽게 변환
// const title = (
// 	<h1 id="main-title" title="This is a title">
// 	My First React Element
// </h1>);


//title : React Element
//console.log(title);

//const desc = React.createElement('p', null, 'This is a desc');

// const desc = React.createElement('p', null, 'This is a ',React.createElement('strong', null, ' desc'));

// const desc = (
// 	<p>
// 		This is a Description
// 	</p>);

// const desc = (
// 	<p>This is a <strong>Description</strong></p>
// );

//const header = React.createElement('header')
//자식태그가 없이 단독으로 사용할시 비워주면 된다.
//마지막 속성이 없어두 되므로 두번째 인수도 없어도 된다.

// const header = React.createElement('header', null, title, desc )
//생성하고 싶은 자식태그를 계속 대입하면 된다.
//....child(title, desc, .....)


// const  header = <header>{title}{desc}</header>;
//변수는 { } 사용
// 자바스크립트 표현식 => {} 를 사용

// const header =
// 	(<header>
// 		<h1 id="main-title" title="This is a title">
// 			My First React Element
// 		</h1>
// 		<p className="txt">This is a Description</p>
// 	</header>);

// ReactDOM.render(header, document.getElementById('root'));


//Componet개요
//1.function 컴포넌트 첫글자는 대문자
//2. react.Element + 리턴

// function Header() {
// 	return (
// 		<header className="header">
// 			<h1 className="h1">SCOREBOARD</h1>
// 			<span className="stats">Player: 1</span>
// 		</header>
// 	); //가독성을 위해 괄호사용()
// }

//선언문
// const Header = function (){
// 	return(
// 		<header className="header">
// 			<h1 className="h1">SCOREBOARD</h1>
// 			<span className="stats">Player: 1</span>
// 		</header>
// 	);
// };

//애로우펑션
// const Header =  () => (
// 	<header className="header">
// 		<h1 className="h1">SCOREBOARD</h1>
// 		<span className="stats">Player: 1</span>
// 	</header>
// );
//
// const Counter = () => (
// 	<div className="counter">
// 		<button className="couter-action decrement">-</button>
// 		<span className="counter-score">35</span>
// 		<button className="couter-action increment">+</button>
// 	</div>
// );
//
// const Player = () => (
// 	<div className="player">
// 		<span className="player-name">LDK</span>
// 		<Counter/>
// 	</div>
// );
//
// const App = () => (
// 	<div className="scoreboard">
// 		<Header/>
// 		<Player/>
// 	</div>
// );

//Ctrl+Alt+L 줄맞춤

//<div id="counter"></div> div#counter + tab 자동완성
// ReactDOM.render(<header></header>, document.getElementById('root')); header태그를 렌더링한다.

//function 컴포넌트 렌더링
// ReactDOM.render(<App></App>, document.getElementById('root'));

/* 컴포넌트의 5개 규칙 (SOLID)
S: 하나의 클래스 하나의 객체*/

// props는 위에서 아래로만 흘러간다 하지만,
// 함수를 사용해서 아래에서 위로 동기화 가능
// Read Only
// const players = [
// 	{name: 'LDK', score: 30},
// 	{name: 'HONG', score: 40},
// 	{name: 'KIM', score: 50},
// 	{name: 'PARK', score: 60},
// ];

// const players = [
// 		{id: 1 ,name: 'LDK'},
// 		{id: 2 ,name: 'HONG'},
// 		{id: 3 ,name: 'KIM'},
// 		{id: 4 ,name: 'PARK'},
// ];

const Header =  (propS) => {
	console.log(propS);
	return (
	<header className="header">
		<h1 className="h1">{propS.title}</h1>
		<span className="stats">Player : {propS.totalPlayers}</span>
	</header>
)};

// const Counter = () => (
// 	<div className="counter">
// 		<button className="couter-action decrement">-</button>
// 		<span className="counter-score">35</span>
// 		<button className="couter-action increment">+</button>
// 	</div>
// );

// const Counter = (props) => (
// 	<div className="counter">
// 		<button className="couter-action decrement">-</button>
// 		<span className="counter-score">{props.score}</span>
// 		<button className="couter-action increment">+</button>
// 	</div>
// );

// const Player = () => (
// 	<div className="player">
// 		<span className="player-name">LDK</span>
// 		<Counter/>
// 	</div>
// );

// const Player = (props) => (
// 	<div className="player">
// 		<span className="player-name">{props.name}</span>
// 		<Counter score={props.score}/>
// 	</div>
// );

// const App = (propS) => (
// 	<div className="scoreboard">
// 		<Header title="*My Scoreboard*" totalPlayers={11} />
//
// 		{
// 			propS.intialPlayers.map( player => (
// 				<Player name={player.name} score={player.score} key={player.id}/>
// 			))
// 		}
//
// 		<Player/>
// 	</div>
// );
/*배열 {파라미터명.배열명.map((배열의 지정 속성명,....) => (배열문))} 중괄호 사용
 key값은 내부적으로 사용하는 것으로 자식한테 넘겨지지 않는다.
* */

/*title , totalPlayers를 Json객체로 변환하여 Header에서 사용할 수있다.
		 String은 "" 따옴표 사용 / 숫자는 {} 중괄호 사용
		*/

// ReactDOM.render(<App></App>, document.getElementById('root'));

//React는 자체적인 반복문이 없으므로 자바스크립트의 반복문을 사용한다. -> map사용
// ReactDOM.render(<App intialPlayers={players}></App>, document.getElementById('root'));
//App컴포넌트에 intialPlayers라는 배열이 JSON객체로 사용할수있다.


class Counter extends React.Component{

	state = { score : 10 }; //stage3 에서 새로 추가된 속성정의 방법

	// constructor() {
	// 	super(); //물려받은 부모의 속성 초기화 과정(필수)
	// 	tthis.stat = {
	// 		score : 10
	// 	};
	// };

	incrementScore() {
		console.log('incrementScore');
		// console.log('incrementScore', this);
		// this.state.score += 1; //1증가 안됨-> 반드시 모델값을 변경할때는 setState사용해야한다.
		// this.setState({score: this.state.score + 1}); //setState는 부모가 가지고 있는 함수이다. (객체,익명함수 올수있다.)
		// this.setState(prevStats => {
		// 	return {score : prevStats.score +1}
		// });
		this.setState(prevStats => ({score : prevStats.score +1}));
		//	중괄호{} 및 리턴 생략 불가능 => 리턴하는 타입이 JSON객체타입이므로 ()추가하여 사용가능 ({score : prevStats.score +1})
	};

	decrement = () => {
		console.log('incrementScore_bind하지 않는 onclick');
		this.setState(prevStats => ({score : prevStats.score-1}));
	};

	/*독립해서도 존재할 수 있으므로 자기자신을 인식을 못함 따라서 onClick={this.incrementScore.bind(this)}
	로 자기자신을 바이딩해줄수도 있다.
	* */
	render() {
		return(
			<div className="counter">
				<button className="couter-action decrement" onClick={this.decrement.bind(this)}>-</button>
				<span className="counter-score">{this.state.score}</span>
				{/*new로 생성하기때문에 this*/}
				{/*<button className="couter-action increment" onClick={this.incrementScore.bind(this)}>+</button>*/}
				<button className="couter-action increment" onClick={this.incrementScore.bind(this)}>+</button>
				{/*<button className="couter-action increment" onClick="함수선언문(함수호출문-> 함수명()이 오면 안된다)">+</button>*/}
			</div>
		);
	};
};

// const Player = (props) => {
// 	return (
// 		<div className="player">
//       <span className="player-name">
//         {props.name}
//       </span>
// 			<Counter score={props.score} />
// 		</div>
// 	);
// }

// const App = (props) => {
// 	return (
// 		<div className="scoreboard">
// 			<Header title="My scoreboard" totalPlayers={props.initialPlayers.length} />
//
// 			{ props.initialPlayers.map(players => <Player name={players.name} key={players.id} />) }
// 		</div>
// 	);
// }
// ReactDOM.render(<App initialPlayers={players}></App>, document.getElementById('root'));


const Player = (props) => {
	return (
		<div className="player">
      <span className="player-name">
				<button className="remove-player" onClick={() => props.removerPlayer(props.id)}>x</button>
				{/*파라미터도 보내야하고 함수선언문으로 만들어주기위해 애로우펑션으로 만들어주면 된다.*/}
				{props.name}
      </span>
			<Counter />
		</div>
	);
}

class App extends React.Component{
	state = {
		players : [
			{id: 1 ,name: 'LDK'},
			{id: 2 ,name: 'HONG'},
			{id: 3 ,name: 'KIM'},
			{id: 4 ,name: 'PARK'},
			]
		}

	render() {
		return (
			<div className="scoreboard">
				<Header title="My scoreboard" totalPlayers={this.state.players.length} />
				{ this.state.players.map(item =>
					<Player name={item.name} id={item.id} key={item.id} removerPlayer={this.handleRemovePlayer}/>)
				}
			</div>
		)};

	// handleRemovePlayer(id) {
	// 	console.log('removerPlayer',id);
 //	array배열의 함수 filter() -> 새로운배열을 리턴하며, 원본 배열을 손상시키지 않는다. (true로 리턴된 값들을 새로 배열만들어 리턴한다)
 //	test = predicate => true, false 판별
// const item =	this.state.players.filter(player => player.id !== id );
 //	타입까지 같아야하므로 등호3개
 // 	console.log(item);
	// }	this가 undefined
	handleRemovePlayer = (id) => {
		this.setState(prevState => {
			const players = prevState.players.filter(player => player.id !== id)
			// Immutable 함수 = 새로운 배열을 리턴 = shallow comparison
			return {players: players}
			//item을 players로 [키와 변수가 같을 경우 한쪽을 생략가능 : shorthand property => return {players}
		} ) //비동기식으로
		console.log(players);
	}
};

ReactDOM.render(<App/>, document.getElementById('root'));

