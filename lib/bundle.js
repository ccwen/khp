(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"c:\\dev2015\\khp\\lib\\index.js":[function(require,module,exports){
var main=require("./main.jsx");
React.render(React.createElement(main), document.getElementById("main"));
},{"./main.jsx":"c:\\dev2015\\khp\\lib\\main.jsx"}],"c:\\dev2015\\khp\\lib\\main.jsx":[function(require,module,exports){

var maincomponent = React.createClass({displayName: "maincomponent",
  render: function() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});
module.exports=maincomponent;
},{}]},{},["c:\\dev2015\\khp\\lib\\index.js"]);
