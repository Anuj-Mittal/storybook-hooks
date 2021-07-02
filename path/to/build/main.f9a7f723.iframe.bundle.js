(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{468:function(module,exports,__webpack_require__){__webpack_require__(469),__webpack_require__(624),__webpack_require__(625),__webpack_require__(826),__webpack_require__(827),__webpack_require__(833),__webpack_require__(834),__webpack_require__(831),__webpack_require__(828),__webpack_require__(835),__webpack_require__(829),__webpack_require__(830),__webpack_require__(836),module.exports=__webpack_require__(821)},536:function(module,exports){},625:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(330)},821:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(330).configure)([__webpack_require__(822),__webpack_require__(823)],module,!1)}).call(this,__webpack_require__(188)(module))},822:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=822},823:function(module,exports,__webpack_require__){var map={"./stories/Button.stories.tsx":837,"./stories/useCounter.stories.tsx":832};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=823},824:function(module,exports,__webpack_require__){},832:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Demo",(function(){return Demo}));var objectSpread2=__webpack_require__(69),slicedToArray=__webpack_require__(207),react=__webpack_require__(0),esm=__webpack_require__(28);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)("h1",{id:"usecounter"},Object(esm.b)("inlineCode",{parentName:"h1"},"useCounter")),Object(esm.b)("p",null,"React state hook that tracks a numeric value."),Object(esm.b)("h2",{id:"usage"},"Usage"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-jsx"},"interface CounterProps {\n  initialValue: number;\n  max?: number | null;\n  min?: number | null;\n}\nconst Comp = ({ initialValue, max = null, min = null }: CounterProps) => {\n  const [current, actions] = useCounter(initialValue, max, min);\n\n  return (\n    <div>\n      <h1>Max : {max}</h1>\n      <h1>Min : {min}</h1>\n      <button onClick={() => actions.dec()}>-</button>\n      {current}\n      <button onClick={() => actions.inc()}>+</button>\n      <button onClick={() => actions.reset()}>reset</button>\n    </div>\n  );\n};\n")),Object(esm.b)("h2",{id:"api"},"API"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-ts"},"const [ current, { inc, dec, get, set, reset } ] = useCounter(initialValue: number, max: number | null = null, min: number | null = null);\n")),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"current")," - current counter value;"),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"get(): number")," - getter of current counter value;"),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"inc(delta: number): void")," - increment current value;"),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"dec(delta: number): void")," - decrement current value;"),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"set(value: number): void")," - set arbitrary value;"),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"reset(value: number): void")," - as the ",Object(esm.b)("inlineCode",{parentName:"li"},"set"),", but also will assign value by reference to the ",Object(esm.b)("inlineCode",{parentName:"li"},"initial")," parameter;")))}MDXContent.isMDXComponent=!0;var jsx_runtime=__webpack_require__(63),useCounter_stories_Comp=function Comp(_ref){var initialValue=_ref.initialValue,_ref$max=_ref.max,max=void 0===_ref$max?null:_ref$max,_ref$min=_ref.min,min=void 0===_ref$min?null:_ref$min,_useCounter=function useCounter(){var initialValue=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,max=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,min=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,_useState=Object(react.useState)(initialValue),_useState2=Object(slicedToArray.a)(_useState,2),value=_useState2[0],setValue=_useState2[1];return Object(react.useEffect)((function(){null!==max&&setValue((function(prevValue){return Math.min(prevValue,max)})),null!==min&&setValue((function(prevValue){return Math.max(prevValue,min)}))}),[max,min]),[value,{inc:function inc(delta){setValue(delta?function(prevValue){return prevValue+delta}:function(prevValue){return prevValue+1}),null!==max&&setValue((function(prevValue){return Math.min(prevValue,max)}))},dec:function dec(delta){setValue(delta?function(prevValue){return prevValue-delta}:function(prevValue){return prevValue-1}),null!==min&&setValue((function(prevValue){return Math.max(prevValue,min)}))},get:function get(){return value},set:function set(newValue){setValue(newValue),null!==max&&setValue((function(prevValue){return Math.min(prevValue,max)})),null!==min&&setValue((function(prevValue){return Math.max(prevValue,min)}))},reset:function reset(){setValue(initialValue||0),null!==max&&setValue((function(prevValue){return Math.min(prevValue,max)})),null!==min&&setValue((function(prevValue){return Math.max(prevValue,min)}))}}]}(initialValue,max,min),_useCounter2=Object(slicedToArray.a)(_useCounter,2),current=_useCounter2[0],actions=_useCounter2[1];return Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsxs)("h1",{children:["Max : ",max]}),Object(jsx_runtime.jsxs)("h1",{children:["Min : ",min]}),Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return actions.dec()},children:"-"}),current,Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return actions.inc()},children:"+"}),Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return actions.reset()},children:"reset"})]})},Demo=(__webpack_exports__.default={title:"Hooks/useCounter",component:useCounter_stories_Comp,argTypes:{max:{control:"number"},min:{control:"number"}},parameters:{docs:{page:MDXContent}}},function Template(args){return Object(jsx_runtime.jsx)(useCounter_stories_Comp,Object(objectSpread2.a)({},args))}.bind({}));Demo.args={initialValue:0},Demo.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Comp {...args} />"}},Demo.parameters)},836:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(845),types=__webpack_require__(843),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/},expanded:!0}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},837:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));var objectSpread2=__webpack_require__(69),objectWithoutProperties=(__webpack_require__(0),__webpack_require__(448)),jsx_runtime=(__webpack_require__(824),__webpack_require__(63)),Button_Button=function Button(_ref){var _ref$primary=_ref.primary,primary=void 0!==_ref$primary&&_ref$primary,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,backgroundColor=_ref.backgroundColor,label=_ref.label,props=Object(objectWithoutProperties.a)(_ref,["primary","size","backgroundColor","label"]),mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(jsx_runtime.jsx)("button",Object(objectSpread2.a)(Object(objectSpread2.a)({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:{backgroundColor:backgroundColor}},props),{},{children:label}))};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/stories/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example/Button",component:Button_Button,argTypes:{backgroundColor:{control:"color"}}};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button_Button,Object(objectSpread2.a)({},args))},Primary=Button_stories_Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Button_stories_Template.bind({});Secondary.args={label:"Button"};var Large=Button_stories_Template.bind({});Large.args={size:"large",label:"Button"};var Small=Button_stories_Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Large.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Large.parameters),Small.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Small.parameters)}},[[468,2,3]]]);