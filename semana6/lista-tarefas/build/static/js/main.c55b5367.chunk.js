(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),l=a(10),o=a(1),c=a(2);a(19);function u(){const e=Object(o.a)(["\n  display: inline;\n  margin: 10px;\n  font-size: 10px;\n\n"]);return u=function(){return e},e}function p(){const e=Object(o.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  gap: 10px;\n"]);return p=function(){return e},e}function f(){const e=Object(o.a)(["\n  text-align: left;\n  display: inline;\n  text-decoration: ",";\n  cursor: pointer;\n"]);return f=function(){return e},e}function m(){const e=Object(o.a)(["\n  padding: 0;\n  width: 200px;\n"]);return m=function(){return e},e}const h=c.a.ul(m()),d=c.a.li(f(),({completa:e})=>e?"line-through":"none"),g=c.a.div(p()),E=c.a.button(u());var v=class extends r.a.Component{constructor(...e){super(...e),this.state={tarefas:[],inputValue:"",filter:"pendentes"},this.onChangeInput=(e=>{this.setState({inputValue:e.target.value})}),this.criaTarefa=(()=>{if(""===this.state.inputValue)alert("Campo de tarefa vazio");else{const e=[{id:Date.now(),texto:this.state.inputValue,completa:!1},...this.state.tarefas];this.setState({tarefas:e,inputValue:""})}}),this.selectTarefa=(e=>{const t=this.state.tarefas.map(t=>{if(t.id===e){const e=Object(l.a)({},t);return e.completa=!e.completa,e}return t});this.setState({tarefas:t})}),this.onChangeFilter=(e=>{this.setState({filter:e.target.value})}),this.onKeyEnterPress=(e=>{"Enter"===e.key&&this.criaTarefa()}),this.removeTarefa=(e=>{const t=this.state.tarefas.filter(t=>t.id!==e);this.setState({tarefas:t})})}componentDidMount(){if(localStorage.getItem("tarefas")){const e=JSON.parse(localStorage.getItem("tarefas"));this.setState({tarefas:e})}}componentDidUpdate(){localStorage.setItem("tarefas",JSON.stringify(this.state.tarefas))}render(){const e=this.state.tarefas.filter(e=>{switch(this.state.filter){case"pendentes":return!e.completa;case"completas":return e.completa;default:return!0}});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Lista de tarefas"),r.a.createElement(g,null,r.a.createElement("input",{value:this.state.inputValue,onChange:this.onChangeInput,onKeyPress:this.onKeyEnterPress}),r.a.createElement("button",{onClick:this.criaTarefa},"Adicionar")),r.a.createElement("br",null),r.a.createElement(g,null,r.a.createElement("label",null,"Filtro"),r.a.createElement("select",{value:this.state.filter,onChange:this.onChangeFilter},r.a.createElement("option",{value:""},"Nenhum"),r.a.createElement("option",{value:"pendentes"},"Pendentes"),r.a.createElement("option",{value:"completas"},"Completas"))),r.a.createElement(h,null,e.map(e=>r.a.createElement("div",{key:e.id},r.a.createElement(d,{completa:e.completa,onClick:()=>this.selectTarefa(e.id)},e.texto),r.a.createElement(E,{onClick:()=>this.removeTarefa(e.id)},"Deletar")))))}};const C=document.getElementById("root");i.a.render(r.a.createElement(v,null),C)}},[[13,1,2]]]);
//# sourceMappingURL=main.c55b5367.chunk.js.map