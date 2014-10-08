(function(){Function.prototype.bind=Function.prototype.bind||function(a){var c=this;return function(){return c.apply(a,arguments)}}})();var global=this;try{global=(0,eval)("this")||function(){return this}()||window}catch(e$$12){}global.VERSION="1.0.2-b1";var EMPTY_FUN=function(){},UNDEF=void 0;global.APP_PATH=global.APP_PATH||"/";global.LIBRARIES_REPO_LOC=global.LIBRARIES_REPO_LOC||"/";
function fitTextarea(a){"textarea"===a.tagName.toLowerCase()&&(a.style.overflow="hidden",a.style.height="0px",a.scrollHeight,a.style.height=25+a.scrollHeight+"px",a.style.overflow="")}function nextNode(a){for(;!a.tagName;)a=a.nextSibling;return a}
function toggleShowSibling(a,c){for(var b=c||a.nextSibling;b&&!b.style;)b=b.nextSibling;if(b){var d=!1;b.cmNode&&"none"===b.cmNode.style.display?(b.cmNode.style.display="",d=!0):b.cmNode||"none"!==b.style.display?(b.style.display="none",b.cmNode&&(b.cmNode.style.display="none")):(b.style.display="",d=!0,"TEXTAREA"===b.tagName&&attachEditor(b),fitTextarea(b));(b=a.children[0])&&"true"===b.getAttribute("plus")&&(b.innerHTML=d?"-":"+")}}
function attachEditor(a){a.cm=CodeMirror.fromTextArea(a,{lineNumbers:!0,mode:"javascript",theme:"ambiance",tabMode:"indent",matchBrackets:!0,extraKeys:{"Ctrl-Q":function(a){a.foldCode(a.getCursor())}},foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"]});a.cm.on("change",function(){a.value=a.cm.getValue()});a.cmNode=a.nextSibling}
function getParametersAndConfigForTagNode(a,c,b){var d=a.getElementsByTagName("input");a=a.reference.config;for(var e=0;e<d.length;e++){if(!c&&-1!==d[e].className.indexOf("red"))return"red";if(void 0!==d[e].pindex){var g=d[e].pindex;a.parameters[g].inputVariable=d[e].value;a.parameters[g].variable=void 0;if(d[e].value)try{var f=qubit.opentag.Utils.gevalAndReturn(d[e].value),f=f?f.result:f;a.parameters[g].variable={value:f}}catch(h){logError("Error reading configuration"+h)}}else if(!b&&void 0!==d[e].cname)switch(g=
d[e].cname,g){case "url":case "html":case "urlLocation":case "vendor":case "imageUrl":case "url":a[g]=d[e].value;break;default:try{a[g]=qubit.opentag.Utils.gevalAndReturn(d[e].value).result}catch(l){}}}return b?{parameters:a.parameters}:a}function applyParametersAndConfigToTag(a,c){a.parameters=c.parameters;for(var b in c)a[b]=c[b]}
function classPath(a){if(a){a=a.split(".");for(var c=0;c<a.length;c++){var b=a[c],b=b.replace(/\s+/g,"_"),b=b.replace(/[\W+]/g,"");b.match(/^\d+/)&&(b="_"+b);a[c]=b}return a.join(".").replace(/^[\.]+/g,"").replace(/[\.]+$/g,"").replace(/\.+/g,".")}return a}function getLibraryReferenceNode(a){for(;null!==a&&!a.reference;)a=a.parentNode;return a}window.__tmp__qubit__test_page_8_=null;
function extractFunctionOrString(a){var c=qubit.opentag.Utils.trim(a);return 0===c.indexOf("function")?(qubit.opentag.Utils.geval("window.__tmp__qubit__test_page_8_="+c),window.__tmp__qubit__test_page_8_):a}var IS_IE=!1;-1!==navigator.appName.indexOf("Internet Explorer")&&(IS_IE=!0);
function getXMLHttpRequest(){var a;try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(c){try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{a=new XMLHttpRequest}catch(d){throw"Your browser does not support AJAX!";}}}IS_IE?window.onerror=function(){}:a.onerror=function(){};return a}
function GET(a,c,b){var d=getXMLHttpRequest();d.onreadystatechange=function(){4===d.readyState&&c(d.responseText,d)};b=void 0===b?!0:b;try{d.onerror=function(a){logError("Error while sending GET:"+a)}}catch(e){}a=fakeParam(a);d.open("GET",a,b);d.send()}
function POST(a,c,b,d){var e=getXMLHttpRequest();e.onreadystatechange=function(){4===e.readyState&&b(e.responseText,e)};d=void 0===d?!0:d;try{e.onerror=function(a){logError("Error while sending POST:"+a)}}catch(g){}a=fakeParam(a);e.open("POST",a,d);e.setRequestHeader("Content-type","application/x-www-form-urlencoded");e.send(c)}function fakeParam(a){return a&&-1!==a.lastIndexOf("?")?a+"&fparam="+(new Date).getTime()*Math.random():a+"?fparam="+(new Date).getTime()*Math.random()}
function theProgressBar(a,c){var b=!1,d=document.getElementById("progress-bar-template").innerHTML;if(b)return!1;theProgressBar.title=a;var b=!0,e=document.createElement("div");e.className="progress-bar";e.innerHTML=d;document.body.appendChild(e);e.bar=e.children[0].children[0];e.titleNode=e.bar.children[0];e.titleNode.innerHTML=theProgressBar.title;e.progress=e.bar.children[1];var g=function(){var a=c();100<=a?(e.titleNode.innerHTML=theProgressBar.title+" 100% Done.",e.progress.style.width="100%",
setTimeout(function(){b=!1;document.body.removeChild(e)},200)):(e.titleNode.innerHTML=theProgressBar.title+" "+Math.floor(a)+"%",e.progress.style.width=Math.floor(a)+"%",setTimeout(g,20))};g();return!0}
function qconsole(){this.init=function(){if(!this.initialized){this.initialized=!0;var a=document.getElementById("console-template").innerHTML;this.container=document.createElement("div");this.container.className="qconsole";this.container.innerHTML=a;this.msgContainer=this.container.children[1];document.body.appendChild(this.container);this.msgContainer.scrollTop=this.msgContainer.scrollHeight;var c=this;this.container.ondblclick=function(){info("[double click] Clearing & hiding console...");c.clear();
c.hide()}}};this.log=function(a){var c=document.getElementById("console-msg-template").innerHTML,b=document.createElement("div");b.className="msg";b.innerHTML=c;b.msg=b.children[1];b.header=b.children[0];b.msg.innerHTML=" >>> "+a;this.msgContainer.appendChild(b);this.msgContainer.scrollTop=this.msgContainer.scrollHeight};this.clear=function(){this.msgContainer.innerHTML=""};this.show=function(){qubit.opentag.Utils.addClass(this.container,"shown");qubit.opentag.Utils.removeClass(this.container,"hidden");
this.hidden=!1};this.hide=function(){qubit.opentag.Utils.removeClass(this.container,"shown");qubit.opentag.Utils.addClass(this.container,"hidden");this.hidden=!0};this.init()}var Utils=qubit.opentag.Utils;
function runTagHandler(a){var c=getParametersAndConfigForTagNode(a);if("red"===c)logError("Please fill all highlighed parameter values.\n They are required for tag to run.",2E3);else{var b=APP_PATH+"getClassPath?classPath=libraries."+a.reference.PACKAGE_NAME+".local&file=UVConf.js";GET(b,function(d,e){var g=!0;200!==e.status&&(g=!1,log("UVConfig not found. Proceeding normally."));try{g&&(log("Evaluating UVConf.js from "+b),qubit.opentag.Utils.geval(d))}catch(f){error("Exception while running UVConf.js: "+
f)}finally{runTag(a,c)}})}}
function runTag(a,c){try{var b={},d=a.classReference,e=a.reference;applyParametersAndConfigToTag(b,c);try{for(var g=b.parameters,f=0;f<g.length;f++)for(var h=g[f],l=0;l<e.config.parameters.length;l++){var m=e.config.parameters[l];if(m.token===h.token){h.uv=m.uv;break}}}catch(p){}var n=e.preNode.value;String(n)!==e.config.pre&&String(n)!==String(e.pre)&&(b.pre=extractFunctionOrString(n));var k=e.postNode.value;String(k)!==e.config.post&&String(k)!==String(e.post)&&(b.post=extractFunctionOrString(k));
var t=e.scriptNode.value;String(t)!==e.config.script&&String(t)!==String(e.script)&&(b.script=extractFunctionOrString(t));var q=new d(b);info("triggering run() for "+q.config.name+" ...");q.run();info("Currently executed tag instance is exposed as <pre>window.instance<pre>Please open web console to see more logs.<br/>To view library the logs run:<pre>instance.log.rePrint(5);</pre>in web console.",5E3);window.instance=q}catch(x){logError("Error while executing configuration:"+x)}}
function saveConfig(a){a=getLibraryReferenceNode(a);var c=a.reference;a=getParametersAndConfigForTagNode(a,!0,!0);for(var b=0;b<a.parameters.length;b++)a.parameters[b].variable=void 0,delete a.parameters[b].variable;a=json.serialize({parameters:a.parameters},{prettyPrint:!0});b=c.PACKAGE_NAME+".local";a=encodeURIComponent("//:include tagsdk-current.js\n"+("qubit.opentag.Utils.namespace('"+b+"');\n")+b+".Config = "+a+";");POST(APP_PATH+"saveConfig","classPath=libraries."+c.PACKAGE_NAME+".local&config="+
a,function(a,b){var c=qubit.opentag.Utils.gevalAndReturn(a);c&&c.result.ok?info("Saved"):logError(a)})}
function saveNewVersion(a,c){(c||window.event).ignoreEvent=!0;a=getLibraryReferenceNode(a);var b=a.reference,d=prompt("Please enter the name of the new version, eg 'v1'.\n\n");if(d){var d=classPath(d),e=b.PACKAGE_NAME.split(".");POST(APP_PATH+"saveNewVersion","location=libraries&classPath="+b.PACKAGE_NAME+"&version="+(e[0]+"."+e[1])+"."+d,function(a,b){var c=qubit.opentag.Utils.gevalAndReturn(a);c&&c.result.ok?(info("Created new version."),info("Rebuilding system...",1E4),rebuildAndReload()):logError("Error while creating new version: "+
a)})}}function rebuildAndReload(){if(window.buildLocationString){var a="path="+encodeURIComponent(window.buildLocationString);GET(APP_PATH+"rebuild?"+a,function(a,b){var d=qubit.opentag.Utils.gevalAndReturn(a);d&&d.result.ok?(info("System has been rebuilt for "+window.buildLocationString,1E4),info("Reloading page."),location.reload()):logError("Rebuild failed! "+a)})}}var editUVURL=LIBRARIES_REPO_LOC+"shared/templates/UVConf.js";
function editUVURLHandler(a){GET(editUVURL,function(c,b){200!==b.status?logError(c):editUV(a,c)})}function editUV(a,c){openInEditorAndCreate("libraries."+a.reference.PACKAGE_NAME+".local","UVConf.js",!0,c)}function openInEditorHandler(a){openInEditorAndCreate("libraries."+a.reference.PACKAGE_NAME,"Tag.js",!1)}
function openInEditorAndCreate(a,c,b,d){d="classPath="+a+"&file="+c+"&create="+!!b+"&data="+encodeURIComponent(d);POST(APP_PATH+"openInEditor",d,function(a,b){var c=qubit.opentag.Utils.gevalAndReturn(a);c&&c.result.ok||(logError(a),logError("Make sure that CLASSPATH of your library matches its location!"))})}
function reloadTagHandler(a){var c=qubit.opentag.Utils,b=a.reference,d=a.libraryWidget,e=a.classReference.versionClassPath,g="classPath=libraries."+b.PACKAGE_NAME+"&file=Tag.js";reloadTests(a);POST(APP_PATH+"getClassPath",g,function(g,h){200!==h.status&&logError("Error loading tag: "+g);try{var l=getParametersAndConfigForTagNode(a,!0,!0);c.getObjectUsingPath(b.PACKAGE_NAME).Tag=void 0;qubit.opentag.Utils.geval(g);var m=c.getObjectUsingPath(b.PACKAGE_NAME+".Tag");m.versionClassPath=e;d.renderLibraryToNode(m,
null,null,l)}catch(p){logError("Error loading tag: "+p)}})}function cancelEvent(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}var Utils=qubit.opentag.Utils,testSuiteCodeTemplateURL=LIBRARIES_REPO_LOC+"shared/templates/TestsSuite.js";function addEditTests(a){GET(testSuiteCodeTemplateURL,function(c,b){200!==b.status?logError(c):addEditStandardTests(a,c)})}
function addEditStandardTests(a,c){if(a=getLibraryReferenceNode(a)){var b=a.reference,d=c.replace("_PACKAGE_",b.PACKAGE_NAME),d=d.replace("_TAG_",b.PACKAGE_NAME+".Tag"),e=b.PACKAGE_NAME.split(".").join("/"),d=d.replace("_TAGPATH_",e+"/Tag.js");openInEditorAndCreate("libraries."+b.PACKAGE_NAME+".local","TestsSuite.js",!0,d)}}var bddSuiteCodeTemplateURL=LIBRARIES_REPO_LOC+"shared/templates/BDDSuite.js";
function addEditDescribeTests(a){GET(bddSuiteCodeTemplateURL,function(c,b){200!=b.status?logError(c):addEditBDDTests(a,c)})}function addEditBDDTests(a,c){if(a=getLibraryReferenceNode(a)){var b=a.reference,d=c.replace("_PACKAGE_",b.PACKAGE_NAME),d=d.replace("_TAG_",b.PACKAGE_NAME+".Tag"),e=b.PACKAGE_NAME.split(".").join("/"),d=d.replace("_TAGPATH_",e+"/Tag.js");openInEditorAndCreate("libraries."+b.PACKAGE_NAME+".local","BDDSuite.js",!0,d)}}function reloadTests(a){_reloadTest(a,"BDDSuite.js")}
function _reloadTest(a,c){var b=qubit.opentag.Utils,d=a.reference,e=a.libraryWidget;POST(APP_PATH+"getClassPath","classPath=libraries."+d.PACKAGE_NAME+".local&file="+c,function(c,f){200!==f.status&&log("Error loading test (probably no tests). "+c);try{var h=getParametersAndConfigForTagNode(a,!0,!0);try{b.getObjectUsingPath(d.PACKAGE_NAME).local.TestsSuite=void 0}catch(l){}qubit.opentag.Utils.geval(c);var m=b.getObjectUsingPath(d.PACKAGE_NAME+".Tag");e.renderLibraryToNode(m,null,null,h)}catch(p){log("Error loading test: "+
p)}finally{reloadBDDTests(a)}})}
function reloadBDDTests(a){var c=qubit.opentag.Utils,b=a.reference,d=a.libraryWidget;POST(APP_PATH+"getClassPath","classPath=libraries."+b.PACKAGE_NAME+".local&file=BDDSuite.js",function(e,g){200!==g.status&&log("Error loading test (probably no tests). "+e);try{var f=getParametersAndConfigForTagNode(a,!0,!0);try{c.getObjectUsingPath(b.PACKAGE_NAME).local.BDDSuite=void 0}catch(h){}qubit.opentag.Utils.geval(e);var l=c.getObjectUsingPath(b.PACKAGE_NAME+".Tag");d.renderLibraryToNode(l,null,null,f)}catch(m){log("Error loading test: "+
m)}})}var testsRunning=!1;
function runAllTests(a){if(testsRunning)info("Wait for currently running tests to finish.");else{testsRunning=!0;for(var c=document.getElementsByTagName("div"),b=0,d=0,e=[],g=0;g<c.length;g++){var f=c[g];"true"===f.getAttribute("library-node")&&(++b,e.push(f))}var h=function(c){try{var g=e[c];g&&runTestsHandler(g,function(){++d;d<b&&setTimeout(function(){h(d)},5);d===b&&(testsRunning=!1,a&&a())})}catch(f){}};h(0);theProgressBar("Running test suites...",function(){return 0===d?0:d/b*100})}}
function runTestsHandler(a,c){try{var b=a.reference,d=qubit.opentag.Utils,e=d.getObjectUsingPath(b.PACKAGE_NAME+".local.TestsSuite"),g=d.getObjectUsingPath(b.PACKAGE_NAME+".local.BDDSuite"),f=function(){var b=!1;e&&!e.isFinished()?b=!0:g&&!g.isFinished&&(b=!0);if(!b){b=!1;if(g)for(var f=g.children,h=0;h<f.length;h++)if("failed"===f[h].result.status){b=!0;break}f=!1;e&&e.failedTests&&0<e.failedTests.length&&(f=!0);if(g||e)f||b?d.addClass(a,"tests-failed"):d.addClass(a,"tests-passed");c&&c()}};e||g?
(e&&runSuite(e,f),g&&runBDDSuite(g,f)):(c&&c(),d.addClass(a,"tests-notests"),log("No tests detected for "+b.config.name))}catch(h){logError("Error while executing tests suite:"+h)}}function runSuite(a,c){a?(a.onFinished=function(){c&&c()},a.run()):c&&c()}function runBDDSuite(a,c){if(a){var b=a.resultCallback;a.resultCallback=function(){b.apply(a,arguments);a.isFinished=!0;if(c)try{c()}catch(d){alert(d)}};a.execute()}else c&&(a.isFinished=!0,c())}Utils=qubit.opentag.Utils;
function toggleUVSelector(a){"Close UV Browser"===a.innerHTML?(document.getElementById("uv-selector-holder").innerHTML="",a.innerHTML="Browse UV"):(openUVVariableSelector(),a.innerHTML="Close UV Browser")}function openUVVariableSelector(){var a=document.getElementById("uv-selector-holder");a.innerHTML="";renderUVSelector(a)}var uvPopupTemplate=document.getElementById("uv-popup-template").innerHTML;
function renderUVSelector(a,c){a.innerHTML="";var b=document.createElement("div");b.innerHTML=uvPopupTemplate;a.appendChild(b);var d=b.children[0].children[1].children[0].children[0],e=b.children[0].children[2];loadUVVariables(function(){for(var a=window.UVS,b=0;b<a.length;b++)(function(a){a.onclick=function(){e.value=a.expr;e.className="result";c&&c(a.expr)}})(renderUVSelectorItemYoNode(d,a[b]))})}var uvPopupItemTemplate=document.getElementById("uv-popup-item-template").innerHTML;
function renderUVSelectorItemYoNode(a,c){var b=document.createElement("div");b.innerHTML=uvPopupItemTemplate;var d=b.children[0].children[1];b.children[0].children[0].innerHTML=c.name;d.innerHTML=c.description;b.expr=c.expression;a.appendChild(b);return b}
function loadUVVariables(a){window.UVS?a&&a(UVS):GET(LIBRARIES_REPO_LOC+"shared/bin/html/data/uv.data",function(c,b){200!==b.status&&alert("Error loading UV data: "+c);try{for(var d=c.split("\n"),e=[],g={},f=0;f<d.length;f++){var h=d[f].split("\t"),l={name:h[1],expression:h[2],description:h[3]};g[l.expression]=l;e.push(l)}window.UVS=e;window.EUVS=g;a(e)}catch(m){logError("Error loading UVs: "+m)}})}
(function(){function a(a,b){for(var c=0;c<b.length;c++)if("function"===typeof b[c]&&a instanceof b[c])return!0;return!1}function c(a,b){for(var c=0;c<b.length;c++)if(typeof a===b[c])return!0;return!1}function b(a,b){for(var c=0;c<b.length;c++)b[c]===a&&b.splice(c,1);return b}function d(a){return'"'+a.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"'}function e(a,b){return a?" "+b:b}function g(a,b,c,d,e){var g=" ";""===c&&(g="");return(c||d?0===e.length?[g,a,e.join(","),b]:[g,a,"\n",c,h,e.join(",\n"+
c+h),"\n",c,b]:[a,e.join(","),b]).join("")}var f={};f.checkIfInstanceOf=a;var h="  ",l=function(f,k,m,q,p){if(isNaN(p)||!(q>=p)){var v,z,y,F,r=!1,A,G=!0,D=!1,H=!1,I=!1,w=!1;k&&(k.prettyPrint&&(w=!0),k.raw&&(D=k.raw),k.excludedInstances&&(v=k.excludedInstances),k.excludedTypes&&(z=k.excludedTypes),k.excludedNames&&(y=k.excludedNames),k.own&&(F=k.hasOwn),k.fakeFunctions&&(H=k.fakeFunctions),k.realFunctions&&(I=k.realFunctions),k.includeFunctions&&(r=k.includeFunctions),k.excludeOnTrue&&(A=k.excludeOnTrue),
k.dateAsString&&(G=k.dateAsString));var u="",E="";if(w){for(w=0;w<q;w++)u+=h;E="\n"}if(f instanceof Date)return!D||G?d(f.toISOString()):f.valueOf();if(r||"function"!==typeof f){if("number"===typeof f)return e(u,String(f));if("string"===typeof f)return e(u,d(f));if(null===f)return e(u,"null");if(void 0===f)return D?e(u,"undefined"):void 0;if("boolean"===typeof s)return e(u,String(f));if(r&&"function"===typeof f&&H)return"(function(){})";if(r&&"function"===typeof f&&I)return e(u,f.toString());a:{if(f instanceof
Object)for(s=0;s<m.length;s++)if(m[s]===f){s=!0;break a}s=!1}if(!s){m.push(f);++q;if(f instanceof Array){y=[];for(w=0;w<f.length;w++){if(A)try{if(A(f))continue}catch(N){}if(!v||!a(f,v))if(!z||!c(f,z)){try{var B=l(f[w],k,m,q,p)}catch(K){return b(f,m),d(String(K))}void 0!==B&&y.push(B)}}b(f,m);return g("[","]",u,E,y)}var B=[],C;for(C in f){var s=f[C];if(!F||f.hasOwnProperty(C)){if(A)try{if(A(f))continue}catch(O){}if(!v||!a(s,v))if(!z||!c(s,z)){if(r=y)a:{for(r=0;r<y.length;r++)if(C===y[r]){r=!0;break a}r=
!1}if(!r)try{var J=l(s,k,m,q,p);if(void 0!==J){var L='"'+C.replace(/\"/g,'\\"')+'":'+J;B.push(L)}}catch(M){return b(f,m),d(String(M))}}}}b(f,m);return g("{","}",u,E,B)}}}};f.serialize=function(a,b){var c;b&&(c=b.level);return l(a,b,[],0,c)};var m=(0,eval("this"))||function(){return this}()||this.window;f.parse=function(a){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(a.replace(/"(\\.|[^"\\])*"/g,"")))throw"insecure json!";a="json.___tmp = ("+a+")";m.execScript?m.execScript(a):m.eval.call(m,a);return f.___tmp};
m.json=f;try{module.exports=f}catch(p){}})();
(function(){function a(a){a&&(this.parentContainer=a.parentContainer,this.container=a.container,this.className=a.className,this.maxTime=a.maxTime,this.closeable=a.closeable,this.init())}a.prototype.init=function(){this.container=this.container||document.createElement("div");this.container.className+=" qubit-notification "+(this.className?this.className:"")};a.prototype.drawCloseButton=function(){var a=this;this.closeable&&(this.closeButton=document.createElement("div"),0===this.container.childNodes.length?
this.container.appendChild(this.closeButton):this.container.insertBefore(this.closeButton,this.container.childNodes[0]),this.closeButton.className="notification-close-button",this.closeButton.onclick=function(){a.destroy()})};a.prototype.show=function(){this.container.style.display=""};a.prototype.hide=function(){this.container.style.display="none"};a.prototype.setContent=function(a){this.content!==a&&(this.content=a,this.container.innerHTML="","object"===typeof a?this.container.appendChild(a):this.container.innerHTML=
a,this.drawCloseButton());return a};a.prototype.paint=function(){this.painted||(this.parentContainer.appendChild(this.container),this.painted=!0)};a.prototype.destroy=function(){try{if(this.onDestroy)this.onDestroy()}finally{this.container.parentNode&&this.container.parentNode.removeChild(this.container)}};window.Notification=a})();
(function(){function a(a){a&&(this.maxTime=+a.maxTime||6E4,this.notifiers={},this.className=a.className,this.parentContainer=a.parentContainer||document.body,this.container=a.container||document.createElement("div"),this.init())}var c=window.Notification;a.prototype.notify=function(a,d,e,g,f){if(!this.notifiers[a]){e=new c({parentContainer:this.container,maxTime:e,className:g,closeable:f});var h=this;e.onDestroy=function(){delete h.notifiers[a]};this.notifiers[a]=e;e.paint()}this.notifiers[a].show();
this.notifiers[a].setContent(d);this.notifiers[a].timestamp=(new Date).valueOf()};a.prototype.done=function(a,c,e){this.notify(a,c);var g=this;setTimeout(function(){g.notifiers[a]&&(g.notifiers[a].destroy(),delete g.notifiers[a])},e)};a.prototype.init=function(){this.setParentContainer(this.parentContainer);var a=this,c;c=function(){a.container&&a.container.parentNode&&(a.oldNotifiersCheck(),setTimeout(c,500))};c()};a.prototype.setParentContainer=function(a){this.parentContainer=a;this.parentContainer.appendChild(this.container);
this.container.className.lastIndexOf(" qubit-notificationmanager"===-1)&&(this.container.className+=" qubit-notificationmanager "+this.className)};a.prototype.oldNotifiersCheck=function(){var a,c;for(a in this.notifiers)this.notifiers.hasOwnProperty(a)&&(c=this.notifiers[a].maxTime||this.maxTime,(new Date).valueOf()-this.notifiers[a].timestamp>c&&this.notifiers[a].destroy())};a.prototype.clear=function(){for(var a in this.notifiers)this.notifiers.hasOwnProperty(a)&&this.notifiers[a].destroy()};window.NotificationManager=
a})();var Utils=qubit.opentag.Utils,parameterTemplate=document.getElementById("parameter-template").innerHTML,parametersTemplate=document.getElementById("parameters-template").innerHTML;function Parameters(a){a&&(this.config=a,this.init())}Utils.clazz("ui.Parameters",Parameters);Parameters.prototype.paint=function(){this.painted=!0;this.config.parentContainer.appendChild(this.container)};
Parameters.prototype.init=function(){var a=document.createElement("div");a.innerHTML=parametersTemplate;a.className="parameters-container";this.container=a;for(var c=a.children[1].children[0],b=a.children[1].children[1],d=this.config.params,e=0;e<d.length;e++){var a=document.createElement("div"),g=d[e];a.innerHTML=parameterTemplate;var f=a.getElementsByTagName("input")[0];f.pindex=e;a.paramNode=f;a.uvNode=a.getElementsByTagName("input")[1];a.getElementsByTagName("label")[0].innerHTML=g.name+" (token: <pre style='display:inline'>"+
g.token+"</pre>)";var h=!1;g.uv?(h=!0,a.uvNode.value=g.uv):(Utils.addClass(a.uvNode,"no-uv"),a.uvNode.value="edit script to set universal variable");g=void 0!==g.inputVariable?g.inputVariable:"";f.value=g;f.className=g||h?"":"red";h&&(f.setAttribute("onfocus",null),f.setAttribute("onblur",null));c.appendChild(a)}0===d.length?(b.style.display="none",c.innerHTML="<div class='no-params'>No parameters defined.</div>"):b.style.display=""};var excluded="parameters PACKAGE dependencies CONSTRUCTOR dedupe priv name description inactive vendor loadDependenciesOnLoad variables".split(" ");
function propertyExcludedFromConfig(a){for(var c=0;c<excluded.length;c++)if(a===excluded[c])return!0;return!1}var hidden=["filterTimeout","isPrivate",,"usesDocumentWrite","timeout","singleton","locationPlaceHolder","locationDetail","locationObject","noMultipleLoad","__proto__"];function propertyHiddenFromConfig(a){for(var c=0;c<hidden.length;c++)if(a===hidden[c])return!0;return!1}
function prepareConfigElement(a,c,b){var d=document.createElement("div");d.innerHTML=b;d.children[0].className="config";d.getElementsByTagName("input")[0].cname=a;d.getElementsByTagName("label")[0].innerHTML=a;void 0!==c&&(d.getElementsByTagName("input")[0].value=c);d.getElementsByTagName("input")[0].entered=!0;return d}var configTemplate=document.getElementById("config-template").innerHTML,hiddenConfigTemplate=document.getElementById("toggled-config-template").innerHTML;
function addConfig(a,c){var b=document.createElement("div");b.innerHTML=hiddenConfigTemplate;b.className="config-header";var d=b.children[0].children[0];d.innerHTML="<span plus='true'>+</span> Configuration";toggleShowSibling(d);var e=b.children[0].children[1];a.appendChild(b);for(var g in c)propertyExcludedFromConfig(g)||propertyHiddenFromConfig(g)||(d=prepareConfigElement(g,c[g],configTemplate),e.appendChild(d));b=document.createElement("div");b.innerHTML=hiddenConfigTemplate;b.className="config-header";
e.appendChild(b);d=b.children[0].children[0];e=b.children[0].children[1];toggleShowSibling(d);d.innerHTML="<span plus='true'>+</span> Advanced";for(g in c)!propertyExcludedFromConfig(g)&&propertyHiddenFromConfig(g)&&(d=prepareConfigElement(g,c[g],configTemplate),e.appendChild(d))}var prePostTemplate=document.getElementById("pre-post-script-template").innerHTML;
function addPrePostTemplate(a,c){var b=document.createElement("div");b.innerHTML=prePostTemplate;var d=b.getElementsByTagName("textarea"),e=d[0],g=d[1],d=d[2],f=c.config.post?c.config.post:String(c.post),h=c.config.script?c.config.script:String(c.script);e.value=String(c.config.pre?c.config.pre:String(c.pre));g.value=String(f);d.value=String(h);e.style.display="none";g.style.display="none";d.style.display="none";c.preNode=e;c.postNode=g;c.scriptNode=d;a.appendChild(b)}var testTemplate=document.getElementById("unit-test-template").innerHTML;
function addTest(a,c){var b=document.createElement("div");b.innerHTML=testTemplate;b.className="unit-test";c.testNode=b;c.statusNode=b.children[0];c.nameNode=b.children[1];c.nameNode.innerHTML=c.name;c.onFinished=function(){this.failed?Utils.addClass(this.statusNode,"failed"):this.passed&&Utils.addClass(this.statusNode,"passed")};a.appendChild(b)}
function addBDDTest(a,c){var b=document.createElement("div");b.innerHTML=testTemplate;b.className="unit-test";c.testNode=b;c.statusNode=b.children[0];c.nameNode=b.children[1];c.nameNode.innerHTML=c.description;var d=c.resultCallback;c.resultCallback=function(a){d.apply(c,arguments);"failed"===c.result.status?Utils.addClass(c.statusNode,"failed"):"passed"===c.result.status&&Utils.addClass(c.statusNode,"passed")};a.appendChild(b)}var testsSuiteTemplate=document.getElementById("unit-tests-suite-template").innerHTML;
function addTestsSuite(a,c){var b=document.createElement("div");b.className="unit-tests-suite";b.innerHTML=testsSuiteTemplate;var d=Utils.getObjectUsingPath(c.PACKAGE_NAME+".local.TestsSuite"),e=Utils.getObjectUsingPath(c.PACKAGE_NAME+".local.BDDSuite");a.appendChild(b);renderTestsToNode(b.children[1],d,e)}
function renderTestsToNode(a,c,b){a.innerHTML="";if(b){b.unitTestsNode=a;b=b.children;for(var d=0;d<b.length;d++)addBDDTest(a,b[d])}if(c)for(c.unitTestsNode=a,b=c.tests,d=0;d<b.length;d++)addTest(a,b[d])}function prepareVendorNode(a){var c=document.createElement("div");c.innerHTML="<a class='plain' href='#-2'>"+a+"</a>";c.className="vendor";c.children[0].onclick=function(){var a=this.ishidden?"show":"hide";this.ishidden=!this.ishidden;this.parentNode.className="vendor "+a};return c}
function findTags(a,c){c=c||[];Utils.traverse(a,function(b,d,e,g){b&&b.prototype&&"superclass"!==e&&b.prototype instanceof qubit.opentag.BaseTag&&b!==qubit.opentag.BaseTag&&b!==qubit.opentag.LibraryTag&&b!==qubit.opentag.CustomTag&&a.Tag!==b&&c.push(b)},{objectsOnly:!0,track:!0});return c}
(function(){function a(a){this.config=a||{};a&&(this.libraryNode=document.createElement("div"),this.config.parentContainer.appendChild(this.libraryNode),this.init(this.paint.bind(this)))}var c=document.getElementById("library-template").innerHTML,b=qubit.opentag.Utils;b.clazz("ui.Library",a);a.prototype.paint=function(a){this.painted=!0;this.renderLibraryToNode(this.config.libraryClass,this.libraryNode,a||"hide")};a.prototype.init=function(a){var c=APP_PATH+"getClassPath?classPath=libraries."+this.config.libraryClass.prototype.PACKAGE_NAME+
".local&file=Config.js";try{GET(c,function(c){try{b.geval(c)}catch(e){}a&&a()})}catch(g){(a,g)&&a()}};a.prototype.renderLibraryToNode=function(a,e,g,f){f=f||{};var h=new a;h.unregister();if(f.parameters&&h.config.parameters)for(var l=0;l<f.parameters.length;l++)for(var m=f.parameters[l].token,p=0;p<h.config.parameters.length;p++)h.config.parameters[p].token===m&&(h.config.parameters[p].inputVariable=f.parameters[l].inputVariable);f=h.PACKAGE_NAME+"."+h.CLASS_NAME;e||(e=document.getElementById(f),
b.removeClass(e,"tests-failed"),b.removeClass(e,"tests-passed"),b.removeClass(e,"tests-notests"));e.setAttribute("library-node","true");e.innerHTML=c;l="";a.versionClassPath&&(l=a.prototype.PACKAGE_NAME.replace(a.versionClassPath+".",""),l=l.replace(/\._(\d)/g,".$1"),l="<span class='version-title'> ("+l+") </span>");e.children[0].children[1].innerHTML=h.config.name+l+"<a href='#-3' onclick='saveNewVersion(this, arguments[0]);'> clone </a>";b.addClass(e,"library");g&&b.addClass(e,g);e.reference=h;
e.libraryWidget=this;e.classReference=a;e.id=f;a=h.config.parameters;g=e.children[7].children[0];e=e.children[7].children[1];try{var n=b.getObjectUsingPath(h.PACKAGE_NAME+".local.Config");if(n&&n.parameters)for(var k=n.parameters,n=0;n<a.length;n++){var t=a[n];for(f=0;f<k.length;f++)if(t.token&&t.token===k[f].token){var q=a[n].inputVariable,x=a[n].uv;a[n]=k[f];q&&(a[n].inputVariable=q);x&&(a[n].uv=x);break}}}catch(v){}g.children[0].innerHTML=(h.config.imageUrl?"<img class='logo' src='"+h.config.imageUrl+
"' align='right' />":"")+h.config.description;(new ui.Parameters({parentContainer:e,params:a})).paint();addConfig(e,h.config);addPrePostTemplate(e,h);addTestsSuite(e,h)}})();Utils=qubit.opentag.Utils;window.LIBRARIES={};
function renderAllLibrariesToPage(){var a=document.getElementById("libraries");a.innerHTML="";var c=[],b=qubit.opentag.libraries,d;for(d in b){var e=b[d],g=prepareVendorNode(d),f;for(f in e)try{var h=e[f].Tag,l=[d,f].join(".");if(h){var m=new h({}),l=h.prototype.PACKAGE_NAME;m.unregister();m instanceof qubit.opentag.LibraryTag&&c.push([g,h,m])}for(var p=findTags(e[f]),n=0;n<p.length;n++){var k=new p[n]({});k.unregister();p[n].versionClassPath=l;c.push([g,p[n],k])}}catch(t){window.console&&console.log?
(console.log("Failed to load tag configuration, possible syntax error:"+t),info("Failed to load tag configuration, possible syntax error:"+t)):logError("Failed to load tag configuration, possible syntax error:"+t)}c.sort(function(a,b){var c=a[1],e=b[1],d=a[2].config,f=b[2].config;return d.name===f.name?(f=d="",c.versionClassPath&&(d=c.prototype.PACKAGE_NAME.replace(c.versionClassPath+".","")),e.versionClassPath&&(f=e.prototype.PACKAGE_NAME.replace(e.versionClassPath+".","")),compareVersions(d,f)):
d.name>f.name?1:d.name===f.name?0:-1});q+=c.length;a.appendChild(g)}var q=c.length,x=0;theProgressBar("Rendering...",function(){return x/q*100});var v=!1;(function(a){var b=0,c=function(){for(var e=0;8>e;e++){x++;if(b===a.length){v||setTimeout(bodyLoaded,200);v=!0;return}var d=a[b][1],f=new ui.Library({parentContainer:a[b][0],libraryClass:d});LIBRARIES[d.PACKAGE_NAME+"."+d.CLASS_NAME]=f;b++}setTimeout(c,4)};c()})(c)}var total=1,counted=0;
function loadAllLibs(a){GET(LIBRARIES_REPO_LOC+"shared/bin/html/scripts.txt",function(c){var b=[];c=c.split(",");c.push("shared/bin/html/js/build-location.js");total=1;counted=0;if(!a){a=[];for(var d=0;d<c.length;d++)c[d]&&-1==c[d].indexOf("shared/js/tagsdk-current.js")&&a.push(c[d])}theProgressBar("Loading scipts",function(){return 0===counted?0:counted/(a.length+total)*100});var e=0,g=function(){if(e!==a.length){var c=e;e++;var d=LIBRARIES_REPO_LOC+a[c];setTimeout(function(){_loadSingle(d,c,g,a,
b)},0)}};g()})}
function compareVersions(a,c){var b=a.replace(/\./g,".").split("."),d=c.replace(/\./g,".").split("."),e=null;if(b.length&&d.length){var g=b[0].replace(/[^\d+]/g,".").split("."),g=g[g.length-1],f=d[0].replace(/[^\d+]/g,".").split("."),f=f[f.length-1],h=b[0].substring(0,b[0].lastIndexOf(g)),l=d[0].substring(0,d[0].lastIndexOf(f));h!==l||isNaN(+g)||isNaN(+f)?b[0]>d[0]?e=!0:b[0]<d[0]&&(e=!1):+g<+f?e=!0:+g>+f&&(e=!1)}if(null===e)for(g=1;g<b.length&&g<d.length;g++)if(f=d[g],h=b[g],"0"!==h.charAt(0)&&"0"!==
f.charAt(0)||0===g||(h="0."+h,f="0."+f),!isNaN(+h)&&!isNaN(+f))if(+h<+f){e=!0;break}else{if(+h>+f){e=!1;break}}else if(h<f){e=!0;break}else if(h>f){e=!1;break}b.length!==d.length&&null===e&&(e=b.length<d.length);return!0===e?1:null===e?0:-1}function _loadSingle(a,c,b,d,e){GET(a,function(g,f){try{e[c]={expr:g,url:a},log(a),counted++,d.length===counted&&_allScriptsFetched(e)}finally{b&&b()}})}
function _allScriptsFetched(a){for(var c=0;c<a.length;c++)try{eval(a[c].expr)}catch(b){logError("Failed to load: "+a[c].url+"\nException: "+b)}theProgressBar.title+=", rendering... ";listScripts(a);setTimeout(function(){counted++;renderAllLibrariesToPage();window.toggleConsole();qubit.opentag.Log.LEVEL=3;qubit.opentag.Log.COLLECT_LEVEL=5},50)}
function keepRunningTests(){-1!==location.href.indexOf("runTests=true")&&(info("Running tests..."),runAllTests(function(){countdown("Automatically running tests... ",10);setTimeout(keepRunningTests,1E4)}))}function countdown(a,c,b){if(!(0>=c)){info(a+c+(b||""),1E3,"countdown");var d=c-1;setTimeout(function(){countdown(a,d)},1E3)}}function listScripts(a){}function bodyLoaded(){setTimeout(keepRunningTests,1E3)}
window.Main=function(){window.qlog=new qconsole;window.toggleConsole=function(){qlog.hidden?qlog.show():qlog.hide()};window.logError=function(a,c){log("<span style='color: red'>"+a+"</span>");info("<span style='color: #FF766F'>"+a+"</span>",c||5E3)};window.info=function(a,c,b){DefaultNotificationsMgr.notify(b||(new Date).valueOf(),a,c||2800,"",!0);log(a)};window.log=function(a){qlog.log(a)};Suite.log=Test.log=function(a){log(a)};loadAllLibs();window.DefaultNotificationsMgr=new NotificationManager({maxTime:4E3})};