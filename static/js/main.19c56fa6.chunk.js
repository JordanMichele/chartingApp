(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(8),r=n.n(i),h=(n(14),n(2)),o=n(3),l=n(5),u=n(4),c=n(6),p=(n(15),n(1)),m=(n(16),function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={percentChange10:0,percentChange5:0,percentChange2:0,percentChange:0,numbers15:"numbers15",numbers10:"numbers10",numbers5:"numbers5",numbers2:"numbers2",numbersPost:"numbersPost",perChangeCss1:"perChange",perChangeCss2:"perChange",perChangeCss3:"perChange",perChangeCss4:"perChange",calledFifteenTo10:!1,calledTenTo5:!1,calledFiveTo2:!1,calledTwoToPost:!1,addNewState:0,avgNewState:0,addBrandNewState:0,avgBrandNewState:0},n.percentChange=n.percentChange.bind(Object(p.a)(n)),n.rowNumber=n.rowNumber.bind(Object(p.a)(n)),n.percentChangeInc=n.percentChangeInc.bind(Object(p.a)(n)),n.fifteenToTen=n.fifteenToTen.bind(Object(p.a)(n)),n.tenToFive=n.tenToFive.bind(Object(p.a)(n)),n.fiveToTwo=n.fiveToTwo.bind(Object(p.a)(n)),n.twoToPost=n.twoToPost.bind(Object(p.a)(n)),n.main=n.main.bind(Object(p.a)(n)),n.percentChangeOverall=n.percentChangeOverall.bind(Object(p.a)(n)),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"main",value:function(){this.fifteenToTen(),this.tenToFive(),this.fiveToTwo(),this.twoToPost()}},{key:"componentDidMount",value:function(){console.log("this.fifteenToTen() component did mount")}},{key:"componentDidUpdate",value:function(e){var t=this.props.tenMinNum,n=this.props.fiveMinNum,a=this.props.twoMinNum,s=this.props.postNum;void 0!==t&&!1===this.state.calledFifteenTo10?(this.fifteenToTen(),this.setState({calledFifteenTo10:!0})):e.tenMinNum!==t&&!0===this.state.calledFifteenTo10&&this.main(),void 0!==n&&!1===this.state.calledTenTo5?(this.tenToFive(),this.setState({calledTenTo5:!0})):e.fiveMinNum!==n&&!0===this.state.calledTenTo5&&this.main(),void 0!==a&&!1===this.state.calledFiveTo2?(this.fiveToTwo(),this.setState({calledFiveTo2:!0})):e.twoMinNum!==a&&!0===this.state.calledFiveTo2&&this.main(),void 0!==s&&!1===this.state.calledTwoToPost?(this.twoToPost(),this.setState({calledTwoToPost:!0})):e.postNum!==s&&!0===this.state.calledTwoToPost&&this.main()}},{key:"percentChangeOverall",value:function(){var e=this.props.fifteenMinNum,t=this.props.tenMinNum,n=this.props.fiveMinNum,a=this.props.twoMinNum,s=this.props.postNum,i=.1*this.percentChange(e,t)+.15*this.percentChange(t,n)+.3*this.percentChange(n,a)+.45*this.percentChange(a,s);this.setState({addNewState:i});var r=i/4;this.setState({avgNewState:r});var h=.1*this.percentChange(e,t)+.15*this.percentChange(e,n)+.3*this.percentChange(e,a)+.45*this.percentChange(e,s);this.setState({addBrandNewState:h});var o=h/4;if(this.setState({avgBrandNewState:o}),i>9){this.setState({perChangeCss1:"perChangeHit"})}else{this.setState({perChangeCss1:"perChange"})}if(r>9){this.setState({perChangeCss2:"perChangeHit"})}else{this.setState({perChangeCss2:"perChange"})}if(h>9){this.setState({perChangeCss3:"perChangeHit"})}else{this.setState({perChangeCss3:"perChange"})}if(o>9){this.setState({perChangeCss4:"perChangeHit"})}else{this.setState({perChangeCss4:"perChange"})}}},{key:"percentChange",value:function(e,t){return 100*((e-t)/e)}},{key:"percentChangeInc",value:function(e,t){return 100*((e-t)/t)}},{key:"rowNumber",value:function(e,t,n){var a=n/(e/(e/t));return Math.ceil(a)}},{key:"fifteenToTen",value:function(){var e,t=this.props.fifteenMinNum,n=this.props.tenMinNum;if(parseInt(t)>parseInt(n)){var a=this.percentChange(parseInt(t),parseInt(n));a>23?(e="numbers10BigHit",this.setState({numbers10:e})):(e="numbers10Hit",this.setState({numbers10:e})),this.setState({percentChange:a})}else if(parseInt(t)<=parseInt(n)){var s=this.percentChangeInc(parseInt(n),parseInt(t));this.setState({numbers10:"numbers10"});var i=this.state.percentChange-s;this.setState({percentChange:i})}}},{key:"tenToFive",value:function(){var e,t=this.props.fiveMinNum,n=this.props.tenMinNum;if(parseInt(n)>parseInt(t)){var a=this.percentChange(parseInt(n),parseInt(t));a>23?(e="numbers5BigHit",this.setState({numbers5:e})):(e="numbers5Hit",this.setState({numbers5:e})),this.setState({percentChange10:a})}else if(parseInt(n)<=parseInt(t)){var s=this.percentChangeInc(parseInt(t),parseInt(n));this.setState({numbers5:"numbers5"});var i=this.state.percentChange10-s;this.setState({percentChange10:i})}}},{key:"fiveToTwo",value:function(){var e,t=this.props.fiveMinNum,n=this.props.twoMinNum;if(parseInt(t)>parseInt(n)){var a=this.percentChange(parseInt(t),parseInt(n));a>23?(e="numbers2BigHit",this.setState({numbers2:e})):(e="numbers2Hit",this.setState({numbers2:e})),this.setState({percentChange5:a})}else if(parseInt(t)<=parseInt(n)){var s=this.percentChangeInc(parseInt(n),parseInt(t));this.setState({numbers2:"numbers2"});var i=this.state.percentChange5-s;this.setState({percentChange5:i})}}},{key:"twoToPost",value:function(){var e,t=this.props.postNum,n=this.props.twoMinNum;if(parseInt(n)>parseInt(t)){var a=this.percentChange(parseInt(n),parseInt(t));a>23?(e="numbersPostBigHit",this.setState({numbersPost:e})):(e="numbersPostHit",this.setState({numbersPost:e})),this.setState({percentChange2:a})}else if(parseInt(n)<=parseInt(t)){var s=this.percentChangeInc(parseInt(t),parseInt(n));this.setState({numbersPost:"numbersPost"});var i=this.state.percentChange2-s;this.setState({percentChange2:i})}}},{key:"render",value:function(){var e=this.props.fiveMinNum,t=this.props.twoMinNum,n=this.props.tenMinNum,a=this.props.fifteenMinNum,i=this.props.postNum;return s.a.createElement("div",{className:"grid-item"},s.a.createElement("ul",{className:"List"},s.a.createElement("li",{className:this.state.numbers15}," ",a),s.a.createElement("li",{className:this.state.numbers10}," ",n),s.a.createElement("li",{className:this.state.numbers5}," ",e),s.a.createElement("li",{className:this.state.numbers2}," ",t),s.a.createElement("li",{className:this.state.numbersPost}," ",i)))}}]),t}(a.Component)),v=(n(17),function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={horsesThisRace:0,horsesNextRace:0,columns:[],rows:[],auto:"",rowNums:"",fiveMinNums:[],fiveMin:"",tenMinNums:[],tenMin:"",fifteenMinNums:[],fifteenMin:"",twoMinNums:[],twoMin:"",postNums:[],postMin:"",totalHorsesCurrent:0,summedTotals:[]},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.handleRaceNumChange=n.handleRaceNumChange.bind(Object(p.a)(n)),n.handleCurHorseNum=n.handleCurHorseNum.bind(Object(p.a)(n)),n.handleNumChange2Min=n.handleNumChange2Min.bind(Object(p.a)(n)),n.twoMinHandleSplit=n.twoMinHandleSplit.bind(Object(p.a)(n)),n.handleNumChange5Min=n.handleNumChange5Min.bind(Object(p.a)(n)),n.fiveMinHandleSplit=n.fiveMinHandleSplit.bind(Object(p.a)(n)),n.handleNumChange10Min=n.handleNumChange10Min.bind(Object(p.a)(n)),n.tenMinHandleSplit=n.tenMinHandleSplit.bind(Object(p.a)(n)),n.handleNumChange15Min=n.handleNumChange15Min.bind(Object(p.a)(n)),n.fifteenMinHandleSplit=n.fifteenMinHandleSplit.bind(Object(p.a)(n)),n.handleNumChangePost=n.handleNumChangePost.bind(Object(p.a)(n)),n.postHandleSplit=n.postHandleSplit.bind(Object(p.a)(n)),n.totalPercentChange=n.totalPercentChange.bind(Object(p.a)(n)),n.percentChangeRow=n.percentChangeRow.bind(Object(p.a)(n)),n.percentChange=n.percentChange.bind(Object(p.a)(n)),n.percentChangeInc=n.percentChangeInc.bind(Object(p.a)(n)),n.rowNumber=n.rowNumber.bind(Object(p.a)(n)),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"totalPercentChange",value:function(){var e=this.state.tenMinNums[0],t=this.state.fiveMinNums[0],n=this.state.twoMinNums[0],a=this.state.postNums[0],s=[];if(void 0!==typeof this.state.fifteenMinNums[0]){for(var i=0;i<this.state.fifteenMinNums.length;i++){var r=void 0,h=void 0,o=void 0,l=void 0,u=void 0,c=void 0,p=void 0,m=this.state.fifteenMinNums[i];if("string"===typeof e)r=.1*this.percentChangeRow(this.state.tenMinNums[i],m);if("string"===typeof t)h=.15*this.percentChangeRow(this.state.fiveMinNums[i],this.state.tenMinNums[i]),u=.15*this.percentChangeRow(this.state.fiveMinNums[i],m);if("string"===typeof n)o=.3*this.percentChangeRow(this.state.twoMinNums[i],this.state.fiveMinNums[i]),c=.3*this.percentChangeRow(this.state.twoMinNums[i],m);if("string"===typeof a)l=.45*this.percentChangeRow(this.state.postNums[i],this.state.twoMinNums[i]),p=.45*this.percentChangeRow(this.state.postNums[i],m);var v=r+h+o+l,f=r+u+c+p,g=v+v/4+f+f/4;s.push(g)}this.rowNumber(this.state.totalHorsesCurrent,this.state.horsesNextRace,s)}}},{key:"percentChange",value:function(e,t){return 100*((e-t)/e)}},{key:"percentChangeInc",value:function(e,t){return 100*((e-t)/t)}},{key:"percentChangeRow",value:function(e,t){var n=0;parseInt(e)<parseInt(t)?n+=this.percentChange(parseInt(t),parseInt(e)):n-=this.percentChangeInc(parseInt(e),parseInt(t));return n}},{key:"rowNumber",value:function(e,t,n){for(var a={},s=0;s<n.length;s++){var i=(s+1)/(e/(e/t)),r=Math.ceil(i);a[r]?a[r]=a[r]+=n[s]:a[r]=n[s]}console.log(a);var h=Object.values(a).map(function(e){return e/100});this.setState({summedTotals:h})}},{key:"inputNext",value:function(e){for(var t="",n=0;n<e;n++)t+="auto ";this.setState({auto:t})}},{key:"inputCurrent",value:function(e){for(var t="",n=0;n<e;n++)t+="auto ";this.setState({rowNums:t})}},{key:"handleClick",value:function(){this.inputNext(this.state.horsesNextRace),this.inputCurrent(this.state.horsesThisRace),this.handleColumnNums(),this.handleRowNums(),this.fifteenMinHandleSplit(this.state.fifteenMin),this.tenMinHandleSplit(this.state.tenMin),this.fiveMinHandleSplit(this.state.fiveMin),this.twoMinHandleSplit(this.state.twoMin),this.postHandleSplit(this.state.postMin),this.totalPercentChange()}},{key:"handleRaceNumChange",value:function(e){this.setState({horsesNextRace:e.target.value})}},{key:"handleCurHorseNum",value:function(e){this.setState({horsesThisRace:e.target.value})}},{key:"handleColumnNums",value:function(){for(var e=[],t=this.state.horsesNextRace,n=0;n<t;n++)e.push(n+1);this.setState({columns:e})}},{key:"handleRowNums",value:function(){for(var e=[],t=this.state.horsesThisRace,n=0;n<t;n++)e.push(n+1);this.setState({rows:e})}},{key:"handleNumChange2Min",value:function(e){this.setState({twoMin:e.target.value})}},{key:"twoMinHandleSplit",value:function(e){var t=e.split("$"),n=t.shift();console.log(n);for(var a=0;a<t.length;a++)if(t[a].includes(",")){var s=t[a].replace(","," ");s=s.replace(/\s/g,""),t[a]=s}this.setState({twoMinNums:t})}},{key:"handleNumChange5Min",value:function(e){this.setState({fiveMin:e.target.value})}},{key:"fiveMinHandleSplit",value:function(e){var t=e.split("$"),n=t.shift();console.log(n);for(var a=0;a<t.length;a++)if(t[a].includes(",")){var s=t[a].replace(","," ");s=s.replace(/\s/g,""),t[a]=s}this.setState({fiveMinNums:t})}},{key:"handleNumChange10Min",value:function(e){this.setState({tenMin:e.target.value})}},{key:"tenMinHandleSplit",value:function(e){var t=e.split("$"),n=t.shift();console.log(n);for(var a=0;a<t.length;a++)if(t[a].includes(",")){var s=t[a].replace(","," ");s=s.replace(/\s/g,""),t[a]=s}this.setState({tenMinNums:t})}},{key:"handleNumChange15Min",value:function(e){this.setState({fifteenMin:e.target.value})}},{key:"fifteenMinHandleSplit",value:function(e){var t=e.split("$"),n=t.shift();console.log(n);var a=t.length;this.setState({totalHorsesCurrent:a});for(var s=0;s<t.length;s++)if(t[s].includes(",")){var i=t[s].replace(","," ");i=i.replace(/\s/g,""),t[s]=i}this.setState({fifteenMinNums:t})}},{key:"handleNumChangePost",value:function(e){this.setState({postMin:e.target.value})}},{key:"postHandleSplit",value:function(e){var t=e.split("$"),n=t.shift();console.log(n);for(var a=0;a<t.length;a++)if(t[a].includes(",")){var s=t[a].replace(","," ");s=s.replace(/\s/g,""),t[a]=s}this.setState({postNums:t})}},{key:"render",value:function(){var e=this,t={gridTemplateColumns:this.state.auto},n={gridTemplateColumns:this.state.rowNums};return s.a.createElement("div",null,s.a.createElement("h1",{className:"title"},"DOUBLES CHART"),s.a.createElement("label",null,"15 Min"),s.a.createElement("input",{type:"text",id:"box1",value:this.state.value,onChange:this.handleNumChange15Min}),s.a.createElement("label",null,"10 Min"),s.a.createElement("input",{type:"text",id:"box1",value:this.state.value,onChange:this.handleNumChange10Min}),s.a.createElement("label",null,"5 Min"),s.a.createElement("input",{type:"text",id:"box1",value:this.state.value,onChange:this.handleNumChange5Min}),s.a.createElement("label",null,"2 Min"),s.a.createElement("input",{type:"text",id:"box1",value:this.state.value,onChange:this.handleNumChange2Min}),s.a.createElement("label",null,"POST TIME"),s.a.createElement("input",{type:"text",id:"box1",value:this.state.value,onChange:this.handleNumChangePost}),s.a.createElement("label",null,"Horses in NEXT race"),s.a.createElement("input",{type:"number",value:this.state.value,onChange:this.handleRaceNumChange}),s.a.createElement("label",null,"Horses in CURRENT race"),s.a.createElement("input",{type:"number",value:this.state.value,onChange:this.handleCurHorseNum}),s.a.createElement("button",{className:"btn",onClick:this.handleClick},"Generate"),s.a.createElement("div",{style:t,className:"grid-container"},this.state.columns.map(function(e,t){return s.a.createElement("h1",{className:"grid-item-num",key:t},e)}),this.state.fifteenMinNums.map(function(t,n){return s.a.createElement(m,{totalHorsesCurrent:e.state.totalHorsesCurrent,currentRace:e.state.horsesNextRace,key:n,id:n+1,fiveMinNum:e.state.fiveMinNums[n],twoMinNum:e.state.twoMinNums[n],tenMinNum:e.state.tenMinNums[n],fifteenMinNum:t,postNum:e.state.postNums[n]})})),s.a.createElement("h2",{className:"title"},"CURRENT RACE TOTALS"),s.a.createElement("div",{style:n,className:"sumNum-grid-item-num"},this.state.rows.map(function(e,t){return s.a.createElement("h1",{className:"grid-item-num",key:t},e)}),this.state.summedTotals.map(function(e,t){return s.a.createElement("p",{className:"grid-item-num"+(e>0?"-HIT":"-NO"),key:t},Math.round(100*e)/100)})))}}]),t}(a.Component)),f=function(e){function t(){return Object(h.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(v,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.19c56fa6.chunk.js.map