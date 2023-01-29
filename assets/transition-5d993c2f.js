var w=Object.defineProperty;var l=(s,r)=>w(s,"name",{value:r,configurable:!0});import{j as y}from"./jsx-runtime-69008c6b.js";import{R as C}from"./index-a38f3d31.js";import{R as N}from"./index-b042d21f.js";function k(s,r){if(s==null)return{};var u={},e=Object.keys(s),n,t;for(t=0;t<e.length;t++)n=e[t],!(r.indexOf(n)>=0)&&(u[n]=s[n]);return u}l(k,"_objectWithoutPropertiesLoose");function b(s,r){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():l(function(e,n){return e.__proto__=n,e},"_setPrototypeOf"),b(s,r)}l(b,"_setPrototypeOf");function R(s,r){s.prototype=Object.create(r.prototype),s.prototype.constructor=s,b(s,r)}l(R,"_inheritsLoose");function I(s,r){return s.classList?!!r&&s.classList.contains(r):(" "+(s.className.baseVal||s.className)+" ").indexOf(" "+r+" ")!==-1}l(I,"hasClass");function M(s,r){s.classList?s.classList.add(r):I(s,r)||(typeof s.className=="string"?s.className=s.className+" "+r:s.setAttribute("class",(s.className&&s.className.baseVal||"")+" "+r))}l(M,"addClass");function D(s,r){return s.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}l(D,"replaceClassName");function j(s,r){s.classList?s.classList.remove(r):typeof s.className=="string"?s.className=D(s.className,r):s.setAttribute("class",D(s.className&&s.className.baseVal||"",r))}l(j,"removeClass$1");const A={disabled:!1},$=C.createContext(null);var L=l(function(r){return r.scrollTop},"forceReflow"),g="unmounted",v="exited",h="entering",x="entered",S="exiting",f=function(s){R(r,s);function r(e,n){var t;t=s.call(this,e,n)||this;var i=n,a=i&&!i.isMounting?e.enter:e.appear,o;return t.appearStatus=null,e.in?a?(o=v,t.appearStatus=h):o=x:e.unmountOnExit||e.mountOnEnter?o=g:o=v,t.state={status:o},t.nextCallback=null,t}l(r,"Transition"),r.getDerivedStateFromProps=l(function(n,t){var i=n.in;return i&&t.status===g?{status:v}:null},"getDerivedStateFromProps");var u=r.prototype;return u.componentDidMount=l(function(){this.updateStatus(!0,this.appearStatus)},"componentDidMount"),u.componentDidUpdate=l(function(n){var t=null;if(n!==this.props){var i=this.state.status;this.props.in?i!==h&&i!==x&&(t=h):(i===h||i===x)&&(t=S)}this.updateStatus(!1,t)},"componentDidUpdate"),u.componentWillUnmount=l(function(){this.cancelNextCallback()},"componentWillUnmount"),u.getTimeouts=l(function(){var n=this.props.timeout,t,i,a;return t=i=a=n,n!=null&&typeof n!="number"&&(t=n.exit,i=n.enter,a=n.appear!==void 0?n.appear:i),{exit:t,enter:i,appear:a}},"getTimeouts"),u.updateStatus=l(function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===h){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this);i&&L(i)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===v&&this.setState({status:g})},"updateStatus"),u.performEnter=l(function(n){var t=this,i=this.props.enter,a=this.context?this.context.isMounting:n,o=this.props.nodeRef?[a]:[N.findDOMNode(this),a],p=o[0],c=o[1],d=this.getTimeouts(),m=a?d.appear:d.enter;if(!n&&!i||A.disabled){this.safeSetState({status:x},function(){t.props.onEntered(p)});return}this.props.onEnter(p,c),this.safeSetState({status:h},function(){t.props.onEntering(p,c),t.onTransitionEnd(m,function(){t.safeSetState({status:x},function(){t.props.onEntered(p,c)})})})},"performEnter"),u.performExit=l(function(){var n=this,t=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:N.findDOMNode(this);if(!t||A.disabled){this.safeSetState({status:v},function(){n.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:S},function(){n.props.onExiting(a),n.onTransitionEnd(i.exit,function(){n.safeSetState({status:v},function(){n.props.onExited(a)})})})},"performExit"),u.cancelNextCallback=l(function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},"cancelNextCallback"),u.safeSetState=l(function(n,t){t=this.setNextCallback(t),this.setState(n,t)},"safeSetState"),u.setNextCallback=l(function(n){var t=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,t.nextCallback=null,n(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},"setNextCallback"),u.onTransitionEnd=l(function(n,t){this.setNextCallback(t);var i=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this),a=n==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],p=o[0],c=o[1];this.props.addEndListener(p,c)}n!=null&&setTimeout(this.nextCallback,n)},"onTransitionEnd"),u.render=l(function(){var n=this.state.status;if(n===g)return null;var t=this.props,i=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var a=k(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return y($.Provider,{value:null,children:typeof i=="function"?i(n,a):C.cloneElement(C.Children.only(i),a)})},"render"),r}(C.Component);f.contextType=$;f.propTypes={};function E(){}l(E,"noop");f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E};f.UNMOUNTED=g;f.EXITED=v;f.ENTERING=h;f.ENTERED=x;f.EXITING=S;const V=f;var z=l(function(r,u){return r&&u&&u.split(" ").forEach(function(e){return M(r,e)})},"addClass$1"),T=l(function(r,u){return r&&u&&u.split(" ").forEach(function(e){return j(r,e)})},"removeClass"),O=function(s){R(r,s);function r(){for(var e,n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return e=s.call.apply(s,[this].concat(t))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(a,o){var p=e.resolveArguments(a,o),c=p[0],d=p[1];e.removeClasses(c,"exit"),e.addClass(c,d?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(a,o)},e.onEntering=function(a,o){var p=e.resolveArguments(a,o),c=p[0],d=p[1],m=d?"appear":"enter";e.addClass(c,m,"active"),e.props.onEntering&&e.props.onEntering(a,o)},e.onEntered=function(a,o){var p=e.resolveArguments(a,o),c=p[0],d=p[1],m=d?"appear":"enter";e.removeClasses(c,m),e.addClass(c,m,"done"),e.props.onEntered&&e.props.onEntered(a,o)},e.onExit=function(a){var o=e.resolveArguments(a),p=o[0];e.removeClasses(p,"appear"),e.removeClasses(p,"enter"),e.addClass(p,"exit","base"),e.props.onExit&&e.props.onExit(a)},e.onExiting=function(a){var o=e.resolveArguments(a),p=o[0];e.addClass(p,"exit","active"),e.props.onExiting&&e.props.onExiting(a)},e.onExited=function(a){var o=e.resolveArguments(a),p=o[0];e.removeClasses(p,"exit"),e.addClass(p,"exit","done"),e.props.onExited&&e.props.onExited(a)},e.resolveArguments=function(a,o){return e.props.nodeRef?[e.props.nodeRef.current,a]:[a,o]},e.getClassNames=function(a){var o=e.props.classNames,p=typeof o=="string",c=p&&o?o+"-":"",d=p?""+c+a:o[a],m=p?d+"-active":o[a+"Active"],P=p?d+"-done":o[a+"Done"];return{baseClassName:d,activeClassName:m,doneClassName:P}},e}l(r,"CSSTransition");var u=r.prototype;return u.addClass=l(function(n,t,i){var a=this.getClassNames(t)[i+"ClassName"],o=this.getClassNames("enter"),p=o.doneClassName;t==="appear"&&i==="done"&&p&&(a+=" "+p),i==="active"&&n&&L(n),a&&(this.appliedClasses[t][i]=a,z(n,a))},"addClass"),u.removeClasses=l(function(n,t){var i=this.appliedClasses[t],a=i.base,o=i.active,p=i.done;this.appliedClasses[t]={},a&&T(n,a),o&&T(n,o),p&&T(n,p)},"removeClasses"),u.render=l(function(){var n=this.props;n.classNames;var t=k(n,["classNames"]);return y(V,{...t,onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited})},"render"),r}(C.Component);O.defaultProps={classNames:""};O.propTypes={};const F=O,_=l(s=>{const{children:r,classNames:u,animation:e,wrapper:n,...t}=s;return y(F,{classNames:u||e,...t,children:n?y("div",{children:r}):r})},"Transition");_.defaultProps={unmountOnExit:!0,appear:!0};try{_.displayName="Transition",_.__docgenInfo={description:"",displayName:"Transition",props:{classNames:{defaultValue:null,description:"The animation `classNames` applied to the component as it enters or exits.\nA single name can be provided and it will be suffixed for each stage: e.g.\n\n`classNames=\"fade\"` applies `fade-enter`, `fade-enter-active`,\n`fade-exit`, `fade-exit-active`, `fade-appear`, and `fade-appear-active`.\n\nEach individual classNames can also be specified independently like:\n\n```js\nclassNames={{\n  appear: 'my-appear',\n  appearActive: 'my-appear-active',\n  appearDone: 'my-appear-done',\n  enter: 'my-enter',\n  enterActive: 'my-enter-active',\n  enterDone: 'my-enter-done',\n  exit: 'my-exit',\n  exitActive: 'my-exit-active',\n  exitDone: 'my-exit-done'\n}}\n```",name:"classNames",required:!1,type:{name:"string | CSSTransitionClassNames"}},animation:{defaultValue:null,description:"动画名称",name:"animation",required:!0,type:{name:"enum",value:[{value:'"zoom-in-top"'},{value:'"zoom-in-left"'},{value:'"zoom-in-bottom"'},{value:'"zoom-in-right"'},{value:'"slide-in-top"'}]}},wrapper:{defaultValue:null,description:"元素是否需要包裹",name:"wrapper",required:!1,type:{name:"boolean"}}}}}catch{}try{transition.displayName="transition",transition.__docgenInfo={description:"",displayName:"transition",props:{classNames:{defaultValue:null,description:"The animation `classNames` applied to the component as it enters or exits.\nA single name can be provided and it will be suffixed for each stage: e.g.\n\n`classNames=\"fade\"` applies `fade-enter`, `fade-enter-active`,\n`fade-exit`, `fade-exit-active`, `fade-appear`, and `fade-appear-active`.\n\nEach individual classNames can also be specified independently like:\n\n```js\nclassNames={{\n  appear: 'my-appear',\n  appearActive: 'my-appear-active',\n  appearDone: 'my-appear-done',\n  enter: 'my-enter',\n  enterActive: 'my-enter-active',\n  enterDone: 'my-enter-done',\n  exit: 'my-exit',\n  exitActive: 'my-exit-active',\n  exitDone: 'my-exit-done'\n}}\n```",name:"classNames",required:!1,type:{name:"string | CSSTransitionClassNames"}},animation:{defaultValue:null,description:"动画名称",name:"animation",required:!0,type:{name:"enum",value:[{value:'"zoom-in-top"'},{value:'"zoom-in-left"'},{value:'"zoom-in-bottom"'},{value:'"zoom-in-right"'},{value:'"slide-in-top"'}]}},wrapper:{defaultValue:null,description:"元素是否需要包裹",name:"wrapper",required:!1,type:{name:"boolean"}}}}}catch{}export{_ as T,R as _,k as a,$ as b};
//# sourceMappingURL=transition-5d993c2f.js.map