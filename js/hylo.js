/*
 *  Hyphenator_Loader 1.1.0 - client side hyphenation for webbrowsers
 *  Copyright (C) 2014  Mathias Nater, Zürich (mathias at mnn dot ch)
 *  Project and Source hosted on http://code.google.com/p/hyphenator/
 *
 *  This JavaScript code is free software: you can redistribute
 *  it and/or modify it under the terms of the GNU Lesser
 *  General Public License (GNU LGPL) as published by the Free Software
 *  Foundation, either version 3 of the License, or (at your option)
 *  any later version.  The code is distributed WITHOUT ANY WARRANTY;
 *  without even the implied warranty of MERCHANTABILITY or FITNESS
 *  FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 *  As additional permission under GNU GPL version 3 section 7, you
 *  may distribute non-source (e.g., minimized or compacted) forms of
 *  that code without the copy of the GNU GPL normally required by
 *  section 4, provided you include this license notice and a URL
 *  through which recipients can access the Corresponding Source.
 */

var Hyphenator_Loader=(function(window){'use strict';var languages,config,path,createElem=function(tagname){var r;if(window.document.createElementNS){r=window.document.createElementNS('http://www.w3.org/1999/xhtml',tagname);}else if(window.document.createElement){r=window.document.createElement(tagname);}return r;},checkLangSupport=function(lang,longword){var shadow,computedHeight,bdy=window.document.getElementsByTagName('body')[0];shadow=createElem('div');shadow.style.width='5em';shadow.style.MozHyphens='auto';shadow.style['-webkit-hyphens']='auto';shadow.style['-ms-hyphens']='auto';shadow.style.hyphens='auto';shadow.style.fontSize='12px';shadow.style.lineHeight='12px';shadow.style.visibility='hidden';shadow.lang=lang;shadow.style['-webkit-locale']="'"+lang+"'";shadow.innerHTML=longword;bdy.appendChild(shadow);computedHeight=shadow.offsetHeight;bdy.removeChild(shadow);return(computedHeight>12)?true:false;},loadNrunHyphenator=function(config){var head,script,interval;head=window.document.getElementsByTagName('head').item(0);script=createElem('script');script.src=path;script.type='text/javascript';head.appendChild(script);interval=window.setInterval(function(){if(window.Hyphenator!==undefined){window.clearInterval(interval);Hyphenator.config(config);Hyphenator.run();}},10);},runner=function(){var loadHyphenator=false,r,results={},lang;for(lang in languages){if(languages.hasOwnProperty(lang)){r=checkLangSupport(lang,languages[lang]);results[lang]=r;loadHyphenator=loadHyphenator||!r;}}if(loadHyphenator){loadNrunHyphenator(config);}},runOnContentLoaded=function(window,f){var toplevel,hyphRunForThis={},doFrames=false,contextWindow,documentLoaded,add=window.document.addEventListener?'addEventListener':'attachEvent',rem=window.document.addEventListener?'removeEventListener':'detachEvent',pre=window.document.addEventListener?'':'on',init=function(context){contextWindow=context||window;if(!hyphRunForThis[contextWindow.location.href]&&(!documentLoaded||!!contextWindow.frameElement)){documentLoaded=true;f();hyphRunForThis[contextWindow.location.href]=true;}},doScrollCheck=function(){try{window.document.documentElement.doScroll("left");}catch(error){window.setTimeout(doScrollCheck,1);return;}init(window);},doOnLoad=function(){var i,haveAccess,fl=window.frames.length;if(doFrames&&fl>0){for(i=0;i<fl;i+=1){haveAccess=undefined;try{haveAccess=window.frames[i].document.toString();}catch(e){haveAccess=undefined;}if(!!haveAccess){if(window.frames[i].location.href!=='about:blank'){init(window.frames[i]);}}}contextWindow=window;f();hyphRunForThis[window.location.href]=true;}else{init(window);}},DOMContentLoaded=function(e){if(e.type==='readystatechange'&&window.document.readyState!=='complete'){return;}window.document[rem](pre+e.type,DOMContentLoaded,false);if(!doFrames&&window.frames.length===0){init(window);}};if(window.document.readyState==="complete"||window.document.readyState==="interactive"){window.setTimeout(doOnLoad,1);}else{window.document[add](pre+"DOMContentLoaded",DOMContentLoaded,false);window.document[add](pre+'readystatechange',DOMContentLoaded,false);window[add](pre+'load',doOnLoad,false);toplevel=false;try{toplevel=!window.frameElement;}catch(ignore){}if(window.document.documentElement.doScroll&&toplevel){doScrollCheck();}}};return{init:function(langs,p,configs){languages=langs;path=p;config=configs||{};runOnContentLoaded(window,runner);}};}(window));Hyphenator_Loader.init({"en":"hyphenationalgorithm"},"./Hyphenator.js",{useCSS3hyphenation:true});
