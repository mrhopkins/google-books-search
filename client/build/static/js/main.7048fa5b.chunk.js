(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(67)},37:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),o=a.n(l),c=(a(37),a(29)),s=a(7);var i=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary sticky-top"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary sticky-top"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/saved"},"Saved")))))},u=a(28),m=a(8),d=a(9),h=a(11),v=a(10),b=a(12);function f(e){var t=e.children;return r.a.createElement("div",{className:"container"},t)}function k(e){var t=e.children;return r.a.createElement("div",{className:"row"},t)}function p(e){var t=e.children;return r.a.createElement("div",{className:"col"},t)}var E=function(e){var t=e.onClick,a=e.children;return r.a.createElement("button",{onClick:t,className:"btn btn-primary"},a)};function g(e){var t=e.children;return r.a.createElement("ul",{className:"list-group"},t)}function N(e){var t=e.id,a=e.title,n=e.authors,l=e.description,o=e.thumbnail,c=e.href,s=e.clickEvent,i=e.saved;return r.a.createElement("li",{className:"list-group-item"},i?r.a.createElement("button",{className:"float-right btn btn-danger",onClick:function(e){return s(e,t)}},"Delete"):r.a.createElement("button",{className:"float-right btn btn-success",onClick:function(e){return s(e,a,n,l,c,o)}},"Save"),r.a.createElement("a",{className:"float-right btn btn-primary ml-2 mr-2",href:c,target:"_blank",rel:"noopener noreferrer"},"View"),r.a.createElement("h4",null,a),r.a.createElement("h5",null,"by ",n.length>1?n.reduce(function(e,t){return[e,", ",t]}):n[0]),r.a.createElement(k,null,r.a.createElement("div",{className:"col-auto"},r.a.createElement("img",{src:o,alt:a})),r.a.createElement(p,null,r.a.createElement("p",null,l))))}var S=a(14),B=a.n(S),y={getBooks:function(e){return B.a.get("/api/books",{params:{q:e}})},getSavedBooks:function(){return B.a.get("/api/savedBooks")},deleteSavedBook:function(e){return B.a.delete("/api/savedBooks/".concat(e))},saveBook:function(e){return B.a.post("/api/savedBooks",e)}},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],bookSearch:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),y.getBooks(a.state.bookSearch).then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)}),a.setState({bookSearch:""})},a.handleSave=function(e,t,a,n,r,l){e.preventDefault(),y.saveBook({title:t,authors:a,description:n,href:r,thumbnail:l}).then(function(e){return alert("Book saved")})},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(f,null,r.a.createElement(k,null,r.a.createElement("div",{className:"col rounded text-center bg-success text-white mt-4 p-4"},r.a.createElement("h1",null,"(React) Google Books Search"),r.a.createElement("h4",null,"Search for and Save Books of Interest"))),r.a.createElement(k,null,r.a.createElement("div",{className:"col rounded bg-secondary text-white mb-4 mt-4 p-4"},r.a.createElement("h4",null,"Book Search"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"bookSearch"},"Book"),r.a.createElement("input",{type:"text",className:"form-control",id:"bookSearch",name:"bookSearch",value:this.state.bookSearch,onChange:this.handleInputChange})),r.a.createElement(E,{onClick:this.handleFormSubmit},"Search")))),r.a.createElement(k,null,r.a.createElement("div",{className:"col border border-rounded bg-warning p-4"},r.a.createElement("h4",null,"Results"),this.state.books.length?r.a.createElement(g,null,this.state.books.map(function(t){return r.a.createElement(N,{key:t.volumeInfo.infoLink,title:t.volumeInfo.title,authors:Array.isArray(t.volumeInfo.authors)?t.volumeInfo.authors:["Unknown"],description:t.volumeInfo.description,thumbnail:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.smallThumbnail:"https://placehold.it/128x197?text=No%20Preview",href:t.volumeInfo.infoLink,saved:!1,clickEvent:e.handleSave})})):r.a.createElement("h6",{className:"text-center"},"No books to display currently"))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={savedBooks:[]},a.loadSavedBooks=function(){y.getSavedBooks().then(function(e){return a.setState({savedBooks:e.data})})},a.deleteSavedBook=function(e,t){e.preventDefault(),y.deleteSavedBook(t).then(function(e){return a.loadSavedBooks()}).catch(function(e){return console.log(e)})},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadSavedBooks()}},{key:"render",value:function(){var e=this;return r.a.createElement(f,null,r.a.createElement(k,null,r.a.createElement("div",{className:"col rounded text-center bg-success text-white mt-4 mb-4 p-4"},r.a.createElement("h1",null,"(React) Google Books Search"),r.a.createElement("h4",null,"Search for and Save Books of Interest"))),r.a.createElement(k,null,r.a.createElement("div",{className:"col border border-rounded bg-warning p-4"},r.a.createElement("h4",null,"Saved Books"),this.state.savedBooks.length?r.a.createElement(g,null,this.state.savedBooks.map(function(t){return r.a.createElement(N,{key:t._id,id:t._id,title:t.title,authors:t.authors,description:t.description,thumbnail:t.thumbnail?t.thumbnail:"https://placehold.it/128x197?text=No%20Preview",href:t.href,saved:!0,clickEvent:e.deleteSavedBook})})):r.a.createElement("h6",{className:"text-center"},"No books to display currently"))))}}]),t}(n.Component),j=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"404 Page Not Found")}}]),t}(n.Component);var O=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:w}),r.a.createElement(s.a,{exact:!0,path:"/saved",component:x}),r.a.createElement(s.a,{component:j}))))};o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.7048fa5b.chunk.js.map