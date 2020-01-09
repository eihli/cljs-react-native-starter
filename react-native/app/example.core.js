goog.provide('example.core');
goog.require('cljs.core');
goog.require('shadow.js.shim.module$react_native');
goog.require('shadow.js.shim.module$react');
example.core.create_element = shadow.js.shim.module$react.createElement;
example.core.MainElement = (example.core.create_element.cljs$core$IFn$_invoke$arity$3 ? example.core.create_element.cljs$core$IFn$_invoke$arity$3(shadow.js.shim.module$react_native.Text,null,"Hello world!") : example.core.create_element.call(null,shadow.js.shim.module$react_native.Text,null,"Hello world!"));
example.core.make_component = (function example$core$make_component(var_args){
var G__24679 = arguments.length;
switch (G__24679) {
case 2:
return example.core.make_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return example.core.make_component.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(example.core.make_component.cljs$core$IFn$_invoke$arity$2 = (function (display_name,m){
return example.core.make_component.cljs$core$IFn$_invoke$arity$3(display_name,null,m);
}));

(example.core.make_component.cljs$core$IFn$_invoke$arity$3 = (function (display_name,construct,m){
var cmp = (function (props,context,updater){
var this$ = this;
shadow.js.shim.module$react.Component.call(this$,props,context,updater);

if(cljs.core.truth_(construct)){
(construct.cljs$core$IFn$_invoke$arity$1 ? construct.cljs$core$IFn$_invoke$arity$1(this$) : construct.call(null,this$));
} else {
}

return this$;
});
var G__24680_24686 = cmp.prototype;
var G__24681_24687 = shadow.js.shim.module$react.Component.prototype;
var G__24682_24688 = m;
goog.object.extend(G__24680_24686,G__24681_24687,G__24682_24688);

if(cljs.core.truth_(display_name)){
(cmp.displayName = display_name);
} else {
}

return (cmp.prototype.constructor = cmp);
}));

(example.core.make_component.cljs$lang$maxFixedArity = 3);

example.core.my_component = example.core.make_component.cljs$core$IFn$_invoke$arity$3("MyComponent",(function (this$){
return (this$.state = ({"counter": (0)}));
}),({"render": (function (){
return example.core.MainElement;
})}));
example.core.init = (function example$core$init(){
var G__24683 = "ExampleApp";
var G__24684 = (function (){
return example.core.my_component;
});
return shadow.js.shim.module$react_native.AppRegistry.registerComponent(G__24683,G__24684);
});

//# sourceMappingURL=example.core.js.map
