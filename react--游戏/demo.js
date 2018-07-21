// console.log(111);
// 基本思路：
// 1.先写一个格子，再用循环写出九个
// 2.完成点击事件：X和O
// 3.判断输赢
class Square extends React.Component{
	constructor(){
		super();

	}
	render(){
		return (
			<button className="square" onClick = {this.props.onClick}>
			 {this.props.value}
			</button>
		)
	}
}

function winner(arr){
	const brr = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,4,8],
		[2,4,6],
		[0,3,6],
		[1,4,7],
		[2,5,8],
	];
	for (let i = 0; i < brr.length; i++) {
		console.log(arr[a],arr[b],arr[c]);
		const[a,b,c] = brr[i];
		if(arr[a]&&arr[a]==arr[b]&&arr[a]==arr[c]){
			return arr[a];
		}
	}
	return null;

}
class Board extends React.Component{
	constructor(){
		super();
		this.state={
			arr:Array(9).fill(null),
			XIsNext:true,
			winner:null
		}
	}

	handleClick(i){
		let brr = this.state.arr.concat();
		brr[i] = this.state.XIsNext?'X':'O';

		this.setState({
			arr:brr,
			XIsNext:!this.state.XIsNext
		})
	

		var winnerFlag = winner(brr);
		if(winnerFlag){
			this.setState({
				winner:winnerFlag
			})
		}else{
			this.setState({
				winner:" "
			})
		}
	}
	render(){
		let item = [];
		for(let i = 0; i < 9; i++) {
			item.push(<Square value={this.state.arr[i]} onClick={()=>this.handleClick(i)}/>);
		}

		return(
			<div className="board">
			{item}
			<p>获胜方是：{this.state.winner}</p>
			</div>
		)
	}

}


ReactDOM.render(
	<Board />,
	document.getElementById("example")
);