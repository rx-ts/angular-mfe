(self.webpackChunkremote=self.webpackChunkremote||[]).push([[15],{8015:(pe,be,le)=>{le.r(be);var Se=le(5740),ue=(le(8873),le(3432)),ye=le(911);let Pe=(()=>{class U{}return U.\u0275fac=function(fe){return new(fe||U)},U.\u0275cmp=ue.\u0275\u0275defineComponent({type:U,selectors:[["mfe-root"]],decls:1,vars:0,template:function(fe,De){1&fe&&ue.\u0275\u0275element(0,"router-outlet")},directives:[ye.RouterOutlet],encapsulation:2,changeDetection:0}),U})(),we=(()=>{class U{}return U.\u0275fac=function(fe){return new(fe||U)},U.\u0275mod=ue.\u0275\u0275defineNgModule({type:U,bootstrap:[Pe]}),U.\u0275inj=ue.\u0275\u0275defineInjector({providers:[],imports:[[Se.BrowserModule,ye.RouterModule.forRoot([],{initialNavigation:"enabledBlocking"})]]}),U})();(0,ue.enableProdMode)(),Se.platformBrowser().bootstrapModule(we).catch(console.error)},8873:()=>{!function(t){const n=t.performance;function i(I){n&&n.mark&&n.mark(I)}function o(I,T){n&&n.measure&&n.measure(I,T)}i("Zone");const c=t.__Zone_symbol_prefix||"__zone_symbol__";function a(I){return c+I}const y=!0===t[a("forceDuplicateZoneCheck")];if(t.Zone){if(y||"function"!=typeof t.Zone.__symbol__)throw new Error("Zone already loaded.");return t.Zone}let d=(()=>{class I{constructor(e,r){this._parent=e,this._name=r?r.name||"unnamed":"<root>",this._properties=r&&r.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,r)}static assertZonePatched(){if(t.Promise!==ce.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=I.current;for(;e.parent;)e=e.parent;return e}static get current(){return W.zone}static get currentTask(){return oe}static __load_patch(e,r,k=!1){if(ce.hasOwnProperty(e)){if(!k&&y)throw Error("Already loaded patch: "+e)}else if(!t["__Zone_disable_"+e]){const C="Zone:"+e;i(C),ce[e]=r(t,I,Y),o(C,C)}}get parent(){return this._parent}get name(){return this._name}get(e){const r=this.getZoneWith(e);if(r)return r._properties[e]}getZoneWith(e){let r=this;for(;r;){if(r._properties.hasOwnProperty(e))return r;r=r._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,r){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const k=this._zoneDelegate.intercept(this,e,r),C=this;return function(){return C.runGuarded(k,this,arguments,r)}}run(e,r,k,C){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,e,r,k,C)}finally{W=W.parent}}runGuarded(e,r=null,k,C){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,e,r,k,C)}catch(J){if(this._zoneDelegate.handleError(this,J))throw J}}finally{W=W.parent}}runTask(e,r,k){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||K).name+"; Execution: "+this.name+")");if(e.state===x&&(e.type===ee||e.type===w))return;const C=e.state!=E;C&&e._transitionTo(E,A),e.runCount++;const J=oe;oe=e,W={parent:W,zone:this};try{e.type==w&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,r,k)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{e.state!==x&&e.state!==h&&(e.type==ee||e.data&&e.data.isPeriodic?C&&e._transitionTo(A,E):(e.runCount=0,this._updateTaskCount(e,-1),C&&e._transitionTo(x,E,x))),W=W.parent,oe=J}}scheduleTask(e){if(e.zone&&e.zone!==this){let k=this;for(;k;){if(k===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);k=k.parent}}e._transitionTo(z,x);const r=[];e._zoneDelegates=r,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(k){throw e._transitionTo(h,z,x),this._zoneDelegate.handleError(this,k),k}return e._zoneDelegates===r&&this._updateTaskCount(e,1),e.state==z&&e._transitionTo(A,z),e}scheduleMicroTask(e,r,k,C){return this.scheduleTask(new m(M,e,r,k,C,void 0))}scheduleMacroTask(e,r,k,C,J){return this.scheduleTask(new m(w,e,r,k,C,J))}scheduleEventTask(e,r,k,C,J){return this.scheduleTask(new m(ee,e,r,k,C,J))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||K).name+"; Execution: "+this.name+")");if(e.state===A||e.state===E){e._transitionTo(G,A,E);try{this._zoneDelegate.cancelTask(this,e)}catch(r){throw e._transitionTo(h,G),this._zoneDelegate.handleError(this,r),r}return this._updateTaskCount(e,-1),e._transitionTo(x,G),e.runCount=0,e}}_updateTaskCount(e,r){const k=e._zoneDelegates;-1==r&&(e._zoneDelegates=null);for(let C=0;C<k.length;C++)k[C]._updateTaskCount(e.type,r)}}return I.__symbol__=a,I})();const P={name:"",onHasTask:(I,T,e,r)=>I.hasTask(e,r),onScheduleTask:(I,T,e,r)=>I.scheduleTask(e,r),onInvokeTask:(I,T,e,r,k,C)=>I.invokeTask(e,r,k,C),onCancelTask:(I,T,e,r)=>I.cancelTask(e,r)};class v{constructor(T,e,r){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=T,this._parentDelegate=e,this._forkZS=r&&(r&&r.onFork?r:e._forkZS),this._forkDlgt=r&&(r.onFork?e:e._forkDlgt),this._forkCurrZone=r&&(r.onFork?this.zone:e._forkCurrZone),this._interceptZS=r&&(r.onIntercept?r:e._interceptZS),this._interceptDlgt=r&&(r.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=r&&(r.onIntercept?this.zone:e._interceptCurrZone),this._invokeZS=r&&(r.onInvoke?r:e._invokeZS),this._invokeDlgt=r&&(r.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=r&&(r.onInvoke?this.zone:e._invokeCurrZone),this._handleErrorZS=r&&(r.onHandleError?r:e._handleErrorZS),this._handleErrorDlgt=r&&(r.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=r&&(r.onHandleError?this.zone:e._handleErrorCurrZone),this._scheduleTaskZS=r&&(r.onScheduleTask?r:e._scheduleTaskZS),this._scheduleTaskDlgt=r&&(r.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=r&&(r.onScheduleTask?this.zone:e._scheduleTaskCurrZone),this._invokeTaskZS=r&&(r.onInvokeTask?r:e._invokeTaskZS),this._invokeTaskDlgt=r&&(r.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=r&&(r.onInvokeTask?this.zone:e._invokeTaskCurrZone),this._cancelTaskZS=r&&(r.onCancelTask?r:e._cancelTaskZS),this._cancelTaskDlgt=r&&(r.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=r&&(r.onCancelTask?this.zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const k=r&&r.onHasTask;(k||e&&e._hasTaskZS)&&(this._hasTaskZS=k?r:P,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=T,r.onScheduleTask||(this._scheduleTaskZS=P,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this.zone),r.onInvokeTask||(this._invokeTaskZS=P,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this.zone),r.onCancelTask||(this._cancelTaskZS=P,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this.zone))}fork(T,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,T,e):new d(T,e)}intercept(T,e,r){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,T,e,r):e}invoke(T,e,r,k,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,T,e,r,k,C):e.apply(r,k)}handleError(T,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,T,e)}scheduleTask(T,e){let r=e;if(this._scheduleTaskZS)this._hasTaskZS&&r._zoneDelegates.push(this._hasTaskDlgtOwner),r=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,T,e),r||(r=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=M)throw new Error("Task is missing scheduleFn.");R(e)}return r}invokeTask(T,e,r,k){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,T,e,r,k):e.callback.apply(r,k)}cancelTask(T,e){let r;if(this._cancelTaskZS)r=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,T,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");r=e.cancelFn(e)}return r}hasTask(T,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,T,e)}catch(r){this.handleError(T,r)}}_updateTaskCount(T,e){const r=this._taskCounts,k=r[T],C=r[T]=k+e;if(C<0)throw new Error("More tasks executed then were scheduled.");0!=k&&0!=C||this.hasTask(this.zone,{microTask:r.microTask>0,macroTask:r.macroTask>0,eventTask:r.eventTask>0,change:T})}}class m{constructor(T,e,r,k,C,J){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=T,this.source=e,this.data=k,this.scheduleFn=C,this.cancelFn=J,!r)throw new Error("callback is not defined");this.callback=r;const l=this;this.invoke=T===ee&&k&&k.useG?m.invokeTask:function(){return m.invokeTask.call(t,l,this,arguments)}}static invokeTask(T,e,r){T||(T=this),te++;try{return T.runCount++,T.zone.runTask(T,e,r)}finally{1==te&&_(),te--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,z)}_transitionTo(T,e,r){if(this._state!==e&&this._state!==r)throw new Error(`${this.type} '${this.source}': can not transition to '${T}', expecting state '${e}'${r?" or '"+r+"'":""}, was '${this._state}'.`);this._state=T,T==x&&(this._zoneDelegates=null)}toString(){return this.data&&void 0!==this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const L=a("setTimeout"),Z=a("Promise"),N=a("then");let Q,B=[],H=!1;function q(I){if(Q||t[Z]&&(Q=t[Z].resolve(0)),Q){let T=Q[N];T||(T=Q.then),T.call(Q,I)}else t[L](I,0)}function R(I){0===te&&0===B.length&&q(_),I&&B.push(I)}function _(){if(!H){for(H=!0;B.length;){const I=B;B=[];for(let T=0;T<I.length;T++){const e=I[T];try{e.zone.runTask(e,null,null)}catch(r){Y.onUnhandledError(r)}}}Y.microtaskDrainDone(),H=!1}}const K={name:"NO ZONE"},x="notScheduled",z="scheduling",A="scheduled",E="running",G="canceling",h="unknown",M="microTask",w="macroTask",ee="eventTask",ce={},Y={symbol:a,currentZoneFrame:()=>W,onUnhandledError:X,microtaskDrainDone:X,scheduleMicroTask:R,showUncaughtError:()=>!d[a("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:X,patchMethod:()=>X,bindArguments:()=>[],patchThen:()=>X,patchMacroTask:()=>X,patchEventPrototype:()=>X,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>X,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>X,wrapWithCurrentZone:()=>X,filterProperties:()=>[],attachOriginToPatched:()=>X,_redefineProperty:()=>X,patchCallbacks:()=>X,nativeScheduleMicroTask:q};let W={parent:null,zone:new d(null,null)},oe=null,te=0;function X(){}o("Zone","Zone"),t.Zone=d}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);const pe=Object.getOwnPropertyDescriptor,be=Object.defineProperty,le=Object.getPrototypeOf,Se=Object.create,Ve=Array.prototype.slice,ue="addEventListener",ye="removeEventListener",Pe=Zone.__symbol__(ue),we=Zone.__symbol__(ye),se="true",U="false",ie=Zone.__symbol__("");function fe(t,n){return Zone.current.wrap(t,n)}function De(t,n,i,o,c){return Zone.current.scheduleMacroTask(t,n,i,o,c)}const j=Zone.__symbol__,Oe="undefined"!=typeof window,me=Oe?window:void 0,$=Oe&&me||"object"==typeof self&&self||global;function Le(t,n){for(let i=t.length-1;i>=0;i--)"function"==typeof t[i]&&(t[i]=fe(t[i],n+"_"+i));return t}function Fe(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&void 0===t.set)}const Be="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,Ze=!("nw"in $)&&void 0!==$.process&&"[object process]"==={}.toString.call($.process),Ae=!Ze&&!Be&&!(!Oe||!me.HTMLElement),Ue=void 0!==$.process&&"[object process]"==={}.toString.call($.process)&&!Be&&!(!Oe||!me.HTMLElement),Ne={},We=function(t){if(!(t=t||$.event))return;let n=Ne[t.type];n||(n=Ne[t.type]=j("ON_PROPERTY"+t.type));const i=this||t.target||$,o=i[n];let c;if(Ae&&i===me&&"error"===t.type){const a=t;c=o&&o.call(this,a.message,a.filename,a.lineno,a.colno,a.error),!0===c&&t.preventDefault()}else c=o&&o.apply(this,arguments),null!=c&&!c&&t.preventDefault();return c};function Xe(t,n,i){let o=pe(t,n);if(!o&&i&&pe(i,n)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;const c=j("on"+n+"patched");if(t.hasOwnProperty(c)&&t[c])return;delete o.writable,delete o.value;const a=o.get,y=o.set,d=n.slice(2);let P=Ne[d];P||(P=Ne[d]=j("ON_PROPERTY"+d)),o.set=function(v){let m=this;!m&&t===$&&(m=$),m&&("function"==typeof m[P]&&m.removeEventListener(d,We),y&&y.call(m,null),m[P]=v,"function"==typeof v&&m.addEventListener(d,We,!1))},o.get=function(){let v=this;if(!v&&t===$&&(v=$),!v)return null;const m=v[P];if(m)return m;if(a){let L=a.call(this);if(L)return o.set.call(this,L),"function"==typeof v.removeAttribute&&v.removeAttribute(n),L}return null},be(t,n,o),t[c]=!0}function qe(t,n,i){if(n)for(let o=0;o<n.length;o++)Xe(t,"on"+n[o],i);else{const o=[];for(const c in t)"on"==c.slice(0,2)&&o.push(c);for(let c=0;c<o.length;c++)Xe(t,o[c],i)}}const re=j("originalInstance");function Re(t){const n=$[t];if(!n)return;$[j(t)]=n,$[t]=function(){const c=Le(arguments,t);switch(c.length){case 0:this[re]=new n;break;case 1:this[re]=new n(c[0]);break;case 2:this[re]=new n(c[0],c[1]);break;case 3:this[re]=new n(c[0],c[1],c[2]);break;case 4:this[re]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},de($[t],n);const i=new n(function(){});let o;for(o in i)"XMLHttpRequest"===t&&"responseBlob"===o||function(c){"function"==typeof i[c]?$[t].prototype[c]=function(){return this[re][c].apply(this[re],arguments)}:be($[t].prototype,c,{set:function(a){"function"==typeof a?(this[re][c]=fe(a,t+"."+c),de(this[re][c],a)):this[re][c]=a},get:function(){return this[re][c]}})}(o);for(o in n)"prototype"!==o&&n.hasOwnProperty(o)&&($[t][o]=n[o])}function he(t,n,i){let o=t;for(;o&&!o.hasOwnProperty(n);)o=le(o);!o&&t[n]&&(o=t);const c=j(n);let a=null;if(o&&(!(a=o[c])||!o.hasOwnProperty(c))&&(a=o[c]=o[n],Fe(o&&pe(o,n)))){const d=i(a,c,n);o[n]=function(){return d(this,arguments)},de(o[n],a)}return a}function lt(t,n,i){let o=null;function c(a){const y=a.data;return y.args[y.cbIdx]=function(){a.invoke.apply(this,arguments)},o.apply(y.target,y.args),a}o=he(t,n,a=>function(y,d){const P=i(y,d);return P.cbIdx>=0&&"function"==typeof d[P.cbIdx]?De(P.name,d[P.cbIdx],P,c):a.apply(y,d)})}function de(t,n){t[j("OriginalDelegate")]=n}let ze=!1,je=!1;function ft(){if(ze)return je;ze=!0;try{const t=me.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(je=!0)}catch(t){}return je}Zone.__load_patch("ZoneAwarePromise",(t,n,i)=>{const o=Object.getOwnPropertyDescriptor,c=Object.defineProperty,y=i.symbol,d=[],P=!0===t[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=y("Promise"),m=y("then");i.onUnhandledError=l=>{if(i.showUncaughtError()){const u=l&&l.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;d.length;){const l=d.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(u){N(u)}}};const Z=y("unhandledPromiseRejectionHandler");function N(l){i.onUnhandledError(l);try{const u=n[Z];"function"==typeof u&&u.call(this,l)}catch(u){}}function B(l){return l&&l.then}function H(l){return l}function Q(l){return e.reject(l)}const q=y("state"),R=y("value"),_=y("finally"),K=y("parentPromiseValue"),x=y("parentPromiseState"),A=null,E=!0,G=!1;function M(l,u){return s=>{try{Y(l,u,s)}catch(f){Y(l,!1,f)}}}const w=function(){let l=!1;return function(s){return function(){l||(l=!0,s.apply(null,arguments))}}},ce=y("currentTaskTrace");function Y(l,u,s){const f=w();if(l===s)throw new TypeError("Promise resolved with itself");if(l[q]===A){let g=null;try{("object"==typeof s||"function"==typeof s)&&(g=s&&s.then)}catch(b){return f(()=>{Y(l,!1,b)})(),l}if(u!==G&&s instanceof e&&s.hasOwnProperty(q)&&s.hasOwnProperty(R)&&s[q]!==A)oe(s),Y(l,s[q],s[R]);else if(u!==G&&"function"==typeof g)try{g.call(s,f(M(l,u)),f(M(l,!1)))}catch(b){f(()=>{Y(l,!1,b)})()}else{l[q]=u;const b=l[R];if(l[R]=s,l[_]===_&&u===E&&(l[q]=l[x],l[R]=l[K]),u===G&&s instanceof Error){const p=n.currentTask&&n.currentTask.data&&n.currentTask.data.__creationTrace__;p&&c(s,ce,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(let p=0;p<b.length;)te(l,b[p++],b[p++],b[p++],b[p++]);if(0==b.length&&u==G){l[q]=0;let p=s;try{throw new Error("Uncaught (in promise): "+function a(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(S){p=S}P&&(p.throwOriginal=!0),p.rejection=s,p.promise=l,p.zone=n.current,p.task=n.currentTask,d.push(p),i.scheduleMicroTask()}}}return l}const W=y("rejectionHandledHandler");function oe(l){if(0===l[q]){try{const u=n[W];u&&"function"==typeof u&&u.call(this,{rejection:l[R],promise:l})}catch(u){}l[q]=G;for(let u=0;u<d.length;u++)l===d[u].promise&&d.splice(u,1)}}function te(l,u,s,f,g){oe(l);const b=l[q],p=b?"function"==typeof f?f:H:"function"==typeof g?g:Q;u.scheduleMicroTask("Promise.then",()=>{try{const S=l[R],D=!!s&&_===s[_];D&&(s[K]=S,s[x]=b);const O=u.run(p,void 0,D&&p!==Q&&p!==H?[]:[S]);Y(s,!0,O)}catch(S){Y(s,!1,S)}},s)}const I=function(){},T=t.AggregateError;class e{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(u){return Y(new this(null),E,u)}static reject(u){return Y(new this(null),G,u)}static any(u){if(!u||"function"!=typeof u[Symbol.iterator])return Promise.reject(new T([],"All promises were rejected"));const s=[];let f=0;try{for(let p of u)f++,s.push(e.resolve(p))}catch(p){return Promise.reject(new T([],"All promises were rejected"))}if(0===f)return Promise.reject(new T([],"All promises were rejected"));let g=!1;const b=[];return new e((p,S)=>{for(let D=0;D<s.length;D++)s[D].then(O=>{g||(g=!0,p(O))},O=>{b.push(O),f--,0===f&&(g=!0,S(new T(b,"All promises were rejected")))})})}static race(u){let s,f,g=new this((S,D)=>{s=S,f=D});function b(S){s(S)}function p(S){f(S)}for(let S of u)B(S)||(S=this.resolve(S)),S.then(b,p);return g}static all(u){return e.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof e?this:e).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,s){let f,g,b=new this((O,V)=>{f=O,g=V}),p=2,S=0;const D=[];for(let O of u){B(O)||(O=this.resolve(O));const V=S;try{O.then(F=>{D[V]=s?s.thenCallback(F):F,p--,0===p&&f(D)},F=>{s?(D[V]=s.errorCallback(F),p--,0===p&&f(D)):g(F)})}catch(F){g(F)}p++,S++}return p-=2,0===p&&f(D),b}constructor(u){const s=this;if(!(s instanceof e))throw new Error("Must be an instanceof Promise.");s[q]=A,s[R]=[];try{const f=w();u&&u(f(M(s,E)),f(M(s,G)))}catch(f){Y(s,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return e}then(u,s){var f;let g=null===(f=this.constructor)||void 0===f?void 0:f[Symbol.species];(!g||"function"!=typeof g)&&(g=this.constructor||e);const b=new g(I),p=n.current;return this[q]==A?this[R].push(p,b,u,s):te(this,p,b,u,s),b}catch(u){return this.then(null,u)}finally(u){var s;let f=null===(s=this.constructor)||void 0===s?void 0:s[Symbol.species];(!f||"function"!=typeof f)&&(f=e);const g=new f(I);g[_]=_;const b=n.current;return this[q]==A?this[R].push(b,g,u,u):te(this,b,g,u,u),g}}e.resolve=e.resolve,e.reject=e.reject,e.race=e.race,e.all=e.all;const r=t[v]=t.Promise;t.Promise=e;const k=y("thenPatched");function C(l){const u=l.prototype,s=o(u,"then");if(s&&(!1===s.writable||!s.configurable))return;const f=u.then;u[m]=f,l.prototype.then=function(g,b){return new e((S,D)=>{f.call(this,S,D)}).then(g,b)},l[k]=!0}return i.patchThen=C,r&&(C(r),he(t,"fetch",l=>function J(l){return function(u,s){let f=l.apply(u,s);if(f instanceof e)return f;let g=f.constructor;return g[k]||C(g),f}}(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=d,e}),Zone.__load_patch("toString",t=>{const n=Function.prototype.toString,i=j("OriginalDelegate"),o=j("Promise"),c=j("Error"),a=function(){if("function"==typeof this){const v=this[i];if(v)return"function"==typeof v?n.call(v):Object.prototype.toString.call(v);if(this===Promise){const m=t[o];if(m)return n.call(m)}if(this===Error){const m=t[c];if(m)return n.call(m)}}return n.call(this)};a[i]=n,Function.prototype.toString=a;const y=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":y.call(this)}});let ge=!1;if("undefined"!=typeof window)try{const t=Object.defineProperty({},"passive",{get:function(){ge=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){ge=!1}const ht={useG:!0},ne={},Ye={},$e=new RegExp("^"+ie+"(\\w+)(true|false)$"),Je=j("propagationStopped");function Ke(t,n){const i=(n?n(t):t)+U,o=(n?n(t):t)+se,c=ie+i,a=ie+o;ne[t]={},ne[t][U]=c,ne[t][se]=a}function dt(t,n,i,o){const c=o&&o.add||ue,a=o&&o.rm||ye,y=o&&o.listeners||"eventListeners",d=o&&o.rmAll||"removeAllListeners",P=j(c),v="."+c+":",Z=function(R,_,K){if(R.isRemoved)return;const x=R.callback;let z;"object"==typeof x&&x.handleEvent&&(R.callback=E=>x.handleEvent(E),R.originalDelegate=x);try{R.invoke(R,_,[K])}catch(E){z=E}const A=R.options;return A&&"object"==typeof A&&A.once&&_[a].call(_,K.type,R.originalDelegate?R.originalDelegate:R.callback,A),z};function N(R,_,K){if(!(_=_||t.event))return;const x=R||_.target||t,z=x[ne[_.type][K?se:U]];if(z){const A=[];if(1===z.length){const E=Z(z[0],x,_);E&&A.push(E)}else{const E=z.slice();for(let G=0;G<E.length&&(!_||!0!==_[Je]);G++){const h=Z(E[G],x,_);h&&A.push(h)}}if(1===A.length)throw A[0];for(let E=0;E<A.length;E++){const G=A[E];n.nativeScheduleMicroTask(()=>{throw G})}}}const B=function(R){return N(this,R,!1)},H=function(R){return N(this,R,!0)};function Q(R,_){if(!R)return!1;let K=!0;_&&void 0!==_.useG&&(K=_.useG);const x=_&&_.vh;let z=!0;_&&void 0!==_.chkDup&&(z=_.chkDup);let A=!1;_&&void 0!==_.rt&&(A=_.rt);let E=R;for(;E&&!E.hasOwnProperty(c);)E=le(E);if(!E&&R[c]&&(E=R),!E||E[P])return!1;const G=_&&_.eventNameToString,h={},M=E[P]=E[c],w=E[j(a)]=E[a],ee=E[j(y)]=E[y],ce=E[j(d)]=E[d];let Y;function W(s,f){return!ge&&"object"==typeof s&&s?!!s.capture:ge&&f?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?Object.assign(Object.assign({},s),{passive:!0}):s:{passive:!0}:s}_&&_.prepend&&(Y=E[j(_.prepend)]=E[_.prepend]);const e=K?function(s){if(!h.isExisting)return M.call(h.target,h.eventName,h.capture?H:B,h.options)}:function(s){return M.call(h.target,h.eventName,s.invoke,h.options)},r=K?function(s){if(!s.isRemoved){const f=ne[s.eventName];let g;f&&(g=f[s.capture?se:U]);const b=g&&s.target[g];if(b)for(let p=0;p<b.length;p++)if(b[p]===s){b.splice(p,1),s.isRemoved=!0,0===b.length&&(s.allRemoved=!0,s.target[g]=null);break}}if(s.allRemoved)return w.call(s.target,s.eventName,s.capture?H:B,s.options)}:function(s){return w.call(s.target,s.eventName,s.invoke,s.options)},C=_&&_.diff?_.diff:function(s,f){const g=typeof f;return"function"===g&&s.callback===f||"object"===g&&s.originalDelegate===f},J=Zone[j("UNPATCHED_EVENTS")],l=t[j("PASSIVE_EVENTS")],u=function(s,f,g,b,p=!1,S=!1){return function(){const D=this||t;let O=arguments[0];_&&_.transferEventName&&(O=_.transferEventName(O));let V=arguments[1];if(!V)return s.apply(this,arguments);if(Ze&&"uncaughtException"===O)return s.apply(this,arguments);let F=!1;if("function"!=typeof V){if(!V.handleEvent)return s.apply(this,arguments);F=!0}if(x&&!x(s,V,D,arguments))return;const _e=ge&&!!l&&-1!==l.indexOf(O),ae=W(arguments[2],_e);if(J)for(let Te=0;Te<J.length;Te++)if(O===J[Te])return _e?s.call(D,O,V,ae):s.apply(this,arguments);const xe=!!ae&&("boolean"==typeof ae||ae.capture),nt=!(!ae||"object"!=typeof ae)&&ae.once,gt=Zone.current;let Ge=ne[O];Ge||(Ke(O,G),Ge=ne[O]);const rt=Ge[xe?se:U];let Ie,ve=D[rt],ot=!1;if(ve){if(ot=!0,z)for(let Te=0;Te<ve.length;Te++)if(C(ve[Te],V))return}else ve=D[rt]=[];const st=D.constructor.name,it=Ye[st];it&&(Ie=it[O]),Ie||(Ie=st+f+(G?G(O):O)),h.options=ae,nt&&(h.options.once=!1),h.target=D,h.capture=xe,h.eventName=O,h.isExisting=ot;const Ce=K?ht:void 0;Ce&&(Ce.taskData=h);const Ee=gt.scheduleEventTask(Ie,V,Ce,g,b);return h.target=null,Ce&&(Ce.taskData=null),nt&&(ae.once=!0),!ge&&"boolean"==typeof Ee.options||(Ee.options=ae),Ee.target=D,Ee.capture=xe,Ee.eventName=O,F&&(Ee.originalDelegate=V),S?ve.unshift(Ee):ve.push(Ee),p?D:void 0}};return E[c]=u(M,v,e,r,A),Y&&(E.prependListener=u(Y,".prependListener:",function(s){return Y.call(h.target,h.eventName,s.invoke,h.options)},r,A,!0)),E[a]=function(){const s=this||t;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=arguments[2],b=!!g&&("boolean"==typeof g||g.capture),p=arguments[1];if(!p)return w.apply(this,arguments);if(x&&!x(w,p,s,arguments))return;const S=ne[f];let D;S&&(D=S[b?se:U]);const O=D&&s[D];if(O)for(let V=0;V<O.length;V++){const F=O[V];if(C(F,p))return O.splice(V,1),F.isRemoved=!0,0===O.length&&(F.allRemoved=!0,s[D]=null,"string"==typeof f)&&(s[ie+"ON_PROPERTY"+f]=null),F.zone.cancelTask(F),A?s:void 0}return w.apply(this,arguments)},E[y]=function(){const s=this||t;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=[],b=Qe(s,G?G(f):f);for(let p=0;p<b.length;p++){const S=b[p];g.push(S.originalDelegate?S.originalDelegate:S.callback)}return g},E[d]=function(){const s=this||t;let f=arguments[0];if(f){_&&_.transferEventName&&(f=_.transferEventName(f));const g=ne[f];if(g){const S=s[g[U]],D=s[g[se]];if(S){const O=S.slice();for(let V=0;V<O.length;V++){const F=O[V];this[a].call(this,f,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}if(D){const O=D.slice();for(let V=0;V<O.length;V++){const F=O[V];this[a].call(this,f,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}}}else{const g=Object.keys(s);for(let b=0;b<g.length;b++){const S=$e.exec(g[b]);let D=S&&S[1];D&&"removeListener"!==D&&this[d].call(this,D)}this[d].call(this,"removeListener")}if(A)return this},de(E[c],M),de(E[a],w),ce&&de(E[d],ce),ee&&de(E[y],ee),!0}let q=[];for(let R=0;R<i.length;R++)q[R]=Q(i[R],o);return q}function Qe(t,n){if(!n){const a=[];for(let y in t){const d=$e.exec(y);let P=d&&d[1];if(P&&(!n||P===n)){const v=t[y];if(v)for(let m=0;m<v.length;m++)a.push(v[m])}}return a}let i=ne[n];i||(Ke(n),i=ne[n]);const o=t[i[U]],c=t[i[se]];return o?c?o.concat(c):o.slice():c?c.slice():[]}function _t(t,n){const i=t.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",o=>function(c,a){c[Je]=!0,o&&o.apply(c,a)})}function Et(t,n,i,o,c){const a=Zone.__symbol__(o);if(n[a])return;const y=n[a]=n[o];n[o]=function(d,P,v){return P&&P.prototype&&c.forEach(function(m){const L=`${i}.${o}::`+m,Z=P.prototype;try{if(Z.hasOwnProperty(m)){const N=t.ObjectGetOwnPropertyDescriptor(Z,m);N&&N.value?(N.value=t.wrapWithCurrentZone(N.value,L),t._redefineProperty(P.prototype,m,N)):Z[m]&&(Z[m]=t.wrapWithCurrentZone(Z[m],L))}else Z[m]&&(Z[m]=t.wrapWithCurrentZone(Z[m],L))}catch(N){}}),y.call(n,d,P,v)},t.attachOriginToPatched(n[o],y)}function et(t,n,i){if(!i||0===i.length)return n;const o=i.filter(a=>a.target===t);if(!o||0===o.length)return n;const c=o[0].ignoreProperties;return n.filter(a=>-1===c.indexOf(a))}function tt(t,n,i,o){t&&qe(t,et(t,n,i),o)}function He(t){return Object.getOwnPropertyNames(t).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(t,n,i)=>{const o=He(t);i.patchOnProperties=qe,i.patchMethod=he,i.bindArguments=Le,i.patchMacroTask=lt;const c=n.__symbol__("BLACK_LISTED_EVENTS"),a=n.__symbol__("UNPATCHED_EVENTS");t[a]&&(t[c]=t[a]),t[c]&&(n[c]=n[a]=t[c]),i.patchEventPrototype=_t,i.patchEventTarget=dt,i.isIEOrEdge=ft,i.ObjectDefineProperty=be,i.ObjectGetOwnPropertyDescriptor=pe,i.ObjectCreate=Se,i.ArraySlice=Ve,i.patchClass=Re,i.wrapWithCurrentZone=fe,i.filterProperties=et,i.attachOriginToPatched=de,i._redefineProperty=Object.defineProperty,i.patchCallbacks=Et,i.getGlobalObjects=()=>({globalSources:Ye,zoneSymbolEventNames:ne,eventNames:o,isBrowser:Ae,isMix:Ue,isNode:Ze,TRUE_STR:se,FALSE_STR:U,ZONE_SYMBOL_PREFIX:ie,ADD_EVENT_LISTENER_STR:ue,REMOVE_EVENT_LISTENER_STR:ye})});const Me=j("zoneTask");function ke(t,n,i,o){let c=null,a=null;i+=o;const y={};function d(v){const m=v.data;return m.args[0]=function(){return v.invoke.apply(this,arguments)},m.handleId=c.apply(t,m.args),v}function P(v){return a.call(t,v.data.handleId)}c=he(t,n+=o,v=>function(m,L){if("function"==typeof L[0]){const Z={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?L[1]||0:void 0,args:L},N=L[0];L[0]=function(){try{return N.apply(this,arguments)}finally{Z.isPeriodic||("number"==typeof Z.handleId?delete y[Z.handleId]:Z.handleId&&(Z.handleId[Me]=null))}};const B=De(n,L[0],Z,d,P);if(!B)return B;const H=B.data.handleId;return"number"==typeof H?y[H]=B:H&&(H[Me]=B),H&&H.ref&&H.unref&&"function"==typeof H.ref&&"function"==typeof H.unref&&(B.ref=H.ref.bind(H),B.unref=H.unref.bind(H)),"number"==typeof H||H?H:B}return v.apply(t,L)}),a=he(t,i,v=>function(m,L){const Z=L[0];let N;"number"==typeof Z?N=y[Z]:(N=Z&&Z[Me],N||(N=Z)),N&&"string"==typeof N.type?"notScheduled"!==N.state&&(N.cancelFn&&N.data.isPeriodic||0===N.runCount)&&("number"==typeof Z?delete y[Z]:Z&&(Z[Me]=null),N.zone.cancelTask(N)):v.apply(t,L)})}Zone.__load_patch("legacy",t=>{const n=t[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("queueMicrotask",(t,n,i)=>{i.patchMethod(t,"queueMicrotask",o=>function(c,a){n.current.scheduleMicroTask("queueMicrotask",a[0])})}),Zone.__load_patch("timers",t=>{const n="set",i="clear";ke(t,n,i,"Timeout"),ke(t,n,i,"Interval"),ke(t,n,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",t=>{ke(t,"request","cancel","AnimationFrame"),ke(t,"mozRequest","mozCancel","AnimationFrame"),ke(t,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(t,n)=>{const i=["alert","prompt","confirm"];for(let o=0;o<i.length;o++)he(t,i[o],(a,y,d)=>function(P,v){return n.current.run(a,t,v,d)})}),Zone.__load_patch("EventTarget",(t,n,i)=>{(function mt(t,n){n.patchEventPrototype(t,n)})(t,i),function yt(t,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:o,TRUE_STR:c,FALSE_STR:a,ZONE_SYMBOL_PREFIX:y}=n.getGlobalObjects();for(let P=0;P<i.length;P++){const v=i[P],Z=y+(v+a),N=y+(v+c);o[v]={},o[v][a]=Z,o[v][c]=N}const d=t.EventTarget;d&&d.prototype&&n.patchEventTarget(t,n,[d&&d.prototype])}(t,i);const o=t.XMLHttpRequestEventTarget;o&&o.prototype&&i.patchEventTarget(t,i,[o.prototype])}),Zone.__load_patch("MutationObserver",(t,n,i)=>{Re("MutationObserver"),Re("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(t,n,i)=>{Re("IntersectionObserver")}),Zone.__load_patch("FileReader",(t,n,i)=>{Re("FileReader")}),Zone.__load_patch("on_property",(t,n,i)=>{!function Tt(t,n){if(Ze&&!Ue||Zone[t.symbol("patchEvents")])return;const i=n.__Zone_ignore_on_properties;let o=[];if(Ae){const c=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const a=function ut(){try{const t=me.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch(t){}return!1}()?[{target:c,ignoreProperties:["error"]}]:[];tt(c,He(c),i&&i.concat(a),le(c))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<o.length;c++){const a=n[o[c]];a&&a.prototype&&tt(a.prototype,He(a.prototype),i)}}(i,t)}),Zone.__load_patch("customElements",(t,n,i)=>{!function pt(t,n){const{isBrowser:i,isMix:o}=n.getGlobalObjects();(i||o)&&t.customElements&&"customElements"in t&&n.patchCallbacks(n,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(t,i)}),Zone.__load_patch("XHR",(t,n)=>{!function P(v){const m=v.XMLHttpRequest;if(!m)return;const L=m.prototype;let N=L[Pe],B=L[we];if(!N){const h=v.XMLHttpRequestEventTarget;if(h){const M=h.prototype;N=M[Pe],B=M[we]}}const H="readystatechange",Q="scheduled";function q(h){const M=h.data,w=M.target;w[a]=!1,w[d]=!1;const ee=w[c];N||(N=w[Pe],B=w[we]),ee&&B.call(w,H,ee);const ce=w[c]=()=>{if(w.readyState===w.DONE)if(!M.aborted&&w[a]&&h.state===Q){const W=w[n.__symbol__("loadfalse")];if(0!==w.status&&W&&W.length>0){const oe=h.invoke;h.invoke=function(){const te=w[n.__symbol__("loadfalse")];for(let X=0;X<te.length;X++)te[X]===h&&te.splice(X,1);!M.aborted&&h.state===Q&&oe.call(h)},W.push(h)}else h.invoke()}else!M.aborted&&!1===w[a]&&(w[d]=!0)};return N.call(w,H,ce),w[i]||(w[i]=h),E.apply(w,M.args),w[a]=!0,h}function R(){}function _(h){const M=h.data;return M.aborted=!0,G.apply(M.target,M.args)}const K=he(L,"open",()=>function(h,M){return h[o]=0==M[2],h[y]=M[1],K.apply(h,M)}),z=j("fetchTaskAborting"),A=j("fetchTaskScheduling"),E=he(L,"send",()=>function(h,M){if(!0===n.current[A]||h[o])return E.apply(h,M);{const w={target:h,url:h[y],isPeriodic:!1,args:M,aborted:!1},ee=De("XMLHttpRequest.send",R,w,q,_);h&&!0===h[d]&&!w.aborted&&ee.state===Q&&ee.invoke()}}),G=he(L,"abort",()=>function(h,M){const w=function Z(h){return h[i]}(h);if(w&&"string"==typeof w.type){if(null==w.cancelFn||w.data&&w.data.aborted)return;w.zone.cancelTask(w)}else if(!0===n.current[z])return G.apply(h,M)})}(t);const i=j("xhrTask"),o=j("xhrSync"),c=j("xhrListener"),a=j("xhrScheduled"),y=j("xhrURL"),d=j("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",t=>{t.navigator&&t.navigator.geolocation&&function at(t,n){const i=t.constructor.name;for(let o=0;o<n.length;o++){const c=n[o],a=t[c];if(a){if(!Fe(pe(t,c)))continue;t[c]=(d=>{const P=function(){return d.apply(this,Le(arguments,i+"."+c))};return de(P,d),P})(a)}}}(t.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(t,n)=>{function i(o){return function(c){Qe(t,o).forEach(y=>{const d=t.PromiseRejectionEvent;if(d){const P=new d(o,{promise:c.promise,reason:c.rejection});y.invoke(P)}})}}t.PromiseRejectionEvent&&(n[j("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[j("rejectionHandledHandler")]=i("rejectionhandled"))})}}]);