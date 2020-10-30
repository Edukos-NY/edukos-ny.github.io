(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1408:function(e,a,t){"use strict";var c=t(1),l=t(6),r=t(0),o=(t(4),t(8)),n=t(10),i=r.forwardRef(function(e,a){var t=e.classes,n=e.className,i=e.row,d=void 0!==i&&i,s=Object(l.a)(e,["classes","className","row"]);return r.createElement("div",Object(c.a)({className:Object(o.a)(t.root,n,d&&t.row),ref:a},s))});a.a=Object(n.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(i)},1472:function(e,a,t){"use strict";var c=t(1),l=t(6),r=t(0),o=(t(4),t(8)),n=t(10),i=t(30),d=t(12),s=t(345),m=r.forwardRef(function(e,a){var t=e.classes,n=e.className,i=e.color,m=void 0===i?"secondary":i,h=e.edge,b=void 0!==h&&h,p=e.size,u=void 0===p?"medium":p,k=Object(l.a)(e,["classes","className","color","edge","size"]),g=r.createElement("span",{className:t.thumb});return r.createElement("span",{className:Object(o.a)(t.root,n,{start:t.edgeStart,end:t.edgeEnd}[b],"small"===u&&t["size".concat(Object(d.a)(u))])},r.createElement(s.a,Object(c.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(o.a)(t.switchBase,t["color".concat(Object(d.a)(m))]),input:t.input,checked:t.checked,disabled:t.disabled},ref:a},k)),r.createElement("span",{className:t.track}))});a.a=Object(n.a)(function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(i.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(i.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}},{name:"MuiSwitch"})(m)},1959:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),r=t(5),o=t(148),n=t(1472);function i(){var e=l.a.useState({checkedA:!0,checkedB:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1],i=e=>a=>{c(Object(r.a)(Object(r.a)({},t),{},{[e]:a.target.checked}))};return l.a.createElement("div",null,l.a.createElement(n.a,{checked:t.checkedA,onChange:i("checkedA"),value:"checkedA",inputProps:{"aria-label":"secondary checkbox"}}),l.a.createElement(n.a,{checked:t.checkedB,onChange:i("checkedB"),value:"checkedB",color:"primary",inputProps:{"aria-label":"primary checkbox"}}),l.a.createElement(n.a,{value:"checkedC",inputProps:{"aria-label":"primary checkbox"}}),l.a.createElement(n.a,{disabled:!0,value:"checkedD",inputProps:{"aria-label":"disabled checkbox"}}),l.a.createElement(n.a,{disabled:!0,checked:!0,value:"checkedE",inputProps:{"aria-label":"primary checkbox"}}),l.a.createElement(n.a,{defaultChecked:!0,value:"checkedF",color:"default",inputProps:{"aria-label":"checkbox with default color"}}))}var d=t(1408),s=t(1326);function m(){var e=l.a.useState({checkedA:!0,checkedB:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1],i=e=>a=>{c(Object(r.a)(Object(r.a)({},t),{},{[e]:a.target.checked}))};return l.a.createElement(d.a,{row:!0},l.a.createElement(s.a,{control:l.a.createElement(n.a,{checked:t.checkedA,onChange:i("checkedA"),value:"checkedA"}),label:"Secondary"}),l.a.createElement(s.a,{control:l.a.createElement(n.a,{checked:t.checkedB,onChange:i("checkedB"),value:"checkedB",color:"primary"}),label:"Primary"}),l.a.createElement(s.a,{control:l.a.createElement(n.a,{value:"checkedC"}),label:"Uncontrolled"}),l.a.createElement(s.a,{disabled:!0,control:l.a.createElement(n.a,{value:"checkedD"}),label:"Disabled"}),l.a.createElement(s.a,{disabled:!0,control:l.a.createElement(n.a,{checked:!0,value:"checkedE"}),label:"Disabled"}))}var h=t(1270),b=t(1268),p=t(1271);function u(){var e=l.a.useState({gilad:!0,jason:!1,antoine:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1],i=e=>a=>{c(Object(r.a)(Object(r.a)({},t),{},{[e]:a.target.checked}))};return l.a.createElement(b.a,{component:"fieldset"},l.a.createElement(h.a,{component:"legend"},"Assign responsibility"),l.a.createElement(d.a,null,l.a.createElement(s.a,{control:l.a.createElement(n.a,{checked:t.gilad,onChange:i("gilad"),value:"gilad"}),label:"Gilad Gray"}),l.a.createElement(s.a,{control:l.a.createElement(n.a,{checked:t.jason,onChange:i("jason"),value:"jason"}),label:"Jason Killian"}),l.a.createElement(s.a,{control:l.a.createElement(n.a,{checked:t.antoine,onChange:i("antoine"),value:"antoine"}),label:"Antoine Llorca"})),l.a.createElement(p.a,null,"Be careful"))}var k=t(341),g=t(10),E={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},y=t(1323),f=t(1265),v=Object(g.a)({switchBase:{color:E[300],"&$checked":{color:E[500]},"&$checked + $track":{backgroundColor:E[500]}},checked:{},track:{}})(n.a),w=Object(g.a)(e=>({root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}))(e=>{var a=e.classes,t=Object(k.a)(e,["classes"]);return l.a.createElement(n.a,Object.assign({focusVisibleClassName:a.focusVisible,disableRipple:!0,classes:{root:a.root,switchBase:a.switchBase,thumb:a.thumb,track:a.track,checked:a.checked}},t))}),C=Object(g.a)(e=>({root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.grey[500],"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}))(n.a);function j(){var e=l.a.useState({checkedA:!0,checkedB:!0,checkedC:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1],n=e=>a=>{c(Object(r.a)(Object(r.a)({},t),{},{[e]:a.target.checked}))};return l.a.createElement(d.a,null,l.a.createElement(s.a,{control:l.a.createElement(v,{checked:t.checkedA,onChange:n("checkedA"),value:"checkedA"}),label:"Custom color"}),l.a.createElement(s.a,{control:l.a.createElement(w,{checked:t.checkedB,onChange:n("checkedB"),value:"checkedB"}),label:"iOS style"}),l.a.createElement(f.a,{component:"div"},l.a.createElement(y.a,{component:"label",container:!0,alignItems:"center",spacing:1},l.a.createElement(y.a,{item:!0},"Off"),l.a.createElement(y.a,{item:!0},l.a.createElement(C,{checked:t.checkedC,onChange:n("checkedC"),value:"checkedC"})),l.a.createElement(y.a,{item:!0},"On"))))}var O=function(){var e=l.a.useState("female"),a=Object(o.a)(e,2),t=a[0],c=a[1];return l.a.createElement(b.a,{component:"fieldset"},l.a.createElement(h.a,{component:"legend"},"labelPlacement"),l.a.createElement(d.a,{"aria-label":"position",name:"position",value:t,onChange:function(e){c(e.target.value)},row:!0},l.a.createElement(s.a,{value:"top",control:l.a.createElement(n.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),l.a.createElement(s.a,{value:"start",control:l.a.createElement(n.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),l.a.createElement(s.a,{value:"bottom",control:l.a.createElement(n.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),l.a.createElement(s.a,{value:"end",control:l.a.createElement(n.a,{color:"primary"}),label:"End",labelPlacement:"end"})))},$=t(20);a.default=(()=>l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement($.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Switch"}]})),l.a.createElement($.h,{title:"Simple Switch"},l.a.createElement(i,null)),l.a.createElement("div",{className:"py-12"}),l.a.createElement($.h,{title:"Switch with Label"},l.a.createElement(m,null)),l.a.createElement("div",{className:"py-12"}),l.a.createElement($.h,{title:"Switch with Form Group"},l.a.createElement(u,null)),l.a.createElement("div",{className:"py-12"}),l.a.createElement($.h,{title:"Customized Switch"},l.a.createElement(j,null)),l.a.createElement("div",{className:"py-12"}),l.a.createElement($.h,{title:"Switch with Different Label Placement"},l.a.createElement(O,null))))}}]);
//# sourceMappingURL=22.4b17bcb5.chunk.js.map