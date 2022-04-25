
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.RongIMLib = {}));
})(this, (function (exports) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    var e;!function(e){e[e.READ=1]="READ",e[e.LISTENED=2]="LISTENED",e[e.DOWNLOADED=4]="DOWNLOADED",e[e.RETRIEVED=8]="RETRIEVED",e[e.UNREAD=0]="UNREAD";}(e||(e={}));var t,n,i=e,u=["https://nav.cn.ronghub.com","https://nav2-cn.ronghub.com"],c=["wsproxy.cn.ronghub.com","wsap-cn.ronghub.com"],h=["cometproxy-cn.ronghub.com","mini-cn.ronghub.com"],v={"RC:TxtMsg":{isCounted:!0,isPersited:!0},"RC:ImgMsg":{isCounted:!0,isPersited:!0},"RC:VcMsg":{isCounted:!0,isPersited:!0},"RC:ImgTextMsg":{isCounted:!0,isPersited:!0},"RC:FileMsg":{isCounted:!0,isPersited:!0},"RC:HQVCMsg":{isCounted:!0,isPersited:!0},"RC:LBSMsg":{isCounted:!0,isPersited:!0},"RC:PSImgTxtMsg":{isCounted:!0,isPersited:!0},"RC:PSMultiImgTxtMsg":{isCounted:!0,isPersited:!0},"RCJrmf:RpMsg":{isCounted:!0,isPersited:!0},"RCJrmf:RpOpendMsg":{isCounted:!0,isPersited:!0},"RC:CombineMsg":{isCounted:!0,isPersited:!0},"RC:ReferenceMsg":{isCounted:!0,isPersited:!0},"RC:SightMsg":{isCounted:!0,isPersited:!0},"RC:GIFMsg":{isCounted:!0,isPersited:!0},"RC:InfoNtf":{isCounted:!1,isPersited:!0},"RC:ContactNtf":{isCounted:!1,isPersited:!0},"RC:ProfileNtf":{isCounted:!1,isPersited:!0},"RC:CmdNtf":{isCounted:!1,isPersited:!0},"RC:GrpNtf":{isCounted:!1,isPersited:!0},"RC:RcCmd":{isCounted:!1,isPersited:!0},"RC:CmdMsg":{isCounted:!1,isPersited:!1},"RC:TypSts":{isCounted:!1,isPersited:!1},"RC:PSCmd":{isCounted:!1,isPersited:!1},"RC:SRSMsg":{isCounted:!1,isPersited:!1},"RC:RRReqMsg":{isCounted:!1,isPersited:!1},"RC:RRRspMsg":{isCounted:!1,isPersited:!1},"RC:CsChaR":{isCounted:!1,isPersited:!1},"RC:CSCha":{isCounted:!1,isPersited:!1},"RC:CsEva":{isCounted:!1,isPersited:!1},"RC:CsContact":{isCounted:!1,isPersited:!1},"RC:CsHs":{isCounted:!1,isPersited:!1},"RC:CsHsR":{isCounted:!1,isPersited:!1},"RC:CsSp":{isCounted:!1,isPersited:!1},"RC:CsEnd":{isCounted:!1,isPersited:!1},"RC:CsUpdate":{isCounted:!1,isPersited:!1},"RC:ReadNtf":{isCounted:!1,isPersited:!1},"RC:chrmKVNotiMsg":{isCounted:!1,isPersited:!1},"RC:VCAccept":{isCounted:!1,isPersited:!1},"RC:VCRinging":{isCounted:!1,isPersited:!1},"RC:VCSummary":{isCounted:!1,isPersited:!1},"RC:VCHangup":{isCounted:!1,isPersited:!1},"RC:VCInvite":{isCounted:!1,isPersited:!1},"RC:VCModifyMedia":{isCounted:!1,isPersited:!1},"RC:VCModifyMem":{isCounted:!1,isPersited:!1},"RC:MsgExMsg":{isCounted:!1,isPersited:!1},"RC:RRMsg":{isCounted:!1,isPersited:!1},"RC:LogCmdMsg":{isCounted:!1,isPersited:!1},"RC:InterceptMsg":{isCounted:!1,isPersited:!1}},T=["RC:TypSts","RC:InterceptMsg"];!function(e){e.WEBSOCKET="websocket",e.COMET="comet";}(t||(t={}));var I=function(e){return n||(n={set:function(t,n){e.localStorage.setItem(t,JSON.stringify(n));},get:function(t){var n;try{n=JSON.parse(e.localStorage.getItem(t));}catch(e){n=null;}return n},remove:function(t){return e.localStorage.removeItem(t)},getKeys:function(){var t=[];for(var n in e.localStorage)t.push(n);return t}}),n},C=function(){function e(e){this._caches={},e&&(this._caches=e);}return e.prototype.set=function(e,t){this._caches[e]=t;},e.prototype.remove=function(e){var t=this.get(e);return delete this._caches[e],t},e.prototype.get=function(e){return this._caches[e]},e.prototype.getKeys=function(){var e=[];for(var t in this._caches)e.push(t);return e},e}(),R=function(){function e(e,t){var n,i=t?"RCV4-"+t:"RCV4-";this._rootStorage=I(e);var r=this._rootStorage.get(i)||{};this._cache=new C(((n={})[i]=r,n)),this._storageKey=i;}return e.prototype._get=function(){var e=this._storageKey;return this._cache.get(e)||{}},e.prototype._set=function(e){var t=this._storageKey;e=e||{},this._cache.set(t,e),this._rootStorage.set(t,e);},e.prototype.set=function(e,t){var n=this._get();n[e]=t,this._set(n);},e.prototype.remove=function(e){var t=this._get();delete t[e],this._set(t);},e.prototype.clear=function(){var e=this._storageKey;this._rootStorage.remove(e),this._cache.remove(e);},e.prototype.get=function(e){return this._get()[e]},e.prototype.getKeys=function(){var e=this._get(),t=[];for(var n in e)t.push(n);return t},e.prototype.getValues=function(){return this._get()||{}},e}(),S=function(e,t){return (S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);})(e,t)};function N(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e;}S(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n);}var O=function(){return (O=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function M(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{u(i.next(e));}catch(e){s(e);}}function a(e){try{u(i.throw(e));}catch(e){s(e);}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t);}))).then(o,a);}u((i=i.apply(e,t||[])).next());}))}function w(e,t){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1];break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s);break}r[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o);}catch(e){s=[6,e],i=0;}finally{n=r=0;}if(5&s[0])throw s[1];return {value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function A(e,t){for(var n=0,i=t.length,r=e.length;n<i;n++,r++)e[r]=t[n];return e}exports.LogLevel = void 0;var b;(function(e){function t(t){return e.call(this,"TODO => "+t)||this}return N(t,e),t})(Error);var D=function(e,t,n){if(void 0===t||void 0===n)return e.toUpperCase();var i=e.slice(t,n);return e=e.replace(i,(function(e){return e.toUpperCase()}))},V=function(e,t){void 0===t&&(t="utf-8");var n,i=0;if("utf-16"===t)for(var r=0,s=e.length;r<s;r++)i+=(n=e.charCodeAt(r))<=65535?2:4;else for(r=0,s=e.length;r<s;r++)i+=(n=e.charCodeAt(r))<127?1:n<=2047?2:n<=65535?3:4;return i},k=function(e,t){if(e=e.replace(/\?$/,""),!t)return e;var n=Object.keys(t).map((function(e){return e+"="+t[e]})).filter((function(e){return !!e}));return n.length?[e,n.join("&")].join("?"):e},x=function(e){return e.match(/\d+(\.\d+){2}/)[0]};!function(e){e[e.LOG=0]="LOG",e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e[e.FATAL=4]="FATAL",e[e.NONE=1e3]="NONE";}(exports.LogLevel||(exports.LogLevel={})),function(e){e.IM="IM",e.RTC="RTC";}(b||(b={}));var B="RC_Logs";function G(e){var t=e.target.result;1===e.oldVersion&&t.deleteObjectStore(B),function(e,t,n){var i;if(!e.objectStoreNames.contains(t)){var r=O({},n.objectStoreParams);i=e.createObjectStore(t,r),n.indexs&&n.indexs.length>0&&n.indexs.forEach((function(e){i.createIndex(e.indexName,e.key,{unique:e.unique});}));}}(t,B,{indexs:[{indexName:"time",key:"time",unique:!1}],objectStoreParams:{autoIncrement:!0}});}var F,q=function(){function e(){}return e.init=function(){if("undefined"!=typeof window&&window&&window.indexedDB){var t=window.indexedDB.open("RC_ENGINE_DB",2);t.onerror=function(e){console.warn("open indexDB request failed "+e.target.error);},t.onsuccess=function(t){e._db=t.target.result,e._db&&(e._db.onclose=function(t){var n;console.warn("The database "+(null===(n=e._db)||void 0===n?void 0:n.name)+" has unexpectedly closed.",t),e._db=null,window.__RCIndexDBInstance=null;},e._db.onerror=function(t){var n;console.warn("The database "+(null===(n=e._db)||void 0===n?void 0:n.name)+" has opening error.",t),e._db=null,window.__RCIndexDBInstance=null;},e._db.onabort=function(t){var n;console.warn("The database "+(null===(n=e._db)||void 0===n?void 0:n.name)+" has opening aborted.",t),e._db=null,window.__RCIndexDBInstance=null;}),window.__RCIndexDBInstance=new e;},t.onupgradeneeded=function(t){e._db=t.target.result,G(t);};}else console.debug("IndexDB is not currently supported in the environment!");},e.getInstance=function(){return window&&window.__RCIndexDBInstance?window.__RCIndexDBInstance:null},e.prototype.addList=function(t,n){return new Promise((function(i){if(e._db){var r=e._db.transaction([t],"readwrite"),s=r.objectStore(t);n.forEach((function(e){null==s||s.add(e);})),r.oncomplete=function(e){i(!0);},r.onerror=function(e){i(!1);};}else i(!1);}))},e.prototype.getRangeData=function(t,n,i,r){return new Promise((function(s){if(e._db){var o=e._db.transaction([t],"readwrite").objectStore(t),a=IDBKeyRange.bound(i,r),u=o.index(n),c=[],h=u.openCursor(a);h.onsuccess=function(e){var t=e.target.result;t?(c.push(t.value),t.continue()):s(c);},h.onerror=function(e){console.error(e),s([]);};}else s([]);}))},e.prototype.getCount=function(t,n){return new Promise((function(n){if(e._db){var i=e._db.transaction([t],"readonly").objectStore(t).count();i.onsuccess=function(){n(i.result);},i.onerror=function(e){console.error(e),n(0);};}else n(0);}))},e.prototype.removeFirstData=function(t,n,i){return new Promise((function(n){if(e._db){var r=e._db.transaction([t],"readwrite").objectStore(t),s=r.getAllKeys(IDBKeyRange.lowerBound(0),i);s.onsuccess=function(){var e=s.result;e.length>0&&(r.delete(IDBKeyRange.bound(e[0],e[e.length-1])).onsuccess=function(){n(!0);});};}else n(!1);}))},e._db=null,e}(),K=function(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return ("x"===e?t:3&t|8).toString(16)}))},H=function(){var e=K();if(e=e.replace(/-/g,"")+"a",(e=function(e){var t="0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZa0".split(""),n=t.length+1,i=+e,r=[];do{var s=i%n;i=(i-s)/n,r.unshift(t[s]);}while(i);return r.join("")}(e=parseInt(e,16))).length>22&&(e=e.slice(0,22)),e.length<22)for(var t=22-e.length,n=0;n<t;n++)e+="0";return e};!function(e){e[e.NONE=0]="NONE",e[e.PRIVATE=1]="PRIVATE",e[e.DISCUSSION=2]="DISCUSSION",e[e.GROUP=3]="GROUP",e[e.CHATROOM=4]="CHATROOM",e[e.CUSTOMER_SERVICE=5]="CUSTOMER_SERVICE",e[e.SYSTEM=6]="SYSTEM",e[e.APP_PUBLIC_SERVICE=7]="APP_PUBLIC_SERVICE",e[e.PUBLIC_SERVICE=8]="PUBLIC_SERVICE",e[e.ULTRA_GROUP=10]="ULTRA_GROUP",e[e.RTC_ROOM=12]="RTC_ROOM";}(F||(F={}));var Y,j=F;!function(e){e[e.IMAGE=1]="IMAGE",e[e.AUDIO=2]="AUDIO",e[e.VIDEO=3]="VIDEO",e[e.FILE=4]="FILE",e[e.SIGHT=5]="SIGHT",e[e.COMBINE_HTML=6]="COMBINE_HTML";}(Y||(Y={}));var Q,W=Y,J=function(e){return "string"==typeof e},z=function(e){return "boolean"==typeof e},Z=function(e){return "number"==typeof e&&!isNaN(e)},X=function(e){return -1!==Object.prototype.toString.call(e).indexOf("Array")},$=function(e){return "[object ArrayBuffer]"===Object.prototype.toString.call(e)},ee=function(e){return J(e)&&e.length>0},ne=function(e){return "[object Object]"===Object.prototype.toString.call(e)},ie=function(e){return "[object Function]"===Object.prototype.toString.call(e)},re=function(e){return void 0===e||"[object Undefined]"===Object.prototype.toString.call(e)},se=function(e){return "[object Null]"===Object.prototype.toString.call(e)},oe=function(e){return J(e)&&/https?:\/\//.test(e)},ae=function(e){for(var t in e)return !0;return !1},ue=function(e){return Z(e)&&Object.prototype.hasOwnProperty.call(j,e)},ce=function(e){return Z(e)&&Object.prototype.hasOwnProperty.call(W,e)},he=function(e){var t=!1;if(ne(e))for(var n in e)if(t=J(n)&&!/^[A-Za-z0-9_=+-]+$/.test(n))break;return t},le={};console&&((Q={})[exports.LogLevel.DEBUG]=console.debug.bind(console),Q[exports.LogLevel.INFO]=console.info.bind(console),Q[exports.LogLevel.WARN]=console.warn.bind(console),Q[exports.LogLevel.ERROR]=console.error.bind(console),Q[exports.LogLevel.FATAL]=console.log.bind(console),le=Q);var de,fe=function(e){return J(e)||Z(e)||re(e)||z(e)?e:e instanceof Error?JSON.stringify({name:e.name,message:e.message,stack:e.stack}):JSON.stringify(e)},pe=function(){function e(e,t,n){this.tag=e,this.type=t,this.initiator=n,this._outLevel=exports.LogLevel.WARN,this.debug=this.log.bind(this,exports.LogLevel.DEBUG),this.info=this.log.bind(this,exports.LogLevel.INFO),this.warn=this.log.bind(this,exports.LogLevel.WARN),this.error=this.log.bind(this,exports.LogLevel.ERROR),this.fatal=this.log.bind(this,exports.LogLevel.FATAL);}return e.init=function(t){e.userId=t;},e.reset=function(){e.userId="";},e.prototype._defaultStdout=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];le[e]&&le[e].apply(le,A([t+":"],n));},e.prototype.__pushLocalLog=function(t,n,i){var r;r=this.type?this.type:["RCRTCLog","RCCall","RCRTC","RTC-A"].includes(this.tag)?b.RTC:b.IM;var s=Date.now();V(n)>=1e3&&(n=function(e,t,n){if(void 0===n&&(n="utf-8"),!e||!t)return "";var i="utf-8"===n?3:2,r=0,s=0,o="";for(s=0;s<e.length;s++){if(e.charCodeAt(s)>255?r+=i:r++,r>t)return o;o+=e.charAt(s);}return e}(n,1e3));var o=JSON.stringify({message:n,userId:e.userId}).replace(/"/g,'""'),a=/^[\w]+-[\w]+-[\w]+?/.test(i)?i:(this.initiator||"L")+"-"+i+"-O",u={sessionId:e.sessionId,time:s,level:4-t,content:e.sessionId+","+Date.now()+","+r+","+(4-t)+","+a+',"'+o+'"\n',userId:e.userId};e.databaseLogList.push(u),(e.databaseLogList.length>=100||t===exports.LogLevel.FATAL)&&this.__insertLogIntoDatabase();},e.prototype.__insertLogIntoDatabase=function(){return M(this,void 0,void 0,(function(){var t,n,i;return w(this,(function(r){switch(r.label){case 0:return t=A([],e.databaseLogList),e.databaseLogList=[],(n=q.getInstance())?[4,n.addList(B,t)]:[3,3];case 1:return i=r.sent(),[4,n.getCount(B,"time")];case 2:return r.sent()>1e5&&n.removeFirstData(B,"time",2e3),[2,i];case 3:return [2,!1]}}))}))},e.prototype.setLogLevel=function(e){this._outLevel="number"!=typeof e?exports.LogLevel.WARN:e;},e.prototype.setLogStdout=function(e){this._logStdout=e;},e.prototype.log=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e>exports.LogLevel.DEBUG&&this.__pushLocalLog(e,t.map(fe).join(" "),this.tag),!(e<this._outLevel)){var i=(new Date).toISOString()+"["+this.tag+"]["+exports.LogLevel[e]+"]",r=i+" - "+t.map(fe).join(" ");this._logStdout?this._logStdout(e,r):this._stdout?this._stdout(e,r):this._defaultStdout.apply(this,A([e,i],t));}},e.prototype.reportLog=function(t,n,i){this.__pushLocalLog(4-t,i,n);var r=JSON.stringify({message:i}).replace(/"/g,'""');r='"'+r+'"';var s={level:t,content:[e.sessionId,Date.now(),this.type,t,n,r].join()+"\n"};e.realTimeLogList.push(s),e.realTimeLogList.length>=600&&(e.realTimeLogList=e.realTimeLogList.slice(-500));},e.prototype.set=function(e,t){this.warn("logger.set has being deprecated!");},e.prototype.setStdout=function(e){this._stdout=e;},e.prototype.__clearRealTimeLog=function(){e.realTimeLogList=[];},e.databaseLogList=[],e.realTimeLogList=[],e.sessionId=H(),e.userId="",e}(),ge=new pe("RCLog"),_e=function(){function e(){this._map={};}return e.prototype.on=function(e,t,n){var i=this._map[e]||(this._map[e]=[]);i.some((function(e){return e.listener===t&&e.target===n}))||i.push({listener:t,target:n});},e.prototype.once=function(e,t,n){var i=this._map[e]||(this._map[e]=[]);i.some((function(e){return e.listener===t&&e.target===n}))||i.push({listener:t,target:n,once:!0});},e.prototype.off=function(e,t,n){var i=this._map[e];i&&((i=i.filter((function(e){return e.listener!==t||e.target!==n}))).length?this._map[e]=i:delete this._map[e]);},e.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=this._map[e];if(i)for(var r=i.length-1;r>=0;r-=1){var s=i[r],o=s.target,a=s.once,u=s.listener;a&&i.splice(r,1);try{u.call.apply(u,A([o],t));}catch(e){ge.error(e);}}},e.prototype.removeAll=function(e){delete this._map[e];},e.prototype.clear=function(){Object.keys(this._map).forEach(this.removeAll,this);},e}();!function(e){e[e.SEND=1]="SEND",e[e.RECEIVE=2]="RECEIVE";}(de||(de={}));var ye,me=de;!function(e){e[e.TIMEOUT=-1]="TIMEOUT",e[e.UNKNOWN=-2]="UNKNOWN",e[e.PARAMETER_ERROR=-3]="PARAMETER_ERROR",e[e.EXTRA_METHOD_UNDEFINED=-4]="EXTRA_METHOD_UNDEFINED",e[e.MAIN_PROCESS_ERROR=-5]="MAIN_PROCESS_ERROR",e[e.PARAMETER_CHANGED=-6]="PARAMETER_CHANGED",e[e.SUCCESS=0]="SUCCESS",e[e.RC_MSG_UNAUTHORIZED=20406]="RC_MSG_UNAUTHORIZED",e[e.RC_DISCUSSION_GROUP_ID_INVALID=20407]="RC_DISCUSSION_GROUP_ID_INVALID",e[e.SEND_FREQUENCY_TOO_FAST=20604]="SEND_FREQUENCY_TOO_FAST",e[e.NOT_IN_DISCUSSION=21406]="NOT_IN_DISCUSSION",e[e.FORBIDDEN_IN_GROUP=22408]="FORBIDDEN_IN_GROUP",e[e.RECALL_MESSAGE=25101]="RECALL_MESSAGE",e[e.NOT_IN_GROUP=22406]="NOT_IN_GROUP",e[e.NOT_IN_CHATROOM=23406]="NOT_IN_CHATROOM",e[e.FORBIDDEN_IN_CHATROOM=23408]="FORBIDDEN_IN_CHATROOM",e[e.RC_CHATROOM_USER_KICKED=23409]="RC_CHATROOM_USER_KICKED",e[e.RC_CHATROOM_NOT_EXIST=23410]="RC_CHATROOM_NOT_EXIST",e[e.RC_CHATROOM_IS_FULL=23411]="RC_CHATROOM_IS_FULL",e[e.RC_CHATROOM_PATAMETER_INVALID=23412]="RC_CHATROOM_PATAMETER_INVALID",e[e.CHATROOM_GET_HISTORYMSG_ERROR=23413]="CHATROOM_GET_HISTORYMSG_ERROR",e[e.CHATROOM_NOT_OPEN_HISTORYMSG_STORE=23414]="CHATROOM_NOT_OPEN_HISTORYMSG_STORE",e[e.CHATROOM_KV_EXCEED=23423]="CHATROOM_KV_EXCEED",e[e.CHATROOM_KV_OVERWRITE_INVALID=23424]="CHATROOM_KV_OVERWRITE_INVALID",e[e.CHATROOM_KV_STORE_NOT_OPEN=23426]="CHATROOM_KV_STORE_NOT_OPEN",e[e.CHATROOM_KEY_NOT_EXIST=23427]="CHATROOM_KEY_NOT_EXIST",
    /*!
         聊天室设置 KV 失败，出现在两人或者多端同时操作一个 kv。
         如果出现该错误，为避免和其他端同时操作，请延时一定时间再试
        */
    e[e.CHATROOM_KV_SET_ERROR=23431]="CHATROOM_KV_SET_ERROR",e[e.SENSITIVE_SHIELD=21501]="SENSITIVE_SHIELD",e[e.SENSITIVE_REPLACE=21502]="SENSITIVE_REPLACE",e[e.JOIN_IN_DISCUSSION=21407]="JOIN_IN_DISCUSSION",e[e.CREATE_DISCUSSION=21408]="CREATE_DISCUSSION",e[e.INVITE_DICUSSION=21409]="INVITE_DICUSSION",e[e.GET_USERINFO_ERROR=23407]="GET_USERINFO_ERROR",e[e.REJECTED_BY_BLACKLIST=405]="REJECTED_BY_BLACKLIST",e[e.RC_NET_CHANNEL_INVALID=30001]="RC_NET_CHANNEL_INVALID",e[e.RC_NET_UNAVAILABLE=30002]="RC_NET_UNAVAILABLE",e[e.RC_MSG_RESP_TIMEOUT=30003]="RC_MSG_RESP_TIMEOUT",e[e.RC_HTTP_SEND_FAIL=30004]="RC_HTTP_SEND_FAIL",e[e.RC_HTTP_REQ_TIMEOUT=30005]="RC_HTTP_REQ_TIMEOUT",e[e.RC_HTTP_RECV_FAIL=30006]="RC_HTTP_RECV_FAIL",e[e.RC_NAVI_RESOURCE_ERROR=30007]="RC_NAVI_RESOURCE_ERROR",e[e.RC_NODE_NOT_FOUND=30008]="RC_NODE_NOT_FOUND",e[e.RC_DOMAIN_NOT_RESOLVE=30009]="RC_DOMAIN_NOT_RESOLVE",e[e.RC_SOCKET_NOT_CREATED=30010]="RC_SOCKET_NOT_CREATED",e[e.RC_SOCKET_DISCONNECTED=30011]="RC_SOCKET_DISCONNECTED",e[e.RC_PING_SEND_FAIL=30012]="RC_PING_SEND_FAIL",e[e.RC_PONG_RECV_FAIL=30013]="RC_PONG_RECV_FAIL",e[e.RC_MSG_SEND_FAIL=30014]="RC_MSG_SEND_FAIL",e[e.RC_MSG_CONTENT_EXCEED_LIMIT=30016]="RC_MSG_CONTENT_EXCEED_LIMIT",e[e.RC_CONN_ACK_TIMEOUT=31e3]="RC_CONN_ACK_TIMEOUT",e[e.RC_CONN_PROTO_VERSION_ERROR=31001]="RC_CONN_PROTO_VERSION_ERROR",e[e.RC_CONN_ID_REJECT=31002]="RC_CONN_ID_REJECT",e[e.RC_CONN_SERVER_UNAVAILABLE=31003]="RC_CONN_SERVER_UNAVAILABLE",e[e.RC_CONN_USER_OR_PASSWD_ERROR=31004]="RC_CONN_USER_OR_PASSWD_ERROR",e[e.RC_CONN_NOT_AUTHRORIZED=31005]="RC_CONN_NOT_AUTHRORIZED",e[e.RC_CONN_REDIRECTED=31006]="RC_CONN_REDIRECTED",e[e.RC_CONN_PACKAGE_NAME_INVALID=31007]="RC_CONN_PACKAGE_NAME_INVALID",e[e.RC_CONN_APP_BLOCKED_OR_DELETED=31008]="RC_CONN_APP_BLOCKED_OR_DELETED",e[e.RC_CONN_USER_BLOCKED=31009]="RC_CONN_USER_BLOCKED",e[e.RC_DISCONN_KICK=31010]="RC_DISCONN_KICK",e[e.RC_DISCONN_EXCEPTION=31011]="RC_DISCONN_EXCEPTION",e[e.RC_APP_AUTH_NOT_PASS=31026]="RC_APP_AUTH_NOT_PASS",e[e.RC_OTP_USED=31027]="RC_OTP_USED",e[e.RC_PLATFORM_ERROR=31028]="RC_PLATFORM_ERROR",e[e.RC_QUERY_ACK_NO_DATA=32001]="RC_QUERY_ACK_NO_DATA",e[e.RC_MSG_DATA_INCOMPLETE=32002]="RC_MSG_DATA_INCOMPLETE",e[e.BIZ_ERROR_CLIENT_NOT_INIT=33001]="BIZ_ERROR_CLIENT_NOT_INIT",e[e.BIZ_ERROR_DATABASE_ERROR=33002]="BIZ_ERROR_DATABASE_ERROR",e[e.BIZ_ERROR_INVALID_PARAMETER=33003]="BIZ_ERROR_INVALID_PARAMETER",e[e.BIZ_ERROR_NO_CHANNEL=33004]="BIZ_ERROR_NO_CHANNEL",e[e.BIZ_ERROR_RECONNECT_SUCCESS=33005]="BIZ_ERROR_RECONNECT_SUCCESS",e[e.BIZ_ERROR_CONNECTING=33006]="BIZ_ERROR_CONNECTING",e[e.MSG_ROAMING_SERVICE_UNAVAILABLE=33007]="MSG_ROAMING_SERVICE_UNAVAILABLE",e[e.MSG_INSERT_ERROR=33008]="MSG_INSERT_ERROR",e[e.MSG_DEL_ERROR=33009]="MSG_DEL_ERROR",e[e.TAG_EXISTS=33101]="TAG_EXISTS",e[e.TAG_NOT_EXIST=33100]="TAG_NOT_EXIST",e[e.NO_TAG_IN_CONVER=33102]="NO_TAG_IN_CONVER",e[e.CONVER_REMOVE_ERROR=34001]="CONVER_REMOVE_ERROR",e[e.CONVER_GETLIST_ERROR=34002]="CONVER_GETLIST_ERROR",e[e.CONVER_SETOP_ERROR=34003]="CONVER_SETOP_ERROR",e[e.CONVER_TOTAL_UNREAD_ERROR=34004]="CONVER_TOTAL_UNREAD_ERROR",e[e.CONVER_TYPE_UNREAD_ERROR=34005]="CONVER_TYPE_UNREAD_ERROR",e[e.CONVER_ID_TYPE_UNREAD_ERROR=34006]="CONVER_ID_TYPE_UNREAD_ERROR",e[e.CONVER_CLEAR_ERROR=34007]="CONVER_CLEAR_ERROR",e[e.EXPANSION_LIMIT_EXCEET=34010]="EXPANSION_LIMIT_EXCEET",e[e.MESSAGE_KV_NOT_SUPPORT=34008]="MESSAGE_KV_NOT_SUPPORT",e[e.CLEAR_HIS_TIME_ERROR=34011]="CLEAR_HIS_TIME_ERROR",e[e.CONVER_OUT_LIMIT_ERROR=34013]="CONVER_OUT_LIMIT_ERROR",e[e.CONVER_GET_ERROR=35021]="CONVER_GET_ERROR",e[e.GROUP_SYNC_ERROR=35001]="GROUP_SYNC_ERROR",e[e.GROUP_MATCH_ERROR=35002]="GROUP_MATCH_ERROR",e[e.READ_RECEIPT_ERROR=35003]="READ_RECEIPT_ERROR",e[e.PACKAGE_ENVIRONMENT_ERROR=35006]="PACKAGE_ENVIRONMENT_ERROR",e[e.CAN_NOT_RECONNECT=35007]="CAN_NOT_RECONNECT",e[e.SERVER_UNAVAILABLE=35008]="SERVER_UNAVAILABLE",e[e.HOSTNAME_ERROR=35009]="HOSTNAME_ERROR",e[e.HAS_OHTER_SAME_CLIENT_ON_LINE=35010]="HAS_OHTER_SAME_CLIENT_ON_LINE",e[e.METHOD_NOT_AVAILABLE=35011]="METHOD_NOT_AVAILABLE",e[e.METHOD_NOT_SUPPORT=35012]="METHOD_NOT_SUPPORT",e[e.MSG_LIMIT_ERROR=35013]="MSG_LIMIT_ERROR",e[e.METHOD_ONLY_SUPPORT_ULTRA_GROUP=35014]="METHOD_ONLY_SUPPORT_ULTRA_GROUP",e[e.UPLOAD_FILE_FAILED=35020]="UPLOAD_FILE_FAILED",e[e.CHATROOM_ID_ISNULL=36001]="CHATROOM_ID_ISNULL",e[e.CHARTOOM_JOIN_ERROR=36002]="CHARTOOM_JOIN_ERROR",e[e.CHATROOM_HISMESSAGE_ERROR=36003]="CHATROOM_HISMESSAGE_ERROR",e[e.CHATROOM_KV_NOT_FOUND=36004]="CHATROOM_KV_NOT_FOUND",e[e.BLACK_ADD_ERROR=37001]="BLACK_ADD_ERROR",e[e.BLACK_GETSTATUS_ERROR=37002]="BLACK_GETSTATUS_ERROR",e[e.BLACK_REMOVE_ERROR=37003]="BLACK_REMOVE_ERROR",e[e.DRAF_GET_ERROR=38001]="DRAF_GET_ERROR",e[e.DRAF_SAVE_ERROR=38002]="DRAF_SAVE_ERROR",e[e.DRAF_REMOVE_ERROR=38003]="DRAF_REMOVE_ERROR",e[e.SUBSCRIBE_ERROR=39001]="SUBSCRIBE_ERROR",e[e.NOT_SUPPORT=39002]="NOT_SUPPORT",e[e.QNTKN_FILETYPE_ERROR=41001]="QNTKN_FILETYPE_ERROR",e[e.QNTKN_GET_ERROR=41002]="QNTKN_GET_ERROR",e[e.COOKIE_ENABLE=51001]="COOKIE_ENABLE",e[e.GET_MESSAGE_BY_ID_ERROR=61001]="GET_MESSAGE_BY_ID_ERROR",e[e.HAVNODEVICEID=24001]="HAVNODEVICEID",e[e.DEVICEIDISHAVE=24002]="DEVICEIDISHAVE",e[e.FEILD=24009]="FEILD",e[e.VOIPISNULL=24013]="VOIPISNULL",e[e.NOENGINETYPE=24010]="NOENGINETYPE",e[e.NULLCHANNELNAME=24011]="NULLCHANNELNAME",e[e.VOIPDYANMICERROR=24012]="VOIPDYANMICERROR",e[e.NOVOIP=24014]="NOVOIP",e[e.INTERNALERRROR=24015]="INTERNALERRROR",e[e.VOIPCLOSE=24016]="VOIPCLOSE",e[e.CLOSE_BEFORE_OPEN=51001]="CLOSE_BEFORE_OPEN",e[e.ALREADY_IN_USE=51002]="ALREADY_IN_USE",e[e.INVALID_CHANNEL_NAME=51003]="INVALID_CHANNEL_NAME",e[e.VIDEO_CONTAINER_IS_NULL=51004]="VIDEO_CONTAINER_IS_NULL",e[e.DELETE_MESSAGE_ID_IS_NULL=61001]="DELETE_MESSAGE_ID_IS_NULL",e[e.CANCEL=1]="CANCEL",e[e.REJECT=2]="REJECT",e[e.HANGUP=3]="HANGUP",e[e.BUSYLINE=4]="BUSYLINE",e[e.NO_RESPONSE=5]="NO_RESPONSE",e[e.ENGINE_UN_SUPPORTED=6]="ENGINE_UN_SUPPORTED",e[e.NETWORK_ERROR=7]="NETWORK_ERROR",e[e.REMOTE_CANCEL=11]="REMOTE_CANCEL",e[e.REMOTE_REJECT=12]="REMOTE_REJECT",e[e.REMOTE_HANGUP=13]="REMOTE_HANGUP",e[e.REMOTE_BUSYLINE=14]="REMOTE_BUSYLINE",e[e.REMOTE_NO_RESPONSE=15]="REMOTE_NO_RESPONSE",e[e.REMOTE_ENGINE_UN_SUPPORTED=16]="REMOTE_ENGINE_UN_SUPPORTED",e[e.REMOTE_NETWORK_ERROR=17]="REMOTE_NETWORK_ERROR",e[e.VOIP_NOT_AVALIABLE=18]="VOIP_NOT_AVALIABLE",e[e.CHATROOM_KV_STORE_NOT_ALL_SUCCESS=23428]="CHATROOM_KV_STORE_NOT_ALL_SUCCESS",e[e.CHATROOM_KV_STORE_OUT_LIMIT=23429]="CHATROOM_KV_STORE_OUT_LIMIT";}(ye||(ye={}));var ve,Ee=ye;!function(e){e[e.CONNECTED=0]="CONNECTED",e[e.CONNECTING=1]="CONNECTING",e[e.DISCONNECTED=2]="DISCONNECTED",e[e.NETWORK_UNAVAILABLE=3]="NETWORK_UNAVAILABLE",e[e.CONNECTION_CLOSED=4]="CONNECTION_CLOSED",e[e.KICKED_OFFLINE_BY_OTHER_CLIENT=6]="KICKED_OFFLINE_BY_OTHER_CLIENT",e[e.WEBSOCKET_UNAVAILABLE=7]="WEBSOCKET_UNAVAILABLE",e[e.WEBSOCKET_ERROR=8]="WEBSOCKET_ERROR",e[e.BLOCKED=9]="BLOCKED",e[e.DOMAIN_INCORRECT=12]="DOMAIN_INCORRECT",e[e.DISCONNECT_BY_SERVER=13]="DISCONNECT_BY_SERVER",e[e.REDIRECT=14]="REDIRECT",e[e.APPKEY_IS_FAKE=20]="APPKEY_IS_FAKE",e[e.ULTRALIMIT=1101]="ULTRALIMIT",e[e.REQUEST_NAVI=201]="REQUEST_NAVI",e[e.RESPONSE_NAVI=202]="RESPONSE_NAVI",e[e.RESPONSE_NAVI_ERROR=203]="RESPONSE_NAVI_ERROR",e[e.RESPONSE_NAVI_TIMEOUT=204]="RESPONSE_NAVI_TIMEOUT";}(ve||(ve={}));var Te,Ie=ve,Ce={ACCEPTED:0,UNACCEPTABLE_PROTOCOL_VERSION:1,IDENTIFIER_REJECTED:2,SERVER_UNAVAILABLE:3,TOKEN_INCORRECT:4,NOT_AUTHORIZED:5,REDIRECT:6,PACKAGE_ERROR:7,APP_BLOCK_OR_DELETE:8,BLOCK:9,TOKEN_EXPIRE:10,DEVICE_ERROR:11,HOSTNAME_ERROR:12,HASOHTERSAMECLIENTONLINE:13,IN_OTHER_CLUSTER:15,APP_AUTH_NOT_PASS:16,OTP_USED:17,PLATFORM_ERROR:18};!function(e){e.TextMessage="RC:TxtMsg",e.VOICE="RC:VcMsg",e.HQ_VOICE="RC:HQVCMsg",e.IMAGE="RC:ImgMsg",e.GIF="RC:GIFMsg",e.RICH_CONTENT="RC:ImgTextMsg",e.LOCATION="RC:LBSMsg",e.FILE="RC:FileMsg",e.SIGHT="RC:SightMsg",e.COMBINE="RC:CombineMsg",e.CHRM_KV_NOTIFY="RC:chrmKVNotiMsg",e.LOG_COMMAND="RC:LogCmdMsg",e.EXPANSION_NOTIFY="RC:MsgExMsg",e.REFERENCE="RC:ReferenceMsg",e.RECALL="RC:RcCmd",e.READ_RECEIPT="RC:ReadNtf",e.READ_RECEIPT_REQUEST="RC:RRReqMsg",e.READ_RECEIPT_RESPONSE="RC:RRRspMsg",e.SYNC_READ_STATUS="RC:SRSMsg",e.GROUP_READ_RECEIPT_REQUEST="RC:RRMsg",e.CHATROOM_JOIN="RC:ChrmJoinNtf",e.CHATROOM_LEFT="RC:ChrmQuitNtf",e.CHATROOM_MERGE_CHANGE="RC:ChrmMemChange",e.TYPING_STATUS="RC:TypSts",e.INTERCEPT="RC:InterceptMsg";}(Te||(Te={}));var Re,Se=Te;!function(e){e[e.OPEN=1]="OPEN",e[e.CLOSE=2]="CLOSE";}(Re||(Re={}));var Ne,Oe=Re;!function(e){e[e.ALL=1]="ALL",e[e.SINGAL=2]="SINGAL";}(Ne||(Ne={}));var Me,we=Ne;!function(e){e[e.QINIU=1]="QINIU",e[e.ALI=2]="ALI",e[e.AWS=3]="AWS",e[e.STC=4]="STC";}(Me||(Me={}));var Ae,Ue=Me;!function(e){e[e.UPDATE=1]="UPDATE",e[e.DELETE=2]="DELETE";}(Ae||(Ae={}));var be,Le=Ae;!function(e){e[e.QUIT=0]="QUIT",e[e.JOIN=1]="JOIN";}(be||(be={}));var Pe,De=be;!function(e){
    /*!
        全局敏感词：命中了融云内置的全局敏感词
       */
    e[e.GLOBAL=1]="GLOBAL",
    /*!
         自定义敏感词拦截：命中了客户在融云自定义的敏感词
        */
    e[e.CUSTOM=2]="CUSTOM",
    /*!
         第三方审核拦截：命中了第三方（数美）或模板路由决定不下发的状态
        */
    e[e.THIRD_PARTY=3]="THIRD_PARTY";}(Pe||(Pe={}));var Ve,ke=Pe;!function(e){e[e.typing=0]="typing";}(Ve||(Ve={}));var xe,Be,Ge;!function(e){e[e.RTC=0]="RTC",e[e.LIVE=2]="LIVE";}(xe||(xe={})),function(e){e[e.AUDIO_AND_VIDEO=0]="AUDIO_AND_VIDEO",e[e.AUDIO=1]="AUDIO";}(Be||(Be={})),function(e){e[e.ANCHOR=1]="ANCHOR",e[e.AUDIENCE=2]="AUDIENCE";}(Ge||(Ge={}));var qe,Ke,He,Ye={"RC:VCAccept":"RC:VCAccept","RC:VCRinging":"RC:VCRinging","RC:VCSummary":"RC:VCSummary","RC:VCHangup":"RC:VCHangup","RC:VCInvite":"RC:VCInvite","RC:VCModifyMedia":"RC:VCModifyMedia","RC:VCModifyMem":"RC:VCModifyMem"};!function(e){e[e.ROOM=1]="ROOM",e[e.PERSON=2]="PERSON";}(qe||(qe={})),function(e){e[e.AnchorToViewer=1]="AnchorToViewer",e[e.ViewerToAnchor=2]="ViewerToAnchor";}(Ke||(Ke={})),function(e){e[e.KICK=0]="KICK",e[e.REFUSE=1]="REFUSE",e[e.COEXIST=2]="COEXIST";}(He||(He={}));var je="undefined"!=typeof window&&window?(window.__RCVersionInfo||(window.__RCVersionInfo={}),window.__RCVersionInfo):{};je.engine="5.2.4";var Qe,We,Je=function(){function e(){}return e.add=function(e,t){je[e]=t;},e.validEngine=function(e){var t=e.match(/\d+\.\d+\.\d+/);if(!t)return ge.warn("The validation engine version '"+e+"' is invalid!"),!1;var n=t[0].split(".").map((function(e){return e.padStart(3,"0")})).join("");return je.engine.match(/\d+\.\d+\.\d+/)[0].split(".").map((function(e){return e.padStart(3,"0")})).join("")>=n},e.getInfo=function(){return je},e}();!function(e){e[e.STRING=0]="STRING",e[e.ONLY_STRING=1]="ONLY_STRING",e[e.NUMBER=2]="NUMBER",e[e.BOOLEAN=3]="BOOLEAN",e[e.OBJECT=4]="OBJECT",e[e.ARRAY=5]="ARRAY",e[e.CALLBACK=6]="CALLBACK",e[e.CHANNEL_ID=7]="CHANNEL_ID";}(We||(We={}));var ze,Ze,Xe,$e,et,tt$1=((Qe={})[We.STRING]=ee,Qe[We.ONLY_STRING]=J,Qe[We.NUMBER]=Z,Qe[We.BOOLEAN]=function(e){return "boolean"==typeof e},Qe[We.OBJECT]=ne,Qe[We.ARRAY]=X,Qe[We.CALLBACK]=function(e){var t=!0;return ne(e)||(t=!1),(e=e||{}).onSuccess&&!ie(e.onSuccess)&&(t=!1),e.onError&&!ie(e.onError)&&(t=!1),t},Qe[We.CHANNEL_ID]=function(e){var t=!1;return J(e)&&!/_/g.test(e)&&e.length<=20&&(t=!0),t},Qe),nt=function(e){function t(t){var n=e.call(this,t)||this;return n.name="RCAssertError",n}return N(t,e),t}(Error),it=function(e,t,n,i){if(void 0===i&&(i=!1),!rt(e,t,n,i))throw new nt("'"+e+"' is invalid: "+JSON.stringify(t))},rt=function(e,t,n,i){void 0===i&&(i=!1),n=tt$1[n]||n;var r=i&&!n(t)||!i&&!(re(t)||null===t||n(t));return r&&ge.error("'"+e+"' is invalid: "+JSON.stringify(t)),!r},st=function(e){if(!ne(e)||void 0===e.low||void 0===e.high)return e;var t=e.low;return t<0&&(t+=4294967296),t=t.toString(16),parseInt(e.high.toString(16)+"00000000".replace(new RegExp("0{"+t.length+"}$"),t),16)},ot=function(e,t){var n=Math.floor(1e3*Math.random()%1e4),i=K(),r=function(e){e=e||"-";var t=new Date;return ""+t.getFullYear()+e+(t.getMonth()+1)+e+t.getDate()}(),s=(new Date).getTime(),o="";if(t){var a=t.split(".");o="."+a[a.length-1];}return e+"__RC-"+r+"_"+n+"_"+s+i+o},ut=function(e,t){void 0===e&&(e={}),void 0===t&&(t={});var n=e.threadId,i=e.apnsCollapseId,r=e.category,s=e.richMediaUri,o=t.channelIdMi,a=t.channelIdHW,u=t.channelIdOPPO,c=t.typeVivo,h=t.googleConfig,l={};l["thread-id"]=n||"",l["apns-collapse-id"]=i||"",l.category=r||"",l.richMediaUri=s||"";var d={};d.collapse_key=null==h?void 0:h.collapseKey,d.imageUrl=null==h?void 0:h.imageUrl;var f=null==h?void 0:h.priority;f&&!["high","normal"].includes(f)&&(f="normal"),d.priority=f;var p=[{HW:{channelId:a||""}},{MI:{channelId:o||""}},{OPPO:{channelId:u||""}},{VIVO:{classification:c||""}},{APNS:l},{FCM:d}];return JSON.stringify(p)},ct=function(e,t){var n={},i={notificationId:t||""};if(!e)return {iOSConfig:n,androidConfig:i};try{var r=JSON.parse(e);null==r||r.forEach((function(e){var t,r,s,o,a=Object.keys(e);if(0!==a.length){var u=a[0];switch(u){case"HW":return void(i.channelIdHW=null===(t=e[u])||void 0===t?void 0:t.channelId);case"MI":return void(i.channelIdMi=null===(r=e[u])||void 0===r?void 0:r.channelId);case"OPPO":return void(i.channelIdOPPO=null===(s=e[u])||void 0===s?void 0:s.channelId);case"VIVO":return void(i.typeVivo=null===(o=e[u])||void 0===o?void 0:o.classification);case"APNS":return n.threadId=e[u]["thread-id"],n.apnsCollapseId=e[u]["apns-collapse-id"],n.category=e[u].category,void(n.richMediaUri=e[u].richMediaUri);case"FCM":i.googleConfig={collapseKey:e[u].collapse_key||"",imageUrl:e[u].imageUrl||"",priority:e[u].priority||""};}}}));}catch(t){ge.error("Wrong format for pushConfigs field! content: "+e);}return {iOSConfig:n,androidConfig:i}},ht=function(e){var t=/^[A-Za-z0-9_=+-]+$/.test(e),n=e.length;return t&&(n<=128&&n>=1)},lt=function(e){var t=e.length;return t<=4096&&t>=1},dt=function(e,t,n){t=t||function(){};var i=(n=n||{}).isReverse;ne(e)&&function(){for(var n in e)t(e[n],n,e);}(),(X(e)||J(e))&&function(){if(i)for(var n=e.length-1;n>=0;n--)t(e[n],n);else for(var r=0,s=e.length;r<s;r++)t(e[r],r);}();},ft=function(e,t){return dt(e,(function(n,i){e[i]=t(n,i);})),e},pt=function(e,t){if(e.indexOf)return e.indexOf(t);var n=-1;return dt(e,(function(e,i){t===e&&(n=i);})),n},_t=function(e,t){var n=[];return dt(e,(function(e){n.push(e);})),-1!==pt(n,t)},yt=function(e){return JSON.parse(JSON.stringify(e))},mt=function(){return "undefined"!=typeof RCCppEngine},vt=function(e){if("browser"!==e.tag)return {type:e.tag,version:"UnKonw"};var t,n,i=navigator.userAgent,r={IE:/rv:([\d.]+)\) like Gecko|MSIE ([\d.]+)/,Edge:/Edge\/([\d.]+)/,Firefox:/Firefox\/([\d.]+)/,Opera:/(?:OPERA|OPR).([\d.]+)/,WeChat:/MicroMessenger\/([\d.]+)/,QQBrowser:/QQBrowser\/([\d.]+)/,Chrome:/Chrome\/([\d.]+)/,Safari:/Version\/([\d.]+).*Safari/,iOSChrome:/Mobile\/([\d.]+).*Safari/};for(var s in r)if(r.hasOwnProperty(s)){var o=i.match(r[s]);if(o){n=s,t=o[1]||o[2];break}}return {type:n||"UnKonw",version:t||"UnKonw"}},Et=function(e){switch(e){case Ce.SERVER_UNAVAILABLE:return Ee.SERVER_UNAVAILABLE;case Ce.TOKEN_INCORRECT:return Ee.RC_CONN_USER_OR_PASSWD_ERROR;case Ce.REDIRECT:return Ee.RC_CONN_REDIRECTED;case Ce.APP_BLOCK_OR_DELETE:return Ee.RC_CONN_APP_BLOCKED_OR_DELETED;case Ce.BLOCK:return Ee.RC_CONN_USER_BLOCKED;case Ce.TOKEN_EXPIRE:return Ee.RC_CONN_USER_OR_PASSWD_ERROR;case Ce.HOSTNAME_ERROR:return Ee.HOSTNAME_ERROR;case Ce.HASOHTERSAMECLIENTONLINE:return Ee.HAS_OHTER_SAME_CLIENT_ON_LINE;case Ce.APP_AUTH_NOT_PASS:return Ee.RC_APP_AUTH_NOT_PASS;case Ce.OTP_USED:return Ee.RC_OTP_USED;case Ce.PLATFORM_ERROR:return Ee.RC_PLATFORM_ERROR;default:return Ee.RC_NET_UNAVAILABLE}},Tt=function(e){var t;if("object"==typeof e)if(Array.isArray(e))for(var n in t=[],e)t.push(Tt(e[n]));else for(var n in t={},e)t[n]=Tt(e[n]);else t=e;return t},It=function(e){var t;try{t=Tt(e);}catch(n){ge.error("clone err:",n),t=JSON.parse(JSON.stringify(e));}return t},Ct=function(e){var t={},n=JSON.parse(e);return dt(n,(function(e,n){t[n]=e.v;})),t},Rt={_delayTime:0,setTime:function(e){var t=(new Date).getTime();Rt._delayTime=t-e;},getTime:function(){var e=Rt._delayTime;return (new Date).getTime()-e}},St=function(e,t){var n=0;return e.isAutoDelete&&(n|=1),e.isOverwrite&&(n|=2),2===t&&(n|=4),n};!function(e){e[e.AT_MOST_ONCE=0]="AT_MOST_ONCE",e[e.AT_LEAST_ONCE=1]="AT_LEAST_ONCE",e[e.EXACTLY_ONCE=2]="EXACTLY_ONCE",e[e.DEFAULT=3]="DEFAULT";}(ze||(ze={})),function(e){e[e.SYMMETRIC=0]="SYMMETRIC",e[e.CONNECT=1]="CONNECT",e[e.CONN_ACK=2]="CONN_ACK",e[e.PUBLISH=3]="PUBLISH",e[e.PUB_ACK=4]="PUB_ACK",e[e.QUERY=5]="QUERY",e[e.QUERY_ACK=6]="QUERY_ACK",e[e.QUERY_CONFIRM=7]="QUERY_CONFIRM",e[e.SUBSCRIBE=8]="SUBSCRIBE",e[e.SUB_ACK=9]="SUB_ACK",e[e.UNSUBSCRIBE=10]="UNSUBSCRIBE",e[e.UNSUB_ACK=11]="UNSUB_ACK",e[e.PING_REQ=12]="PING_REQ",e[e.PING_RESP=13]="PING_RESP",e[e.DISCONNECT=14]="DISCONNECT",e[e.RESERVER2=15]="RESERVER2";}(Ze||(Ze={})),function(e){e.CONN_ACK="ConnAckMessage",e.DISCONNECT="DisconnectMessage",e.PING_REQ="PingReqMessage",e.PING_RESP="PingRespMessage",e.PUBLISH="PublishMessage",e.PUB_ACK="PubAckMessage",e.QUERY="QueryMessage",e.QUERY_CON="QueryConMessage",e.QUERY_ACK="QueryAckMessage";}(Xe||(Xe={})),function(e){e.PUB="pub",e.QUERY="qry";}($e||($e={})),function(e){e[e.V4=4]="V4",e[e.V3=3]="V3";}(et||(et={}));var Nt,Ot=function(){function e(e,t,n,i){void 0===t&&(t=!1),void 0===n&&(n=ze.AT_LEAST_ONCE),void 0===i&&(i=!1),this._retain=!1,this.qos=ze.AT_LEAST_ONCE,this._dup=!1,this.syncMsg=!1;var r=e>0;e&&r&&1===arguments.length?(this._retain=(1&e)>0,this.qos=(6&e)>>1,this._dup=(8&e)>0,this.type=e>>4&15,this.syncMsg=8==(8&e)):(this.type=e,this._retain=t,this.qos=n,this._dup=i);}return e.prototype.encode=function(){var e=this.type<<4;return e|=this._retain?1:0,e|=this.qos<<1,e|=this._dup?8:0},e}(),Mt=function(){function e(){}return e.writeUTF=function(e,t){var n=[],i=0;if(J(e))for(var r=0,s=e.length;r<s;r++){var o=e.charCodeAt(r);o>=0&&o<=127?(i+=1,n.push(o)):o>=128&&o<=2047?(i+=2,n.push(192|31&o>>6),n.push(128|63&o)):o>=2048&&o<=65535&&(i+=3,n.push(224|15&o>>12),n.push(128|63&o>>6),n.push(128|63&o));}for(r=0,s=n.length;r<s;r++)n[r]>255&&(n[r]&=255);return t?n:i<=255?[0,i].concat(n):[i>>8,255&i].concat(n)},e.readUTF=function(e){for(var t,n,i=[],r=-1,s=e,o="";++r<s.length;){var a=Number(s[r]);if(a===(127&a)||(240==(240&a)?a=(a=(a=(a^=240)<<6|128^s[++r])<<6|128^s[++r])<<6|128^s[++r]:224==(224&a)?a=(a=(a^=224)<<6|128^s[++r])<<6|128^s[++r]:192==(192&a)&&(a=(a^=192)<<6|128^s[++r])),!isFinite(a)||a<0||a>1114111||Math.floor(a)!==a)throw RangeError("Invalid code point: "+a);a<=65535?i.push(a):(t=(a-=65536)>>10|55296,n=a%1024|56320,i.push(t,n)),(r+1===s.length||i.length>16384)&&(o+=String.fromCharCode.apply(null,i),i.length=0);}return o},e}(),wt=function(){function e(e){this._position=0,this._poolLen=0,this._pool=e,this._poolLen=e.length;}return e.prototype.check=function(){return this._position>=this._pool.length},e.prototype.read2Byte=function(){var e=this;if(e.check())return -1;for(var t="",n=0;n<2;n++){var i=e._pool[e._position++].toString(16);1===i.length&&(i="0"+i),t+=i.toString();}return parseInt(t,16)},e.prototype.readInt=function(){var e=this;if(e.check())return -1;for(var t="",n=0;n<4;n++){var i=e._pool[e._position++].toString(16);1===i.length&&(i="0"+i),t+=i.toString();}return parseInt(t,16)},e.prototype.readLong=function(){var e=this;if(e.check())return -1;for(var t="",n=0;n<8;n++){var i=e._pool[e._position++].toString(16);1===i.length&&(i="0"+i),t+=i;}return parseInt(t,16)},e.prototype.readByte=function(){if(this.check())return -1;var e=this._pool[this._position++];return e>255&&(e&=255),e},e.prototype.readUTF=function(){if(this.check())return "";var e=this.readByte()<<8|this.readByte(),t=this._pool.subarray(this._position,this._position+=e);return Mt.readUTF(t)},e.prototype.readAll=function(){return this._pool.subarray(this._position,this._poolLen)},e}(),At=function(){function e(){this._pool=[],this._position=0,this._writen=0;}return e.prototype.write=function(e){return -1!==Object.prototype.toString.call(e).indexOf("Array")?this._pool=this._pool.concat(e):e>=0&&(e>255&&(e&=255),this._pool.push(e),this._writen++),e},e.prototype.writeArr=function(e){return this._pool=this._pool.concat(e),e},e.prototype.writeUTF=function(e){var t=Mt.writeUTF(e);this._pool=this._pool.concat(t),this._writen+=t.length;},e.prototype.getBytesArray=function(){return this._pool},e}(),Ut="UpStreamMessage",bt="PushExtra",Lt="DownStreamMessage",Pt="DownStreamMessages",Dt="SessionsAttQryInput",Vt="SessionsAttOutput",kt="SyncRequestMsg",xt="ChrmPullMsg",Bt="NotifyMsg",Gt="HistoryMsgInput",Ft="HistoryMsgOuput",qt="RelationQryInput",Kt="RelationsOutput",Ht="DeleteSessionsInput",Yt="SessionInfo",jt="DeleteSessionsOutput",Qt="RelationsInput",Wt="DeleteMsgInput",Jt="CleanHisMsgInput",zt="SessionMsgReadInput",Zt="ChrmInput",Xt="ChrmOutput",$t="QueryChatRoomInfoInput",en="QueryChatRoomInfoOutput",tn="RtcInput",nn="RtcUserListOutput",rn="SetUserStatusInput",sn="RtcSetDataInput",on="RtcUserSetDataInput",an="RtcDataInput",un="RtcSetOutDataInput",cn="MCFollowInput",hn="RtcTokenOutput",ln="RtcQryOutput",dn="RtcQryUserOutDataInput",fn="RtcUserOutDataOutput",pn="RtcQueryListInput",gn="RtcRoomInfoOutput",_n="RtcValueInfo",yn="RtcKeyDeleteInput",mn="GetQNupTokenInput",vn="GetQNupTokenOutput",En="GetQNdownloadUrlInput",Tn="GetDownloadUrlInput",In="GetQNdownloadUrlOutput",Cn="GetDownloadUrlOutput",Rn="ChrmKVEntity",Sn="SetChrmKV",Nn="SetChrmKVS",On="DeleteChrmKVS",Mn="ChrmKVOutput",wn="ChrmKVSOutput",An="ChrmKVSVersionEntity",Un="ChrmKVSOutputEntity",bn="QueryChrmKV",Ln="SetUserSettingInput",Pn="SetUserSettingOutput",Dn="PullUserSettingInput",Vn="PullUserSettingOutput",kn="UserSettingNotification",xn="SessionReq",Bn="SessionStates",Gn="SessionState",Fn="SessionStateItem",qn="SessionStateModifyReq",Kn="SessionStateModifyResp",Hn="GrpReadReceiptMsg",Yn="GrpReadReceiptQryReq",jn="GrpReadReceiptQryResp",Qn="GrpMsgReadUser",Wn="SessionTagAddInput",Jn="SessionTagItem",zn="SessionTagDelInput",Zn="SessionDisTagReq",Xn="ReportSDKInput",$n="ReportSDKOutput",ei="UltraGrpPullSes",ti="UltraGrpPullMsg",ni="MsgChangeReq",ii="QueryMsgChange",ri="MsgChange",si="MsgChangeList",oi="MsgQuery",ai="MessageQueryInfo",ui="MsgQueryAck",ci="OperateStatus",hi="OperateStatusNotify",li="OperateInfo",di="OperateSummary",fi="RtcNotifyMsg",pi="RtcPullKV",gi="RtcKVOutput",_i="RtcQueryUserJoinedInput",yi="RtcQueryUserJoinedOutput",mi="RtcViewerJoinedOutput",vi="RtcInviteInput",Ei="RtcCancelInviteInput",Ti="RtcInviteAnswerInput",Ii="RtcEndInviteInput",Ci="SetRtcRoomIdInput",Ri="SetRtcRoomIdOutput",Si=((Nt={})[Ut]=["sessionId","classname","content","pushText","userId","configFlag","appData","extraContent","pushExt","busChannel"],Nt[Pt]=["list","syncTime","finished","broadcastSyncTime"],Nt[Lt]=["fromUserId","type","groupId","classname","content","dataTime","status","msgId","extraContent","pushContent","configFlag","pushExt","busChannel"],Nt[bt]=["title","templateIdNoUse","pushId","pushConfigs","templateId"],Nt[Dt]=["nothing"],Nt[Vt]=["inboxTime","sendboxTime","totalUnreadCount"],Nt[kt]=["syncTime","ispolling","isweb","isPullSend","isKeeping","sendBoxSyncTime","broadcastSyncTime"],Nt[xt]=["syncTime","count"],Nt[Bt]=["type","time","chrmId"],Nt[Gt]=["targetId","time","count","order","busChannel"],Nt[Ft]=["list","syncTime","hasMsg"],Nt[qt]=["type","count","startTime","order"],Nt[Kt]=["info","isFinished"],Nt[Ht]=["sessions"],Nt[Yt]=["type","channelId","busChannel"],Nt[jt]=["nothing"],Nt[Qt]=["type","msg","count","busChannel","startTime","endTime"],Nt[Wt]=["type","conversationId","msgs","busChannel"],Nt[Jt]=["targetId","dataTime","conversationType","busChannel"],Nt[zt]=["type","msgTime","channelId","busChannel"],Nt[Zt]=["nothing"],Nt[Xt]=["nothing","sessionId","joinTime"],Nt[$t]=["count","order"],Nt[en]=["userTotalNums","userInfos"],Nt[mn]=["type","key","httpMethod","queryString"],Nt[En]=["type","key","fileName"],Nt[Tn]=["type","key","fileName"],Nt[vn]=["deadline","token","bosToken","bosDate","path","osskeyId","ossPolicy","ossSign","ossBucketName"],Nt[In]=["downloadUrl"],Nt[Cn]=["downloadUrl"],Nt[Rn]=["key","value","status","timestamp","uid","version"],Nt[Sn]=["entry","bNotify","notification","type"],Nt[Nn]=["entry","bNotify","notification","type"],Nt[On]=["entry","bNotify","notification","type"],Nt[Mn]=["entries","bFullUpdate","syncTime"],Nt[wn]=["timestamp","errorKeys","keysVersion"],Nt[An]=["version","key"],Nt[Un]=["key","errorCode"],Nt[bn]=["timestamp"],Nt[Ln]=["version","value"],Nt[Pn]=["version","reserve"],Nt[Dn]=["version","reserve"],Nt[Vn]=["items","version"],Nt.UserSettingItem=["targetId","type","key","value","version","status","tags"],Nt[xn]=["time"],Nt[Bn]=["version","state"],Nt[Gn]=["type","channelId","time","stateItem","busChannel"],Nt[Fn]=["sessionStateType","value","tags"],Nt[qn]=["version","state"],Nt[Kn]=["version"],Nt[Hn]=["msgId","busChannel"],Nt[Yn]=["msgId","busChannel"],Nt[jn]=["totalMemberNum","list"],Nt[Qn]=["readTime","userId"],Nt[Wn]=["version","tags"],Nt[Jn]=["tagId","name","createdTime","isTop"],Nt[zn]=["version","tags"],Nt[Zn]=["tagId"],Nt[kn]=["version","reserve"],Nt[Xn]=["sdkInfo"],Nt[$n]=["nothing"],Nt[ei]=["syncTime","isEraseMsgContent"],Nt[ti]=["syncTime"],Nt[ni]=["fromUserId","targetId","type","busChannel","msgUID","msgTime","content"],Nt[ii]=["syncTime"],Nt[si]=["list","syncTime","hasNext"],Nt[ri]=["targetId","type","time","changeType","msgUID","msgTime","busChannel","isAdmin","isDel","operatorId"],Nt[oi]=["targetId","type","query"],Nt[ai]=["msgTime","msgUID","busChannel"],Nt[ui]=["list"],Nt[ci]=["targetId","type","opType","busChannel"],Nt[hi]=["type","notifyType","info","summary"],Nt[li]=["targetId","busChannel","userId","opType","optime"],Nt[di]=["targetId","busChannel","count","opType"],Nt[tn]=["roomType","broadcastType","extraInnerData","needSysChatroom","identityChangeType","joinType"],Nt[nn]=["users","token","sessionId","roomInfo"],Nt[rn]=["status"],Nt[sn]=["interior","target","key","value","objectName","content"],Nt[on]=["valueInfo","objectName","content"],Nt[an]=["interior","target","key","objectName","content"],Nt[un]=["target","valueInfo","objectName","content"],Nt[cn]=["state"],Nt[hn]=["rtcToken"],Nt[ln]=["outInfo"],Nt[dn]=["userId"],Nt[fn]=["user"],Nt[pn]=["order"],Nt[gn]=["roomId","roomData","userCount","list"],Nt[_n]=["key","value"],Nt[yn]=["key"],Nt[fi]=["type","time","roomId"],Nt[pi]=["timestamp","roomId"],Nt[gi]=["entries","bFullUpdate","syncTime"],Nt[_i]=["userId"],Nt[yi]=["info"],Nt[vi]=["invitedUserId","timeoutTime","invitedRoomId","inviteInfo","inviteSessionId"],Nt[Ei]=["invitedUserId","invitedRoomId","inviteInfo","inviteSessionId"],Nt[Ti]=["inviteUserID","answerCode","inviteRoomId","inviteSessionId","content","key","value"],Nt[Ii]=["inviteRoomId","inviteSessionId","inviteContent","inviteRoomKeys"],Nt[Ci]=["rtcRoomId"],Nt[Ri]=["nothing"],Nt),Ni={},Oi=function(e){var t=Si[e];Ni[e]=function(){for(var e={},n={getArrayData:function(){return e}},i=function(i){var r=t[i],s="set"+D(r,0,1);n[s]=function(t){e[r]=t;};},r=0;r<t.length;r++)i(r);return n},Ni[e].decode=function(e){var t={};J(e)&&(e=JSON.parse(e));var n=function(n){var i="get"+D(n,0,1);t[n]=e[n],t[i]=function(){return e[n]};};for(var i in e)n(i);return t};};for(var Mi in Si)Oi(Mi);Ni.getModule=function(e){return Ni[e]()};var wi="\npackage Modules;\nmessage probuf {\n  message "+rn+"\n  {\n    optional int32 status=1;\n  }\n\n  message SetUserStatusOutput\n  {\n    optional int32 nothing=1;\n  }\n\n  message GetUserStatusInput\n  {\n    optional int32 nothing=1;\n  }\n\n  message GetUserStatusOutput\n  {\n    optional string status=1;\n    optional string subUserId=2;\n  }\n\n  message SubUserStatusInput\n  {\n    repeated string userid =1;\n  }\n\n  message SubUserStatusOutput\n  {\n    optional int32 nothing=1;\n  }\n  message VoipDynamicInput\n  {\n    required int32  engineType = 1;\n    required string channelName = 2;\n    optional string channelExtra = 3;\n  }\n\n  message VoipDynamicOutput\n  {\n      required string dynamicKey=1;\n  }\n  message "+Bt+" {\n    required int32 type = 1;\n    optional int64 time = 2;\n    optional string chrmId=3;\n  }\n  message "+kt+" {\n    required int64 syncTime = 1;\n    required bool ispolling = 2;\n    optional bool isweb=3;\n    optional bool isPullSend=4;\n    optional bool isKeeping=5;\n    optional int64 sendBoxSyncTime=6;\n    optional int64 broadcastSyncTime=7;\n  }\n  message "+Ut+" {\n    required int32 sessionId = 1;\n    required string classname = 2;\n    required bytes content = 3;\n    optional string pushText = 4;\n    optional string appData = 5;\n    repeated string userId = 6;\n    optional int64 delMsgTime = 7;\n    optional string delMsgId = 8;\n    optional int32 configFlag = 9;\n    optional int64 clientUniqueId = 10;\n    optional string extraContent = 11;\n    optional PushExtra pushExt = 12;\n    optional string busChannel = 13; // 该消息所属会话的业务标识\n  }\n  message "+bt+" {\n    optional string title = 1;\n    optional int32  templateIdNoUse= 2;\n    optional string pushId = 3;\n    optional string pushConfigs = 4;\n    optional string templateId = 5;\n  }\n  message "+Pt+" {\n    repeated DownStreamMessage list = 1;\n    required int64 syncTime = 2;\n    optional bool finished = 3;\n    optional int64 broadcastSyncTime = 4;\n  }\n  message "+Lt+" {\n    required string fromUserId = 1;\n    required ChannelType type = 2;\n    optional string groupId = 3;\n    required string classname = 4;\n    required bytes content = 5;\n    required int64 dataTime = 6;\n    required int64 status = 7;\n    optional int64 extra = 8;\n    optional string msgId = 9;\n    optional int32 direction = 10;\n    optional int32 plantform =11;\n    optional int32 isRemoved = 12;\n    optional string source = 13;\n    optional int64 clientUniqueId = 14;\n    optional string extraContent = 15;\n    optional string pushContent = 16;\n    optional int32 configFlag = 17;\n    optional PushExtra pushExt = 18;\n    optional string busChannel = 19; // 该消息所属会话的业务标识，限制20字符以内\n    optional int64 extStatus = 20; // 消息的扩展标记 第0位,表示送达状态: 0x01 表示已送达;断档: 0x02 表示是否需要执行断档策略; 消息修改: 0x04 拉取历史消息时表示该消息是否修改过\n  }\n  enum ChannelType {\n    PERSON = 1;\n    PERSONS = 2;\n    GROUP = 3;\n    TEMPGROUP = 4;\n    CUSTOMERSERVICE = 5;\n    NOTIFY = 6;\n    MC=7;\n    MP=8;\n    ULTRAGROUP = 10;\n  }\n  message CreateDiscussionInput {\n    optional string name = 1;\n  }\n  message CreateDiscussionOutput {\n    required string id = 1;\n  }\n  message ChannelInvitationInput {\n    repeated string users = 1;\n  }\n  message LeaveChannelInput {\n    required int32 nothing = 1;\n  }\n  message ChannelEvictionInput {\n    required string user = 1;\n  }\n  message RenameChannelInput {\n    required string name = 1;\n  }\n  message ChannelInfoInput {\n    required int32 nothing = 1;\n  }\n  message ChannelInfoOutput {\n    required ChannelType type = 1;\n    required string channelId = 2;\n    required string channelName = 3;\n    required string adminUserId = 4;\n    repeated string firstTenUserIds = 5;\n    required int32 openStatus = 6;\n  }\n  message ChannelInfosInput {\n    required int32 page = 1;\n    optional int32 number = 2;\n  }\n  message ChannelInfosOutput {\n    repeated ChannelInfoOutput channels = 1;\n    required int32 total = 2;\n  }\n  message MemberInfo {\n    required string userId = 1;\n    required string userName = 2;\n    required string userPortrait = 3;\n    required string extension = 4;\n  }\n  message GroupMembersInput {\n    required int32 page = 1;\n    optional int32 number = 2;\n  }\n  message GroupMembersOutput {\n    repeated MemberInfo members = 1;\n    required int32 total = 2;\n  }\n  message GetUserInfoInput {\n    required int32 nothing = 1;\n  }\n  message GetUserInfoOutput {\n    required string userId = 1;\n    required string userName = 2;\n    required string userPortrait = 3;\n  }\n  message GetSessionIdInput {\n    required int32 nothing = 1;\n  }\n  message GetSessionIdOutput {\n    required int32 sessionId = 1;\n  }\n  enum FileType {\n    image = "+W.IMAGE+";\n    audio = "+W.AUDIO+";\n    video = "+W.VIDEO+";\n    file = "+W.FILE+";\n  }\n  message "+mn+" {\n    required FileType type = 1;\n    optional string key = 2;\n    optional string httpMethod = 3;\n    optional string queryString = 4;\n  }\n  message "+En+" {\n    required FileType type = 1;\n    required string key = 2;\n    optional string  fileName = 3;\n  }\n  message "+Tn+" {\n    required FileType type = 1;\n    required string key = 2;\n    optional string fileName = 3;\n   }\n  message "+vn+" {\n    required int64 deadline = 1;\n    required string token = 2;\n    optional string bosToken = 3;\n    optional string bosDate = 4;\n    optional string path = 5;\n    optional string osskeyId = 6;\n    optional string ossPolicy = 7;\n    optional string ossSign = 8;\n    optional string ossBucketName = 9;\n    optional string s3Credential = 10;\n    optional string s3Algorithm = 11;\n    optional string s3Date = 12;\n    optional string s3Policy = 13;\n    optional string s3Signature = 14;\n    optional string s3BucketName = 15;\n    optional string stcAuthorization = 16;\n    optional string stcContentSha256 = 17;\n    optional string stcDate = 18;\n    optional string stcBucketName = 19;\n  }\n  message "+In+" {\n    required string downloadUrl = 1;\n  }\n  message "+Cn+" {\n    required string downloadUrl = 1;\n  }\n  message Add2BlackListInput {\n    required string userId = 1;\n  }\n  message RemoveFromBlackListInput {\n    required string userId = 1;\n  }\n  message QueryBlackListInput {\n    required int32 nothing = 1;\n  }\n  message QueryBlackListOutput {\n    repeated string userIds = 1;\n  }\n  message BlackListStatusInput {\n    required string userId = 1;\n  }\n  message BlockPushInput {\n    required string blockeeId = 1;\n  }\n  message ModifyPermissionInput {\n    required int32 openStatus = 1;\n  }\n  message GroupInput {\n    repeated GroupInfo groupInfo = 1;\n  }\n  message GroupOutput {\n    required int32 nothing = 1;\n  }\n  message GroupInfo {\n    required string id = 1;\n    required string name = 2;\n  }\n  message GroupHashInput {\n    required string userId = 1;\n    required string groupHashCode = 2;\n  }\n  message GroupHashOutput {\n    required GroupHashType result = 1;\n  }\n  enum GroupHashType {\n    group_success = 0x00;\n    group_failure = 0x01;\n  }\n  message "+Zt+" {\n    required int32 nothing = 1;\n  }\n  message "+Xt+" {\n    required int32 nothing = 1;\n    optional string sessionId = 2;\n    optional int64 joinTime = 3;\n  }\n  message "+xt+" {\n    required int64 syncTime = 1;\n    required int32 count = 2;\n  }\n\n  message ChrmPullMsgNew\n  {\n    required int32 count = 1;\n    required int64 syncTime = 2;\n    optional string chrmId=3;\n  }\n  message "+qt+"\n  {\n    optional ChannelType type = 1;\n    optional int32 count = 2;\n    optional int64 startTime = 3;\n    optional int32 order = 4;\n  }\n  message "+Qt+"\n  {\n    required ChannelType type = 1;\n    optional DownStreamMessage msg =2;\n    optional int32 count = 3;\n    repeated string busChannel = 4;\n    optional int64 startTime = 5;\n    optional int64 endTime = 6;\n  }\n  message "+Kt+"\n  {\n    repeated RelationInfo info = 1;\n    optional bool isFinished = 2;//是否结束\n  }\n  message RelationInfo\n  {\n    required ChannelType type = 1;\n    required string userId = 2;\n    optional DownStreamMessage msg =3;\n    optional int64 readMsgTime= 4;\n    optional int64 unreadCount= 5;\n    optional string busChannel = 6;//该消息所属会话的业务标识\n    optional int64 versionTime = 7;//会话项变更时间戳，注意:非排序时间戳\n    optional int64 remindCount = 8;//被@的未读数\n  }\n  message RelationInfoReadTime\n  {\n    required ChannelType type = 1;\n    required int64 readMsgTime= 2;\n    required string targetId = 3;\n  }\n  message "+Jt+"\n  {\n      required string targetId = 1;\n      required int64 dataTime = 2;\n      optional int32 conversationType= 3;\n      optional string busChannel = 4; //该消息所属会话的业务标识，限制20字符以内\n  }\n  message HistoryMessageInput\n  {\n    required string targetId = 1;\n    required int64 dataTime =2;\n    required int32 size  = 3;\n  }\n\n  message HistoryMessagesOuput\n  {\n    repeated DownStreamMessage list = 1;\n    required int64 syncTime = 2;\n    required int32 hasMsg = 3;\n  }\n  message "+$t+"\n  {\n    required int32 count= 1;\n    optional int32 order= 2;\n  }\n\n  message "+en+"\n  {\n    optional int32 userTotalNums = 1;\n    repeated ChrmMember userInfos = 2;\n  }\n  message ChrmMember\n  {\n    required int64 time = 1;\n    required string id = 2;\n  }\n  message MPFollowInput\n  {\n    required string id = 1;\n  }\n\n  message MPFollowOutput\n  {\n    required int32 nothing = 1;\n    optional MpInfo info =2;\n  }\n\n  message "+cn+"\n  {\n    required string state = 1;\n  }\n\n  message MCFollowOutput\n  {\n    required int32 nothing = 1;\n    optional MpInfo info =2;\n  }\n\n  message MpInfo\n  {\n    required string mpid=1;\n    required string name = 2;\n    required string type = 3;\n    required int64 time=4;\n    optional string portraitUrl=5;\n    optional string extra =6;\n  }\n\n  message SearchMpInput\n  {\n    required int32 type=1;\n    required string id=2;\n  }\n\n  message SearchMpOutput\n  {\n    required int32 nothing=1;\n    repeated MpInfo info = 2;\n  }\n\n  message PullMpInput\n  {\n    required int64 time=1;\n    required string mpid=2;\n  }\n\n  message PullMpOutput\n  {\n    required int32 status=1;\n    repeated MpInfo info = 2;\n  }\n  message "+Gt+"\n  {\n    optional string targetId = 1;\n    optional int64 time = 2;\n    optional int32 count  = 3;\n    optional int32 order = 4;\n    optional string busChannel = 5; //该消息所属会话的业务标识，限制20字符以内\n  }\n\n  message "+Ft+"\n  {\n    repeated DownStreamMessage list=1;\n    required int64 syncTime=2;\n    required int32 hasMsg=3;\n  }\n  message "+pn+"{\n    optional int32 order=1;\n  }\n\n  message "+yn+"{\n    repeated string key=1;\n  }\n\n  message "+_n+"{\n    required string key=1;\n    required string value=2;\n  }\n\n  message RtcUserInfo{\n    required string userId=1;\n    repeated "+_n+" userData=2; //用户资源信息\n  }\n\n  message "+nn+"{\n    repeated RtcUserInfo users=1;\n    optional string token=2;\n    optional string sessionId=3;\n    repeated RtcValueInfo roomInfo = 4; //房间key value\n    repeated RtcKVEntity entries = 5;//直播KV属性对象集合\n    optional int64 syncTime = 6;//所有属性的最大时间戳（下次拉取KV时用）。\n    optional int32 offlineKickTime = 7;//server超时踢人时间，默认60s\n  }\n  message RtcRoomInfoOutput{\n    optional string roomId = 1;\n    repeated "+_n+" roomData = 2;\n    optional int32 userCount = 3;\n    repeated RtcUserInfo list=4;\n  }\n  message "+tn+"{\n    required int32 roomType=1;\n    optional int32 broadcastType=2;\n    optional RtcValueInfo extraInnerData = 3;\n    optional bool needSysChatroom = 4; //是否需要同步聊天室\n    optional IdentityChangeType identityChangeType = 5; //身份变更类型\n    optional JoinType joinType = 6; // 加入房间类型\n    repeated "+_n+" innerDatas = 7; //用户内部inner数据，角色或者连麦信息等\n    repeated "+_n+" outerDatas = 8; //用户内部outer数据，自定义数据结构RtcInput。\n  }\n  enum JoinType {\n    KICK = 0; //踢前一个设备\n    REFUSE = 1; //当前加入拒绝\n    COEXIST = 2; //两个设备共存\n  }\n  message RtcQryInput{\n    required bool isInterior=1;\n    required targetType target=2;\n    repeated string key=3;\n  }\n  message "+ln+"{\n    repeated "+_n+" outInfo=1;\n  }\n  message RtcDelDataInput{\n    repeated string key=1;\n    required bool isInterior=2;\n    required targetType target=3;\n  }\n  message "+an+"{\n    required bool interior=1;\n    required targetType target=2;\n    repeated string key=3;\n    optional string objectName=4;\n    optional string content=5;\n  }\n  message "+sn+"{\n    required bool interior=1;\n    required targetType target=2;\n    required string key=3;\n    required string value=4;\n    optional string objectName=5;\n    optional string content=6;\n  }\n  message "+on+" {\n    repeated "+_n+" valueInfo = 1;\n    required string objectName = 2;\n    repeated "+_n+" content = 3;\n  }\n  message RtcOutput\n  {\n    optional int32 nothing=1;\n  }\n  message "+hn+"{\n    required string rtcToken=1;\n  }\n  enum targetType {\n    ROOM =1 ;\n    PERSON = 2;\n  }\n  message "+un+"{\n    required targetType target=1;\n    repeated "+_n+" valueInfo=2;\n    optional string objectName=3;\n    optional string content=4;\n  }\n  message "+dn+"{\n    repeated string userId = 1;\n  }\n  message "+fn+"{\n    repeated RtcUserInfo user = 1;\n  }\n  message "+Dt+"{\n    required int32 nothing = 1;\n  }\n  message "+Vt+"{\n    required int64 inboxTime = 1;\n    required int64 sendboxTime = 2;\n    required int64 totalUnreadCount = 3;\n  }\n  message "+zt+"\n  {\n    required ChannelType type = 1;\n    required int64 msgTime = 2;\n    required string channelId = 3;\n    optional string busChannel = 4;//该消息所属会话的业务标识\n  }\n  message SessionMsgReadOutput\n  {\n    optional int32 nothing=1;\n  }\n  message "+Ht+"\n  {\n    repeated SessionInfo sessions = 1;\n  }\n  message "+Yt+"\n  {\n    required ChannelType type = 1;\n    required string channelId = 2;\n    optional string busChannel = 3;//所属会话业务标识\n  }\n  message "+jt+"\n  {\n    optional int32 nothing=1;\n  }\n  message "+Wt+"\n  {\n    optional ChannelType type = 1;\n    optional string conversationId = 2;\n    repeated DeleteMsg msgs = 3;\n    optional string busChannel = 4; //该消息所属会话的业务标识，限制20字符以内\n  }\n  message DeleteMsg\n  {\n    optional string msgId = 1;\n    optional int64 msgDataTime = 2;\n    optional int32 direct = 3;\n  }\n  message ChrmKVEntity {\n    required string key = 1;\n    required string value = 2;\n    optional int32 status = 3;\n    optional int64 timestamp = 4;\n    optional string uid = 5;\n    optional int64 version = 6;\n  }\n  message "+Sn+" {\n    required ChrmKVEntity entry = 1;\n    optional bool bNotify = 2;\n    optional UpStreamMessage notification = 3;\n    optional ChannelType type = 4;\n  }\n  message "+Nn+" {\n    repeated ChrmKVEntity entry = 1;\n    optional bool bNotify = 2;\n    optional UpStreamMessage notification = 3;\n    optional ChannelType type = 4;\n  }\n  message "+On+" {\n    repeated ChrmKVEntity entry = 1;\n    optional bool bNotify = 2;\n    optional UpStreamMessage notification = 3;\n    optional ChannelType type = 4;\n  }\n  message "+Mn+" {\n    repeated ChrmKVEntity entries = 1;\n    optional bool bFullUpdate = 2;\n    optional int64 syncTime = 3;\n  }\n  message ChrmKVSVersionEntity {\n    optional int64 version = 1;\n    optional string key = 2;\n  }\n\n  message "+wn+" {\n    repeated ChrmKVSOutputEntity errorKeys = 1;\n    repeated ChrmKVSVersionEntity keysVersion = 2;\n  }\n  message "+Un+"\n  {\n    optional string key = 1;\n    optional int32 errorCode = 2;\n  }\n  message "+bn+" {\n    required int64 timestamp = 1;\n  }\n  message "+Ln+" {\n    required int64 version=1;\n    required string value=2;\n  }\n  message "+Pn+" {\n    required int64 version=1;\n    required bool reserve=2;\n  }\n  message "+Dn+" {\n    required int64 version=1;\n    optional bool reserve=2;\n  }\n  message "+Vn+" {\n    repeated UserSettingItem items = 1;\n    required int64 version=2;\n  }\n  message UserSettingItem {\n    required string targetId= 1;\n    required ChannelType type = 2;\n    required string key = 4;\n    required bytes value = 5;\n    required int64 version=6;\n    required int32 status=7;\n    repeated SessionTagItem tags= 8;\n  }\n  message "+xn+" {\n    required int64 time = 1;\n  }\n  message "+Bn+" {\n    required int64 version=1;\n    repeated SessionState state= 2;\n  }\n  message "+Gn+" {\n    required ChannelType type = 1;\n    required string channelId = 2;\n    optional int64 time = 3;\n    repeated SessionStateItem stateItem = 4;\n    optional string busChannel = 5;//该消息所属会话的业务标识\n  }\n  message "+Fn+" {\n    required SessionStateType sessionStateType = 1;\n    required string value = 2;\n    repeated SessionTagItem tags = 3;\n  }\n  enum SessionStateType {\n    IsSilent = 1;\n    IsTop = 2;\n    Tags = 3;\n  }\n  message "+qn+" {\n    required int64 version=1;\n    repeated SessionState state= 2;\n  }\n  message "+Kn+" {\n    required int64 version=1;\n  }\n  message "+Hn+" {\n    repeated string msgId=1; //已读消息ID\n    optional string channelId = 2; // 该消息所属会话的业务标识\n  }\n  message "+Yn+" {\n    repeated string msgId=1; //已读消息ID\n    optional string channelId = 2; // 该消息所属会话的业务标识\n  }\n  message "+jn+" {\n    required int32 totalMemberNum = 1;//群内总人数\n    repeated GrpMsgReadUser list = 2;//已读用户列表（list复类型）\n  }\n  message "+Qn+" {\n    required int64 readTime = 1;//已读时间\n    required string userId = 2;//已读用户id\n  }\n  message "+Wn+" {\n    required int64 version=1;\n    repeated SessionTagItem tags=2;\n  }\n  message "+Jn+" {\n    required string tagId=1;\n    optional string name=2;\n    optional int64 createdTime=3;\n    optional bool isTop=4;\n  }\n  message "+zn+" {\n    required int64 version=1;\n    repeated SessionTagItem tags=2;\n  }\n  message "+Zn+" {\n    repeated string tagId=1;\n  }\n  message "+kn+" {\n    required int64 version=1;\n    required bool reserve=2;\n  }\n  message "+Xn+' {\n    required string sdkInfo=1; // 用户集成的 sdk 信息,json 格式 {"web-rtc": "4.0.3.7"}\n  }\n  message '+$n+"\n  {\n    optional int32 nothing=1; //占位\n  }\n  message "+fi+" \n  {\n    required int32 type= 1;   //(通知类型 1:rtc房间状态KV变更通知)\n    optional int64 time= 2;   //消息产生时间\n    optional string roomId=3; //主播房间id\n  }\n  message "+pi+"\n  {\n    required int64 timestamp = 1;\n    required string roomId = 2;\n  }\n  message "+gi+"\n  {\n    repeated RtcKVEntity entries = 1;\n    optional bool bFullUpdate = 2;\n    optional int64 syncTime = 3; \n  }\n  message RtcKVEntity \n  {\n    required string key = 1;\n    required string value = 2;\n    optional int32 status = 3;\n    optional int64 timestamp = 4;\n    optional string uid = 5;\n  }\n  enum IdentityChangeType \n  {\n    AnchorToViewer = 1; //1为主播变观众\n    ViewerToAnchor = 2; //2为观众变主播\n  }\n  message "+_i+"\n  {\n    required string userId = 1;\n  }\n  message "+yi+"\n  {\n    repeated RtcJoinedInfo info = 1;\n  }\n  message RtcJoinedInfo\n  {\n    required string deviceId = 1; //设备ID\n    required string roomId = 2;   //加入的房间ID\n    optional int64 joinTime = 3;  //加入的时间\n  }\n  message "+mi+"\n  {\n    required string rtcToken=1;\n    repeated RtcKVEntity entries = 2;//KV属性对象集合\n    optional int64 syncTime = 3;//所有属性的最大时间戳（下次拉取KV时用）。\n  }\n  message "+vi+"\n  {\n    required string invitedUserId=1;    //被邀请的人的uid\n    optional int32  timeoutTime=2;       //邀请超时时间(秒),默认三十秒\n    required string invitedRoomId=3;    //被邀请的房间\n    required string inviteInfo=4;       //邀请的信息(包含邀请人,被邀请人,各自userid)客户端定义好.协议栈和server透传\n    required string inviteSessionId= 5; //客户端保证唯一性(建议roomid_userid_时间戳_随机数)\n  }\n  message "+Ei+"\n  {\n    required string invitedUserId=1;   //被邀请的人的uid\n    required string invitedRoomId=2;   //被邀请的房间\n    required string inviteInfo=3;      //取消邀请的信息(包含邀请人,被邀请人,各自userid)客户端定义好.协议栈和server透传\n    required string inviteSessionId=4; //邀请的sessionId,客户端发起邀请时产生\n  }\n  message "+Ti+"\n  {\n    required string inviteUserId=1;    //邀请的人的uid\n    required int32  answerCode=2;      //是否接受连麦邀请.0为拒绝,1为接受\n    required string inviteRoomId=3;    //邀请的房间\n    required string inviteSessionId=4; //邀请的sessionId\n    required string content=5;         //需要转发的content\n    optional string key=6;             //如果接受的话,需要加这个字段,放在room级别的k和v,新加入房间的能拉取到\n    optional string value=7;           //如果接受的话,需要加这个字段,放在room级别的k和v,新加入房间的能拉取到\n  }\n  message "+Ii+"\n  {\n    required string inviteRoomId=1;    //邀请的房间\n    required string inviteSessionId=2; //邀请的sessionId\n    required string inviteContent=3;   //结束连麦的信息(需要透传给房间内其他人)\n    repeated string inviteRoomKeys=4;  //需要删除连麦的信息的key\n  }\n  message "+ei+"\n  {\n      required int64 syncTime = 1;//同步时间戳\n      optional bool isEraseMsgContent = 2;//拉取会话时，是否屏蔽掉消息内容\n  }\n  message "+ti+"\n  {\n    required int64 syncTime = 1;//同步时间戳\n  }\n  message  "+ni+"\n  {\n    required string fromUserId = 1;//（谁发的）\n    required string targetId = 2;// 目标Id(超级群Id)\n    required ChannelType type = 3;//发送类型如：（P2P,GROUP,ULTRAGROUP）\n    required string msgUID = 4; // 扩展消息的内容体\n    required int64 msgTime = 5; //原始消息时间\n    optional string busChannel = 6; // 该消息所属会话的业务标识，限制20字符以内\n    optional string content = 7; // 即extraContent消息扩展内容,下表格说明\n  }\n  message "+ii+"  //查询入参\n  {\n    required int64 syncTime = 1;//同步时间戳\n  }\n  message "+si+"  //应答结果\n  {\n    repeated MsgChange list = 1; //变更\n    required int64 syncTime = 2; //同步时间(用于下次同步入参)\n    optional bool  hasNext = 3 ;\n  }\n  message MsgChange  //变更详情\n  {\n    required string targetId = 1; //  目标Id(超级群Id)\n    required ChannelType type = 2; //  会话类型\n    required int64 time = 3;  // 变更时间\n    required int32 changeType = 4;  // 消息变更类型（1:扩展,2:修改,3:撤回)\n    required string msgUID  = 5;  // 消息ID\n    required int64 msgTime = 6;  //  消息时间\n    optional string busChannel = 7; // 频道ID\n    optional bool isAdmin = 8; //是否为管理员，默认为 0，设为 1 时，IMKit 收到此条消息后，小灰条默认显示为“管理员 撤回了一条消息”。\n    optional bool isDel = 9; //默认为 0 撤回该条消息同时，用户端将该条消息删除并替换为一条小灰条撤回提示消息；为 1 时，该条消息删除后，不替换为小灰条提示消息。\n    optional string operatorId = 10; // 新加 - 消息变更的操作人Id\n  }\n  message "+oi+"  //请求\n  {\n    required string targetId = 1; //  目标Id(超级群Id)\n    required ChannelType type = 2; //  会话类型\n    repeated MessageQueryInfo query = 3; //\n  }\n  message MessageQueryInfo\n  {\n    required int64 msgTime = 1;  // 消息时间\n    required string msgUID  = 2;  // 消息ID\n    optional string busChannel = 3; // 频道ID\n  }\n  message "+ui+"  //应答\n  {\n    repeated DownStreamMessage list = 1;//消息\n  }\n  message "+ci+"  //客户端发送\n  {\n    optional string targetId =  1;// targetId\n    optional ChannelType type = 2;//发送会话类型如：（P2P,GROUP） \n    optional int32 opType = 3;  //0 , 正在输入, 1 正在XXX  \n    optional string busChannel = 4; // 频道(channelId,可以为空)\n  }\n  message "+hi+"  //服务端发送\n  {\n      optional ChannelType type = 1;//发送会话类型如（P2P,GROUP） \n      optional int64 notifyType = 2; //0x1 表示明细, 0x2 表示汇总 0x3 表示明细+汇总\n      repeated OperateInfo info = 3 ; //明细列表 当notifyType 为 1和3时,有效\n      repeated OperateSummary summary = 4 ; //汇总列表, 当notifyType 为2和3 时,有效\n  }\n  message "+li+" {\n    // XX 正在做什么\n    optional string targetId = 1; // 超级群Id  会话id\n    optional string busChannel = 2; // 频道(channelId,可以为空)\n    optional string userId = 3; // userId\n    optional int32 opType = 4;  //0 , 正在输入, 1 正在XX \n    optional int64 optime = 5;  //服务端收到用户操作的上行时间. \n  }\n      \n  message "+di+" {\n    // 几个人 正在干什么\n    optional string targetId = 1; // 超级群Id  会话id\n    optional string busChannel = 2; // 频道(channelId,可以为空)\n    optional int32 count  = 3; // 操作人数\n    optional int32 opType = 4; //0, 正在输入, 1 正在XX \n  }\n  message "+Ci+"\n  {\n    required string  rtcRoomId= 1;  //rtc房间ID;\n  }\n  message "+Ri+"\n  {\n    required int32 nothing = 1;   //用于占位\n  }\n}\n";var Ai,Ui,bi,Li,Pi,Di=(Ai=wi,function(e,t){var n,i,r={};return r.ByteBuffer=e,r.c=e,n=e,r.Long=t||null,r.VERSION="5.0.1",r.WIRE_TYPES={},r.WIRE_TYPES.VARINT=0,r.WIRE_TYPES.BITS64=1,r.WIRE_TYPES.LDELIM=2,r.WIRE_TYPES.STARTGROUP=3,r.WIRE_TYPES.ENDGROUP=4,r.WIRE_TYPES.BITS32=5,r.PACKABLE_WIRE_TYPES=[r.WIRE_TYPES.VARINT,r.WIRE_TYPES.BITS64,r.WIRE_TYPES.BITS32],r.TYPES={int32:{name:"int32",wireType:r.WIRE_TYPES.VARINT,defaultValue:0},uint32:{name:"uint32",wireType:r.WIRE_TYPES.VARINT,defaultValue:0},sint32:{name:"sint32",wireType:r.WIRE_TYPES.VARINT,defaultValue:0},int64:{name:"int64",wireType:r.WIRE_TYPES.VARINT,defaultValue:r.Long?r.Long.ZERO:void 0},uint64:{name:"uint64",wireType:r.WIRE_TYPES.VARINT,defaultValue:r.Long?r.Long.UZERO:void 0},sint64:{name:"sint64",wireType:r.WIRE_TYPES.VARINT,defaultValue:r.Long?r.Long.ZERO:void 0},bool:{name:"bool",wireType:r.WIRE_TYPES.VARINT,defaultValue:!1},double:{name:"double",wireType:r.WIRE_TYPES.BITS64,defaultValue:0},string:{name:"string",wireType:r.WIRE_TYPES.LDELIM,defaultValue:""},bytes:{name:"bytes",wireType:r.WIRE_TYPES.LDELIM,defaultValue:null},fixed32:{name:"fixed32",wireType:r.WIRE_TYPES.BITS32,defaultValue:0},sfixed32:{name:"sfixed32",wireType:r.WIRE_TYPES.BITS32,defaultValue:0},fixed64:{name:"fixed64",wireType:r.WIRE_TYPES.BITS64,defaultValue:r.Long?r.Long.UZERO:void 0},sfixed64:{name:"sfixed64",wireType:r.WIRE_TYPES.BITS64,defaultValue:r.Long?r.Long.ZERO:void 0},float:{name:"float",wireType:r.WIRE_TYPES.BITS32,defaultValue:0},enum:{name:"enum",wireType:r.WIRE_TYPES.VARINT,defaultValue:0},message:{name:"message",wireType:r.WIRE_TYPES.LDELIM,defaultValue:null},group:{name:"group",wireType:r.WIRE_TYPES.STARTGROUP,defaultValue:null}},r.MAP_KEY_TYPES=[r.TYPES.int32,r.TYPES.sint32,r.TYPES.sfixed32,r.TYPES.uint32,r.TYPES.fixed32,r.TYPES.int64,r.TYPES.sint64,r.TYPES.sfixed64,r.TYPES.uint64,r.TYPES.fixed64,r.TYPES.bool,r.TYPES.string,r.TYPES.bytes],r.ID_MIN=1,r.ID_MAX=536870911,r.convertFieldsToCamelCase=!1,r.populateAccessors=!0,r.populateDefaults=!0,r.Util=function(){var e={};return e.IS_NODE=!("object"!=typeof process||process+""!="[object process]"||process.browser),e.XHR=function(){var e,t=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],n=null;for(e=0;e<t.length;e++){try{n=t[e]();}catch(e){continue}break}if(!n)throw Error("XMLHttpRequest is not supported");return n},e.fetch=function(t,n){if(n&&"function"!=typeof n&&(n=null),e.IS_NODE)if(n)g.readFile(t,(function(e,t){n(e?null:""+t);}));else try{return g.readFileSync(t)}catch(e){return null}else {var i=e.XHR();if(i.open("GET",t,!!n),i.setRequestHeader("Accept","text/plain"),"function"==typeof i.overrideMimeType&&i.overrideMimeType("text/plain"),!n)return i.send(null),200==i.status||0==i.status&&"string"==typeof i.responseText?i.responseText:null;if(i.onreadystatechange=function(){4==i.readyState&&(200==i.status||0==i.status&&"string"==typeof i.responseText?n(i.responseText):n(null));},4==i.readyState)return;i.send(null);}},e.toCamelCase=function(e){return e.replace(/_([a-zA-Z])/g,(function(e,t){return t.toUpperCase()}))},e}(),r.Lang={DELIM:/[\s\{\}=;:\[\],'"\(\)<>]/g,RULE:/^(?:required|optional|repeated|map)$/,TYPE:/^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,NAME:/^[a-zA-Z_][a-zA-Z_0-9]*$/,TYPEDEF:/^[a-zA-Z][a-zA-Z_0-9]*$/,TYPEREF:/^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,FQTYPEREF:/^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/,NUMBER:/^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,NUMBER_DEC:/^(?:[1-9][0-9]*|0)$/,NUMBER_HEX:/^0[xX][0-9a-fA-F]+$/,NUMBER_OCT:/^0[0-7]+$/,NUMBER_FLT:/^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,BOOL:/^(?:true|false)$/i,ID:/^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,NEGID:/^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,WHITESPACE:/\s/,STRING:/(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,STRING_DQ:/(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,STRING_SQ:/(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g},r.DotProto=function(e,t){function n(e,n){var i=-1,r=1;if("-"==e.charAt(0)&&(r=-1,e=e.substring(1)),t.NUMBER_DEC.test(e))i=parseInt(e);else if(t.NUMBER_HEX.test(e))i=parseInt(e.substring(2),16);else {if(!t.NUMBER_OCT.test(e))throw Error("illegal id value: "+(r<0?"-":"")+e);i=parseInt(e.substring(1),8);}if(i=0|r*i,!n&&i<0)throw Error("illegal id value: "+(r<0?"-":"")+e);return i}function i(e){var n=1;if("-"==e.charAt(0)&&(n=-1,e=e.substring(1)),t.NUMBER_DEC.test(e))return n*parseInt(e,10);if(t.NUMBER_HEX.test(e))return n*parseInt(e.substring(2),16);if(t.NUMBER_OCT.test(e))return n*parseInt(e.substring(1),8);if("inf"===e)return 1/0*n;if("nan"===e)return NaN;if(t.NUMBER_FLT.test(e))return n*parseFloat(e);throw Error("illegal number value: "+(n<0?"-":"")+e)}function r(e,t,n){void 0===e[t]?e[t]=n:(Array.isArray(e[t])||(e[t]=[e[t]]),e[t].push(n));}var s,o,a={},u=function(e){this.source=e+"",this.index=0,this.line=1,this.stack=[],this._stringOpen=null;},c=u.prototype;return c._readString=function(){var e,n='"'===this._stringOpen?t.STRING_DQ:t.STRING_SQ;if(n.lastIndex=this.index-1,!(e=n.exec(this.source)))throw Error("unterminated string");return this.index=n.lastIndex,this.stack.push(this._stringOpen),this._stringOpen=null,e[1]},c.next=function(){var e,n,i,r,s;if(this.stack.length>0)return this.stack.shift();if(this.index>=this.source.length)return null;if(null!==this._stringOpen)return this._readString();do{for(e=!1;t.WHITESPACE.test(i=this.source.charAt(this.index));)if("\n"===i&&++this.line,++this.index===this.source.length)return null;if("/"===this.source.charAt(this.index))if(++this.index,"/"===this.source.charAt(this.index)){for(;"\n"!==this.source.charAt(++this.index);)if(this.index==this.source.length)return null;++this.index,++this.line,e=!0;}else {if("*"!==(i=this.source.charAt(this.index)))return "/";do{if("\n"===i&&++this.line,++this.index===this.source.length)return null;n=i,i=this.source.charAt(this.index);}while("*"!==n||"/"!==i);++this.index,e=!0;}}while(e);if(this.index===this.source.length)return null;if(r=this.index,t.DELIM.lastIndex=0,!t.DELIM.test(this.source.charAt(r++)))for(;r<this.source.length&&!t.DELIM.test(this.source.charAt(r));)++r;return ('"'===(s=this.source.substring(this.index,this.index=r))||"'"===s)&&(this._stringOpen=s),s},c.peek=function(){if(0===this.stack.length){var e=this.next();if(null===e)return null;this.stack.push(e);}return this.stack[0]},c.skip=function(e){var t=this.next();if(t!==e)throw Error("illegal '"+t+"', '"+e+"' expected")},c.omit=function(e){return this.peek()===e&&(this.next(),!0)},c.toString=function(){return "Tokenizer ("+this.index+"/"+this.source.length+" at line "+this.line+")"},a.Tokenizer=u,(o=(s=function(e){this.tn=new u(e),this.proto3=!1;}).prototype).parse=function(){var e,n={name:"[ROOT]",package:null,messages:[],enums:[],imports:[],options:{},services:[]},i=!0;try{for(;e=this.tn.next();)switch(e){case"package":if(!i||null!==n.package)throw Error("unexpected 'package'");if(e=this.tn.next(),!t.TYPEREF.test(e))throw Error("illegal package name: "+e);this.tn.skip(";"),n.package=e;break;case"import":if(!i)throw Error("unexpected 'import'");"public"===(e=this.tn.peek())&&this.tn.next(),e=this._readString(),this.tn.skip(";"),n.imports.push(e);break;case"syntax":if(!i)throw Error("unexpected 'syntax'");this.tn.skip("="),"proto3"===(n.syntax=this._readString())&&(this.proto3=!0),this.tn.skip(";");break;case"message":this._parseMessage(n,null),i=!1;break;case"enum":this._parseEnum(n),i=!1;break;case"option":this._parseOption(n);break;case"service":this._parseService(n);break;case"extend":this._parseExtend(n);break;default:throw Error("unexpected '"+e+"'")}}catch(e){throw e.message="Parse error at line "+this.tn.line+": "+e.message,e}return delete n.name,n},s.parse=function(e){return new s(e).parse()},o._readString=function(){var e,t,n="";do{if("'"!==(t=this.tn.next())&&'"'!==t)throw Error("illegal string delimiter: "+t);n+=this.tn.next(),this.tn.skip(t),e=this.tn.peek();}while('"'===e||'"'===e);return n},o._readValue=function(e){var n=this.tn.peek();if('"'===n||"'"===n)return this._readString();if(this.tn.next(),t.NUMBER.test(n))return i(n);if(t.BOOL.test(n))return "true"===n.toLowerCase();if(e&&t.TYPEREF.test(n))return n;throw Error("illegal value: "+n)},o._parseOption=function(e,n){var i,r=this.tn.next(),s=!1;if("("===r&&(s=!0,r=this.tn.next()),!t.TYPEREF.test(r))throw Error("illegal option name: "+r);i=r,s&&(this.tn.skip(")"),i="("+i+")",r=this.tn.peek(),t.FQTYPEREF.test(r)&&(i+=r,this.tn.next())),this.tn.skip("="),this._parseOptionValue(e,i),n||this.tn.skip(";");},o._parseOptionValue=function(e,n){var i=this.tn.peek();if("{"!==i)r(e.options,n,this._readValue(!0));else for(this.tn.skip("{");"}"!==(i=this.tn.next());){if(!t.NAME.test(i))throw Error("illegal option name: "+n+"."+i);this.tn.omit(":")?r(e.options,n+"."+i,this._readValue(!0)):this._parseOptionValue(e,n+"."+i);}},o._parseService=function(e){var n,i=this.tn.next();if(!t.NAME.test(i))throw Error("illegal service name at line "+this.tn.line+": "+i);for(n={name:i,rpc:{},options:{}},this.tn.skip("{");"}"!==(i=this.tn.next());)if("option"===i)this._parseOption(n);else {if("rpc"!==i)throw Error("illegal service token: "+i);this._parseServiceRPC(n);}this.tn.omit(";"),e.services.push(n);},o._parseServiceRPC=function(e){var n,i,r="rpc",s=this.tn.next();if(!t.NAME.test(s))throw Error("illegal rpc service method name: "+s);if(n=s,i={request:null,response:null,request_stream:!1,response_stream:!1,options:{}},this.tn.skip("("),"stream"===(s=this.tn.next()).toLowerCase()&&(i.request_stream=!0,s=this.tn.next()),!t.TYPEREF.test(s))throw Error("illegal rpc service request type: "+s);if(i.request=s,this.tn.skip(")"),"returns"!==(s=this.tn.next()).toLowerCase())throw Error("illegal rpc service request type delimiter: "+s);if(this.tn.skip("("),"stream"===(s=this.tn.next()).toLowerCase()&&(i.response_stream=!0,s=this.tn.next()),i.response=s,this.tn.skip(")"),"{"===(s=this.tn.peek())){for(this.tn.next();"}"!==(s=this.tn.next());){if("option"!==s)throw Error("illegal rpc service token: "+s);this._parseOption(i);}this.tn.omit(";");}else this.tn.skip(";");void 0===e[r]&&(e[r]={}),e[r][n]=i;},o._parseMessage=function(e,i){var r=!!i,s=this.tn.next(),o={name:"",fields:[],enums:[],messages:[],options:{},services:[],oneofs:{}};if(!t.NAME.test(s))throw Error("illegal "+(r?"group":"message")+" name: "+s);for(o.name=s,r&&(this.tn.skip("="),i.id=n(this.tn.next()),o.isGroup=!0),"["===(s=this.tn.peek())&&i&&this._parseFieldOptions(i),this.tn.skip("{");"}"!==(s=this.tn.next());)if(t.RULE.test(s))this._parseMessageField(o,s);else if("oneof"===s)this._parseMessageOneOf(o);else if("enum"===s)this._parseEnum(o);else if("message"===s)this._parseMessage(o);else if("option"===s)this._parseOption(o);else if("service"===s)this._parseService(o);else if("extensions"===s)o.extensions=this._parseExtensionRanges();else if("reserved"===s)this._parseIgnored();else if("extend"===s)this._parseExtend(o);else {if(!t.TYPEREF.test(s))throw Error("illegal message token: "+s);if(!this.proto3)throw Error("illegal field rule: "+s);this._parseMessageField(o,"optional",s);}return this.tn.omit(";"),e.messages.push(o),o},o._parseIgnored=function(){for(;";"!==this.tn.peek();)this.tn.next();this.tn.skip(";");},o._parseMessageField=function(e,i,r){var s,o,a;if(!t.RULE.test(i))throw Error("illegal message field rule: "+i);if(s={rule:i,type:"",name:"",options:{},id:0},"map"===i){if(r)throw Error("illegal type: "+r);if(this.tn.skip("<"),o=this.tn.next(),!t.TYPE.test(o)&&!t.TYPEREF.test(o))throw Error("illegal message field type: "+o);if(s.keytype=o,this.tn.skip(","),o=this.tn.next(),!t.TYPE.test(o)&&!t.TYPEREF.test(o))throw Error("illegal message field: "+o);if(s.type=o,this.tn.skip(">"),o=this.tn.next(),!t.NAME.test(o))throw Error("illegal message field name: "+o);s.name=o,this.tn.skip("="),s.id=n(this.tn.next()),"["===(o=this.tn.peek())&&this._parseFieldOptions(s),this.tn.skip(";");}else if("group"===(r=void 0!==r?r:this.tn.next())){if(a=this._parseMessage(e,s),!/^[A-Z]/.test(a.name))throw Error("illegal group name: "+a.name);s.type=a.name,s.name=a.name.toLowerCase(),this.tn.omit(";");}else {if(!t.TYPE.test(r)&&!t.TYPEREF.test(r))throw Error("illegal message field type: "+r);if(s.type=r,o=this.tn.next(),!t.NAME.test(o))throw Error("illegal message field name: "+o);s.name=o,this.tn.skip("="),s.id=n(this.tn.next()),"["===(o=this.tn.peek())&&this._parseFieldOptions(s),this.tn.skip(";");}return e.fields.push(s),s},o._parseMessageOneOf=function(e){var n,i,r,s=this.tn.next();if(!t.NAME.test(s))throw Error("illegal oneof name: "+s);for(i=s,r=[],this.tn.skip("{");"}"!==(s=this.tn.next());)(n=this._parseMessageField(e,"optional",s)).oneof=i,r.push(n.id);this.tn.omit(";"),e.oneofs[i]=r;},o._parseFieldOptions=function(e){this.tn.skip("[");for(var t=!0;"]"!==this.tn.peek();)t||this.tn.skip(","),this._parseOption(e,!0),t=!1;this.tn.next();},o._parseEnum=function(e){var i,r={name:"",values:[],options:{}},s=this.tn.next();if(!t.NAME.test(s))throw Error("illegal name: "+s);for(r.name=s,this.tn.skip("{");"}"!==(s=this.tn.next());)if("option"===s)this._parseOption(r);else {if(!t.NAME.test(s))throw Error("illegal name: "+s);this.tn.skip("="),i={name:s,id:n(this.tn.next(),!0)},"["===(s=this.tn.peek())&&this._parseFieldOptions({options:{}}),this.tn.skip(";"),r.values.push(i);}this.tn.omit(";"),e.enums.push(r);},o._parseExtensionRanges=function(){var t,n,r,s=[];do{for(n=[];;){switch(t=this.tn.next()){case"min":r=e.ID_MIN;break;case"max":r=e.ID_MAX;break;default:r=i(t);}if(n.push(r),2===n.length)break;if("to"!==this.tn.peek()){n.push(r);break}this.tn.next();}s.push(n);}while(this.tn.omit(","));return this.tn.skip(";"),s},o._parseExtend=function(e){var n,i=this.tn.next();if(!t.TYPEREF.test(i))throw Error("illegal extend reference: "+i);for(n={ref:i,fields:[]},this.tn.skip("{");"}"!==(i=this.tn.next());)if(t.RULE.test(i))this._parseMessageField(n,i);else {if(!t.TYPEREF.test(i))throw Error("illegal extend token: "+i);if(!this.proto3)throw Error("illegal field rule: "+i);this._parseMessageField(n,"optional",i);}return this.tn.omit(";"),e.messages.push(n),n},o.toString=function(){return "Parser at line "+this.tn.line},a.Parser=s,a}(r,r.Lang),r.Reflect=function(t){function i(e,n){if(e&&"number"==typeof e.low&&"number"==typeof e.high&&"boolean"==typeof e.unsigned&&e.low==e.low&&e.high==e.high)return new t.Long(e.low,e.high,void 0===n?e.unsigned:n);if("string"==typeof e)return t.Long.fromString(e,n||!1,10);if("number"==typeof e)return t.Long.fromNumber(e,n||!1);throw Error("not convertible to Long")}function r(e,n){var i=n.readVarint32(),s=7&i,o=i>>>3;switch(s){case t.WIRE_TYPES.VARINT:do{i=n.readUint8();}while(128==(128&i));break;case t.WIRE_TYPES.BITS64:n.offset+=8;break;case t.WIRE_TYPES.LDELIM:i=n.readVarint32(),n.offset+=i;break;case t.WIRE_TYPES.STARTGROUP:r(o,n);break;case t.WIRE_TYPES.ENDGROUP:if(o===e)return !1;throw Error("Illegal GROUPEND after unknown group: "+o+" ("+e+" expected)");case t.WIRE_TYPES.BITS32:n.offset+=4;break;default:throw Error("Illegal wire type in unknown group "+e+": "+s)}return !0}var s,o,a,u,c,h,l,d,f,p,g,_,y,m,v,E,T={},I=function(e,t,n){this.builder=e,this.parent=t,this.name=n,this.className;},C=I.prototype;return C.fqn=function(){for(var e=this.name,t=this;null!=(t=t.parent);)e=t.name+"."+e;return e},C.toString=function(e){return (e?this.className+" ":"")+this.fqn()},C.build=function(){throw Error(this.toString(!0)+" cannot be built directly")},T.T=I,(o=(s=function(e,t,n,i,r){I.call(this,e,t,n),this.className="Namespace",this.children=[],this.options=i||{},this.syntax=r||"proto2";}).prototype=Object.create(I.prototype)).getChildren=function(e){var t,n,i;if(null==(e=e||null))return this.children.slice();for(t=[],n=0,i=this.children.length;i>n;++n)this.children[n]instanceof e&&t.push(this.children[n]);return t},o.addChild=function(e){var t;if(t=this.getChild(e.name))if(t instanceof c.Field&&t.name!==t.originalName&&null===this.getChild(t.originalName))t.name=t.originalName;else {if(!(e instanceof c.Field&&e.name!==e.originalName&&null===this.getChild(e.originalName)))throw Error("Duplicate name in namespace "+this.toString(!0)+": "+e.name);e.name=e.originalName;}this.children.push(e);},o.getChild=function(e){var t,n,i="number"==typeof e?"id":"name";for(t=0,n=this.children.length;n>t;++t)if(this.children[t][i]===e)return this.children[t];return null},o.resolve=function(e,t){var n,i="string"==typeof e?e.split("."):e,r=this,s=0;if(""===i[s]){for(;null!==r.parent;)r=r.parent;s++;}do{do{if(!(r instanceof T.Namespace)){r=null;break}if(!((n=r.getChild(i[s]))&&n instanceof T.T&&(!t||n instanceof T.Namespace))){r=null;break}r=n,s++;}while(s<i.length);if(null!=r)break;if(null!==this.parent)return this.parent.resolve(e,t)}while(null!=r);return r},o.qn=function(e){var t,n,i=[],r=e;do{i.unshift(r.name),r=r.parent;}while(null!==r);for(t=1;t<=i.length;t++)if(n=i.slice(i.length-t),e===this.resolve(n,e instanceof T.Namespace))return n.join(".");return e.fqn()},o.build=function(){var e,t,n,i={},r=this.children;for(t=0,n=r.length;n>t;++t)(e=r[t])instanceof s&&(i[e.name]=e.build());return Object.defineProperty&&Object.defineProperty(i,"$options",{value:this.buildOpt()}),i},o.buildOpt=function(){var e,t,n,i,r={},s=Object.keys(this.options);for(e=0,t=s.length;t>e;++e)n=s[e],i=this.options[s[e]],r[n]=i;return r},o.getOption=function(e){return void 0===e?this.options:void 0!==this.options[e]?this.options[e]:null},T.Namespace=s,u=(a=function(e,n,i,r){if(this.type=e,this.resolvedType=n,this.isMapKey=i,this.syntax=r,i&&t.MAP_KEY_TYPES.indexOf(e)<0)throw Error("Invalid map key type: "+e.name)}).prototype,a.defaultFieldValue=function(e){if("string"==typeof e&&(e=t.TYPES[e]),void 0===e.defaultValue)throw Error("default value for type "+e.name+" is not supported");return e==t.TYPES.bytes?new n(0):e.defaultValue},u.verifyValue=function(n){var r,s,o,a=function(e,t){throw Error("Illegal value for "+this.toString(!0)+" of type "+this.type.name+": "+e+" ("+t+")")}.bind(this);switch(this.type){case t.TYPES.int32:case t.TYPES.sint32:case t.TYPES.sfixed32:return ("number"!=typeof n||n==n&&n%1!=0)&&a(typeof n,"not an integer"),n>4294967295?0|n:n;case t.TYPES.uint32:case t.TYPES.fixed32:return ("number"!=typeof n||n==n&&n%1!=0)&&a(typeof n,"not an integer"),n<0?n>>>0:n;case t.TYPES.int64:case t.TYPES.sint64:case t.TYPES.sfixed64:if(t.Long)try{return i(n,!1)}catch(e){a(typeof n,e.message);}else a(typeof n,"requires Long.js");case t.TYPES.uint64:case t.TYPES.fixed64:if(t.Long)try{return i(n,!0)}catch(e){a(typeof n,e.message);}else a(typeof n,"requires Long.js");case t.TYPES.bool:return "boolean"!=typeof n&&a(typeof n,"not a boolean"),n;case t.TYPES.float:case t.TYPES.double:return "number"!=typeof n&&a(typeof n,"not a number"),n;case t.TYPES.string:return "string"==typeof n||n&&n instanceof String||a(typeof n,"not a string"),""+n;case t.TYPES.bytes:return e.isByteBuffer(n)?n:e.wrap(n);case t.TYPES.enum:for(r=this.resolvedType.getChildren(t.Reflect.Enum.Value),o=0;o<r.length;o++){if(r[o].name==n)return r[o].id;if(r[o].id==n)return r[o].id}if("proto3"===this.syntax)return ("number"!=typeof n||n==n&&n%1!=0)&&a(typeof n,"not an integer"),(n>4294967295||n<0)&&a(typeof n,"not in range for uint32"),n;a(n,"not a valid enum value");case t.TYPES.group:case t.TYPES.message:if(n&&"object"==typeof n||a(typeof n,"object expected"),n instanceof this.resolvedType.clazz)return n;if(n instanceof t.Builder.Message){for(o in s={},n)n.hasOwnProperty(o)&&(s[o]=n[o]);n=s;}return new this.resolvedType.clazz(n)}throw Error("[INTERNAL] Illegal value for "+this.toString(!0)+": "+n+" (undefined type "+this.type+")")},u.calculateLength=function(e,i){if(null===i)return 0;var r;switch(this.type){case t.TYPES.int32:return i<0?n.calculateVarint64(i):n.calculateVarint32(i);case t.TYPES.uint32:return n.calculateVarint32(i);case t.TYPES.sint32:return n.calculateVarint32(n.zigZagEncode32(i));case t.TYPES.fixed32:case t.TYPES.sfixed32:case t.TYPES.float:return 4;case t.TYPES.int64:case t.TYPES.uint64:return n.calculateVarint64(i);case t.TYPES.sint64:return n.calculateVarint64(n.zigZagEncode64(i));case t.TYPES.fixed64:case t.TYPES.sfixed64:return 8;case t.TYPES.bool:return 1;case t.TYPES.enum:return n.calculateVarint32(i);case t.TYPES.double:return 8;case t.TYPES.string:return r=n.calculateUTF8Bytes(i),n.calculateVarint32(r)+r;case t.TYPES.bytes:if(i.remaining()<0)throw Error("Illegal value for "+this.toString(!0)+": "+i.remaining()+" bytes remaining");return n.calculateVarint32(i.remaining())+i.remaining();case t.TYPES.message:return r=this.resolvedType.calculate(i),n.calculateVarint32(r)+r;case t.TYPES.group:return (r=this.resolvedType.calculate(i))+n.calculateVarint32(e<<3|t.WIRE_TYPES.ENDGROUP)}throw Error("[INTERNAL] Illegal value to encode in "+this.toString(!0)+": "+i+" (unknown type)")},u.encodeValue=function(e,i,r){var s,o;if(null===i)return r;switch(this.type){case t.TYPES.int32:i<0?r.writeVarint64(i):r.writeVarint32(i);break;case t.TYPES.uint32:r.writeVarint32(i);break;case t.TYPES.sint32:r.writeVarint32ZigZag(i);break;case t.TYPES.fixed32:r.writeUint32(i);break;case t.TYPES.sfixed32:r.writeInt32(i);break;case t.TYPES.int64:case t.TYPES.uint64:r.writeVarint64(i);break;case t.TYPES.sint64:r.writeVarint64ZigZag(i);break;case t.TYPES.fixed64:r.writeUint64(i);break;case t.TYPES.sfixed64:r.writeInt64(i);break;case t.TYPES.bool:"string"==typeof i?r.writeVarint32("false"===i.toLowerCase()?0:!!i):r.writeVarint32(i?1:0);break;case t.TYPES.enum:r.writeVarint32(i);break;case t.TYPES.float:r.writeFloat32(i);break;case t.TYPES.double:r.writeFloat64(i);break;case t.TYPES.string:r.writeVString(i);break;case t.TYPES.bytes:if(i.remaining()<0)throw Error("Illegal value for "+this.toString(!0)+": "+i.remaining()+" bytes remaining");s=i.offset,r.writeVarint32(i.remaining()),r.append(i),i.offset=s;break;case t.TYPES.message:o=(new n).LE(),this.resolvedType.encode(i,o),r.writeVarint32(o.offset),r.append(o.flip());break;case t.TYPES.group:this.resolvedType.encode(i,r),r.writeVarint32(e<<3|t.WIRE_TYPES.ENDGROUP);break;default:throw Error("[INTERNAL] Illegal value to encode in "+this.toString(!0)+": "+i+" (unknown type)")}return r},u.decode=function(e,n,i){if(n!=this.type.wireType)throw Error("Unexpected wire type for element");var r,s;switch(this.type){case t.TYPES.int32:return 0|e.readVarint32();case t.TYPES.uint32:return e.readVarint32()>>>0;case t.TYPES.sint32:return 0|e.readVarint32ZigZag();case t.TYPES.fixed32:return e.readUint32()>>>0;case t.TYPES.sfixed32:return 0|e.readInt32();case t.TYPES.int64:return e.readVarint64();case t.TYPES.uint64:return e.readVarint64().toUnsigned();case t.TYPES.sint64:return e.readVarint64ZigZag();case t.TYPES.fixed64:return e.readUint64();case t.TYPES.sfixed64:return e.readInt64();case t.TYPES.bool:return !!e.readVarint32();case t.TYPES.enum:return e.readVarint32();case t.TYPES.float:return e.readFloat();case t.TYPES.double:return e.readDouble();case t.TYPES.string:return e.readVString();case t.TYPES.bytes:if(s=e.readVarint32(),e.remaining()<s)throw Error("Illegal number of bytes for "+this.toString(!0)+": "+s+" required but got only "+e.remaining());return (r=e.clone()).limit=r.offset+s,e.offset+=s,r;case t.TYPES.message:return s=e.readVarint32(),this.resolvedType.decode(e,s);case t.TYPES.group:return this.resolvedType.decode(e,-1,i)}throw Error("[INTERNAL] Illegal decode type")},u.valueFromString=function(e){if(!this.isMapKey)throw Error("valueFromString() called on non-map-key element");switch(this.type){case t.TYPES.int32:case t.TYPES.sint32:case t.TYPES.sfixed32:case t.TYPES.uint32:case t.TYPES.fixed32:return this.verifyValue(parseInt(e));case t.TYPES.int64:case t.TYPES.sint64:case t.TYPES.sfixed64:case t.TYPES.uint64:case t.TYPES.fixed64:return this.verifyValue(e);case t.TYPES.bool:return "true"===e;case t.TYPES.string:return this.verifyValue(e);case t.TYPES.bytes:return n.fromBinary(e)}},u.valueToString=function(e){if(!this.isMapKey)throw Error("valueToString() called on non-map-key element");return this.type===t.TYPES.bytes?e.toString("binary"):e.toString()},T.Element=a,(h=(c=function(e,t,n,i,r,o){s.call(this,e,t,n,i,o),this.className="Message",this.extensions=void 0,this.clazz=null,this.isGroup=!!r,this._fields=null,this._fieldsById=null,this._fieldsByName=null;}).prototype=Object.create(s.prototype)).build=function(i){var r,s,o,a;if(this.clazz&&!i)return this.clazz;for(r=function(t,i){function r(e,i,s,o){var a,u,c,h,l,d,f;if(null===e||"object"!=typeof e)return o&&o instanceof t.Reflect.Enum&&null!==(a=t.Reflect.Enum.getName(o.object,e))?a:e;if(n.isByteBuffer(e))return i?e.toBase64():e.toBuffer();if(t.Long.isLong(e))return s?e.toString():t.Long.fromValue(e);if(Array.isArray(e))return u=[],e.forEach((function(e,t){u[t]=r(e,i,s,o);})),u;if(u={},e instanceof t.Map){for(h=(c=e.entries()).next();!h.done;h=c.next())u[e.keyElem.valueToString(h.value[0])]=r(h.value[1],i,s,e.valueElem.resolvedType);return u}for(f in l=e.$type,d=void 0,e)e.hasOwnProperty(f)&&(u[f]=l&&(d=l.getChild(f))?r(e[f],i,s,d.resolvedType):r(e[f],i,s));return u}var s,o,a=i.getChildren(t.Reflect.Message.Field),u=i.getChildren(t.Reflect.Message.OneOf),c=function(e){var r,s,o,h;for(t.Builder.Message.call(this),r=0,s=u.length;s>r;++r)this[u[r].name]=null;for(r=0,s=a.length;s>r;++r)this[(o=a[r]).name]=o.repeated?[]:o.map?new t.Map(o):null,!o.required&&"proto3"!==i.syntax||null===o.defaultValue||(this[o.name]=o.defaultValue);if(arguments.length>0)if(1!==arguments.length||null===e||"object"!=typeof e||!("function"!=typeof e.encode||e instanceof c)||Array.isArray(e)||e instanceof t.Map||n.isByteBuffer(e)||e instanceof ArrayBuffer||t.Long&&e instanceof t.Long)for(r=0,s=arguments.length;s>r;++r)void 0!==(h=arguments[r])&&this.$set(a[r].name,h);else this.$set(e);},h=c.prototype=Object.create(t.Builder.Message.prototype);for(h.add=function(e,n,r){var s=i._fieldsByName[e];if(!r){if(!s)throw Error(this+"#"+e+" is undefined");if(!(s instanceof t.Reflect.Message.Field))throw Error(this+"#"+e+" is not a field: "+s.toString(!0));if(!s.repeated)throw Error(this+"#"+e+" is not a repeated field");n=s.verifyValue(n,!0);}return null===this[e]&&(this[e]=[]),this[e].push(n),this},h.$add=h.add,h.set=function(e,n,r){var s,o,a;if(e&&"object"==typeof e){for(s in r=n,e)e.hasOwnProperty(s)&&void 0!==(n=e[s])&&this.$set(s,n,r);return this}if(o=i._fieldsByName[e],r)this[e]=n;else {if(!o)throw Error(this+"#"+e+" is not a field: undefined");if(!(o instanceof t.Reflect.Message.Field))throw Error(this+"#"+e+" is not a field: "+o.toString(!0));this[o.name]=n=o.verifyValue(n);}return o&&o.oneof&&(a=this[o.oneof.name],null!==n?(null!==a&&a!==o.name&&(this[a]=null),this[o.oneof.name]=o.name):a===e&&(this[o.oneof.name]=null)),this},h.$set=h.set,h.get=function(e,n){if(n)return this[e];var r=i._fieldsByName[e];if(!(r&&r instanceof t.Reflect.Message.Field))throw Error(this+"#"+e+" is not a field: undefined");if(!(r instanceof t.Reflect.Message.Field))throw Error(this+"#"+e+" is not a field: "+r.toString(!0));return this[r.name]},h.$get=h.get,s=0;s<a.length;s++)(o=a[s])instanceof t.Reflect.Message.ExtensionField||i.builder.options.populateAccessors&&function(e){var t,n,r,s=e.originalName.replace(/(_[a-zA-Z])/g,(function(e){return e.toUpperCase().replace("_","")}));s=s.substring(0,1).toUpperCase()+s.substring(1),t=e.originalName.replace(/([A-Z])/g,(function(e){return "_"+e})),n=function(t,n){return this[e.name]=n?t:e.verifyValue(t),this},r=function(){return this[e.name]},null===i.getChild("set"+s)&&(h["set"+s]=n),null===i.getChild("set_"+t)&&(h["set_"+t]=n),null===i.getChild("get"+s)&&(h["get"+s]=r),null===i.getChild("get_"+t)&&(h["get_"+t]=r);}(o);return h.encode=function(t,n){var r,s;"boolean"==typeof t&&(n=t,t=void 0),r=!1,t||(t=new e,r=!0),s=t.littleEndian;try{return i.encode(this,t.LE(),n),(r?t.flip():t).LE(s)}catch(e){throw t.LE(s),e}},c.encode=function(e,t,n){return new c(e).encode(t,n)},h.calculate=function(){return i.calculate(this)},h.encodeDelimited=function(e){var t,r=!1;return e||(e=new n,r=!0),t=(new n).LE(),i.encode(this,t).flip(),e.writeVarint32(t.remaining()),e.append(t),r?e.flip():e},h.encodeAB=function(){try{return this.encode().toArrayBuffer()}catch(e){throw e.encoded&&(e.encoded=e.encoded.toArrayBuffer()),e}},h.toArrayBuffer=h.encodeAB,h.encodeNB=function(){try{return this.encode().toBuffer()}catch(e){throw e.encoded&&(e.encoded=e.encoded.toBuffer()),e}},h.toBuffer=h.encodeNB,h.encode64=function(){try{return this.encode().toBase64()}catch(e){throw e.encoded&&(e.encoded=e.encoded.toBase64()),e}},h.toBase64=h.encode64,h.encodeHex=function(){try{return this.encode().toHex()}catch(e){throw e.encoded&&(e.encoded=e.encoded.toHex()),e}},h.toHex=h.encodeHex,h.toRaw=function(e,t){return r(this,!!e,!!t,this.$type)},h.encodeJSON=function(){return JSON.stringify(r(this,!0,!0,this.$type))},c.decode=function(e,t){var r,s;"string"==typeof e&&(e=n.wrap(e,t||"base64")),r=(e=n.isByteBuffer(e)?e:n.wrap(e)).littleEndian;try{return s=i.decode(e.LE()),e.LE(r),s}catch(t){throw e.LE(r),t}},c.decodeDelimited=function(e,t){var r,s,o;if("string"==typeof e&&(e=n.wrap(e,t||"base64")),(e=n.isByteBuffer(e)?e:n.wrap(e)).remaining()<1)return null;if(r=e.offset,s=e.readVarint32(),e.remaining()<s)return e.offset=r,null;try{return o=i.decode(e.slice(e.offset,e.offset+s).LE()),e.offset+=s,o}catch(t){throw e.offset+=s,t}},c.decode64=function(e){return c.decode(e,"base64")},c.decodeHex=function(e){return c.decode(e,"hex")},c.decodeJSON=function(e){return new c(JSON.parse(e))},h.toString=function(){return i.toString()},Object.defineProperty&&(Object.defineProperty(c,"$options",{value:i.buildOpt()}),Object.defineProperty(h,"$options",{value:c.$options}),Object.defineProperty(c,"$type",{value:i}),Object.defineProperty(h,"$type",{value:i})),c}(t,this),this._fields=[],this._fieldsById={},this._fieldsByName={},o=0,a=this.children.length;a>o;o++)if((s=this.children[o])instanceof g||s instanceof c||s instanceof m){if(r.hasOwnProperty(s.name))throw Error("Illegal reflect child of "+this.toString(!0)+": "+s.toString(!0)+" cannot override static property '"+s.name+"'");r[s.name]=s.build();}else if(s instanceof c.Field)s.build(),this._fields.push(s),this._fieldsById[s.id]=s,this._fieldsByName[s.name]=s;else if(!(s instanceof c.OneOf||s instanceof y))throw Error("Illegal reflect child of "+this.toString(!0)+": "+this.children[o].toString(!0));return this.clazz=r},h.encode=function(e,t,n){var i,r,s,o,a,u=null;for(s=0,o=this._fields.length;o>s;++s)r=e[(i=this._fields[s]).name],i.required&&null===r?null===u&&(u=i):i.encode(n?r:i.verifyValue(r),t,e);if(null!==u)throw (a=Error("Missing at least one required field for "+this.toString(!0)+": "+u)).encoded=t,a;return t},h.calculate=function(e){for(var t,n,i=0,r=0,s=this._fields.length;s>r;++r){if(n=e[(t=this._fields[r]).name],t.required&&null===n)throw Error("Missing at least one required field for "+this.toString(!0)+": "+t);i+=t.calculate(n,e);}return i},h.decode=function(e,n,i){var s,o,a,u,c,h,l,d,f,p,g,_;for(n="number"==typeof n?n:-1,c=e.offset,h=new this.clazz;e.offset<c+n||-1===n&&e.remaining()>0;){if(a=(s=e.readVarint32())>>>3,(o=7&s)===t.WIRE_TYPES.ENDGROUP){if(a!==i)throw Error("Illegal group end indicator for "+this.toString(!0)+": "+a+" ("+(i?i+" expected":"not a group")+")");break}if(u=this._fieldsById[a])u.repeated&&!u.options.packed?h[u.name].push(u.decode(o,e)):u.map?(d=u.decode(o,e),h[u.name].set(d[0],d[1])):(h[u.name]=u.decode(o,e),u.oneof&&(null!==(f=h[u.oneof.name])&&f!==u.name&&(h[f]=null),h[u.oneof.name]=u.name));else switch(o){case t.WIRE_TYPES.VARINT:e.readVarint32();break;case t.WIRE_TYPES.BITS32:e.offset+=4;break;case t.WIRE_TYPES.BITS64:e.offset+=8;break;case t.WIRE_TYPES.LDELIM:l=e.readVarint32(),e.offset+=l;break;case t.WIRE_TYPES.STARTGROUP:for(;r(a,e););break;default:throw Error("Illegal wire type for unknown field "+a+" in "+this.toString(!0)+"#decode: "+o)}}for(p=0,g=this._fields.length;g>p;++p)if(null===h[(u=this._fields[p]).name])if("proto3"===this.syntax)h[u.name]=u.defaultValue;else {if(u.required)throw (_=Error("Missing at least one required field for "+this.toString(!0)+": "+u.name)).decoded=h,_;t.populateDefaults&&null!==u.defaultValue&&(h[u.name]=u.defaultValue);}return h},T.Message=c,(d=(l=function(e,n,i,r,s,o,a,u,h,l){I.call(this,e,n,o),this.className="Message.Field",this.required="required"===i,this.repeated="repeated"===i,this.map="map"===i,this.keyType=r||null,this.type=s,this.resolvedType=null,this.id=a,this.options=u||{},this.defaultValue=null,this.oneof=h||null,this.syntax=l||"proto2",this.originalName=this.name,this.element=null,this.keyElement=null,!this.builder.options.convertFieldsToCamelCase||this instanceof c.ExtensionField||(this.name=t.Util.toCamelCase(this.name));}).prototype=Object.create(I.prototype)).build=function(){this.element=new a(this.type,this.resolvedType,!1,this.syntax),this.map&&(this.keyElement=new a(this.keyType,void 0,!0,this.syntax)),"proto3"!==this.syntax||this.repeated||this.map?void 0!==this.options.default&&(this.defaultValue=this.verifyValue(this.options.default)):this.defaultValue=a.defaultFieldValue(this.type);},d.verifyValue=function(e,n){var i,r,s;if(n=n||!1,i=function(e,t){throw Error("Illegal value for "+this.toString(!0)+" of type "+this.type.name+": "+e+" ("+t+")")}.bind(this),null===e)return this.required&&i(typeof e,"required"),"proto3"===this.syntax&&this.type!==t.TYPES.message&&i(typeof e,"proto3 field without field presence cannot be null"),null;if(this.repeated&&!n){for(Array.isArray(e)||(e=[e]),s=[],r=0;r<e.length;r++)s.push(this.element.verifyValue(e[r]));return s}return this.map&&!n?e instanceof t.Map?e:(e instanceof Object||i(typeof e,"expected ProtoBuf.Map or raw object for map field"),new t.Map(this,e)):(!this.repeated&&Array.isArray(e)&&i(typeof e,"no array expected"),this.element.verifyValue(e))},d.hasWirePresence=function(e,n){if("proto3"!==this.syntax)return null!==e;if(this.oneof&&n[this.oneof.name]===this.name)return !0;switch(this.type){case t.TYPES.int32:case t.TYPES.sint32:case t.TYPES.sfixed32:case t.TYPES.uint32:case t.TYPES.fixed32:return 0!==e;case t.TYPES.int64:case t.TYPES.sint64:case t.TYPES.sfixed64:case t.TYPES.uint64:case t.TYPES.fixed64:return 0!==e.low||0!==e.high;case t.TYPES.bool:return e;case t.TYPES.float:case t.TYPES.double:return 0!==e;case t.TYPES.string:return e.length>0;case t.TYPES.bytes:return e.remaining()>0;case t.TYPES.enum:return 0!==e;case t.TYPES.message:return null!==e;default:return !0}},d.encode=function(e,i,r){var s,o,a,u,c;if(null===this.type||"object"!=typeof this.type)throw Error("[INTERNAL] Unresolved type in "+this.toString(!0)+": "+this.type);if(null===e||this.repeated&&0==e.length)return i;try{if(this.repeated)if(this.options.packed&&t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)>=0){for(i.writeVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),i.ensureCapacity(i.offset+=1),o=i.offset,s=0;s<e.length;s++)this.element.encodeValue(this.id,e[s],i);a=i.offset-o,(u=n.calculateVarint32(a))>1&&(c=i.slice(o,i.offset),o+=u-1,i.offset=o,i.append(c)),i.writeVarint32(a,o-u);}else for(s=0;s<e.length;s++)i.writeVarint32(this.id<<3|this.type.wireType),this.element.encodeValue(this.id,e[s],i);else this.map?e.forEach((function(e,r){var s=n.calculateVarint32(8|this.keyType.wireType)+this.keyElement.calculateLength(1,r)+n.calculateVarint32(16|this.type.wireType)+this.element.calculateLength(2,e);i.writeVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),i.writeVarint32(s),i.writeVarint32(8|this.keyType.wireType),this.keyElement.encodeValue(1,r,i),i.writeVarint32(16|this.type.wireType),this.element.encodeValue(2,e,i);}),this):this.hasWirePresence(e,r)&&(i.writeVarint32(this.id<<3|this.type.wireType),this.element.encodeValue(this.id,e,i));}catch(t){throw Error("Illegal value for "+this.toString(!0)+": "+e+" ("+t+")")}return i},d.calculate=function(e,i){var r,s,o;if(e=this.verifyValue(e),null===this.type||"object"!=typeof this.type)throw Error("[INTERNAL] Unresolved type in "+this.toString(!0)+": "+this.type);if(null===e||this.repeated&&0==e.length)return 0;r=0;try{if(this.repeated)if(this.options.packed&&t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)>=0){for(r+=n.calculateVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),o=0,s=0;s<e.length;s++)o+=this.element.calculateLength(this.id,e[s]);r+=n.calculateVarint32(o),r+=o;}else for(s=0;s<e.length;s++)r+=n.calculateVarint32(this.id<<3|this.type.wireType),r+=this.element.calculateLength(this.id,e[s]);else this.map?e.forEach((function(e,i){var s=n.calculateVarint32(8|this.keyType.wireType)+this.keyElement.calculateLength(1,i)+n.calculateVarint32(16|this.type.wireType)+this.element.calculateLength(2,e);r+=n.calculateVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),r+=n.calculateVarint32(s),r+=s;}),this):this.hasWirePresence(e,i)&&(r+=n.calculateVarint32(this.id<<3|this.type.wireType),r+=this.element.calculateLength(this.id,e));}catch(t){throw Error("Illegal value for "+this.toString(!0)+": "+e+" ("+t+")")}return r},d.decode=function(e,n,i){var r,s,o,u,c,h,l;if(!(!this.map&&e==this.type.wireType||!i&&this.repeated&&this.options.packed&&e==t.WIRE_TYPES.LDELIM||this.map&&e==t.WIRE_TYPES.LDELIM))throw Error("Illegal wire type for field "+this.toString(!0)+": "+e+" ("+this.type.wireType+" expected)");if(e==t.WIRE_TYPES.LDELIM&&this.repeated&&this.options.packed&&t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)>=0&&!i){for(s=n.readVarint32(),s=n.offset+s,o=[];n.offset<s;)o.push(this.decode(this.type.wireType,n,!0));return o}if(this.map){if(u=a.defaultFieldValue(this.keyType),r=a.defaultFieldValue(this.type),s=n.readVarint32(),n.remaining()<s)throw Error("Illegal number of bytes for "+this.toString(!0)+": "+s+" required but got only "+n.remaining());for((c=n.clone()).limit=c.offset+s,n.offset+=s;c.remaining()>0;)if(e=7&(h=c.readVarint32()),1==(l=h>>>3))u=this.keyElement.decode(c,e,l);else {if(2!==l)throw Error("Unexpected tag in map field key/value submessage");r=this.element.decode(c,e,l);}return [u,r]}return this.element.decode(n,e,this.id)},T.Message.Field=l,(f=function(e,t,n,i,r,s,o){l.call(this,e,t,n,null,i,r,s,o),this.extension;}).prototype=Object.create(l.prototype),T.Message.ExtensionField=f,p=function(e,t,n){I.call(this,e,t,n),this.fields=[];},T.Message.OneOf=p,(g=function(e,t,n,i,r){s.call(this,e,t,n,i,r),this.className="Enum",this.object=null;}).getName=function(e,t){var n,i,r=Object.keys(e);for(i=0;i<r.length;++i)if(e[n=r[i]]===t)return n;return null},(g.prototype=Object.create(s.prototype)).build=function(e){var n,i,r,s;if(this.object&&!e)return this.object;for(n=new t.Builder.Enum,r=0,s=(i=this.getChildren(g.Value)).length;s>r;++r)n[i[r].name]=i[r].id;return Object.defineProperty&&Object.defineProperty(n,"$options",{value:this.buildOpt(),enumerable:!1}),this.object=n},T.Enum=g,(_=function(e,t,n,i){I.call(this,e,t,n),this.className="Enum.Value",this.id=i;}).prototype=Object.create(I.prototype),T.Enum.Value=_,(y=function(e,t,n,i){I.call(this,e,t,n),this.field=i;}).prototype=Object.create(I.prototype),T.Extension=y,((m=function(e,t,n,i){s.call(this,e,t,n,i),this.className="Service",this.clazz=null;}).prototype=Object.create(s.prototype)).build=function(e){return this.clazz&&!e?this.clazz:this.clazz=function(e,t){var i,r=function(t){e.Builder.Service.call(this),this.rpcImpl=t||function(e,t,n){setTimeout(n.bind(this,Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")),0);};},s=r.prototype=Object.create(e.Builder.Service.prototype),o=t.getChildren(e.Reflect.Service.RPCMethod);for(i=0;i<o.length;i++)!function(e){s[e.name]=function(i,r){try{try{i=e.resolvedRequestType.clazz.decode(n.wrap(i));}catch(e){if(!(e instanceof TypeError))throw e}if(null===i||"object"!=typeof i)throw Error("Illegal arguments");i instanceof e.resolvedRequestType.clazz||(i=new e.resolvedRequestType.clazz(i)),this.rpcImpl(e.fqn(),i,(function(n,i){if(!n){try{i=e.resolvedResponseType.clazz.decode(i);}catch(e){}return i&&i instanceof e.resolvedResponseType.clazz?void r(null,i):void r(Error("Illegal response type received in service method "+t.name+"#"+e.name))}r(n);}));}catch(e){setTimeout(r.bind(this,e),0);}},r[e.name]=function(t,n,i){new r(t)[e.name](n,i);},Object.defineProperty&&(Object.defineProperty(r[e.name],"$options",{value:e.buildOpt()}),Object.defineProperty(s[e.name],"$options",{value:r[e.name].$options}));}(o[i]);return Object.defineProperty&&(Object.defineProperty(r,"$options",{value:t.buildOpt()}),Object.defineProperty(s,"$options",{value:r.$options}),Object.defineProperty(r,"$type",{value:t}),Object.defineProperty(s,"$type",{value:t})),r}(t,this)},T.Service=m,((v=function(e,t,n,i){I.call(this,e,t,n),this.className="Service.Method",this.options=i||{};}).prototype=Object.create(I.prototype)).buildOpt=o.buildOpt,T.Service.Method=v,(E=function(e,t,n,i,r,s,o,a){v.call(this,e,t,n,a),this.className="Service.RPCMethod",this.requestName=i,this.responseName=r,this.requestStream=s,this.responseStream=o,this.resolvedRequestType=null,this.resolvedResponseType=null;}).prototype=Object.create(v.prototype),T.Service.RPCMethod=E,T}(r),r.Builder=function(e,t,n){function i(e){e.messages&&e.messages.forEach((function(t){t.syntax=e.syntax,i(t);})),e.enums&&e.enums.forEach((function(t){t.syntax=e.syntax;}));}var r=function(e){this.ns=new n.Namespace(this,null,""),this.ptr=this.ns,this.resolved=!1,this.result=null,this.files={},this.importRoot=null,this.options=e||{};},s=r.prototype;return r.isMessage=function(e){return "string"==typeof e.name&&void 0===e.values&&void 0===e.rpc},r.isMessageField=function(e){return "string"==typeof e.rule&&"string"==typeof e.name&&"string"==typeof e.type&&void 0!==e.id},r.isEnum=function(e){return "string"==typeof e.name&&!(void 0===e.values||!Array.isArray(e.values)||0===e.values.length)},r.isService=function(e){return !("string"!=typeof e.name||"object"!=typeof e.rpc||!e.rpc)},r.isExtend=function(e){return "string"==typeof e.ref},s.reset=function(){return this.ptr=this.ns,this},s.define=function(e){if("string"!=typeof e||!t.TYPEREF.test(e))throw Error("illegal namespace: "+e);return e.split(".").forEach((function(e){var t=this.ptr.getChild(e);null===t&&this.ptr.addChild(t=new n.Namespace(this,this.ptr,e)),this.ptr=t;}),this),this},s.create=function(t){var i,s,o,a,u;if(!t)return this;if(Array.isArray(t)){if(0===t.length)return this;t=t.slice();}else t=[t];for(i=[t];i.length>0;){if(t=i.pop(),!Array.isArray(t))throw Error("not a valid namespace: "+JSON.stringify(t));for(;t.length>0;){if(s=t.shift(),r.isMessage(s)){if(o=new n.Message(this,this.ptr,s.name,s.options,s.isGroup,s.syntax),a={},s.oneofs&&Object.keys(s.oneofs).forEach((function(e){o.addChild(a[e]=new n.Message.OneOf(this,o,e));}),this),s.fields&&s.fields.forEach((function(e){if(null!==o.getChild(0|e.id))throw Error("duplicate or invalid field id in "+o.name+": "+e.id);if(e.options&&"object"!=typeof e.options)throw Error("illegal field options in "+o.name+"#"+e.name);var t=null;if("string"==typeof e.oneof&&!(t=a[e.oneof]))throw Error("illegal oneof in "+o.name+"#"+e.name+": "+e.oneof);e=new n.Message.Field(this,o,e.rule,e.keytype,e.type,e.name,e.id,e.options,t,s.syntax),t&&t.fields.push(e),o.addChild(e);}),this),u=[],s.enums&&s.enums.forEach((function(e){u.push(e);})),s.messages&&s.messages.forEach((function(e){u.push(e);})),s.services&&s.services.forEach((function(e){u.push(e);})),s.extensions&&(o.extensions="number"==typeof s.extensions[0]?[s.extensions]:s.extensions),this.ptr.addChild(o),u.length>0){i.push(t),t=u,u=null,this.ptr=o,o=null;continue}u=null;}else if(r.isEnum(s))o=new n.Enum(this,this.ptr,s.name,s.options,s.syntax),s.values.forEach((function(e){o.addChild(new n.Enum.Value(this,o,e.name,e.id));}),this),this.ptr.addChild(o);else if(r.isService(s))o=new n.Service(this,this.ptr,s.name,s.options),Object.keys(s.rpc).forEach((function(e){var t=s.rpc[e];o.addChild(new n.Service.RPCMethod(this,o,e,t.request,t.response,!!t.request_stream,!!t.response_stream,t.options));}),this),this.ptr.addChild(o);else {if(!r.isExtend(s))throw Error("not a valid definition: "+JSON.stringify(s));if(o=this.ptr.resolve(s.ref,!0))s.fields.forEach((function(t){var i,r,s,a;if(null!==o.getChild(0|t.id))throw Error("duplicate extended field id in "+o.name+": "+t.id);if(o.extensions&&(i=!1,o.extensions.forEach((function(e){t.id>=e[0]&&t.id<=e[1]&&(i=!0);})),!i))throw Error("illegal extended field id in "+o.name+": "+t.id+" (not within valid ranges)");r=t.name,this.options.convertFieldsToCamelCase&&(r=e.Util.toCamelCase(r)),s=new n.Message.ExtensionField(this,o,t.rule,t.type,this.ptr.fqn()+"."+r,t.id,t.options),a=new n.Extension(this,this.ptr,t.name,s),s.extension=a,this.ptr.addChild(a),o.addChild(s);}),this);else if(!/\.?google\.protobuf\./.test(s.ref))throw Error("extended message "+s.ref+" is not defined")}s=null,o=null;}t=null,this.ptr=this.ptr.parent;}return this.resolved=!1,this.result=null,this},s.import=function(t,n){var r,s,o,a,u,c,h,l,d="/";if("string"==typeof n){if(e.Util.IS_NODE,!0===this.files[n])return this.reset();this.files[n]=!0;}else if("object"==typeof n){if(r=n.root,e.Util.IS_NODE,(r.indexOf("\\")>=0||n.file.indexOf("\\")>=0)&&(d="\\"),s=r+d+n.file,!0===this.files[s])return this.reset();this.files[s]=!0;}if(t.imports&&t.imports.length>0){for(a=!1,"object"==typeof n?(this.importRoot=n.root,a=!0,o=this.importRoot,n=n.file,(o.indexOf("\\")>=0||n.indexOf("\\")>=0)&&(d="\\")):"string"==typeof n?this.importRoot?o=this.importRoot:n.indexOf("/")>=0?""===(o=n.replace(/\/[^\/]*$/,""))&&(o="/"):n.indexOf("\\")>=0?(o=n.replace(/\\[^\\]*$/,""),d="\\"):o=".":o=null,u=0;u<t.imports.length;u++)if("string"==typeof t.imports[u]){if(!o)throw Error("cannot determine import root");if("google/protobuf/descriptor.proto"===(c=t.imports[u]))continue;if(c=o+d+c,!0===this.files[c])continue;if(/\.proto$/i.test(c)&&!e.DotProto&&(c=c.replace(/\.proto$/,".json")),null===(h=e.Util.fetch(c)))throw Error("failed to import '"+c+"' in '"+n+"': file not found");/\.json$/i.test(c)?this.import(JSON.parse(h+""),c):this.import(e.DotProto.Parser.parse(h),c);}else n?/\.(\w+)$/.test(n)?this.import(t.imports[u],n.replace(/^(.+)\.(\w+)$/,(function(e,t,n){return t+"_import"+u+"."+n}))):this.import(t.imports[u],n+"_import"+u):this.import(t.imports[u]);a&&(this.importRoot=null);}return t.package&&this.define(t.package),t.syntax&&i(t),l=this.ptr,t.options&&Object.keys(t.options).forEach((function(e){l.options[e]=t.options[e];})),t.messages&&(this.create(t.messages),this.ptr=l),t.enums&&(this.create(t.enums),this.ptr=l),t.services&&(this.create(t.services),this.ptr=l),t.extends&&this.create(t.extends),this.reset()},s.resolveAll=function(){var i;if(null==this.ptr||"object"==typeof this.ptr.type)return this;if(this.ptr instanceof n.Namespace)this.ptr.children.forEach((function(e){this.ptr=e,this.resolveAll();}),this);else if(this.ptr instanceof n.Message.Field){if(t.TYPE.test(this.ptr.type))this.ptr.type=e.TYPES[this.ptr.type];else {if(!t.TYPEREF.test(this.ptr.type))throw Error("illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.type);if(!(i=(this.ptr instanceof n.Message.ExtensionField?this.ptr.extension.parent:this.ptr.parent).resolve(this.ptr.type,!0)))throw Error("unresolvable type reference in "+this.ptr.toString(!0)+": "+this.ptr.type);if(this.ptr.resolvedType=i,i instanceof n.Enum){if(this.ptr.type=e.TYPES.enum,"proto3"===this.ptr.syntax&&"proto3"!==i.syntax)throw Error("proto3 message cannot reference proto2 enum")}else {if(!(i instanceof n.Message))throw Error("illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.type);this.ptr.type=i.isGroup?e.TYPES.group:e.TYPES.message;}}if(this.ptr.map){if(!t.TYPE.test(this.ptr.keyType))throw Error("illegal key type for map field in "+this.ptr.toString(!0)+": "+this.ptr.keyType);this.ptr.keyType=e.TYPES[this.ptr.keyType];}}else if(this.ptr instanceof e.Reflect.Service.Method){if(!(this.ptr instanceof e.Reflect.Service.RPCMethod))throw Error("illegal service type in "+this.ptr.toString(!0));if(!((i=this.ptr.parent.resolve(this.ptr.requestName,!0))&&i instanceof e.Reflect.Message))throw Error("Illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.requestName);if(this.ptr.resolvedRequestType=i,!((i=this.ptr.parent.resolve(this.ptr.responseName,!0))&&i instanceof e.Reflect.Message))throw Error("Illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.responseName);this.ptr.resolvedResponseType=i;}else if(!(this.ptr instanceof e.Reflect.Message.OneOf||this.ptr instanceof e.Reflect.Extension||this.ptr instanceof e.Reflect.Enum.Value))throw Error("illegal object in namespace: "+typeof this.ptr+": "+this.ptr);return this.reset()},s.build=function(e){var t,n,i;if(this.reset(),this.resolved||(this.resolveAll(),this.resolved=!0,this.result=null),null===this.result&&(this.result=this.ns.build()),!e)return this.result;for(t="string"==typeof e?e.split("."):e,n=this.result,i=0;i<t.length;i++){if(!n[t[i]]){n=null;break}n=n[t[i]];}return n},s.lookup=function(e,t){return e?this.ns.resolve(e,t):this.ns},s.toString=function(){return "Builder"},r.Message=function(){},r.Enum=function(){},r.Service=function(){},r}(r,r.Lang,r.Reflect),r.Map=function(e,t){function n(e){var t=0;return {next:function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}}var i=function(e,n){var i,r,s,o;if(!e.map)throw Error("field is not a map");if(this.field=e,this.keyElem=new t.Element(e.keyType,null,!0,e.syntax),this.valueElem=new t.Element(e.type,e.resolvedType,!1,e.syntax),this.map={},Object.defineProperty(this,"size",{get:function(){return Object.keys(this.map).length}}),n)for(i=Object.keys(n),r=0;r<i.length;r++)s=this.keyElem.valueFromString(i[r]),o=this.valueElem.verifyValue(n[i[r]]),this.map[this.keyElem.valueToString(s)]={key:s,value:o};},r=i.prototype;return r.clear=function(){this.map={};},r.delete=function(e){var t=this.keyElem.valueToString(this.keyElem.verifyValue(e)),n=t in this.map;return delete this.map[t],n},r.entries=function(){var e,t,i=[],r=Object.keys(this.map);for(t=0;t<r.length;t++)i.push([(e=this.map[r[t]]).key,e.value]);return n(i)},r.keys=function(){var e,t=[],i=Object.keys(this.map);for(e=0;e<i.length;e++)t.push(this.map[i[e]].key);return n(t)},r.values=function(){var e,t=[],i=Object.keys(this.map);for(e=0;e<i.length;e++)t.push(this.map[i[e]].value);return n(t)},r.forEach=function(e,t){var n,i,r=Object.keys(this.map);for(i=0;i<r.length;i++)e.call(t,(n=this.map[r[i]]).value,n.key,this);},r.set=function(e,t){var n=this.keyElem.verifyValue(e),i=this.valueElem.verifyValue(t);return this.map[this.keyElem.valueToString(n)]={key:n,value:i},this},r.get=function(e){var t=this.keyElem.valueToString(this.keyElem.verifyValue(e));return t in this.map?this.map[t].value:void 0},r.has=function(e){return this.keyElem.valueToString(this.keyElem.verifyValue(e))in this.map},i}(0,r.Reflect),r.loadProto=function(e,t,n){return ("string"==typeof t||t&&"string"==typeof t.file&&"string"==typeof t.root)&&(n=t,t=void 0),r.loadJson(r.DotProto.Parser.parse(e),t,n)},r.protoFromString=r.loadProto,r.loadProtoFile=function(e,t,n){if(t&&"object"==typeof t?(n=t,t=null):t&&"function"==typeof t||(t=null),t)return r.Util.fetch("string"==typeof e?e:e.root+"/"+e.file,(function(i){if(null!==i)try{t(null,r.loadProto(i,n,e));}catch(e){t(e);}else t(Error("Failed to fetch file"));}));var i=r.Util.fetch("object"==typeof e?e.root+"/"+e.file:e);return null===i?null:r.loadProto(i,n,e)},r.protoFromFile=r.loadProtoFile,r.newBuilder=function(e){return void 0===(e=e||{}).convertFieldsToCamelCase&&(e.convertFieldsToCamelCase=r.convertFieldsToCamelCase),void 0===e.populateAccessors&&(e.populateAccessors=r.populateAccessors),new r.Builder(e)},r.loadJson=function(e,t,n){return ("string"==typeof t||t&&"string"==typeof t.file&&"string"==typeof t.root)&&(n=t,t=null),t&&"object"==typeof t||(t=r.newBuilder()),"string"==typeof e&&(e=JSON.parse(e)),t.import(e,n),t.resolveAll(),t},r.loadJsonFile=function(e,t,n){if(t&&"object"==typeof t?(n=t,t=null):t&&"function"==typeof t||(t=null),t)return r.Util.fetch("string"==typeof e?e:e.root+"/"+e.file,(function(i){if(null!==i)try{t(null,r.loadJson(JSON.parse(i),n,e));}catch(e){t(e);}else t(Error("Failed to fetch file"));}));var i=r.Util.fetch("object"==typeof e?e.root+"/"+e.file:e);return null===i?null:r.loadJson(JSON.parse(i),n,e)},i=Ai,r.loadProto(i,void 0,"").build("Modules").probuf}(function(e){function t(e){var t=0;return function(){return t<e.length?e.charCodeAt(t++):null}}function n(){var e=[],t=[];return function(){return 0===arguments.length?t.join("")+a.apply(String,e):(e.length+arguments.length>1024&&(t.push(a.apply(String,e)),e.length=0),void Array.prototype.push.apply(e,arguments))}}function i(e,t,n,i,r){var s,o,a=8*r-i-1,u=(1<<a)-1,c=u>>1,h=-7,l=n?r-1:0,d=n?-1:1,f=e[t+l];for(l+=d,s=f&(1<<-h)-1,f>>=-h,h+=a;h>0;s=256*s+e[t+l],l+=d,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=i;h>0;o=256*o+e[t+l],l+=d,h-=8);if(0===s)s=1-c;else {if(s===u)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=c;}return (f?-1:1)*o*Math.pow(2,s-i)}function r(e,t,n,i,r,s){var o,a,u,c=8*s-r-1,h=(1<<c)-1,l=h>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||1/0===t?(a=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-o))<1&&(o--,u*=2),(t+=o+l>=1?d/u:d*Math.pow(2,1-l))*u>=2&&(o++,u/=2),o+l>=h?(a=0,o=h):o+l>=1?(a=(t*u-1)*Math.pow(2,r),o+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,r),o=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*g;}var s,o,a,u,c,h=function(e,t,n){if(void 0===e&&(e=h.DEFAULT_CAPACITY),void 0===t&&(t=h.DEFAULT_ENDIAN),void 0===n&&(n=h.DEFAULT_NOASSERT),!n){if((e|=0)<0)throw RangeError("Illegal capacity");t=!!t,n=!!n;}this.buffer=0===e?o:new ArrayBuffer(e),this.view=0===e?null:new Uint8Array(this.buffer),this.offset=0,this.markedOffset=-1,this.limit=e,this.littleEndian=t,this.noAssert=n;};return h.VERSION="5.0.1",h.LITTLE_ENDIAN=!0,h.BIG_ENDIAN=!1,h.DEFAULT_CAPACITY=16,h.DEFAULT_ENDIAN=h.BIG_ENDIAN,h.DEFAULT_NOASSERT=!1,h.Long=e||null,(s=h.prototype).__isByteBuffer__,Object.defineProperty(s,"__isByteBuffer__",{value:!0,enumerable:!1,configurable:!1}),o=new ArrayBuffer(0),a=String.fromCharCode,h.accessor=function(){return Uint8Array},h.allocate=function(e,t,n){return new h(e,t,n)},h.concat=function(e,t,n,i){var r,s,o,a,u,c;for(("boolean"==typeof t||"string"!=typeof t)&&(i=n,n=t,t=void 0),r=0,o=0,a=e.length;a>o;++o)h.isByteBuffer(e[o])||(e[o]=h.wrap(e[o],t)),(s=e[o].limit-e[o].offset)>0&&(r+=s);if(0===r)return new h(0,n,i);for(c=new h(r,n,i),o=0;a>o;)(s=(u=e[o++]).limit-u.offset)<=0||(c.view.set(u.view.subarray(u.offset,u.limit),c.offset),c.offset+=s);return c.limit=c.offset,c.offset=0,c},h.isByteBuffer=function(e){return !0===(e&&e.__isByteBuffer__)},h.type=function(){return ArrayBuffer},h.wrap=function(e,t,n,i){var r,o;if("string"!=typeof t&&(i=n,n=t,t=void 0),"string"==typeof e)switch(void 0===t&&(t="utf8"),t){case"base64":return h.fromBase64(e,n);case"hex":return h.fromHex(e,n);case"binary":return h.fromBinary(e,n);case"utf8":return h.fromUTF8(e,n);case"debug":return h.fromDebug(e,n);default:throw Error("Unsupported encoding: "+t)}if(null===e||"object"!=typeof e)throw TypeError("Illegal buffer");if(h.isByteBuffer(e))return (r=s.clone.call(e)).markedOffset=-1,r;if(e instanceof Uint8Array)r=new h(0,n,i),e.length>0&&(r.buffer=e.buffer,r.offset=e.byteOffset,r.limit=e.byteOffset+e.byteLength,r.view=new Uint8Array(e.buffer));else if(e instanceof ArrayBuffer)r=new h(0,n,i),e.byteLength>0&&(r.buffer=e,r.offset=0,r.limit=e.byteLength,r.view=e.byteLength>0?new Uint8Array(e):null);else {if("[object Array]"!==Object.prototype.toString.call(e))throw TypeError("Illegal buffer");for((r=new h(e.length,n,i)).limit=e.length,o=0;o<e.length;++o)r.view[o]=e[o];}return r},s.writeBitSet=function(e,t){var n,i,r,s,o,a,u=void 0===t;if(u&&(t=this.offset),!this.noAssert){if(!(e instanceof Array))throw TypeError("Illegal BitSet: Not an array");if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}for(i=t,s=(r=e.length)>>3,o=0,t+=this.writeVarint32(r,t);s--;)n=1&!!e[o++]|(1&!!e[o++])<<1|(1&!!e[o++])<<2|(1&!!e[o++])<<3|(1&!!e[o++])<<4|(1&!!e[o++])<<5|(1&!!e[o++])<<6|(1&!!e[o++])<<7,this.writeByte(n,t++);if(r>o){for(a=0,n=0;r>o;)n|=(1&!!e[o++])<<a++;this.writeByte(n,t++);}return u?(this.offset=t,this):t-i},s.readBitSet=function(e){var t,n,i,r,s,o,a,u=void 0===e;for(u&&(e=this.offset),r=(i=(n=this.readVarint32(e)).value)>>3,s=0,o=[],e+=n.length;r--;)t=this.readByte(e++),o[s++]=!!(1&t),o[s++]=!!(2&t),o[s++]=!!(4&t),o[s++]=!!(8&t),o[s++]=!!(16&t),o[s++]=!!(32&t),o[s++]=!!(64&t),o[s++]=!!(128&t);if(i>s)for(a=0,t=this.readByte(e++);i>s;)o[s++]=!!(1&t>>a++);return u&&(this.offset=e),o},s.readBytes=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+e>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+"+e+") <= "+this.buffer.byteLength)}return n=this.slice(t,t+e),i&&(this.offset+=e),n},s.writeBytes=s.append,s.writeInt8=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return (t+=1)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=1,this.view[t]=e,i&&(this.offset+=1),this},s.writeByte=s.writeInt8,s.readInt8=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}return 128==(128&(t=this.view[e]))&&(t=-(255-t+1)),n&&(this.offset+=1),t},s.readByte=s.readInt8,s.writeUint8=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return (t+=1)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=1,this.view[t]=e,i&&(this.offset+=1),this},s.writeUInt8=s.writeUint8,s.readUint8=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}return t=this.view[e],n&&(this.offset+=1),t},s.readUInt8=s.readUint8,s.writeInt16=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return (t+=2)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=2,this.littleEndian?(this.view[t+1]=(65280&e)>>>8,this.view[t]=255&e):(this.view[t]=(65280&e)>>>8,this.view[t+1]=255&e),i&&(this.offset+=2),this},s.writeShort=s.writeInt16,s.readInt16=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+2>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+2) <= "+this.buffer.byteLength)}return t=0,this.littleEndian?(t=this.view[e],t|=this.view[e+1]<<8):(t=this.view[e]<<8,t|=this.view[e+1]),32768==(32768&t)&&(t=-(65535-t+1)),n&&(this.offset+=2),t},s.readShort=s.readInt16,s.writeUint16=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return (t+=2)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=2,this.littleEndian?(this.view[t+1]=(65280&e)>>>8,this.view[t]=255&e):(this.view[t]=(65280&e)>>>8,this.view[t+1]=255&e),i&&(this.offset+=2),this},s.writeUInt16=s.writeUint16,s.readUint16=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+2>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+2) <= "+this.buffer.byteLength)}return t=0,this.littleEndian?(t=this.view[e],t|=this.view[e+1]<<8):(t=this.view[e]<<8,t|=this.view[e+1]),n&&(this.offset+=2),t},s.readUInt16=s.readUint16,s.writeInt32=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return (t+=4)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=4,this.littleEndian?(this.view[t+3]=255&e>>>24,this.view[t+2]=255&e>>>16,this.view[t+1]=255&e>>>8,this.view[t]=255&e):(this.view[t]=255&e>>>24,this.view[t+1]=255&e>>>16,this.view[t+2]=255&e>>>8,this.view[t+3]=255&e),i&&(this.offset+=4),this},s.writeInt=s.writeInt32,s.readInt32=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)}return t=0,this.littleEndian?(t=this.view[e+2]<<16,t|=this.view[e+1]<<8,t|=this.view[e],t+=this.view[e+3]<<24>>>0):(t=this.view[e+1]<<16,t|=this.view[e+2]<<8,t|=this.view[e+3],t+=this.view[e]<<24>>>0),t|=0,n&&(this.offset+=4),t},s.readInt=s.readInt32,s.writeUint32=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return (t+=4)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=4,this.littleEndian?(this.view[t+3]=255&e>>>24,this.view[t+2]=255&e>>>16,this.view[t+1]=255&e>>>8,this.view[t]=255&e):(this.view[t]=255&e>>>24,this.view[t+1]=255&e>>>16,this.view[t+2]=255&e>>>8,this.view[t+3]=255&e),i&&(this.offset+=4),this},s.writeUInt32=s.writeUint32,s.readUint32=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)}return t=0,this.littleEndian?(t=this.view[e+2]<<16,t|=this.view[e+1]<<8,t|=this.view[e],t+=this.view[e+3]<<24>>>0):(t=this.view[e+1]<<16,t|=this.view[e+2]<<8,t|=this.view[e+3],t+=this.view[e]<<24>>>0),n&&(this.offset+=4),t},s.readUInt32=s.readUint32,e&&(s.writeInt64=function(t,n){var i,r,s,o=void 0===n;if(o&&(n=this.offset),!this.noAssert){if("number"==typeof t)t=e.fromNumber(t);else if("string"==typeof t)t=e.fromString(t);else if(!(t&&t instanceof e))throw TypeError("Illegal value: "+t+" (not an integer or Long)");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}return "number"==typeof t?t=e.fromNumber(t):"string"==typeof t&&(t=e.fromString(t)),(n+=8)>(i=this.buffer.byteLength)&&this.resize((i*=2)>n?i:n),n-=8,r=t.low,s=t.high,this.littleEndian?(this.view[n+3]=255&r>>>24,this.view[n+2]=255&r>>>16,this.view[n+1]=255&r>>>8,this.view[n]=255&r,n+=4,this.view[n+3]=255&s>>>24,this.view[n+2]=255&s>>>16,this.view[n+1]=255&s>>>8,this.view[n]=255&s):(this.view[n]=255&s>>>24,this.view[n+1]=255&s>>>16,this.view[n+2]=255&s>>>8,this.view[n+3]=255&s,n+=4,this.view[n]=255&r>>>24,this.view[n+1]=255&r>>>16,this.view[n+2]=255&r>>>8,this.view[n+3]=255&r),o&&(this.offset+=8),this},s.writeLong=s.writeInt64,s.readInt64=function(t){var n,i,r,s=void 0===t;if(s&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+8>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+8) <= "+this.buffer.byteLength)}return n=0,i=0,this.littleEndian?(n=this.view[t+2]<<16,n|=this.view[t+1]<<8,n|=this.view[t],n+=this.view[t+3]<<24>>>0,t+=4,i=this.view[t+2]<<16,i|=this.view[t+1]<<8,i|=this.view[t],i+=this.view[t+3]<<24>>>0):(i=this.view[t+1]<<16,i|=this.view[t+2]<<8,i|=this.view[t+3],i+=this.view[t]<<24>>>0,t+=4,n=this.view[t+1]<<16,n|=this.view[t+2]<<8,n|=this.view[t+3],n+=this.view[t]<<24>>>0),r=new e(n,i,!1),s&&(this.offset+=8),r},s.readLong=s.readInt64,s.writeUint64=function(t,n){var i,r,s,o=void 0===n;if(o&&(n=this.offset),!this.noAssert){if("number"==typeof t)t=e.fromNumber(t);else if("string"==typeof t)t=e.fromString(t);else if(!(t&&t instanceof e))throw TypeError("Illegal value: "+t+" (not an integer or Long)");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}return "number"==typeof t?t=e.fromNumber(t):"string"==typeof t&&(t=e.fromString(t)),(n+=8)>(i=this.buffer.byteLength)&&this.resize((i*=2)>n?i:n),n-=8,r=t.low,s=t.high,this.littleEndian?(this.view[n+3]=255&r>>>24,this.view[n+2]=255&r>>>16,this.view[n+1]=255&r>>>8,this.view[n]=255&r,n+=4,this.view[n+3]=255&s>>>24,this.view[n+2]=255&s>>>16,this.view[n+1]=255&s>>>8,this.view[n]=255&s):(this.view[n]=255&s>>>24,this.view[n+1]=255&s>>>16,this.view[n+2]=255&s>>>8,this.view[n+3]=255&s,n+=4,this.view[n]=255&r>>>24,this.view[n+1]=255&r>>>16,this.view[n+2]=255&r>>>8,this.view[n+3]=255&r),o&&(this.offset+=8),this},s.writeUInt64=s.writeUint64,s.readUint64=function(t){var n,i,r,s=void 0===t;if(s&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+8>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+8) <= "+this.buffer.byteLength)}return n=0,i=0,this.littleEndian?(n=this.view[t+2]<<16,n|=this.view[t+1]<<8,n|=this.view[t],n+=this.view[t+3]<<24>>>0,t+=4,i=this.view[t+2]<<16,i|=this.view[t+1]<<8,i|=this.view[t],i+=this.view[t+3]<<24>>>0):(i=this.view[t+1]<<16,i|=this.view[t+2]<<8,i|=this.view[t+3],i+=this.view[t]<<24>>>0,t+=4,n=this.view[t+1]<<16,n|=this.view[t+2]<<8,n|=this.view[t+3],n+=this.view[t]<<24>>>0),r=new e(n,i,!0),s&&(this.offset+=8),r},s.readUInt64=s.readUint64),s.writeFloat32=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e)throw TypeError("Illegal value: "+e+" (not a number)");if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return (t+=4)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=4,r(this.view,e,t,this.littleEndian,23,4),i&&(this.offset+=4),this},s.writeFloat=s.writeFloat32,s.readFloat32=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)}return t=i(this.view,e,this.littleEndian,23,4),n&&(this.offset+=4),t},s.readFloat=s.readFloat32,s.writeFloat64=function(e,t){var n,i=void 0===t;if(i&&(t=this.offset),!this.noAssert){if("number"!=typeof e)throw TypeError("Illegal value: "+e+" (not a number)");if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return (t+=8)>(n=this.buffer.byteLength)&&this.resize((n*=2)>t?n:t),t-=8,r(this.view,e,t,this.littleEndian,52,8),i&&(this.offset+=8),this},s.writeDouble=s.writeFloat64,s.readFloat64=function(e){var t,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+8>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+8) <= "+this.buffer.byteLength)}return t=i(this.view,e,this.littleEndian,52,8),n&&(this.offset+=8),t},s.readDouble=s.readFloat64,h.MAX_VARINT32_BYTES=5,h.calculateVarint32=function(e){return (e>>>=0)<128?1:e<16384?2:1<<21>e?3:1<<28>e?4:5},h.zigZagEncode32=function(e){return ((e|=0)<<1^e>>31)>>>0},h.zigZagDecode32=function(e){return 0|e>>>1^-(1&e)},s.writeVarint32=function(e,t){var n,i,r,s=void 0===t;if(s&&(t=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}for((t+=i=h.calculateVarint32(e))>(r=this.buffer.byteLength)&&this.resize((r*=2)>t?r:t),t-=i,e>>>=0;e>=128;)n=128|127&e,this.view[t++]=n,e>>>=7;return this.view[t++]=e,s?(this.offset=t,this):i},s.writeVarint32ZigZag=function(e,t){return this.writeVarint32(h.zigZagEncode32(e),t)},s.readVarint32=function(e){var t,n,i,r,s=void 0===e;if(s&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}n=0,i=0;do{if(!this.noAssert&&e>this.limit)throw (r=Error("Truncated")).truncated=!0,r;t=this.view[e++],n<5&&(i|=(127&t)<<7*n),++n;}while(0!=(128&t));return i|=0,s?(this.offset=e,i):{value:i,length:n}},s.readVarint32ZigZag=function(e){var t=this.readVarint32(e);return "object"==typeof t?t.value=h.zigZagDecode32(t.value):t=h.zigZagDecode32(t),t},e&&(h.MAX_VARINT64_BYTES=10,h.calculateVarint64=function(t){"number"==typeof t?t=e.fromNumber(t):"string"==typeof t&&(t=e.fromString(t));var n=t.toInt()>>>0,i=t.shiftRightUnsigned(28).toInt()>>>0,r=t.shiftRightUnsigned(56).toInt()>>>0;return 0==r?0==i?n<16384?n<128?1:2:1<<21>n?3:4:i<16384?i<128?5:6:1<<21>i?7:8:r<128?9:10},h.zigZagEncode64=function(t){return "number"==typeof t?t=e.fromNumber(t,!1):"string"==typeof t?t=e.fromString(t,!1):!1!==t.unsigned&&(t=t.toSigned()),t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned()},h.zigZagDecode64=function(t){return "number"==typeof t?t=e.fromNumber(t,!1):"string"==typeof t?t=e.fromString(t,!1):!1!==t.unsigned&&(t=t.toSigned()),t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned()},s.writeVarint64=function(t,n){var i,r,s,o,a,u=void 0===n;if(u&&(n=this.offset),!this.noAssert){if("number"==typeof t)t=e.fromNumber(t);else if("string"==typeof t)t=e.fromString(t);else if(!(t&&t instanceof e))throw TypeError("Illegal value: "+t+" (not an integer or Long)");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}switch("number"==typeof t?t=e.fromNumber(t,!1):"string"==typeof t?t=e.fromString(t,!1):!1!==t.unsigned&&(t=t.toSigned()),i=h.calculateVarint64(t),r=t.toInt()>>>0,s=t.shiftRightUnsigned(28).toInt()>>>0,o=t.shiftRightUnsigned(56).toInt()>>>0,(n+=i)>(a=this.buffer.byteLength)&&this.resize((a*=2)>n?a:n),n-=i,i){case 10:this.view[n+9]=1&o>>>7;case 9:this.view[n+8]=9!==i?128|o:127&o;case 8:this.view[n+7]=8!==i?128|s>>>21:127&s>>>21;case 7:this.view[n+6]=7!==i?128|s>>>14:127&s>>>14;case 6:this.view[n+5]=6!==i?128|s>>>7:127&s>>>7;case 5:this.view[n+4]=5!==i?128|s:127&s;case 4:this.view[n+3]=4!==i?128|r>>>21:127&r>>>21;case 3:this.view[n+2]=3!==i?128|r>>>14:127&r>>>14;case 2:this.view[n+1]=2!==i?128|r>>>7:127&r>>>7;case 1:this.view[n]=1!==i?128|r:127&r;}return u?(this.offset+=i,this):i},s.writeVarint64ZigZag=function(e,t){return this.writeVarint64(h.zigZagEncode64(e),t)},s.readVarint64=function(t){var n,i,r,s,o,a,u=void 0===t;if(u&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+1) <= "+this.buffer.byteLength)}if(n=t,i=0,r=0,s=0,o=0,i=127&(o=this.view[t++]),128&o&&(i|=(127&(o=this.view[t++]))<<7,(128&o||this.noAssert&&void 0===o)&&(i|=(127&(o=this.view[t++]))<<14,(128&o||this.noAssert&&void 0===o)&&(i|=(127&(o=this.view[t++]))<<21,(128&o||this.noAssert&&void 0===o)&&(r=127&(o=this.view[t++]),(128&o||this.noAssert&&void 0===o)&&(r|=(127&(o=this.view[t++]))<<7,(128&o||this.noAssert&&void 0===o)&&(r|=(127&(o=this.view[t++]))<<14,(128&o||this.noAssert&&void 0===o)&&(r|=(127&(o=this.view[t++]))<<21,(128&o||this.noAssert&&void 0===o)&&(s=127&(o=this.view[t++]),(128&o||this.noAssert&&void 0===o)&&(s|=(127&(o=this.view[t++]))<<7,128&o||this.noAssert&&void 0===o))))))))))throw Error("Buffer overrun");return a=e.fromBits(i|r<<28,r>>>4|s<<24,!1),u?(this.offset=t,a):{value:a,length:t-n}},s.readVarint64ZigZag=function(t){var n=this.readVarint64(t);return n&&n.value instanceof e?n.value=h.zigZagDecode64(n.value):n=h.zigZagDecode64(n),n}),s.writeCString=function(e,n){var i,r,s,o=void 0===n;if(o&&(n=this.offset),r=e.length,!this.noAssert){if("string"!=typeof e)throw TypeError("Illegal str: Not a string");for(i=0;r>i;++i)if(0===e.charCodeAt(i))throw RangeError("Illegal str: Contains NULL-characters");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}return r=c.calculateUTF16asUTF8(t(e))[1],n+=r+1,s=this.buffer.byteLength,n>s&&this.resize((s*=2)>n?s:n),n-=r+1,c.encodeUTF16toUTF8(t(e),function(e){this.view[n++]=e;}.bind(this)),this.view[n++]=0,o?(this.offset=n,this):r},s.readCString=function(e){var t,i,r,s=void 0===e;if(s&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}return t=e,r=-1,c.decodeUTF8toUTF16(function(){if(0===r)return null;if(e>=this.limit)throw RangeError("Illegal range: Truncated data, "+e+" < "+this.limit);return 0===(r=this.view[e++])?null:r}.bind(this),i=n(),!0),s?(this.offset=e,i()):{string:i(),length:e-t}},s.writeIString=function(e,n){var i,r,s,o=void 0===n;if(o&&(n=this.offset),!this.noAssert){if("string"!=typeof e)throw TypeError("Illegal str: Not a string");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}if(r=n,i=c.calculateUTF16asUTF8(t(e),this.noAssert)[1],n+=4+i,s=this.buffer.byteLength,n>s&&this.resize((s*=2)>n?s:n),n-=4+i,this.littleEndian?(this.view[n+3]=255&i>>>24,this.view[n+2]=255&i>>>16,this.view[n+1]=255&i>>>8,this.view[n]=255&i):(this.view[n]=255&i>>>24,this.view[n+1]=255&i>>>16,this.view[n+2]=255&i>>>8,this.view[n+3]=255&i),n+=4,c.encodeUTF16toUTF8(t(e),function(e){this.view[n++]=e;}.bind(this)),n!==r+4+i)throw RangeError("Illegal range: Truncated data, "+n+" == "+(n+4+i));return o?(this.offset=n,this):n-r},s.readIString=function(e){var t,n,i,r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)}return t=e,n=this.readUint32(e),i=this.readUTF8String(n,h.METRICS_BYTES,e+=4),e+=i.length,r?(this.offset=e,i.string):{string:i.string,length:e-t}},h.METRICS_CHARS="c",h.METRICS_BYTES="b",s.writeUTF8String=function(e,n){var i,r,s,o=void 0===n;if(o&&(n=this.offset),!this.noAssert){if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}return r=n,i=c.calculateUTF16asUTF8(t(e))[1],n+=i,s=this.buffer.byteLength,n>s&&this.resize((s*=2)>n?s:n),n-=i,c.encodeUTF16toUTF8(t(e),function(e){this.view[n++]=e;}.bind(this)),o?(this.offset=n,this):n-r},s.writeString=s.writeUTF8String,h.calculateUTF8Chars=function(e){return c.calculateUTF16asUTF8(t(e))[0]},h.calculateUTF8Bytes=function(e){return c.calculateUTF16asUTF8(t(e))[1]},h.calculateString=h.calculateUTF8Bytes,s.readUTF8String=function(e,t,i){var r,s,o,a,u;if("number"==typeof t&&(i=t,t=void 0),(r=void 0===i)&&(i=this.offset),void 0===t&&(t=h.METRICS_CHARS),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal length: "+e+" (not an integer)");if(e|=0,"number"!=typeof i||i%1!=0)throw TypeError("Illegal offset: "+i+" (not an integer)");if((i>>>=0)<0||i+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+i+" (+0) <= "+this.buffer.byteLength)}if(o=0,a=i,t===h.METRICS_CHARS){if(s=n(),c.decodeUTF8(function(){return e>o&&i<this.limit?this.view[i++]:null}.bind(this),(function(e){++o,c.UTF8toUTF16(e,s);})),o!==e)throw RangeError("Illegal range: Truncated data, "+o+" == "+e);return r?(this.offset=i,s()):{string:s(),length:i-a}}if(t===h.METRICS_BYTES){if(!this.noAssert){if("number"!=typeof i||i%1!=0)throw TypeError("Illegal offset: "+i+" (not an integer)");if((i>>>=0)<0||i+e>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+i+" (+"+e+") <= "+this.buffer.byteLength)}if(u=i+e,c.decodeUTF8toUTF16(function(){return u>i?this.view[i++]:null}.bind(this),s=n(),this.noAssert),i!==u)throw RangeError("Illegal range: Truncated data, "+i+" == "+u);return r?(this.offset=i,s()):{string:s(),length:i-a}}throw TypeError("Unsupported metrics: "+t)},s.readString=s.readUTF8String,s.writeVString=function(e,n){var i,r,s,o,a=void 0===n;if(a&&(n=this.offset),!this.noAssert){if("string"!=typeof e)throw TypeError("Illegal str: Not a string");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}if(s=n,i=c.calculateUTF16asUTF8(t(e),this.noAssert)[1],r=h.calculateVarint32(i),n+=r+i,o=this.buffer.byteLength,n>o&&this.resize((o*=2)>n?o:n),n-=r+i,n+=this.writeVarint32(i,n),c.encodeUTF16toUTF8(t(e),function(e){this.view[n++]=e;}.bind(this)),n!==s+i+r)throw RangeError("Illegal range: Truncated data, "+n+" == "+(n+i+r));return a?(this.offset=n,this):n-s},s.readVString=function(e){var t,n,i,r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}return t=e,n=this.readVarint32(e),i=this.readUTF8String(n.value,h.METRICS_BYTES,e+=n.length),e+=i.length,r?(this.offset=e,i.string):{string:i.string,length:e-t}},s.append=function(e,t,n){var i,r,s;if(("number"==typeof t||"string"!=typeof t)&&(n=t,t=void 0),(i=void 0===n)&&(n=this.offset),!this.noAssert){if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}return e instanceof h||(e=h.wrap(e,t)),(r=e.limit-e.offset)<=0||((n+=r)>(s=this.buffer.byteLength)&&this.resize((s*=2)>n?s:n),n-=r,this.view.set(e.view.subarray(e.offset,e.limit),n),e.offset+=r,i&&(this.offset+=r)),this},s.appendTo=function(e,t){return e.append(this,t),this},s.assert=function(e){return this.noAssert=!e,this},s.capacity=function(){return this.buffer.byteLength},s.clear=function(){return this.offset=0,this.limit=this.buffer.byteLength,this.markedOffset=-1,this},s.clone=function(e){var t=new h(0,this.littleEndian,this.noAssert);return e?(t.buffer=new ArrayBuffer(this.buffer.byteLength),t.view=new Uint8Array(t.buffer)):(t.buffer=this.buffer,t.view=this.view),t.offset=this.offset,t.markedOffset=this.markedOffset,t.limit=this.limit,t},s.compact=function(e,t){var n,i,r;if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}return 0===e&&t===this.buffer.byteLength?this:0==(n=t-e)?(this.buffer=o,this.view=null,this.markedOffset>=0&&(this.markedOffset-=e),this.offset=0,this.limit=0,this):(i=new ArrayBuffer(n),(r=new Uint8Array(i)).set(this.view.subarray(e,t)),this.buffer=i,this.view=r,this.markedOffset>=0&&(this.markedOffset-=e),this.offset=0,this.limit=n,this)},s.copy=function(e,t){if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}if(e===t)return new h(0,this.littleEndian,this.noAssert);var n=t-e,i=new h(n,this.littleEndian,this.noAssert);return i.offset=0,i.limit=n,i.markedOffset>=0&&(i.markedOffset-=e),this.copyTo(i,0,e,t),i},s.copyTo=function(e,t,n,i){var r,s,o;if(!this.noAssert&&!h.isByteBuffer(e))throw TypeError("Illegal target: Not a ByteBuffer");if(t=(s=void 0===t)?e.offset:0|t,n=(r=void 0===n)?this.offset:0|n,i=void 0===i?this.limit:0|i,t<0||t>e.buffer.byteLength)throw RangeError("Illegal target range: 0 <= "+t+" <= "+e.buffer.byteLength);if(n<0||i>this.buffer.byteLength)throw RangeError("Illegal source range: 0 <= "+n+" <= "+this.buffer.byteLength);return 0==(o=i-n)?e:(e.ensureCapacity(t+o),e.view.set(this.view.subarray(n,i),t),r&&(this.offset+=o),s&&(e.offset+=o),this)},s.ensureCapacity=function(e){var t=this.buffer.byteLength;return e>t?this.resize((t*=2)>e?t:e):this},s.fill=function(e,t,n){var i=void 0===t;if(i&&(t=this.offset),"string"==typeof e&&e.length>0&&(e=e.charCodeAt(0)),void 0===t&&(t=this.offset),void 0===n&&(n=this.limit),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal value: "+e+" (not an integer)");if(e|=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal begin: Not an integer");if(t>>>=0,"number"!=typeof n||n%1!=0)throw TypeError("Illegal end: Not an integer");if(n>>>=0,t<0||t>n||n>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+t+" <= "+n+" <= "+this.buffer.byteLength)}if(t>=n)return this;for(;n>t;)this.view[t++]=e;return i&&(this.offset=t),this},s.flip=function(){return this.limit=this.offset,this.offset=0,this},s.mark=function(e){if(e=void 0===e?this.offset:e,!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}return this.markedOffset=e,this},s.order=function(e){if(!this.noAssert&&"boolean"!=typeof e)throw TypeError("Illegal littleEndian: Not a boolean");return this.littleEndian=!!e,this},s.LE=function(e){return this.littleEndian=void 0===e||!!e,this},s.BE=function(e){return this.littleEndian=void 0!==e&&!e,this},s.prepend=function(e,t,n){var i,r,s,o,a;if(("number"==typeof t||"string"!=typeof t)&&(n=t,t=void 0),(i=void 0===n)&&(n=this.offset),!this.noAssert){if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}return e instanceof h||(e=h.wrap(e,t)),(r=e.limit-e.offset)<=0||((s=r-n)>0?(o=new ArrayBuffer(this.buffer.byteLength+s),(a=new Uint8Array(o)).set(this.view.subarray(n,this.buffer.byteLength),r),this.buffer=o,this.view=a,this.offset+=s,this.markedOffset>=0&&(this.markedOffset+=s),this.limit+=s,n+=s):new Uint8Array(this.buffer),this.view.set(e.view.subarray(e.offset,e.limit),n-r),e.offset=e.limit,i&&(this.offset-=r)),this},s.prependTo=function(e,t){return e.prepend(this,t),this},s.printDebug=function(e){"function"!=typeof e&&(e=console.log.bind(console)),e(this.toString()+"\n-------------------------------------------------------------------\n"+this.toDebug(!0));},s.remaining=function(){return this.limit-this.offset},s.reset=function(){return this.markedOffset>=0?(this.offset=this.markedOffset,this.markedOffset=-1):this.offset=0,this},s.resize=function(e){var t,n;if(!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal capacity: "+e+" (not an integer)");if((e|=0)<0)throw RangeError("Illegal capacity: 0 <= "+e)}return this.buffer.byteLength<e&&(t=new ArrayBuffer(e),(n=new Uint8Array(t)).set(this.view),this.buffer=t,this.view=n),this},s.reverse=function(e,t){if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}return e===t||Array.prototype.reverse.call(this.view.subarray(e,t)),this},s.skip=function(e){if(!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal length: "+e+" (not an integer)");e|=0;}var t=this.offset+e;if(!this.noAssert&&(t<0||t>this.buffer.byteLength))throw RangeError("Illegal length: 0 <= "+this.offset+" + "+e+" <= "+this.buffer.byteLength);return this.offset=t,this},s.slice=function(e,t){if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}var n=this.clone();return n.offset=e,n.limit=t,n},s.toBuffer=function(e){var t,n=this.offset,i=this.limit;if(!this.noAssert){if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: Not an integer");if(n>>>=0,"number"!=typeof i||i%1!=0)throw TypeError("Illegal limit: Not an integer");if(i>>>=0,n<0||n>i||i>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+n+" <= "+i+" <= "+this.buffer.byteLength)}return e||0!==n||i!==this.buffer.byteLength?n===i?o:(t=new ArrayBuffer(i-n),new Uint8Array(t).set(new Uint8Array(this.buffer).subarray(n,i),0),t):this.buffer},s.toArrayBuffer=s.toBuffer,s.toString=function(e,t,n){if(void 0===e)return "ByteBufferAB(offset="+this.offset+",markedOffset="+this.markedOffset+",limit="+this.limit+",capacity="+this.capacity()+")";switch("number"==typeof e&&(n=t=e="utf8"),e){case"utf8":return this.toUTF8(t,n);case"base64":return this.toBase64(t,n);case"hex":return this.toHex(t,n);case"binary":return this.toBinary(t,n);case"debug":return this.toDebug();case"columns":return this.toColumns();default:throw Error("Unsupported encoding: "+e)}},u=function(){var e,t,n={},i=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47],r=[];for(e=0,t=i.length;t>e;++e)r[i[e]]=e;return n.encode=function(e,t){for(var n,r;null!==(n=e());)t(i[63&n>>2]),r=(3&n)<<4,null!==(n=e())?(t(i[63&((r|=15&n>>4)|15&n>>4)]),r=(15&n)<<2,null!==(n=e())?(t(i[63&(r|3&n>>6)]),t(i[63&n])):(t(i[63&r]),t(61))):(t(i[63&r]),t(61),t(61));},n.decode=function(e,t){function n(e){throw Error("Illegal character code: "+e)}for(var i,s,o;null!==(i=e());)if(void 0===(s=r[i])&&n(i),null!==(i=e())&&(void 0===(o=r[i])&&n(i),t(s<<2>>>0|(48&o)>>4),null!==(i=e()))){if(void 0===(s=r[i])){if(61===i)break;n(i);}if(t((15&o)<<4>>>0|(60&s)>>2),null!==(i=e())){if(void 0===(o=r[i])){if(61===i)break;n(i);}t((3&s)<<6>>>0|o);}}},n.test=function(e){return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)},n}(),s.toBase64=function(e,t){if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),t|=0,(e|=0)<0||t>this.capacity||e>t)throw RangeError("begin, end");var i;return u.encode(function(){return t>e?this.view[e++]:null}.bind(this),i=n()),i()},h.fromBase64=function(e,n){if("string"!=typeof e)throw TypeError("str");var i=new h(e.length/4*3,n),r=0;return u.decode(t(e),(function(e){i.view[r++]=e;})),i.limit=r,i},h.btoa=function(e){return h.fromBinary(e).toBase64()},h.atob=function(e){return h.fromBase64(e).toBinary()},s.toBinary=function(e,t){if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),t|=0,(e|=0)<0||t>this.capacity()||e>t)throw RangeError("begin, end");if(e===t)return "";for(var n=[],i=[];t>e;)n.push(this.view[e++]),n.length>=1024&&(i.push(String.fromCharCode.apply(String,n)),n=[]);return i.join("")+String.fromCharCode.apply(String,n)},h.fromBinary=function(e,t){if("string"!=typeof e)throw TypeError("str");for(var n,i=0,r=e.length,s=new h(r,t);r>i;){if((n=e.charCodeAt(i))>255)throw RangeError("illegal char code: "+n);s.view[i++]=n;}return s.limit=r,s},s.toDebug=function(e){for(var t,n=-1,i=this.buffer.byteLength,r="",s="",o="";i>n;){if(-1!==n&&(r+=(t=this.view[n])<16?"0"+t.toString(16).toUpperCase():t.toString(16).toUpperCase(),e&&(s+=t>32&&t<127?String.fromCharCode(t):".")),++n,e&&n>0&&n%16==0&&n!==i){for(;r.length<51;)r+=" ";o+=r+s+"\n",r=s="";}r+=n===this.offset&&n===this.limit?n===this.markedOffset?"!":"|":n===this.offset?n===this.markedOffset?"[":"<":n===this.limit?n===this.markedOffset?"]":">":n===this.markedOffset?"'":e||0!==n&&n!==i?" ":"";}if(e&&" "!==r){for(;r.length<51;)r+=" ";o+=r+s+"\n";}return e?o:r},h.fromDebug=function(e,t,n){for(var i,r,s=e.length,o=new h(0|(s+1)/3,t,n),a=0,u=0,c=!1,l=!1,d=!1,f=!1,p=!1;s>a;){switch(i=e.charAt(a++)){case"!":if(!n){if(l||d||f){p=!0;break}l=d=f=!0;}o.offset=o.markedOffset=o.limit=u,c=!1;break;case"|":if(!n){if(l||f){p=!0;break}l=f=!0;}o.offset=o.limit=u,c=!1;break;case"[":if(!n){if(l||d){p=!0;break}l=d=!0;}o.offset=o.markedOffset=u,c=!1;break;case"<":if(!n){if(l){p=!0;break}l=!0;}o.offset=u,c=!1;break;case"]":if(!n){if(f||d){p=!0;break}f=d=!0;}o.limit=o.markedOffset=u,c=!1;break;case">":if(!n){if(f){p=!0;break}f=!0;}o.limit=u,c=!1;break;case"'":if(!n){if(d){p=!0;break}d=!0;}o.markedOffset=u,c=!1;break;case" ":c=!1;break;default:if(!n&&c){p=!0;break}if(r=parseInt(i+e.charAt(a++),16),!n&&(isNaN(r)||r<0||r>255))throw TypeError("Illegal str: Not a debug encoded string");o.view[u++]=r,c=!0;}if(p)throw TypeError("Illegal str: Invalid symbol at "+a)}if(!n){if(!l||!f)throw TypeError("Illegal str: Missing offset or limit");if(u<o.buffer.byteLength)throw TypeError("Illegal str: Not a debug encoded string (is it hex?) "+u+" < "+s)}return o},s.toHex=function(e,t){if(e=void 0===e?this.offset:e,t=void 0===t?this.limit:t,!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}for(var n,i=new Array(t-e);t>e;)(n=this.view[e++])<16?i.push("0",n.toString(16)):i.push(n.toString(16));return i.join("")},h.fromHex=function(e,t,n){var i,r,s,o,a;if(!n){if("string"!=typeof e)throw TypeError("Illegal str: Not a string");if(e.length%2!=0)throw TypeError("Illegal str: Length not a multiple of 2")}for(r=e.length,s=new h(0|r/2,t),o=0,a=0;r>o;o+=2){if(i=parseInt(e.substring(o,o+2),16),!n&&(!isFinite(i)||i<0||i>255))throw TypeError("Illegal str: Contains non-hex characters");s.view[a++]=i;}return s.limit=a,s},c=function(){var e={MAX_CODEPOINT:1114111,encodeUTF8:function(e,t){var n=null;for("number"==typeof e&&(n=e,e=function(){return null});null!==n||null!==(n=e());)n<128?t(127&n):n<2048?(t(192|31&n>>6),t(128|63&n)):n<65536?(t(224|15&n>>12),t(128|63&n>>6),t(128|63&n)):(t(240|7&n>>18),t(128|63&n>>12),t(128|63&n>>6),t(128|63&n)),n=null;},decodeUTF8:function(e,t){for(var n,i,r,s,o=function(e){e=e.slice(0,e.indexOf(null));var t=Error(e.toString());throw t.name="TruncatedError",t.bytes=e,t};null!==(n=e());)if(0==(128&n))t(n);else if(192==(224&n))null===(i=e())&&o([n,i]),t((31&n)<<6|63&i);else if(224==(240&n))(null===(i=e())||null===(r=e()))&&o([n,i,r]),t((15&n)<<12|(63&i)<<6|63&r);else {if(240!=(248&n))throw RangeError("Illegal starting byte: "+n);(null===(i=e())||null===(r=e())||null===(s=e()))&&o([n,i,r,s]),t((7&n)<<18|(63&i)<<12|(63&r)<<6|63&s);}},UTF16toUTF8:function(e,t){for(var n,i=null;null!==(n=null!==i?i:e());)n>=55296&&n<=57343&&null!==(i=e())&&i>=56320&&i<=57343?(t(1024*(n-55296)+i-56320+65536),i=null):t(n);null!==i&&t(i);},UTF8toUTF16:function(e,t){var n=null;for("number"==typeof e&&(n=e,e=function(){return null});null!==n||null!==(n=e());)n<=65535?t(n):(t(55296+((n-=65536)>>10)),t(n%1024+56320)),n=null;},encodeUTF16toUTF8:function(t,n){e.UTF16toUTF8(t,(function(t){e.encodeUTF8(t,n);}));},decodeUTF8toUTF16:function(t,n){e.decodeUTF8(t,(function(t){e.UTF8toUTF16(t,n);}));},calculateCodePoint:function(e){return e<128?1:e<2048?2:e<65536?3:4},calculateUTF8:function(e){for(var t,n=0;null!==(t=e());)n+=t<128?1:t<2048?2:t<65536?3:4;return n},calculateUTF16asUTF8:function(t){var n=0,i=0;return e.UTF16toUTF8(t,(function(e){++n,i+=e<128?1:e<2048?2:e<65536?3:4;})),[n,i]}};return e}(),s.toUTF8=function(e,t){if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof t||t%1!=0)throw TypeError("Illegal end: Not an integer");if(t>>>=0,e<0||e>t||t>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)}var i;try{c.decodeUTF8toUTF16(function(){return t>e?this.view[e++]:null}.bind(this),i=n());}catch(n){if(e!==t)throw RangeError("Illegal range: Truncated data, "+e+" != "+t)}return i()},h.fromUTF8=function(e,n,i){if(!i&&"string"!=typeof e)throw TypeError("Illegal str: Not a string");var r=new h(c.calculateUTF16asUTF8(t(e),!0)[1],n,i),s=0;return c.encodeUTF16toUTF8(t(e),(function(e){r.view[s++]=e;})),r.limit=s,r},h}(Ui=function(){function e(e,t,n){this.low=0|e,this.high=0|t,this.unsigned=!!n;}function t(e){return !0===(e&&e.__isLong__)}function n(e,t){var n,i,s;return t?(s=(e>>>=0)>=0&&e<256)&&(i=u[e])?i:(n=r(e,(0|e)<0?-1:0,!0),s&&(u[e]=n),n):(s=(e|=0)>=-128&&e<128)&&(i=a[e])?i:(n=r(e,e<0?-1:0,!1),s&&(a[e]=n),n)}function i(e,t){if(isNaN(e)||!isFinite(e))return t?g:p;if(t){if(e<0)return g;if(e>=l)return E}else {if(-d>=e)return T;if(e+1>=d)return v}return e<0?i(-e,t).neg():r(0|e%h,0|e/h,t)}function r(t,n,i){return new e(t,n,i)}function s(e,t,n){var r,o,a,u,h,l,d;if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return p;if("number"==typeof t?(n=t,t=!1):t=!!t,(n=n||10)<2||n>36)throw RangeError("radix");if((r=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===r)return s(e.substring(1),t,n).neg();for(o=i(c(n,8)),a=p,u=0;u<e.length;u+=8)h=Math.min(8,e.length-u),l=parseInt(e.substring(u,u+h),n),h<8?(d=i(c(n,h)),a=a.mul(d).add(i(l))):a=(a=a.mul(o)).add(i(l));return a.unsigned=t,a}function o(t){return t instanceof e?t:"number"==typeof t?i(t):"string"==typeof t?s(t):r(t.low,t.high,t.unsigned)}var a,u,c,h,l,d,f,p,g,_,y,m,v,E,T,I;return e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1}),e.isLong=t,a={},u={},e.fromInt=n,e.fromNumber=i,e.fromBits=r,c=Math.pow,e.fromString=s,e.fromValue=o,d=(l=(h=4294967296)*h)/2,f=n(16777216),p=n(0),e.ZERO=p,g=n(0,!0),e.UZERO=g,_=n(1),e.ONE=_,y=n(1,!0),e.UONE=y,m=n(-1),e.NEG_ONE=m,v=r(-1,2147483647,!1),e.MAX_VALUE=v,E=r(-1,-1,!0),e.MAX_UNSIGNED_VALUE=E,T=r(0,-2147483648,!1),e.MIN_VALUE=T,(I=e.prototype).toInt=function(){return this.unsigned?this.low>>>0:this.low},I.toNumber=function(){return this.unsigned?(this.high>>>0)*h+(this.low>>>0):this.high*h+(this.low>>>0)},I.toString=function(e){var t,n,r,s,o,a,u,h;if((e=e||10)<2||e>36)throw RangeError("radix");if(this.isZero())return "0";if(this.isNegative())return this.eq(T)?(t=i(e),r=(n=this.div(t)).mul(t).sub(this),n.toString(e)+r.toInt().toString(e)):"-"+this.neg().toString(e);for(s=i(c(e,6),this.unsigned),o=this,a="";;){if(u=o.div(s),h=(o.sub(u.mul(s)).toInt()>>>0).toString(e),(o=u).isZero())return h+a;for(;h.length<6;)h="0"+h;a=""+h+a;}},I.getHighBits=function(){return this.high},I.getHighBitsUnsigned=function(){return this.high>>>0},I.getLowBits=function(){return this.low},I.getLowBitsUnsigned=function(){return this.low>>>0},I.getNumBitsAbs=function(){var e,t;if(this.isNegative())return this.eq(T)?64:this.neg().getNumBitsAbs();for(e=0!=this.high?this.high:this.low,t=31;t>0&&0==(e&1<<t);t--);return 0!=this.high?t+33:t+1},I.isZero=function(){return 0===this.high&&0===this.low},I.isNegative=function(){return !this.unsigned&&this.high<0},I.isPositive=function(){return this.unsigned||this.high>=0},I.isOdd=function(){return 1==(1&this.low)},I.isEven=function(){return 0==(1&this.low)},I.equals=function(e){return t(e)||(e=o(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&this.high===e.high&&this.low===e.low},I.eq=I.equals,I.notEquals=function(e){return !this.eq(e)},I.neq=I.notEquals,I.lessThan=function(e){return this.comp(e)<0},I.lt=I.lessThan,I.lessThanOrEqual=function(e){return this.comp(e)<=0},I.lte=I.lessThanOrEqual,I.greaterThan=function(e){return this.comp(e)>0},I.gt=I.greaterThan,I.greaterThanOrEqual=function(e){return this.comp(e)>=0},I.gte=I.greaterThanOrEqual,I.compare=function(e){if(t(e)||(e=o(e)),this.eq(e))return 0;var n=this.isNegative(),i=e.isNegative();return n&&!i?-1:!n&&i?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},I.comp=I.compare,I.negate=function(){return !this.unsigned&&this.eq(T)?T:this.not().add(_)},I.neg=I.negate,I.add=function(e){var n,i,s,a,u,c,h,l,d,f,p;return t(e)||(e=o(e)),n=this.high>>>16,i=65535&this.high,s=this.low>>>16,a=65535&this.low,u=e.high>>>16,c=65535&e.high,h=e.low>>>16,l=0,d=0,f=0,p=0,f+=(p+=a+(65535&e.low))>>>16,d+=(f+=s+h)>>>16,l+=(d+=i+c)>>>16,l+=n+u,r((f&=65535)<<16|(p&=65535),(l&=65535)<<16|(d&=65535),this.unsigned)},I.subtract=function(e){return t(e)||(e=o(e)),this.add(e.neg())},I.sub=I.subtract,I.multiply=function(e){var n,s,a,u,c,h,l,d,g,_,y,m;return this.isZero()?p:(t(e)||(e=o(e)),e.isZero()?p:this.eq(T)?e.isOdd()?T:p:e.eq(T)?this.isOdd()?T:p:this.isNegative()?e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg():e.isNegative()?this.mul(e.neg()).neg():this.lt(f)&&e.lt(f)?i(this.toNumber()*e.toNumber(),this.unsigned):(n=this.high>>>16,s=65535&this.high,a=this.low>>>16,u=65535&this.low,c=e.high>>>16,h=65535&e.high,l=e.low>>>16,g=0,_=0,y=0,m=0,y+=(m+=u*(d=65535&e.low))>>>16,_+=(y+=a*d)>>>16,y&=65535,_+=(y+=u*l)>>>16,g+=(_+=s*d)>>>16,_&=65535,g+=(_+=a*l)>>>16,_&=65535,g+=(_+=u*h)>>>16,g+=n*d+s*l+a*h+u*c,r((y&=65535)<<16|(m&=65535),(g&=65535)<<16|(_&=65535),this.unsigned)))},I.mul=I.multiply,I.divide=function(e){var n,r,s,a,u,h,l;if(t(e)||(e=o(e)),e.isZero())throw Error("division by zero");if(this.isZero())return this.unsigned?g:p;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return g;if(e.gt(this.shru(1)))return y;s=g;}else {if(this.eq(T))return e.eq(_)||e.eq(m)?T:e.eq(T)?_:(n=this.shr(1).div(e).shl(1)).eq(p)?e.isNegative()?_:m:(r=this.sub(e.mul(n)),s=n.add(r.div(e)));if(e.eq(T))return this.unsigned?g:p;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();s=p;}for(r=this;r.gte(e);){for(n=Math.max(1,Math.floor(r.toNumber()/e.toNumber())),u=(a=Math.ceil(Math.log(n)/Math.LN2))<=48?1:c(2,a-48),l=(h=i(n)).mul(e);l.isNegative()||l.gt(r);)l=(h=i(n-=u,this.unsigned)).mul(e);h.isZero()&&(h=_),s=s.add(h),r=r.sub(l);}return s},I.div=I.divide,I.modulo=function(e){return t(e)||(e=o(e)),this.sub(this.div(e).mul(e))},I.mod=I.modulo,I.not=function(){return r(~this.low,~this.high,this.unsigned)},I.and=function(e){return t(e)||(e=o(e)),r(this.low&e.low,this.high&e.high,this.unsigned)},I.or=function(e){return t(e)||(e=o(e)),r(this.low|e.low,this.high|e.high,this.unsigned)},I.xor=function(e){return t(e)||(e=o(e)),r(this.low^e.low,this.high^e.high,this.unsigned)},I.shiftLeft=function(e){return t(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?r(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):r(0,this.low<<e-32,this.unsigned)},I.shl=I.shiftLeft,I.shiftRight=function(e){return t(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?r(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):r(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},I.shr=I.shiftRight,I.shiftRightUnsigned=function(e){var n;return t(e)&&(e=e.toInt()),0==(e&=63)?this:(n=this.high,e<32?r(this.low>>>e|n<<32-e,n>>>e,this.unsigned):r(32===e?n:n>>>e-32,0,this.unsigned))},I.shru=I.shiftRightUnsigned,I.toSigned=function(){return this.unsigned?r(this.low,this.high,!1):this},I.toUnsigned=function(){return this.unsigned?this:r(this.low,this.high,!0)},I.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},I.toBytesLE=function(){var e=this.high,t=this.low;return [255&t,255&t>>>8,255&t>>>16,255&t>>>24,255&e,255&e>>>8,255&e>>>16,255&e>>>24]},I.toBytesBE=function(){var e=this.high,t=this.low;return [255&e>>>24,255&e>>>16,255&e>>>8,255&e,255&t>>>24,255&t>>>16,255&t>>>8,255&t]},e}()),Ui));Di.getModule=function(e){var t=new Di[e];return t.getArrayData=function(){var e=t.toArrayBuffer();return e=$(e)?[].slice.call(new Int8Array(e)):e},t};var Vi,ki="pgMsgP",xi="chatMsg",Bi="pcMsgP",Gi={PRIVATE:"ppMsgS",GROUP:"pgMsgS",CHATROOM:"chatMsgS"},Fi="delMsg",qi="joinChrm",Ki="joinChrmR",Hi="exitChrm",Yi="setKV",ji="delKV",Qi="setKVS",Wi="delKVS",Ji="qryRelationR",zi="delRelation",Zi="setSeAtt",Xi={PRIVATE:"cleanPMsg",GROUP:"cleanGMsg",ULTRA_GROUP:"cleanGMsg",CUSTOMER_SERVICE:"cleanCMsg",SYSTEM:"cleanSMsg"},$i="qryPMsg",er="qryGMsg",tr="qryCHMsg",nr="qryCMsg",ir="qrySMsg",rr=((bi={})["ppMsgP"]=j.PRIVATE,bi[ki]=j.GROUP,bi[xi]=j.CHATROOM,bi[Bi]=j.CUSTOMER_SERVICE,bi),sr=((Li={})[j.PRIVATE]=$i,Li[j.GROUP]=er,Li[j.CHATROOM]=tr,Li[j.CUSTOMER_SERVICE]=nr,Li[j.SYSTEM]=ir,Li),or=((Pi={})[j.PRIVATE]=Xi.PRIVATE,Pi[j.GROUP]=Xi.GROUP,Pi[j.ULTRA_GROUP]=Xi.ULTRA_GROUP,Pi[j.CUSTOMER_SERVICE]=Xi.CUSTOMER_SERVICE,Pi[j.SYSTEM]=Xi.SYSTEM,Pi),ar="1",ur="0",cr=1,hr=2,lr=3,dr=function(){function e(e){this._codec="websocket"===e?Di:Ni,this._connectType=e;}return e.prototype.decodeByPBName=function(e,t,n){var i,r=this,s=e,o=((i={})[Pt]=r._formatSyncMessages,i[Lt]=r._formatReceivedMessage,i[Ut]=r._formatSentMessage,i[Ft]=r._formatHistoryMessages,i[Kt]=r._formatConversationList,i[en]=r._formatChatRoomInfos,i[nn]=r._formatRTCUserList,i[ln]=r._formatRTCData,i[Mn]=r._formatChatRoomKVList,i[Vn]=r._formatUserSetting,i[Bn]=r._formatConversationStatus,i[jn]=r._formatGrpReadReceiptQryResp,i[Pn]=r._formatSetUserSettingOutput,i[kn]=r._formatUserSettingNotification,i[si]=r._formatUltraMsgChangeList,i[hi]=r._formatUltraOperateStatusNotifyList,i[ui]=r._formatUltraMsgList,i[Xt]=r._formatChrmKVVersion,i[gi]=r._formatRTCRoomKVList,i[hn]=r._formatRTCAuidenceJoinRoomData,i[yi]=r._formatRTCJoinedUserInfo,i)[t];try{s=e.length>0&&r._codec[t].decode(e),ne(s)&&(s=function(e){for(var t in e)ne(e[t])&&(e[t]=st(e[t]));return e}(s)),ie(o)&&(s=o.call(this,s,n));}catch(n){ge.error("PB parse error\n",n,e,t);}return s},e.prototype._readBytes=function(e){var t=e.offset,n=e.buffer,i=e.limit;if(t)try{var r=$(n)?new Uint8Array(n):n;return Mt.readUTF(r.subarray(t,i))}catch(e){ge.info("readBytes error\n",e);}return e},e.prototype._formatBytes=function(e){if(!e)return e;var t=this._readBytes(e);try{t=JSON.parse(t);}catch(e){ge.info("formatBytes error\n",e);}return t||e},e.prototype._formatSyncMessages=function(e,t){t=t||{};var n=this,i=e.list,r=e.syncTime,s=e.finished;return (re(s)||null===s)&&(e.finished=!0),e.syncTime=st(r),e.list=ft(i,(function(e){return n._formatReceivedMessage(e,t)})),e},e.prototype._formatReceivedMessage=function(e,t){if(!e)return e;var n=(t=t||{}).currentUserId,r=t.connectedTime,s=e.content,o=e.fromUserId,a=e.type,u=e.groupId,c=e.status,h=e.dataTime,l=e.classname,d=e.msgId,f=e.extraContent,p=e.pushContent,g=e.pushExt,_=e.configFlag,y=e.extStatus,m=(e.direction||me.RECEIVE)===me.SEND,v=function(e){var t=i.READ;return {isPersited:!!(16&e),isCounted:!!(32&e),isMentioned:!!(64&e),disableNotification:!!(512&e),receivedStatus:t=2&e?i.RETRIEVED:t,canIncludeExpansion:!!(1024&e)}}(c),E=v.isPersited,T=v.isCounted,I=v.isMentioned,C=v.disableNotification,R=v.receivedStatus,S=v.canIncludeExpansion,N=!!(2&(y||0)),M=!!(4&(y||0)),w=[j.GROUP,j.CHATROOM,j.RTC_ROOM,j.ULTRA_GROUP].indexOf(a)>-1?u:o,A=m?n:o,U=st(h),b=U<r,L=a===j.CHATROOM,P=this._formatBytes(s),D={};if(g&&(D=ct(g.pushConfigs,g.pushId)),P.user){var V=P.user,k=V.portrait,x=V.portraitUri,B=k||x;B&&(P.user.portrait=P.user.portraitUri=B);}var G,F=O(O({},D),{pushTitle:null==g?void 0:g.title,pushContent:p,pushData:p,disablePushTitle:!!_&&Boolean(4&_),forceShowDetailContent:!!_&&Boolean(8&_),templateId:null==g?void 0:g.templateId}),q=m?me.SEND:me.RECEIVE;L&&o===n&&(q=me.SEND),f&&(G={},G=Ct(f));var K={conversationType:a,targetId:w,senderUserId:A,messageType:l,messageUId:d,isPersited:E,isCounted:T,isMentioned:I,sentTime:U,messageDirection:q,receivedTime:Rt.getTime(),disableNotification:C,receivedStatus:R,canIncludeExpansion:S,content:P,expansion:G,configFlag:_,pushConfig:F,channelId:e.busChannel||"",isInterrupt:N,isModifyMessage:M};return a!==j.ULTRA_GROUP&&(K.isOffLineMessage=b),K},e.prototype._formatSentMessage=function(e,t){var n,i=e.content,r=e.classname,s=e.sessionId,o=e.msgId,a=e.extraContent,u=e.pushExt,c=e.pushContent,h=e.configFlag,l=e.extStatus,d=t.signal,f=t.currentUserId,p=d.date,g=d.topic,_=d.targetId,y=!!(2&(l||0)),m=function(e){return {isPersited:!!(1&e),isCounted:!!(2&e),disableNotification:!!(32&e),canIncludeExpansion:!!(64&e)}}(s),v=m.isPersited,E=m.isCounted,T=m.disableNotification,I=m.canIncludeExpansion,C=rr[g]||j.PRIVATE,R=_t(Gi,g),S=this._formatBytes(i),N=_;r===Se.RECALL&&(C=S.conversationType||C,N=S.targetId||_),a&&(n={},n=Ct(a));var M={};u&&(M=ct(u.pushConfigs,u.pushId));var w=O(O({},M),{pushTitle:null==u?void 0:u.title,pushContent:c,pushData:c,disablePushTitle:!!h&&Boolean(4&h),forceShowDetailContent:!!h&&Boolean(8&h),templateId:null==u?void 0:u.templateId});return {conversationType:C,targetId:N,messageType:r,messageUId:o,isPersited:v,isCounted:E,isStatusMessage:R,senderUserId:f,content:this._formatBytes(i),sentTime:1e3*p,receivedTime:Rt.getTime(),messageDirection:me.SEND,isOffLineMessage:!1,disableNotification:T,canIncludeExpansion:I,expansion:n,pushConfig:w,channelId:e.busChannel||"",isInterrupt:y}},e.prototype._formatHistoryMessages=function(e,t){var n=this,i=t.conversation||{},r=e.list,s=e.hasMsg,o=i.targetId,a=st(e.syncTime),u=[];return dt(r,(function(e){var r=n._formatReceivedMessage(e,t);i.conversationType===j.ULTRA_GROUP?r.targetId=e.groupId||i.targetId:r.targetId=o,u.push(r);}),{isReverse:!0}),{syncTime:a,list:u,hasMore:!!s}},e.prototype._formatUltraMsgChangeList=function(e){var t=e.list,n=e.syncTime,i=e.hasNext;return {syncTime:n,list:t&&t.map((function(e){var t=e.targetId,n=e.type,i=e.time,r=e.changeType,s=e.msgUID,o=e.msgTime,a=e.busChannel,u=e.isAdmin,c=e.isDel,h=e.operatorId;return {targetId:t,conversationType:n,changeType:r,messageUId:s,changeTime:st(i),sendTime:st(o),channelId:a,isAdmin:u,isDel:c,operatorId:h}})),hasNext:i}},e.prototype._formatUltraOperateStatusNotifyList=function(e){var t=e.type,n=e.notifyType,i=e.info,r=e.summary,s=[],o=[],a=2==(2&n),u=1==(1&n);return u&&Array.isArray(i)&&i.forEach((function(e){var t=e.targetId,n=e.busChannel,i=e.userId,r=e.opType,o=e.optime,a=st(o);s.push({targetId:t,channelId:n,userId:i,operationType:r,operationTime:a});})),a&&Array.isArray(r)&&r.forEach((function(e){var t=e.targetId,n=e.busChannel,i=e.count,r=e.opType;o.push({targetId:t,channelId:n,count:i,operationType:r});})),{conversationType:t,info:s,summary:o,hasInfo:u,hasSummary:a}},e.prototype._formatUltraMsgList=function(e,t){var n=this,i=e.list;return {list:i&&i.map((function(e){return n._formatReceivedMessage(e,t)}))}},e.prototype._formatConversationList=function(e,t){var n=this,i=e.info,r=t.afterDecode||function(){},s={list:(i=ft(i,(function(e){var i=e.msg,s=e.userId,o=e.type,a=e.unreadCount,u=e.busChannel,c=e.versionTime,h=e.remindCount,l=null;i&&((l=n._formatReceivedMessage(i,t)).targetId=s);var d={targetId:s,conversationType:o,unreadMessageCount:st(a)||0,latestMessage:l||{},channelId:u||""};return o===j.ULTRA_GROUP&&(d.versionTime=st(c)||0,d.unreadMentionedCount=st(h)||0),r(d)||d})))||[]};return ((null==t?void 0:t.conversationType)||j.NONE)===j.ULTRA_GROUP&&(s.isFinished=e.isFinished),s},e.prototype._formatSetUserSettingOutput=function(e){return e},e.prototype._formatChatRoomInfos=function(e){var t=e.userTotalNums,n=e.userInfos;return {userCount:t,userInfos:ft(n,(function(e){var t=e.id,n=e.time;return {id:t,time:st(n)}}))}},e.prototype._formatChatRoomKVList=function(e){var t=e.entries,n=e.bFullUpdate,i=e.syncTime;return {kvEntries:t=ft(t=t||[],(function(e){var t=e.key,n=e.value,i=e.status,r=e.timestamp,s=e.uid,o=e.version,a=function(e){return {isAutoDelete:!!(1&e),isOverwrite:!!(2&e),type:4&e?Le.DELETE:Le.UPDATE}}(i);return {key:t,value:n,isAutoDelete:a.isAutoDelete,isOverwrite:a.isOverwrite,type:a.type,userId:s,timestamp:st(r),version:st(o)}})),isFullUpdate:n,syncTime:i}},e.prototype._formatUserSetting=function(e){var t=this,n=e.items,i=e.version,r={};return dt(n||[],(function(e){var n=e.key,i=e.version,s=e.value;e.version=st(i),e.value=t._readBytes(s),"Tag"===n&&e.tags.forEach((function(e){e.createdTime=st(e.createdTime),e.tagName=e.name;})),r[n]=e;})),{settings:r,version:i}},e.prototype._formatConversationStatus=function(e){var t=e.state,n=[];return dt(t,(function(e){var t=e.type,i=e.channelId,r=e.time,s=e.stateItem,o=e.busChannel,a=Oe.CLOSE,u=!1,c=[];dt(s,(function(e){var t=e.sessionStateType,n=e.value,i=e.tags;switch(t){case cr:a=n===ar?Oe.OPEN:Oe.CLOSE;break;case hr:u=n===ar;break;case lr:c=i;}})),n.push({conversationType:t,type:t,targetId:i,notificationStatus:a,isTop:u,updatedTime:st(r),tags:c,channelId:o||""});})),n},e.prototype._formatRTCUserList=function(e){var t=e.users,n=e.token,i=e.sessionId,r=e.roomInfo,s=e.entries,o={};return dt(t,(function(e){var t=e.userId,n=e.userData,i={};dt(n,(function(e){var t=e.key,n=e.value;i[t]=n;})),o[t]=i;})),{users:o,token:n,sessionId:i,roomInfo:r,kvEntries:s}},e.prototype._formatRTCData=function(e){var t=e.outInfo,n={};return dt(t,(function(e){n[e.key]=e.value;})),n},e.prototype._formatRTCRoomInfo=function(e){var t=e.roomId,n=e.userCount,i=e.roomData,r={id:t,total:n};return dt(i,(function(e){r[e.key]=e.value;})),r},e.prototype._formatGrpReadReceiptQryResp=function(e){var t=e.totalMemberNum,n=e.list;return n.forEach((function(e){e.readTime=st(e.readTime);})),{totalMemberCount:t,list:n}},e.prototype._formatUserSettingNotification=function(e){return e},e.prototype._formatRTCRoomKVList=function(e){var t=e.entries,n=e.bFullUpdate,i=e.syncTime;return {kvEntries:t=(t=t||[]).map((function(e){var t=e.timestamp;return Object.assign(e,{timestamp:st(t)})})),isFullUpdate:n,syncTime:i}},e.prototype._formatChrmKVVersion=function(e){return e},e.prototype._formatRTCAuidenceJoinRoomData=function(e){return e},e.prototype._formatRTCJoinedUserInfo=function(e){return (e.info||[]).map((function(e){return {deviceId:e.deviceId,roomId:e.roomId,joinTime:st(e.joinTime)}}))},e.prototype.encodeServerConfParams=function(){var e=this._codec.getModule(Dt);return e.setNothing(1),e.getArrayData()},e.prototype._getUpMsgModule=function(e,t){var n,i,r,s="comet"===this._connectType,o=e.conversationType,a=t.messageType,u=t.isMentioned,c=t.mentionedType,h=t.mentionedUserIdList,l=t.content,d=t.pushContent,f=t.pushData,p=t.directionalUserIdList,g=t.isFilerWhiteBlacklist,_=t.isVoipPush,y=t.canIncludeExpansion,m=t.expansion,v=t.pushConfig,E=t.channelId;[j.GROUP,j.ULTRA_GROUP].includes(o);var T=this._codec.getModule(Ut),I=function(e){var t=e.isStatusMessage,n=e.isPersited,i=e.isCounted;t&&(n=i=!1);var r=0;return n&&(r|=1),i&&(r|=2),e.isMentioned&&(r|=4),e.disableNotification&&(r|=32),e.canIncludeExpansion&&(r|=64),r}(t),C=v||{},R=C.pushTitle,S=C.pushContent,N=C.pushData,O=C.iOSConfig,M=C.androidConfig,w=C.templateId,A=C.disablePushTitle,U=C.forceShowDetailContent,b=0;T.setSessionId(I),u&&l&&(l.mentionedInfo={userIdList:(null===(n=l.mentionedInfo)||void 0===n?void 0:n.userIdList)||h||[],type:(null===(i=l.mentionedInfo)||void 0===i?void 0:i.type)||c||we.ALL,mentionedContent:(null===(r=l.mentionedInfo)||void 0===r?void 0:r.mentionedContent)||""});var L=S||d||"",P=N||f||"";if(L&&T.setPushText(L),P&&T.setAppData(P),p&&T.setUserId(p),b|=_?1:0,b|=g?2:0,b|=A?4:0,b|=U?8:0,T.setConfigFlag(b),T.setClassname(a),l.user&&l.user.portraitUri&&(l.user.portrait=l.user.portraitUri),T.setContent(JSON.stringify(l)),y&&m){var D={};dt(m,(function(e,t){D[t]={v:e};})),T.setExtraContent(JSON.stringify(D));}if(v){var V=this._codec.getModule(bt);if(R&&V.setTitle(R),O&&M){var k=ut(O,M);V.setPushConfigs(k);}(null==M?void 0:M.notificationId)&&V.setPushId(null==M?void 0:M.notificationId),V.setTemplateId(w||""),T.setPushExt(s?V.getArrayData():V);}return re(E)||T.setBusChannel(E),T},e.prototype.encodeUpMsg=function(e,t){return this._getUpMsgModule(e,t).getArrayData()},e.prototype.encodeSyncMsg=function(e){var t=e.sendboxTime,n=e.inboxTime,i=e.broadcastSyncTime,r=this._codec.getModule(kt);return r.setIspolling(!1),r.setIsPullSend(!0),r.setSendBoxSyncTime(t),r.setSyncTime(n),r.setBroadcastSyncTime(i),r.getArrayData()},e.prototype.encodeChrmSyncMsg=function(e,t){e=e||0,t=t||0;var n=this._codec.getModule(xt);return n.setCount(t),n.setSyncTime(e),n.getArrayData()},e.prototype.encodeGetHistoryMsg=function(e,t){var n=t.count,i=t.order,r=t.timestamp,s=t.channelId,o=this._codec.getModule(Gt);return o.setTargetId(e),o.setTime(r),o.setCount(n),o.setOrder(i),o.setBusChannel(s||""),o.getArrayData()},e.prototype.encodeSuperSyncMsg=function(e){var t=this._codec.getModule(ti);return t.setSyncTime(e),t.getArrayData()},e.prototype.encodeGetConversationList=function(e){var t=(e=e||{}).count,n=e.startTime,i=this._codec.getModule(qt);return i.setType(1),i.setCount(t),i.setStartTime(n),i.getArrayData()},e.prototype.encodeOldConversationList=function(e){var t=(e=e||{}).count,n=e.type,i=e.startTime,r=e.order;t=t||0,i=i||0,r=r||0;var s=this._codec.getModule(qt);return s.setType(n),s.setCount(t),s.setStartTime(i),s.setOrder(r),s.getArrayData()},e.prototype.encodeRemoveOldConversationList=function(e){var t=(e=e||{}).conversationType,n=e.channelId,i=this._codec.getModule(Qt);return i.setType(t),n&&i.setBusChannel([n]),i.getArrayData()},e.prototype.encodeRemoveConversationList=function(e){var t=this,n=this._codec.getModule(Ht),i=[];return dt(e,(function(e){var n=e.conversationType,r=e.targetId,s=t._codec.getModule(Yt);s.setType(n),s.setChannelId(r),i.push(s);})),n.setSessions(i),n.getArrayData()},e.prototype.encodeDeleteMessages=function(e,t,n,i){var r=this._codec.getModule(Wt),s=[];return dt(n,(function(e){s.push({msgId:e.messageUId,msgDataTime:e.sentTime,direct:e.messageDirection});})),r.setType(e),r.setConversationId(t),r.setMsgs(s),r.setBusChannel(i),r.getArrayData()},e.prototype.encodeClearMessages=function(e,t,n,i){var r=this._codec.getModule(Jt);return t=t||(new Date).getTime(),r.setDataTime(t),r.setTargetId(e),r.setBusChannel(n),r.setConversationType(i),r.getArrayData()},e.prototype.encodeClearUnreadCount=function(e,t){var n=e.conversationType,i=e.targetId,r=e.channelId,s=t.timestamp,o=this._codec.getModule(zt);return s=s||+new Date,o.setType(n),o.setChannelId(i),o.setMsgTime(s),o.setBusChannel(r),o.getArrayData()},e.prototype.encodeExpandUltraMessage=function(e,t){var n=e.targetId,i=e.conversationType,r=e.channelId,s=e.messageUId,o=e.sendTime,a=e.keys,u={mid:s,put:e.expansion,del:a,clear:e.removeAll?1:0},c=this._codec.getModule(ni);return c.setFromUserId(t),c.setTargetId(n),c.setType(i),c.setBusChannel(r||""),c.setMsgUID(s),c.setMsgTime(o),c.setContent(JSON.stringify(u)),c.getArrayData()},e.prototype.encodemodifyMessage=function(e,t){var n=e.targetId,i=e.conversationType,r=e.channelId,s=e.messageUId,o=e.sendTime,a=e.content,u=this._codec.getModule(ni);return u.setFromUserId(t),u.setTargetId(n),u.setType(i),u.setBusChannel(r||""),u.setMsgUID(s),u.setMsgTime(o),u.setContent(JSON.stringify(a)),u.getArrayData()},e.prototype.encodeQueryMsgChange=function(e){var t=this._codec.getModule(ii);return t.setSyncTime(e),t.getArrayData()},e.prototype.encodeMsgQuery=function(e){var t=e.targetId,n=e.conversationType,i=e.messages,r=this._codec.getModule(oi),s=i.map((function(e){return {msgTime:e.sendTime,msgUID:e.messageUId,busChannel:e.channelId}}));return r.setTargetId(t),r.setType(n),r.setQuery(s),r.getArrayData()},e.prototype.encodeOperateStatus=function(e,t,n,i){var r=this._codec.getModule(ci);return r.setTargetId(e),r.setType(t),r.setBusChannel(n),r.setOpType(i),r.getArrayData()},e.prototype.encodeJoinOrQuitChatRoom=function(){var e=this._codec.getModule(Zt);return e.setNothing(1),e.getArrayData()},e.prototype.encodeGetChatRoomInfo=function(e,t){var n=this._codec.getModule($t);return n.setCount(e),n.setOrder(t),n.getArrayData()},e.prototype.encodeGetFileToken=function(e,t,n,i){var r=this._codec.getModule(mn);return r.setType(e),r.setKey(t),r.setHttpMethod(n),r.setQueryString(i),r.getArrayData()},e.prototype.encodeGetFileUrl=function(e,t,n,i){var r=this._codec.getModule(e);return r.setType(t),r.setKey(n),i&&r.setFileName(i),r.getArrayData()},e.prototype.encodeModifyChatRoomKV=function(e,t,n){var i="comet"===this._connectType,r=this._codec.getModule(Sn),s=t.key,o=t.value,a=t.notificationExtra,u=t.isSendNotification,c=t.type,h=t.timestamp,l=c||Le.UPDATE,d=St(t,l),f={key:s,value:o||"",uid:n,version:h};if(re(d)||(f.status=d),r.setEntry(f),u){var p={conversationType:j.CHATROOM,targetId:e},g={key:s,value:o,extra:a,type:l},_=this._getUpMsgModule(p,{messageType:Se.CHRM_KV_NOTIFY,content:g,isPersited:!1,isCounted:!1});i?r.setNotification(_.getArrayData()):r.setNotification(_),r.setBNotify(!0),r.setType(j.CHATROOM);}return r.getArrayData()},e.prototype.encodeModifyChatRoomKVS=function(e,t,n){this._connectType;var i=this._codec.getModule(Nn),r=t.entries,s=t.type||Le.UPDATE,o=St(t,s),a=[];return r.forEach((function(e){var t={key:e.key,value:e.value||"",uid:n,version:e.timestamp};re(o)||(t.status=o),a.push(t);})),i.setEntry(a),i.getArrayData()},e.prototype.encodePullChatRoomKV=function(e){var t=this._codec.getModule(bn);return t.setTimestamp(e),t.getArrayData()},e.prototype.encodePullUserSetting=function(e){var t=this._codec.getModule(Dn);return t.setVersion(e),t.getArrayData()},e.prototype.encodeGetConversationStatus=function(e){var t=this._codec.getModule(xn);return t.setTime(e),t.getArrayData()},e.prototype.encodeSetConversationStatus=function(e){var t=this,n="comet"===this._connectType,i=this._codec.getModule(qn),r=Rt.getTime(),s=[];return dt(e,(function(e){var i=t._codec.getModule(Gn),o=e.conversationType,a=e.targetId,u=e.notificationStatus,c=e.isTop,h=e.channelId,l=[];i.setType(o),i.setChannelId(a),i.setTime(r),i.setBusChannel(h);var d=u===Oe.OPEN,f={};re(u)||(f[cr]=d),re(c)||(f[hr]=c),dt(f,(function(e,i){if(!re(e)){var r=t._codec.getModule(Fn);e=e?ar:ur,r.setSessionStateType(Number(i)),r.setValue(e);var s=n?r.getArrayData():r;l.push(s);}})),i.setStateItem(l);var p=n?i.getArrayData():i;s.push(p);})),i.setVersion(r),i.setState(s),i.getArrayData()},e.prototype.encodeReadReceipt=function(e,t){var n=this._codec.getModule(Hn);return n.setMsgId(e),t&&n.setChannelId(t),n.getArrayData()},e.prototype.encodeCreateTag=function(e,t){var n=this,i="comet"===this._connectType,r=this._codec.getModule(Wn),s=[];return e.forEach((function(e){var t=n._codec.getModule(Jn);t.setTagId(e.tagId),t.setName(e.tagName),s.push(i?t.getArrayData():t);})),r.setTags(s),r.setVersion(t),r.getArrayData()},e.prototype.encodeMessageReader=function(e,t){var n=this._codec.getModule(Hn);return n.setMsgId(e),t&&n.setChannelId(t),n.getArrayData()},e.prototype.encodeRemoveTag=function(e,t){var n=this,i="comet"===this._connectType,r=this._codec.getModule(zn),s=[];return e.forEach((function(e){var t=n._codec.getModule(Jn);t.setTagId(e),s.push(i?t.getArrayData():t);})),r.setTags(s),r.setVersion(t),r.getArrayData()},e.prototype.encodeDisConversationTag=function(e){var t=this._codec.getModule(Zn);return t.setTagId(e),t.getArrayData()},e.prototype.encodeUpdateConversationTag=function(e,t){var n=this,i="comet"===this._connectType,r=this._codec.getModule(qn),s=[];return t.forEach((function(t){var r=n._codec.getModule(Gn),o=n._codec.getModule(Fn),a=[];e.forEach((function(e){var t=n._codec.getModule(Jn);t.setTagId(e.tagId),re(e.isTop)||t.setIsTop(e.isTop),a.push(i?t.getArrayData():t);})),o.setSessionStateType(lr),o.setValue(JSON.stringify(a)),o.setTags(a),r.setType(t.conversationType),r.setChannelId(t.targetId),r.setTime(Date.now()),r.setStateItem([i?o.getArrayData():o]),s.push(i?r.getArrayData():r);})),r.setState(s),r.setVersion(Rt.getTime()),r.getArrayData()},e.prototype.encodeReportSDKInfo=function(e){var t=this._codec.getModule(Xn);return t.setSdkInfo(e),t.getArrayData()},e.prototype.encodeUltraGroup=function(e,t){var n=this._codec.getModule(ei);return n.setSyncTime(e),n.setIsEraseMsgContent(t),n.getArrayData()},e.prototype.encodeJoinRTCRoom=function(e,t,n,i,r){var s=this,o="comet"===this._connectType,a=this._codec.getModule(tn);if(e=e||0,a.setRoomType(e),re(t)||a.setBroadcastType(t),re(n)||a.setJoinType(n),i){var u=[],c=this._codec.getModule(_n);for(var h in i)c.setKey(h),c.setValue(i[h]),o?u.push(c.getArrayData()):u.push(c);a.setInnerDatas(u);}if(r){var l=[];Object.keys(r).forEach((function(e){var t=s._codec.getModule(_n);t.setKey(e),t.setValue(r[e]),o?l.push(t.getArrayData()):l.push(t);})),a.setOuterDatas(l);}return a.getArrayData()},e.prototype.encodeQuitRTCRoom=function(){return this._codec.getModule(rn).getArrayData()},e.prototype.encodeSetRTCData=function(e,t,n,i,r){var s=this._codec.getModule(sn);if(s.setInterior(n),s.setTarget(i),s.setKey(e),s.setValue(t),r){r.name&&s.setObjectName(r.name);var o=r.content;o&&(ne(o)&&(o=JSON.stringify(o)),s.setContent(o));}return s.getArrayData()},e.prototype.encodeUserSetRTCData=function(e,t,n,i){var r=this,s="comet"===this._connectType,o=this._codec.getModule(on);o.setObjectName(n);var a=this._codec.getModule(_n);a.setKey(e.name),a.setValue(e.content),s?o.setContent(a.getArrayData()):o.setContent(a);var u=[];return ["uris","mcu_uris"].forEach((function(e){var n=r._codec.getModule(_n);n.setKey(e);var o="uris"===e?t:i;n.setValue(o),s?u.push(n.getArrayData()):u.push(n);})),o.setValueInfo(u),o.getArrayData()},e.prototype.encodeUserSetRTCCDNUris=function(e,t){this._connectType;var n=this._codec.getModule(on);n.setObjectName(e);var i=this._codec.getModule(_n);return i.setKey("cdn_uris"),i.setValue(t),n.setValueInfo(i),n.getArrayData()},e.prototype.encodeGetRTCData=function(e,t,n){var i=this._codec.getModule(an);return i.setInterior(t),i.setTarget(n),i.setKey(e),i.getArrayData()},e.prototype.encodeRemoveRTCData=function(e,t,n,i){var r=this._codec.getModule(an);r.setInterior(t),r.setTarget(n),r.setKey(e);var s=(i=i||{}).name,o=i.content;return !re(s)&&r.setObjectName(s),re(o)||(ne(o)&&(o=JSON.stringify(o)),r.setContent(o)),r.getArrayData()},e.prototype.encodeSetRTCOutData=function(e,t,n){var i=this._codec.getModule(un);i.setTarget(t),X(e)||(e=[e]),dt(e,(function(t,n){t.key=t.key?t.key.toString():t.key,t.value=t.value?t.value.toString():t.value,e[n]=t;})),i.setValueInfo(e);var r=(n=n||{}).name,s=n.content;return !re(r)&&i.setObjectName(r),re(s)||(ne(s)&&(s=JSON.stringify(s)),i.setContent(s)),i.getArrayData()},e.prototype.ecnodeGetRTCOutData=function(e){var t=this._codec.getModule(dn);return t.setUserId(e),t.getArrayData()},e.prototype.encodeSetRTCState=function(e){var t=this._codec.getModule(cn);return t.setState(e),t.getArrayData()},e.prototype.encodeGetRTCRoomInfo=function(){var e=this._codec.getModule(pn);return e.setOrder(2),e.getArrayData()},e.prototype.encodeSetRTCUserInfo=function(e,t){var n=this._codec.getModule(_n);return n.setKey(e),n.setValue(t),n.getArrayData()},e.prototype.encodeRemoveRTCUserInfo=function(e){var t=this._codec.getModule(yn);return t.setKey(e),t.getArrayData()},e.prototype.encodeIdentityChangeInfo=function(e,t,n){void 0===n&&(n=!1);var i=this._codec.getModule(tn);return i.setRoomType(xe.LIVE),t&&i.setBroadcastType(t),i.setIdentityChangeType(e),i.setNeedSysChatroom(n),i.getArrayData()},e.prototype.encodePullRTCRoomKV=function(e,t){var n=this._codec.getModule(pi);return n.setTimestamp(t),n.setRoomId(e),n.getArrayData()},e.prototype.encodeQueryUserJoinedInfo=function(e){var t=this._codec.getModule(_i);return t.setUserId(e),t.getArrayData()},e.prototype.encodeRequestRoomPK=function(e){var t=e.invitedRoomId,n=e.invitedUserId,i=e.inviteSessionId,r=e.inviteTimeout,s=e.inviteInfo,o=this._codec.getModule(vi);return o.setInvitedRoomId(t),o.setInvitedUserId(n),o.setInviteSessionId(i),o.setTimeoutTime(r),o.setInviteInfo(s),o.getArrayData()},e.prototype.encodeCancelRoomPK=function(e){var t=e.invitedRoomId,n=e.invitedUserId,i=e.inviteSessionId,r=e.inviteInfo,s=this._codec.getModule(Ei);return s.setInvitedRoomId(t),s.setInvitedUserId(n),s.setInviteSessionId(i),s.setInviteInfo(r),s.getArrayData()},e.prototype.encodeResponseRoomPK=function(e){var t=e.inviteUserId,n=e.inviteRoomId,i=e.inviteSessionId,r=e.content,s=e.key,o=e.value,a=e.agree?1:0,u=this._codec.getModule(Ti);return u.setInviteUserId(t),u.setInviteRoomId(n),u.setInviteSessionId(i),u.setContent(r),u.setKey(s),u.setValue(o),u.setAnswerCode(a),u.getArrayData()},e.prototype.encodeEndRoomPK=function(e){var t=e.endRoomId,n=e.sessionId,i=e.content,r=e.keys,s=this._codec.getModule(Ii);return s.setInviteRoomId(t),s.setInviteSessionId(n),s.setInviteContent(i),s.setInviteRoomKeys(r),s.getArrayData()},e.prototype.encodebindRTCRoomForChatroom=function(e){var t=this._codec.getModule(Ci);return t.setRtcRoomId(e.rtcRoomId),t.getArrayData()},e}(),fr=function(e,t){this._watcher=t,this.codec=new dr(e);},pr=function(e,t){return e&&t?t+"_"+e:e||Date.now()},gr=function(){function e(e){this.header=e,this._name=null,this.lengthSize=0,this.messageId=0,this.timestamp=0,this.syncMsg=!1,this.identifier="";}return e.prototype.getIdentifier=function(){var e=this.messageId,t=this.identifier;return pr(e,t)},e.prototype.read=function(e,t,n){this.readMessage(e,t,n);},e.prototype.readMessage=function(e,t,n){return {stream:e,length:t}},e}(),_r=function(){function e(e){this.lengthSize=0,this.messageId=0,this.topic="",this.targetId="",this.identifier="",this._header=new Ot(e,!1,ze.AT_MOST_ONCE,!1);}return e.prototype.getIdentifier=function(){var e=this.messageId,t=this.identifier;return pr(e,t)},e.prototype.write=function(e){var t=this.getHeaderFlag();e.write(t),this.writeMessage(e);},e.prototype.setHeaderQos=function(e){this._header.qos=e;},e.prototype.getHeaderFlag=function(){return this._header.encode()},e.prototype.getLengthSize=function(){return this.lengthSize},e.prototype.getBufferData=function(){var e=new At;this.write(e);var t=e.getBytesArray();return new Int8Array(t)},e.prototype.getCometData=function(){var e=this.data||{};return JSON.stringify(e)},e}(),yr=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._name=Xe.CONN_ACK,t.status=null,t.userId=null,t.timestamp=0,t}return N(t,e),t.prototype.readMessage=function(e,n,i){if(e.readByte(),this.status=+e.readByte(),n<=t.MESSAGE_LENGTH)return {stream:e,length:n};if(i===et.V4){var r=e.readByte();1&r&&(this.userId=e.readUTF()),2&r&&e.readUTF(),4&r&&(this.timestamp=e.readLong()),8&r&&(this.messageId=e.read2Byte());}else {this.userId=e.readUTF();var s=e.readUTF();ge.debug("server sessionId -> "+s),this.timestamp=e.readLong();}return {stream:e,length:n}},t.MESSAGE_LENGTH=2,t}(gr),mr=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._name=Xe.DISCONNECT,t.status=0,t}return N(t,e),t.prototype.readMessage=function(e,t){return e.readByte(),this.status=+e.readByte(),{stream:e,length:t}},t.MESSAGE_LENGTH=2,t}(gr),vr=function(e){function t(){var t=e.call(this,Ze.PING_REQ)||this;return t._name=Xe.PING_REQ,t}return N(t,e),t.prototype.writeMessage=function(e){},t}(_r),Er=function(e){function t(t){var n=e.call(this,t)||this;return n._name=Xe.PING_RESP,n}return N(t,e),t}(gr),Tr=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.messageId=0,t}return N(t,e),t.prototype.readMessage=function(e,t){var n=256*e.readByte()+e.readByte();return this.messageId=parseInt(n.toString(),10),{stream:e,length:t}},t}(gr),Ir=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.messageId=0,t}return N(t,e),t.prototype.writeMessage=function(e){var t=this.messageId,n=255&t,i=(65280&t)>>8;e.write(i),e.write(n);},t}(_r),Cr=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._name=Xe.PUBLISH,t.topic="",t.targetId="",t.syncMsg=!1,t.identifier=$e.PUB,t}return N(t,e),t.prototype.readMessage=function(t,n){return this.date=t.readInt(),this.topic=t.readUTF(),this.targetId=t.readUTF(),e.prototype.readMessage.call(this,t,n),this.data=t.readAll(),{stream:t,length:n}},t}(Tr),Rr=function(e){function t(t,n,i){var r=e.call(this,Ze.PUBLISH)||this;return r._name=Xe.PUBLISH,r.syncMsg=!1,r.identifier=$e.PUB,r.topic=t,r.data=J(n)?Mt.writeUTF(n):n,r.targetId=i,r}return N(t,e),t.prototype.writeMessage=function(t){t.writeUTF(this.topic),t.writeUTF(this.targetId),e.prototype.writeMessage.call(this,t),t.write(this.data);},t}(Ir),Sr=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._name=Xe.PUB_ACK,t.status=0,t.date=0,t.millisecond=0,t.messageUId="",t.timestamp=0,t.identifier=$e.PUB,t.topic="",t.targetId="",t}return N(t,e),t.prototype.readMessage=function(t,n){return e.prototype.readMessage.call(this,t,n),this.date=t.readInt(),this.status=256*t.readByte()+t.readByte(),this.millisecond=256*t.readByte()+t.readByte(),this.timestamp=1e3*this.date+this.millisecond,this.messageUId=t.readUTF(),{stream:t,length:n}},t}(Tr),Nr=function(e){function t(t){var n=e.call(this,Ze.PUB_ACK)||this;return n._name=Xe.PUB_ACK,n.status=0,n.date=0,n.millisecond=0,n.messageUId="",n.timestamp=0,n.messageId=t,n}return N(t,e),t.prototype.writeMessage=function(t){e.prototype.writeMessage.call(this,t);},t}(Ir),Or=function(e){function t(t,n,i){var r=e.call(this,Ze.QUERY)||this;return r.name=Xe.QUERY,r.identifier=$e.QUERY,r.topic=t,r.data=J(n)?Mt.writeUTF(n):n,r.targetId=i,r}return N(t,e),t.prototype.writeMessage=function(t){t.writeUTF(this.topic),t.writeUTF(this.targetId),e.prototype.writeMessage.call(this,t),t.write(this.data);},t}(Ir),Mr=function(e){function t(t){var n=e.call(this,Ze.QUERY_CONFIRM)||this;return n._name=Xe.QUERY_CON,n.messageId=t,n}return N(t,e),t}(Ir),wr=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._name=Xe.QUERY_ACK,t.status=0,t.identifier=$e.QUERY,t.topic="",t.targetId="",t}return N(t,e),t.prototype.readMessage=function(t,n){return e.prototype.readMessage.call(this,t,n),this.date=t.readInt(),this.status=256*t.readByte()+t.readByte(),this.data=t.readAll(),{stream:t,length:n}},t}(Tr),Ar=function(e){var t,n=e.type;switch(n){case Ze.CONN_ACK:t=new yr(e);break;case Ze.PUBLISH:(t=new Cr(e)).syncMsg=e.syncMsg;break;case Ze.PUB_ACK:t=new Sr(e);break;case Ze.QUERY_ACK:t=new wr(e);break;case Ze.SUB_ACK:case Ze.UNSUB_ACK:case Ze.PING_RESP:t=new Er(e);break;case Ze.DISCONNECT:t=new mr(e);break;default:t=new gr(e),ge.error("No support for deserializing "+n+" messages");}return t};!function(e){e[e.ppMsgP=1]="ppMsgP",e[e.ppMsgN=2]="ppMsgN",e[e.ppMsgS=3]="ppMsgS",e[e.pgMsgP=4]="pgMsgP",e[e.chatMsg=5]="chatMsg",e[e.pcMsgP=6]="pcMsgP",e[e.qryPMsg=7]="qryPMsg",e[e.qryGMsg=8]="qryGMsg",e[e.qryCHMsg=9]="qryCHMsg",e[e.qryCMsg=10]="qryCMsg",e[e.qrySMsg=11]="qrySMsg",e[e.recallMsg=12]="recallMsg",e[e.prMsgS=13]="prMsgS",e[e.rrMsg=14]="rrMsg",e[e.rrList=15]="rrList",e[e.s_ntf=16]="s_ntf",e[e.s_msg=17]="s_msg",e[e.s_stat=18]="s_stat",e[e.s_cmd=19]="s_cmd",e[e.s_us=20]="s_us",e[e.pullUS=21]="pullUS",e[e.pgMsgS=22]="pgMsgS",e[e.chatMsgS=23]="chatMsgS",e[e.qrySessionsAtt=24]="qrySessionsAtt",e[e.pullMsg=25]="pullMsg",e[e.qrySessions=26]="qrySessions",e[e.delSessions=27]="delSessions",e[e.delMsg=28]="delMsg",e[e.updRRTime=29]="updRRTime",e[e.chrmPull=30]="chrmPull",e[e.joinChrm=31]="joinChrm",e[e.joinChrmR=32]="joinChrmR",e[e.exitChrm=33]="exitChrm",e[e.queryChrmI=34]="queryChrmI",e[e.setKV=35]="setKV",e[e.delKV=36]="delKV",e[e.pullKV=37]="pullKV",e[e.qryRelation=38]="qryRelation",e[e.delRelation=39]="delRelation",e[e.pullSeAtts=40]="pullSeAtts",e[e.setSeAtt=41]="setSeAtt",e[e.qnTkn=42]="qnTkn",e[e.qnUrl=43]="qnUrl",e[e.aliUrl=44]="aliUrl",e[e.s3Url=45]="s3Url",e[e.stcUrl=46]="stcUrl",e[e.cleanPMsg=47]="cleanPMsg",e[e.cleanGMsg=48]="cleanGMsg",e[e.cleanCMsg=49]="cleanCMsg",e[e.cleanSMsg=50]="cleanSMsg",e[e.rtcRJoin_data=51]="rtcRJoin_data",e[e.rtcRExit=52]="rtcRExit",e[e.rtcPing=53]="rtcPing",e[e.rtcSetData=54]="rtcSetData",e[e.rtc_ntf=55]="rtc_ntf",e[e.viewerJoinR=56]="viewerJoinR",e[e.viewerExitR=57]="viewerExitR",e[e.rtcPullKv=58]="rtcPullKv",e[e.rtcIdentityChange=59]="rtcIdentityChange",e[e.userSetData=60]="userSetData",e[e.rtcQryData=61]="rtcQryData",e[e.rtcDelData=62]="rtcDelData",e[e.rtcSetOutData=63]="rtcSetOutData",e[e.rtcQryUserOutData=64]="rtcQryUserOutData",e[e.rtcToken=65]="rtcToken",e[e.rtcUserState=66]="rtcUserState",e[e.rtcRInfo=67]="rtcRInfo",e[e.rtcUData=68]="rtcUData",e[e.rtcUPut=69]="rtcUPut",e[e.rtcUDel=70]="rtcUDel",e[e.rtcUList=71]="rtcUList",e[e.rtcQueryJoined=72]="rtcQueryJoined",e[e.rtcInvite=73]="rtcInvite",e[e.rtcCancelInvite=74]="rtcCancelInvite",e[e.rtcInviteAnswer=75]="rtcInviteAnswer",e[e.rtcEndInvite=76]="rtcEndInvite",e[e.addSeTag=77]="addSeTag",e[e.delSeTag=78]="delSeTag",e[e.addTag=79]="addTag",e[e.delTag=80]="delTag",e[e.disTag=81]="disTag",e[e.reportsdk=82]="reportsdk",e[e.pullUgSes=83]="pullUgSes",e[e.pullUgMsg=84]="pullUgMsg",e[e.ugMsg=85]="ugMsg",e[e.qryUgMsg=86]="qryUgMsg",e[e.updUgRTime=87]="updUgRTime",e[e.upMsgEx=88]="upMsgEx",e[e.modifyMsg=89]="modifyMsg",e[e.qryMsgChange=90]="qryMsgChange",e[e.qryMsg=91]="qryMsg",e[e.operate=92]="operate",e[e.s_opNtf=93]="s_opNtf",e[e.setRtcRoomId=94]="setRtcRoomId";}(Vi||(Vi={}));var Ur,br=Vi,Lr=function(e,t,n,i){return M(void 0,void 0,void 0,(function(){var r;return w(this,(function(s){return r=0,e.forEach((function(s){return M(void 0,void 0,void 0,(function(){var o,a,u;return w(this,(function(c){switch(c.label){case 0:o=t+"://"+s+"/ping?r="+(l=9999,(h=1e3)+Math.floor(Math.random()*(l-h))),ge.debug("start ping",o),r++,c.label=1;case 1:return c.trys.push([1,3,,4]),[4,n.httpReq({url:o,timeout:5e3})];case 2:return a=c.sent(),[3,4];case 3:return u=c.sent(),ge.error("ping error: ",u),i({finished:r===e.length,code:-2,host:s}),[2];case 4:return ge.debug("end ping",r,o,null==a?void 0:a.status),i({finished:r===e.length,code:a.status,host:s}),[2]}var h,l;}))}))})),[2]}))}))},Pr=function(e,t,n,i,r,s,o,a){return e+"://"+t+"/websocket?appId="+n+"&token="+encodeURIComponent(i)+"&sdkVer="+s+"&pid="+o+"&apiVer="+(r.isFromUniapp?"uniapp":"normal")+(r.connectPlatform?"&platform="+r.connectPlatform:"")+(a?"&protocolVer="+a:"")},Dr=function(e){return [br.ppMsgS,br.pgMsgS,br.chatMsgS].map((function(e){return br[e]})).indexOf(e)>=0};!function(e){e[e.REDIRECT=0]="REDIRECT",e[e.OTHER_DEVICE_LOGIN=1]="OTHER_DEVICE_LOGIN",e[e.BLOCK=2]="BLOCK",e[e.REMOTE_CLOSE=3]="REMOTE_CLOSE",e[e.LOGOUT=4]="LOGOUT",e[e.BLOCK_NEW=5]="BLOCK_NEW",e[e.REDIRECT_NEW=6]="REDIRECT_NEW";}(Ur||(Ur={}));var Vr,kr=function(e,t){ge.info("websocket send -> messageId: "+e.messageId+" topic: "+e.topic);var n=e.getBufferData();t.send(n.buffer);},xr=function(e){function t(t,n){var i=e.call(this,"websocket",n)||this;return i._runtime=t,i._socket=null,i._messageIds={},i._syncMessageIds={},i._failedCount=0,i.ALLOW_FAILED_TIMES=2,i._timer=null,i._idCount=0,i._generateMessageId=function(){return i._idCount>=65535&&(i._idCount=0),++i._idCount},i}return N(t,e),t.prototype.connect=function(e,t,n,i,r,s){return M(this,void 0,void 0,(function(){var o=this;return w(this,(function(a){return [2,new Promise((function(a){var u=[],c=0,h=!1,l=!1,d=function(){return M(o,void 0,void 0,(function(){var n;return w(this,(function(o){switch(o.label){case 0:return 0===u.length||h?[2]:(h=!0,[4,this._connect(e,t,u.shift(),i,r,s)]);case 1:if((n=o.sent())===Ee.SUCCESS)this._checkAlive(),a(n);else if(n===Ce.REDIRECT)a(n);else {if(l&&0===u.length)return a(Et(n)),[2];h=!1,d();}return [2]}}))}))};r=x(r),o._watcher.status(Ie.CONNECTING),Lr(n,i,o._runtime,(function(e){var t=e.code,n=e.finished,i=e.host;l=n,200===t&&(u.push(i),c++,d()),n&&0===c&&(ge.error("No valid websocket server hosts!"),a(Ee.RC_SOCKET_NOT_CREATED));}));}))]}))}))},t.prototype._connect=function(e,t,n,i,r,s){return M(this,void 0,void 0,(function(){var o,a,u,c,h,l=this;return w(this,(function(d){switch(d.label){case 0:return o=i.replace("http","ws"),a=Pr(o,n,e,t,this._runtime,r,"",s),ge.debug("conenct start -> "+a),this.sendConnectTime=Date.now(),u=this._runtime.createWebSocket(a),c=function(e){l._timer&&(clearTimeout(l._timer),l._timer=null),l._socket===u&&(l._socket=null,l._watcher.status(e));},[4,new Promise((function(e){u.onMessage((function(t){if("[object ArrayBuffer]"===Object.prototype.toString.call(t)){var n=function(e,t){var n=new Uint8Array(e),i=new wt(n),r=i.readByte(),s=new Ot(r),o=Ar(s);return o.read(i,n.length-1,t),o}(t,s);if(n instanceof Er&&l._pingResolve)return l._pingResolve(Ee.SUCCESS),void(l._pingResolve=void 0);if(n instanceof yr)return ge.debug("recv connect ack -> "+n.status),n.status!==Ce.ACCEPTED?(ge.warn("connect failed: "+n.status),void e(n.status)):(ge.info("connect success -> "+a),l.connectedTime=n.timestamp,l.userId=n.userId||"",l._idCount=n.messageId,void e(Ee.SUCCESS));if(n instanceof mr){var i=n.status;switch(ge.warn("recv disconnect signal -> status: "+i),i){case Ur.BLOCK_NEW:case Ur.BLOCK:l._watcher.status(Ie.BLOCKED);break;case Ur.OTHER_DEVICE_LOGIN:l._watcher.status(Ie.KICKED_OFFLINE_BY_OTHER_CLIENT);break;case Ur.REDIRECT_NEW:case Ur.REDIRECT:l._watcher.status(Ie.REDIRECT);break;default:l._watcher.status(Ie.DISCONNECT_BY_SERVER);}}else l._onReceiveSignal(n);}else ge.error("Socket received invalid data:",t);})),u.onClose((function(t,n){for(var i in ge.warn("websocket closed! code:",t,"reason:",n),c(Ie.CONNECTION_CLOSED),l._messageIds){var r=l._messageIds[i];delete l._messageIds[i],r(Ee.RC_NET_CHANNEL_INVALID);}e(t);})),u.onError((function(t){var n;for(var i in ge.error("websocket error!",null===(n=t)||void 0===n?void 0:n.stack),c(Ie.WEBSOCKET_ERROR),l._messageIds){var r=l._messageIds[i];delete l._messageIds[i],r(Ee.RC_NET_CHANNEL_INVALID);}e(Ee.NETWORK_ERROR);})),u.onOpen((function(){return ge.debug("websocket open =>",a)})),setTimeout((function(){e(Ee.TIMEOUT);}),5e3);}))];case 1:return (h=d.sent())===Ee.SUCCESS?this._socket=u:(ge.warn("connect result -> code: "+h+", url: "+a),u.close()),[2,h]}}))}))},t.prototype._checkAlive=function(){var e;return M(this,void 0,void 0,(function(){var t,n=this;return w(this,(function(i){switch(i.label){case 0:return this._socket?(ge.debug("send ping ->"),this.sendOnly(new vr),[4,new Promise((function(e){n._pingResolve=e,n._timer&&clearTimeout(n._timer),n._timer=setTimeout((function(){n._pingResolve=void 0,e(Ee.TIMEOUT);}),15e3);}))]):[2];case 1:return (t=i.sent())!==Ee.SUCCESS?(this._failedCount+=1,ge.warn("ping failed count: "+this._failedCount+", code: "+t),this._failedCount>=this.ALLOW_FAILED_TIMES?(this._failedCount=0,ge.warn("ping timeout, close current websocket to reconnect!"),null===(e=this._socket)||void 0===e||e.close(),this._watcher.status(Ie.NETWORK_UNAVAILABLE)):this._checkAlive(),[2]):(ge.debug("recv pong <-"),this._failedCount=0,setTimeout((function(){return n._checkAlive()}),15e3),[2])}}))}))},t.prototype._onReceiveSignal=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a=this;return w(this,(function(u){switch(u.label){case 0:return t=e.messageId,e.header&&e.header.qos!==ze.AT_MOST_ONCE&&(e instanceof Cr&&!e.syncMsg&&(ge.info("send pubAck -> "+t+" "+e.topic),this.sendOnly(new Nr(t))),e instanceof wr&&(ge.info("send queryCon -> "+t+" "+e.topic),this.sendOnly(new Mr(t)))),t>0&&(e instanceof Sr||e instanceof wr)&&(ge.info("recv ack -> messageId: "+t+" "+e.topic),(n=this._messageIds[t])&&(n(e),delete this._messageIds[t]),(i=this._syncMessageIds[t])&&(delete this._syncMessageIds[t],i(e))),e instanceof Cr?(r=e.syncMsg,s=e.topic,ge.info("recv PublishReader -> messageId: "+t+" "+s),s===br[br.userSetData]?[2]:!r||Dr(s)?(this._watcher.signal(e),[2]):[4,new Promise((function(e){a._syncMessageIds[t]=e;}))]):[3,2];case 1:o=u.sent(),delete this._syncMessageIds[t],this._watcher.signal(e,o),u.label=2;case 2:return [2]}}))}))},t.prototype.sendOnly=function(e){this._socket&&((e instanceof Rr||e instanceof Or)&&(e.messageId=this._generateMessageId()),kr(e,this._socket));},t.prototype.send=function(e,t,n,i){return void 0===i&&(i=3e4),M(this,void 0,void 0,(function(){var r,s,o,a=this;return w(this,(function(u){switch(u.label){case 0:return this._socket?(r=this._generateMessageId(),e.messageId=r,kr(e,this._socket),[4,new Promise((function(e){a._messageIds[r]=e,setTimeout((function(){a._messageIds[r]&&delete a._messageIds[r],e();}),i);}))]):[3,2];case 1:return (s=u.sent())?s instanceof wr||s instanceof Sr?(o=t&&s.data?this.codec.decodeByPBName(s.data,t,n):s,0!==s.status?(ge.warn("send failed -> message: "+r+", respPBName: "+t+", status: "+s.status),[2,{code:s.status,data:t&&s.data?o:null}]):[2,{code:Ee.SUCCESS,data:o}]):[2,{code:s}]:(ge.warn("send timeout -> message: "+r+", respPBName: "+t+", timeout: "+i),[2,{code:Ee.TIMEOUT}]);case 2:return [2,{code:Ee.RC_NET_CHANNEL_INVALID}]}}))}))},t.prototype.close=function(){this._socket&&(this._socket.close(),this._socket=null,this._watcher.status(Ie.DISCONNECTED));},t}(fr);!function(e){e.GET="GET",e.POST="POST";}(Vr||(Vr={}));var Br=function(e){function t(t,n){var i=e.call(this,"comet",n)||this;return i._runtime=t,i._messageIds={},i._syncMessageIds={},i._idCount=0,i._generateMessageId=function(){return ++i._idCount},i._pid=encodeURIComponent((new Date).getTime()+Math.random()+""),i}return N(t,e),t.prototype.handleCometRes=function(e){var t=this;if(200!==e.status&&202!==e.status)return !1;var n=J(e.data)?JSON.parse(e.data):e.data;return n?!X(n)||(dt(n,(function(e){return M(t,void 0,void 0,(function(){var t,n,i,r,s,o,a,u,c,h,l,d=this;return w(this,(function(f){switch(f.label){case 0:if((t=e.sessionid)&&(this._sessionid=t),n=function(e){var t=e.headerCode,n=new Ot(t),i=Ar(n);for(var r in e)i[r]=e[r];return i}(e),i=n.messageId,r=n._header,s=n.status,n.identifier,o=r&&r.qos!==ze.AT_MOST_ONCE,i&&n.getIdentifier&&((a=this._messageIds[i])&&a(n),this._syncMessageIds[i]&&this._syncMessageIds[i](n)),o&&(n instanceof Cr&&!n.syncMsg&&(u=new Nr(i),this.sendOnly(u)),n instanceof wr&&(u=new Mr(i),this.sendOnly(u))),n instanceof mr){switch(s){case Ur.OTHER_DEVICE_LOGIN:this._watcher.status(Ie.KICKED_OFFLINE_BY_OTHER_CLIENT);break;case Ur.BLOCK:case Ur.BLOCK_NEW:this._watcher.status(Ie.BLOCKED);break;case Ur.REDIRECT_NEW:case Ur.REDIRECT:this._watcher.status(Ie.REDIRECT);break;default:this._watcher.status(Ie.DISCONNECT_BY_SERVER);}return [2]}return n instanceof Cr?(c=n.syncMsg,h=n.topic,!c||Dr(h)?(this._watcher.signal(n),[2,!1]):[4,new Promise((function(e){d._syncMessageIds[i]=e;}))]):[3,2];case 1:l=f.sent(),delete this._syncMessageIds[i],this._watcher.signal(n,l),f.label=2;case 2:return [2]}}))}))})),!0):(ge.error("received data is not a validJson",n),!1)},t.prototype._startPullSignal=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r;return w(this,(function(s){switch(s.label){case 0:return t=(new Date).getTime(),n=e+"://"+this._domain+"/pullmsg.js?sessionid="+this._sessionid+"&timestrap="+t+"&pid="+this._pid,[4,this._runtime.httpReq({url:n,body:{pid:this._pid},timeout:45e3})];case 1:return i=s.sent(),r=this.handleCometRes(i),this._isDisconnected||(r?this._startPullSignal(e):(this._isDisconnected=!0,this._watcher.status(Ie.NETWORK_UNAVAILABLE))),[2]}}))}))},t.prototype.connect=function(e,t,n,i,r,s){return M(this,void 0,void 0,(function(){var s,o,a,u,c=this;return w(this,(function(h){return r=x(r),this._protocol=i,this._isDisconnected=!1,this._watcher.status(Ie.CONNECTING),s=[],o=0,a=!1,u=!1,[2,new Promise((function(h){var l=function(){return M(c,void 0,void 0,(function(){var n;return w(this,(function(o){switch(o.label){case 0:return 0===s.length||a?[2]:(a=!0,[4,this._connect(e,t,s.shift(),i,r)]);case 1:if((n=o.sent())===Ee.SUCCESS)this._startPullSignal(i),h(n);else if(n===Ce.REDIRECT)h(n);else {if(u&&0===s.length)return h(Et(n)),[2];a=!1,l();}return [2]}}))}))};c._watcher.status(Ie.CONNECTING),Lr(n,i,c._runtime,(function(e){var t=e.code,n=e.finished,i=e.host;u=n,200===t&&(s.push(i),o++,l()),n&&0===o&&(ge.error("No valid websocket server hosts!"),h(Ee.RC_SOCKET_NOT_CREATED));}));}))]}))}))},t.prototype._connect=function(e,t,n,i,r){return M(this,void 0,void 0,(function(){var s,o,a,u;return w(this,(function(c){switch(c.label){case 0:return s=function(e){return 200!==e.status&&202!==e.status?(ge.error("handle comet res -> res: "+JSON.stringify(e||{})),!1):!!e.data&&(function(e){if(ne(e))return !0;var t=!1;try{var n=JSON.parse(e);t=JSON.stringify(n)===e;}catch(e){t=!1;}return t}(e.data)?ne(e.data)?e.data:JSON.parse(e.data):(ge.error("received data is not a validJson",e.data),!1))},o=Pr(i,n,e,t,this._runtime,r,this._pid),this.sendConnectTime=Date.now(),ge.debug("conenct start -> "+o),[4,this._runtime.httpReq({url:o,body:{pid:this._pid},timeout:5e3})];case 1:return a=c.sent(),u=s(a),this._domain=n,u&&0===u.status?(this._sessionid=u.sessionid,this.userId=u.userId,this.connectedTime=u.timestamp):ge.warn("connect result -> code: "+(null==u?void 0:u.status)+", url: "+o),[2,null==u?void 0:u.status]}}))}))},t.prototype.sendCometData=function(e,t){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a,u,c,h;return w(this,(function(l){switch(l.label){case 0:return n=(t=this)._domain,i=t._sessionid,r=t._pid,s=e.messageId,o=e.topic,a=e.targetId,e.identifier,u=e.getHeaderFlag(),c=o?this._protocol+"://"+n+"/websocket?messageid="+s+"&header="+u+"&sessionid="+i+"&topic="+o+"&targetid="+a+"&pid="+r:this._protocol+"://"+n+"/websocket?messageid="+s+"&header="+u+"&sessionid="+i+"&pid="+r,[4,this._runtime.httpReq({url:c,method:Vr.POST,body:e.getCometData()})];case 1:return h=l.sent(),this.handleCometRes(h),[2]}}))}))},t.prototype.sendOnly=function(e){this.sendCometData(e);},t.prototype.send=function(e,t,n,i){return void 0===i&&(i=3e4),M(this,void 0,void 0,(function(){var r,s,o,a=this;return w(this,(function(u){switch(u.label){case 0:return r=this._generateMessageId(),e.messageId=r,this.sendCometData(e),[4,new Promise((function(e){a._messageIds[r]=e,setTimeout((function(){delete a._messageIds[r],e();}),i);}))];case 1:return (s=u.sent())?(o=t&&s.data?this.codec.decodeByPBName(s.data,t,n):s,0!==s.status?[2,{code:s.status,data:t&&s.data?o:null}]:[2,{code:Ee.SUCCESS,data:o}]):[2,{code:Ee.TIMEOUT}]}}))}))},t.prototype.close=function(){this._isDisconnected=!0,this._watcher.status(Ie.DISCONNECTED);},t}(fr),Gr=function(e,t,n){this.runtime=e,this._watcher=t,this._options=n,this.currentUserId="",this._appkey=this._options.appkey,this._apiVer=this._options.apiVersion,this.navi=this._createNavi();},Fr=function(e){return ["navi",e].join("_")},qr=function(){function e(e,t){this._runtime=e,this._options=t,this._naviInfo=null,this._appkey=this._options.appkey,this._apiVersion=x(this._options.apiVersion);}return e.prototype.getInfo=function(e,t,n,i){return M(this,void 0,void 0,(function(){var r,s;return w(this,(function(o){switch(o.label){case 0:return n&&this._clear(e),(r=function(e,t,n){var i,r,s=Fr(e);try{var o=n.getItem(s);r=o?JSON.parse(o):[];}catch(e){r=[];}var a=Date.now();return r.length>0&&(r=r.filter((function(e){return a-e.timestamp<72e5}))),0===r.length?n.removeItem(s):n.setItem(s,JSON.stringify(r)),(null===(i=r.find((function(e){return e.token===t})))||void 0===i?void 0:i.naviInfo)||null}(this._appkey,e,this._runtime.localStorage))?(this._naviInfo=r,[2,r]):(s=this._options.navigators.slice(),t.length&&t.forEach((function(e){s.indexOf(e)<0&&s.unshift(e);})),[4,this._reqNavi(s,this._appkey,e,i)]);case 1:return (r=o.sent())?(this._naviInfo=r,this.setNaviInfo2Cache(e,r),[2,r]):[2,r]}}))}))},e.prototype.setNaviInfo2Cache=function(e,t){this._naviInfo=t,function(e,t,n,i){var r,s=Fr(e);try{var o=i.getItem(s);r=o?JSON.parse(o):[];}catch(e){r=[];}var a=Date.now();r.length>0&&(r=r.filter((function(e){return a-e.timestamp<72e5&&t!==e.token}))),r.push({timestamp:a,naviInfo:n,token:t}),i.setItem(s,JSON.stringify(r));}(this._appkey,e,t,this._runtime.localStorage);},e.prototype.getInfoFromCache=function(e){return this._naviInfo},e.prototype._clear=function(e){!function(e,t,n){var i,r=Fr(e);try{var s=n.getItem(r);i=s?JSON.parse(s):[];}catch(e){i=[];}var o=Date.now();i.length>0&&(i=i.filter((function(e){return o-e.timestamp<72e5&&t!==e.token}))),0===i.length?n.removeItem(r):n.setItem(r,JSON.stringify(i));}(this._appkey,e,this._runtime.localStorage);},e}(),Kr=function(e,t,n){return [e,t,n].join("_")},Hr=function(){function e(e,t){this._runtime=e,this._appkey=t,this._users={};}return e.prototype._getMemData=function(e){return this._users[e]||(this._users[e]={inboxTime:0,outboxTime:0,broadcastSyncTime:0})},e.prototype.setInboxTime=function(e,t){var n=this._getMemData(t);if(!(n.inboxTime>e)){n.inboxTime=e;var i=Kr("inbox",this._appkey,t);this._runtime.localStorage.setItem(i,e.toString());}},e.prototype.getInboxTime=function(e){var t=this._getMemData(e);if(0===t.inboxTime){var n=Kr("inbox",this._appkey,e);t.inboxTime=parseInt(this._runtime.localStorage.getItem(n))||0;}return t.inboxTime},e.prototype.setBroadcastSyncTime=function(e,t){var n=this._getMemData(t);if(!(n.broadcastSyncTime>=e)){n.broadcastSyncTime=e;var i=Kr("broadcastbox",this._appkey,t);this._runtime.localStorage.setItem(i,e.toString());}},e.prototype.getBroadcastSyncTime=function(e){var t=this._getMemData(e);if(!t||0===t.broadcastSyncTime){var n=Kr("broadcastbox",this._appkey,e);t.broadcastSyncTime=parseInt(this._runtime.localStorage.getItem(n))||1;}return t.broadcastSyncTime},e.prototype.setOutboxTime=function(e,t){var n=this._getMemData(t);if(!(n.outboxTime>=e)){n.outboxTime=e;var i=Kr("outbox",this._appkey,t);this._runtime.localStorage.setItem(i,e.toString());}},e.prototype.getOutboxTime=function(e){var t=this._getMemData(e);if(0===t.outboxTime){var n=Kr("outbox",this._appkey,e);t.outboxTime=parseInt(this._runtime.localStorage.getItem(n))||0;}return t.outboxTime},e}(),Yr={_caches:{},set:function(e,t){this._caches[e]=t;},get:function(e){return this._caches[e]||0},clear:function(e){this._caches[e]=0;}},jr=function(){function e(e,t){this._kvCaches={},this._chatroomId=e,this._currentUserId=t;}return e.prototype._add=function(e){var t=e.key;e.isDeleted=!1,this._kvCaches[t]=e;},e.prototype._remove=function(e){var t=e.key,n=this._kvCaches[t];n&&(n.isDeleted=!0,this._kvCaches[t]=n);},e.prototype._setEntry=function(e,t){var n=e.key,i=e.type,r=e.isOverwrite,s=e.userId,o=this._getSetUserId(n),a=i===Le.DELETE,u=o===s,c=!this._isExisted(n),h=a?this._remove:this._add;(t||r||u||c)&&h.call(this,e);},e.prototype.getValue=function(e){var t=this._kvCaches[e]||{};return t.isDeleted?null:t.value},e.prototype.getVersion=function(e){var t=this._kvCaches[e]||{};return t.isDeleted?null:t.version},e.prototype.getAllValue=function(){var e={};for(var t in this._kvCaches)this._kvCaches[t].isDeleted||(e[t]=this._kvCaches[t].value);return e},e.prototype._getSetUserId=function(e){return (this._kvCaches[e]||{}).userId},e.prototype._isExisted=function(e){var t=this._kvCaches[e]||{},n=t.value,i=t.isDeleted;return n&&!i},e.prototype.setEntries=function(e){var t=this,n=e.kvEntries,i=e.isFullUpdate;n=n||[],(i=i||!1)&&this.clear(),n.forEach((function(e){t._setEntry(e,i);})),ge.debug("end setEntries");},e.prototype.clear=function(){this._kvCaches={};},e}(),Qr=function(){function e(e){this._pullQueue=[],this._isPulling=!1,this._storeCaches={},this._engine=e;}return e.prototype._startPull=function(){return M(this,void 0,void 0,(function(){var e,t,n,i,r,s,o;return w(this,(function(a){switch(a.label){case 0:return this._isPulling||0===this._pullQueue.length?[2]:(this._isPulling=!0,e=this._pullQueue.splice(0,1)[0],t=e.chrmId,n=e.timestamp,(i=Yr.get(t))>n?(this._isPulling=!1,this._startPull(),[2]):[4,this._engine.pullChatroomEntry(t,i)]);case 1:return r=a.sent(),s=r.code,o=r.data,this._isPulling=!1,s===Ee.SUCCESS?(Yr.set(t,o.syncTime||0),this._startPull()):this._startPull(),[2]}}))}))},e.prototype.reset=function(e){Yr.clear(e);var t=this._storeCaches[e];t&&t.clear();},e.prototype.pullEntry=function(e,t){this._pullQueue.push({chrmId:e,timestamp:t}),this._startPull();},e.prototype.setLocal=function(e,t,n){var i=this._storeCaches[e];ae(i)||(i=new jr(e,n)),i.setEntries(t),this._storeCaches[e]=i;},e.prototype.getValue=function(e,t){var n=this._storeCaches[e];return n?n.getValue(t):null},e.prototype.getVersion=function(e,t){var n=this._storeCaches[e];return n?n.getVersion(t):null},e.prototype.getAll=function(e){var t=this._storeCaches[e],n={};return t&&(n=t.getAllValue()),n},e}(),Wr=function(){function e(e,t,n,i){this._runtime=e,this._appkey=t,this._userId=n,this._canJoinMulipleChrm=i,this._sessionKey="",this._joinedChrmsInfo={},this._sessionKey="sync-chrm-"+this._appkey+"-"+this._userId;}return e.prototype.set=function(e,t){void 0===t&&(t=10),!this._canJoinMulipleChrm&&(this._joinedChrmsInfo={}),this._joinedChrmsInfo[e]=t,this._runtime.sessionStorage.setItem(this._sessionKey,JSON.stringify(this._joinedChrmsInfo));},e.prototype.get=function(){var e,t;try{t=this._runtime.sessionStorage.getItem(this._sessionKey),e=JSON.parse(t||"{}");}catch(n){ge.error("parse rejoined chrm infos error -> "+t),e={};}return e},e.prototype.remove=function(e){delete this._joinedChrmsInfo[e],ae(this._joinedChrmsInfo)?this._runtime.sessionStorage.setItem(this._sessionKey,JSON.stringify(this._joinedChrmsInfo)):this.clear();},e.prototype.clear=function(){this._joinedChrmsInfo={},this._runtime.sessionStorage.removeItem(this._sessionKey);},e}(),Jr="converStatusChanged",zr=function(){function e(e,t,n){this._eventEmitter=new _e,this._pullQueue=[],this._isPulling=!1,this._storage=I(e.runtime),this._appkey=t,this._currentUserId=n,this._engine=e,this._storagePullTimeKey="con-s-"+t+"-"+n;}return e.prototype._set=function(e){var t=this;if(!re(e)&&Array.isArray(e)){var n=this._storage.get(this._storagePullTimeKey)||0,i=e.length;e.forEach((function(e,r){var s=e.updatedTime||0;n=s>n?s:n,e.conversationType=e.type,t._eventEmitter.emit(Jr,{statusItem:e,isLastPull:r===i-1});})),this._storage.set(this._storagePullTimeKey,n);}},e.prototype._startPull=function(){return M(this,void 0,void 0,(function(){var e,t,n,i;return w(this,(function(r){switch(r.label){case 0:return this._isPulling||0===this._pullQueue.length?[2]:(this._isPulling=!0,e=this._pullQueue.splice(0,1)[0],[4,this._engine.pullConversationStatus(e)]);case 1:return t=r.sent(),n=t.code,i=t.data,n===Ee.SUCCESS?(this._isPulling=!1,this._set(i),this._startPull()):this._startPull(),[2]}}))}))},e.prototype.pull=function(e){var t=this._storage.get(this._storagePullTimeKey)||0;(e>t||0===e)&&(this._pullQueue.push(t),this._startPull());},e.prototype.watch=function(e){this._eventEmitter.on(Jr,(function(t){e(t);}));},e.prototype.unwatch=function(){this._eventEmitter.off(Jr,(function(e){}));},e}(),Zr={c:{keyName:"unreadMessageCount",defaultVal:0},hm:{keyName:"hasMentioned",defaultVal:!1},m:{keyName:"mentionedInfo",defaultVal:null},t:{keyName:"lastUnreadTime",defaultVal:0},nc:{keyName:"notificationStatus",defaultVal:2},to:{keyName:"isTop",defaultVal:!1},tg:{keyName:"tags",defaultVal:{}},mc:{keyName:"unreadMentionedCount",defaultVal:0}},Xr={};for(var $r in Zr){var es=Zr[$r].keyName;Xr[es]=$r;}var ts,ns=function(){function e(e,t,n){this._appkey=t,this._currentUserId=n;var i="con-"+t+"-"+n;this.storage=new R(e,i),this._localStore=new R(e,"CONVER-"+t+"-"+n);}return e.prototype._getStoreKey=function(e,t,n){return n+"_"+e+"_"+t},e.prototype._getConOptionByKey=function(e){var t=(e=e||"").split("_");if(t.length>=2){var n=t.shift(),i=t.shift(),r=t.join("_");return {conversationType:Number(i),targetId:r,channelId:n}}return {conversationType:j.PRIVATE,targetId:"",channelId:""}},e.prototype.updateMentionedData=function(e){var t=this,n=e.conversationType,i=e.targetId,r=e.messageType,s=e.isMentioned,o=e.content,a=e.senderUserId,u=e.channelId,c=this._getStoreKey(n,i,u),h=this._localStore.get(c)||{},l=Xr.mentionedInfo,d=Xr.hasMentioned,f=h[l]||{},p=f.userIdList||[],g=o.mentionedInfo;if(g){if(s&&n===j.GROUP)(g.userIdList||[]).forEach((function(e){e===t._currentUserId&&p.indexOf(a)<0&&p.push(a);})),g.type===we.ALL&&p.indexOf(a)<0&&p.push(a);if(r===Se.RECALL&&n===j.GROUP){var _=p.indexOf(a);_>=0&&p.splice(_,1);}g={userIdList:p,type:(null==g?void 0:g.type)||f.type},0!==p.length?(h[l]=g,h[d]=!0):(delete h[l],delete h[d]),ae(h)?this._localStore.set(c,h):this._localStore.remove(c);}},e.prototype.set=function(e,t,n,i){var r=this._getStoreKey(e,t,i),s=this._localStore.get(r)||{};for(var o in n){var a=Xr[o],u=n[o];if(!re(a)&&!re(u)&&"hasMentioned"!==o&&"MentionedInfo"!==o){if(u===Zr[a].defaultVal||"tags"===o&&!ae(u))delete s[a];else if("tags"===o){var c=u;for(var h in c)c[h].isTop||delete c[h].isTop;s[a]=u;}else s[a]=u;s.c||(delete s.t,delete s.hm,delete s.m,delete s.mc);}}ae(s)?this._localStore.set(r,s):this._localStore.remove(r);},e.prototype.get=function(e,t,n){void 0===n&&(n="");var i=this._getStoreKey(e,t,n),r=this._localStore.get(i)||{},s={};for(var o in Zr){var a=Zr[o],u=a.keyName,c=a.defaultVal;s[u]=r[o]||yt(c);}return s},e.prototype.getValue=function(e){var t=this._localStore.getValues()||{},n=[];for(var i in t){var r=this._getConOptionByKey(i),s={conversationType:r.conversationType,targetId:r.targetId,channelId:r.channelId},o=t[i];for(var a in o){var u=Zr[a],c=u.keyName,h=u.defaultVal;s[c]=o[a]||yt(h);}s=e?e(s):s,n.push(s);}return n},e.prototype.getValueForTag=function(){var e=this._localStore.getValues()||{},t={};for(var n in e){var i=this._getConOptionByKey(n),r=i.conversationType,s=i.targetId,o={},a=e[n];for(var u in a){var c=Zr[u],h=c.keyName,l=c.defaultVal;o[h]=a[u]||yt(l);}for(var d in o.tags){re(t[d])&&(t[d]=[]);var f=Object.assign({},o,{conversationType:r,targetId:s});delete f.tags,t[d].push(f);}}return t},e.prototype.adaptOldStore=function(){try{var e=this.storage.getValues();if(0===Object.keys(e).length)return;for(var t in e){var n="_"+t;this._localStore.set(n,e[t]);}}catch(e){ge.error("adaptOldStore error: "+e.message);}},e}(),is=[j.PRIVATE,j.GROUP,j.SYSTEM,j.PUBLIC_SERVICE,j.APP_PUBLIC_SERVICE],rs="conversationChanged",ss="conTagStatusChanged",os=function(){function e(e,t,n,i,r){var s=this;this._updatedConversations={},this._conTagStatusChanged=!1,this._eventEmitter=new _e,this._draftMap={},this._appkey=t,this._loginUserId=n,this._store=new ns(e.runtime,t,n),this._statusManager=new zr(e,t,n),this._statusManager.watch((function(e){var t=e.statusItem,n=e.isLastPull;s.addStatus(t,n);})),this._eventEmitter.on(rs,(function(e){i(e);})),this._eventEmitter.on(ss,(function(){r();}));}return e.prototype._calcUnreadCount=function(e,t){var n=e.content,i=e.messageType,r=e.sentTime,s=e.isCounted,o=e.messageDirection,a=e.senderUserId,u=o===me.SEND&&a===this._loginUserId,c=i===Se.RECALL,h=ne(n),l=!1,d={},f=t.lastUnreadTime||0,p=t.unreadMessageCount||0;if(f>r||u)return {hasChanged:l,localConversation:t,updateItems:d};(s&&(t.unreadMessageCount=p+1,t.lastUnreadTime=r,l=!0),c&&h)&&(f>=n.sentTime&&p&&(t.unreadMessageCount=p-1,l=!0));return l&&(d.unreadMessageCount={val:t.unreadMessageCount,time:r}),{hasChanged:l,localConversation:t,updateItems:d}},e.prototype._calcMentionedInfo=function(e,t){var n=e.content,i=(e.messageDirection,e.isMentioned),r=e.sentTime;me.SEND;var s=ne(n),o=!1,a={};return i&&s&&n.mentionedInfo&&(t.hasMentioned=!0,o=!0,a.hasMentioned={val:!0,time:r},a.mentionedInfo={val:n.mentionedInfo,time:r}),{hasChanged:o,localConversation:t,updateItems:a}},e.prototype._calcMentionedCount=function(e,t){var n=e.content,i=e.messageDirection,r=!1;if(e.isMentioned&&i===me.RECEIVE&&(null==n?void 0:n.mentionedInfo)){var s=n.mentionedInfo,o=s.type,a=s.userIdList;if(o===we.ALL||(a||[]).includes(this._loginUserId)){r=!0;var u=t.unreadMentionedCount||0;t.unreadMentionedCount=u+1;}}return {hasChanged:r,localConversation:t}},e.prototype._setUpdatedConversation=function(e){if(ne(e)){var t=e.conversationType,n=e.targetId,i=e.channelId,r=t+"_"+n,s=this._store.get(t,n,i)||{};this._updatedConversations[r]=Object.assign(s,e);}},e.prototype._setConTagStatusChanged=function(e,t,n,i){var r=(this._store.get(e,t,i)||{}).tags||{};if(Object.keys(r).length===Object.keys(n).length){for(var s in r)if(!n[s]||r[s].isTop!==n[s].isTop)return void(this._conTagStatusChanged=!0)}else this._conTagStatusChanged=!0;},e.prototype.addStatus=function(e,t){var n=e.conversationType,i=e.targetId,r=e.updatedTime,s=e.notificationStatus,o=e.isTop,a=e.tags,u=e.channelId,c={},h={};n!==j.ULTRA_GROUP&&(re(s)||(h.notificationStatus={time:r,val:s}),re(o)||(h.isTop={time:r,val:o}),re(a)||(h.tags={time:r,val:a},null==a||a.forEach((function(e){c[e.tagId]={isTop:e.isTop};}))),this._setConTagStatusChanged(n,i,c,u),this._store.set(n,i,{notificationStatus:s,isTop:o,tags:c},u),this._setUpdatedConversation({conversationType:n,targetId:i,updatedItems:h,channelId:u}),t&&this._notifyConversationChanged());},e.prototype._notifyConversationChanged=function(){var e=[];for(var t in this._updatedConversations)e.push(this._updatedConversations[t]);0!==e.length&&(this._eventEmitter.emit(rs,e),this._updatedConversations={},this._conTagStatusChanged&&(this._eventEmitter.emit(ss),this._conTagStatusChanged=!1));},e.prototype.setConversationCacheByMessage=function(e,t){var n=this,i=e.conversationType,r=e.isPersited,s=e.targetId,o=e.channelId;if(is.indexOf(i)>=0){var a=!1,u=this._store.get(i,s,o),c={};if([this._calcUnreadCount,this._calcMentionedInfo,this._calcMentionedCount].forEach((function(t){var i=t.call(n,e,u),r=i.hasChanged,s=i.localConversation,o=i.updateItems;a=a||r,c=O(O({},c),o),u=yt(s);})),a&&this._store.set(i,s,u,o),this._store.updateMentionedData(e),r){var h=this._store.get(i,s,o);h.updatedItems=O({latestMessage:{time:e.sentTime,val:e}},c),h.latestMessage=e;var l=Object.assign(h,{conversationType:i,targetId:s,channelId:o});this._setUpdatedConversation(l);}(a||r)&&this._notifyConversationChanged();}},e.prototype.get=function(e,t,n){return void 0===n&&(n=""),this._store.get(e,t,n)},e.prototype.getAllUnreadCount=function(e,t,n){var i=this._store.getValue(),r=0;return i.forEach((function(e){var i=e.unreadMessageCount,s=e.notificationStatus,o=e.conversationType;i=i||0,(n||1!==s)&&(t.length>0?t.includes(Number(o))&&(r+=Number(i)):r+=Number(i));})),r},e.prototype.getUnreadCountByTag=function(e,t){var n=this._store.getValueForTag()[e]||[],i=0;return n.forEach((function(e){var n=e.unreadMessageCount,r=e.notificationStatus;(t||1!==r)&&(n=n||0,i+=Number(n));})),i},e.prototype.getUnreadCount=function(e,t,n){return this._store.get(e,t,n).unreadMessageCount||0},e.prototype.clearUnreadCount=function(e,t,n,i){void 0===i&&(i=!0);var r=this._store.get(e,t,n),s=r.unreadMessageCount,o=r.hasMentioned,a={};if(s&&(r.unreadMessageCount=0,a.unreadMessageCount={val:0,time:Date.now()}),o&&(r.hasMentioned=!1,r.unreadMentionedCount=0,r.mentionedInfo=void 0,a.hasMentioned={val:!1,time:Date.now()},a.mentionedInfo={val:void 0,time:Date.now()}),this._store.set(e,t,r,n),i&&0!==Object.keys(a).length){var u=Object.assign(r,{conversationType:e,targetId:t,channelId:n,updatedItems:a});this._setUpdatedConversation(u),this._notifyConversationChanged();}},e.prototype.clearAllUnreadCount=function(){var e=this;this._store.getValue().forEach((function(t){t.unreadMessageCount&&(t.unreadMessageCount=0,e._store.set(t.conversationType,t.targetId,t,t.channelId));}));},e.prototype.startPullConversationStatus=function(e){this._statusManager.pull(e);},e.prototype.setDraft=function(e,t,n,i){var r=e+"_"+t+"_"+i;this._draftMap[r]=n;},e.prototype.getDraft=function(e,t,n){var i=e+"_"+t+"_"+n;return this._draftMap[i]},e.prototype.clearDraft=function(e,t,n){var i=e+"_"+t+"_"+n;delete this._draftMap[i];},e.prototype.addTagStatus=function(e,t,n,i){void 0===i&&(i="");var r=this._store.get(e,t,i).tags;r=Object.assign(r,n),this._store.set(e,t,{tags:r},i);},e.prototype.deleteTagStatus=function(e,t,n,i){void 0===i&&(i="");var r=this._store.get(e,t,i).tags;n.forEach((function(e){delete r[e];})),this._store.set(e,t,{tags:r},i);},e.prototype.getConversationListForTag=function(){return this._store.getValueForTag()},e.prototype.getBlockConversationList=function(){return this._store.getValue().filter((function(e){return e.notificationStatus===Oe.OPEN})).map((function(e){return {conversationType:e.conversationType,targetId:e.targetId,channelId:e.channelId}}))},e.prototype.getTopConversationList=function(){return (this._store.getValue()||{}).filter((function(e){return e.isTop})).map((function(e){return {conversationType:e.conversationType,targetId:e.targetId,channelId:e.channelId}}))},e.prototype.adaptOldStore=function(){this._store.adaptOldStore();},e.prototype.getUnreadMentionedCount=function(e,t,n){return void 0===e&&(e=""),this.get(t,n,e).unreadMentionedCount||0},e.prototype.getAllUnreadMentionedCount=function(){var e=this._store.getValue(),t=0;return e.forEach((function(e){var n=e.unreadMentionedCount;n=n||0,t+=Number(n);})),t},e.prototype.getAllConversationState=function(){return this._store.getValue().filter((function(e){return e.unreadMessageCount||e.unreadMentionedCount})).map((function(e){return {conversationType:e.conversationType,targetId:e.targetId,channelId:e.channelId,unreadCount:e.unreadMessageCount||0,unreadMentionedCount:e.unreadMentionedCount||0}}))},e}(),as=function(){function e(e,t,n,i){this._pullQueue=[],this._isPulling=!1,this._storageTagKey="tag-"+t+"-"+n,this._storagePullTimeKey="us-s-"+t+"-"+n,this._storage=I(e.runtime),this._engine=e,this._tagWatcherFunc=i;}return e.prototype._updateTag=function(e){var t=e.tags,n={};t.forEach((function(e){n[e.tagId]={tagName:e.tagName,createdTime:e.createdTime};})),this._storage.set(this._storageTagKey,n),this._tagWatcherFunc();},e.prototype.addTag=function(e,t){var n=this._storage.get(this._storageTagKey)||{};e.forEach((function(e){var t,i=(null===(t=n[e.tagId])||void 0===t?void 0:t.createdTime)||e.createdTime||0;n[e.tagId]={tagName:e.tagName,createdTime:i};})),this._storage.set(this._storageTagKey,n),this._storage.set(this._storagePullTimeKey,t);},e.prototype.deleteTag=function(e,t){var n=this._storage.get(this._storageTagKey)||{};e.forEach((function(e){delete n[e];})),this._storage.set(this._storageTagKey,n),this._storage.set(this._storagePullTimeKey,t);},e.prototype.getTagsInfo=function(){return this._storage.get(this._storageTagKey)||{}},e.prototype.getTags=function(){var e=this._storage.get(this._storageTagKey)||{},t=[];for(var n in e)t.push({tagId:n,tagName:e[n].tagName,createdTime:e[n].createdTime,conversationCount:0});return t.sort((function(e,t){return (e.createdTime||0)-(t.createdTime||0)}))},e.prototype.getTagById=function(e){var t=this._storage.get(this._storageTagKey)||{};return t[e]?{tagId:e,tagName:t[e].tagName,createdTime:t[e].createdTime,conversationCount:0}:null},e.prototype._startPull=function(){return M(this,void 0,void 0,(function(){var e,t,n,i,r,s,o,a;return w(this,(function(u){switch(u.label){case 0:return this._isPulling||0===this._pullQueue.length?[2]:(this._isPulling=!0,e=this._pullQueue.splice(0,1)[0],[4,this._engine.pullUserSettings(e)]);case 1:return t=u.sent(),n=t.code,i=t.data,n!==Ee.SUCCESS||re(i)?(this._isPulling=!1,this._startPull()):(s=(r=i).settings,o=r.version,a=s.Tag,re(a)||this._updateTag(a),this._storage.set(this._storagePullTimeKey,o),this._isPulling=!1,this._startPull()),[2]}}))}))},e.prototype.pullUserSettings=function(e){var t=this._storage.get(this._storagePullTimeKey)||0;(e>t||0===e)&&(this._pullQueue.push(t),this._startPull());},e.prototype.getVersion=function(){return this._storage.get(this._storagePullTimeKey)||0},e}(),us=function(e){function t(t,n){var i=e.call(this,t,n)||this;return i._miniConnectUrl="",i._connectType=n.connectionType,i}return N(t,e),t.prototype._formatJSONPUrl=function(e,t,n,i){return e+"/"+(this._runtime.isSupportSocket()&&"websocket"===this._connectType?"navi":"cometnavi")+".js?appId="+n+"&token="+encodeURIComponent(t)+"&callBack="+i+"&v="+this._apiVersion+"&r="+Date.now()},t.prototype.getInfo=function(t,n,i){var r;return M(this,void 0,void 0,(function(){var s;return w(this,(function(o){return this._runtime.useNavi||(s=void 0,s=this._runtime.isSupportSocket()&&"websocket"===this._connectType?c.join(","):h.join(","),this._miniConnectUrl=(null===(r=this._options.miniCMPProxy)||void 0===r?void 0:r.length)?this._options.miniCMPProxy.join(","):s||"",n=[]),[2,e.prototype.getInfo.call(this,t,n,i)]}))}))},t.prototype._reqNavi=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r,s,o,a,u,c,h,l;return w(this,(function(d){switch(d.label){case 0:i="getServerEndpoint",r=0,s=e.length,d.label=1;case 1:return r<s?(o=this._formatJSONPUrl(e[r],n,t,i),ge.debug("req navi => "+o),[4,this._runtime.httpReq({url:o,timeout:1e4,dataType:"text"})]):[3,4];case 2:if(200!==(a=d.sent()).status)return 403===a.status?ge.error("request navi error: "+Ee.RC_CONN_USER_OR_PASSWD_ERROR):401===a.status&&ge.error("request navi error: "+Ee.RC_CONN_APP_BLOCKED_OR_DELETED),[3,3];try{return u=a.data.match(/{[\d\D]+}/),0===(c=u&&u[0]?u[0]:"").indexOf('{\\"code\\":')&&(c=JSON.parse('"'+c+'"')),l=JSON.parse(c),h=/^https/.test(o)?"https":"http",l.protocol=h,this._runtime.useNavi||(l.server="",l.backupServer=this._miniConnectUrl,l.logSwitch=0),[2,l]}catch(e){ge.error("parse navi err =>",e);}d.label=3;case 3:return r+=1,[3,1];case 4:return this._runtime.useNavi?[2,null]:[2,l={code:200,protocol:"https",server:"",voipCallInfo:"",kvStorage:0,openHttpDNS:!1,historyMsg:!1,chatroomMsg:!1,uploadServer:"https://upload.qiniup.com",bosAddr:"https://gz.bcebos.com",location:"",monitor:0,joinMChrm:!1,openMp:0,openUS:0,grpMsgLimit:0,isFormatted:0,gifSize:2048,logSwitch:0,logPolicy:"",compDays:0,msgAck:"",activeServer:"",qnAddr:"",extkitSwitch:0,alone:!1,voipServer:"",offlinelogserver:"",backupServer:this._miniConnectUrl}]}}))}))},t}(qr),cs=function(){function e(e){this._pullQueue=[],this._isPulling=!1,this._pullTime=0,this._engine=e;}return e.prototype._startPull=function(){return M(this,void 0,void 0,(function(){var e,t,n,i,r,s,o;return w(this,(function(a){switch(a.label){case 0:return this._isPulling||0===this._pullQueue.length?[2]:(this._isPulling=!0,e=this._pullQueue.splice(0,1)[0],t=e.roomId,n=e.timestamp,(i=this._pullTime)>n?(this._isPulling=!1,this._startPull(),[2]):[4,this._engine.pullRTCRoomEntry(t,i)]);case 1:return r=a.sent(),s=r.code,o=r.data,s===Ee.SUCCESS?(this._isPulling=!1,this._pullTime=o.syncTime||0,this._startPull()):this._startPull(),[2]}}))}))},e.prototype.pullEntry=function(e,t){this._pullQueue.push({roomId:e,timestamp:t}),this._startPull();},e.prototype.reset=function(){this._pullTime=0,this._isPulling=!1;},e}(),hs=function(e,t){return ["send_msg",e,t].join("_")},ls=function(){function e(e,t){this._runtime=e,this._appkey=t,this._sendMessageMap={},this._userId="";}return e.prototype.init=function(e){this._userId=e;var t=hs(this._appkey,e);this._sendMessageMap=this._getLocalInfo(t);},e.prototype._getLocalInfo=function(e){var t=this._runtime.localStorage.getItem(e);try{return t?JSON.parse(t):{}}catch(e){return {}}},e.prototype.setMessage=function(e,t){this._sendMessageMap[e]=t;var n=hs(this._appkey,this._userId),i=this._getLocalInfo(n);i[e]=t,this._runtime.localStorage.setItem(n,JSON.stringify(i));},e.prototype.getSendMessageMap=function(){return this._sendMessageMap},e.prototype.removeByUID=function(e){delete this._sendMessageMap[e];},e.prototype.removeByTimestamp=function(e){var t=hs(this._appkey,this._userId),n=this._getLocalInfo(t);Object.keys(n).forEach((function(t){n[t]<e&&delete n[t];})),this._runtime.localStorage.setItem(t,JSON.stringify(n));},e}(),ds=function(e){var t="RCDeviceId",n=I(e),i="",r=n.get(t);return r?i=r:(i=H(),n.set(t,i)),i};(ts={})[j.PRIVATE]=br.qryPMsg,ts[j.GROUP]=br.qryGMsg,ts[j.CHATROOM]=br.qryCHMsg,ts[j.CUSTOMER_SERVICE]=br.qryCMsg,ts[j.SYSTEM]=br.qrySMsg;var fs=[br[br.recallMsg],br[br.ppMsgS],br[br.pgMsgS],br[br.ppMsgP],br[br.pgMsgP],br[br.chatMsg],br[br.pcMsgP],br[br.prMsgS],br[br.updUgRTime]],ps=function(e,t,n,r,s,o){return {conversationType:e,targetId:t,senderUserId:o,messageDirection:me.SEND,isCounted:!!n.isCounted,isMentioned:!!n.isMentioned,content:n.content,messageType:n.messageType,isOffLineMessage:!1,isPersited:!!n.isPersited,messageUId:r,sentTime:s,receivedTime:0,disableNotification:!!n.disableNotification,isStatusMessage:!!n.isStatusMessage,canIncludeExpansion:!!n.canIncludeExpansion,expansion:n.canIncludeExpansion?n.expansion:null,receivedStatus:i.UNREAD,pushConfig:n.pushConfig,channelId:n.channelId,isInterrupt:n.isInterrupt}},gs=function(e){return e.sort((function(e,t){var n,i,r=(null===(n=e.latestMessage)||void 0===n?void 0:n.sentTime)||0;return ((null===(i=t.latestMessage)||void 0===i?void 0:i.sentTime)||0)-r}))},_s=function(e){function t(t,n,i){var r=e.call(this,t,n,i)||this;return r._customMessageType={},r._reconnectTimer=-1,r._pullOfflineFinished=!1,r._connectedTime=0,r._localConnectedTime=0,r._status=Ie.DISCONNECTED,r._pullingMsg=!1,r._pullQueue=[],r._chrmsQueue={},r._latestSyncTimestamp=0,r._intervalTimer=-1,r._pullChatroomEntryTimestamp=0,r._lastSyncUltraMsgTimeStamp=0,r._lastSyncUltraMsgLocalTimeStamp=0,r._ultraGroupTimer=-1,r._isUltraPulling=!1,r._ultraGroupTimeQue=[],r._isUltraGroupListExist=!1,r._ultraGroupMap={},r._firstPullUltraGroupTime=0,r._ultraMsgMap={},r._pullUltraChangeMessageQue=[],r._isPullingUltraChangeMessage=!1,r._lastPullingUltraChangeMessageTime=0,r._ultraMsgChangeMap={},r._letterbox=new Hr(t,i.appkey),r._sendMessageStore=new ls(t,i.appkey),r._chrmEntryHandler=new Qr(r),r}return N(t,e),t.prototype._createNavi=function(){return new us(this.runtime,this._options)},t.prototype.getConnectedTime=function(){return this._connectedTime},t.prototype.connect=function(e,t){return M(this,void 0,void 0,(function(){var n,i,r,s,o,a=this;return w(this,(function(u){switch(u.label){case 0:return n=[],this._naviInfo=t,t.server?n.push(t.server):ge.warn("navi.server is invalid"),(i=t.backupServer)&&i.split(",").forEach((function(e){n.indexOf(e)<0&&n.push(e);})),0===n.length?(ge.error("navi invaild.",n),[2,Ee.UNKNOWN]):(r=this.runtime.createDataChannel({status:function(i){a._connectionStatusHandler(i,e,n,t.protocol);},signal:this._signalHandler.bind(this)},this._options.connectionType),s=et.V3,1===t.openAnti&&(s=et.V4),[4,r.connect(this._appkey,e,n,t.protocol,this._apiVer,s)]);case 1:return (o=u.sent())===Ee.SUCCESS?(this._channel=r,this.currentUserId=r.userId,this._connectedTime=r.connectedTime,this._localConnectedTime=Math.floor((Date.now()+r.sendConnectTime)/2),this._watcher.status(Ie.CONNECTED),this._status=Ie.CONNECTED,this._pullOfflineFinished=!1,this._conversationManager=new os(this,this._appkey,this.currentUserId,this._watcher.conversation,this._watcher.conversationTag),this._conversationManager.startPullConversationStatus(0),this._userSettingManager=new as(this,this._appkey,this.currentUserId,this._watcher.tag),this._userSettingManager.pullUserSettings(0),this._sendMessageStore.init(this.currentUserId),this._conversationManager.adaptOldStore(),this._rtcKVManager=new cs(this),this._joinedChrmManager=new Wr(this.runtime,this._appkey,this.currentUserId,t.joinMChrm),this._startSyncInterval(),1===t.ugMsg&&this._startUltraSyncInterval()):r.close(),[2,o]}}))}))},t.prototype._connectionStatusHandler=function(e,t,n,i){if(ge.warn("connection status changed:",e),this._status=e,e!==Ie.CONNECTING)if(e!==Ie.CONNECTED){if(this._channel&&e!==Ie.DISCONNECTED)return e===Ie.BLOCKED||e===Ie.KICKED_OFFLINE_BY_OTHER_CLIENT||e===Ie.DISCONNECT_BY_SERVER?(this.disconnect(),void this._watcher.status(e)):void(e!==Ie.REDIRECT?(this._watcher.status(e),this._try2Reconnect(t,n,i)):this._watcher.status(e));this._watcher.status(e);}else this._watcher.status(e);else this._watcher.status(e);},t.prototype._try2Reconnect=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r=this;return w(this,(function(s){switch(s.label){case 0:return this._channel?(i=et.V3,1===this._naviInfo.openAnti&&(i=et.V4),[4,this._channel.connect(this._appkey,e,t,n,this._apiVer,i)]):[2];case 1:return s.sent()===Ee.SUCCESS?(this._pullOfflineFinished=!1,this._startSyncInterval(),this._watcher.status(Ie.CONNECTED),this._status=Ie.CONNECTED,this._startUltraSyncInterval(),this._rejoinChrm(),ge.__insertLogIntoDatabase(),[2]):(this._watcher.status(Ie.WEBSOCKET_UNAVAILABLE),this._status=Ie.WEBSOCKET_UNAVAILABLE,this._reconnectTimer=setTimeout((function(){r._reconnectTimer=-1,r._try2Reconnect(e,t,n);}),5e3),[2])}}))}))},t.prototype._signalHandler=function(e,t){var n=e.syncMsg,i=e.topic;if(n)this._receiveSyncMsg(e,t);else {var r=br[i];if(r)switch(r){case br.s_ntf:ge.info("recv s_ntf -> signal.messageId: "+e.messageId),this._pullMsg(e);break;case br.s_msg:this._receiveMsg(e);break;case br.s_cmd:this._receiveStateNotify(e);break;case br.s_us:this._receiveSettingNotify(e);break;case br.rtc_ntf:this._receiveRtcKv(e);break;case br.s_opNtf:this._pullOperateStatusNotify(e);}else ge.error("unknown topic:",i);}},t.prototype._receiveStateNotify=function(e){var t,n=null===(t=this._channel)||void 0===t?void 0:t.codec.decodeByPBName(e.data,Bt),i=n.time,r=n.type,s=n.chrmId;switch(r){case 2:this._chrmEntryHandler.pullEntry(s,i);break;case 3:this._conversationManager.startPullConversationStatus(i);break;case 4:this._chrmEntryHandler.reset(s),this._watcher.chatroom({chatroomDestroyed:e.targetId});break;case 6:this._ultraGroupTimeQue.push(i),this._syncUltraMsg(this._lastSyncUltraMsgTimeStamp);break;case 7:this._pullUltraChangeMessageQue.push(i),this._pullUltraChangeMessageList(this._lastPullingUltraChangeMessageTime);}},t.prototype._receiveSettingNotify=function(e){var t,n=(null===(t=this._channel)||void 0===t?void 0:t.codec.decodeByPBName(e.data,kn)).version;this._userSettingManager.pullUserSettings(n);},t.prototype._receiveRtcKv=function(e){var t,n=null===(t=this._channel)||void 0===t?void 0:t.codec.decodeByPBName(e.data,fi),i=n.time,r=n.type,s=n.roomId;switch(r){case 1:this._rtcKVManager.pullEntry(s,i);}},t.prototype._receiveMessageExpansion=function(e){var t=e.content,n=t.put,i=t.del,r=t.mid;n&&this._watcher.expansion({updatedExpansion:{messageUId:r,expansion:n}}),i&&this._watcher.expansion({deletedExpansion:{messageUId:r,deletedKeys:i}});},t.prototype._receiveSyncMsg=function(e,t){var n,i;if(fs.includes(e.topic)){if(e.topic===br[br.updUgRTime]){var r=null===(n=this._channel)||void 0===n?void 0:n.codec.decodeByPBName(e.data,zt),s=r.channelId,o=r.busChannel,a=this._ultraGroupMap[o+"_"+s];return a&&(a.unreadMessageCount=0,a.unreadMentionedCount=0,a.lastReadTime=t.timestamp,this._watcher.conversation(It([a]))),void(t&&(this._ultraMsgMap[t.messageUId]=t.timestamp))}var u=null===(i=this._channel)||void 0===i?void 0:i.codec.decodeByPBName(e.data,Ut,{currentUserId:this.currentUserId,signal:e});u=this._handleMsgProperties(u),t&&(u.sentTime=t.timestamp,u.messageUId=t.messageUId),this._pullingMsg?this._pullQueue.push((null==t?void 0:t.timestamp)||u.sentTime):(t&&this._sendMessageStore.setMessage(t.messageUId,t.timestamp),u.messageType!==Se.EXPANSION_NOTIFY?(u.messageType===Se.SYNC_READ_STATUS&&this._conversationManager.clearUnreadCount(u.conversationType,u.targetId,u.channelId),this._conversationManager.setConversationCacheByMessage(u,!0),this._watcher.batchMessage([u])):this._receiveMessageExpansion(u));}},t.prototype._pullMsg=function(e){if(this._channel){var t=this._channel.codec.decodeByPBName(e.data,Bt),n=t.type,i=t.chrmId,r=t.time;if(ge.info("s_ntf -> type: "+n+", chrmId: "+i+", time: "+r),2===n){var s=this._chrmsQueue[i];if(!s)return;s.queue.push(r),this._pullChrmMsg(i);}else this._pullQueue.push(r),this._syncMsg();}},t.prototype._startSyncInterval=function(){var e=this;this._stopSyncInterval();this._intervalTimer=setInterval((function(){Date.now()-e._latestSyncTimestamp>=18e4&&e._syncMsg();}),3e4),this._latestSyncTimestamp=Date.now(),this._syncMsg();},t.prototype._stopSyncInterval=function(){-1!==this._intervalTimer&&(clearInterval(this._intervalTimer),this._intervalTimer=-1);},t.prototype._syncMsg=function(){return M(this,void 0,void 0,(function(){var e,t,n,i,r,s,o,a,u,c,h,l,d,f,p,g,_=this;return w(this,(function(y){switch(y.label){case 0:return this._pullingMsg?[2]:this._channel?(this._pullingMsg=!0,e=this._letterbox.getOutboxTime(this.currentUserId),t=this._letterbox.getInboxTime(this.currentUserId),n=this._letterbox.getBroadcastSyncTime(this.currentUserId),ge.info("pullMsg -> sendboxTime: "+e+", inboxTime: "+t+", broadcastSyncTime: "+n),i=this._channel.codec.encodeSyncMsg({sendboxTime:e,inboxTime:t,broadcastSyncTime:n}),r=new Or(br[br.pullMsg],i,this.currentUserId),[4,this._channel.send(r,Pt,{connectedTime:this._channel.connectedTime,currentUserId:this.currentUserId})]):(this._pullingMsg=!1,[2]);case 1:return s=y.sent(),o=s.code,a=s.data,this._latestSyncTimestamp=Date.now(),o!==Ee.SUCCESS||!a||re(a.finished)||re(a.list)||re(a.syncTime)?(ge.warn("pullMsg failed -> code:",o,", data: ",a),this._pullingMsg=!1,[2]):(u=a.list,c=a.finished,h=a.syncTime,l=a.broadcastSyncTime,ge.info("pullMsg success -> syncTime: "+h+", finished: "+c),d=0,f=[],u.forEach((function(e){if(e.messageDirection===me.SEND&&(d=Math.max(e.sentTime,d),_._sendMessageStore.getSendMessageMap()[e.messageUId]))return void _._sendMessageStore.removeByUID(e.messageUId);if(e.messageType!==Se.EXPANSION_NOTIFY){if(e.messageType===Se.SYNC_READ_STATUS){if(e.senderUserId!==_.currentUserId)return;_._conversationManager.clearUnreadCount(e.conversationType,e.targetId,e.channelId);}var t=_._handleMsgProperties(e);_._conversationManager.setConversationCacheByMessage(t,!0),f.push(t);}else _._receiveMessageExpansion(e);})),this._watcher.batchMessage(f),this._letterbox.setInboxTime(h,this.currentUserId),this._letterbox.setOutboxTime(d,this.currentUserId),this._letterbox.setBroadcastSyncTime(l,this.currentUserId),this._sendMessageStore.removeByTimestamp(d),this._pullingMsg=!1,p=this._pullQueue.filter((function(e){return e>h})),this._pullQueue.length=0,(g=this._pullQueue).push.apply(g,p),c&&!this._pullOfflineFinished&&(this._pullOfflineFinished=!0,this._watcher.pullFinished()),(!c||p.length>0)&&this._syncMsg(),[2])}}))}))},t.prototype._receiveMsg=function(e){if(this._channel){var t=this._channel.codec.decodeByPBName(e.data,Lt,{currentUserId:this.currentUserId,connectedTime:this._channel.connectedTime});if((t=this._handleMsgProperties(t)).conversationType!==j.RTC_ROOM){if(this._pullingMsg)return;if(this._pullQueue.length>0)return void this._syncMsg()}t.senderUserId===this.currentUserId&&this._sendMessageStore.setMessage(t.messageUId,t.sentTime),t.isStatusMessage||t.senderUserId===this.currentUserId||this._letterbox.setInboxTime(t.sentTime,this.currentUserId),t.messageType!==Se.EXPANSION_NOTIFY?t.messageType===Se.SYNC_READ_STATUS&&t.senderUserId!==this.currentUserId||(this._conversationManager.setConversationCacheByMessage(t,!0),this._watcher.batchMessage([t])):this._receiveMessageExpansion(t);}},t.prototype._handleMsgProperties=function(e,t){void 0===t&&(t=!1);var n,i=e.messageType,r=e.isCounted,s=e.isPersited,o=e.isStatusMessage,a=i in v,u=i in this._customMessageType;if(n=a?O(O({},v[i]),{isStatusMessage:T.includes(i)}):u?this._customMessageType[i]:{isCounted:!se(r)&&r,isPersited:!se(s)&&s,isStatusMessage:!1},Object.assign(e,n),t&&!re(o)&&(e.isStatusMessage=o),!t){var c=e.content.user;if(c){var h=c.portrait,l=c.portraitUri,d=h||l;d&&(c.portrait=c.portraitUri=d);}}return e},t.prototype.getHistoryMessage=function(e,t,n,i,r,s){return void 0===s&&(s=""),M(this,void 0,void 0,(function(){var o,a,u,c,h,l,d,f,p;return w(this,(function(g){switch(g.label){case 0:return a=(o=this).currentUserId,u=o._channel,c=sr[e]||$i,h=1===i&&0===n,u?(l=u.codec.encodeGetHistoryMsg(t,{timestamp:n,count:h?2:i,order:r,channelId:s}),[4,u.send(new Or(c,l,a),Ft,{currentUserId:a,connectedTime:u.connectedTime,conversation:{targetId:t}})]):[3,2];case 1:return d=g.sent(),(f=d.code)!==Ee.SUCCESS?[2,{code:f}]:(p=d.data,h&&2===p.list.length&&(p.hasMore=!0,0===r?p.list.shift():p.list.pop()),[2,{code:f,data:{list:p.list,hasMore:p.hasMore}}]);case 2:return [2,{code:Ee.RC_NET_CHANNEL_INVALID}]}}))}))},t.prototype.reportSDKInfo=function(e){var t=this.currentUserId,n=this._channel;if(n){ge.info("reportSDKInfo ->",e);var i=n.codec.encodeReportSDKInfo(JSON.stringify(e)),r=new Or(br[br.reportsdk],i,t);n.send(r).then((function(e){var t=e.code;t!==Ee.SUCCESS&&ge.warn("reportSDKInfo failed -> code: "+t);}));}},t.prototype.deleteRemoteMessage=function(e,t,n,i){return M(this,void 0,void 0,(function(){var r,s,o,a,u,c,h;return w(this,(function(l){switch(l.label){case 0:return s=(r=this).currentUserId,(o=r._channel)?(a=o.codec.encodeDeleteMessages(e,t,n,i),u=new Or(Fi,a,s),[4,o.send(u)]):[3,2];case 1:return c=l.sent(),h=c.code,Ee.SUCCESS,[2,h];case 2:return [2,Ee.RC_NET_CHANNEL_INVALID]}}))}))},t.prototype.deleteRemoteMessageByTimestamp=function(e,t,n,i){return M(this,void 0,void 0,(function(){var r,s,o,a,u,c,h,l;return w(this,(function(d){switch(d.label){case 0:return s=(r=this).currentUserId,(o=r._channel)?(a=o.codec.encodeClearMessages(t,n,i,e),u=or[e],c=new Or(u,a,s),[4,o.send(c)]):[3,2];case 1:return h=d.sent(),l=h.code,Ee.SUCCESS,[2,l];case 2:return [2,Ee.RC_NET_CHANNEL_INVALID]}}))}))},t.prototype.getConversationList=function(e,t,n,i,r){return void 0===e&&(e=300),M(this,void 0,void 0,(function(){var r,s,o,a,u,c,h,l,d=this;return w(this,(function(f){switch(f.label){case 0:return s=(r=this).currentUserId,o=r._channel,t=t||j.PRIVATE,o?(a=o.codec.encodeOldConversationList({count:e,type:t,startTime:n,order:i}),u=new Or(Ji,a,s),[4,o.send(u,Kt,{currentUserId:s,connectedTime:o.connectedTime,afterDecode:function(e){var t=e.conversationType,n=e.targetId,i=e.channelId,r=d._conversationManager.get(t,n,i);return Object.assign(e,r),e}})]):[3,2];case 1:return c=f.sent(),h=c.code,l=c.data,h!==Ee.SUCCESS?[2,{code:h}]:[2,{code:h,data:null==l?void 0:l.list}];case 2:return [2,{code:Ee.RC_NET_CHANNEL_INVALID}]}}))}))},t.prototype.removeConversation=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r,s,o,a;return w(this,(function(u){switch(u.label){case 0:return (i=this._channel)?(r=i.codec.encodeRemoveOldConversationList({conversationType:e,channelId:n,targetId:t}),s=new Or(zi,r,t),[4,i.send(s)]):[3,2];case 1:return o=u.sent(),ge.info("RemoveConversation =>",o),a=o.code,Ee.SUCCESS,[2,a];case 2:return [2,Ee.RC_NET_CHANNEL_INVALID]}}))}))},t.prototype.getConversation=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r,s,o,a,u;return w(this,(function(c){switch(c.label){case 0:return e!==j.ULTRA_GROUP?[3,1]:(i=this._ultraGroupMap[n+"_"+t])?[3,3]:[2,{code:Ee.CONVER_GET_ERROR}];case 1:return (r=this._conversationManager.get(e,t,n))?[4,this.getHistoryMessage(e,t,0,1,0)]:[2,{code:Ee.CONVER_GET_ERROR}];case 2:if(s=c.sent(),o=s.code,a=s.data,o!==Ee.SUCCESS)return [2,{code:Ee.CONVER_GET_ERROR}];u=(null==a?void 0:a.list[0])||null,i={conversationType:e,targetId:t,channelId:n,unreadMessageCount:r.unreadMessageCount||0,latestMessage:u,notificationStatus:r.notificationStatus||Oe.CLOSE,isTop:r.isTop||!1,lastUnreadTime:r.lastUnreadTime||0,unreadMentionedCount:r.unreadMentionedCount||0},c.label=3;case 3:return [2,{code:Ee.SUCCESS,data:i}]}}))}))},t.prototype.getAllConversationUnreadCount=function(e,t,n){var i=this._conversationManager.getAllUnreadCount(e,t,n);return Promise.resolve({code:Ee.SUCCESS,data:i})},t.prototype.getConversationUnreadCount=function(e,t,n){var i,r;return r=e===j.ULTRA_GROUP?(null===(i=this._ultraGroupMap[n+"_"+t])||void 0===i?void 0:i.unreadMessageCount)||0:this._conversationManager.getUnreadCount(e,t,n),Promise.resolve({code:Ee.SUCCESS,data:r})},t.prototype.clearConversationUnreadCount=function(e,t,n){return this._conversationManager.clearUnreadCount(e,t,n,!1),Promise.resolve(Ee.SUCCESS)},t.prototype.clearAllUnreadCount=function(){return this._conversationManager.clearAllUnreadCount(),Promise.resolve(Ee.SUCCESS)},t.prototype.getFirstUnreadMessage=function(e,t){throw new Error("Method not implemented.")},t.prototype.saveConversationMessageDraft=function(e,t,n,i){return this._conversationManager.setDraft(e,t,n,i),Promise.resolve(Ee.SUCCESS)},t.prototype.getConversationMessageDraft=function(e,t,n){var i=this._conversationManager.getDraft(e,t,n);return Promise.resolve({code:Ee.SUCCESS,data:i})},t.prototype.clearConversationMessageDraft=function(e,t,n){return this._conversationManager.clearDraft(e,t,n),Promise.resolve(Ee.SUCCESS)},t.prototype.pullConversationStatus=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a,u,c,h=this;return w(this,(function(l){switch(l.label){case 0:return n=(t=this)._channel,i=t.currentUserId,n?(r=n.codec.encodeGetConversationStatus(e),s=new Or(br[br.pullSeAtts],r,i),[4,n.send(s,Bn)]):[3,2];case 1:return o=l.sent(),a=o.code,u=o.data,a!==Ee.SUCCESS?[2,{code:a}]:(c=[],Array.isArray(u)&&u.forEach((function(e){var t=e.conversationType,n=e.targetId,i=e.notificationStatus,r=e.channelId,s=e.isTop,o=h._ultraGroupMap[r+"_"+n];t===j.ULTRA_GROUP?o&&(void 0!==i&&(o.notificationStatus=i),"boolean"==typeof s&&(o.isTop=s)):c.push(e);})),[2,{code:a,data:c}]);case 2:return [2,{code:Ee.RC_NET_CHANNEL_INVALID}]}}))}))},t.prototype.batchSetConversationStatus=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a,u,c,h,l,d=this;return w(this,(function(f){switch(f.label){case 0:return n=(t=this).currentUserId,(i=t._channel)?(r=i.codec.encodeSetConversationStatus(e),s=new Or(Zi,r,n),[4,i.send(s,Kn)]):[3,2];case 1:return o=f.sent(),a=o.code,u=o.data,a===Ee.SUCCESS?(c=u,h=[],e.forEach((function(e){var t=e.conversationType,n=e.targetId,i=e.notificationStatus,r=e.channelId,s=e.isTop;if(t===j.ULTRA_GROUP){var o=d._ultraGroupMap[r+"_"+n];o&&(void 0!==i&&(o.notificationStatus=i),void 0!==s&&(o.isTop=s),h.push(o));}else d._conversationManager.addStatus(O(O({},e),{updatedTime:c.version}),!0);})),h.length>0&&(l=It(h),l=gs(l),this._watcher.conversation(l)),[2,a]):[2,a];case 2:return [2,Ee.RC_NET_CHANNEL_INVALID]}}))}))},t.prototype._joinChrm=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r,s,o,a,u,c;return w(this,(function(h){switch(h.label){case 0:return (i=this._channel)?(r=i.codec.encodeJoinOrQuitChatRoom(),s=new Or(n?Ki:qi,r,e),[4,i.send(s,Xt)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return o=h.sent(),a=o.code,u=o.data,a===Ee.SUCCESS&&(c=u.joinTime,this._chrmsQueue[e]||(this._chrmsQueue[e]={pulling:!1,queue:[],timestamp:0}),this._pullChrmMsg(e,t,c),this._naviInfo.kvStorage&&this._chrmEntryHandler.pullEntry(e,0),this._joinedChrmManager.set(e,t)),[2,a]}}))}))},t.prototype._rejoinChrm=function(){return M(this,void 0,void 0,(function(){var e,t,n,i,r,s;return w(this,(function(o){switch(o.label){case 0:for(n in e=this._joinedChrmManager.get(),t=[],e)t.push(n);i=0,o.label=1;case 1:return i<t.length?(r=t[i],[4,this._joinChrm(r,e[r]||10,!0)]):[3,4];case 2:(s=o.sent())===Ee.SUCCESS?this._watcher.chatroom({rejoinedRoom:{chatroomId:r,count:e[r]}}):this._watcher.chatroom({rejoinedRoom:{chatroomId:r,errorCode:s}}),o.label=3;case 3:return i++,[3,1];case 4:return [2]}}))}))},t.prototype._pullChrmMsg=function(e,t,n){return void 0===t&&(t=10),void 0===n&&(n=0),M(this,void 0,void 0,(function(){var i,r,s,o,a,u,c,h,l,d,f,p;return w(this,(function(g){switch(g.label){case 0:return this._channel?(i=this._chrmsQueue[e],r=i.pulling,s=i.timestamp,r?[2]:(i.pulling=!0,o=this._channel.codec.encodeChrmSyncMsg(s,t),a=new Or(br[br.chrmPull],o,e),[4,this._channel.send(a,Pt,{connectedTime:this._channel.connectedTime,currentUserId:this.currentUserId})])):[2];case 1:return u=g.sent(),c=u.code,h=u.data,i.pulling=!1,c===Ee.SUCCESS&&h?(l=h.list,d=h.syncTime,f=h.finished,i.timestamp=n?Math.max(d,n):d,i.queue=i.queue.filter((function(e){return e>d})),p=[],l.forEach((function(e){e.sentTime<s||p.push(e);})),this._watcher.batchMessage(p),(!f||i.queue.length>0)&&this._pullChrmMsg(e),[2]):(ge.warn("pull chatroom msg failed, code:",c,", data:",h),[2])}}))}))},t.prototype.joinChatroom=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return [2,this._joinChrm(e,t,!1)]}))}))},t.prototype.joinExistChatroom=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return [2,this._joinChrm(e,t,!0)]}))}))},t.prototype.quitChatroom=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s;return w(this,(function(o){switch(o.label){case 0:return (t=this._channel)?(n=t.codec.encodeJoinOrQuitChatRoom(),i=new Or(Hi,n,e),[4,t.send(i)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return r=o.sent(),(s=r.code)===Ee.SUCCESS&&(delete this._chrmsQueue[e],this._chrmEntryHandler.reset(e),this._joinedChrmManager.remove(e)),[2,s]}}))}))},t.prototype.getChatroomInfo=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r,s,o,a,u;return w(this,(function(c){switch(c.label){case 0:return (i=this._channel)?(r=i.codec.encodeGetChatRoomInfo(t,n),s=new Or(br[br.queryChrmI],r,e),[4,i.send(s,en)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return o=c.sent(),a=o.code,u=o.data,a!==Ee.SUCCESS?[2,{code:a}]:[2,{code:a,data:u}]}}))}))},t.prototype.getChatroomHistoryMessages=function(e,t,n,i){return M(this,void 0,void 0,(function(){var r,s,o,a,u,c;return w(this,(function(h){switch(h.label){case 0:return (r=this._channel)?(s=r.codec.encodeGetHistoryMsg(e,{timestamp:t,count:n,order:i}),o=new Or(tr,s,e),[4,r.send(o,Ft,{conversation:{targetId:e}})]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return a=h.sent(),u=a.code,c=a.data,u!==Ee.SUCCESS?[2,{code:u}]:[2,{code:u,data:{list:c.list,hasMore:c.hasMore}}]}}))}))},t.prototype._modifyChatroomKV=function(e,t){return M(this,void 0,void 0,(function(){var n,i,r,s,o,a,u,c,h;return w(this,(function(l){switch(l.label){case 0:return i=(n=this)._channel,r=n.currentUserId,i?(s=this._chrmEntryHandler.getVersion(e,t.key),t.version=null==s?this.getServerTime():s,o=i.codec.encodeModifyChatRoomKV(e,t,r),a=t.type===Le.UPDATE?Yi:ji,u=new Or(a,o,e),[4,i.send(u,Xt)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return c=l.sent(),(h=c.code)===Ee.SUCCESS?(this._chrmEntryHandler.setLocal(e,{kvEntries:[t],syncTime:(new Date).getTime()},r),[2,h]):[2,h]}}))}))},t.prototype._modifyChatroomKVS=function(e,t){return M(this,void 0,void 0,(function(){var n,i,r,s,o,a,u,c,h,l,d,f,p=this;return w(this,(function(g){switch(g.label){case 0:return i=(n=this)._channel,r=n.currentUserId,i?(t.entries.forEach((function(t){var n=p._chrmEntryHandler.getVersion(e,t.key);t.version=null==n?p.getServerTime():n;})),s=i.codec.encodeModifyChatRoomKVS(e,t,r),o=t.type===Le.UPDATE?Qi:Wi,a=new Or(o,s,e),[4,i.send(a,wn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return u=g.sent(),c=u.code,-1!==[Ee.SUCCESS,Ee.CHATROOM_KV_STORE_NOT_ALL_SUCCESS].indexOf(c)&&(l=[],delete(d=Object.assign({},t)).entries,t.entries.forEach((function(e){l.push(Object.assign({},e,d));})),c===Ee.CHATROOM_KV_STORE_NOT_ALL_SUCCESS&&(f=u.data,ge.warn("设置失败的属性：",f.errorKeys),h=f.errorKeys,f&&Array.isArray(f.errorKeys)&&f.errorKeys.forEach((function(e){var t=l.findIndex((function(t){return e.key===t.key}));-1!==t&&l.splice(t,1);}))),ge.warn("设置成功的属性：",l),this._chrmEntryHandler.setLocal(e,{kvEntries:l,syncTime:(new Date).getTime()},r)),[2,{code:c,data:h}]}}))}))},t.prototype.setChatroomEntry=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return t.type=Le.UPDATE,t.userId=t.userId||this.currentUserId,[2,this._modifyChatroomKV(e,t)]}))}))},t.prototype.setChatroomEntries=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return t.type=Le.UPDATE,t.userId=t.userId||this.currentUserId,[2,this._modifyChatroomKVS(e,t)]}))}))},t.prototype.forceSetChatroomEntry=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return t.type=Le.UPDATE,t.isOverwrite=!0,t.userId=t.userId||this.currentUserId,[2,this._modifyChatroomKV(e,t)]}))}))},t.prototype.removeChatroomEntry=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return t.type=Le.DELETE,t.userId=t.userId||this.currentUserId,[2,this._modifyChatroomKV(e,t)]}))}))},t.prototype.removeChatroomEntries=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return t.type=Le.DELETE,t.userId=t.userId||this.currentUserId,[2,this._modifyChatroomKVS(e,t)]}))}))},t.prototype.forceRemoveChatroomEntry=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return t.type=Le.DELETE,t.isOverwrite=!0,t.userId=t.userId||this.currentUserId,[2,this._modifyChatroomKV(e,t)]}))}))},t.prototype.getChatroomEntry=function(e,t){return M(this,void 0,void 0,(function(){var n,i,r,s,o,a,u;return w(this,(function(c){switch(c.label){case 0:return (n=this._chrmEntryHandler.getValue(e,t))?[2,Promise.resolve({code:Ee.SUCCESS,data:n})]:[3,1];case 1:return (i=this._channel)?(r=i.codec.encodePullChatRoomKV(0),s=new Or(br[br.pullKV],r,e),[4,i.send(s,Mn)]):[2,Promise.reject({code:Ee.RC_NET_CHANNEL_INVALID})];case 2:return o=c.sent(),(a=o.data||{})&&a.kvEntries&&a.kvEntries.length&&void 0!==(u=a.kvEntries.find((function(e){return e.key===t})))?[2,Promise.resolve({code:Ee.SUCCESS,data:null==u?void 0:u.value})]:[2,Promise.resolve({code:Ee.CHATROOM_KEY_NOT_EXIST})]}}))}))},t.prototype.getAllChatroomEntry=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a;return w(this,(function(u){switch(u.label){case 0:return (t=this._chrmEntryHandler.getAll(e))&&Object.keys(t).length?[2,Promise.resolve({code:Ee.SUCCESS,data:t})]:[3,1];case 1:return (n=this._channel)?(i={},r=n.codec.encodePullChatRoomKV(0),s=new Or(br[br.pullKV],r,e),[4,n.send(s,Mn)]):[2,Promise.reject({code:Ee.RC_NET_CHANNEL_INVALID})];case 2:return o=u.sent(),(a=o.data||{})&&a.kvEntries&&a.kvEntries.length&&a.kvEntries.forEach((function(e){e.key&&(i[e.key]=e.value||"");})),[2,Promise.resolve({code:Ee.SUCCESS,data:i})]}}))}))},t.prototype.pullChatroomEntry=function(e,t){return M(this,void 0,void 0,(function(){var n,i,r,s,o,a,u,c,h,l,d,f;return w(this,(function(p){switch(p.label){case 0:return i=(n=this)._channel,r=n.currentUserId,i?(t||(t=this._pullChatroomEntryTimestamp),s=i.codec.encodePullChatRoomKV(t),o=new Or(br[br.pullKV],s,e),[4,i.send(o,Mn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return a=p.sent(),u=a.code,c=a.data,u===Ee.SUCCESS?(ge.info("Pull success ChrmKV, "+JSON.stringify(a)),this._chrmEntryHandler.setLocal(e,c,r),ge.info("Save into cache success!"),l=(h=c).kvEntries,d=h.syncTime,this._pullChatroomEntryTimestamp=d||0,f=[],l.length>0&&(l.forEach((function(t){var n=t.key,i=t.value,r=t.type,s=t.timestamp;f.push({key:n,value:i,type:r,timestamp:s,chatroomId:e});})),this._watcher.chatroom({updatedEntries:f})),[2,{code:u,data:c}]):[2,{code:u}]}}))}))},t.prototype.sendMessage=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r,s,o,a,u,c,h,l,d;return w(this,(function(f){switch(f.label){case 0:return this._channel?(n=function(e,t){return "RC:SRSMsg"===e.messageType&&Object.assign(e,{directionalUserIdList:[t]}),e}(n,this.currentUserId),n=this._handleMsgProperties(n,!0),i=!![j.PRIVATE,j.GROUP].includes(e)&&n.isStatusMessage,r=i?function(e){var t;return (t={},t[j.PRIVATE]=br.ppMsgS,t[j.GROUP]=br.pgMsgS,t)[e]}(e):function(e){var t;return (t={},t[j.PRIVATE]=br.ppMsgP,t[j.GROUP]=br.pgMsgP,t[j.CHATROOM]=br.chatMsg,t[j.CUSTOMER_SERVICE]=br.pcMsgP,t[j.RTC_ROOM]=br.prMsgS,t)[e]}(e)||br.ppMsgP,i&&(n.isPersited=!1,n.isCounted=!1),s=this._channel.codec.encodeUpMsg({conversationType:e,targetId:t},n),(o=new Rr(br[r],s,t)).setHeaderQos(ze.AT_LEAST_ONCE),i?(this._channel.sendOnly(o),[2,{code:Ee.SUCCESS,data:ps(e,t,O({},n),"",0,this.currentUserId)}]):(a=Date.now()-this._localConnectedTime+this._connectedTime,u=ps(e,t,O({},n),"",a,this.currentUserId),[4,this._channel.send(o)])):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return c=f.sent(),h=c.code,l=c.data,h!==Ee.SUCCESS?[2,{code:h,data:u}]:(d=l,this._sendMessageStore.setMessage(d.messageUId,d.timestamp),u.sentTime=d.timestamp,u.messageUId=d.messageUId,this._conversationManager.setConversationCacheByMessage(u,!0),[2,{code:Ee.SUCCESS,data:u}])}}))}))},t.prototype.recallMsg=function(e,t,n,i,r){var s;return M(this,void 0,void 0,(function(){var o,a,u,c,h,l,d,f,p,g;return w(this,(function(_){switch(_.label){case 0:return this._channel?(o=r.user,a={content:{conversationType:e,targetId:t,messageUId:n,sentTime:i,user:o},messageType:"RC:RcCmd",disableNotification:null==r?void 0:r.disableNotification,pushConfig:null==r?void 0:r.pushConfig,pushContent:(null===(s=r.pushConfig)||void 0===s?void 0:s.pushContent)||r.pushContent||"",channelId:r.channelId},u=br[br.recallMsg],c=this._channel.codec.encodeUpMsg({conversationType:e,targetId:t},a),(h=new Rr(u,c,this.currentUserId)).setHeaderQos(ze.AT_LEAST_ONCE),[4,this._channel.send(h)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return l=_.sent(),d=l.code,f=l.data,d!==Ee.SUCCESS?[2,{code:d}]:(p=f,e===j.ULTRA_GROUP?(this._ultraMsgMap[p.messageUId]=p.timestamp,[2,{code:Ee.SUCCESS}]):(this._sendMessageStore.setMessage(p.messageUId,p.timestamp),g=ps(e,t,O(O({},a),{isPersited:!0}),p.messageUId,p.timestamp,this.currentUserId),this._conversationManager.setConversationCacheByMessage(g,!0),[2,{code:Ee.SUCCESS,data:g}]))}}))}))},t.prototype.sendReadReceiptMessage=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r;return w(this,(function(s){switch(s.label){case 0:return this._channel?(i=this._channel.codec.encodeReadReceipt(t,n),r=new Or(br[br.rrMsg],i,e),[4,this._channel.send(r)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return [2,s.sent()]}}))}))},t.prototype.getMessageReader=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r;return w(this,(function(s){switch(s.label){case 0:return this._channel?(i=this._channel.codec.encodeMessageReader(t,n),r=new Or(br[br.rrList],i,e),[4,this._channel.send(r,jn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return [2,s.sent()]}}))}))},t.prototype.pullUserSettings=function(e){return M(this,void 0,void 0,(function(){var t,n;return w(this,(function(i){return this._channel?(t=this._channel.codec.encodePullUserSetting(e),n=new Or(br[br.pullUS],t,this.currentUserId),[2,this._channel.send(n,Vn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}]}))}))},t.prototype.getFileToken=function(e,t,n,i){return M(this,void 0,void 0,(function(){var r,s,o,a,u,c;return w(this,(function(h){switch(h.label){case 0:return this._channel?(r=i&&"uploads"!==i?t||"":ot(e,t),s=this._channel.codec.encodeGetFileToken(e,r,n||"",i||""),o=new Or(br[br.qnTkn],s,this.currentUserId),[4,this._channel.send(o,vn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return a=h.sent(),u=a.code,c=a.data,c=Object.assign(c,{fileName:r}),u===Ee.SUCCESS?[2,{code:u,data:c}]:[2,{code:u}]}}))}))},t.prototype.getFileUrl=function(e,t,n,i){return M(this,void 0,void 0,(function(){var r,s,o,a,u,c,h,l,d;return w(this,(function(f){switch(f.label){case 0:return this._channel?(r="",s="",o="",t===Ue.QINIU?(s=En,o=In):(s=Tn,o=Cn),r=t===Ue.QINIU?br[br.qnUrl]:t===Ue.AWS?br[br.s3Url]:t===Ue.STC?br[br.stcUrl]:br[br.aliUrl],a=this._channel.codec.encodeGetFileUrl(s,e,n,i),u=new Or(r,a,this.currentUserId),[4,this._channel.send(u,o)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return c=f.sent(),h=c.code,l=c.data,d=l,h===Ee.SUCCESS?[2,{code:h,data:d}]:[2,{code:h}]}}))}))},t.prototype.disconnect=function(){-1!==this._reconnectTimer&&(clearTimeout(this._reconnectTimer),this._reconnectTimer=-1),this._channel&&(this._channel.close(),this._channel=void 0),this._pullQueue.length=0,this._stopSyncInterval(),this._stopUltraSyncInterval();},t.prototype.destroy=function(){throw new Error("JSEngine's method not implemented.")},t.prototype.registerMessageType=function(e,t,n,i,r){this._customMessageType[e]={isPersited:t,isCounted:n,isStatusMessage:r};},t.prototype.getServerTime=function(){return Date.now()-this._localConnectedTime+this._connectedTime},t.prototype.getCurrentUserId=function(){return this.currentUserId},t.prototype.createTag=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a;return w(this,(function(u){switch(u.label){case 0:return this._channel?(t=this._userSettingManager.getVersion(),n=this._channel.codec.encodeCreateTag([e],t),i=new Or(br[br.addSeTag],n,this.currentUserId),[4,this._channel.send(i,Pn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return r=u.sent(),s=r.code,o=r.data,s!==Ee.SUCCESS?[2,{code:s}]:(a=o.version,this._userSettingManager.addTag([O(O({},e),{createdTime:a})],a),[2,{code:Ee.SUCCESS,data:o}])}}))}))},t.prototype.removeTag=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a;return w(this,(function(u){switch(u.label){case 0:return this._channel?(t=this._userSettingManager.getVersion(),n=this._channel.codec.encodeRemoveTag([e],t),i=new Or(br[br.delSeTag],n,this.currentUserId),[4,this._channel.send(i,Pn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return r=u.sent(),s=r.code,o=r.data,s!==Ee.SUCCESS?[2,{code:s}]:(a=o.version,this._userSettingManager.deleteTag([e],a),[2,{code:Ee.SUCCESS}])}}))}))},t.prototype.updateTag=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a;return w(this,(function(u){switch(u.label){case 0:return this._channel?(t=this._userSettingManager.getVersion(),n=this._channel.codec.encodeCreateTag([e],t),i=new Or(br[br.addSeTag],n,this.currentUserId),[4,this._channel.send(i,Pn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return r=u.sent(),s=r.code,o=r.data,s!==Ee.SUCCESS?[2,{code:s}]:(a=o.version,this._userSettingManager.addTag([e],a),[2,{code:Ee.SUCCESS,data:o}])}}))}))},t.prototype.getTagList=function(){return M(this,void 0,void 0,(function(){var e,t;return w(this,(function(n){return e=this._userSettingManager.getTags(),t=this._conversationManager.getConversationListForTag(),e.forEach((function(e){e.conversationCount=t[e.tagId]?t[e.tagId].length:0;})),[2,{code:Ee.SUCCESS,data:e}]}))}))},t.prototype.addTagForConversations=function(e,t){return M(this,void 0,void 0,(function(){var n,i,r,s,o=this;return w(this,(function(a){switch(a.label){case 0:return this._channel?this._userSettingManager.getTagById(e)?(n=this._channel.codec.encodeUpdateConversationTag([{tagId:e}],t),i=new Or(br[br.addTag],n,this.currentUserId),[4,this._channel.send(i)]):[2,{code:Ee.TAG_NOT_EXIST}]:[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return (r=a.sent().code)!==Ee.SUCCESS?[2,{code:r}]:((s={})[e]={},t.forEach((function(e){o._conversationManager.addTagStatus(e.conversationType,e.targetId,s,e.channelId);})),[2,{code:Ee.SUCCESS}])}}))}))},t.prototype.removeTagForConversations=function(e,t){return M(this,void 0,void 0,(function(){var n,i,r,s=this;return w(this,(function(o){switch(o.label){case 0:return this._channel?(n=this._channel.codec.encodeUpdateConversationTag([{tagId:e}],t),i=new Or(br[br.delTag],n,this.currentUserId),[4,this._channel.send(i)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return (r=o.sent().code)!==Ee.SUCCESS?[2,{code:r}]:(t.forEach((function(t){s._conversationManager.deleteTagStatus(t.conversationType,t.targetId,[e],t.channelId);})),[2,{code:Ee.SUCCESS}])}}))}))},t.prototype.removeTagsForConversation=function(e,t){return M(this,void 0,void 0,(function(){var n,i,r,s,o,a,u;return w(this,(function(c){switch(c.label){case 0:return this._channel?(n=e.conversationType,i=e.targetId,r=e.channelId,s=t.map((function(e){return {tagId:e}})),o=this._channel.codec.encodeUpdateConversationTag(s,[e]),a=new Or(br[br.delTag],o,this.currentUserId),[4,this._channel.send(a)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return (u=c.sent().code)!==Ee.SUCCESS?[2,{code:u}]:(this._conversationManager.deleteTagStatus(n,i,t,r),[2,{code:Ee.SUCCESS}])}}))}))},t.prototype.getConversationListByTag=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r,s,o,a,u,c,h,l;return w(this,(function(d){switch(d.label){case 0:return r=(i=this).currentUserId,(s=i._channel)?(o=s.codec.encodeOldConversationList({count:n,type:j.PRIVATE,startTime:t}),a=new Or(Ji,o,r),[4,s.send(a,Kt,{currentUserId:r,connectedTime:s.connectedTime})]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return u=d.sent(),c=u.code,h=u.data,l=this._conversationHasTagFilter(e,null==h?void 0:h.list),ge.info("GetConversationListByTag",l),c!==Ee.SUCCESS?[2,{code:c}]:[2,{code:c,data:l}]}}))}))},t.prototype._conversationHasTagFilter=function(e,t){var n=this,i=[],r=[];function s(e,t){return e.latestMessage&&t.latestMessage?e.latestMessage.sentTime-t.latestMessage.sentTime:0}return t.forEach((function(t){var s=t.conversationType,o=t.targetId,a=t.channelId,u=n._conversationManager.get(s,o,a),c=u.hasMentioned,h=u.mentionedInfo,l=u.lastUnreadTime,d=u.notificationStatus,f=u.isTop,p=u.tags,g=u.unreadMessageCount,_=p&&p[e];if(_){var y=O(O({},t),{hasMentioned:c,mentionedInfo:h,lastUnreadTime:l,notificationStatus:d,isTop:f,unreadMessageCount:g});_.isTop?i.push(O(O({},y),{isTopInTag:!0})):r.push(O(O({},y),{isTopInTag:!1}));}})),A(A([],i.sort(s)),r.sort(s))},t.prototype.getUnreadCountByTag=function(e,t){return M(this,void 0,void 0,(function(){var n;return w(this,(function(i){return this._channel?(n=this._conversationManager.getUnreadCountByTag(e,t),[2,{code:Ee.SUCCESS,data:n}]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}]}))}))},t.prototype.setConversationStatusInTag=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r,s,o,a,u,c,h,l,d;return w(this,(function(f){switch(f.label){case 0:return this._channel?(i=t.targetId,r=t.conversationType,s=t.channelId,o=n.isTop,a=[{tagId:e,isTop:o}],(u=this._conversationManager.get(r,i,s)).tags&&Object.hasOwnProperty.call(u.tags,e)?(c=this._channel.codec.encodeUpdateConversationTag(a,[t]),h=new Or(br[br.addTag],c,this.currentUserId),[4,this._channel.send(h)]):[2,{code:Ee.NO_TAG_IN_CONVER}]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return (l=f.sent().code)!==Ee.SUCCESS?[2,{code:l}]:((d={})[e]={},o&&(d[e].isTop=!0),this._conversationManager.addTagStatus(r,i,d,s),[2,{code:Ee.SUCCESS}])}}))}))},t.prototype.getTagsForConversation=function(e){var t;return M(this,void 0,void 0,(function(){var n,i,r,s;return w(this,(function(o){if(!this._channel)return [2,{code:Ee.RC_NET_CHANNEL_INVALID}];if(n=this._conversationManager.get(e.conversationType,e.targetId,e.channelId),i=this._userSettingManager.getTagsInfo(),r=[],n.tags)for(s in n.tags)r.push({tagId:s,tagName:null===(t=i[s])||void 0===t?void 0:t.tagName});return [2,{code:Ee.SUCCESS,data:r}]}))}))},t.prototype.getBlockConversationList=function(){var e=this._conversationManager.getBlockConversationList();return Promise.resolve({code:Ee.SUCCESS,data:e})},t.prototype.getTopConversationList=function(){var e=this._conversationManager.getTopConversationList();return Promise.resolve({code:Ee.SUCCESS,data:e})},t.prototype.getUnreadMentionedCount=function(e){var t,n;return n=e.conversationType===j.ULTRA_GROUP?(null===(t=this._ultraGroupMap[e.channelId+"_"+e.targetId])||void 0===t?void 0:t.unreadMentionedCount)||0:this._conversationManager.getUnreadMentionedCount(e.channelId,e.conversationType,e.targetId),Promise.resolve({code:Ee.SUCCESS,data:n})},t.prototype.getAllUnreadMentionedCount=function(){var e=this._conversationManager.getAllUnreadMentionedCount();return Promise.resolve({code:Ee.SUCCESS,data:e})},t.prototype.getUltraGroupList=function(){return M(this,void 0,void 0,(function(){var e,t;return w(this,(function(n){return this._isUltraGroupListExist?(e=Object.values(this._ultraGroupMap),e=gs(e),t=It(e),[2,{code:Ee.SUCCESS,data:t}]):[2,{code:Ee.METHOD_NOT_AVAILABLE}]}))}))},t.prototype.getBlockUltraGroupList=function(){if(!this._isUltraGroupListExist)return Promise.resolve({code:Ee.METHOD_NOT_AVAILABLE});var e=Object.values(this._ultraGroupMap),t=[];return e.forEach((function(e){e.notificationStatus===Oe.OPEN&&t.push({conversationType:j.ULTRA_GROUP,targetId:e.targetId,channelId:e.channelId});})),Promise.resolve({code:Ee.SUCCESS,data:t})},t.prototype.getTopUltraGroupList=function(){if(!this._isUltraGroupListExist)return Promise.resolve({code:Ee.METHOD_NOT_AVAILABLE});var e=Object.values(this._ultraGroupMap),t=[];return e.forEach((function(e){!0===e.isTop&&t.push({conversationType:j.ULTRA_GROUP,targetId:e.targetId,channelId:e.channelId});})),Promise.resolve({code:Ee.SUCCESS,data:t})},t.prototype.getUltraGroupUnreadMentionedCountByTargetId=function(e){if(!this._isUltraGroupListExist)return Promise.resolve({code:Ee.METHOD_NOT_AVAILABLE});var t=0;for(var n in this._ultraGroupMap){n.match(/_.*/g)[0].substring(1)===e&&(t+=this._ultraGroupMap[n].unreadMentionedCount);}return Promise.resolve({code:Ee.SUCCESS,data:t})},t.prototype.clearUltraUnreadcount=function(e,t){return void 0===t&&(t=""),M(this,void 0,void 0,(function(){var n,i,r,s,o;return w(this,(function(a){switch(a.label){case 0:return this._isUltraGroupListExist?this._channel?this._status!==Ie.CONNECTED?[2,Ee.RC_NET_UNAVAILABLE]:(n=Date.now(),i=this._channel.codec.encodeClearUnreadCount({conversationType:j.ULTRA_GROUP,targetId:e,channelId:t},{timestamp:n}),(r=new Rr(br[br.updUgRTime],i,this.currentUserId)).setHeaderQos(ze.AT_LEAST_ONCE),[4,this._channel.send(r)]):[2,Ee.RC_NET_CHANNEL_INVALID]:[2,Promise.resolve(Ee.METHOD_NOT_AVAILABLE)];case 1:return (s=a.sent().code)===Ee.SUCCESS&&(o=this._ultraGroupMap[t+"_"+e])&&(o.unreadMessageCount=0,o.unreadMentionedCount=0,o.lastReadTime=n),[2,s]}}))}))},t.prototype._getUltraGroupList=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a,u,c,h,l,d,f,p=this;return w(this,(function(g){switch(g.label){case 0:return this._channel&&this._status===Ie.CONNECTED?(t=this._channel.codec.encodeUltraGroup(e,false),n=new Or(br[br.pullUgSes],t,this.currentUserId),[4,this._channel.send(n,Kt,{currentUserId:this.currentUserId,conversationType:j.ULTRA_GROUP})]):[2];case 1:return i=g.sent(),r=i.code,s=i.data,r===Ee.SUCCESS&&s?(a=(null==s?void 0:s.list)||[],u=null==s?void 0:s.isFinished,a.forEach((function(e){e.notificationStatus=Oe.CLOSE,e.isTop=!1,p._ultraGroupMap[e.channelId+"_"+e.targetId]=e;})),!1!==u?[3,2]:(c=a.length>0&&a[a.length-1].versionTime||0,this._getUltraGroupList(c),[3,4])):(ge.warn("pull super conversation  failed, code:",r,", data:",s,"retrying..."),o=setTimeout((function(){p._firstPullUltraGroupTime=e,p._getUltraGroupList(e),clearTimeout(o);}),3e3),[2]);case 2:return [4,this.pullConversationStatus(this._firstPullUltraGroupTime)];case 3:h=g.sent(),l=h.code,d=h.data,l!==Ee.SUCCESS&&ge.warn("pullConversationStatus fail code: "+l+", data: "+d),f=Object.values(this._ultraGroupMap),f=gs(f),this._isUltraGroupListExist=!0,this._watcher.ultraGroupEnable(It(f)),0===this._firstPullUltraGroupTime&&this._syncUltraMsg(this._lastSyncUltraMsgTimeStamp),g.label=4;case 4:return [2]}}))}))},t.prototype._startUltraSyncInterval=function(){var e=this,t=function(){e._ultraGroupTimer=setTimeout((function(){Date.now()-e._lastSyncUltraMsgLocalTimeStamp>=18e4&&e._syncUltraMsg(e._lastSyncUltraMsgTimeStamp),e._stopUltraSyncInterval(),t();}),3e4);};this._lastSyncUltraMsgLocalTimeStamp=Date.now(),this._syncUltraMsg(0),t();},t.prototype._stopUltraSyncInterval=function(){-1!==this._ultraGroupTimer&&(clearTimeout(this._ultraGroupTimer),this._ultraGroupTimer=-1);},t.prototype._syncUltraMsg=function(e){var t;return M(this,void 0,void 0,(function(){var n,i,r,s,o,a,u,c,h,l,d,f,p=this;return w(this,(function(g){switch(g.label){case 0:return this._channel&&this._status===Ie.CONNECTED?this._isUltraPulling?[2]:(ge.info("start pull ultra msg, time: "+e),this._isUltraPulling=!0,n=this._channel.codec.encodeSuperSyncMsg(e),i=new Or(br[br.pullUgMsg],n,this.currentUserId),[4,this._channel.send(i,Pt,{currentUserId:this.currentUserId,conversation:{conversationType:j.ULTRA_GROUP}})]):[2];case 1:if(r=g.sent(),s=r.code,o=r.data,ge.info("end pull ultra msg, code: "+s+", syncTime: "+(null==o?void 0:o.syncTime)+", count: "+(null===(t=null==o?void 0:o.list)||void 0===t?void 0:t.length)),this._lastSyncUltraMsgLocalTimeStamp=Date.now(),s!==Ee.SUCCESS||!o)return ge.warn("sync super  message  failed, code:",s,", data:",o),this._isUltraPulling=!1,[2];if(this._isUltraPulling=!1,a=o.list,u=o.syncTime,c=o.finished,!this._isUltraGroupListExist)return ge.info("init getUltraGroupList"),this._firstPullUltraGroupTime=0,this._getUltraGroupList(0),this._lastSyncUltraMsgTimeStamp=u,[2];for(f in h={},l=[],a.forEach((function(e){var t,n,i,r=e.targetId,s=e.content,o=e.messageType,a=e.messageUId,c=e.channelId,d=e.isCounted;if(p._ultraMsgMap[a])delete p._ultraMsgMap[a];else {var f=0;((null===(t=null==s?void 0:s.mentionedInfo)||void 0===t?void 0:t.type)===we.ALL||(null===(i=null===(n=null==s?void 0:s.mentionedInfo)||void 0===n?void 0:n.userIdList)||void 0===i?void 0:i.includes(p.currentUserId)))&&(f=1);var g=p._ultraGroupMap[c+"_"+r];if(g)d&&(o===Se.RECALL?g.unreadMessageCount>0&&(g.unreadMessageCount-=1):(g.unreadMessageCount+=1,g.unreadMentionedCount+=f)),g.versionTime=u,g.latestMessage=e,h[c+"_"+r]=g;else {var _={conversationType:j.ULTRA_GROUP,targetId:r,channelId:c,unreadMessageCount:d?1:0,unreadMentionedCount:d?f:0,versionTime:u,latestMessage:e,notificationStatus:Oe.CLOSE,isTop:!1};p._ultraGroupMap[c+"_"+r]=_,h[c+"_"+r]=_;}l.push(e);}})),Object.keys(h).length>0&&(ge.info("notice ultragroups"),d=Object.values(h),d=gs(d),this._watcher.conversation(It(d))),ge.info("notice ultragroup message"),this._watcher.batchMessage(l),this._ultraGroupTimeQue=this._ultraGroupTimeQue.filter((function(e){return e>u})),this._ultraMsgMap)this._ultraMsgMap[f]<u&&delete this._ultraMsgMap[f];return !1===c?this._syncUltraMsg(u):a&&a.length>0&&(this._lastSyncUltraMsgTimeStamp=u),this._ultraGroupTimeQue.length>0&&this._syncUltraMsg(this._lastSyncUltraMsgTimeStamp),[2]}}))}))},t.prototype.sendUltraMessage=function(e,t){return M(this,void 0,void 0,(function(){var n,i,r,s,o,a,u,c,h,l;return w(this,(function(d){switch(d.label){case 0:return this._channel?this._status!==Ie.CONNECTED?[2,{code:Ee.RC_NET_UNAVAILABLE}]:("RC:SRSMsg"===t.messageType&&ge.warn("ultra group -> direction message convert to message"),t=this._handleMsgProperties(t,!0),n=this._channel.codec.encodeUpMsg({conversationType:j.ULTRA_GROUP,targetId:e},t),(i=new Rr(br[br.ugMsg],n,e)).setHeaderQos(ze.AT_LEAST_ONCE),r=Date.now()-this._localConnectedTime+this._connectedTime,s=ps(j.ULTRA_GROUP,e,O({},t),"",r,this.currentUserId),[4,this._channel.send(i)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return o=d.sent(),a=o.code,u=o.data,a!==Ee.SUCCESS?[2,{code:a,data:s}]:(c=u,s.sentTime=c.timestamp,s.messageUId=c.messageUId,this._ultraMsgMap[c.messageUId]=c.timestamp,h=t.channelId||"",(l=this._ultraGroupMap[h+"_"+e])?l.latestMessage=s:(l={conversationType:j.ULTRA_GROUP,targetId:e,channelId:h,unreadMessageCount:0,unreadMentionedCount:0,versionTime:s.sentTime,latestMessage:s,notificationStatus:Oe.CLOSE,isTop:!1},this._ultraGroupMap[h+"_"+e]=l),this._watcher.conversation(It([l])),[2,{code:a,data:s}])}}))}))},t.prototype.sendUltraGroupTypingStatus=function(e,t){return M(this,void 0,void 0,(function(){var n,i,r,s,o,a;return w(this,(function(u){switch(u.label){case 0:return this._channel?this._status!==Ie.CONNECTED?[2,{code:Ee.RC_NET_UNAVAILABLE}]:(n=e.conversationType,i=e.channelId,r=e.targetId,s=this._channel.codec.encodeOperateStatus(r,n,i||"",t||0),(o=new Rr(br[br.operate],s,r)).setHeaderQos(ze.AT_LEAST_ONCE),[4,this._channel.send(o)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return (a=u.sent().code)!==Ee.SUCCESS?[2,{code:a,msg:Ee[a]}]:[2,{code:a}]}}))}))},t.prototype.getUltraGroupMessageListByMessageUId=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a;return w(this,(function(u){switch(u.label){case 0:return this._channel?this._status!==Ie.CONNECTED?[2,{code:Ee.RC_NET_UNAVAILABLE}]:e.messages&&e.messages.length<1||e.messages&&e.messages.length>20?[2,{code:Ee.MSG_LIMIT_ERROR}]:(t={},e.messages.forEach((function(e){t[e.messageUId]=void 0;})),n=this._channel.codec.encodeMsgQuery(e),(i=new Or(br[br.qryMsg],n,this.currentUserId)).setHeaderQos(ze.AT_LEAST_ONCE),[4,this._channel.send(i,ui)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return r=u.sent(),s=r.code,o=r.data,s!==Ee.SUCCESS?[2,{code:s,msg:Ee[s]}]:(a=(o||{}).list,Array.isArray(a)&&a.forEach((function(e){var n=e.messageUId;t[n]=e;})),[2,{code:0,data:t}])}}))}))},t.prototype._pullOperateStatusNotify=function(e){if(this._channel){var t=this._channel.codec.decodeByPBName(e.data,hi),n=t.conversationType,i=t.info,r=t.summary;ge.info("s_opNtf -> type: "+n+", info: "+i+", summary: "+r),this._watcher.operateStatus(t);}},t.prototype.expandUltraMessage=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o;return w(this,(function(a){switch(a.label){case 0:return this._channel?this._status!==Ie.CONNECTED?[2,{code:Ee.RC_NET_UNAVAILABLE}]:(t=this._channel.codec.encodeExpandUltraMessage(e,this.currentUserId),(n=new Rr(br[br.upMsgEx],t,e.targetId)).setHeaderQos(ze.AT_LEAST_ONCE),[4,this._channel.send(n)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return i=a.sent(),r=i.code,s=i.data,r!==Ee.SUCCESS?[2,{code:r,msg:Ee[r]}]:(o=s,this._ultraMsgMap[o.messageUId]=o.timestamp,[2,{code:r}])}}))}))},t.prototype.modifyMessage=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o;return w(this,(function(a){switch(a.label){case 0:return this._channel?this._status!==Ie.CONNECTED?[2,{code:Ee.RC_NET_UNAVAILABLE}]:(t=this._channel.codec.encodemodifyMessage(e,this.currentUserId),(n=new Rr(br[br.modifyMsg],t,e.targetId)).setHeaderQos(ze.AT_LEAST_ONCE),[4,this._channel.send(n)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return i=a.sent(),r=i.code,s=i.data,r!==Ee.SUCCESS?[2,{code:r,msg:Ee[r]}]:(o=s,this._ultraMsgMap[o.messageUId]=o.timestamp,[2,{code:r}])}}))}))},t.prototype._pullUltraChangeMessageList=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a,u,c,h,l,d,f,p,g,_,y,m=this;return w(this,(function(v){switch(v.label){case 0:return this._channel?this._status!==Ie.CONNECTED||this._isPullingUltraChangeMessage?[2]:(this._isPullingUltraChangeMessage=!0,t=this._channel.codec.encodeQueryMsgChange(e),(n=new Rr(br[br.qryMsgChange],t,this.currentUserId)).setHeaderQos(ze.AT_LEAST_ONCE),[4,this._channel.send(n,si)]):[2];case 1:if(i=v.sent(),r=i.code,s=i.data,this._isPullingUltraChangeMessage=!1,r!==Ee.SUCCESS)return [2];for(p in a=(o=s||{}).hasNext,u=o.list,c=(null==s?void 0:s.syncTime)||0,h=[],l={},Array.isArray(u)&&u.forEach((function(e){var t=e,n=t.targetId,i=t.conversationType,r=t.sendTime,s=t.messageUId,o=t.changeType,a=t.operatorId,u=e.channelId||"",c=i+"_"+n,d=s+"_"+u+"_"+r,f=l[c];if(f)f.add(d);else {var p=new Set([d]);l[c]=p;}3!==o?m._ultraMsgChangeMap[s]=o:h.push({targetId:n,conversationType:i,sendTime:r,messageUId:s,senderUserId:a,channelId:u});})),Array.isArray(h)&&h.length>0&&this._watcher.ultraGroupMessageRecalled(h),d=function(e){var t=e.split("_"),n=t.shift(),i=t.join("_"),r=l[e],s=[];r.forEach((function(e){var t=e.split("_"),n=t[0],i=t[1],r=t[2];s.push({sendTime:Number(r),messageUId:n,channelId:i});}));var o={targetId:i,conversationType:Number(n),messages:s};f._pullUltraMessageList(o);},f=this,l)d(p);for(_ in g=this._pullUltraChangeMessageQue.filter((function(e){return e>c})),this._pullUltraChangeMessageQue.length=0,(y=this._pullUltraChangeMessageQue).push.apply(y,g),this._ultraMsgMap)this._ultraMsgMap[_]<c&&delete this._ultraMsgMap[_];return a?this._pullUltraChangeMessageList(c):this._lastPullingUltraChangeMessageTime=c,[2]}}))}))},t.prototype._pullUltraMessageList=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a,u,c=this;return w(this,(function(h){switch(h.label){case 0:return this._channel?this._status!==Ie.CONNECTED?[2,{code:Ee.RC_NET_UNAVAILABLE}]:(t=this._channel.codec.encodeMsgQuery(e),(n=new Or(br[br.qryMsg],t,this.currentUserId)).setHeaderQos(ze.AT_LEAST_ONCE),[4,this._channel.send(n,ui)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return i=h.sent(),r=i.code,s=i.data,r!==Ee.SUCCESS?[2,{code:r,msg:Ee[r]}]:(o=(s||{}).list,a=[],u=[],Array.isArray(o)&&o.forEach((function(e){var t=e.targetId,n=e.channelId,i=e.messageUId,r=c._ultraGroupMap[n+"_"+t];r&&r.latestMessage.messageUId===e.messageUId&&(r.latestMessage=e);var s=c._ultraMsgChangeMap[i+""];1===s?a.push(e):2===s&&u.push(e);})),a.length>0&&this._watcher.ultraGroupMessageExpansionUpdated(a||[]),u.length>0&&this._watcher.ultraGroupMessageModified(u||[]),[2])}}))}))},t.prototype.getUltraHistoryMsg=function(e,t){return M(this,void 0,void 0,(function(){var n,i,r,s,o;return w(this,(function(a){switch(a.label){case 0:return this._channel?this._status!==Ie.CONNECTED?[2,{code:Ee.RC_NET_UNAVAILABLE}]:(n=this._channel.codec.encodeGetHistoryMsg(e,t),i=new Or(br[br.qryUgMsg],n,this.currentUserId),[4,this._channel.send(i,Ft,{currentUserId:this.currentUserId,conversation:{conversationType:j.ULTRA_GROUP,targetId:e}})]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return r=a.sent(),s=r.code,o=r.data,s===Ee.SUCCESS&&o?[2,{code:s,data:o}]:(ge.warn("get super history message  failed, code:",s,", data:",o),[2,{code:s}])}}))}))},t.prototype.searchUltraGroupMessages=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(e){return this._channel?this._status!==Ie.CONNECTED?[2,{code:Ee.RC_NET_UNAVAILABLE}]:[2,{code:Ee.SUCCESS}]:[2,{code:Ee.RC_NET_CHANNEL_INVALID}]}))}))},t.prototype.getAllConversationState=function(){return Promise.resolve({code:Ee.SUCCESS,data:this._conversationManager.getAllConversationState()})},t.prototype.joinRTCRoom=function(e,t,n,i,r,s){return M(this,void 0,void 0,(function(){var o,a;return w(this,(function(u){return this._channel?(o=this._channel.codec.encodeJoinRTCRoom(t,n,i,r,s),a=new Or(br[br.rtcRJoin_data],o,e),[2,this._channel.send(a,nn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}]}))}))},t.prototype.quitRTCRoom=function(e){return M(this,void 0,void 0,(function(){var t,n;return w(this,(function(i){switch(i.label){case 0:return this._channel?(t=this._channel.codec.encodeQuitRTCRoom(),n=new Or(br[br.rtcRExit],t,e),[4,this._channel.send(n)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return [2,i.sent().code]}}))}))},t.prototype.rtcPing=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r;return w(this,(function(s){switch(s.label){case 0:return this._channel?(i=this._channel.codec.encodeJoinRTCRoom(t,n),r=new Or(br[br.rtcPing],i,e),[4,this._channel.send(r)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return [2,s.sent().code]}}))}))},t.prototype.getRTCRoomInfo=function(e){return M(this,void 0,void 0,(function(){var t,n;return w(this,(function(i){return this._channel?(t=this._channel.codec.encodeGetRTCRoomInfo(),n=new Or(br[br.rtcRInfo],t,e),[2,this._channel.send(n,gn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}]}))}))},t.prototype.getRTCUserInfoList=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s;return w(this,(function(o){switch(o.label){case 0:return this._channel?(t=this._channel.codec.encodeGetRTCRoomInfo(),n=new Or(br[br.rtcUData],t,e),[4,this._channel.send(n,nn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return i=o.sent(),r=i.code,s=i.data,[2,{code:r,data:s?{users:s.users}:s}]}}))}))},t.prototype.setRTCUserInfo=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r;return w(this,(function(s){switch(s.label){case 0:return this._channel?(i=this._channel.codec.encodeSetRTCUserInfo(t,n),r=new Or(br[br.rtcUPut],i,e),[4,this._channel.send(r)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return [2,s.sent().code]}}))}))},t.prototype.removeRTCUserInfo=function(e,t){return M(this,void 0,void 0,(function(){var n,i;return w(this,(function(r){switch(r.label){case 0:return this._channel?(n=this._channel.codec.encodeRemoveRTCUserInfo(t),i=new Rr(br[br.rtcUDel],n,e),[4,this._channel.send(i)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return [2,r.sent().code]}}))}))},t.prototype.setRTCData=function(e,t,n,i,r,s){return M(this,void 0,void 0,(function(){var o,a;return w(this,(function(u){switch(u.label){case 0:return this._channel?(o=this._channel.codec.encodeSetRTCData(t,n,i,r,s),a=new Rr(br[br.rtcSetData],o,e),[4,this._channel.send(a)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return [2,u.sent().code]}}))}))},t.prototype.setRTCTotalRes=function(e,t,n,i,r){return M(this,void 0,void 0,(function(){var s,o;return w(this,(function(a){switch(a.label){case 0:return this._channel?(s=this._channel.codec.encodeUserSetRTCData(t,n,i,r),o=new Or(br[br.userSetData],s,e),[4,this._channel.send(o)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return [2,a.sent().code]}}))}))},t.prototype.setRTCCDNUris=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r;return w(this,(function(s){switch(s.label){case 0:return this._channel?(i=this._channel.codec.encodeUserSetRTCCDNUris(t,n),r=new Or(br[br.userSetData],i,e),[4,this._channel.send(r)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return [2,s.sent().code]}}))}))},t.prototype.getRTCData=function(e,t,n,i){if(!this._channel)return Promise.resolve({code:Ee.RC_NET_CHANNEL_INVALID});var r=this._channel.codec.encodeGetRTCData(t,n,i),s=new Or(br[br.rtcQryData],r,e);return this._channel.send(s,ln)},t.prototype.removeRTCData=function(e,t,n,i,r){return M(this,void 0,void 0,(function(){var s,o;return w(this,(function(a){switch(a.label){case 0:return this._channel?(s=this._channel.codec.encodeRemoveRTCData(t,n,i,r),o=new Rr(br[br.rtcDelData],s,e),[4,this._channel.send(o)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return [2,a.sent().code]}}))}))},t.prototype.setRTCOutData=function(e,t,n,i){throw new Error("JSEngine's method not implemented.")},t.prototype.getRTCOutData=function(e,t){throw new Error("JSEngine's method not implemented.")},t.prototype.getRTCToken=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r;return w(this,(function(s){return this._channel?(i=this._channel.codec.encodeJoinRTCRoom(t,n),r=new Or(br[br.rtcToken],i,e),[2,this._channel.send(r,hn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}]}))}))},t.prototype.setRTCState=function(e,t){return M(this,void 0,void 0,(function(){var n,i;return w(this,(function(r){switch(r.label){case 0:return this._channel?(n=this._channel.codec.encodeSetRTCState(t),i=new Or(br[br.rtcUserState],n,e),[4,this._channel.send(i)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return [2,r.sent().code]}}))}))},t.prototype.getRTCUserInfo=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(e){throw new Error("Method not implemented.")}))}))},t.prototype.getRTCUserList=function(e){if(!this._channel)return Promise.resolve({code:Ee.RC_NET_CHANNEL_INVALID});var t=this._channel.codec.encodeGetRTCRoomInfo(),n=new Or(br[br.rtcUList],t,e);return this._channel.send(n,nn)},t.prototype.joinLivingRoomAsAudience=function(e,t,n){return void 0===t&&(t=xe.LIVE),M(this,void 0,void 0,(function(){var i,r,s,o,a,u,c,h;return w(this,(function(l){switch(l.label){case 0:return this._channel?(i=this._channel.codec.encodeJoinRTCRoom(t,n),r=new Or(br[br.viewerJoinR],i,e),[4,this._channel.send(r,mi)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return s=l.sent(),o=s.code,a=s.data,o!==Ee.SUCCESS?[2,{code:o}]:(c=(u=a).rtcToken,h=u.entries,[2,{code:o,data:{token:c,kvEntries:h}}])}}))}))},t.prototype.quitLivingRoomAsAudience=function(e){return M(this,void 0,void 0,(function(){var t,n,i;return w(this,(function(r){switch(r.label){case 0:return this._channel?(t=this._channel.codec.encodeQuitRTCRoom(),n=new Or(br[br.viewerExitR],t,e),[4,this._channel.send(n)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return i=r.sent().code,this._rtcKVManager.reset(),[2,i]}}))}))},t.prototype.rtcIdentityChange=function(e,t,n){return M(this,void 0,void 0,(function(){var i,r,s,o,a;return w(this,(function(u){switch(u.label){case 0:return this._channel?(i=this._channel.codec.encodeIdentityChangeInfo(t,n),r=new Or(br[br.rtcIdentityChange],i,e),[4,this._channel.send(r,nn)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return s=u.sent(),o=s.code,a=s.data,o!==Ee.SUCCESS?[2,{code:o}]:[2,{code:o,data:a}]}}))}))},t.prototype.pullRTCRoomEntry=function(e,t){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a,u,c;return w(this,(function(h){switch(h.label){case 0:return n=(t=this)._channel,i=t.currentUserId,n?(ge.info("audience in room start pull KV"),r=n.codec.encodePullRTCRoomKV(e,0),s=new Or(br[br.rtcPullKv],r,i),[4,n.send(s,gi)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return o=h.sent(),a=o.code,u=o.data,ge.info("audience in room end pull KV, code: "+a+", data: "+JSON.stringify(u||{})),a===Ee.SUCCESS?(c=u.kvEntries,this._watcher.onRTCDataChange(c,e),[2,{code:a,data:u}]):[2,{code:a}]}}))}))},t.prototype.getRTCJoinedUserInfo=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a,u;return w(this,(function(c){switch(c.label){case 0:return n=(t=this)._channel,i=t.currentUserId,n?(r=n.codec.encodeQueryUserJoinedInfo(e),s=new Or(br[br.rtcQueryJoined],r,i),[4,n.send(s,yi)]):[2,{code:Ee.RC_NET_CHANNEL_INVALID}];case 1:return o=c.sent(),a=o.code,u=o.data,a===Ee.SUCCESS?[2,{code:a,data:u}]:[2,{code:a}]}}))}))},t.prototype.getDeviceId=function(){return ds(this.runtime)},t.prototype.requestRoomPK=function(e){return M(this,void 0,void 0,(function(){var t,n,i;return w(this,(function(r){switch(r.label){case 0:return this._channel?(t=this._channel.codec.encodeRequestRoomPK(e),n=new Or(br[br.rtcInvite],t,e.roomId),[4,this._channel.send(n)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return i=r.sent().code,this._rtcKVManager.reset(),[2,i]}}))}))},t.prototype.cancelRoomPK=function(e){return M(this,void 0,void 0,(function(){var t,n,i;return w(this,(function(r){switch(r.label){case 0:return this._channel?(t=this._channel.codec.encodeCancelRoomPK(e),n=new Or(br[br.rtcCancelInvite],t,e.roomId),[4,this._channel.send(n)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return i=r.sent().code,this._rtcKVManager.reset(),[2,i]}}))}))},t.prototype.responseRoomPK=function(e){return M(this,void 0,void 0,(function(){var t,n,i;return w(this,(function(r){switch(r.label){case 0:return this._channel?(t=this._channel.codec.encodeResponseRoomPK(e),n=new Or(br[br.rtcInviteAnswer],t,e.roomId),[4,this._channel.send(n)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return i=r.sent().code,this._rtcKVManager.reset(),[2,i]}}))}))},t.prototype.endRoomPK=function(e){return M(this,void 0,void 0,(function(){var t,n,i;return w(this,(function(r){switch(r.label){case 0:return this._channel?(t=this._channel.codec.encodeEndRoomPK(e),n=new Or(br[br.rtcEndInvite],t,e.roomId),[4,this._channel.send(n)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return i=r.sent().code,this._rtcKVManager.reset(),[2,i]}}))}))},t.prototype.bindRTCRoomForChatroom=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r;return w(this,(function(s){switch(s.label){case 0:return this._channel?(t=e.chatRoomId,n=this._channel.codec.encodebindRTCRoomForChatroom(e),i=new Or(br[br.setRtcRoomId],n,t),[4,this._channel.send(i)]):[2,Ee.RC_NET_CHANNEL_INVALID];case 1:return r=s.sent(),[2,r.code]}}))}))},t.prototype.callExtra=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return Promise.resolve({code:Ee.EXTRA_METHOD_UNDEFINED})},t.prototype.getConversationListWithAllChannel=function(){throw new Error("Method not implemented.")},t.prototype.getConversationListWithAllChannelByPage=function(e,t){throw new Error("Method not implemented.")},t.prototype.clearConversations=function(){throw new Error("Method not implemented.")},t.prototype.setUserStatusListener=function(e,t){throw new Error("Method not implemented.")},t.prototype.setUserStatus=function(e){throw new Error("Method not implemented.")},t.prototype.subscribeUserStatus=function(e){throw new Error("Method not implemented.")},t.prototype.getUserStatus=function(e){throw new Error("Method not implemented.")},t.prototype.addToBlacklist=function(e){throw new Error("Method not implemented.")},t.prototype.removeFromBlacklist=function(e){throw new Error("Method not implemented.")},t.prototype.getBlacklist=function(){throw new Error("Method not implemented.")},t.prototype.getBlacklistStatus=function(e){throw new Error("Method not implemented.")},t.prototype.insertMessage=function(e,t,n){throw new Error("Method not implemented.")},t.prototype.deleteMessages=function(e){throw new Error("Method not implemented.")},t.prototype.deleteMessagesByTimestamp=function(e,t,n,i,r){throw new Error("Method not implemented.")},t.prototype.clearMessages=function(e,t,n){throw new Error("Method not implemented.")},t.prototype.getMessage=function(e){throw new Error("Method not implemented.")},t.prototype.setMessageContent=function(e,t,n){throw new Error("Method not implemented.")},t.prototype.setMessageSearchField=function(e,t,n){throw new Error("Method not implemented.")},t.prototype.searchConversationByContent=function(e,t,n,i){throw new Error("Method not implemented.")},t.prototype.searchMessageByContent=function(e,t,n,i,r,s){throw new Error("Method not implemented.")},t.prototype.getUnreadMentionedMessages=function(e,t){throw new Error("Method not implemented.")},t.prototype.setMessageSentStatus=function(e,t){throw new Error("Method not implemented.")},t.prototype.setMessageReceivedStatus=function(e,t){throw new Error("Method not implemented.")},t.prototype.clearUnreadCountByTimestamp=function(e,t,n,i){throw new Error("Method not implemented.")},t.prototype.getConversationNotificationStatus=function(e,t,n){var i=this._conversationManager.get(e,t,n);return i?Promise.resolve({code:Ee.SUCCESS,data:i.notificationStatus}):Promise.resolve({code:Ee.CONVER_GET_ERROR})},t.prototype.getRemoteHistoryMessages=function(e,t,n,i,r,s){return this.getHistoryMessage(e,t,n,i,r,s)},t}(Gr),ys=function(){function e(e){this._context=e;}return e.prototype.__getContext=function(){return this._context},e.prototype.getNaviInfo=function(){return this._context.getInfoFromCache()},e.prototype.getCoreVersion=function(){return this._context.coreVersion},e.prototype.getAPIVersion=function(){return this._context.apiVersion},e.prototype.getAppkey=function(){return this._context.appkey},e.prototype.getCurrentId=function(){return this._context.getCurrentUserId()},e.prototype.getConnectionStatus=function(){return this._context.getConnectionStatus()},e.prototype.getDeviceId=function(){return this._context.getDeviceId()},e.prototype.sendMessage=function(e,t,n){return this._context.sendMessage(e,t,n)},e.prototype.registerMessageType=function(e,t,n,i){void 0===i&&(i=[]),this._context.registerMessageType(e,t,n,i);},e.prototype.getServerTime=function(){return this._context.getServerTime()},e.prototype.getRTCJoinedUserInfo=function(e){return this._context.getRTCJoinedUserInfo(e)},e}(),ms=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return N(t,e),t.prototype.getNaviInfo=function(){return this._context.getInfoFromCache()},t.prototype.joinRTCRoom=function(e,t,n,i,r,s){return this._context.joinRTCRoom(e,t,n,i,r,s)},t.prototype.quitRTCRoom=function(e){return this._context.quitRTCRoom(e)},t.prototype.rtcPing=function(e,t,n){return this._context.rtcPing(e,t,n)},t.prototype.getRTCRoomInfo=function(e){return this._context.getRTCRoomInfo(e)},t.prototype.getRTCUserInfoList=function(e){return this._context.getRTCUserInfoList(e)},t.prototype.getRTCUserInfo=function(e){return this._context.getRTCUserInfo(e)},t.prototype.setRTCUserInfo=function(e,t,n){return this._context.setRTCUserInfo(e,t,n)},t.prototype.removeRTCUserInfo=function(e,t){return this._context.removeRTCUserInfo(e,t)},t.prototype.setRTCData=function(e,t,n,i,r,s){return this._context.setRTCData(e,t,n,i,r,s)},t.prototype.setRTCTotalRes=function(e,t,n,i,r){return this._context.setRTCTotalRes(e,t,n,i,r)},t.prototype.setRTCCDNUris=function(e,t,n){return this._context.setRTCCDNUris(e,t,n)},t.prototype.getRTCData=function(e,t,n,i){return this._context.getRTCData(e,t,n,i)},t.prototype.removeRTCData=function(e,t,n,i,r){return this._context.removeRTCData(e,t,n,i,r)},t.prototype.setRTCOutData=function(e,t,n,i){return this._context.setRTCOutData(e,t,n,i)},t.prototype.getRTCOutData=function(e,t){return this._context.getRTCOutData(e,t)},t.prototype.getRTCToken=function(e,t,n){return this._context.getRTCToken(e,t,n)},t.prototype.setRTCState=function(e,t){return this._context.setRTCState(e,t)},t.prototype.getRTCUserList=function(e){return this._context.getRTCUserList(e)},t.prototype.joinLivingRoomAsAudience=function(e,t,n){return this._context.joinLivingRoomAsAudience(e,t,n)},t.prototype.quitLivingRoomAsAudience=function(e){return this._context.quitLivingRoomAsAudience(e)},t.prototype.rtcIdentityChange=function(e,t,n){return this._context.rtcIdentityChange(e,t,n)},t.prototype.requestRoomPK=function(e){return this._context.requestRoomPK(e)},t.prototype.cancelRoomPK=function(e){return this._context.cancelRoomPK(e)},t.prototype.responseRoomPK=function(e){return this._context.responseRoomPK(e)},t.prototype.endRoomPK=function(e){return this._context.endRoomPK(e)},t}(ys),vs=function(){function e(){}return e.compress=function(e){for(var t=this,n={},i=0;i<e.length-1;i++){var r=e.charAt(i)+e.charAt(i+1);n.hasOwnProperty(r)?n[r].push(i):n[r]=[i];}for(var s=[],o=[],a=function(){if(o.length>0){var e=o.join("");if(o=[],e.length>26){var n=t.numberEncode(e.length),i=String.fromCharCode(t.dataType.NormalExt|n.length);s.push(i+n);}else {var r=String.fromCharCode(t.dataType.Normal|e.length);s.push(r);}s.push(e);}},u=0;u<e.length;){var c=t.indexOf(n,e,u);if(c.length<2)o.push(e.charAt(u++));else if(c.length<4)o.push(e.substr(u,c.length)),u+=c.length;else {var h=t.numberEncode(u-c.offset),l=t.numberEncode(c.length);if(h.length+l.length>=c.length)o.push(e.substr(u,c.length)),u+=c.length;else {a();var d=String.fromCharCode(t.dataType.Compressed|h.length<<2|l.length);s.push(d+h+l),u+=c.length;}}}a();var f=t.numberEncode(e.length),p=String.fromCharCode(t.dataType.Tail|f.length);return s.push(p+f),s.join("")},e.uncompress=function(e){var t=this,n=0,i="";e:do{var r=e.charCodeAt(n++),s=r&t.dataType.Mark,o=15&r,a=void 0;switch(s){case t.dataType.Compressed:var u=o>>2,c=3&o;if(0===u||0===c)throw new Error("Data parsing error,at "+n);var h=t.numberDecode(e.substr(n,u)),l=t.numberDecode(e.substr(n+=u,c));if((h=i.length-h)+l>i.length)throw new Error("Data parsing error,at "+n);n+=c,i+=i.substr(h,l);break;case t.dataType.Tail:if((a=t.numberDecode(e.substr(n,o)))!==i.length)throw console.log(i.length),console.log(a),new Error("Data parsing error,at "+n);n+=o;break e;case t.dataType.NormalExt:a=t.numberDecode(e.substr(n,o)),i+=e.substr(n+=o,a),n+=a;break;case t.dataType.Normal:i+=e.substr(n,o),n+=o;break;case t.dataType.Mark:if(o>10)throw new Error("Data parsing error,at "+n);i+=e.substr(n,16+o),n+=16+o;break;default:throw new Error("Data parsing error,at "+n+" header:"+s)}}while(n<e.length);return i},e.indexOf=function(e,t,n){var i={length:0,offset:-1};if(t.length,n>=t.length-1)return i;var r=e[t.charAt(n)+t.charAt(n+1)];if(r[0]===n)return i;for(var s=t.length-n,o=0,a=r.length;o<a;o++){var u=r[o],c=n-u;if(!(c>this.max)){var h=Math.min(s,c);if(h<=i.length)break;if(!(i.length>2&&t.charAt(u+i.length-1)!==t.charAt(n+i.length-1))){for(var l=2,d=l;d<h&&t.charAt(u+d)===t.charAt(n+d);d++)l++;l>=i.length&&(i.length=l,i.offset=u);}}}return i},e.numberEncode=function(e){var t=this,n=[],i=0;do{i=e%t.scale,n.push(t.chars.charAt(i)),e=(e-i)/t.scale;}while(e>0);return n.join("")},e.numberDecode=function(e){for(var t=0,n=0,i=e.length-1;i>=0;i--){if(-1===(n=this.chars.indexOf(e.charAt(i))))throw new Error('decode number error, data is "'+e+'"');t=t*this.scale+n;}return t},e.dataType={Tail:48,Compressed:64,NormalExt:80,Normal:96,Mark:112},e.chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",e.scale=e.chars.length,e.max=238327,e}(),Es=1,Ts=!1,Is=function(){function e(e){this.info=e,this.logUrl="logcollection.ronghub.com",this.level=1,this.itv=30,this.times=5,this.deviceId="",this.deviceInfo="",this.logSwitch=0,this.logUrl=e.logPolicy.url||this.logUrl,this.level=e.logPolicy.level||this.level,this.itv=e.logPolicy.itv||this.itv,this.times=e.logPolicy.times||this.times,this.deviceId=ds(e.runtime),this.logSwitch=e.logSwitch;var t=vt(e.runtime);this.deviceInfo=t.type+"|"+t.version+"|"+pe.sessionId,this.startReport();}return e.init=function(t){return Ts=!0,e._instance||(e._instance=new e(t)),e._instance},e.getInstance=function(){return e._instance},e.prototype.startReport=function(){var e=this;if(this.logSwitch&&Ts){var t=this.itv*Math.pow(2,Es-1);Es<this.times&&Es++,setTimeout((function(){e.reportRealtimeLog();}),1e3*t);}},e.prototype.reportRealtimeLog=function(){var e=this,t=pe.realTimeLogList.filter((function(t){return t.level<=e.level}));if(0!==t.length){var n=vs.compress(t.map((function(e){return e.content})).join("")),i="https://"+this.logUrl+"?version="+this.info.version+"&appkey="+this.info.appkey+"&userId="+this.info.userId+"&deviceId="+this.deviceId+"&deviceInfo="+this.deviceInfo+"&platform=Web";this.info.runtime.httpReq({method:"POST",url:i,body:n}).then((function(t){ge.__clearRealTimeLog(),ge.debug("report real-time log success");var n=t.data;n&&(n=JSON.parse(n),e.itv=n.nextTime,e.level=n.level,e.logSwitch=n.logSwitch,Es=1),e.startReport();})).catch((function(t){ge.debug("report real-time log error -> "+t),e.startReport();}));}else this.startReport();},e.prototype.reportFullLog=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a,u,c,h,l=this;return w(this,(function(d){switch(d.label){case 0:return t=e.startTime,n=e.endTime,i=e.platform,r=e.logId,s=e.uri,o=q.getInstance(),ge.debug("received report log msg, "+i.toLowerCase(),o),"web"===i.toLowerCase()&&o?t>n?(ge.warn("report error: The start time("+t+") cannot be greater than the end time("+t+")"),[2]):[4,ge.__insertLogIntoDatabase()]:[2];case 1:return d.sent(),[4,o.getRangeData(B,"time",t,n)];case 2:return a=(a=d.sent()).filter((function(e){return !e.userId||e.userId===l.info.userId})),u=vs.compress(a.map((function(e){return e.content})).join("")||"no data"),c=1,(h=function(){if(!(c>3)&&Ts){var e="https://"+(s||l.logUrl)+"?version="+l.info.version+"&appkey="+l.info.appkey+"&userId="+l.info.userId+"&logId="+r+"&deviceId="+l.deviceId+"&deviceInfo="+l.deviceInfo+"&platform=Web",t=5e3*(c-1);c++,setTimeout((function(){Ts&&l.info.runtime.httpReq({url:e,method:"POST",body:u}).then((function(){ge.debug("report full log success!");})).catch((function(e){h(),ge.warn("report full log error -> "+e);}));}),t);}})(),[2]}}))}))},e.prototype.distroy=function(){Es=1,Ts=!1;},e}();function Cs(e){return Object.assign({},e)}var Rs,Ss=function(){function e(e,t){var n;this._runtime=e,this._token="",this._pluginContextQueue=[],this._pluginInstanseMap={},this.coreVersion="5.2.4",this._versionInfo={},this._typingInfo={},this._isInternalConnected=!1,this._connectionStatus=Ie.DISCONNECTED,this._canRedirectConnect=!1,this._watcher={message:void 0,batchMessage:void 0,conversationState:void 0,chatroomState:void 0,connectionState:void 0,rtcInnerWatcher:void 0,expansion:void 0,tag:void 0,conversationTagChanged:void 0,pullFinished:void 0,onConnecting:void 0,onConnected:void 0,onDisconnect:void 0,onSuspend:void 0,readReceiptReceived:void 0,messageReceiptRequest:void 0,messageReceiptResponse:void 0,typingState:void 0,messageBlocked:void 0,ultraGroupEnable:void 0,operateStatus:void 0,ultraGroupMessageExpansionUpdated:void 0,ultraGroupMessageModified:void 0,ultraGroupMessageRecalled:void 0},this._typingInternalTimer=-1,this._typingExpireTime=2e3,this._typingChangedList=[],this.getChatRoomHistoryMessages=this.getChatroomHistoryMessages,this._options=Object.assign({},t),this.appkey=this._options.appkey,this.apiVersion=this._options.apiVersion,this._options.typingExpireTime&&(this._options.typingExpireTime<2e3?this._typingExpireTime=2e3:this._options.typingExpireTime>6e3?this._typingExpireTime=6e3:this._typingExpireTime=this._options.typingExpireTime),this._options.navigators=this._options.navigators.filter((function(e){return /^https?:\/\//.test(e)})),this._options.navigators=this._options.navigators.map((function(e){return e.replace(/\/$/g,"")})),0===this._options.navigators.length&&(n=this._options.navigators).push.apply(n,u);var i={status:this._connectionStatusListener.bind(this),batchMessage:this._batchMessageReceiver.bind(this),chatroom:this._chatroomInfoListener.bind(this),conversation:this._conversationInfoListener.bind(this),expansion:this._expansionInfoListener.bind(this),tag:this._tagListener.bind(this),conversationTag:this._conversationTagListener.bind(this),onRTCDataChange:this._rtcDataChange.bind(this),pullFinished:this._pullFinishedListener.bind(this),ultraGroupEnable:this._ultraGroupEnableListener.bind(this),operateStatus:this._operateStatusListener.bind(this),ultraGroupMessageExpansionUpdated:this._ultraGroupMessageExpansionUpdatedListener.bind(this),ultraGroupMessageModified:this._ultraGroupMessageModifiedListener.bind(this),ultraGroupMessageRecalled:this._ultraGroupMessageRecalledListener.bind(this)};this._engine=mt()?new RCCppEngine(e,i,this._options):new _s(e,i,this._options);}return e.init=function(t,n){return ge.setLogLevel(n.logLevel),ge.setLogStdout(n.logStdout),(n.indexDBSwitch||re(n.indexDBSwitch))&&q.init(),ge.debug("APIContext.init =>",n.appkey,n.navigators),this._context?(ge.error("Repeat initialize!"),this._context):(ge.warn("RCEngine Commit:","615d108b0be1d415811ed70466feec0a343aba87"),this._context=new e(t,n),ge.__insertLogIntoDatabase(),this._context)},e.destroy=function(){this._context&&(this._context._destroy(),this._context=void 0);},e.prototype.install=function(e,t){if(this._pluginInstanseMap[e.tag])return ge.warn("Repeat install plugin: "+e.tag),this._pluginInstanseMap[e.tag];var n="RCRTC"===e.tag?new ms(this):new ys(this),i=null;try{if(!e.verify(this._runtime))return null;i=e.setup(n,this._runtime,t);}catch(e){ge.error("install plugin error!\n",e);}return ["RCRTC","RCCall"].includes(e.tag)&&e.version&&e.name&&(this._versionInfo[e.name]=e.version),i&&this._pluginContextQueue.push(n),i&&(this._pluginInstanseMap[e.tag]=i),i},e.prototype._handleRedirect=function(){return M(this,void 0,void 0,(function(){var e,t=this;return w(this,(function(n){switch(n.label){case 0:return ge.debug("_handleRedirct",this._token),[4,this.connect(this._token,!0)];case 1:return (e=n.sent().code)!==Ee.SUCCESS&&this._canRedirectConnect&&(this._handleSuspend(e),setTimeout((function(){t._handleRedirect();}),5e3)),[2]}}))}))},e.prototype._connectionStatusListener=function(e){var t;return M(this,void 0,void 0,(function(){return w(this,(function(n){return e===Ie.REDIRECT?(this._canRedirectConnect=!0,this._handleSuspend(e),this._handleRedirect()):e===Ie.BLOCKED||e===Ie.KICKED_OFFLINE_BY_OTHER_CLIENT||e===Ie.DISCONNECT_BY_SERVER?(this._canRedirectConnect=!1,this._handleDisconnect(e)):e===Ie.CONNECTING?this._handleConnecting():e===Ie.CONNECTED?this._handleConnected():e===Ie.DISCONNECTED?this._handleDisconnect(e):e===Ie.NETWORK_UNAVAILABLE&&this._handleSuspend(e),this._connectionStatus=e,(null===(t=this._watcher.rtcInnerWatcher)||void 0===t?void 0:t.status)&&this._watcher.rtcInnerWatcher.status(e),this._pluginContextQueue.forEach((function(t){t.onconnectionstatechange&&t.onconnectionstatechange(e);})),this._watcher.connectionState&&this._watcher.connectionState(e),[2]}))}))},e.prototype._handleConnecting=function(){this._watcher.onConnecting&&this._watcher.onConnecting();},e.prototype._handleConnected=function(){this._watcher.onConnected&&this._watcher.onConnected();},e.prototype._handleDisconnect=function(e){this._watcher.onDisconnect&&this._watcher.onDisconnect(e);},e.prototype._handleSuspend=function(e){this._watcher.onSuspend&&this._watcher.onSuspend(e);},e.prototype._messageReceiver=function(e,t,n){var i,r,s;if((e.conversationType===j.RTC_ROOM||Object.prototype.hasOwnProperty.call(Ye,e.messageType))&&this._watcher.rtcInnerWatcher&&this._watcher.rtcInnerWatcher.message)this._watcher.rtcInnerWatcher.message(Cs(e));else if(-1===["RC:ChrmJoinNtf","RC:ChrmQuitNtf"].indexOf(e.messageType)||"function"!=typeof this._watcher.chatroomState){if("RC:ChrmMemChange"!==e.messageType){if(e.messageType!==Se.TYPING_STATUS||(this._addTypingInfo(Cs(e)),!this._watcher.typingState))if(e.messageType!==Se.LOG_COMMAND||"rongcloudsystem"!==e.senderUserId)if(e.messageType!==Se.INTERCEPT){if(!this._pluginContextQueue.some((function(t){if(!t.onmessage)return !1;try{return t.onmessage(Cs(e))}catch(e){return ge.error("plugin error =>",e),!1}})))if(this._watcher.message&&this._watcher.message(Cs(e),t,n),"RC:ReadNtf"!==e.messageType)if("RC:RRReqMsg"!==e.messageType){if("RC:RRRspMsg"!==e.messageType)return e;var o=null===(s=e.content)||void 0===s?void 0:s.receiptMessageDic;o&&Array.isArray(o[this._engine.currentUserId])&&"function"==typeof this._watcher.messageReceiptResponse&&this._watcher.messageReceiptResponse({conversationType:e.conversationType,targetId:e.targetId,channelId:e.channelId},e.senderUserId,o[this._engine.currentUserId]);}else "function"==typeof this._watcher.messageReceiptRequest&&this._watcher.messageReceiptRequest({conversationType:e.conversationType,targetId:e.targetId,channelId:e.channelId},e.content.messageUId,e.senderUserId);else "function"==typeof this._watcher.readReceiptReceived&&this._watcher.readReceiptReceived({conversationType:e.conversationType,targetId:e.targetId,channelId:e.channelId},e.content.messageUId,e.content.lastMessageSendTime);}else this._MessageBlockedListener({conversationType:e.conversationType,targetId:e.targetId,channelId:e.channelId||"",blockType:e.content.interceptType,blockedMessageUId:e.content.msgUId});else {var a=e.content,u=a.startTime,c=a.endTime,h=a.platform,l=a.logId,d=a.uri,f=a.packageName,p={startTime:parseInt(u),endTime:parseInt(c),platform:h,logId:l,uri:d,packageName:f};null===(r=Is.getInstance())||void 0===r||r.reportFullLog(p);}}else if("function"==typeof this._watcher.chatroomState){var g={};Array.isArray(e.content.userList)&&e.content.userList.forEach((function(e){g[e.userId]=e.status;})),this._watcher.chatroomState({userChange:{users:g,chatroomId:e.targetId}});}}else this._watcher.chatroomState({userChange:{users:(i={},i[e.senderUserId]="RC:ChrmQuitNtf"===e.messageType?De.QUIT:De.JOIN,i),chatroomId:e.targetId}});},e.prototype._batchMessageReceiver=function(e,t,n){var i=this,r=[];e.forEach((function(e){var s=i._messageReceiver(e,t,n);s&&r.push(s);})),r.length&&this._watcher.batchMessage&&this._watcher.batchMessage(r);},e.prototype._chatroomInfoListener=function(e){this._watcher.chatroomState&&this._watcher.chatroomState(e);},e.prototype._conversationInfoListener=function(e){this._watcher.conversationState&&this._watcher.conversationState(e);},e.prototype._expansionInfoListener=function(e){this._watcher.expansion&&this._watcher.expansion(e);},e.prototype._tagListener=function(){this._watcher.tag&&this._watcher.tag();},e.prototype._conversationTagListener=function(){this._watcher.conversationTagChanged&&this._watcher.conversationTagChanged();},e.prototype._typingStatusListener=function(e){this._watcher.typingState&&this._watcher.typingState(e);},e.prototype._pullFinishedListener=function(){this._watcher.pullFinished&&this._watcher.pullFinished();},e.prototype._MessageBlockedListener=function(e){this._watcher.messageBlocked&&this._watcher.messageBlocked(e);},e.prototype._ultraGroupEnableListener=function(e){this._watcher.ultraGroupEnable&&this._watcher.ultraGroupEnable(e);},e.prototype._operateStatusListener=function(e){this._watcher.operateStatus&&this._watcher.operateStatus(e);},e.prototype._ultraGroupMessageExpansionUpdatedListener=function(e){this._watcher.ultraGroupMessageExpansionUpdated&&this._watcher.ultraGroupMessageExpansionUpdated(e);},e.prototype._ultraGroupMessageModifiedListener=function(e){this._watcher.ultraGroupMessageModified&&this._watcher.ultraGroupMessageModified(e);},e.prototype._ultraGroupMessageRecalledListener=function(e){this._watcher.ultraGroupMessageRecalled&&this._watcher.ultraGroupMessageRecalled(e);},e.prototype._rtcDataChange=function(e,t){this._pluginContextQueue.forEach((function(n){n.onrtcdatachange&&n.onrtcdatachange(e,t);}));},e.prototype.assignWatcher=function(e){var t=this;Object.keys(this._watcher).forEach((function(n){if(Object.prototype.hasOwnProperty.call(e,n)){var i=e[n];t._watcher[n]=ie(i)||ne(i)?i:void 0;}}));},e.prototype.resetWatcher=function(){var e=this;Object.keys(this._watcher).forEach((function(t){e._watcher[t]=void 0;}));},e.prototype._addTypingInfo=function(e){var t=e.senderUserId,n=e.conversationType,i=e.targetId,r=e.content,s=e.channelId,o=r.typingContentType,a=n+"#"+i+"#"+(s||"");this._typingInfo[a]||(this._typingInfo[a]=[]);var u=this._typingInfo[a].findIndex((function(e){return e.userId===t}));u>=0&&this._typingInfo[a][u].messageType===o?this._typingInfo[a][u].timestamp=Date.now():(u>=0&&this._typingInfo[a].splice(u,1),this._typingInfo[a].push({userId:t,messageType:o,timestamp:Date.now()}),this._typingChangedList.includes(a)||this._typingChangedList.push(a),this._startCheckTypingInfo());},e.prototype._startCheckTypingInfo=function(){var e=this;-1===this._typingInternalTimer&&0!==Object.keys(this._typingInfo).length&&(this._typingInternalTimer=setInterval((function(){for(var t in e._typingInfo){var n=e._typingInfo[t].length;e._typingInfo[t]=e._typingInfo[t].filter((function(t){return Date.now()-t.timestamp<e._typingExpireTime})),e._typingInfo[t].length===n||e._typingChangedList.includes(t)||e._typingChangedList.push(t),0===e._typingInfo[t].length&&delete e._typingInfo[t];}if(e._typingChangedList.length>0){var i=e._typingChangedList.map((function(t){return {conversationType:Number(t.split("#")[0]),targetId:t.split("#")[1],channelId:t.split("#")[2],list:e._typingInfo[t]||[]}}));e._typingStatusListener(i),e._typingChangedList=[];}0===Object.keys(e._typingInfo).length&&(clearInterval(e._typingInternalTimer),e._typingInternalTimer=-1);}),500));},e.prototype.getConnectedTime=function(){return this._engine.getConnectedTime()},e.prototype.getServerTime=function(){return this._engine.getServerTime()},e.prototype.getDeviceId=function(){return this._engine.getDeviceId()},e.prototype.getCurrentUserId=function(){return this._engine.currentUserId},e.prototype.getConnectionStatus=function(){return this._connectionStatus},Object.defineProperty(e.prototype,"token",{get:function(){return this._token},enumerable:!1,configurable:!0}),e.prototype.connect=function(e,t,n){return void 0===t&&(t=!1),M(this,void 0,void 0,(function(){var i,r,s,o,a,u;return w(this,(function(c){switch(c.label){case 0:return this._connectionStatus===Ie.CONNECTED?[2,{code:Ee.SUCCESS,userId:this._engine.currentUserId}]:this._connectionStatus===Ie.CONNECTING?[2,{code:Ee.BIZ_ERROR_CONNECTING}]:"string"!=typeof e||0===e.length?[2,{code:Ee.RC_CONN_USER_OR_PASSWD_ERROR}]:(this._token=e,i=e.split("@"),r=i[1],s=r?r.split(";").map((function(e){return /^https?:/.test(e)?e:"https://"+e})):[],[4,this._engine.navi.getInfo(this._getTokenWithoutNavi(),s,t,this._options.checkCA)]);case 1:return (o=c.sent())?1===(null==o?void 0:o.type)?[2,{code:Ee.PACKAGE_ENVIRONMENT_ERROR}]:(a=Je.getInfo(),[4,this._engine.connect(this._getTokenWithoutNavi(),o,n)]):[2,{code:Ee.RC_NAVI_RESOURCE_ERROR}];case 2:return u=c.sent(),ge.__insertLogIntoDatabase(),u!==Ce.REDIRECT?[3,4]:(this._connectionStatus=Ie.REDIRECT,[4,this.connect(e,!0)]);case 3:return [2,c.sent()];case 4:return u===Ee.SUCCESS&&(ge.info("connect success, userId: "+this._engine.currentUserId),1!==(null==o?void 0:o.type)&&this._engine.reportSDKInfo&&this._engine.reportSDKInfo(a),Is.init({runtime:this._runtime,logSwitch:(null==o?void 0:o.logSwitch)||0,logPolicy:JSON.parse((null==o?void 0:o.logPolicy)||"{}"),appkey:this.appkey,version:this.apiVersion,userId:this._engine.currentUserId}),pe.init(this._engine.currentUserId),this._isInternalConnected=!0),u!==Ee.SUCCESS||mt()||1===o.openUS&&this._pullUserSettings(),u!==Ee.SUCCESS&&(this._connectionStatus=Ie.CONNECTION_CLOSED),[2,{code:u,userId:this._engine.currentUserId}]}}))}))},e.prototype._pullUserSettings=function(){return M(this,void 0,void 0,(function(){return w(this,(function(e){return [2]}))}))},e.prototype.disconnect=function(){var e;return this._isInternalConnected=!1,clearInterval(this._typingInternalTimer),this._typingInternalTimer=-1,this._typingInfo={},null===(e=Is.getInstance())||void 0===e||e.distroy(),ge.__insertLogIntoDatabase(),pe.reset(),this._engine.disconnect(),this._pluginContextQueue.forEach((function(e){if(e.ondisconnect)try{e.ondisconnect();}catch(e){ge.error("plugin error =>",e);}})),Promise.resolve()},e.prototype.reconnect=function(e){return this._isInternalConnected?Promise.resolve({code:Ee.CAN_NOT_RECONNECT}):this.connect(this._getTokenWithoutNavi(),!1,e)},e.prototype._getTokenWithoutNavi=function(){return this._token.replace(/@.+$/,"@")},e.prototype.getInfoFromCache=function(){return this._engine.navi.getInfoFromCache(this._getTokenWithoutNavi())},e.prototype.registerMessageType=function(e,t,n,i,r){void 0===i&&(i=[]),void 0===r&&(r=!1),this._engine.registerMessageType(e,t,n,i,r);},e.prototype.sendMessage=function(e,t,n,i){if(e!==j.ULTRA_GROUP){var r=this.getInfoFromCache();if(1===((null==r?void 0:r.grpRRVer)||0)&&n.messageType===Se.READ_RECEIPT_RESPONSE)return Promise.resolve({code:Ee.READ_RECEIPT_ERROR})}var s=n.canIncludeExpansion,o=void 0!==s&&s,a=n.expansion;if(o&&he(a))return Promise.resolve({code:Ee.BIZ_ERROR_INVALID_PARAMETER});var u=JSON.stringify(n.content);return V(u)>131072?Promise.resolve({code:Ee.RC_MSG_CONTENT_EXCEED_LIMIT}):e===j.ULTRA_GROUP?this._engine.sendUltraMessage(t,n):this._engine.sendMessage(e,t,n,i)},e.prototype.sendExpansionMessage=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a,u,c,h,l,d,f,p;return w(this,(function(g){switch(g.label){case 0:if(t=e.channelId,n=e.conversationType,i=e.targetId,r=e.messageUId,s=e.keys,o=e.expansion,a=e.removeAll,!e.canIncludeExpansion)return [2,{code:Ee.MESSAGE_KV_NOT_SUPPORT}];if(u=!1,c=he(o),h=!1,ne(o))for(d in l=Object.keys(o).length,u=l>20,o)if(f=o[d],(h=d.length>32||f.length>4096)||c)break;return u||h?[2,{code:Ee.EXPANSION_LIMIT_EXCEET}]:c?[2,{code:Ee.BIZ_ERROR_INVALID_PARAMETER}]:(p={mid:r},o&&(p.put=o),s&&(p.del=s),a&&(p.removeAll=1),[4,this._engine.sendMessage(n,i,{content:p,messageType:Se.EXPANSION_NOTIFY,channelId:t})]);case 1:return [2,{code:g.sent().code}]}}))}))},e.prototype.sendReadReceiptMessage=function(e,t,n){return M(this,void 0,void 0,(function(){var i;return w(this,(function(r){return i=this.getInfoFromCache(),0===((null==i?void 0:i.grpRRVer)||0)?[2,{code:Ee.READ_RECEIPT_ERROR,data:"The read receipt switch is not on, please call the sendMessage method!"}]:[2,this._engine.sendReadReceiptMessage(e,t,n)]}))}))},e.prototype.getMessageReader=function(e,t,n){return M(this,void 0,void 0,(function(){var i;return w(this,(function(r){return i=this.getInfoFromCache(),0===((null==i?void 0:i.grpRRVer)||0)?[2,{code:Ee.READ_RECEIPT_ERROR}]:[2,this._engine.getMessageReader(e,t,n)]}))}))},e.prototype._destroy=function(){var e;this._isInternalConnected=!1,this._watcher={batchMessage:void 0,message:void 0,conversationState:void 0,chatroomState:void 0,connectionState:void 0,rtcInnerWatcher:void 0,expansion:void 0,tag:void 0,conversationTagChanged:void 0,typingState:void 0,pullFinished:void 0,onConnecting:void 0,onConnected:void 0,onDisconnect:void 0,onSuspend:void 0},this._engine.disconnect(),this._pluginContextQueue.forEach((function(e){if(e.ondestroy)try{e.ondestroy();}catch(e){ge.error("plugin error =>",e);}})),this._pluginContextQueue.length=0,this._pluginInstanseMap={},null===(e=Is.getInstance())||void 0===e||e.distroy(),pe.reset();},e.prototype.getHistoryMessage=function(e,t,n,i,r,s,o){if(void 0===n&&(n=0),void 0===i&&(i=20),void 0===r&&(r=0),void 0===s&&(s=""),void 0===o&&(o=""),e===j.ULTRA_GROUP){var a={timestamp:n,count:i,order:r,channelId:s};return this._engine.getUltraHistoryMsg(t,a)}return this._engine.getHistoryMessage(e,t,n,i,r,s,o||"")},e.prototype.getConversationList=function(e,t,n,i,r){if(void 0===e&&(e=300),void 0===r&&(r=""),t===j.ULTRA_GROUP){var s=Ee.METHOD_NOT_SUPPORT;return Promise.resolve({code:s,msg:Ee[s]})}return this._engine.getConversationList(e,t,n,i,r)},e.prototype.getConversation=function(e,t,n){return this._engine.getConversation(e,t,n)},e.prototype.removeConversation=function(e,t,n){return void 0===n&&(n=""),e===j.ULTRA_GROUP?Promise.resolve(Ee.METHOD_NOT_SUPPORT):this._engine.removeConversation(e,t,n)},e.prototype.getUltraGroupList=function(){return this._engine.getUltraGroupList()},e.prototype.getBlockUltraGroupList=function(){return this._engine.getBlockUltraGroupList()},e.prototype.getTopUltraGroupList=function(){return this._engine.getTopUltraGroupList()},e.prototype.clearUnreadCount=function(e,t,n){return void 0===n&&(n=""),e===j.ULTRA_GROUP?this._engine.clearUltraUnreadcount(t,n):this._engine.clearConversationUnreadCount(e,t,n)},e.prototype.clearAllUnreadCount=function(){return this._engine.clearAllUnreadCount()},e.prototype.getUnreadCount=function(e,t,n){return void 0===n&&(n=""),this._engine.getConversationUnreadCount(e,t,n)},e.prototype.getTotalUnreadCount=function(e,t,n){if(t&&t.includes(j.ULTRA_GROUP)){var i=Ee.METHOD_NOT_SUPPORT;return Promise.resolve({code:i,msg:Ee[i]})}return this._engine.getAllConversationUnreadCount(e,t&&t.length>0?t:[j.PRIVATE,j.GROUP,j.SYSTEM,j.PUBLIC_SERVICE],!!n)},e.prototype.getFirstUnreadMessage=function(e,t,n){return void 0===n&&(n=""),this._engine.getFirstUnreadMessage(e,t,n)},e.prototype.setConversationStatus=function(e,t,n,i,r){if(void 0===r&&(r=""),e===j.ULTRA_GROUP&&void 0!==n)return Promise.resolve(Ee.METHOD_NOT_SUPPORT);var s=[{conversationType:e,targetId:t,isTop:n,notificationStatus:i,channelId:r}];return this._engine.batchSetConversationStatus(s)},e.prototype.saveConversationMessageDraft=function(e,t,n,i){return void 0===i&&(i=""),this._engine.saveConversationMessageDraft(e,t,n,i)},e.prototype.getConversationMessageDraft=function(e,t,n){return void 0===n&&(n=""),this._engine.getConversationMessageDraft(e,t,n)},e.prototype.clearConversationMessageDraft=function(e,t,n){return void 0===n&&(n=""),this._engine.clearConversationMessageDraft(e,t,n)},e.prototype.recallMessage=function(e,t,n,i,r){return this._engine.recallMsg(e,t,n,i,r)},e.prototype.deleteRemoteMessage=function(e,t,n,i){return void 0===i&&(i=""),e===j.ULTRA_GROUP?Promise.resolve(Ee.METHOD_NOT_SUPPORT):this._engine.deleteRemoteMessage(e,t,n,i)},e.prototype.deleteRemoteMessageByTimestamp=function(e,t,n,i){return void 0===i&&(i=""),this._engine.deleteRemoteMessageByTimestamp(e,t,n,i)},e.prototype.joinChatroom=function(e,t){return void 0===t&&(t=10),this._engine.joinChatroom(e,t)},e.prototype.joinExistChatroom=function(e,t){return void 0===t&&(t=10),this._engine.joinExistChatroom(e,t)},e.prototype.quitChatroom=function(e){return this._engine.quitChatroom(e)},e.prototype.getChatroomInfo=function(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=0),this._engine.getChatroomInfo(e,t,n)},e.prototype.setChatroomEntry=function(e,t){var n=t.key,i=t.value;return ht(n)&&lt(i)?this._engine.setChatroomEntry(e,t):Promise.resolve(Ee.BIZ_ERROR_INVALID_PARAMETER)},e.prototype.setChatroomEntries=function(e,t){for(var n=0;n<t.entries.length;n++){var i=t.entries[n],r=i.key,s=i.value;if(!ht(r)||!lt(s))return Promise.resolve({code:Ee.BIZ_ERROR_INVALID_PARAMETER})}return this._engine.setChatroomEntries(e,t)},e.prototype.forceSetChatroomEntry=function(e,t){var n=t.key,i=t.value;return ht(n)&&lt(i)?this._engine.forceSetChatroomEntry(e,t):Promise.resolve(Ee.BIZ_ERROR_INVALID_PARAMETER)},e.prototype.removeChatroomEntry=function(e,t){var n=t.key;return ht(n)?this._engine.removeChatroomEntry(e,t):Promise.resolve(Ee.BIZ_ERROR_INVALID_PARAMETER)},e.prototype.removeChatroomEntries=function(e,t){for(var n=0;n<t.entries.length;n++){var i=t.entries[n].key;if(!ht(i))return Promise.resolve({code:Ee.BIZ_ERROR_INVALID_PARAMETER})}return this._engine.removeChatroomEntries(e,t)},e.prototype.forceRemoveChatroomEntry=function(e,t){var n=t.key;return ht(n)?this._engine.forceRemoveChatroomEntry(e,t):Promise.resolve(Ee.BIZ_ERROR_INVALID_PARAMETER)},e.prototype.getChatroomEntry=function(e,t){return this._engine.getChatroomEntry(e,t)},e.prototype.getAllChatroomEntries=function(e){return this._engine.getAllChatroomEntry(e)},e.prototype.getChatroomHistoryMessages=function(e,t,n,i){return void 0===t&&(t=20),void 0===n&&(n=0),void 0===i&&(i=0),this._engine.getChatroomHistoryMessages(e,i,t,n)},e.prototype.getFileToken=function(e,t,n,i){return M(this,void 0,void 0,(function(){var r,s,o,a,u,c,h;return w(this,(function(l){switch(l.label){case 0:return r=this.getInfoFromCache(),s=(null==r?void 0:r.bosAddr)||"",o=(null==r?void 0:r.uploadServer)||"",a=(null==r?void 0:r.ossConfig)||"",[4,this._engine.getFileToken(e,t,n,i)];case 1:return u=l.sent(),c=u.code,h=u.data,c===Ee.SUCCESS?[2,Promise.resolve(Object.assign(h,{bos:s,qiniu:o,ossConfig:a}))]:[2,Promise.reject(c)]}}))}))},e.prototype.getFileUrl=function(e,t,n,i,r){return void 0===r&&(r=Ue.QINIU),M(this,void 0,void 0,(function(){var s,o,a;return w(this,(function(u){switch(u.label){case 0:return (null==i?void 0:i.isBosRes)?[2,Promise.resolve(i)]:[4,this._engine.getFileUrl(e,r,t,n)];case 1:return s=u.sent(),o=s.code,a=s.data,o===Ee.SUCCESS?[2,Promise.resolve(a)]:[2,Promise.reject(o)]}}))}))},e.prototype.createTag=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(t){return [2,this._engine.createTag(e)]}))}))},e.prototype.removeTag=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(t){return [2,this._engine.removeTag(e)]}))}))},e.prototype.updateTag=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(t){return [2,this._engine.updateTag(e)]}))}))},e.prototype.getTagList=function(){return M(this,void 0,void 0,(function(){return w(this,(function(e){return [2,this._engine.getTagList()]}))}))},e.prototype.addTagForConversations=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return t.length>1e3?[2,Promise.reject(Ee.CONVER_OUT_LIMIT_ERROR)]:[2,this._engine.addTagForConversations(e,t)]}))}))},e.prototype.removeTagForConversations=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return [2,this._engine.removeTagForConversations(e,t)]}))}))},e.prototype.removeTagsForConversation=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return [2,this._engine.removeTagsForConversation(e,t)]}))}))},e.prototype.getConversationListByTag=function(e,t,n,i){return M(this,void 0,void 0,(function(){return w(this,(function(r){return [2,this._engine.getConversationListByTag(e,t,n,i)]}))}))},e.prototype.getUnreadCountByTag=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return [2,this._engine.getUnreadCountByTag(e,t)]}))}))},e.prototype.setConversationStatusInTag=function(e,t,n){return M(this,void 0,void 0,(function(){return w(this,(function(i){return [2,this._engine.setConversationStatusInTag(e,t,n)]}))}))},e.prototype.getTagsForConversation=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(t){return [2,this._engine.getTagsForConversation(e)]}))}))},e.prototype.getBlockConversationList=function(){return this._engine.getBlockConversationList()},e.prototype.getTopConversationList=function(){return this._engine.getTopConversationList()},e.prototype.getUnreadMentionedCount=function(e){return this._engine.getUnreadMentionedCount(e)},e.prototype.getAllUnreadMentionedCount=function(){return this._engine.getAllUnreadMentionedCount()},e.prototype.sendUltraGroupTypingStatus=function(e){if(e.conversationType!==j.ULTRA_GROUP){var t=Ee.METHOD_ONLY_SUPPORT_ULTRA_GROUP;return Promise.resolve({code:t,msg:Ee[t]})}return this._engine.sendUltraGroupTypingStatus(e)},e.prototype.getUltraGroupMessageListByMessageUId=function(e){return this._engine.getUltraGroupMessageListByMessageUId(e)},e.prototype.expandUltraMessage=function(e){return M(this,void 0,void 0,(function(){var t,n,i,r,s,o,a,u,c,h;return w(this,(function(l){switch(l.label){case 0:if(e.channelId,t=e.conversationType,e.targetId,e.messageUId,e.keys,n=e.expansion,e.removeAll,i=e.canIncludeExpansion,t!==j.ULTRA_GROUP)return [2,{code:r=Ee.METHOD_ONLY_SUPPORT_ULTRA_GROUP,msg:Ee[r]}];if(!i)return [2,{code:Ee.MESSAGE_KV_NOT_SUPPORT}];if(s=!1,o=he(n),a=!1,ne(n))for(c in u=Object.keys(n).length,s=u>20,n)if(h=n[c],a=c.length>32||h.length>64)break;return s||a?[2,{code:Ee.EXPANSION_LIMIT_EXCEET}]:o?[2,{code:Ee.BIZ_ERROR_INVALID_PARAMETER}]:[4,this._engine.expandUltraMessage(e)];case 1:return [2,{code:l.sent().code}]}}))}))},e.prototype.modifyMessage=function(e){return M(this,void 0,void 0,(function(){var t;return w(this,(function(n){switch(n.label){case 0:return e.conversationType!==j.ULTRA_GROUP?[2,{code:t=Ee.METHOD_ONLY_SUPPORT_ULTRA_GROUP,msg:Ee[t]}]:[4,this._engine.modifyMessage(e)];case 1:return [2,{code:n.sent().code}]}}))}))},e.prototype.getUltraGroupUnreadMentionedCountByTargetId=function(e){return this._engine.getUltraGroupUnreadMentionedCountByTargetId(e)},e.prototype.getAllConversationState=function(){return this._engine.getAllConversationState()},e.prototype.callExtra=function(e){for(var t,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return (t=this._engine).callExtra.apply(t,A([e],n))},e.prototype.clearConversations=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){switch(n.label){case 0:return [4,this._engine.clearConversations(e,t)];case 1:return [2,n.sent()]}}))}))},e.prototype.setUserStatusListener=function(e,t){return this._engine.setUserStatusListener(e,(function(e){try{t(e);}catch(e){ge.error(e);}}))},e.prototype.addToBlacklist=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(t){return [2,this._engine.addToBlacklist(e)]}))}))},e.prototype.removeFromBlacklist=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(t){return [2,this._engine.removeFromBlacklist(e)]}))}))},e.prototype.getBlacklist=function(){return M(this,void 0,void 0,(function(){return w(this,(function(e){return [2,this._engine.getBlacklist()]}))}))},e.prototype.getBlacklistStatus=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(t){return [2,this._engine.getBlacklistStatus(e)]}))}))},e.prototype.insertMessage=function(e,t,n){return M(this,void 0,void 0,(function(){return w(this,(function(i){return [2,this._engine.insertMessage(e,t,n)]}))}))},e.prototype.deleteMessages=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(t){return [2,this._engine.deleteMessages(e)]}))}))},e.prototype.deleteMessagesByTimestamp=function(e,t,n,i,r){return void 0===r&&(r=""),M(this,void 0,void 0,(function(){return w(this,(function(s){return [2,this._engine.deleteMessagesByTimestamp(e,t,n,i,r)]}))}))},e.prototype.clearMessages=function(e,t,n){return void 0===n&&(n=""),M(this,void 0,void 0,(function(){return w(this,(function(i){return [2,this._engine.clearMessages(e,t,n)]}))}))},e.prototype.getMessage=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(t){return [2,this._engine.getMessage(e)]}))}))},e.prototype.setMessageContent=function(e,t,n){return M(this,void 0,void 0,(function(){return w(this,(function(i){return [2,this._engine.setMessageContent(e,t,n)]}))}))},e.prototype.setMessageSearchField=function(e,t,n){return M(this,void 0,void 0,(function(){return w(this,(function(i){return [2,this._engine.setMessageSearchField(e,t,n)]}))}))},e.prototype.setMessageSentStatus=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return [2,this._engine.setMessageSentStatus(e,t)]}))}))},e.prototype.setMessageReceivedStatus=function(e,t){return M(this,void 0,void 0,(function(){return w(this,(function(n){return [2,this._engine.setMessageReceivedStatus(e,t)]}))}))},e.prototype.setUserStatus=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(t){return [2,this._engine.setUserStatus(e)]}))}))},e.prototype.subscribeUserStatus=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(t){return [2,this._engine.subscribeUserStatus(e)]}))}))},e.prototype.getUserStatus=function(e){return M(this,void 0,void 0,(function(){return w(this,(function(t){return [2,this._engine.getUserStatus(e)]}))}))},e.prototype.searchConversationByContent=function(e,t,n,i){return void 0===t&&(t=[]),void 0===n&&(n=""),M(this,void 0,void 0,(function(){return w(this,(function(r){return [2,this._engine.searchConversationByContent(e,t,n,i)]}))}))},e.prototype.searchMessageByContent=function(e,t,n,i,r,s,o){return void 0===o&&(o=""),M(this,void 0,void 0,(function(){return w(this,(function(a){return [2,this._engine.searchMessageByContent(e,t,n,i,r,s,o)]}))}))},e.prototype.getUnreadMentionedMessages=function(e,t,n){return void 0===n&&(n=""),this._engine.getUnreadMentionedMessages(e,t,n)},e.prototype.clearUnreadCountByTimestamp=function(e,t,n,i){return void 0===i&&(i=""),this._engine.clearUnreadCountByTimestamp(e,t,n,i)},e.prototype.getConversationNotificationStatus=function(e,t,n){return void 0===n&&(n=""),this._engine.getConversationNotificationStatus(e,t,n)},e.prototype.getRemoteHistoryMessages=function(e,t,n,i,r,s){return this._engine.getRemoteHistoryMessages(e,t,n,i,r,s)},e.prototype.getConversationListWithAllChannel=function(){return this._engine.getConversationListWithAllChannel()},e.prototype.getConversationListWithAllChannelByPage=function(e,t){return this._engine.getConversationListWithAllChannelByPage(e,t)},e.prototype.joinRTCRoom=function(e,t,n,i,r,s){return this._engine.joinRTCRoom(e,t,n,i,r,s)},e.prototype.quitRTCRoom=function(e){return this._engine.quitRTCRoom(e)},e.prototype.rtcPing=function(e,t,n){return this._engine.rtcPing(e,t,n)},e.prototype.getRTCRoomInfo=function(e){return this._engine.getRTCRoomInfo(e)},e.prototype.getRTCUserInfoList=function(e){return this._engine.getRTCUserInfoList(e)},e.prototype.getRTCUserInfo=function(e){return this._engine.getRTCUserInfo(e)},e.prototype.setRTCUserInfo=function(e,t,n){return this._engine.setRTCUserInfo(e,t,n)},e.prototype.removeRTCUserInfo=function(e,t){return this._engine.removeRTCUserInfo(e,t)},e.prototype.setRTCData=function(e,t,n,i,r,s){return this._engine.setRTCData(e,t,n,i,r,s)},e.prototype.setRTCTotalRes=function(e,t,n,i,r){return void 0===r&&(r=""),this._engine.setRTCTotalRes(e,t,n,i,r)},e.prototype.setRTCCDNUris=function(e,t,n){return this._engine.setRTCCDNUris(e,t,n)},e.prototype.getRTCData=function(e,t,n,i){return this._engine.getRTCData(e,t,n,i)},e.prototype.removeRTCData=function(e,t,n,i,r){return this._engine.removeRTCData(e,t,n,i,r)},e.prototype.setRTCOutData=function(e,t,n,i){return this._engine.setRTCOutData(e,t,n,i)},e.prototype.getRTCOutData=function(e,t){return this._engine.getRTCOutData(e,t)},e.prototype.getRTCToken=function(e,t,n){return this._engine.getRTCToken(e,t,n)},e.prototype.setRTCState=function(e,t){return this._engine.setRTCState(e,t)},e.prototype.getRTCUserList=function(e){return this._engine.getRTCUserList(e)},e.prototype.joinLivingRoomAsAudience=function(e,t,n){return this._engine.joinLivingRoomAsAudience(e,t,n)},e.prototype.quitLivingRoomAsAudience=function(e){return this._engine.quitLivingRoomAsAudience(e)},e.prototype.rtcIdentityChange=function(e,t,n){return this._engine.rtcIdentityChange(e,t,n)},e.prototype.getRTCJoinedUserInfo=function(e){return this._engine.getRTCJoinedUserInfo(e)},e.prototype.requestRoomPK=function(e){return this._engine.requestRoomPK(e)},e.prototype.cancelRoomPK=function(e){return this._engine.cancelRoomPK(e)},e.prototype.responseRoomPK=function(e){return this._engine.responseRoomPK(e)},e.prototype.endRoomPK=function(e){return this._engine.endRoomPK(e)},e.prototype.bindRTCRoomForChatroom=function(e){return this._engine.bindRTCRoomForChatroom(e)},e}();!function(e){e[e.add=1]="add",e[e.update=2]="update",e[e.delete=3]="delete";}(Rs||(Rs={}));

    const logger = new pe('RCIM');

    const hasMiniBaseEvent = (miniGlobal) => {
        const baseMiniEventNames = ['canIUse', 'getSystemInfo'];
        for (let i = 0, max = baseMiniEventNames.length; i < max; i++) {
            const baseEventName = baseMiniEventNames[i];
            if (!miniGlobal[baseEventName]) {
                return false;
            }
        }
        return true;
    };
    const isFromUniappEnv = () => {
        if (typeof uni !== 'undefined' && hasMiniBaseEvent(uni)) {
            return true;
        }
        return false;
    };

    const isFromUniapp$4 = isFromUniappEnv();
    const createXHR = () => {
        const hasCORS = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
        if (typeof XMLHttpRequest !== 'undefined' && hasCORS) {
            return new XMLHttpRequest();
        }
        else if (typeof XDomainRequest !== 'undefined') {
            return new XDomainRequest();
        }
        else {
            return new ActiveXObject('Microsoft.XMLHTTP');
        }
    };
    function httpReq(options) {
        const method = options.method || Vr.GET;
        const timeout = options.timeout || 60 * 1000;
        const { headers, query, body } = options;
        const url = k(options.url, query);
        return new Promise((resolve) => {
            const xhr = createXHR();
            const isXDomainRequest = Object.prototype.toString.call(xhr) === '[object XDomainRequest]';
            xhr.open(method, url);
            if (headers && xhr.setRequestHeader) {
                for (const key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            }
            if (isXDomainRequest) {
                xhr.timeout = timeout;
                xhr.onload = function () {
                    resolve({ data: xhr.responseText, status: xhr.status || 200 });
                };
                xhr.onerror = function () {
                    resolve({ status: xhr.status || 0 });
                };
                xhr.ontimeout = () => {
                    resolve({ status: xhr.status || 0 });
                };
                const reqBody = typeof body === 'object' ? JSON.stringify(body) : body;
                xhr.send(reqBody);
            }
            else {
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        resolve({ data: xhr.responseText, status: xhr.status });
                    }
                };
                xhr.onerror = function () {
                    resolve({ status: xhr.status || 0 });
                };
                setTimeout(() => resolve({ status: xhr.status || 0 }), timeout);
                xhr.send(body);
            }
        });
    }
    function createWebSocket(url, protocols) {
        const ws = new WebSocket(url, protocols);
        ws.binaryType = 'arraybuffer';
        return {
            onClose(callback) {
                ws.onclose = (evt) => {
                    const { code, reason } = evt;
                    callback(code, reason);
                };
            },
            onError(callback) {
                ws.onerror = callback;
            },
            onMessage(callback) {
                ws.onmessage = (evt) => {
                    callback(evt.data);
                };
            },
            onOpen(callback) {
                ws.onopen = callback;
            },
            send(data) {
                ws.send(data);
            },
            close(code, reason) {
                ws.close(code, reason);
            }
        };
    }
    const browser = {
        tag: "browser",
        httpReq,
        localStorage: window === null || window === void 0 ? void 0 : window.localStorage,
        sessionStorage: window === null || window === void 0 ? void 0 : window.sessionStorage,
        isSupportSocket() {
            const bool = typeof WebSocket !== 'undefined';
            bool || logger.warn('websocket not support');
            return bool;
        },
        useNavi: true,
        connectPlatform: '',
        isFromUniapp: isFromUniapp$4,
        createWebSocket,
        createDataChannel(watcher, connectType) {
            if (this.isSupportSocket() && connectType === 'websocket') {
                return new xr(this, watcher);
            }
            else {
                return new Br(this, watcher);
            }
        }
    };

    const isFromUniapp$3 = isFromUniappEnv();
    const createFunc$4 = (method) => (...args) => {
        try {
            return wx[method](...args);
        }
        catch (err) {
            // 此 Bug 是由于微信小程序数据库文件可能会意外损坏导致，目前无解
            logger.error(err);
        }
    };
    const storage$4 = {
        setItem: createFunc$4('setStorageSync'),
        getItem: createFunc$4('getStorageSync'),
        removeItem: createFunc$4('removeStorageSync'),
        clear: createFunc$4('clearStorageSync')
    };
    /**
     * @todo
     */
    const wechat = {
        tag: "wechat",
        httpReq(options) {
            const method = options.method || Vr.GET;
            const timeout = options.timeout || 60 * 1000;
            const { headers, query, body } = options;
            const url = k(options.url, query);
            return new Promise((resolve) => {
                wx.request({
                    url,
                    method,
                    headers,
                    timeout,
                    data: body,
                    success: (res) => {
                        resolve({ data: res.data, status: res.statusCode });
                    },
                    fail: () => {
                        resolve({ status: Ee.RC_HTTP_REQ_TIMEOUT });
                    }
                });
            });
        },
        localStorage: storage$4,
        sessionStorage: storage$4,
        isSupportSocket() {
            return true;
        },
        useNavi: false,
        connectPlatform: 'MiniProgram',
        isFromUniapp: isFromUniapp$3,
        createWebSocket(url, protocols) {
            const socketTask = wx.connectSocket({ url, protocols });
            return {
                onClose(callback) {
                    socketTask.onClose((res) => {
                        callback(res.code, res.reason);
                    });
                },
                onError(callback) {
                    socketTask.onError((res) => {
                        callback(res.errMsg);
                    });
                },
                onMessage(callback) {
                    socketTask.onMessage((res) => {
                        callback(res.data);
                    });
                },
                onOpen(callback) {
                    socketTask.onOpen(callback);
                },
                send(data) {
                    socketTask.send({ data });
                },
                close(code, reason) {
                    socketTask.close({ code, reason });
                }
            };
        },
        createDataChannel(watcher, connectType) {
            if (connectType === 'websocket') {
                return new xr(this, watcher);
            }
            return new Br(this, watcher);
        }
    };

    const isFromUniapp$2 = isFromUniappEnv();
    const createFunc$3 = (method) => (...args) => {
        try {
            return my[method](...args);
        }
        catch (err) {
            logger.error(err);
        }
    };
    const storage$3 = {
        setItem: createFunc$3('setStorageSync'),
        getItem: createFunc$3('getStorageSync'),
        removeItem: createFunc$3('removeStorageSync'),
        clear: createFunc$3('clearStorageSync')
    };
    const alipay = {
        tag: "alipay",
        httpReq(options) {
            const method = options.method || Vr.GET;
            const timeout = options.timeout || 60 * 1000;
            const { headers, query, body } = options;
            const url = k(options.url, query);
            const dataType = options.dataType || 'json';
            return new Promise((resolve) => {
                my.request({
                    url,
                    method,
                    headers,
                    timeout,
                    data: body,
                    dataType,
                    success: (res) => {
                        resolve({ data: res.data, status: res.status });
                    },
                    fail: () => {
                        resolve({ status: Ee.RC_HTTP_REQ_TIMEOUT });
                    }
                });
            });
        },
        localStorage: storage$3,
        sessionStorage: storage$3,
        isSupportSocket() {
            return false;
        },
        useNavi: false,
        connectPlatform: 'MiniProgram',
        isFromUniapp: isFromUniapp$2,
        createDataChannel(watcher, connectType) {
            if (connectType === 'websocket') {
                return new xr(this, watcher);
            }
            return new Br(this, watcher);
        }
    };

    const isFromUniapp$1 = isFromUniappEnv();
    const createFunc$2 = (method) => (...args) => {
        try {
            console.log('tt', tt);
            return tt[method](...args);
        }
        catch (err) {
            // 此 Bug 是由于微信小程序数据库文件可能会意外损坏导致，目前无解
            logger.error(err);
        }
    };
    // 操作缓存对象
    const storage$2 = {
        setItem: createFunc$2('setStorageSync'),
        getItem: createFunc$2('getStorageSync'),
        removeItem: createFunc$2('removeStorageSync'),
        clear: createFunc$2('clearStorageSync')
    };
    const toutiao = {
        tag: "toutiao",
        isSupportSocket: () => true,
        useNavi: false,
        connectPlatform: 'MiniProgram',
        isFromUniapp: isFromUniapp$1,
        localStorage: storage$2,
        sessionStorage: storage$2,
        httpReq(options) {
            return new Promise((resolve, reject) => {
                tt.request({
                    url: options.url,
                    data: options.body,
                    header: options.headers,
                    method: options.method,
                    // dataType: options., // 指定返回数据的类型为 json
                    // responseType: "text",
                    success(res) {
                        console.log('调用成功', res.data);
                        const data = (res === null || res === void 0 ? void 0 : res.data) || {};
                        const obj = {
                            data: JSON.stringify(data),
                            status: res.statusCode
                        };
                        resolve(obj);
                    },
                    fail(res) {
                        console.log('调用失败', res.errMsg);
                        reject({ data: res.errMsg });
                    }
                });
            });
        },
        createWebSocket(url, protocols) {
            const socketTask = tt.connectSocket({ url, protocols });
            return {
                onOpen(callback) {
                    socketTask.onOpen(callback);
                },
                onClose(callback) {
                    socketTask.onClose((res) => callback(res.code, res.reason));
                },
                onError(callback) {
                    socketTask.onError((res) => callback(res.errMsg));
                },
                onMessage(callback) {
                    socketTask.onMessage((res) => callback(res.data));
                },
                send(data) {
                    socketTask.send({ data });
                },
                close(code, reason) {
                    socketTask.close({ code, reason });
                }
            };
        },
        createDataChannel(watcher, connectType) {
            if (connectType === 'websocket') {
                return new xr(this, watcher);
            }
            return new Br(this, watcher);
        }
    };

    const isFromUniapp = isFromUniappEnv();
    const createFunc$1 = (method) => (...args) => {
        try {
            console.log('swan', swan);
            return swan[method](...args);
        }
        catch (err) {
            // 此 Bug 是由于微信小程序数据库文件可能会意外损坏导致，目前无解
            logger.error(err);
        }
    };
    // 操作缓存对象
    const storage$1 = {
        setItem: createFunc$1('setStorageSync'),
        getItem: createFunc$1('getStorageSync'),
        removeItem: createFunc$1('removeStorageSync'),
        clear: createFunc$1('clearStorageSync')
    };
    const baidu = {
        tag: "baidu",
        isSupportSocket: () => true,
        useNavi: false,
        connectPlatform: 'MiniProgram',
        isFromUniapp,
        localStorage: storage$1,
        sessionStorage: storage$1,
        httpReq(options) {
            return new Promise((resolve, reject) => {
                swan.request({
                    url: options.url,
                    data: options.body,
                    header: options.headers,
                    method: options.method,
                    // dataType: options., // 指定返回数据的类型为 json
                    // responseType: "text",
                    success(res) {
                        console.log('调用成功', res.data);
                        const data = (res === null || res === void 0 ? void 0 : res.data) || {};
                        const obj = {
                            data: JSON.stringify(data),
                            status: res.statusCode
                        };
                        resolve(obj);
                    },
                    fail(res) {
                        console.log('调用失败', res.errorCode);
                        reject({ data: res.errorCode });
                    }
                });
            });
        },
        createWebSocket(url, protocols) {
            // 如果已经创建，就不再创建了
            const socketTask = swan.connectSocket({ url, protocols });
            return {
                onOpen(callback) {
                    socketTask.onOpen(callback);
                },
                onClose(callback) {
                    socketTask.onClose((res) => callback(res.code, res.reason));
                },
                onError(callback) {
                    socketTask.onError((res) => callback(res.errMsg));
                },
                onMessage(callback) {
                    socketTask.onMessage((res) => callback(res.data));
                },
                send(data) {
                    socketTask.send({ data });
                },
                close(code, reason) {
                    socketTask.close({ code, reason });
                }
            };
        },
        createDataChannel(watcher, connectType) {
            if (connectType === 'websocket') {
                return new xr(this, watcher);
            }
            return new Br(this, watcher);
        }
    };

    // TODO
    const createFunc = (method) => (...args) => {
        try {
            return uni[method](...args);
        }
        catch (err) {
            logger.error(err);
        }
    };
    const storage = {
        setItem: createFunc('setStorageSync'),
        getItem: createFunc('getStorageSync'),
        removeItem: createFunc('removeStorageSync'),
        clear: createFunc('clearStorageSync')
    };
    /**
     * @todo
     */
    const appPlus = {
        tag: "uniapp",
        httpReq(options) {
            const method = options.method || Vr.GET;
            const timeout = options.timeout || 60 * 1000;
            const { headers, query, body } = options;
            const url = k(options.url, query);
            return new Promise((resolve) => {
                uni.request({
                    url,
                    method,
                    headers,
                    timeout,
                    data: body,
                    success: (res) => {
                        resolve({ data: res.data, status: res.statusCode });
                    },
                    fail: () => {
                        resolve({ status: Ee.RC_HTTP_REQ_TIMEOUT });
                    }
                });
            });
        },
        localStorage: storage,
        sessionStorage: storage,
        isSupportSocket() {
            return true;
        },
        useNavi: true,
        connectPlatform: '',
        isFromUniapp: true,
        createWebSocket(url, protocols) {
            const options = {
                complete: () => { },
                url,
                protocols
            };
            const socketTask = uni.connectSocket(options);
            return {
                onClose(callback) {
                    socketTask.onClose((res) => {
                        callback(res.code, res.reason);
                    });
                },
                onError(callback) {
                    socketTask.onError((res) => {
                        callback(res.errMsg);
                    });
                },
                onMessage(callback) {
                    socketTask.onMessage((res) => {
                        callback(res.data);
                    });
                },
                onOpen(callback) {
                    socketTask.onOpen(callback);
                },
                send(data) {
                    socketTask.send({ data });
                },
                close(code, reason) {
                    socketTask.close({ code, reason });
                }
            };
        },
        createDataChannel(watcher, connectType) {
            if (connectType === 'websocket') {
                return new xr(this, watcher);
            }
            return new Br(this, watcher);
        }
    };
    const uniapp = () => {
        const uniPlatform = process.env.VUE_APP_PLATFORM;
        switch (uniPlatform) {
            case 'app-plus':
                return appPlus;
            case 'mp-baidu':
                return baidu;
            case 'mp-toutiao':
                return toutiao;
            case 'mp-alipay':
                return alipay;
            case 'mp-weixin':
                return wechat;
            case 'h5':
            default:
                return browser;
        }
    };

    const isMiniPrograme = (miniGlobal) => {
        return miniGlobal && miniGlobal.canIUse && miniGlobal.getSystemInfo;
    };
    const runtime = (() => {
        if (typeof uni !== 'undefined' && isMiniPrograme(uni)) {
            return uniapp();
        }
        if (typeof my !== 'undefined' && isMiniPrograme(my)) {
            return alipay;
        }
        if (typeof tt !== 'undefined' && isMiniPrograme(tt)) {
            return toutiao;
        }
        if (typeof swan !== 'undefined' && isMiniPrograme(swan)) {
            return baidu;
        }
        if (typeof wx !== 'undefined' && isMiniPrograme(wx)) {
            return wechat;
        }
        return browser;
    })();

    /**
     * 转化 APIContext 传过来的消息数据
     * @param msg APIContext 消息
     * @returns V3 需要的消息数据
     */
    function tranReceivedMessage(msg) {
        let { conversationType: type, channelId, messageType, content, senderUserId, targetId, sentTime, receivedTime, messageUId, messageDirection, isPersited, isCounted, isOffLineMessage, canIncludeExpansion, expansion, receivedStatus, disableNotification, isMentioned, isStatusMessage, readReceiptInfo, pushConfig, messageId, isInterrupt, isModifyMessage } = msg;
        if (!receivedStatus) {
            receivedStatus = i.UNREAD;
        }
        const result = {
            messageType,
            channelId: channelId || '',
            content,
            senderUserId,
            targetId,
            conversationType: type,
            sentTime,
            receivedTime,
            messageUId,
            messageDirection,
            isPersited,
            isCounted,
            isMentioned,
            disableNotification,
            isStatusMessage,
            canIncludeExpansion,
            expansion,
            receivedStatus,
            readReceiptInfo,
            pushConfig,
            messageId,
            isInterrupt,
            isModifyMessage
        };
        if (type !== j.ULTRA_GROUP)
            result.isOffLineMessage = isOffLineMessage;
        return result;
    }
    /**
     * 转化 APIContext 传过来的会话数据
     * @param conversation APIContext 会话
     * @returns V3 需要的会话数据
     */
    function tranReceiveConversation(conversation) {
        const { conversationType: type, targetId, latestMessage, unreadMessageCount, hasMentioned, mentionedInfo, lastUnreadTime, notificationStatus, isTop, channelId, unreadMentionedCount } = conversation;
        const latestMessageV3 = latestMessage && tranReceivedMessage(latestMessage);
        let mentionedInfoV3;
        if (hasMentioned) {
            mentionedInfoV3 = {
                type: mentionedInfo === null || mentionedInfo === void 0 ? void 0 : mentionedInfo.type,
                userIdList: mentionedInfo === null || mentionedInfo === void 0 ? void 0 : mentionedInfo.userIdList
            };
        }
        else {
            mentionedInfoV3 = undefined;
        }
        return {
            conversationType: type,
            targetId,
            latestMessage: latestMessageV3,
            unreadMessageCount,
            hasMentioned,
            mentionedInfo: mentionedInfoV3,
            lastUnreadTime,
            notificationStatus,
            isTop,
            channelId,
            unreadMentionedCount
        };
    }

    exports.Events = void 0;
    (function (Events) {
        Events["CONNECTING"] = "CONNECTING";
        Events["CONNECTED"] = "CONNECTED";
        Events["DISCONNECT"] = "DISCONNECT";
        Events["SUSPEND"] = "SUSPEND";
        Events["MESSAGES"] = "MESSAGES";
        Events["READ_RECEIPT_RECEIVED"] = "READ_RECEIPT_RECEIVED";
        Events["MESSAGE_RECEIPT_REQUEST"] = "MESSAGE_RECEIPT_REQUEST";
        Events["MESSAGE_RECEIPT_RESPONSE"] = "MESSAGE_RECEIPT_RESPONSE";
        Events["CONVERSATION"] = "CONVERSATION";
        Events["CHATROOM"] = "CHATROOM";
        Events["EXPANSION"] = "EXPANSION";
        Events["PULL_OFFLINE_MESSAGE_FINISHED"] = "PULL_OFFLINE_MESSAGE_FINISHED";
        Events["TAG"] = "TAG";
        Events["CONVERSATION_TAG"] = "CONVERSATION_TAG";
        Events["TYPING_STATUS"] = "TYPING_STATUS";
        Events["MESSAGE_BLOCKED"] = "MESSAGE_BLOCKED";
        Events["ULTRA_GROUP_ENABLE"] = "ULTRA_GROUP_ENABLE";
        Events["OPERATE_STATUS"] = "OPERATE_STATUS";
        Events["ULTRA_GROUP_MESSAGE_EXPANSION_UPDATED"] = "ULTRA_GROUP_MESSAGE_EXPANSION_UPDATED";
        Events["ULTRA_GROUP_MESSAGE_MODIFIED"] = "ULTRA_GROUP_MESSAGE_MODIFIED";
        Events["ULTRA_GROUP_MESSAGE_RECALLED"] = "ULTRA_GROUP_MESSAGE_RECALLED";
    })(exports.Events || (exports.Events = {}));

    class IMClient extends _e {
        constructor(options) {
            super();
            if (IMClient.imClient) {
                logger.error('Please do not repeatedly perform the init method');
                return IMClient.imClient;
            }
            it('options.navigators', options.navigators, (value) => {
                return X(value) && (value.length === 0 || value.every(oe));
            });
            let connectionType = options === null || options === void 0 ? void 0 : options.connectType;
            if (!connectionType) {
                connectionType = t.WEBSOCKET;
            }
            else if (t.WEBSOCKET !== connectionType && t.COMET !== connectionType) {
                logger.warn(`RongIMLib connectionType must be ${t.WEBSOCKET} or ${t.COMET}`);
                connectionType = t.WEBSOCKET;
            }
            this._context = Ss.init(runtime, {
                appkey: options.appkey,
                apiVersion: "5.2.4",
                navigators: options.navigators || [],
                miniCMPProxy: options.customCMP || [],
                connectionType,
                logLevel: options.logLevel,
                logStdout: options.logStdout,
                indexDBSwitch: options.indexDBSwitch,
                checkCA: options.checkCA
            });
            this.watch();
            IMClient.imClient = this;
        }
        get context() {
            if (!this._context) {
                throw new Error('Please perform the init method!');
            }
            return this._context;
        }
        watch() {
            const watcher = {
                onConnecting: () => {
                    this.emit(exports.Events.CONNECTING);
                },
                onConnected: () => {
                    this.emit(exports.Events.CONNECTED);
                },
                onDisconnect: (status) => {
                    this.emit(exports.Events.DISCONNECT, status);
                },
                onSuspend: (status) => {
                    this.emit(exports.Events.SUSPEND, status);
                },
                batchMessage: (messages) => {
                    this.emit(exports.Events.MESSAGES, { messages: messages.map(message => tranReceivedMessage(message)) });
                },
                typingState: (event) => {
                    this.emit(exports.Events.TYPING_STATUS, { status: event });
                },
                readReceiptReceived: (conversation, messageUId, sentTime) => {
                    this.emit(exports.Events.READ_RECEIPT_RECEIVED, { conversation, messageUId, sentTime });
                },
                messageReceiptRequest: (conversation, messageUId, senderUserId) => {
                    this.emit(exports.Events.MESSAGE_RECEIPT_REQUEST, { conversation, messageUId, senderUserId });
                },
                messageReceiptResponse: (conversation, receivedUserId, messageUIdList) => {
                    this.emit(exports.Events.MESSAGE_RECEIPT_RESPONSE, { conversation, receivedUserId, messageUIdList });
                },
                conversationState: (conversations) => {
                    const newConversationList = conversations.map(conversation => {
                        const { conversationType } = conversation;
                        if (conversationType === j.ULTRA_GROUP) {
                            const newConversation = {
                                conversationType,
                                latestMessage: conversation.latestMessage ? tranReceivedMessage(conversation.latestMessage) : null,
                                targetId: conversation.targetId,
                                unreadMessageCount: conversation.unreadMessageCount,
                                unreadMentionedCount: conversation.unreadMentionedCount,
                                versionTime: conversation.versionTime,
                                notificationStatus: conversation.notificationStatus,
                                lastUnreadTime: conversation.lastUnreadTime,
                                channelId: conversation.channelId
                            };
                            return { conversation: newConversation };
                        }
                        else {
                            const newConversation = {
                                conversationType: conversationType,
                                latestMessage: conversation.latestMessage ? tranReceivedMessage(conversation.latestMessage) : null,
                                targetId: conversation.targetId,
                                unreadMessageCount: conversation.unreadMessageCount,
                                hasMentioned: conversation.hasMentioned,
                                mentionedInfo: conversation.mentionedInfo,
                                lastUnreadTime: conversation.lastUnreadTime,
                                notificationStatus: conversation.notificationStatus,
                                isTop: conversation.isTop,
                                channelId: conversation.channelId,
                                unreadMentionedCount: conversation.unreadMentionedCount
                            };
                            return {
                                conversation: newConversation,
                                updatedItems: conversation.updatedItems
                            };
                        }
                    });
                    this.emit(exports.Events.CONVERSATION, {
                        conversationList: newConversationList
                    });
                },
                chatroomState: (event) => {
                    this.emit(exports.Events.CHATROOM, event);
                },
                expansion: event => {
                    this.emit(exports.Events.EXPANSION, event);
                },
                pullFinished: () => {
                    this.emit(exports.Events.PULL_OFFLINE_MESSAGE_FINISHED);
                },
                tag: () => {
                    this.emit(exports.Events.TAG);
                },
                conversationTagChanged: () => {
                    this.emit(exports.Events.CONVERSATION_TAG);
                },
                messageBlocked: (data) => {
                    this.emit(exports.Events.MESSAGE_BLOCKED, data);
                },
                ultraGroupEnable: (list) => {
                    this.emit(exports.Events.ULTRA_GROUP_ENABLE, list);
                },
                operateStatus: (status) => {
                    this.emit(exports.Events.OPERATE_STATUS, status);
                },
                ultraGroupMessageExpansionUpdated: (list) => {
                    this.emit(exports.Events.ULTRA_GROUP_MESSAGE_EXPANSION_UPDATED, list);
                },
                ultraGroupMessageModified: (list) => {
                    this.emit(exports.Events.ULTRA_GROUP_MESSAGE_MODIFIED, list);
                },
                ultraGroupMessageRecalled: (list) => {
                    this.emit(exports.Events.ULTRA_GROUP_MESSAGE_RECALLED, list);
                }
            };
            this.context.assignWatcher(watcher);
        }
    }

    const ERROR_INFO = {
        // 超时
        TIMEOUT: {
            code: -1,
            msg: 'Network timeout'
        },
        // SDK 内部错误
        SDK_INTERNAL_ERROR: {
            code: -2,
            msg: 'SDK internal error'
        },
        // 开发者参数传入错误
        PARAMETER_ERROR: {
            code: -3,
            msg: 'Please check the parameters, the {param} expected a value of {expect} but received {current}'
        },
        REJECTED_BY_BLACKLIST: {
            code: 405,
            msg: 'Blacklisted by the other party'
        },
        // 发送频率过快
        SEND_TOO_FAST: {
            code: 20604,
            msg: 'Sending messages too quickly'
        },
        // 不在群组中
        NOT_IN_GROUP: {
            code: 22406,
            msg: 'Not in group'
        },
        // 在群组中被禁言
        FORBIDDEN_IN_GROUP: {
            code: 22408,
            msg: 'Forbbiden from speaking in the group'
        },
        // 不在聊天室中
        NOT_IN_CHATROOM: {
            code: 23406,
            msg: 'Not in chatRoom'
        },
        // 在聊天室中被禁言
        FORBIDDEN_IN_CHATROOM: {
            code: 23408,
            msg: 'Forbbiden from speaking in the chatRoom'
        },
        // 已被踢出并禁止加入聊天室
        KICKED_FROM_CHATROOM: {
            code: 23409,
            msg: 'Kicked out and forbbiden from joining the chatRoom'
        },
        // 聊天室不存在
        CHATROOM_NOT_EXIST: {
            code: 23410,
            msg: 'ChatRoom does not exist'
        },
        // 聊天室成员超限
        CHATROOM_IS_FULL: {
            code: 23411,
            msg: 'ChatRoom members exceeded'
        },
        // 聊天室参数无效
        PARAMETER_INVALID_CHATROOM: {
            code: 23412,
            msg: 'Invalid chatRoom parameters'
        },
        // 聊天室云存储业务未开通
        ROAMING_SERVICE_UNAVAILABLE_CHATROOM: {
            code: 23414,
            msg: 'ChatRoom message roaming service is not open, Please go to the developer to open this service'
        },
        // 撤回消息失败
        RECALLMESSAGE_PARAMETER_INVALID: {
            code: 25101,
            msg: 'Invalid recall message parameter'
        },
        // 未开通单群聊消息云存储服务
        ROAMING_SERVICE_UNAVAILABLE_MESSAGE: {
            code: 25102,
            msg: 'Single group chat roaming service is not open, Please go to the developer to open this service'
        },
        // push 设置参数无效
        PUSHSETTING_PARAMETER_INVALID: {
            code: 26001,
            msg: 'Invalid push parameter'
        },
        // 操作被禁止
        OPERATION_BLOCKED: {
            code: 20605,
            msg: 'Operation is blocked'
        },
        // 操作不支持
        OPERATION_NOT_SUPPORT: {
            code: 20606,
            msg: 'Operation is not supported'
        },
        // 发送的消息中包含敏感词 (发送方发送失败，接收方不会收到消息)
        MSG_BLOCKED_SENSITIVE_WORD: {
            code: 21501,
            msg: 'The sent message contains sensitive words'
        },
        // 消息中敏感词已经被替换 (接收方可以收到被替换之后的消息)
        REPLACED_SENSITIVE_WORD: {
            code: 21502,
            msg: 'Sensitive words in the message have been replaced'
        },
        // 用户未连接成功
        NOT_CONNECTED: {
            code: 30001,
            msg: 'Please connect successfully first'
        },
        // 导航 http 请求失败
        NAVI_REQUEST_ERROR: {
            code: 30007,
            msg: 'Navigation http request failed'
        },
        // CMP 嗅探 http 请求失败
        CMP_REQUEST_ERROR: {
            code: 30010,
            msg: 'CMP sniff http request failed'
        },
        CONN_APPKEY_FAKE: {
            code: 31002,
            msg: 'Your appkey is fake'
        },
        CONN_MINI_SERVICE_NOT_OPEN: {
            code: 31003,
            msg: 'Mini program service is not open, Please go to the developer to open this service'
        },
        CONN_ACK_TIMEOUT: {
            code: 31000,
            msg: 'Connection ACK timeout'
        },
        CONN_TOKEN_INCORRECT: {
            code: 31004,
            msg: 'Your token is not valid or expired'
        },
        CONN_NOT_AUTHRORIZED: {
            code: 31005,
            msg: 'AppKey and Token do not match'
        },
        CONN_REDIRECTED: {
            code: 31006,
            msg: 'Connection redirection'
        },
        CONN_APP_BLOCKED_OR_DELETED: {
            code: 31008,
            msg: 'AppKey is banned or deleted'
        },
        CONN_USER_BLOCKED: {
            code: 31009,
            msg: 'User blocked'
        },
        // 域名无效
        CONN_DOMAIN_INCORRECT: {
            code: 31012,
            msg: 'Connect domain error, Please check the set security domain'
        },
        // 未开通单群聊历史消息云存储
        ROAMING_SERVICE_UNAVAILABLE: {
            code: 33007,
            msg: 'Roaming service cloud is not open, Please go to the developer to open this service'
        },
        // 已连接, 不可再次调用链接(错误码与移动端对齐)
        RC_CONNECTION_EXIST: {
            code: 34001,
            msg: 'Connection already exists'
        },
        // 聊天室 KV 设置超出最大值(已满, 默认最多设置 100 个)
        CHATROOM_KV_EXCEED: {
            code: 23423,
            msg: 'ChatRoom KV setting exceeds maximum'
        },
        // 聊天室 KV 已存在
        CHATROOM_KV_OVERWRITE_INVALID: {
            code: 23424,
            msg: 'ChatRoom KV already exists'
        },
        // 聊天室 KV 存储功能没有开通
        CHATROOM_KV_STORE_NOT_OPEN: {
            code: 23426,
            msg: 'ChatRoom KV storage service is not open, Please go to the developer to open this service'
        },
        // 聊天室Key不存在
        CHATROOM_KEY_NOT_EXIST: {
            code: 23427,
            msg: 'ChatRoom key does not exist'
        },
        // 消息不支持扩展存储(错误码与移动端对齐)
        MSG_KV_NOT_SUPPORT: {
            code: 34008,
            msg: 'The message cannot be extended'
        },
        // 发送扩展存储消息失败(错误码与移动端对齐)
        SEND_MESSAGE_KV_FAIL: {
            code: 34009,
            msg: 'Sending RC expansion message fail'
        },
        // 扩展存储 key value 超出限制(错误码与移动端对齐)
        EXPANSION_LIMIT_EXCEET: {
            code: 34010,
            msg: 'The message expansion size is beyond the limit'
        },
        // 调用接口时传入的参数不正确(错误码与移动端对齐)
        ILLGAL_PARAMS: {
            code: 33003,
            msg: 'Incorrect parameters passed in while calling the interface'
        },
        UPLOAD_FILE_FAILED: {
            code: 35020,
            msg: 'File upload failed'
        },
        // 聊天室批量设置kv 没有全部成功
        CHATROOM_KV_STORE_NOT_ALL_SUCCESS: {
            code: 23428,
            msg: 'Chatroom kv store not all success'
        },
        // 聊天室批量设置kv 一次超过10个
        CHATROOM_KV_STORE_OUT_LIMIT: {
            code: 23429,
            msg: 'Chatroom kv\'s length is out of limit'
        },
        // 标签已存在
        TAG_EXISTS: {
            code: 33101,
            msg: 'The tag already exists'
        },
        // 标签不存在
        TAG_NOT_EXIST: {
            code: 33100,
            msg: 'The tag does not exist'
        },
        // 方法未支持
        NOT_SUPPORT: {
            code: Ee.NOT_SUPPORT,
            msg: 'The method is not supported in a browser!'
        }
    };
    const ERROR_CODE = {};
    const ERROR_CODE_TO_INFO = {};
    for (const name in ERROR_INFO) {
        const info = ERROR_INFO[name];
        const { code } = info;
        // ERROR_CODE[name] = code
        ERROR_CODE[code] = name;
        ERROR_CODE_TO_INFO[code] = info;
    }
    // 服务返回的错误码, 转化为 SDK 的 ErrorCode
    ({
        // 未开通单群聊历史消息云存储
        1: ERROR_INFO.ROAMING_SERVICE_UNAVAILABLE.code
    });

    let imClient;
    /**
     * 初始化
     * @param initOption
     */
    const init$1 = (initOption) => {
        imClient = imClient || new IMClient(initOption);
    };
    /**
     * 装载 plugin 插件，并返回相应的插件实例，需在调用 `connect` 方法之前使用
     * @param plugins
     */
    function installPlugin(plugin, options) {
        return imClient === null || imClient === void 0 ? void 0 : imClient.context.install(plugin, options);
    }
    /**
     * 建立 IM 连接
     * @param token
     * @param reconnectKickEnable 设置断线重连时是否踢出当前正在重连的设备 (仅 Electron 环境有效)
     */
    function connect(token, reconnectKickEnable) {
        return __awaiter(this, void 0, void 0, function* () {
            it('token', token, We.STRING, true);
            logger.warn(`RongIMLib Version: ${"5.2.4"}, Commit: ${"ef492e0d22851e8482bc5dd43210a8a72a406236"}`);
            const res = yield imClient.context.connect(token, false, reconnectKickEnable);
            if (res.code === Ee.SUCCESS) {
                return { code: res.code, data: { userId: res.userId } };
            }
            return { code: res.code, msg: ERROR_CODE[res.code] };
        });
    }
    /**
     * 断开当前用户的连接
     * @description 调用后将不再接收消息，不可发送消息，不可获取历史消息，不可获取会话列表
     */
    function disconnect() {
        return imClient.context.disconnect();
    }
    /**
     * 获取 IM 连接状态
     */
    function getConnectionStatus() {
        return imClient.context.getConnectionStatus();
    }
    /**
     * 当前服务器时间
     * 校准时间，可能存在误差
     */
    function getServerTime() {
        return imClient.context.getServerTime();
    }
    /**
      * 获取 IM 连接用户的 id
      */
    function getCurrentUserId() {
        return imClient.context.getCurrentUserId();
    }
    /**
     * 绑定事件
     */
    function addEventListener(eventType, listener, target) {
        imClient.on(eventType, listener, target);
    }
    function onceEventListener(eventType, listener, target) {
        imClient.once(eventType, listener, target);
    }
    /**
     * 移除事件
     */
    function removeEventListener(eventType, listener, target) {
        imClient.off(eventType, listener, target);
    }
    /**
     * 移除同一类型下的所有事件
     */
    function removeEventListeners(eventType) {
        imClient.removeAll(eventType);
    }
    /**
     * 清理所有事件
     */
    function clearEventListeners() {
        imClient.clear();
    }
    function __addSDKVersion(name, version) {
        Je.add(name, version);
    }

    /**
     * 获取会话列表
     * @param options
     */
    function getConversationList(options, channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('get conversation list ->');
            const { code, data } = yield IMClient.imClient.context.getConversationList(options === null || options === void 0 ? void 0 : options.count, undefined, options === null || options === void 0 ? void 0 : options.startTime, options === null || options === void 0 ? void 0 : options.order, channelId);
            if (code === Ee.SUCCESS && data) {
                const list = data.map(item => tranReceiveConversation(item));
                return { code: 0, data: list };
            }
            logger.warn('get conversation list fail ->' + code + ':' + ERROR_CODE[code]);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 移除指定的会话实例
     */
    function removeConversation(options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.conversationType', options.conversationType, ue, true);
            it('options.targetId', options.targetId, We.STRING, true);
            it('options.channelId', options.channelId, We.CHANNEL_ID);
            const code = yield IMClient.imClient.context.removeConversation(options.conversationType, options.targetId, options.channelId);
            const paramsStr = 'conversationType:' + options.conversationType + ',targetId:' + options.targetId;
            logger.debug('destroy conversation ->' + paramsStr);
            if (code !== Ee.SUCCESS) {
                logger.warn('destroy conversation fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 获取会话文本草稿
     * @params conversationType 会话乐行
     * @params targetId 目标 ID
    */
    function getTextMessageDraft(options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.conversationType', options.conversationType, ue, true);
            it('options.targetId', options.targetId, We.STRING, true);
            it('options.channelId', options.channelId, We.CHANNEL_ID);
            const { code, data } = yield IMClient.imClient.context.getConversationMessageDraft(options.conversationType, options.targetId, options.channelId);
            const paramsStr = 'conversationType:' + options.conversationType + ',targetId:' + options.targetId;
            logger.debug('get draft ->' + paramsStr);
            if (code === Ee.SUCCESS) {
                return { code, data: data || '' };
            }
            logger.warn('get draft fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 设置会话文本草稿
     * @params conversationType 会话乐行
     * @params targetId 目标 ID
     * @params draft 草稿内容
    */
    function saveTextMessageDraft(options, draft) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.conversationType', options.conversationType, ue, true);
            it('options.targetId', options.targetId, We.STRING, true);
            it('options.channelId', options.channelId, We.CHANNEL_ID);
            it('draft', draft, We.STRING, true);
            const paramsStr = 'conversationType:' + options.conversationType + ',targetId:' + options.targetId;
            logger.debug('set draft ->' + paramsStr);
            const code = yield IMClient.imClient.context.saveConversationMessageDraft(options.conversationType, options.targetId, draft, options.channelId);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('set draft fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 删除会话文本草稿
     * @params conversationType 会话乐行
     * @params targetId 目标 ID
    */
    function clearTextMessageDraft(options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.conversationType', options.conversationType, ue, true);
            it('options.targetId', options.targetId, We.STRING, true);
            it('options.channelId', options.channelId, We.CHANNEL_ID);
            const paramsStr = 'conversationType:' + options.conversationType + ',targetId:' + options.targetId;
            logger.debug('delete draft  ->' + paramsStr);
            const code = yield IMClient.imClient.context.clearConversationMessageDraft(options.conversationType, options.targetId, options.channelId);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('delete draft fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 获取当前所有会话的消息未读数
     * @description
     * 1. 清除浏览器缓存会导致会话未读数不准确
     * 2. 会话消息未读数存储在 WebStorage 中, 若浏览器不支持或禁用 WebStorage，未读消息数将不会保存，浏览器页面刷新未读消息数将不会存在
     * 3. 其他端删除会话可能会导致会话未读数不准确
     * @param includeMuted 是否包含免打扰会话
     * @param conversationTypes 要获取未读数的会话类型，若为空，则默认获取单聊、群聊及系统消息未读数
     */
    function getTotalUnreadCount(includeMuted, conversationTypes) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('get total unread count -> ConversationType:' + JSON.stringify(conversationTypes) + ' includeMuted:' + includeMuted);
            it('includeMuted', includeMuted, We.BOOLEAN, false);
            it('conversationTypes', conversationTypes, We.ARRAY, false);
            if (conversationTypes) {
                for (const type of conversationTypes) {
                    it('conversationType', type, ue);
                }
            }
            const { code, data } = yield IMClient.imClient.context.getTotalUnreadCount('', conversationTypes, includeMuted);
            // 当未读数为空时，返回 0 故不校验 data 值
            if (code === Ee.SUCCESS) {
                return { code, data: data };
            }
            logger.warn('getTotalUnreadCount fail ->' + code + ':' + ERROR_CODE[code]);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 获取单个会话的未读数
     *
     */
    function getUnreadCount(options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.conversationType', options.conversationType, ue, true);
            it('options.targetId', options.targetId, We.STRING, true);
            it('options.channelId', options.channelId, We.CHANNEL_ID);
            const { code, data } = yield IMClient.imClient.context.getUnreadCount(options.conversationType, options.targetId, options.channelId);
            const paramsStr = 'conversationType:' + options.conversationType + ',targetId:' + options.targetId;
            logger.debug('get unreadCount ->' + paramsStr);
            // 当未读数为空时，返回 0 故不校验 data 值
            if (code === Ee.SUCCESS) {
                return { code, data: data };
            }
            logger.warn('get unreadCount fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 清除会话未读数
     * 原：clearUnreadCount
     */
    function clearMessagesUnreadStatus(options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.conversationType', options.conversationType, ue, true);
            it('options.targetId', options.targetId, We.STRING, true);
            it('options.channelId', options.channelId, We.CHANNEL_ID);
            const code = yield IMClient.imClient.context.clearUnreadCount(options.conversationType, options.targetId, options.channelId);
            const paramsStr = 'conversationType:' + options.conversationType + ',targetId:' + options.targetId;
            logger.debug('clear unreadMsgNum ->' + paramsStr);
            if (code !== Ee.SUCCESS) {
                logger.warn('clear unreadMsgNum fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 清理全部未读数
     * @returns
     */
    function clearAllMessagesUnreadStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield IMClient.imClient.context.clearAllUnreadCount();
            return { code };
        });
    }
    /**
     * 设置会话免打扰
     * 原： setConversationStatus，免打扰和置顶一体的
     * 是否免打扰
     * * 1: 开启免打扰
     * * 2: 关闭免打扰
     */
    function setConversationNotificationStatus(options, notificationStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.conversationType', options.conversationType, ue, true);
            it('options.targetId', options.targetId, We.STRING, true);
            it('options.channelId', options.channelId, We.CHANNEL_ID);
            it('notificationStatus', notificationStatus, (value) => {
                return (value === 1 || value === 2);
            }, true);
            const paramsStr = 'conversationType:' + options.conversationType + ',targetId:' + options.targetId;
            logger.debug('set conversation status ->' + paramsStr);
            const code = yield IMClient.imClient.context.setConversationStatus(options.conversationType, options.targetId, undefined, notificationStatus, options.channelId);
            if (code !== Ee.SUCCESS) {
                logger.warn('set conversation status fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 获取免打扰状态
     * getConversationNotificationStatus
     */
    function getConversationNotificationStatus(options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.conversationType', options.conversationType, ue, true);
            it('options.targetId', options.targetId, We.STRING, true);
            it('options.channelId', options.channelId, We.CHANNEL_ID);
            logger.info('getConversationNotificationStatus ->targetId:' + options.targetId + ',conversationType:' + options.conversationType);
            const { code, data } = yield IMClient.imClient.context.getConversationNotificationStatus(options.conversationType, options.targetId, options.channelId);
            if (code === Ee.SUCCESS) {
                return { code, data };
            }
            else {
                logger.warn('getConversationNotificationStatus ->code:' + code + ',targetId:' + options.targetId);
                return { code, msg: ERROR_CODE[code] };
            }
        });
    }
    /**
     * 获取免打扰状态列表
     * getBlockedConversationList
     */
    function getBlockedConversationList() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield IMClient.imClient.context.getBlockConversationList();
            return { code, data };
        });
    }
    /**
     * 设置会话是否置顶
     */
    function setConversationToTop(options, isTop = true) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.type', options.conversationType, ue, true);
            it('options.targetId', options.targetId, We.STRING, true);
            it('options.channelId', options.channelId, We.CHANNEL_ID);
            const paramsStr = 'conversationType:' + options.conversationType + ',targetId:' + options.targetId;
            logger.debug('set conversation status ->' + paramsStr);
            const code = yield IMClient.imClient.context.setConversationStatus(options.conversationType, options.targetId, isTop, undefined, options.channelId);
            if (code !== Ee.SUCCESS) {
                logger.warn('set conversation status fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 获取置顶会话
     */
    function getTopConversationList() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield IMClient.imClient.context.getTopConversationList();
            return { code, data };
        });
    }
    /**
     * 获取单个群会话 @ 消息未读数
     * @param targetId 目标 ID
     */
    function getUnreadMentionedCount(options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.targetId', options.targetId, We.STRING, true);
            it('options.channelId', options.channelId, We.CHANNEL_ID);
            logger.debug('getUnreadMentionedCount' + options.targetId + ',channelId:' + options.channelId);
            return IMClient.imClient.context.getUnreadMentionedCount(options);
        });
    }
    /**
     * 获取所有群会话 @ 消息未读数
     */
    function getAllUnreadMentionedCount() {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug('getAllUnreadMentionedCount');
            return IMClient.imClient.context.getAllUnreadMentionedCount();
        });
    }
    /**
     * 获取本地全部会话的状态
     */
    function getAllConversationState() {
        return __awaiter(this, void 0, void 0, function* () {
            return IMClient.imClient.context.getAllConversationState();
        });
    }

    /**
     * 获取超级群会话列表
     */
    function getUltraGroupList() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield IMClient.imClient.context.getUltraGroupList();
            if (code === Ee.SUCCESS) {
                return { code: Ee.SUCCESS, data };
            }
            logger.warn('get ultragroup  ->' + code + ':' + ERROR_CODE[code]);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
       * 获取超级群免打扰列表
       */
    function getBlockUltraGroupList() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield IMClient.imClient.context.getBlockUltraGroupList();
            if (code === Ee.SUCCESS) {
                return { code: Ee.SUCCESS, data };
            }
            logger.warn('get block ultragroup  ->' + code + ':' + ERROR_CODE[code]);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 通知服务端正在输入中
     */
    function sendUltraGroupTypingStatus(options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.targetId', options.targetId, We.STRING, true);
            it('options.channelId', options.channelId, We.CHANNEL_ID);
            it('options.conversationType', options.conversationType, ue, true);
            const { code } = yield IMClient.imClient.context.sendUltraGroupTypingStatus(options);
            if (code === Ee.SUCCESS) {
                return { code: Ee.SUCCESS };
            }
            logger.warn('send ultraGroup OperateStatus   ->' + code + ':' + ERROR_CODE[code]);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 根据消息 ID 获取消息
     */
    function getUltraGroupMessageListByMessageUId(options, msgs) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.targetId', options.targetId, We.STRING, true);
            it('options.channelId', options.channelId, We.CHANNEL_ID);
            it('options.conversationType', options.conversationType, ue, true);
            it('msgs', msgs, We.ARRAY, true);
            const { targetId, conversationType, channelId } = options;
            const messages = [];
            msgs.forEach(item => {
                const { sendTime, messageUId } = item;
                messages.push({ sendTime, messageUId, channelId });
            });
            const params = { targetId, conversationType, messages };
            const { code, data } = yield IMClient.imClient.context.getUltraGroupMessageListByMessageUId(params);
            if (code === Ee.SUCCESS) {
                return { code: Ee.SUCCESS, data };
            }
            logger.warn('get UltraGroup MessageList by messageUId   ->' + code + ':' + ERROR_CODE[code]);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 修改消息扩展
     */
    function updateExpansionForUltraGroupMessage(expansion, message) {
        return __awaiter(this, void 0, void 0, function* () {
            it('expansion', expansion, We.OBJECT, true);
            it('message', message, We.OBJECT, true);
            const { conversationType, targetId, messageUId, senderUserId, sentTime, canIncludeExpansion, expansion: originExpansion, channelId } = message;
            const paramsStr = 'conversationType:' + conversationType + ',targetId:' + targetId + ',channelId:' + channelId + ',messageUId:' + messageUId;
            logger.debug('update expansion for ultragroup message  ->' + paramsStr);
            const options = {
                targetId,
                channelId,
                conversationType,
                sendTime: sentTime,
                canIncludeExpansion,
                messageUId,
                expansion
            };
            const { code } = yield IMClient.imClient.context.expandUltraMessage(options);
            if (code === Ee.SUCCESS) {
                return { code: Ee.SUCCESS };
            }
            logger.warn('update expansion for ultragroup message   ->' + code + ':' + ERROR_CODE[code]);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 删除消息扩展
     */
    function removeExpansionForUltraGroupMessage(expansion, message) {
        return __awaiter(this, void 0, void 0, function* () {
            it('expansion', expansion, We.ARRAY, true);
            it('message', message, We.OBJECT, true);
            const { conversationType, targetId, messageUId, senderUserId, sentTime, canIncludeExpansion, channelId } = message;
            const paramsStr = 'conversationType:' + conversationType + ',targetId:' + targetId + ',channelId:' + channelId + ',messageUId:' + messageUId;
            logger.debug('remove expansion for ultragroup message  ->' + paramsStr);
            const options = {
                targetId,
                channelId,
                conversationType,
                sendTime: sentTime,
                canIncludeExpansion,
                messageUId,
                keys: expansion
            };
            const { code } = yield IMClient.imClient.context.expandUltraMessage(options);
            if (code === Ee.SUCCESS) {
                return { code: Ee.SUCCESS };
            }
            logger.warn('remove expansion for ultraGroup message   ->' + code + ':' + ERROR_CODE[code]);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 删除指定消息上的所有扩展
     */
    function removeAllExpansionForUltraGroupMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            it('message', message, We.OBJECT, true);
            const { conversationType, targetId, messageUId, senderUserId, sentTime, canIncludeExpansion, channelId } = message;
            const paramsStr = 'conversationType:' + conversationType + ',targetId:' + targetId + ',channelId:' + channelId + ',messageUId:' + messageUId;
            logger.debug('remove all expansion for ultraGroup message ->' + paramsStr);
            const options = {
                targetId,
                channelId,
                conversationType,
                sendTime: sentTime,
                canIncludeExpansion,
                messageUId,
                removeAll: true
            };
            const { code } = yield IMClient.imClient.context.expandUltraMessage(options);
            if (code === Ee.SUCCESS) {
                return { code: Ee.SUCCESS };
            }
            logger.warn('remove all expansion for ultraGroup message   ->' + code + ':' + ERROR_CODE[code]);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 修改消息
     */
    function modifyMessage(content, message) {
        return __awaiter(this, void 0, void 0, function* () {
            it('content', content, We.OBJECT, true);
            it('message', message, We.OBJECT, true);
            const { conversationType, targetId, messageUId, senderUserId, sentTime, canIncludeExpansion, channelId } = message;
            const paramsStr = 'conversationType:' + conversationType + ',targetId:' + targetId + ',channelId:' + channelId + ',messageUId:' + messageUId;
            logger.debug('update ultragroup message expansion ->' + paramsStr);
            const options = {
                targetId,
                channelId,
                conversationType,
                fromUserId: senderUserId,
                sendTime: sentTime,
                canIncludeExpansion,
                messageUId,
                content
            };
            const { code } = yield IMClient.imClient.context.modifyMessage(options);
            if (code === Ee.SUCCESS) {
                return { code: Ee.SUCCESS };
            }
            logger.warn('modify ultraGroup message   ->' + code + ':' + ERROR_CODE[code]);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 获取超级群所有子频道的未读数
     */
    function getUltraGroupUnreadMentionedCountByTargetId(targetId) {
        return __awaiter(this, void 0, void 0, function* () {
            it('cotargetIdntent', targetId, We.STRING, true);
            logger.debug('get UltraGroup unreadMentionedCount by targetId:' + targetId);
            const { code, data } = yield IMClient.imClient.context.getUltraGroupUnreadMentionedCountByTargetId(targetId);
            if (code === Ee.SUCCESS) {
                return { code: Ee.SUCCESS, data };
            }
            logger.warn('get UltraGroup unreadMentionedCount by targetId error ->' + code + ':' + ERROR_CODE[code]);
            return { code, msg: ERROR_CODE[code] };
        });
    }

    /**
     * 校验设置聊天室属性的参数
     * @param options
     */
    const assertSetChatRoomEntryOption = (options) => {
        it('options.key', options.key, We.STRING, true);
        it('options.value', options.value, We.STRING, true);
        it('options.isAutoDelete', options.isAutoDelete, We.BOOLEAN);
        it('options.isSendNotification', options.isSendNotification, We.BOOLEAN);
        it('options.notificationExtra', options.notificationExtra, We.STRING);
    };
    /**
     * 批量校验设置聊天室属性的参数
     */
    const assertSetChatRoomEntriesOption = (options) => {
        options.entries.forEach(entry => {
            it('entry.key', entry.key, We.STRING, true);
            it('entry.value', entry.value, We.STRING, true);
        });
        it('options.isAutoDelete', options.isAutoDelete, We.BOOLEAN);
        // assert('options.isSendNotification', options.isSendNotification, AssertRules.BOOLEAN)
        it('options.notificationExtra', options.notificationExtra, We.STRING);
    };
    /**
     * 校验删除聊天室属性的参数
     * @param options
     */
    const assertRemoveChatRoomEntryOption = (options) => {
        it('options.key', options.key, We.STRING, true);
        it('options.isSendNotification', options.isSendNotification, We.BOOLEAN);
        it('options.notificationExtra', options.notificationExtra, We.STRING);
    };
    /**
     * 批量校验删除聊天室属性的参数
     * @param options
     */
    const assertRemoveChatRoomEntriesOption = (options) => {
        options.entries.forEach(entry => {
            it('key', entry, We.STRING, true);
        });
        // assert('options.isSendNotification', options.isSendNotification, AssertRules.BOOLEAN)
        it('options.notificationExtra', options.notificationExtra, We.STRING);
    };
    /**
       * 加入聊天室
       */
    function joinChatRoom(targetId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.count', options.count, We.NUMBER, true);
            const paramsStr = 'id:' + targetId;
            logger.debug('join chatroom ->' + paramsStr);
            const code = yield IMClient.imClient.context.joinChatroom(targetId, options.count);
            if (code !== Ee.SUCCESS) {
                logger.warn('join chatroom fail ->code+:' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 加入已存在的聊天室
     */
    function joinExistChatRoom(targetId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.count', options.count, We.NUMBER, true);
            const paramsStr = 'id:' + targetId;
            logger.debug('join exist chatroom ->' + paramsStr);
            const code = yield IMClient.imClient.context.joinExistChatroom(targetId, options.count);
            if (code !== Ee.SUCCESS) {
                logger.warn('join exist chatroom fail ->code:' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 退出聊天室
     */
    function quitChatRoom(targetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsStr = 'id:' + targetId;
            logger.debug('quit chatroom ->' + paramsStr);
            const code = yield IMClient.imClient.context.quitChatroom(targetId);
            if (code !== Ee.SUCCESS) {
                logger.warn('quit chatroom fail ->code+:' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 获取聊天室房间数据
     * @description count 或 order 有一个为0时,只返回成员总数，不返回成员列表信息
     */
    function getChatRoomInfo(targetId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.count', options.count, We.NUMBER);
            it('options.order', options.order, (value) => {
                return [0, 1, 2].includes(value);
            });
            const paramsStr = 'id:' + targetId;
            logger.debug('get chatroom info ->' + paramsStr);
            const { code, data: chatroomInfo } = yield IMClient.imClient.context.getChatroomInfo(targetId, options.count, options.order);
            if (code === Ee.SUCCESS && chatroomInfo) {
                return { code, data: chatroomInfo };
            }
            logger.warn('get chatroom info fail ->code+:' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 设置聊天室自定义属性
     * @description 仅聊天室中不存在此属性或属性设置者为己方时可设置成功
     */
    function setChatRoomEntry(targetId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('targetId', targetId, We.STRING, true);
            assertSetChatRoomEntryOption(options);
            const paramsStr = 'id:' + targetId;
            logger.debug('set chatroom entry->' + paramsStr);
            const code = yield IMClient.imClient.context.setChatroomEntry(targetId, options);
            if (code !== Ee.SUCCESS) {
                logger.warn('set chatroom entry fail ->code+:' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 批量设置聊天室自定义属性
     * @param options ISetChatroomEntryOption数组
     */
    function setChatRoomEntries(targetId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('targetId', targetId, We.STRING, true);
            assertSetChatRoomEntriesOption(options);
            if (options.entries.length > 10) {
                return ERROR_INFO.CHATROOM_KV_STORE_OUT_LIMIT;
            }
            const paramsStr = 'id:' + targetId;
            logger.debug('set chatroom entry->' + paramsStr);
            const { code, data } = yield IMClient.imClient.context.setChatroomEntries(targetId, options);
            if (code !== Ee.SUCCESS) {
                logger.warn('set chatroom entry fail ->code+:' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code], data };
            }
            return { code };
        });
    }
    /**
     * 强制 增加/修改 任意聊天室属性
     * @description 仅聊天室中不存在此属性或属性设置者为己方时可设置成功
     */
    function forceSetChatRoomEntry(targetId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('targetId', targetId, We.STRING, true);
            assertSetChatRoomEntryOption(options);
            const paramsStr = 'id:' + targetId;
            logger.debug('force set chatroom entry ->' + paramsStr);
            const code = yield IMClient.imClient.context.forceSetChatroomEntry(targetId, options);
            if (code !== Ee.SUCCESS) {
                logger.warn('force set chatroom entry fail ->code+:' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 删除聊天室属性
     * @description 仅限于删除自己设置的聊天室属性
     * @param key 属性名称, 支持英文字母、数字、+、=、-、_ 的组合方式,最大长度 128 字符
     * @param isSendNotification? 删除成功后是否发送通知消息
     * @param notificationExtra? RC:chrmKVNotiMsg 通知消息中携带的附加信息
     */
    function removeChatRoomEntry(targetId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('targetId', targetId, We.STRING, true);
            assertRemoveChatRoomEntryOption(options);
            const paramsStr = 'id:' + targetId;
            logger.debug('remove chatroom entry->' + paramsStr);
            const code = yield IMClient.imClient.context.removeChatroomEntry(targetId, options);
            if (code !== Ee.SUCCESS) {
                logger.warn('remove chatroom entry fail ->code+:' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 批量删除聊天室属性
     * @description 仅限于删除自己设置的聊天室属性
     * @param entries[] 属性名称, 支持英文字母、数字、+、=、-、_ 的组合方式, 最大长度 128 字符
     * @param notificationExtra? RC:chrmKVNotiMsg 通知消息中携带的附加信息
     */
    function removeChatRoomEntries(targetId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('targetId', targetId, We.STRING, true);
            assertRemoveChatRoomEntriesOption(options);
            const paramsStr = 'id:' + targetId;
            logger.debug('remove chatroom entry->' + paramsStr);
            const newOptions = Object.assign({}, options);
            newOptions.entries = options.entries.map(entry => {
                return { key: entry };
            });
            const { code, data } = yield IMClient.imClient.context.removeChatroomEntries(targetId, newOptions);
            if (code !== Ee.SUCCESS) {
                logger.warn('remove chatroom entry fail ->code+:' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code], data };
            }
            return { code };
        });
    }
    /**
     * 强制删除聊天室内的任意属性
     * @description
     */
    function forceRemoveChatRoomEntry(targetId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('targetId', targetId, We.STRING, true);
            assertRemoveChatRoomEntryOption(options);
            const paramsStr = 'id:' + targetId;
            logger.debug('force remove chatroom entry ->' + paramsStr);
            const code = yield IMClient.imClient.context.forceRemoveChatroomEntry(targetId, options);
            if (code !== Ee.SUCCESS) {
                logger.warn('force remove chatroom entry fail ->code+:' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 获取聊天室的指定属性
     */
    function getChatRoomEntry(targetId, 
    /**
       * 属性名称, 支持英文字母、数字、+、=、-、_ 的组合方式, 最大长度 128 字符
       */
    key) {
        return __awaiter(this, void 0, void 0, function* () {
            it('key', key, (value) => {
                return J(value) && /[\w+=-]+/.test(value) && value.length <= 128;
            }, true);
            const paramsStr = 'id:' + targetId;
            logger.debug('get chatroom entry->' + paramsStr);
            const { code, data } = yield IMClient.imClient.context.getChatroomEntry(targetId, key);
            if (code === Ee.SUCCESS && data) {
                return { code, data };
            }
            logger.warn('get chatroom entry fail ->code+:' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 获取聊天室的所有属性
     */
    function getAllChatRoomEntries(targetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsStr = 'id:' + targetId;
            logger.debug('get all chatroom entries->' + paramsStr);
            const { code, data } = yield IMClient.imClient.context.getAllChatroomEntries(targetId);
            if (code === Ee.SUCCESS && data) {
                return { code, data };
            }
            logger.warn('get all chatroom entries fail ->code+:' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 获取聊天室的历史消息
     */
    function getChatroomHistoryMessages(targetId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.timestamp', options.timestamp, We.NUMBER);
            it('options.count', options.count, We.NUMBER);
            it('options.order', options.order, (value) => {
                return (value === 0 || value === 1);
            });
            const paramsStr = 'id:' + targetId;
            logger.debug('get chatroom history message->' + paramsStr);
            const { code, data } = yield IMClient.imClient.context.getChatRoomHistoryMessages(targetId, options.count, options.order, options.timestamp);
            if (code === Ee.SUCCESS && data) {
                const list = data.list.map(item => tranReceivedMessage(item));
                return {
                    code,
                    data: {
                        list,
                        hasMore: !!data.hasMore
                    }
                };
            }
            logger.warn('get chatroom history message fail ->code+:' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    function bindRTCRoomForChatroom(option) {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield IMClient.imClient.context.bindRTCRoomForChatroom(option);
            return { code, msg: ERROR_CODE[code] };
        });
    }

    class BaseMessage {
        constructor(messageType, content, isPersited = true, isCounted = true) {
            this.messageType = messageType;
            this.content = content;
            this.isPersited = isPersited;
            this.isCounted = isCounted;
        }
    }
    /**
     * 注册消息类型，并获取消息类型 class 定义
     * @param messageType 定义的消息类型
     * @param isPersited 是否存储，默认为 true
     * @param isCounted 是否计数，默认为 true
     */
    function regMessage(messageType, isPersited = true, isCounted = true) {
        const defined = function (conetnt) {
            return new BaseMessage(messageType, conetnt, isPersited, isCounted);
        };
        return defined;
    }

    var ImageMessage = regMessage('RC:ImgMsg');

    /**
     * 图片消息
     */
    var HQVoiceMessage = regMessage('RC:HQVCMsg');

    /**
     * 短视频消息
     */
    var SightMessage = regMessage('RC:SightMsg');

    var TextMessage = regMessage('RC:TxtMsg');

    /**
     * 富文本消息
     */
    var CombineMessage = regMessage('RC:CombineMsg');

    /**
     * 文件消息
     */
    var FileMessage = regMessage('RC:FileMsg');

    var GIFMessage = regMessage('RC:GIFMsg');

    var VoiceMessage = regMessage('RC:VcMsg');

    var LocationMessage = regMessage('RC:LBSMsg');

    var ReferenceMessage = regMessage('RC:ReferenceMsg');

    var RichContentMessage = regMessage('RC:ImgTextMsg');

    var uploadFile, uploadOptions;
    var uploadOrderObject = {
      qiniu: uploadQiniu,
      baidu: uploadBos,
      aliyun: uploadAliyun,
      s3: uploadS3,
      stc: uploadStc
    };
    var uploadOrderList = [];
    var Conf = {
      BOS_CHUNCK_SIZE: 5 * 1024 * 1024 * 1024 // 上传超过5GB大小的文件
    };
    var PROTOCOL_HTTP = 'http://'; var PROTOCOL_HTTPS = 'https://';
    function forEach (m, callback) {
      for (var key in m) {
        callback(key, m[key]);
      }
    }
    function getProtocol () {
      var protocol = PROTOCOL_HTTPS;
      if (location.protocol === 'http:' || location.protocol === 'file:') {
        protocol = PROTOCOL_HTTP;
      }
      return protocol
    }
    function buildUrl (url, items) {
      var query = '';
      forEach(items, function (name, value) {
        if (name !== 'token') {
          query += (query ? '&' : '') + encodeURIComponent(name) + '=' + encodeURIComponent(value);
        }
      });

      if (query) {
        url += (url.indexOf('?') > 0 ? '&' : '?') + query;
      }

      return url
    }

    function uploadBos (data, options, callback, file) {
      console.log(file, options);
      if (file.size > Conf.BOS_CHUNCK_SIZE) {
        throw new Error('the file size is over 5GB!')
      }
      var params = options || {};
      options = options || uploadOptions;
      var xhr = new XMLHttpRequest();
      var protocol = getProtocol();
      if (!params.uploadHost.bos && !params.bosUploadPath) {
        return
      }
      var url = protocol + uploadOrderList[0][1] + params.bosUploadPath;
      uploadOrderList.shift();
      var bosHeader = params.bosHeader || {};
      var resData = {
        filename: options.uniqueValue || file.uniqueName,
        name: file.name,
        downloadUrl: url,
        isBosRes: true
      };
      if (xhr.upload && options.support_options) {
        xhr.upload.onprogress = function (event) {
          callback.onProgress(event.loaded, event.total, true);
        };
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          var result = xhr.responseText || '{}';
          result = JSON.parse(result);
          result.filename = options.uniqueValue;
          if (xhr.status === 200) {
            var isBosUploadSuccess = true;
            callback.onCompleted(resData, isBosUploadSuccess);
          } else if (uploadOrderList.length) {
            uploadOrderObject[uploadOrderList[0][0]](data, options, callback, file);
          } else {
            callback.onError('upload fail');
          }
        }
      };
      xhr.open(options.method, url, true);
      xhr.setRequestHeader('authorization', bosHeader.bosToken);
      xhr.setRequestHeader('x-bce-date', bosHeader.bosDate);
      xhr.send(file);
    }

    function uploadQiniu (data, options, callback, file) {
      var issuedQnUploadHost = PROTOCOL_HTTPS + options.uploadHost.qiniu;
      var url;
      {
        url = getProtocol() + uploadOrderList[0][1] || issuedQnUploadHost;
      }

      {
        uploadOrderList.shift();
      }
      var xhr = new XMLHttpRequest();
      if (xhr.upload && options.support_options) {
        xhr.upload.onprogress = function (event) {
          callback.onProgress(event.loaded, event.total);
        };
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          var result = xhr.responseText || '{}';
          result = JSON.parse(result);
          result.filename = options.uniqueValue;
          result.uploadMethod = Ue ? Ue.QINIU : '';
          if (xhr.status === 200) {
            callback.onCompleted(result);
          } else if (uploadOrderList.length) {
            uploadOrderObject[uploadOrderList[0][0]](data, options, callback, file);
          } else {
            callback.onError('upload fail');
          }
        }
      };

      if (options.isChunk) {
        url += '/mkblk/' + data.size;
        url = buildUrl(url, options.multi_parmas);
      }
      xhr.open(options.method, url, true);

      callback.onOpen(xhr);

      if (options.stream) {
        xhr.setRequestHeader('authorization', 'UpToken ' + options.multi_parmas.token);
      }

      forEach(options.headers, function (key, value) {
        xhr.setRequestHeader(key, value);
      });
      xhr.send(data);
    }

    function uploadAliyun (data, options, callback, file) {
      if (file.size > Conf.BOS_CHUNCK_SIZE) {
        throw new Error('the file size is over 5GB!')
      }
      const cloneData = new FormData();
      cloneData.set('file', data.get('file'));
      cloneData.set('key', data.get('key'));
      cloneData.set('token', data.get('token'));
      const aliHost = uploadOrderList[0][1];
      uploadOrderList.shift();
      options = options || {};
      data = data || uploadFile;
      options = options || uploadOptions;
      var xhr = new XMLHttpRequest();
      var protocol = getProtocol();
      var url = protocol + options.ossBucketName + '.' + aliHost;
      if (xhr.upload && options.support_options) {
        xhr.upload.onprogress = function (event) {
          callback.onProgress(event.loaded, event.total);
        };
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          var result = xhr.responseText || '{}';
          result = JSON.parse(result);
          result.name = options.uniqueValue;
          result.filename = options.uploadFileName; // 上传文件名
          result.uploadMethod = Ue ? Ue.ALI : '';
          if (xhr.status === 200) {
            callback.onCompleted(result);
          } else if (uploadOrderList.length) {
            uploadOrderObject[uploadOrderList[0][0]](cloneData, options, callback, file);
          } else {
            callback.onError('upload fail');
          }
        }
      };
      xhr.open(options.method, url, true);
      console.log('ali:url', url);
      var aliHeader = options.aliHeader || {};
      data.set('OSSAccessKeyId', aliHeader.osskeyId);
      data.set('policy', aliHeader.ossPolicy);
      data.set('Signature', aliHeader.ossSign);
      data.set('success_action_status', 200);
      data.delete('key');
      data.append('key', options.uploadFileName); // 阿里上传时传的文件名必须和获取认证时传的 key 一致
      data.delete('file');
      data.append('file', file);
      xhr.send(data);
    }

    /**
     * aws3上传方法
     * 详情参考文档https://gitbook.rongcloud.net/server/docs/dashboard/discuss/aws-s3.html
     */
    function uploadS3 (data, options, callback, file) {
      var fromData = new FormData();
      var xhr = new XMLHttpRequest();
      var protocol = getProtocol();

      // 获取aws3上传地址对象
      const awsHost = uploadOrderList[0][1];
      // 获取上传地址，
      var url = protocol + options.s3BucketName + '.' + awsHost;
      console.log('uploadS3:url', url);
      uploadOrderList.shift();
      // 声明进度回调
      if (xhr.upload && options.support_options) {
        xhr.upload.onprogress = function (event) {
          callback.onProgress(event.loaded, event.total);
        };
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          var result = xhr.responseText || '{}';
          result = JSON.parse(result);
          result.name = options.uniqueValue;
          result.filename = options.uploadFileName; // 上传文件名
          result.uploadMethod = Ue.AWS;// UploadMethod.AWS;
          console.log('UploadMethod:', Ue);
          // 204 成功但是没有返回数据
          if (xhr.status === 200 || xhr.status === 204) {
            callback.onCompleted(result);
          } else if (uploadOrderList.length) {
            const cloneData = new FormData();
            cloneData.set('file', data.get('file'));
            cloneData.set('key', data.get('key'));
            cloneData.set('token', data.get('token'));
            uploadOrderObject[uploadOrderList[0][0]](cloneData, options, callback, file);
          } else {
            callback.onError('upload fail');
          }
        }
      };
      // 初始化异步请求
      xhr.open(options.method, url, true);
      // xhr.withCredentials=true;
      var s3Header = options ? options.s3Header : {};
      // 若为图片，需要设置如下表单项
      var type = file && file.type;

      // html为预览，其他是下载
      if (type === 'text/html') {
        fromData.set('Content-Disposition', 'inline;');
      } else {
        fromData.set('Content-Disposition', 'attachment;');
      }
      fromData.set('Content-Type', type);
      fromData.set('x-amz-credential', s3Header.s3Credential);
      fromData.set('x-amz-algorithm', s3Header.s3Algorithm);
      fromData.set('x-amz-date', s3Header.s3Date);
      fromData.set('policy', s3Header.s3Policy);
      fromData.set('x-amz-signature', s3Header.s3Signature);
      fromData.set('key', options.uploadFileName);
      fromData.set('file', file);
      xhr.send(fromData);
    }

    // stc上传方法
    function uploadStc (data, options, callback, file) {
      new FormData();
      var xhr = new XMLHttpRequest();
      getProtocol();

      // 获取aws3上传地址对象
      const host = uploadOrderList[0][1];
      // 获取上传地址
      var url = 'https://' + host + '/' + options.stcBucketName + '/' + options.uploadFileName;
      uploadOrderList.shift();
      // 声明进度回调
      if (xhr.upload && options.support_options) {
        xhr.upload.onprogress = function (event) {
          callback.onProgress(event.loaded, event.total);
        };
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          var result = xhr.responseText || '{}';
          result = JSON.parse(result);
          result.name = options.uniqueValue;
          result.filename = options.uploadFileName; // 上传文件名
          result.uploadMethod = Ue ? Ue.STC : '';
          // 204 成功但是没有返回数据
          if (xhr.status === 200 || xhr.status === 204) {
            callback.onCompleted(result);
          } else if (uploadOrderList.length) {
            const cloneData = new FormData();
            cloneData.set('file', data.get('file'));
            cloneData.set('key', data.get('key'));
            cloneData.set('token', data.get('token'));
            uploadOrderObject[uploadOrderList[0][0]](cloneData, options, callback, file);
          } else {
            callback.onError('upload fail');
          }
        }
      };
      // 初始化异步请求
      xhr.open('PUT', url, true);
      var stcHeader = options ? options.stcHeader : {};
      // html为预览，其他是下载
      xhr.setRequestHeader('Content-Type', file.type);
      if (file.type === 'text/html') {
        xhr.setRequestHeader('Content-Disposition', 'inline;');
      } else {
        xhr.setRequestHeader('Content-Disposition', 'attachment;');
      }

      xhr.setRequestHeader('Authorization', stcHeader.stcAuthorization);
      xhr.setRequestHeader('x-amz-content-sha256', stcHeader.stcContentSha256);
      xhr.setRequestHeader('x-amz-date', stcHeader.stcDate);
      xhr.send(file);
    }
    /**
     * stc分段上传，有三个过程
     * 1.发送开始上传请求，返回uploadid
     * 2.分段上传请求，大小范围为5M-5G，返回Etag等信息
     * 3.结束上传请求，
     * 详情参考文档，https://gitbook.rongcloud.net/server/docs/dashboard/discuss/stc-s3.html
     */
    function uploadStcMultipart (file, options, callback) {
      // var stcHeader=options?options.stcHeader:{};
      var type = (file && file.type) || 'text/plain';
      var fileType = type.indexOf('image') > -1 ? 1 : 4;
      var fileName;
      var url;
      // 获取签名验证方法
      // FileType {1: "IMAGE", 2: "AUDIO", 3: "VIDEO", 4: "FILE", 5: "SIGHT", 6: "COMBINE_HTML"}
      // v4没有声明FileType.IMAGE

      // 获取文件块数
      var chunks = Math.ceil(file.size / options.stc_chunk_size);
      var osssConfig = options && JSON.parse(options.ossConfig ? options.ossConfig : '');
      if (!Array.isArray(osssConfig)) osssConfig = [];
      var stcConfig = osssConfig.find((item) => {
        var keys = Object.keys(item);
        return keys.includes('stc')
      });

      var queryString = 'uploads';

      function onSuccess (data) {
        fileName = data.fileName;
        // stc不支持http
        url = 'https://' + stcConfig.stc + '/' + options.stcBucketName + '/' + fileName;
        console.log('uploadStcMultipart:url', url);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url + '?' + queryString, true);
        // html为预览，其他是下载
        if (type === 'text/html') {
          xhr.setRequestHeader('Content-Disposition', 'inline;');
        } else {
          xhr.setRequestHeader('Content-Disposition', 'attacshment;');
        }
        xhr.setRequestHeader('Authorization', data && data.stcAuthorization);
        xhr.setRequestHeader('x-amz-content-sha256', data && data.stcContentSha256);
        xhr.setRequestHeader('x-amz-date', data && data.stcDate);
        xhr.setRequestHeader('Content-Type', type);
        xhr.send();

        // console.log(RongIMLib);
        xhr.onreadystatechange = function (event) {
          if (xhr.readyState === 4) {
            // 返回的是一个xml格式字符串，包含uploadid
            var text = xhr.response;
            // 获取uploadId
            var reg = /(?:<UploadId>)(\S*?)(?:<\/UploadId>)/;
            var uploadId = text.match(reg);
            console.log('uploadId', uploadId);
            // 204 成功但是没有返回数据
            if (xhr.status === 200 || xhr.status === 204) {
              executeResult(Array.isArray(uploadId) && uploadId[1]);
            } else {
              callback.onError('uploadStcMultipart:did not get uploadId');
            }
          }
        };
      }

      // 签名验证失败回调
      function onError (error) {
        callback.onError('uploadStcMultipart:' + error);
      }

      IMClient.imClient.getFileToken(fileType, fileName, 'POST', queryString).then(onSuccess, onError);

      // 记录失败的文件索引
      var failedPartNumbers = [];
      // 记录成功的eTag,存在一种情况，部分成功，部分失败
      var successETagMap = new Map();

      // 分段上传完成
      // uploadId；分段上传第一次请求时获取的上传ID
      function executeResult (uploadId) {
        // 获取所有初始化的请求
        var promises = [];
        // 初始化上传文件请求，即顺序发送请求，获取promises数组
        for (var i = 1; i <= chunks; i++) {
          promises.push(getETags(uploadId, i));
        }
        result(uploadId, promises);
      }

      function result (uploadId, promises) {
        if (!promises || !Array.isArray(promises) || promises.length === 0) return
        // 所有请求成功后返回的etag会按顺序保存到result数组中
        Promise.all(promises).then(() => {
          // 签名验证需要的值
          var queryString = 'uploadId=' + uploadId;

          function onSuccess (data) {
            console.log('onSuccess', data);
            console.log('onSuccess:uploadId', uploadId);
            var thirdXhr = new XMLHttpRequest();
            thirdXhr.open('POST', url + '?' + queryString, true);
            thirdXhr.setRequestHeader('Authorization', data && data.stcAuthorization);
            thirdXhr.setRequestHeader('x-amz-content-sha256', data && data.stcContentSha256);
            thirdXhr.setRequestHeader('x-amz-date', data && data.stcDate);
            thirdXhr.setRequestHeader('Content-Type', type);

            // 设置请求体
            var xml = "<CompleteMultipartUpload xmlns='http://s3.amazonaws.com/doc/2006-03-01/'>";
            // successETagMap.map((item,index)=>xml+=`<Part><ETag>${item}</ETag><PartNumber>${index+1}</PartNumber></Part>`);
            // 从小到大排序
            var newKeys = Array.from(successETagMap.keys() || []).sort((a, b) => a - b);
            console.log('keys', newKeys);
            newKeys.map((key) => {
              xml += `<Part><ETag>${successETagMap.get(key)}</ETag><PartNumber>${key}</PartNumber></Part>`;
            });
            // successETagMap.forEach((value,key)=>{
            // xml+=`<Part><ETag>${value}</ETag><PartNumber>${key}</PartNumber></Part>`
            // })
            xml += '</CompleteMultipartUpload>';
            thirdXhr.send(xml);
            console.log('xml', xml);
            thirdXhr.onreadystatechange = function () {
              if (thirdXhr.readyState === 4) {
                // 204 成功但是没有返回数据
                if (thirdXhr.status === 200 || thirdXhr.status === 204) {
                  var result = {};
                  result.name = file.name;
                  result.filename = options.uploadFileName; // 上传文件名
                  result.uploadMethod = Ue.STC;
                  callback.onCompleted(result);
                } else {
                  callback.onError('uploadStcMultipart:upload does not end');
                }
              }
            };
          }
          // 签名验证失败回调
          function onError (error) {
            callback.onError('uploadStcMultipart:' + error);
          }
          if (successETagMap.size === chunks) {
            // 签名验证
            IMClient.imClient.context.getFileToken(fileType, fileName, 'POST', queryString).then(onSuccess, onError);
          } else {
            var promises = [];
            // 初始化上传文件请求，即顺序发送请求，获取promises数组
            for (var i of failedPartNumbers) {
              promises.push(getETags(uploadId, i));
            }
            result(uploadId, promises);
          }
        }, (error) => {
          console.error(error);
          // 上传失败，重新上传
          callback.onError('uploadStcMultipart: chunkFiles upload failed and those will reupload');
          var promises = [];
          // 初始化上传文件请求，即顺序发送请求，获取promises数组
          for (var i of failedPartNumbers) {
            promises.push(getETags(uploadId, i));
          }
          result(uploadId, promises);
        });
      }

      // 并行执行异步请求
      function getETags (uploadId, i) {
        return new Promise((resolve, reject) => {
          var queryString = 'partNumber=' + i + '&uploadId=' + uploadId;
          function onSuccess (data) {
            console.log('signature ' + i + ' onSuccess', data);
            // 上传的部分文件，slice以B为单位,待定，问下移动端
            var fileChunk = file && file.slice((i - 1) * options.stc_chunk_size, i * options.stc_chunk_size);
            console.log('fileChunk:size', fileChunk.size);
            var secondXhr = new XMLHttpRequest();
            secondXhr.open('PUT', url + '?' + queryString, true);
            secondXhr.setRequestHeader('Authorization', data && data.stcAuthorization);
            secondXhr.setRequestHeader('x-amz-content-sha256', data && data.stcContentSha256);
            secondXhr.setRequestHeader('x-amz-date', data && data.stcDate);
            secondXhr.setRequestHeader('Content-Type', type);

            secondXhr.send(fileChunk);
            secondXhr.onreadystatechange = function () {
              if (secondXhr.readyState === 4) {
                if (secondXhr.status === 200 || secondXhr.status === 204) {
                  // 获取返回头的etag
                  var eTag = secondXhr.getResponseHeader('etag');
                  console.log('etag:' + i, eTag);
                  successETagMap.set(i, eTag);
                  resolve(eTag);
                } else {
                  if (!failedPartNumbers.includes(i)) failedPartNumbers.push(i);
                  // 上传失败，返回请求对象
                  reject(i);
                }
              }
            };
          }
          // 签名验证失败回调
          function onError (e) {
            console.log('getETags:签名验证失败');
            if (!failedPartNumbers.includes(i)) failedPartNumbers.push(i);
            reject(i);
          }
          // 签名验证
          IMClient.imClient.context.getFileToken(fileType, fileName, 'PUT', queryString).then(onSuccess, onError);
        })
      }
    }

    function uploadProcess (file, opts, callback) {
      uploadFile = file;
      uploadOptions = opts;
      // 把之前的数据清空
      uploadOrderList = [];
      if (opts.ossConfig) { // 配置 oss，需按权重降级上传
        const ossConfig = JSON.parse(opts.ossConfig);
        let aliyunUrl = '';
        let s3Url;
        let stcUrl;
        const tempArr = [];
        ossConfig.forEach((item) => {
          const index = Number(item.p) - 1;
          for (const key in item) {
            if (key === 'aliyun') {
              aliyunUrl = item[key];
            }
            if (key === 's3') s3Url = item[key];
            if (key === 'stc') stcUrl = item[key];
            if (key !== 'p') {
              tempArr[index] = [key, item[key]];
            }
          }
        });
        tempArr.forEach(function (item) { // 过滤权重值不从 1 开始的情况
          if (item) {
            uploadOrderList.push(item);
          }
        });
        if (ossConfig.length !== uploadOrderList.length) { // 权重无值或相同，无法比较的情况
          uploadOrderList = [['qiniu', opts.domain], ['baidu', opts.uploadHost.bos], ['aliyun', aliyunUrl], ['s3', s3Url], ['stc', stcUrl]];
        }
      } else { // 走之前的逻辑，先七牛后百度
        uploadOrderList = [['qiniu', opts.domain], ['baidu', opts.uploadHost.bos]];
      }

      var stcConfig;
      if (opts.ossConfig) {
        var osssConfig = opts && JSON.parse(opts.ossConfig);
        if (!Array.isArray(osssConfig)) osssConfig = [];
        stcConfig = osssConfig.find((item) => {
          var keys = Object.keys(item);
          return keys.includes('stc')
        });
      }

      // 如果stc的优先级为1，且文件大于4M，则走stc多段上传
      if (stcConfig && parseInt(stcConfig.p) === 1 && file.size >= 4 * 1024 * 1024) {
        uploadStcMultipart(file, opts, callback);
      } else {
        var data = opts.data(file, opts); // 取 formData
        uploadOrderObject[uploadOrderList[0][0]](data, opts, callback, file);
      }
    }

    var dataType = {
      form: getFormData,
      json: getJsonData,
      data: getData
    };

    function genUId () {
      var date = new Date().getTime();
      var uuid = 'xxxxxx4xxxyxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (date + Math.random() * 16) % 16 | 0;
        date = Math.floor(date / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
      });
      return uuid
    }
    function mergeOption (opts) {
      var options = {
        domain: '',
        method: 'POST',
        file_data_name: 'file',
        unique_key: 'key',
        base64_size: 4 * 1024 * 1024,
        chunk_size: 4 * 1024 * 1024,
        bos_chunk_size: 4 * 1024 * 1024 * 1024, // 上传超过5GB大小的文件,
        stc_chunk_size: 10 * 1024 * 1024, // stc分片上传，文件块100M
        headers: {},
        multi_parmas: {},
        query: {},
        support_options: true,
        data: dataType.form,
        genUId: genUId
      };
      if (!opts || !opts.domain) {
        throw new Error('domain is null')
      }
      for (var key in opts) {
        options[key] = opts[key];
      }
      return options
    }

    function mEach (m, callback) {
      for (var key in m) {
        callback(key, m[key]);
      }
    }

    function getFormData (file, opts) {
      var form = new FormData();
      if (opts.unique_key) {
        var suffix = file.name.substr(file.name.lastIndexOf('.'));
        var uniqueValue = genUId() + suffix;
        form.append(opts.unique_key, uniqueValue); // 设置 key
        opts.uniqueValue = uniqueValue;
      }
      form.append(opts.file_data_name, file); // 设置 file
      mEach(opts.multi_parmas, function (key, value) { // 设置 token
        form.append(key, value);
      });
      return form
    }

    function getJsonData (file, opts) {
      var data = {};
      if (opts.unique_key) {
        var suffix = file.name.substr(file.name.lastIndexOf('.'));
        var uniqueValue = genUId() + suffix;
        data[opts.unique_key] = uniqueValue;
        opts.uniqueValue = uniqueValue;
      }
      data[opts.file_data_name] = file;
      mEach(opts.multi_parmas, function (key, value) {
        data[key] = value;
      });
      return JSON.stringify(data)
    }

    function getData (file, opts) {
      return file
    }

    var preLoaded = 0; var realLoaded;

    function Upload (options) {
      this.options = mergeOption(options);
      this.setOptions = function (opts) {
        var me = this;
        mEach(opts, function (key, value) {
          me.options[key] = value;
        });
      };
      console.log('options', options);
      this.upload = function (file, callback) {
        if (!file) {
          callback.onError('upload file is null.');
          return
        }
        var me = this;
        uploadProcess(file, this.options, {
          onProgress: function (loaded, total, isBosProcess) {
            realLoaded = loaded;
            if (isBosProcess) { // 说明启动了 bos 上传
              const realIncrease = loaded / total * (total - preLoaded);
              realLoaded = preLoaded + realIncrease;
            } else {
              preLoaded = realLoaded;
            }
            callback.onProgress(realLoaded, total);
          },
          onCompleted: function (data) {
            callback.onCompleted(data);
          },
          onError: function (errorCode) {
            callback.onError(errorCode);
          },
          onOpen: function (xhr) {
            me.xhr = xhr;
          }
        });
      };

      this.cancel = function () {
        this.xhr && this.xhr.abort();
      };
    }

    function init (options) {
      return new Upload(options)
    }

    function getResizeRatio (imageInfo, config) {
      // hasOwnProperty?

      var ratio = 1;

      var oWidth = imageInfo.width;
      var maxWidth = config.maxWidth || 0;
      if (maxWidth > 0 && oWidth > maxWidth) {
        ratio = maxWidth / oWidth;
      }

      var oHeight = imageInfo.height;
      var maxHeight = config.maxHeight || 0;
      if (maxHeight > 0 && oHeight > maxHeight) {
        var ratioHeight = maxHeight / oHeight;
        ratio = Math.min(ratio, ratioHeight);
      }

      var maxSize = config.maxSize || 0;
      var oSize = Math.ceil(imageInfo.size / 1000); // K，Math.ceil(0.3) = 1;
      if (oSize > maxSize) {
        var ratioSize = maxSize / oSize;
        ratio = Math.min(ratio, ratioSize);
      }

      return ratio
    }

    function resize (file, config, callback) {
      // file对象没有高宽
      file.type; // image format
      var canvas = document.createElement('canvas');

      var reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = function (evt) {
        var imageData = evt.target.result;
        var img = new Image();
        img.src = imageData;
        var width = img.width;
        var height = img.height;
        var imageInfo = {
          width: width,
          height: height,
          size: evt.total
        };
        var ratio = getResizeRatio(imageInfo, config);
        var newImageData = imageData;
        if (ratio < 1) {
          newImageData = compress(img, width * ratio, height * ratio);
        }
        callback(newImageData);
      };

      function compress (img, width, height) {
        canvas.width = width;
        canvas.height = height;

        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0, width, height);

        /**
         * If the height or width of the canv a s is 0, the string "data:," is returned.
         * If the requested type is not i m age/png, but the returned value starts with data:image/png, then the requested type is not supported.
         * Chrome also supports the image/webp type.
         */
        // var supportTypes = {
        //   'image/jpg': true,
        //   'image/png': true,
        //   'image/webp': supportWebP()
        // }
        // var exportType = "image/png";
        // if(supportTypes[type]){
        // exportType = type;
        // }
        // 多端一致，缩略图必须是 jpg
        var exportType = 'image/jpg';
        var newImageData = canvas.toDataURL(exportType);
        return newImageData
      }

      // function supportWebP () {
      //   try {
      //     return (canvas.toDataURL('image/webp').indexOf('data:image/webp') ===  0)
      //   } catch (err) {
      //     return false
      //   }
      // }
    }

    var UploadFile = {
      init: init,
      dataType: dataType,
      resize: resize
    };

    const calcPosition = function (width, height, opts) {
      var isheight = width < height;
      var scale = isheight ? height / width : width / height;
      var zoom; var x = 0;
      var y = 0;
      var w; var h;

      var gtScale = function () {
        if (isheight) {
          zoom = width / 100;
          w = 100;
          h = height / zoom;
          y = (h - opts.maxHeight) / 2;
        } else {
          zoom = height / 100;
          h = 100;
          w = width / zoom;
          x = (w - opts.maxWidth) / 2;
        }
        return {
          w: w,
          h: h,
          x: -x,
          y: -y
        }
      };

      var ltScale = function () {
        if (isheight) {
          zoom = height / opts.maxHeight;
          h = opts.maxHeight;
          w = width / zoom;
        } else {
          zoom = width / opts.maxWidth;
          w = opts.maxWidth;
          h = height / zoom;
        }
        return {
          w: w,
          h: h,
          x: -x,
          y: -y
        }
      };
      return scale > opts.scale ? gtScale() : ltScale()
    };

    const getBlobUrl = function (file) {
      var URL = window.URL || window.webkitURL;
      return URL ? URL.createObjectURL(file) : ''
    };

    const getThumbnail = function (file, opts, callback) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var img = new Image();
      img.onload = function () {
        var pos = calcPosition(img.width, img.height, opts);
        canvas.width = pos.w > opts.maxWidth ? opts.maxWidth : pos.w;
        canvas.height = pos.h > opts.maxHeight ? opts.maxHeight : pos.h;
        context.drawImage(img, pos.x, pos.y, pos.w, pos.h);
        try {
          var base64 = canvas.toDataURL(file.type, opts.quality);
          var reg = new RegExp('^data:image/[^;]+;base64,');
          base64 = base64.replace(reg, '');
          callback(base64);
        } catch (e) {
          throw new Error(e)
        }
      };
      img.src = typeof file === 'string' ? 'data:image/jpg;base64,' + file : getBlobUrl(file);
    };

    const _compress = function (data, callback) {
      var file = data.file;
      var opts = data.compress;
      getThumbnail(file, opts, callback);
    };

    const _init = function (config, callback) {
      if (config.getToken) {
        config.getToken(function (token, data) {
          data = data || {};
          config.multi_parmas || (config.multi_parmas = {});
          config.multi_parmas.token = token;
          config.uploadHost || (config.uploadHost = {});
          config.uploadHost.bos = data.bos;

          config.ossConfig = data.ossConfig;

          config.bosHeader || (config.bosHeader = {});
          config.bosHeader.bosDate = data.bosDate;
          config.bosHeader.bosToken = data.bosToken;
          config.bosUploadPath = data.path;

          config.aliHeader = {};
          config.aliHeader.osskeyId = data.osskeyId;
          config.aliHeader.ossPolicy = data.ossPolicy;
          config.aliHeader.ossSign = data.ossSign;
          config.ossBucketName = data.ossBucketName;
          config.uploadFileName = data.fileName;

          config.s3Header = {};
          config.s3Header.s3Credential = data.s3Credential;
          config.s3Header.s3Algorithm = data.s3Algorithm;
          config.s3Header.s3Date = data.s3Date;
          config.s3Header.s3Policy = data.s3Policy;
          config.s3Header.s3Signature = data.s3Signature;
          config.s3BucketName = data.s3BucketName;

          // console.log("init:",data);
          config.stcHeader = {};
          config.stcHeader.stcAuthorization = data.stcAuthorization;
          config.stcHeader.stcContentSha256 = data.stcContentSha256;
          config.stcHeader.stcDate = data.stcDate;
          config.stcBucketName = data.stcBucketName;

          config.headers || (config.headers = {});
          if (config.base64) {
            config.headers['Content-type'] = 'application/octet-stream';
            config.headers.Authorization = 'UpToken ' + token;
          }
          console.log('data', data);
          var instance = UploadFile.init(config);
          callback(instance);
        });
      } else {
        config.headers || (config.headers = {});
        if (config.base64) {
          config.headers['Content-type'] = 'application/octet-stream';
        }
        var instance = UploadFile.init(config);
        callback(instance);
      }
    };

    var _upload = function (data, instance, callback) {
      instance.upload(data.file, {
        onError: function (errorCode) {
          callback.onError(errorCode);
        },
        onProgress: function (loaded, total) {
          callback.onProgress(loaded, total);
        },
        onCompleted: function (result) {
          result.filename || (result.filename = result.hash);
          var compress = data.compressThumbnail || _compress;
          if (data.compress) {
            compress(data, function (thumbnail) {
              result.thumbnail = thumbnail;
              callback.onCompleted(result);
            });
          } else {
            callback.onCompleted(result);
          }
        }
      });
    };

    var File = function (instance) {
      var me = this;
      this.instance = instance;
      this.upload = function (file, callback) {
        var data = {
          file: file
        };
        _upload(data, me.instance, callback);
      };
      this.cancel = function () {
        me.instance.cancel();
      };
    };

    var initFile = function (config, callback) {
      _init(config, function (instance) {
        var uploadFile = new File(instance);
        callback(uploadFile);
      });
    };

    var Img = function (instance, cfg) {
      var me = this;
      this.cfg = cfg;
      this.instance = instance;
      this.upload = function (file, callback) {
        var data = {
          file: file,
          compress: me.cfg
        };
        _upload(data, me.instance, callback);
      };

      this.cancel = function () {
        me.instance.cancel();
      };
    };

    var initImage = function (config, callback) {
      _init(config, function (instance) {
        var compress = {
          maxHeight: config.maxHeight || 160,
          maxWidth: config.maxWidth || 160,
          quality: config.quality || 0.5,
          scale: config.scale || 2.4
        };
        var uploadImage = new Img(instance, compress);
        callback(uploadImage);
      });
    };

    var initImgBase64 = function (config, callback) {
      config.base64 = true;
      initImage.call(this, config, callback);
    };

    var uploadClient = {
      initFile: initFile,
      initImage: initImage,
      initImgBase64: initImgBase64,
      dataType: UploadFile.dataType
    };

    let audioCtx;
    let qiniuDomian;
    function upload(file, type = W.FILE, callbacks, thumbnailConfig) {
        let fileType;
        if (type === W.IMAGE) {
            fileType = W.IMAGE; // 图片
        }
        else {
            fileType = W.FILE; // 文件
        }
        if (!qiniuDomian) {
            qiniuDomian = 'upload.qiniup.com';
            const naviInfo = IMClient.imClient.context.getInfoFromCache();
            if (naviInfo && naviInfo.ossConfig) {
                try {
                    const ossConfig = JSON.parse(naviInfo.ossConfig);
                    const qiniuConfig = ossConfig.find((one) => one.qiniu !== undefined);
                    if (qiniuConfig) {
                        qiniuDomian = qiniuConfig.qiniu;
                    }
                }
                catch (e) { }
            }
        }
        const uploadConfig = Object.assign({ domain: qiniuDomian, 
            // data: uploadClient.dataType.data,
            getToken: function (callback) {
                IMClient.imClient.context.getFileToken(fileType).then(data => {
                    callback(data.token, data);
                }).catch(function (error) {
                    callbacks.onFail(error);
                });
            } }, thumbnailConfig);
        let action;
        if (fileType === W.IMAGE) {
            action = uploadClient.initImage;
        }
        else {
            action = uploadClient.initFile;
        }
        action(uploadConfig, (uploadFile) => {
            uploadFile.upload(file, {
                onProgress: (loaded, total) => {
                    var _a;
                    var percent = Math.floor(loaded / total * 100);
                    (_a = callbacks.onProgress) === null || _a === void 0 ? void 0 : _a.call(callbacks, percent);
                },
                onCompleted: (data) => __awaiter(this, void 0, void 0, function* () {
                    getFileUrl(fileType, data.filename, data.name, data, data.uploadMethod).then((response) => __awaiter(this, void 0, void 0, function* () {
                        if (response.code !== 0) {
                            callbacks.onFail(response);
                            return;
                        }
                        const result = response.data;
                        result.type = file.type;
                        result.name = data.name || data.filename;
                        if (type === W.AUDIO) {
                            if (typeof file.arrayBuffer === 'function') {
                                file.arrayBuffer().then(getAudioInfo).then(audioInfo => {
                                    Object.assign(result, audioInfo);
                                    callbacks.onSuccess(result);
                                }, () => {
                                    callbacks.onSuccess(result);
                                });
                            }
                            else {
                                const reader = new FileReader();
                                reader.onload = function () {
                                    if (reader.result) {
                                        getAudioInfo(reader.result).then(audioInfo => {
                                            Object.assign(result, audioInfo);
                                            callbacks.onSuccess(result);
                                        }, () => {
                                            callbacks.onSuccess(result);
                                        });
                                    }
                                    else {
                                        callbacks.onSuccess(result);
                                    }
                                };
                                reader.onerror = function () {
                                    result.duration = 0;
                                    callbacks.onSuccess(result);
                                };
                                reader.readAsArrayBuffer(file);
                            }
                            return;
                        }
                        else if (fileType === W.IMAGE) {
                            result.thumbnail = data.thumbnail;
                        }
                        callbacks.onSuccess(result);
                    })).catch(error => {
                        callbacks.onFail(error);
                    });
                }),
                onError: (error) => {
                    callbacks.onFail(error);
                }
            });
        });
    }
    function getAudioInfo(buffer) {
        audioCtx = audioCtx || new AudioContext();
        return new Promise((resolve, reject) => {
            audioCtx.decodeAudioData(buffer, function (audioBuffer) {
                resolve({
                    duration: audioBuffer.duration,
                    length: audioBuffer.length
                });
            }, reject);
        });
    }
    /**
     * 获取文件 token
     * @description 上传文件时，获取文件 token
     * @param fileType 上传类型, 通过 RongIMLib.FILE_TYPE 获取
     * @param fileName 上传文件名，Server 通过文件名生成百度上传认证, 若不传 engine 自动生成
     * @param httpMethod STC 分段上传时的必填参数，有效值为 PUT | POST
     * @param queryString STC 分段上传时的查询字符串
     * `httpMethod` 与 `queryString` 为 STC S3 分段上传时的专属参数，STC 分段上传包含三个过程：
     * 1. 开始分段前调用，此时 `httpMethod` 值应为 `POST`， `queryString` 值为 `uploads`，filename为空
     * 2. 上传请求前调用，此时 `httpMethod` 值应为 `PUT`，`queryString` 值为 `partNumber={partamNumer}&uploadId={uploadId}`，filename为第一个步骤生成的filename
     * 3. 上传结束前调用，此时 `httpMethod` 值应为 `POST`，`queryString` 值为 `uploadId={uploadId}`，filename为第一个步骤生成的filename
     */
    function getFileToken(fileType, fileName, httpMethod, queryString) {
        return new Promise(resolve => {
            IMClient.imClient.context.getFileToken(fileType, fileName, httpMethod, queryString).then(data => {
                resolve({ code: Ee.SUCCESS, data });
            }).catch(code => {
                resolve({ code, msg: ERROR_CODE[code] });
            });
        });
    }
    /**
     * 获取文件的下载地址
     * @param fileType 文件类型
     * @param fileName 文件名
     * @param saveName 下载后的存储文件名
     * @param uploadRes 上传成功返回的数据，百度 bos 上传地址即为下载地址，IM Server 不会返回百度 bos 下载地址，通过用户层传入再返回
     * @param serverType 使用的存储服务标识
     * @returns
     */
    function getFileUrl(fileType, filename, saveName, uploadRes, serverType) {
        it('fileType', fileType, ce, true);
        it('filename', filename, We.STRING);
        it('saveName', saveName, We.STRING);
        it('serverType', serverType, We.NUMBER);
        return new Promise(resolve => {
            IMClient.imClient.context.getFileUrl(fileType, filename, saveName, uploadRes, serverType).then(data => {
                resolve({ code: Ee.SUCCESS, data });
            }).catch(code => {
                resolve({ code });
            });
        });
    }

    /**
    * 发送消息
    * @param options
    */
    function sendMessage(conversation, message, options) {
        return __awaiter(this, void 0, void 0, function* () {
            options = options || {};
            if (message instanceof BaseMessage === false) {
                logger.warn('send message fail -> message parameter is not an instance of BaseMessage');
                return ERROR_INFO.ILLGAL_PARAMS;
            }
            it('conversation.channelId', conversation === null || conversation === void 0 ? void 0 : conversation.channelId, We.CHANNEL_ID);
            const { conversationType, targetId, channelId } = conversation;
            const paramsStr = 'conversationType:' + conversationType + ',targetId:' + targetId;
            logger.debug('send message  ->' + paramsStr);
            const messageOptions = Object.assign(options, message);
            messageOptions.channelId = channelId || '';
            const { code, data } = yield IMClient.imClient.context.sendMessage(conversationType, targetId, messageOptions);
            if (code === Ee.SUCCESS) {
                const receivedMessage = tranReceivedMessage(data);
                return { code, data: receivedMessage };
            }
            logger.warn('send message fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
            const msg = {
                isMentioned: !!options.isMentioned,
                content: message.content,
                messageType: message.messageType,
                isPersited: message.isPersited || false,
                isCounted: message.isCounted || false,
                disableNotification: !!(options === null || options === void 0 ? void 0 : options.disableNotification),
                canIncludeExpansion: !!(options === null || options === void 0 ? void 0 : options.canIncludeExpansion),
                expansion: (options === null || options === void 0 ? void 0 : options.expansion) || null,
                conversationType: conversation.conversationType,
                targetId: conversation.targetId,
                channelId: conversation.channelId,
                senderUserId: IMClient.imClient.context.getCurrentUserId(),
                messageUId: '',
                messageDirection: me.SEND,
                sentTime: (data === null || data === void 0 ? void 0 : data.sentTime) || 0,
                receivedTime: 0,
                isStatusMessage: options.isStatusMessage || false,
                receivedStatus: i.UNREAD,
                isOffLineMessage: false
            };
            if (conversationType !== j.ULTRA_GROUP)
                msg.isOffLineMessage = false;
            return {
                code,
                msg: ERROR_CODE[code],
                data: tranReceivedMessage(msg)
            };
        });
    }
    function sendTextMessage(conversation, messageBody, options) {
        const message = new TextMessage(messageBody);
        return sendMessage(conversation, message, options);
    }
    function createSendFunction(fileType, msgCreator) {
        return function (
        /**
         * 待发送的目标
         */
        conversation, 
        /**
         * 待发送内容，其中 file 为待上传文件引用
         */
        msgBody, 
        /**
         * 上传过程中的回调钩子
         */
        hooks, 
        /**
         * 发送消息时的可选项
         */
        sendOptions) {
            return new Promise((resolve) => {
                var _a;
                upload(msgBody.file, fileType, {
                    onProgress: hooks === null || hooks === void 0 ? void 0 : hooks.onProgress,
                    onSuccess: (resp) => {
                        var _a;
                        const msg = ((_a = hooks === null || hooks === void 0 ? void 0 : hooks.onComplete) === null || _a === void 0 ? void 0 : _a.call(hooks, { url: resp.downloadUrl })) || msgCreator(resp, msgBody);
                        sendMessage(conversation, msg, sendOptions).then(resolve);
                    },
                    onFail: (e) => {
                        resolve({ code: Ee.UPLOAD_FILE_FAILED, msg: e || Ee[Ee.UPLOAD_FILE_FAILED] });
                    }
                }, ((_a = sendOptions) === null || _a === void 0 ? void 0 : _a.thumbnailConfig) || {});
            });
        };
    }
    /**
     * 发送文件消息
     */
    const sendFileMessage = createSendFunction(W.FILE, (resp, msgBody) => new FileMessage({
        name: resp.name,
        size: msgBody.file.size,
        type: msgBody.file.type,
        fileUrl: resp.downloadUrl,
        user: msgBody.user,
        extra: msgBody.extra
    }));
    /**
     * 发送图片消息
     */
    const sendImageMessage = createSendFunction(W.IMAGE, (resp, msgBody) => new ImageMessage({
        content: resp.thumbnail,
        imageUri: resp.downloadUrl,
        user: msgBody.user,
        extra: msgBody.extra
    }));
    /**
     * 发送高清语音消息，待发送的文件必须为 AAC 音频文件
     */
    const sendHQVoiceMessage = createSendFunction(W.AUDIO, (resp, msgBody) => new HQVoiceMessage({
        remoteUrl: resp.downloadUrl,
        duration: resp.duration,
        type: resp.type,
        user: msgBody.user,
        extra: msgBody.extra
    }));
    /**
     * 发送小视频消息
     * @description 发送的小视频消息必须是 MP4 文件，且音频编码为 AAC，视频编码 H264，否则可能造成 iOS 或 Android 接收后不可播放问题
     */
    const sendSightMessage = createSendFunction(W.SIGHT, (resp, msgBody) => new SightMessage({
        sightUrl: resp.downloadUrl,
        content: msgBody.thumbnail,
        duration: msgBody.duration,
        size: msgBody.file.size || resp.size,
        name: msgBody.name || resp.name,
        user: msgBody.user,
        extra: msgBody.extra
    }));
    /**
     * 发送合并转发消息
     */
    createSendFunction(W.COMBINE_HTML, (resp, msgBody) => new CombineMessage({
        remoteUrl: resp.downloadUrl,
        nameList: msgBody.nameList,
        summaryList: msgBody.summaryList,
        conversationType: msgBody.conversationType,
        user: msgBody.user,
        extra: msgBody.extra
    }));
    /**
     * 获取历史消息
     */
    function getHistoryMessages(conversation, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.timestamp', options === null || options === void 0 ? void 0 : options.timestamp, We.NUMBER);
            it('options.count', options === null || options === void 0 ? void 0 : options.count, We.NUMBER);
            it('options.order', options === null || options === void 0 ? void 0 : options.order, (value) => {
                return (value === 0 || value === 1);
            });
            it('conversation.channelId', conversation === null || conversation === void 0 ? void 0 : conversation.channelId, We.CHANNEL_ID);
            const paramsStr = 'conversationType:' + conversation.conversationType + ',targetId:' + conversation.targetId;
            logger.debug('get history message ->' + paramsStr);
            const { code, data } = yield IMClient.imClient.context.getHistoryMessage(conversation.conversationType, conversation.targetId, options === null || options === void 0 ? void 0 : options.timestamp, options === null || options === void 0 ? void 0 : options.count, options === null || options === void 0 ? void 0 : options.order, conversation === null || conversation === void 0 ? void 0 : conversation.channelId);
            if (code === Ee.SUCCESS && data) {
                const list = data.list.map(item => tranReceivedMessage(item));
                return {
                    code,
                    data: {
                        list,
                        hasMore: data.hasMore
                    }
                };
            }
            logger.warn('get history message fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 获取远程历史消息
     */
    function getRemoteHistoryMessages(conversation, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.timestamp', options === null || options === void 0 ? void 0 : options.timestamp, We.NUMBER);
            it('options.count', options === null || options === void 0 ? void 0 : options.count, We.NUMBER);
            it('options.order', options === null || options === void 0 ? void 0 : options.order, (value) => {
                return (value === 0 || value === 1);
            });
            it('conversation.channelId', conversation === null || conversation === void 0 ? void 0 : conversation.channelId, We.CHANNEL_ID);
            const paramsStr = 'conversationType:' + conversation.conversationType + ',targetId:' + conversation.targetId;
            logger.debug('get history message ->' + paramsStr);
            const { code, data } = yield IMClient.imClient.context.getRemoteHistoryMessages(conversation.conversationType, conversation.targetId, (options === null || options === void 0 ? void 0 : options.timestamp) || 0, (options === null || options === void 0 ? void 0 : options.count) || 20, (options === null || options === void 0 ? void 0 : options.order) || 0, conversation.channelId || '');
            if (code === Ee.SUCCESS && data) {
                const list = data.list.map(item => tranReceivedMessage(item));
                return {
                    code,
                    data: {
                        list,
                        hasMore: data.hasMore
                    }
                };
            }
            logger.warn('get history message fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 发送单聊已读回执
     */
    function sendReadReceiptMessage(targetId, messageUId, timestamp, channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            const conversation = {
                targetId,
                conversationType: j.PRIVATE,
                channelId
            };
            const message = new BaseMessage('RC:ReadNtf', {
                messageUId: messageUId,
                lastMessageSendTime: timestamp,
                type: 1
            });
            const { code, msg } = yield sendMessage(conversation, message);
            if (code === 0) {
                return { code };
            }
            return { code, msg };
        });
    }
    /**
     * 发送群已读回执请求
     * @param messageUIds 消息UID列表
     */
    function sendReadReceiptRequest(targetId, messageUId, channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            it('messageUId', messageUId, We.STRING, true);
            it('channelId', channelId, We.CHANNEL_ID);
            const paramsStr = 'messageUId:' + messageUId + ',targetId:' + targetId;
            logger.debug('send read receipt message ->' + paramsStr);
            const message = new BaseMessage('RC:RRReqMsg', {
                messageUId
            });
            var conversation = {
                targetId,
                conversationType: j.GROUP,
                channelId
            };
            const { code, msg } = yield sendMessage(conversation, message);
            if (code === 0) {
                return { code };
            }
            return { code, msg };
        });
    }
    /**
     * @deprecated 已废弃，请使用 sendReadReceiptResponseV2
     */
    function sendReadReceiptResponse(targetId, messageUIds, channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('This method is deprecated, please use method sendReadReceiptResponseV2.');
        });
    }
    /**
     * 发送群阅读回执响应V2
     *  @param targetId 群组Id
     *  @param messageList 要回执的消息列表，结构为： {senderUserId: [messageUId1, messageUId2]}
     *  @param channelId
     */
    function sendReadReceiptResponseV2(targetId, messageList, channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            it('targetId', targetId, We.STRING, true);
            it('messageList', messageList, We.OBJECT, true);
            it('channelId', channelId, We.CHANNEL_ID);
            // 检查参数
            Object.keys(messageList).forEach(key => {
                it(key, messageList[key], We.ARRAY);
            });
            var conversation = {
                targetId,
                conversationType: j.GROUP,
                channelId
            };
            let result;
            const naviInfo = IMClient.imClient.context.getInfoFromCache();
            const grpRRVer = (naviInfo === null || naviInfo === void 0 ? void 0 : naviInfo.grpRRVer) || 0;
            if (grpRRVer === 0) {
                const message = new BaseMessage('RC:RRRspMsg', {
                    receiptMessageDic: messageList
                });
                result = yield sendMessage(conversation, message);
            }
            else if (grpRRVer === 1) {
                const messageUIds = [];
                Object.keys(messageList).forEach(key => {
                    // 排重
                    messageList[key].forEach(messageUId => {
                        if (messageUIds.indexOf(messageUId) === -1) {
                            messageUIds.push(messageUId);
                        }
                    });
                });
                // 如果uid集合为空，则判定为参数有问题
                if (!messageUIds.length) {
                    logger.warn('Error in parameter messageList.');
                    return { code: Ee.PARAMETER_ERROR };
                }
                result = yield IMClient.imClient.context.sendReadReceiptMessage(targetId, messageUIds, channelId);
            }
            const code = result.code;
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('send read receipt message fail ->' + code + ':' + ERROR_CODE[code]);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 多端同步阅读状态
     * @param conversation
     * @param timestamp
     */
    function sendSyncReadStatusMessage(conversation, lastMessageSendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            it('conversation.type', conversation.conversationType, We.NUMBER, true);
            it('conversation.targetId', conversation.targetId, We.STRING, true);
            it('lastMessageSendTime', lastMessageSendTime, We.NUMBER, true);
            it('conversation.channelId', conversation === null || conversation === void 0 ? void 0 : conversation.channelId, We.CHANNEL_ID);
            const message = new BaseMessage('RC:SRSMsg', {
                lastMessageSendTime
            });
            const { code, msg } = yield sendMessage(conversation, message);
            if (code === 0) {
                return { code };
            }
            return { code, msg };
        });
    }
    /**
     * 撤回消息
     * @param options
     */
    function recallMessage(conversation, options) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.messageUId', options.messageUId, We.STRING, true);
            it('options.sentTime', options.sentTime, We.NUMBER, true);
            it('options.disableNotification', options === null || options === void 0 ? void 0 : options.disableNotification, We.BOOLEAN);
            it('options.pushConfig', options === null || options === void 0 ? void 0 : options.pushConfig, We.OBJECT);
            it('conversation.channelId', conversation === null || conversation === void 0 ? void 0 : conversation.channelId, We.CHANNEL_ID);
            const recallOptions = {
                user: options.user,
                channelId: conversation.channelId || '',
                disableNotification: options === null || options === void 0 ? void 0 : options.disableNotification,
                pushConfig: options === null || options === void 0 ? void 0 : options.pushConfig
            };
            const paramsStr = 'conversationType:' + conversation.conversationType + ',targetId:' + conversation.targetId + ',messageUId:' + options.messageUId;
            logger.debug('recall message ->' + paramsStr);
            const { code, data } = yield IMClient.imClient.context.recallMessage(conversation.conversationType, conversation.targetId, options.messageUId, options.sentTime, recallOptions);
            if (code === Ee.SUCCESS && data) {
                return { code, data: tranReceivedMessage(data) };
            }
            else if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('recall message fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 按消息 id 删除消息
     */
    function deleteMessages(conversation, messages) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options', messages, (value) => {
                return X(value) && value.length;
            }, true);
            messages.forEach((item) => {
                it('options.messageUId', item.messageUId, We.STRING, true);
                it('options.sentTime', item.sentTime, We.NUMBER, true);
                it('options.messageDirection', item.messageDirection, (value) => {
                    return (value === 1 || value === 2);
                }, true);
            });
            it('conversation.channelId', conversation === null || conversation === void 0 ? void 0 : conversation.channelId, We.CHANNEL_ID);
            const paramsStr = 'conversationType:' + conversation.conversationType + ',targetId:' + conversation.targetId;
            logger.debug('delete messages ->' + paramsStr);
            const code = yield IMClient.imClient.context.deleteRemoteMessage(conversation.conversationType, conversation.targetId, messages, conversation.channelId);
            if (code !== Ee.SUCCESS) {
                logger.warn('delete message fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code: Ee.SUCCESS };
        });
    }
    /**
     * 按时间戳删除消息
     * @param conversation 会话
     * @param timestamp 清除时间点, 该时间之前的消息将被清除
     */
    function clearHistoryMessages(conversation, timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            it('options.timestamp', timestamp, We.NUMBER, true);
            it('conversation.channelId', conversation === null || conversation === void 0 ? void 0 : conversation.channelId, We.CHANNEL_ID);
            const paramsStr = 'conversationType:' + conversation.conversationType + ',targetId:' + conversation.targetId;
            logger.debug('clear message ->' + paramsStr);
            const code = yield IMClient.imClient.context.deleteRemoteMessageByTimestamp(conversation.conversationType, conversation.targetId, timestamp, conversation.channelId);
            if (code !== Ee.SUCCESS) {
                logger.warn('clear message ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code: Ee.SUCCESS };
        });
    }
    /**
     * 更新（添加、替换）消息扩展属性
     * @param expansion 要更新的消息扩展信息键值对
     * @param message 要更新的原始消息体
    */
    function updateMessageExpansion(expansion, message) {
        return __awaiter(this, void 0, void 0, function* () {
            it('expansion', expansion, We.OBJECT, true);
            it('message', message, We.OBJECT, true);
            const { conversationType, targetId, messageUId, canIncludeExpansion, expansion: originExpansion, channelId } = message;
            const paramsStr = 'conversationType:' + conversationType + ',targetId:' + targetId + ',messageUId:' + messageUId;
            logger.debug('update message expansion ->' + paramsStr);
            const { code } = yield IMClient.imClient.context.sendExpansionMessage({
                conversationType,
                targetId,
                messageUId,
                expansion,
                canIncludeExpansion,
                originExpansion,
                channelId
            });
            if (code !== Ee.SUCCESS) {
                logger.warn('update message expansion fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 删除扩展存储
     * @params keys 需删除消息扩展的 keys
     * @params message 原始消息体
    */
    function removeMessageExpansionForKey(keys, message) {
        return __awaiter(this, void 0, void 0, function* () {
            it('keys', keys, We.ARRAY, true);
            it('message', message, We.OBJECT, true);
            const { conversationType, targetId, messageUId, canIncludeExpansion, channelId } = message;
            const paramsStr = 'conversationType:' + conversationType + ',targetId:' + targetId + ',messageUId:' + messageUId;
            logger.debug('remove message expansion ->' + paramsStr);
            const { code } = yield IMClient.imClient.context.sendExpansionMessage({
                conversationType,
                targetId,
                messageUId,
                canIncludeExpansion,
                keys,
                channelId
            });
            if (code !== Ee.SUCCESS) {
                logger.warn('remove message expansion fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
                return { code, msg: ERROR_CODE[code] };
            }
            return { code };
        });
    }
    /**
     * 发送typing消息
     * @param typingContentType 输入状态消息类型
     * @returns
     */
    function sendTypingStatusMessage(conversation, typingContentType) {
        return __awaiter(this, void 0, void 0, function* () {
            it('typingContentType', typingContentType, We.STRING, true);
            const paramsStr = 'conversationType:' + conversation.conversationType + ',targetId:' + conversation.targetId;
            logger.debug('send typing status message ->' + paramsStr);
            const sendOptions = {
                messageType: 'RC:TypSts',
                content: {
                    typingContentType
                },
                isStatusMessage: true,
                channelId: conversation.channelId
            };
            const { code, data } = yield IMClient.imClient.context.sendMessage(conversation.conversationType, conversation.targetId, sendOptions);
            if (code === Ee.SUCCESS) {
                return { code, data: tranReceivedMessage(data) };
            }
            logger.warn('send typing status message fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 获取群已读列表
     * @param messageUId 消息UID
     * @returns
     */
    function getMessageReader(targetId, messageUId, channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            it('messageUId', messageUId, We.STRING, true);
            const paramsStr = 'messageUId:' + messageUId + ',targetId:' + targetId;
            logger.debug('get message reader ->' + paramsStr);
            const { code, data } = yield IMClient.imClient.context.getMessageReader(targetId, messageUId, channelId);
            if (code === Ee.SUCCESS) {
                return { code, data: data };
            }
            logger.warn('get message reader fail ->' + code + ':' + ERROR_CODE[code] + ',' + paramsStr);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
       * 注册自定义消息
       * @param messageType 消息类型
       * @param isPersited  是否存储
       * @param isCounted   是否计数
       * @param prototypes  消息属性名称
      */
    function registerMessageType(messageType, isPersited, isCounted, prototypes, isStatusMessage) {
        it('messageType', messageType, We.STRING, true);
        it('isPersited', isPersited, We.BOOLEAN, true);
        it('isCounted', isCounted, We.BOOLEAN, true);
        it('isStatusMessage', isStatusMessage, We.BOOLEAN, false);
        IMClient.imClient.context.registerMessageType(messageType, isPersited, isCounted, prototypes, isStatusMessage);
        return regMessage(messageType, isPersited, isCounted);
    }
    /**
     * 获取第一条未读消息
     * @param conversation
     */
    function getFirstUnreadMessage(conversation) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mt()) {
                return { code: Ee.NOT_SUPPORT, msg: ERROR_CODE[Ee.NOT_SUPPORT] };
            }
            it('conversation.conversationType', conversation.conversationType, We.NUMBER, true);
            it('conversation.targetId', conversation.targetId, We.STRING, true);
            it('conversation.channelId', conversation === null || conversation === void 0 ? void 0 : conversation.channelId, We.CHANNEL_ID);
            const { code, data } = yield IMClient.imClient.context.getFirstUnreadMessage(conversation.conversationType, conversation.targetId, conversation.channelId);
            if (code === Ee.SUCCESS) {
                return { code, data };
            }
            logger.warn('insertMessage ->code:' + code + ',targetId:' + conversation.targetId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
       * 向本地插入一条消息，不发送到服务器
       * @param conversationType 会话类型
       * @param targetId 目标 ID
       * @param content 消息体
       * @param callback
      */
    function insertMessage(conversation, content, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mt()) {
                return { code: Ee.NOT_SUPPORT, msg: ERROR_CODE[Ee.NOT_SUPPORT] };
            }
            const { senderUserId, messageType, content: msgContent, messageDirection, messageUId, canIncludeExpansion, expansion, disableNotification, sentTime, sentStatus } = content;
            logger.info('insertMessage ->targetId:' + conversation.targetId + ',conversationType:' + conversation.conversationType);
            const { isUnread, searchContent } = options;
            const insertOptions = {
                senderUserId,
                messageType,
                content: msgContent,
                messageDirection,
                sentTime,
                sentStatus,
                searchContent,
                isUnread,
                messageUId,
                disableNotification,
                canIncludeExpansion,
                expansionMsg: JSON.stringify(expansion),
                channelId: conversation.channelId || ''
            };
            const { code, data } = yield IMClient.imClient.context.insertMessage(conversation.conversationType, conversation.targetId, insertOptions);
            if (code === Ee.SUCCESS) {
                return { code, data: tranReceivedMessage(data) };
            }
            logger.warn('insertMessage ->code:' + code + ',targetId:' + conversation.targetId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 获取消息
     * @param messageId 本地消息 ID 或 messageUId
    */
    function getMessage(messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mt()) {
                return { code: Ee.NOT_SUPPORT, msg: ERROR_CODE[Ee.NOT_SUPPORT] };
            }
            const { code, data } = yield IMClient.imClient.context.getMessage(messageId);
            if (code === Ee.SUCCESS) {
                return ({ code, data: tranReceivedMessage(data) });
            }
            logger.warn('getMessage ->code:' + code + ',messageId:' + messageId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 获取会话下所有未读的 @ 消息
     * @param conversationType 会话类型
     * @param targetId 目标 ID
     */
    function getUnreadMentionedMessages(conversation) {
        if (!mt()) {
            return { code: Ee.NOT_SUPPORT, msg: ERROR_CODE[Ee.NOT_SUPPORT] };
        }
        it('conversationType', conversation.conversationType, We.NUMBER, true);
        it('targetId', conversation.targetId, We.STRING, true);
        const messages = IMClient.imClient.context.getUnreadMentionedMessages(conversation.conversationType, conversation.targetId);
        const data = [];
        if (messages && messages.length) {
            messages.forEach(one => data.push(tranReceivedMessage(one)));
        }
        return { code: Ee.SUCCESS, data };
    }
    /**
     * 按关键字搜索会话内的消息
     * @param conversation 会话
     * @param keyword 搜索内容
     * @param timestamp 搜索时间, 搜索该时间之前的消息
     * @param count 获取的数量
    */
    function searchMessages(conversation, keyword, timestamp, count) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mt()) {
                return { code: Ee.NOT_SUPPORT, msg: ERROR_CODE[Ee.NOT_SUPPORT] };
            }
            it('conversationType', conversation.conversationType, We.NUMBER, true);
            it('targetId', conversation.targetId, We.STRING, true);
            it('keyword', keyword, We.STRING, true);
            it('timestamp', timestamp, We.NUMBER);
            it('count', count, We.NUMBER);
            const total = 1;
            const { code, data } = yield IMClient.imClient.context.searchMessageByContent(conversation.conversationType, conversation.targetId, keyword, timestamp, count, total, conversation.channelId);
            if (code === Ee.SUCCESS) {
                const messages = [];
                if ((data === null || data === void 0 ? void 0 : data.messages) && data.messages.length) {
                    data.messages.forEach(one => messages.push(tranReceivedMessage(one)));
                }
                return { code, data: { messages, count: data === null || data === void 0 ? void 0 : data.count } };
            }
            logger.warn('searchMessages ->code:' + code + ',targetId:' + conversation.targetId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 从本地消息数据库中删除某一会话指定时间之前的消息数据
     * @param conversation 会话
     * @param timestamp 指定删除该时间戳之前的消息
     * @param cleanSpace 指定删除该时间戳之前的消息。是否清理数据条目所使用的磁盘空间。清理磁盘空间会阻塞进程且耗时较长，不推荐使用。
     * 数据在被抹除的情况下，未清理的磁盘空间会在后续存储操作中复用，且对数据查询无影响
    */
    function deleteLocalMessagesByTimestamp(conversation, timestamp, cleanSpace) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mt()) {
                return { code: Ee.NOT_SUPPORT, msg: ERROR_CODE[Ee.NOT_SUPPORT] };
            }
            it('conversationType', conversation.conversationType, We.NUMBER, true);
            it('targetId', conversation.targetId, We.STRING, true);
            it('timestamp', timestamp, We.NUMBER, true);
            it('cleanSpace', cleanSpace, We.BOOLEAN);
            const code = yield IMClient.imClient.context.deleteMessagesByTimestamp(conversation.conversationType, conversation.targetId, timestamp, cleanSpace, conversation.channelId);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('deleteLocalMessagesByTimestamp ->code:' + code + ',targetId:' + conversation.targetId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 清空会话下历史消息
     * @param conversationType 会话类型
     * @param targetId 目标 ID
     * @param callback
    */
    function clearMessages(conversation) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mt()) {
                return { code: Ee.NOT_SUPPORT, msg: ERROR_CODE[Ee.NOT_SUPPORT] };
            }
            logger.info('clearMessages ->targetId:' + conversation.targetId + ',conversationType:' + conversation.conversationType);
            const code = yield IMClient.imClient.context.clearMessages(conversation.conversationType, conversation.targetId, conversation.channelId);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('clearMessages ->code:' + code + ',targetId:' + conversation.targetId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 按内容搜索会话
     * @param keyword 关键字
     * @param conversationTypes 会话类型数组
    */
    function searchConversationByContent(keyword, conversationTypes, customMessageType, channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mt()) {
                return { code: Ee.NOT_SUPPORT, msg: ERROR_CODE[Ee.NOT_SUPPORT] };
            }
            logger.info('searchConversationByContent ->keyword:' + keyword);
            const { code, data } = yield IMClient.imClient.context.searchConversationByContent(keyword, customMessageType, channelId, conversationTypes);
            if (code === Ee.SUCCESS) {
                return { code, data };
            }
            else {
                logger.warn('searchConversationByContent ->code:' + code + ',keyword:' + keyword);
                return { code, msg: ERROR_CODE[code] };
            }
        });
    }
    /**
     * 清除时间戳前的未读数
     * @param conversationType 会话类型
     * @param targetId 目标 ID
     * @param timestamp 目标 ID
     * @param callback
    */
    function clearUnreadCountByTimestamp(conversation, timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mt()) {
                return { code: Ee.NOT_SUPPORT, msg: ERROR_CODE[Ee.NOT_SUPPORT] };
            }
            logger.info('clearUnreadCountByTimestamp ->targetId:' + conversation.targetId + ',conversationType:' + conversation.conversationType);
            const code = yield IMClient.imClient.context.clearUnreadCountByTimestamp(conversation.conversationType, conversation.targetId, timestamp, conversation.channelId);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('clearUnreadCountByTimestamp ->code:' + code + ',targetId:' + conversation.targetId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 设置消息接收状态
     */
    function setMessageReceivedStatus(messageId, receivedStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mt()) {
                return { code: Ee.NOT_SUPPORT, msg: ERROR_CODE[Ee.NOT_SUPPORT] };
            }
            it('messageId', messageId, We.NUMBER, true);
            it('receivedStatus', receivedStatus, We.NUMBER, true);
            logger.info('setMessageReceivedStatus ->messageId:' + messageId + ',receivedStatus:' + receivedStatus);
            const code = yield IMClient.imClient.context.setMessageReceivedStatus(messageId, receivedStatus);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            else {
                logger.warn('setMessageReceivedStatus ->code:' + code + ',messageId:' + messageId);
                return { code, msg: ERROR_CODE[code] };
            }
        });
    }

    /**
     * 创建标签
     * @param tag 标签信息
     */
    function addTag(tag) {
        return __awaiter(this, void 0, void 0, function* () {
            it('tag.tagId', tag.tagId, We.STRING, true);
            it('tag.tagId', tag.tagId, (val) => {
                return val.length <= 10;
            });
            it('tag.tagName', tag.tagName, (val) => {
                return val.length <= 15;
            });
            it('tag.tagName', tag.tagName, We.STRING, true);
            logger.info('createTag ->tagId:' + tag.tagId + ',tagName:' + tag.tagName);
            const { code } = yield IMClient.imClient.context.createTag(tag);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('createTag ->code:' + code + ',tagId:' + tag.tagId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 删除标签
     * @param tagId 标签 ID
     */
    function removeTag(tagId) {
        return __awaiter(this, void 0, void 0, function* () {
            it('tagId', tagId, We.STRING, true);
            logger.info('removeTag ->tagId:' + tagId);
            const { code } = yield IMClient.imClient.context.removeTag(tagId);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('removeTag ->code:' + code + ',tagId:' + tagId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 编辑标签
     * @param tag 标签信息
    */
    function updateTag(tag) {
        return __awaiter(this, void 0, void 0, function* () {
            it('tag.tagId', tag.tagId, We.STRING, true);
            it('tag.tagName', tag.tagName, We.STRING, true);
            it('tag.tagName', tag.tagName, (val) => {
                return val.length <= 15;
            });
            logger.info('updateTag ->tagId:' + tag.tagId + ',tagName:' + tag.tagName);
            const { code } = yield IMClient.imClient.context.updateTag(tag);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('updateTag ->code:' + code + ',tagId:' + tag.tagId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 获取标签列表
     */
    function getTags() {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, data } = yield IMClient.imClient.context.getTagList();
            if (code === Ee.SUCCESS) {
                return { code: Ee.SUCCESS, data };
            }
            logger.warn('getTagList ->code:' + code);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
    * 获取会话下的标签
    * @param conversation 会话信息
    */
    function getTagsFromConversation(conversation) {
        return __awaiter(this, void 0, void 0, function* () {
            it('conversationType', conversation.conversationType, We.NUMBER);
            it('targetId', conversation.targetId, We.STRING);
            it('channelId', conversation.channelId, We.CHANNEL_ID);
            logger.info('getTagsForConversation ->targetId:' + conversation.targetId + ',conversationType:' + conversation.conversationType);
            const { code, data } = yield IMClient.imClient.context.getTagsForConversation(conversation);
            if (code === Ee.SUCCESS) {
                return { code, data };
            }
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 添加会话到指定标签
     * @param tagId 标签 ID
     * @param conversations 要添加的会话列表
     */
    function addConversationsToTag(tagId, conversations) {
        return __awaiter(this, void 0, void 0, function* () {
            it('tagId', tagId, We.STRING, true);
            it('conversations', conversations, We.ARRAY, true);
            conversations.forEach(item => {
                it('conversation.conversationType', item.conversationType, We.NUMBER, true);
                it('conversation.targetId', item.targetId, We.STRING, true);
                it('conversation.channelId', item.channelId, We.CHANNEL_ID);
            });
            logger.info('addTagForConversations ->tagId:' + tagId);
            const { code } = yield IMClient.imClient.context.addTagForConversations(tagId, conversations);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('addTagForConversations ->code:' + code + ',tagId:' + tagId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 删除指定标签中会话
     * @param tagId 标签 ID
     * @param conversations 要删除的会话列表
     */
    function removeConversationsFromTag(tagId, conversations) {
        return __awaiter(this, void 0, void 0, function* () {
            it('tagId', tagId, We.STRING, true);
            it('conversations', conversations, We.ARRAY, true);
            conversations.forEach(item => {
                it('conversation.conversationType', item.conversationType, We.NUMBER, true);
                it('conversation.targetId', item.targetId, We.STRING, true);
                it('conversation.channelId', item.channelId, We.CHANNEL_ID);
            });
            logger.info('removeTagForConversations ->tagId:' + tagId);
            const { code } = yield IMClient.imClient.context.removeTagForConversations(tagId, conversations);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('removeTagForConversations ->code:' + code + ',tagId:' + tagId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 从指定会话中删除多个标签
     * @param conversation 会话
     * @param tagIds 要删除的标签列表
     */
    function removeTagsFromConversation(conversation, tagIds) {
        return __awaiter(this, void 0, void 0, function* () {
            it('conversation.conversationType', conversation.conversationType, We.NUMBER, true);
            it('conversation.targetId', conversation.targetId, We.STRING, true);
            it('conversation.channelId', conversation.channelId, We.CHANNEL_ID);
            it('tagIds', tagIds, We.ARRAY, true);
            tagIds.forEach(item => {
                it('tagId', item, We.STRING, true);
            });
            logger.info('removeTagsForConversation ->tagIds:' + tagIds + ',targetId:' + conversation.targetId + ',conversationType:' + conversation.conversationType);
            const { code } = yield IMClient.imClient.context.removeTagsForConversation(conversation, tagIds);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('removeTagsForConversation ->code:' + code + ',tagIds:' + tagIds);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 从多个会话中删除指定的标签
     * @param tagId 标签 ID
     * @param conversations 要删除的会话列表
     */
    function removeTagFromConversations(tagId, conversations) {
        return __awaiter(this, void 0, void 0, function* () {
            it('tagId', tagId, We.STRING, true);
            it('conversations', conversations, We.ARRAY, true);
            conversations.forEach(item => {
                it('conversation.conversationType', item.conversationType, We.NUMBER, true);
                it('conversation.targetId', item.targetId, We.STRING, true);
                it('conversation.channelId', item.channelId, We.CHANNEL_ID);
            });
            logger.info('removeTagForConversations ->tagId:' + tagId);
            const { code } = yield IMClient.imClient.context.removeTagForConversations(tagId, conversations);
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('removeTagForConversations ->code:' + code + ',tagId:' + tagId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 分页获取标签下会话列表
     * @param tagId 标签id
     * @param count 获取数量
     * @param timestamp 会话时间戳
     */
    function getConversationsFromTagByPage(tagId, count, startTime) {
        return __awaiter(this, void 0, void 0, function* () {
            it('tagId', tagId, We.STRING, true);
            it('count', count, We.NUMBER, true);
            it('startTime', startTime, We.NUMBER, true);
            logger.info('getConversationListByTag ->tagId:' + tagId);
            const { code, data } = yield IMClient.imClient.context.getConversationListByTag(tagId, startTime, count);
            if (code === Ee.SUCCESS) {
                return { code, data };
            }
            logger.warn('getConversationListByTag ->code:' + code + ',tagId:' + tagId);
            return { code, msg: ERROR_CODE[code] };
        });
    }
    /**
     * 根据标签获取未读消息数
     * @param tagId 标签id
     * @param containMuted 是否包含免打扰
     */
    function getUnreadCountByTag(tagId, containMuted) {
        return __awaiter(this, void 0, void 0, function* () {
            it('tagId', tagId, We.STRING, true);
            it('containMuted', containMuted, We.BOOLEAN, true);
            logger.info('getUnreadCountByTag ->tagId:' + tagId);
            const { code, data } = yield IMClient.imClient.context.getUnreadCountByTag(tagId, containMuted);
            logger.info(code, data);
            if (code === Ee.SUCCESS) {
                return { code, data };
            }
            else {
                logger.warn('getUnreadCountByTag ->code:' + code + ',tagId:' + tagId);
                return { code, msg: ERROR_CODE[code] };
            }
        });
    }
    /**
     * 设置标签中会话置顶
     * @param tagId 标签id
     * @param conversation 会话
     * @param status 状态
     */
    function setConversationToTopInTag(tagId, conversation, isTop) {
        return __awaiter(this, void 0, void 0, function* () {
            it('tagId', tagId, We.STRING, true);
            it('conversation.targetId', conversation.targetId, We.STRING, true);
            it('conversation.conversationType', conversation.conversationType, We.NUMBER, true);
            it('conversation.channelId', conversation.channelId, We.CHANNEL_ID);
            it('status.isTop', isTop, We.BOOLEAN, true);
            logger.info('setConversationStatusInTag ->tagId:' + tagId + ',targetId:' + conversation.targetId + ',conversationType' + conversation.conversationType);
            const { code, data } = yield IMClient.imClient.context.setConversationStatusInTag(tagId, conversation, { isTop });
            if (code === Ee.SUCCESS) {
                return { code };
            }
            logger.warn('setConversationStatusInTag ->code:' + code + ',tagId:' + tagId);
            return { code, msg: ERROR_CODE[code] };
        });
    }

    /**
     * 业务层枚举, 此处枚举会暴露给开发者
    */
    const ConnectType = {
        COMET: 'comet',
        WEBSOCKET: 'websocket'
    };
    const MessageType = {
        TEXT: 'RC:TxtMsg',
        VOICE: 'RC:VcMsg',
        HQ_VOICE: 'RC:HQVCMsg',
        IMAGE: 'RC:ImgMsg',
        GIF: 'RC:GIFMsg',
        RICH_CONTENT: 'RC:ImgTextMsg',
        LOCATION: 'RC:LBSMsg',
        FILE: 'RC:FileMsg',
        SIGHT: 'RC:SightMsg',
        COMBINE: 'RC:CombineMsg',
        CHRM_KV_NOTIFY: 'RC:chrmKVNotiMsg',
        LOG_COMMAND: 'RC:LogCmdMsg',
        EXPANSION_NOTIFY: 'RC:MsgExMsg',
        REFERENCE: 'RC:ReferenceMsg',
        RECALL_MESSAGE_TYPE: 'RC:RcCmd'
    };

    Je.add('imlib', "5.2.4");
    if (!Je.validEngine("5.2.4")) {
        logger.error(`The current engine version '${Je.getInfo().engine}' error，imlib required engine version at least '${"5.2.4"}'.`);
    }

    exports.BaseMessage = BaseMessage;
    exports.CombineMessage = CombineMessage;
    exports.ConnectType = ConnectType;
    exports.ConnectionStatus = Ie;
    exports.ConversationType = j;
    exports.ErrorCode = Ee;
    exports.FileMessage = FileMessage;
    exports.GIFMessage = GIFMessage;
    exports.HQVoiceMessage = HQVoiceMessage;
    exports.ImageMessage = ImageMessage;
    exports.LocationMessage = LocationMessage;
    exports.MentionedType = we;
    exports.MessageBlockType = ke;
    exports.MessageDirection = me;
    exports.MessageType = MessageType;
    exports.NotificationStatus = Oe;
    exports.ReceivedStatus = i;
    exports.ReferenceMessage = ReferenceMessage;
    exports.RichContentMessage = RichContentMessage;
    exports.SightMessage = SightMessage;
    exports.TextMessage = TextMessage;
    exports.UploadMethod = Ue;
    exports.VoiceMessage = VoiceMessage;
    exports.__addSDKVersion = __addSDKVersion;
    exports.addConversationsToTag = addConversationsToTag;
    exports.addEventListener = addEventListener;
    exports.addTag = addTag;
    exports.bindRTCRoomForChatroom = bindRTCRoomForChatroom;
    exports.clearAllMessagesUnreadStatus = clearAllMessagesUnreadStatus;
    exports.clearEventListeners = clearEventListeners;
    exports.clearHistoryMessages = clearHistoryMessages;
    exports.clearMessages = clearMessages;
    exports.clearMessagesUnreadStatus = clearMessagesUnreadStatus;
    exports.clearTextMessageDraft = clearTextMessageDraft;
    exports.clearUnreadCountByTimestamp = clearUnreadCountByTimestamp;
    exports.connect = connect;
    exports.deleteLocalMessagesByTimestamp = deleteLocalMessagesByTimestamp;
    exports.deleteMessages = deleteMessages;
    exports.disconnect = disconnect;
    exports.forceRemoveChatRoomEntry = forceRemoveChatRoomEntry;
    exports.forceSetChatRoomEntry = forceSetChatRoomEntry;
    exports.getAllChatRoomEntries = getAllChatRoomEntries;
    exports.getAllConversationState = getAllConversationState;
    exports.getAllUnreadMentionedCount = getAllUnreadMentionedCount;
    exports.getBlockUltraGroupList = getBlockUltraGroupList;
    exports.getBlockedConversationList = getBlockedConversationList;
    exports.getChatRoomEntry = getChatRoomEntry;
    exports.getChatRoomInfo = getChatRoomInfo;
    exports.getChatroomHistoryMessages = getChatroomHistoryMessages;
    exports.getConnectionStatus = getConnectionStatus;
    exports.getConversationList = getConversationList;
    exports.getConversationNotificationStatus = getConversationNotificationStatus;
    exports.getConversationsFromTagByPage = getConversationsFromTagByPage;
    exports.getCurrentUserId = getCurrentUserId;
    exports.getFileToken = getFileToken;
    exports.getFileUrl = getFileUrl;
    exports.getFirstUnreadMessage = getFirstUnreadMessage;
    exports.getHistoryMessages = getHistoryMessages;
    exports.getMessage = getMessage;
    exports.getMessageReader = getMessageReader;
    exports.getRemoteHistoryMessages = getRemoteHistoryMessages;
    exports.getServerTime = getServerTime;
    exports.getTags = getTags;
    exports.getTagsFromConversation = getTagsFromConversation;
    exports.getTextMessageDraft = getTextMessageDraft;
    exports.getTopConversationList = getTopConversationList;
    exports.getTotalUnreadCount = getTotalUnreadCount;
    exports.getUltraGroupList = getUltraGroupList;
    exports.getUltraGroupMessageListByMessageUId = getUltraGroupMessageListByMessageUId;
    exports.getUltraGroupUnreadMentionedCountByTargetId = getUltraGroupUnreadMentionedCountByTargetId;
    exports.getUnreadCount = getUnreadCount;
    exports.getUnreadCountByTag = getUnreadCountByTag;
    exports.getUnreadMentionedCount = getUnreadMentionedCount;
    exports.getUnreadMentionedMessages = getUnreadMentionedMessages;
    exports.init = init$1;
    exports.insertMessage = insertMessage;
    exports.installPlugin = installPlugin;
    exports.joinChatRoom = joinChatRoom;
    exports.joinExistChatRoom = joinExistChatRoom;
    exports.modifyMessage = modifyMessage;
    exports.onceEventListener = onceEventListener;
    exports.quitChatRoom = quitChatRoom;
    exports.recallMessage = recallMessage;
    exports.registerMessageType = registerMessageType;
    exports.removeAllExpansionForUltraGroupMessage = removeAllExpansionForUltraGroupMessage;
    exports.removeChatRoomEntries = removeChatRoomEntries;
    exports.removeChatRoomEntry = removeChatRoomEntry;
    exports.removeConversation = removeConversation;
    exports.removeConversationsFromTag = removeConversationsFromTag;
    exports.removeEventListener = removeEventListener;
    exports.removeEventListeners = removeEventListeners;
    exports.removeExpansionForUltraGroupMessage = removeExpansionForUltraGroupMessage;
    exports.removeMessageExpansionForKey = removeMessageExpansionForKey;
    exports.removeTag = removeTag;
    exports.removeTagFromConversations = removeTagFromConversations;
    exports.removeTagsFromConversation = removeTagsFromConversation;
    exports.saveTextMessageDraft = saveTextMessageDraft;
    exports.searchConversationByContent = searchConversationByContent;
    exports.searchMessages = searchMessages;
    exports.sendFileMessage = sendFileMessage;
    exports.sendHQVoiceMessage = sendHQVoiceMessage;
    exports.sendImageMessage = sendImageMessage;
    exports.sendMessage = sendMessage;
    exports.sendReadReceiptMessage = sendReadReceiptMessage;
    exports.sendReadReceiptRequest = sendReadReceiptRequest;
    exports.sendReadReceiptResponse = sendReadReceiptResponse;
    exports.sendReadReceiptResponseV2 = sendReadReceiptResponseV2;
    exports.sendSightMessage = sendSightMessage;
    exports.sendSyncReadStatusMessage = sendSyncReadStatusMessage;
    exports.sendTextMessage = sendTextMessage;
    exports.sendTypingStatusMessage = sendTypingStatusMessage;
    exports.sendUltraGroupTypingStatus = sendUltraGroupTypingStatus;
    exports.setChatRoomEntries = setChatRoomEntries;
    exports.setChatRoomEntry = setChatRoomEntry;
    exports.setConversationNotificationStatus = setConversationNotificationStatus;
    exports.setConversationToTop = setConversationToTop;
    exports.setConversationToTopInTag = setConversationToTopInTag;
    exports.setMessageReceivedStatus = setMessageReceivedStatus;
    exports.updateExpansionForUltraGroupMessage = updateExpansionForUltraGroupMessage;
    exports.updateMessageExpansion = updateMessageExpansion;
    exports.updateTag = updateTag;

    Object.defineProperty(exports, '__esModule', { value: true });

}));