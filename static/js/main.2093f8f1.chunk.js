(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),l=n.n(s),r=(n(14),n(2)),o=n(3),h=n(5),u=n(4),c=n(6),p=(n(15),n(1)),m=(n(16),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={percentChange:0,percentChange10:0,percentChange5:0,percentChange2:0,numbers15:"numbers15",numbers10:"numbers10",numbers5:"numbers5",numbers2:"numbers2",numbersPost:"numbersPost",perChangeCss:"perChange",calledFifteenTo10:!1,calledTenTo5:!1,calledFiveTo2:!1,calledTwoToPost:!1},n.percentChange=n.percentChange.bind(Object(p.a)(n)),n.rowNumber=n.rowNumber.bind(Object(p.a)(n)),n.percentChangeInc=n.percentChangeInc.bind(Object(p.a)(n)),n.fifteenToTen=n.fifteenToTen.bind(Object(p.a)(n)),n.tenToFive=n.tenToFive.bind(Object(p.a)(n)),n.fiveToTwo=n.fiveToTwo.bind(Object(p.a)(n)),n.twoToPost=n.twoToPost.bind(Object(p.a)(n)),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log("this.fifteenToTen() component did mount")}},{key:"componentDidUpdate",value:function(e){var t=this.props.tenMinNum,n=this.props.fiveMinNum,a=this.props.twoMinNum,i=this.props.postNum;console.log("PREV "+e.tenMinNum),console.log("CUR "+t),void 0!==t&&!1===this.state.calledFifteenTo10?(this.fifteenToTen(),this.setState({calledFifteenTo10:!0})):e.tenMinNum!==t&&!0===this.state.calledFifteenTo10&&(this.fifteenToTen(),this.twoToPost()),void 0!==n&&!1===this.state.calledTenTo5?(this.tenToFive(),this.setState({calledTenTo5:!0})):e.fiveMinNum!==n&&!0===this.state.calledTenTo5&&(this.tenToFive(),this.twoToPost()),void 0!==a&&!1===this.state.calledFiveTo2?(this.fiveToTwo(),this.setState({calledFiveTo2:!0})):e.twoMinNum!==a&&!0===this.state.calledFiveTo2&&(this.fiveToTwo(),this.twoToPost()),void 0!==i&&!1===this.state.calledTwoToPost?(this.twoToPost(),this.setState({calledTwoToPost:!0})):e.postNum!==i&&!0===this.state.calledTwoToPost&&this.twoToPost()}},{key:"percentChange",value:function(e,t){return 100*((e-t)/e)}},{key:"percentChangeInc",value:function(e,t){return 100*((e-t)/t)}},{key:"rowNumber",value:function(e,t,n){var a=n/(e/(e/t));return Math.ceil(a)}},{key:"fifteenToTen",value:function(){console.log(" in Fifteen to ten");var e,t=this.props.fifteenMinNum,n=this.props.tenMinNum;if(parseInt(t)>parseInt(n)){var a=this.percentChange(parseInt(t),parseInt(n));a>23?(e="numbers10BigHit",this.setState({numbers10:e})):(e="numbers10Hit",this.setState({numbers10:e})),this.setState({percentChange:a})}else if(parseInt(t)<=parseInt(n)){var i=this.percentChangeInc(parseInt(n),parseInt(t)),s=this.state.percentChange-i;this.setState({percentChange:s})}}},{key:"tenToFive",value:function(){console.log("in ten to 5");var e,t=this.props.fiveMinNum,n=this.props.tenMinNum;if(parseInt(n)>parseInt(t)){var a=this.percentChange(parseInt(n),parseInt(t)),i=this.state.percentChange+a;a>23?(e="numbers5BigHit",this.setState({numbers5:e})):(e="numbers5Hit",this.setState({numbers5:e})),this.setState({percentChange10:i})}else if(parseInt(n)<=parseInt(t)){var s=this.percentChangeInc(parseInt(t),parseInt(n)),l=this.state.percentChange-s;this.setState({percentChange10:l})}}},{key:"fiveToTwo",value:function(){var e,t=this.props.fiveMinNum,n=this.props.twoMinNum;if(parseInt(t)>parseInt(n)){var a=this.percentChange(parseInt(t),parseInt(n)),i=this.state.percentChange10+a;a>23?(e="numbers2BigHit",this.setState({numbers2:e})):(e="numbers2Hit",this.setState({numbers2:e})),this.setState({percentChange5:i})}else if(parseInt(t)<=parseInt(n)){var s=this.percentChangeInc(parseInt(n),parseInt(t)),l=this.state.percentChange10-s;this.setState({percentChange5:l})}}},{key:"twoToPost",value:function(){var e,t=this.props.postNum,n=this.props.twoMinNum;if(parseInt(n)>parseInt(t)){var a=this.percentChange(parseInt(n),parseInt(t)),i=this.state.percentChange5+a;a>23?(e="numbersPostBigHit",this.setState({numbersPost:e})):(e="numbersPostHit",this.setState({numbersPost:e})),this.setState({percentChange2:i}),i>5&&("perChangeHit",this.setState({perChangeCss:"perChangeHit"}))}else if(parseInt(n)<=parseInt(t)){var s=this.percentChangeInc(parseInt(t),parseInt(n)),l=this.state.percentChange5-s;this.setState({percentChange2:l})}}},{key:"render",value:function(){var e=this.props.fiveMinNum,t=this.props.twoMinNum,n=this.props.tenMinNum,a=this.props.fifteenMinNum,s=this.props.postNum;return i.a.createElement("div",{className:"grid-item"},i.a.createElement("ul",{className:"List"},i.a.createElement("li",{className:this.state.numbers15}," ",a),i.a.createElement("li",{className:this.state.numbers10}," ",n),i.a.createElement("li",{className:this.state.numbers5}," ",e),i.a.createElement("li",{className:this.state.numbers2}," ",t),i.a.createElement("li",{className:this.state.numbersPost}," ",s)),i.a.createElement("p",{className:this.state.perChangeCss},"Total PC: ",Math.round(100*this.state.percentChange2)/100))}}]),t}(a.Component)),f=(n(17),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={currentRace:0,auto:"",fiveMinNums:[],fiveMin:"",tenMinNums:[],tenMin:"",fifteenMinNums:[],fifteenMin:"",twoMinNums:[],twoMin:"",postNums:[],postMin:"",totalHorsesCurrent:0},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.handleRaceNumChange=n.handleRaceNumChange.bind(Object(p.a)(n)),n.handleNumChange2Min=n.handleNumChange2Min.bind(Object(p.a)(n)),n.twoMinHandleSplit=n.twoMinHandleSplit.bind(Object(p.a)(n)),n.handleNumChange5Min=n.handleNumChange5Min.bind(Object(p.a)(n)),n.fiveMinHandleSplit=n.fiveMinHandleSplit.bind(Object(p.a)(n)),n.handleNumChange10Min=n.handleNumChange10Min.bind(Object(p.a)(n)),n.tenMinHandleSplit=n.tenMinHandleSplit.bind(Object(p.a)(n)),n.handleNumChange15Min=n.handleNumChange15Min.bind(Object(p.a)(n)),n.fifteenMinHandleSplit=n.fifteenMinHandleSplit.bind(Object(p.a)(n)),n.handleNumChangePost=n.handleNumChangePost.bind(Object(p.a)(n)),n.postHandleSplit=n.postHandleSplit.bind(Object(p.a)(n)),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"inputCurrent",value:function(e){for(var t="",n=0;n<e;n++)t+="auto ";this.setState({auto:t})}},{key:"handleClick",value:function(){this.inputCurrent(this.state.currentRace),this.fifteenMinHandleSplit(this.state.fifteenMin),this.tenMinHandleSplit(this.state.tenMin),this.fiveMinHandleSplit(this.state.fiveMin),this.twoMinHandleSplit(this.state.twoMin),this.postHandleSplit(this.state.postMin)}},{key:"handleRaceNumChange",value:function(e){this.setState({currentRace:e.target.value})}},{key:"handleNumChange2Min",value:function(e){this.setState({twoMin:e.target.value})}},{key:"twoMinHandleSplit",value:function(e){var t=e.split("$"),n=t.shift();console.log(n);for(var a=0;a<t.length;a++)if(t[a].includes(",")){var i=t[a].replace(","," ");i=i.replace(/\s/g,""),t[a]=i}this.setState({twoMinNums:t})}},{key:"handleNumChange5Min",value:function(e){this.setState({fiveMin:e.target.value})}},{key:"fiveMinHandleSplit",value:function(e){var t=e.split("$"),n=t.shift();console.log(n);for(var a=0;a<t.length;a++)if(t[a].includes(",")){var i=t[a].replace(","," ");i=i.replace(/\s/g,""),t[a]=i}this.setState({fiveMinNums:t})}},{key:"handleNumChange10Min",value:function(e){this.setState({tenMin:e.target.value})}},{key:"tenMinHandleSplit",value:function(e){var t=e.split("$"),n=t.shift();console.log(n);for(var a=0;a<t.length;a++)if(t[a].includes(",")){var i=t[a].replace(","," ");i=i.replace(/\s/g,""),t[a]=i}this.setState({tenMinNums:t})}},{key:"handleNumChange15Min",value:function(e){this.setState({fifteenMin:e.target.value})}},{key:"fifteenMinHandleSplit",value:function(e){var t=e.split("$"),n=t.shift();console.log(n);var a=t.length;this.setState({totalHorsesCurrent:a});for(var i=0;i<t.length;i++)if(t[i].includes(",")){var s=t[i].replace(","," ");s=s.replace(/\s/g,""),t[i]=s}this.setState({fifteenMinNums:t})}},{key:"handleNumChangePost",value:function(e){this.setState({postMin:e.target.value})}},{key:"postHandleSplit",value:function(e){var t=e.split("$"),n=t.shift();console.log(n);for(var a=0;a<t.length;a++)if(t[a].includes(",")){var i=t[a].replace(","," ");i=i.replace(/\s/g,""),t[a]=i}this.setState({postNums:t})}},{key:"render",value:function(){var e=this,t={gridTemplateColumns:this.state.auto};return i.a.createElement("div",null,i.a.createElement("h1",null,"CHARTING APP"),i.a.createElement("label",null,"15 Min"),i.a.createElement("input",{type:"text",id:"box1",value:this.state.value,onChange:this.handleNumChange15Min}),i.a.createElement("label",null,"10 Min"),i.a.createElement("input",{type:"text",id:"box1",value:this.state.value,onChange:this.handleNumChange10Min}),i.a.createElement("label",null,"5 Min"),i.a.createElement("input",{type:"text",id:"box1",value:this.state.value,onChange:this.handleNumChange5Min}),i.a.createElement("label",null,"2 Min"),i.a.createElement("input",{type:"text",id:"box1",value:this.state.value,onChange:this.handleNumChange2Min}),i.a.createElement("label",null,"POST TIME"),i.a.createElement("input",{type:"text",id:"box1",value:this.state.value,onChange:this.handleNumChangePost}),i.a.createElement("label",null,"Horses in NEXT race"),i.a.createElement("input",{type:"number",value:this.state.value,onChange:this.handleRaceNumChange}),i.a.createElement("button",{className:"btn",onClick:this.handleClick},"Generate"),i.a.createElement("div",{style:t,className:"grid-container"},this.state.fifteenMinNums.map(function(t,n){return i.a.createElement(m,{totalHorsesCurrent:e.state.totalHorsesCurrent,currentRace:e.state.currentRace,key:n,id:n+1,fiveMinNum:e.state.fiveMinNums[n],twoMinNum:e.state.twoMinNums[n],tenMinNum:e.state.tenMinNums[n],fifteenMinNum:t,postNum:e.state.postNums[n]})})))}}]),t}(a.Component)),d=function(e){function t(){return Object(r.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.2093f8f1.chunk.js.map