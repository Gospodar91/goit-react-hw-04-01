(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[6],{65:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return c}))},67:function(e,t,n){"use strict";n.r(t);var r=n(65),a=n(16),c=n(17),o=n(20),i=n(18),u=n(21),s=n(0),l=n.n(s),p=n(19),f=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={reviewsInfo:[]},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.getReview(this.props.match.params.movieId).then((function(t){return e.setState({reviewsInfo:t})}))}},{key:"render",value:function(){var e=Object(r.a)({},this.state.reviewsInfo.data).results,t=e&&e.slice([0],[3]);return console.log("results",t),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Rewiews"),l.a.createElement("ul",null,t&&t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("h2",null,e.author),l.a.createElement("p",null,e.content))}))))}}]),t}(s.Component);t.default=f}}]);
//# sourceMappingURL=6.5f704074.chunk.js.map