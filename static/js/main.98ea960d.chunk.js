(this["webpackJsonpjs-band-hw-task-6"]=this["webpackJsonpjs-band-hw-task-6"]||[]).push([[0],{31:function(e,t,n){e.exports=n(46)},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(19),i=n.n(a),c=n(23),l=n(17),s=n(7),u=(n(40),n(41),n(16)),d=function(){return o.a.createElement("div",{className:"card-header font-weight-bold"},"ToDo List")},p=function(){return o.a.createElement("div",{className:"card-footer font-weight-bold"},"Aleksei Kotvitskyi")},h=n(5),b=n(11),m=n(12),f=n(14),O=n(13),y=n(3),v=n(15),j=n(2),E=n.n(j);n(42);function g(e){var t=e.items,n=e.dropdownInf,r=e.visibleToggle,a=e.textValue,i=e.handleClick;return o.a.createElement("div",{className:n.open?"dropdownList open":"dropdownList"},o.a.createElement("button",{type:"button",onClick:function(){return r(n)}},a),o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",{key:e,onClick:i},e)}))))}g.defaultProps={dropdownInf:E.a.shape({open:E.a.bool,name:E.a.string}),handleClick:E.a.func};var w=g,C=function(e){return{type:"EDIT_TODO",showModal:!0,todo:e}},T=function(e){return{type:"SHOW_MODAL",value:e}};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(f.a)(this,Object(O.a)(t).call(this))).state={openByDone:{open:!0,name:"openByDone"},openByPriority:{open:!0,name:"openByPriority"},sortBy:{priority:"all",completed:"all",searchText:""}},e.visibleChange=e.visibleChange.bind(Object(y.a)(e)),e.handleClick=e.handleClick.bind(Object(y.a)(e)),e.searchByTitle=e.searchByTitle.bind(Object(y.a)(e)),e}return Object(v.a)(t,e),Object(m.a)(t,[{key:"visibleChange",value:function(e){this.setState((function(t){return Object(h.a)({},e.name,D({},t[e.name],{open:!t[e.name].open}))}))}},{key:"handleClick",value:function(e,t){var n=this.props.handleSorted,r=this.state.sortBy,o=e.target.innerText;this.setState((function(e){return{sortBy:D({},e.sortBy,Object(h.a)({},t,o))}})),n(D({},r,Object(h.a)({},t,o)))}},{key:"searchByTitle",value:function(e){var t=this.props.handleSorted,n=this.state.sortBy,r=e.target.value;this.setState((function(e){return{sortBy:D({},e.sortBy,{searchText:r})}})),t(D({},n,{searchText:r}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.openByDone,r=t.openByPriority,a=t.sortBy,i=a.priority,c=a.completed,l=this.props.handleShowModal;return o.a.createElement("div",{className:"d-flex justify-content-around mt-3"},o.a.createElement("div",null,o.a.createElement("input",{type:"search",placeholder:"search by title",className:"form-control",onChange:this.searchByTitle})),o.a.createElement(w,{items:["all","open","done"],dropdownInf:n,visibleToggle:this.visibleChange,handleClick:function(t){return e.handleClick(t,"completed")},textValue:c}),o.a.createElement(w,{items:["all","high","normal","low"],dropdownInf:r,visibleToggle:this.visibleChange,handleClick:function(t){return e.handleClick(t,"priority")},textValue:i}),o.a.createElement("button",{className:"btn btn-dark col-2 p-0",style:{height:"40px"},type:"button",onClick:function(){return l(!0)}},"\u0421reate"))}}]),t}(r.Component),P=Object(s.b)(null,(function(e){return{handleShowModal:function(t){return e(T(t))}}}))(I);n(43);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(f.a)(this,Object(O.a)(t).call(this,e))).state={openByPriority:{name:"openByPriority",open:!0},title:"",description:"",priority:"high",id:null,done:!1},n.visibleToggle=n.visibleToggle.bind(Object(y.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n.resetData=n.resetData.bind(Object(y.a)(n)),n.handleChange=n.handleChange.bind(Object(y.a)(n)),n.handleClick=n.handleClick.bind(Object(y.a)(n)),n.handleCancel=n.handleCancel.bind(Object(y.a)(n)),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.editItem;if(t&&e.editItem!==t){var n=t.title,r=t.description,o=t.priority,a=t.id,i=t.done;this.setState({title:n,description:r,priority:o,id:a,done:i})}}},{key:"handleChange",value:function(e){var t="INPUT"===e.target.tagName?"title":"description",n=e.target.value;this.setState(Object(h.a)({},t,n))}},{key:"handleSubmit",value:function(e){var t=this.state,n=t.title,r=t.description,o=t.priority,a=t.done,i=t.id,c={title:n,description:r,priority:o,done:a},l=this.props,s=l.handleShowModal,u=l.creatTodoInComp,d=l.editTodoInComponent,p=l.editItem,h=l.clearEditItemInComponent;e.preventDefault(),p?(d(N({},c,{id:i})),h()):u(c),s(!1),this.resetData()}},{key:"handleCancel",value:function(){(0,this.props.handleShowModal)(!1),this.resetData()}},{key:"handleClick",value:function(e){this.setState({priority:e.target.innerText})}},{key:"resetData",value:function(){this.setState({title:"",description:"",priority:"high",id:null,done:!1})}},{key:"visibleToggle",value:function(e){this.setState((function(t){return Object(h.a)({},e.name,N({},t[e.name],{open:!t[e.name].open}))}))}},{key:"render",value:function(){var e=this.state,t=e.openByPriority,n=e.title,r=e.description,a=e.priority,i=this.props.show;return o.a.createElement("div",{className:i?"modalWindow show":"modalWindow"},o.a.createElement("form",{className:"createTodoContent",onSubmit:this.handleSubmit},o.a.createElement("label",null,"Title:",o.a.createElement("input",{type:"text",placeholder:"Title",title:"please fill this field",className:"form-control",value:n,onChange:this.handleChange,required:!0})),o.a.createElement("label",null,"Description:",o.a.createElement("div",null,o.a.createElement("textarea",{placeholder:"Description",className:"form-control",value:r,onChange:this.handleChange}))),o.a.createElement("p",null,"Priority: "),o.a.createElement(w,{items:["high","normal","low"],dropdownInf:t,visibleToggle:this.visibleToggle,handleClick:this.handleClick,textValue:a}),o.a.createElement("div",{className:"btnGroup"},o.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:this.handleCancel},"Cancel"),o.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"Save"))))}}]),t}(r.Component);_.defaultProps={editItem:void 0};var B=Object(s.b)((function(e){return{show:e.todos.showModal,editItem:e.todos.editItem}}),(function(e){return{creatTodoInComp:function(t){return e(function(e){return{type:"CREATE_TODO",showModal:!0,todo:e}}(t))},editTodoInComponent:function(t){return e(C(t))},handleShowModal:function(t){return e(T(t))},clearEditItemInComponent:function(){return e({type:"CLEAR_EDIT_ITEM",value:void 0})}}}))(_),x=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(f.a)(this,Object(O.a)(t).call(this))).state={dropdownOpen:!1},e.handleOpen=e.handleOpen.bind(Object(y.a)(e)),e}return Object(v.a)(t,e),Object(m.a)(t,[{key:"handleOpen",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.todo,r=t.editTodoInComponent,a=t.removeTodoInComponent,i=t.toggleTodoInComponent,c=this.state.dropdownOpen;return o.a.createElement("div",{className:"card text-white ".concat(n.done?"bg-success":"bg-secondary","  mb-3 todoItem show")},o.a.createElement("div",{className:"card-header"},n.title),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},n.description)),o.a.createElement("div",{className:"d-flex justify-content-around card-footer"},o.a.createElement("p",null,n.priority),o.a.createElement("div",{className:c?"dropdownEditTodo open":"dropdownEditTodo"},o.a.createElement("button",{type:"button",onClick:this.handleOpen},"..."),o.a.createElement("ul",null,o.a.createElement("li",{onClick:function(){i(n.id),e.handleOpen()}},"done"),o.a.createElement("li",{onClick:function(){r(n),e.handleOpen()}},"edit"),o.a.createElement("li",{onClick:function(){a(n.id)}},"delete")))))}}]),t}(r.Component),M=Object(s.b)(null,(function(e){return{editTodoInComponent:function(t){return e(C(t))},toggleTodoInComponent:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))},removeTodoInComponent:function(t){return e(function(e){return{type:"REMOVE_TODO",id:e}}(t))}}}))(x);n(44);var L=Object(s.b)((function(e){return{todos:e.todos.todos}}))((function(e){var t=e.todos;return o.a.createElement("ul",{className:"todoList"},t.map((function(e){return o.a.createElement(M,{key:e.id,todo:e})})))})),R=n(21);var V=function(e,t){var n=Object(R.a)(t);switch(e.completed){case"done":n=n.filter((function(e){return e.done}));break;case"open":n=n.filter((function(e){return!e.done}))}switch(e.priority){case"high":n=n.filter((function(e){return"high"===e.priority}));break;case"normal":n=n.filter((function(e){return"normal"===e.priority}));break;case"low":n=n.filter((function(e){return"low"===e.priority}))}return e.searchText&&(n=n.filter((function(t){return t.title.includes(e.searchText)}))),n.sort((function(e,t){return e.done-t.done}))};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(f.a)(this,Object(O.a)(t).call(this))).state={},e.sortedItems=e.sortedItems.bind(Object(y.a)(e)),e}return Object(v.a)(t,e),Object(m.a)(t,[{key:"sortedItems",value:function(e){this.setState((function(t){var n=V(e,t.items);return t.items.length===n.length?{sortBy:G({},e),filterItems:n,items:n}:{sortBy:G({},e),filterItems:n}}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(P,{handleSorted:this.sortedItems}),o.a.createElement(B,null),o.a.createElement(L,null))}}]),t}(r.Component),W=Object(s.b)()(U);function X(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null),o.a.createElement(W,null),o.a.createElement(p,null))}function F(){return o.a.createElement("h1",null,"Not Found...")}var H=function(){return o.a.createElement(u.d,null,o.a.createElement(u.b,{exact:!0,path:"/"},o.a.createElement(u.a,{to:"/todos"})),o.a.createElement(u.b,{path:"/todos",component:X}),o.a.createElement(u.b,{path:"*",component:F}))};function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K={todos:[],showModal:!1,editItem:void 0},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TODO":return q({},e,{showModal:t.showModal,todos:[].concat(Object(R.a)(e.todos),[q({id:Date.now()},t.todo)])});case"EDIT_TODO":return q({},e,{showModal:t.showModal,editItem:t.todo,todos:e.todos.map((function(e){return e.id===t.todo.id?q({},t.todo):e}))});case"TOGGLE_TODO":return q({},e,{todos:e.todos.map((function(e){return e.id===t.id?q({},e,{done:!e.done}):e}))});case"REMOVE_TODO":return q({},e,{todos:e.todos.filter((function(e){return e.id!==t.id}))});case"SHOW_MODAL":return q({},e,{showModal:t.value});case"CLEAR_EDIT_ITEM":return q({},e,{editItem:t.value});default:return e}},Q=Object(l.b)({todos:z}),Y=Object(l.c)(Q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(o.a.createElement(s.a,{store:Y},o.a.createElement(c.a,{basename:"/"},o.a.createElement(H,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.98ea960d.chunk.js.map