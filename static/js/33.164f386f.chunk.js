(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1964:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(20),r=t(148),i=t(5),o=t(341),c=t(1475),u=t.n(c),p=t(1913),b=t(1295),d=t(541),g=t(1928),m=t(254),h=t(1407),f=t(1912),v=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}];function B(e){var a=e.InputProps,t=e.classes,l=e.ref,s=Object(o.a)(e,["InputProps","classes","ref"]);return n.a.createElement(d.a,Object.assign({InputProps:Object(i.a)({inputRef:l,classes:{root:t.inputRoot,input:t.inputInput}},a)},s))}function P(e){var a=e.suggestion,t=e.index,l=e.itemProps,s=e.highlightedIndex===t,r=(e.selectedItem||"").indexOf(a.label)>-1;return n.a.createElement(h.a,Object.assign({},l,{key:a.label,selected:s,component:"div",style:{fontWeight:r?500:400}}),a.label)}function E(e,{showEmpty:a=!1}={}){var t=u()(e.trim()).toLowerCase(),l=t.length,n=0;return 0!==l||a?v.filter(e=>{var a=n<5&&e.label.slice(0,l).toLowerCase()===t;return a&&(n+=1),a}):[]}function I(e){var a=e.classes,t=n.a.useState(""),l=Object(r.a)(t,2),s=l[0],i=l[1],c=n.a.useState([]),u=Object(r.a)(c,2),b=u[0],d=u[1];function g(e){b.length&&!s.length&&"Backspace"===e.key&&d(b.slice(0,b.length-1))}var h=e=>()=>{var a=[...b];a.splice(a.indexOf(e),1),d(a)};return n.a.createElement(p.a,{id:"downshift-multiple",inputValue:s,onChange:function(e){var a=[...b];-1===a.indexOf(e)&&(a=[...a,e]),i(""),d(a)},selectedItem:b},({getInputProps:e,getItemProps:t,getLabelProps:l,isOpen:s,inputValue:r,selectedItem:c,highlightedIndex:u})=>{var p=e({onKeyDown:g,placeholder:"Select multiple countries"}),d=p.onBlur,v=p.onChange,I=p.onFocus,O=Object(o.a)(p,["onBlur","onChange","onFocus"]);return n.a.createElement("div",{className:a.container},B({fullWidth:!0,classes:a,label:"Countries",InputLabelProps:l(),InputProps:{startAdornment:b.map(e=>n.a.createElement(f.a,{key:e,tabIndex:-1,label:e,className:a.chip,onDelete:h(e)})),onBlur:d,onChange:e=>{!function(e){i(e.target.value)}(e),v(e)},onFocus:I},inputProps:O}),s?n.a.createElement(m.a,{className:a.paper,square:!0},E(r).map((e,a)=>P({suggestion:e,index:a,itemProps:t({item:e.label}),highlightedIndex:u,selectedItem:c}))):null)})}var O,A=Object(b.a)(e=>({root:{flexGrow:1,height:250},container:{flexGrow:1,position:"relative"},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},chip:{margin:e.spacing(.5,.25)},inputRoot:{flexWrap:"wrap"},inputInput:{width:"auto",flexGrow:1},divider:{height:e.spacing(2)}}));function j(){var e=A();return n.a.createElement("div",{className:e.root},n.a.createElement(p.a,{id:"downshift-simple"},({getInputProps:a,getItemProps:t,getLabelProps:l,getMenuProps:s,highlightedIndex:r,inputValue:i,isOpen:c,selectedItem:u})=>{var p=a({placeholder:"Search for a country (start with a)"}),b=p.onBlur,d=p.onFocus,g=Object(o.a)(p,["onBlur","onFocus"]);return n.a.createElement("div",{className:e.container},B({fullWidth:!0,classes:e,label:"Country",InputLabelProps:l({shrink:!0}),InputProps:{onBlur:b,onFocus:d},inputProps:g}),n.a.createElement("div",s(),c?n.a.createElement(m.a,{className:e.paper,square:!0},E(i).map((e,a)=>P({suggestion:e,index:a,itemProps:t({item:e.label}),highlightedIndex:r,selectedItem:u}))):null))}),n.a.createElement("div",{className:e.divider}),n.a.createElement(I,{classes:e}),n.a.createElement("div",{className:e.divider}),n.a.createElement(p.a,{id:"downshift-popper"},({getInputProps:a,getItemProps:t,getLabelProps:l,getMenuProps:s,highlightedIndex:r,inputValue:i,isOpen:c,selectedItem:u})=>{var p=a({placeholder:"With Popper"}),b=p.onBlur,d=p.onFocus,h=Object(o.a)(p,["onBlur","onFocus"]);return n.a.createElement("div",{className:e.container},B({fullWidth:!0,classes:e,label:"Country",InputProps:{onBlur:b,onFocus:d},InputLabelProps:l({shrink:!0}),inputProps:h,ref:e=>{O=e}}),n.a.createElement(g.a,{open:c,anchorEl:O},n.a.createElement("div",c?s({},{suppressRefError:!0}):{},n.a.createElement(m.a,{square:!0,style:{marginTop:8,width:O?O.clientWidth:void 0}},E(i).map((e,a)=>P({suggestion:e,index:a,itemProps:t({item:e.label}),highlightedIndex:r,selectedItem:u}))))))}),n.a.createElement("div",{className:e.divider}),n.a.createElement(p.a,{id:"downshift-options"},({clearSelection:a,getInputProps:t,getItemProps:l,getLabelProps:s,getMenuProps:r,highlightedIndex:i,inputValue:c,isOpen:u,openMenu:p,selectedItem:b})=>{var d=t({onChange:e=>{""===e.target.value&&a()},onFocus:p,placeholder:"With the clear & show empty options"}),g=d.onBlur,h=d.onChange,f=d.onFocus,v=Object(o.a)(d,["onBlur","onChange","onFocus"]);return n.a.createElement("div",{className:e.container},B({fullWidth:!0,classes:e,label:"Countries",InputLabelProps:s({shrink:!0}),InputProps:{onBlur:g,onChange:h,onFocus:f},inputProps:v}),n.a.createElement("div",r(),u?n.a.createElement(m.a,{className:e.paper,square:!0},E(c,{showEmpty:!0}).map((e,a)=>P({suggestion:e,index:a,itemProps:l({item:e.label}),highlightedIndex:i,selectedItem:b}))):null))}))}var x=t(8),y=t(1908),S=t(30),C=t(50),w=t(1265),N=t(1944),F=t(1760),L=t.n(F),z=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}].map(e=>({value:e.label,label:e.label})),k=Object(b.a)(e=>({root:{flexGrow:1,height:250},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden"},chip:{margin:e.spacing(.5,.25)},chipFocused:{backgroundColor:Object(S.c)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:16},placeholder:{position:"absolute",left:2,bottom:6,fontSize:16},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},divider:{height:e.spacing(2)}}));function W(e){var a=e.inputRef,t=Object(o.a)(e,["inputRef"]);return n.a.createElement("div",Object.assign({ref:a},t))}var R={Control:function(e){var a=e.children,t=e.innerProps,l=e.innerRef,s=e.selectProps,r=s.classes,o=s.TextFieldProps;return n.a.createElement(d.a,Object.assign({fullWidth:!0,InputProps:{inputComponent:W,inputProps:Object(i.a)({className:r.input,ref:l,children:a},t)}},o))},Menu:function(e){return n.a.createElement(m.a,Object.assign({square:!0,className:e.selectProps.classes.paper},e.innerProps),e.children)},MultiValue:function(e){return n.a.createElement(f.a,{tabIndex:-1,label:e.children,className:Object(x.a)(e.selectProps.classes.chip,{[e.selectProps.classes.chipFocused]:e.isFocused}),onDelete:e.removeProps.onClick,deleteIcon:n.a.createElement(L.a,e.removeProps)})},NoOptionsMessage:function(e){return n.a.createElement(w.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return n.a.createElement(h.a,Object.assign({ref:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?500:400}},e.innerProps),e.children)},Placeholder:function(e){return n.a.createElement(w.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.placeholder},e.innerProps),e.children)},SingleValue:function(e){return n.a.createElement(w.a,Object.assign({className:e.selectProps.classes.singleValue},e.innerProps),e.children)},ValueContainer:function(e){return n.a.createElement("div",{className:e.selectProps.classes.valueContainer},e.children)}};function V(){var e=k(),a=Object(C.a)(),t=n.a.useState(null),l=Object(r.a)(t,2),s=l[0],o=l[1],c=n.a.useState(null),u=Object(r.a)(c,2),p=u[0],b=u[1];var d={input:e=>Object(i.a)(Object(i.a)({},e),{},{color:a.palette.text.primary,"& input":{font:"inherit"}})};return n.a.createElement("div",{className:e.root},n.a.createElement(N.a,null,n.a.createElement(y.a,{classes:e,styles:d,inputId:"react-select-single",TextFieldProps:{label:"Country",InputLabelProps:{htmlFor:"react-select-single",shrink:!0},placeholder:"Search a country (start with a)"},options:z,components:R,value:s,onChange:function(e){o(e)}}),n.a.createElement("div",{className:e.divider}),n.a.createElement(y.a,{classes:e,styles:d,inputId:"react-select-multiple",TextFieldProps:{label:"Countries",InputLabelProps:{htmlFor:"react-select-multiple",shrink:!0},placeholder:"Select multiple countries"},options:z,components:R,value:p,onChange:function(e){b(e)},isMulti:!0})))}var M=t(1762),T=t.n(M),q=t(1774),D=t.n(q),G=t(1776),H=t.n(G),J=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}];function K(e){var a=e.classes,t=e.inputRef,l=void 0===t?()=>{}:t,s=e.ref,r=Object(o.a)(e,["classes","inputRef","ref"]);return n.a.createElement(d.a,Object.assign({fullWidth:!0,InputProps:{inputRef:e=>{s(e),l(e)},classes:{input:a.input}}},r))}function Q(e,{query:a,isHighlighted:t}){var l=D()(e.label,a),s=H()(e.label,l);return n.a.createElement(h.a,{selected:t,component:"div"},n.a.createElement("div",null,s.map(e=>n.a.createElement("span",{key:e.text,style:{fontWeight:e.highlight?500:400}},e.text))))}function U(e){return e.label}var X=Object(b.a)(e=>({root:{height:250,flexGrow:1},container:{position:"relative"},suggestionsContainerOpen:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"},divider:{height:e.spacing(2)}}));function Y(){var e=X(),a=n.a.useState(null),t=Object(r.a)(a,2),l=t[0],s=t[1],o=n.a.useState({single:"",popper:""}),c=Object(r.a)(o,2),p=c[0],b=c[1],d=n.a.useState([]),h=Object(r.a)(d,2),f=h[0],v=h[1],B=e=>(a,{newValue:t})=>{b(Object(i.a)(Object(i.a)({},p),{},{[e]:t}))},P={renderInputComponent:K,suggestions:f,onSuggestionsFetchRequested:({value:e})=>{v(function(e){var a=u()(e.trim()).toLowerCase(),t=a.length,l=0;return 0===t?[]:J.filter(e=>{var n=l<5&&e.label.slice(0,t).toLowerCase()===a;return n&&(l+=1),n})}(e))},onSuggestionsClearRequested:()=>{v([])},getSuggestionValue:U,renderSuggestion:Q};return n.a.createElement("div",{className:e.root},n.a.createElement(T.a,Object.assign({},P,{inputProps:{classes:e,id:"react-autosuggest-simple",label:"Country",placeholder:"Search a country (start with a)",value:p.single,onChange:B("single")},theme:{container:e.container,suggestionsContainerOpen:e.suggestionsContainerOpen,suggestionsList:e.suggestionsList,suggestion:e.suggestion},renderSuggestionsContainer:e=>n.a.createElement(m.a,Object.assign({},e.containerProps,{square:!0}),e.children)})),n.a.createElement("div",{className:e.divider}),n.a.createElement(T.a,Object.assign({},P,{inputProps:{classes:e,id:"react-autosuggest-popper",label:"Country",placeholder:"With Popper",value:p.popper,onChange:B("popper"),inputRef:e=>{s(e)},InputLabelProps:{shrink:!0}},theme:{suggestionsList:e.suggestionsList,suggestion:e.suggestion},renderSuggestionsContainer:e=>n.a.createElement(g.a,{anchorEl:l,open:Boolean(e.children)},n.a.createElement(m.a,Object.assign({square:!0},e.containerProps,{style:{width:l?l.clientWidth:void 0}}),e.children))})))}a.default=(()=>n.a.createElement("div",{className:"m-sm-30"},n.a.createElement("div",{className:"mb-sm-30"},n.a.createElement(s.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Autocomplete"}]})),n.a.createElement(s.h,{title:"downshift"},n.a.createElement(j,null)),n.a.createElement("div",{className:"py-12"}),n.a.createElement(s.h,{title:"react select"},n.a.createElement(V,null)),n.a.createElement("div",{className:"py-12"}),n.a.createElement(s.h,{title:"react autosuggest"},n.a.createElement(Y,null))))}}]);
//# sourceMappingURL=33.164f386f.chunk.js.map