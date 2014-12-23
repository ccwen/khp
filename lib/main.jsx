var mainstyle={fontSize:"200%"}; 
var Markupcanvas=require("./markupcanvas.jsx");
var maincomponent = React.createClass({
  componentDidMount:function() {

  },
  render: function() { 
    return <div>
      <Markupcanvas/>
      <div style={mainstyle}>乾，元亨利貞。初九，潛龍勿用。<br/>九二，見龍在田，利見大人。
    九三，君子終日乾乾，夕惕若，厲无咎。<br/>九四，或躍在淵，无咎。<br/>九五，
    飛龍在天，利見大人。<br/>上九，亢龍有悔。<br/>用九，見群龍无首，吉。
      </div>
    </div>; 
  } 
});
module.exports=maincomponent;