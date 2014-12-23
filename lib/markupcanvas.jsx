var canvasstyle={width:"100%",height:"100%"}
var component=React.createClass({
	getInitialState:function() {
		return {id:"_"+Math.random().toString().substr(2) };
	},
	componentDidMount:function() {
		var canvas=this.canvas=new fabric.Canvas(this.state.id);
		var t=document.getElementsByClassName("canvas-container");
		t[0].style.position="absolute";
		t[0].style.width="100%";
		t[0].style.height="100%";
		t[0].style.pointerEvents="none";
		
		var rect = new fabric.Rect({
		  left: 100,
		  top: 100,
		  fill: 'red',
		  width: 20,
		  height: 20
		});
		canvas.setWidth(window.screen.width);
		canvas.setHeight(window.screen.height);
		// "add" rectangle onto canvas
		canvas.add(rect);
	},
	render :function() {
		return <canvas id={this.state.id} style={canvasstyle}></canvas>
	}
})
module.exports=component;