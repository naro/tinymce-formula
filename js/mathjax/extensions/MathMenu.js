!function(e,t,o,n,i){var a=MathJax.Callback.Signal("menu");MathJax.Extension.MathMenu={version:"2.7.3",signal:a};var s,r,u,l=function(e){return MathJax.Localization._.apply(MathJax.Localization,[["MathMenu",e]].concat([].slice.call(arguments,1)))},h=MathJax.Object.isArray,d=e.Browser.isPC,c=e.Browser.isMSIE,m=(document.documentMode||0)>8,M=d?null:"5px",f=e.CombineConfig("MathMenu",{delay:150,showRenderer:!0,showMathPlayer:!0,showFontMenu:!1,showContext:!1,showDiscoverable:!1,showLocale:!0,showLocaleURL:!1,semanticsAnnotations:{TeX:["TeX","LaTeX","application/x-tex"],StarMath:["StarMath 5.0"],Maple:["Maple"],ContentMathML:["MathML-Content","application/mathml-content+xml"],OpenMath:["OpenMath"]},windowSettings:{status:"no",toolbar:"no",locationbar:"no",menubar:"no",directories:"no",personalbar:"no",resizable:"yes",scrollbars:"yes",width:400,height:300,left:Math.round((screen.width-400)/2),top:Math.round((screen.height-300)/3)},styles:{"#MathJax_About":{position:"fixed",left:"50%",width:"auto","text-align":"center",border:"3px outset",padding:"1em 2em","background-color":"#DDDDDD",color:"black",cursor:"default","font-family":"message-box","font-size":"120%","font-style":"normal","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap",float:"none","z-index":201,"border-radius":"15px","-webkit-border-radius":"15px","-moz-border-radius":"15px","-khtml-border-radius":"15px","box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},"#MathJax_About.MathJax_MousePost":{outline:"none"},".MathJax_Menu":{position:"absolute","background-color":"white",color:"black",width:"auto",padding:d?"2px":"5px 0px",border:"1px solid #CCCCCC",margin:0,cursor:"default",font:"menu","text-align":"left","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap",float:"none","z-index":201,"border-radius":M,"-webkit-border-radius":M,"-moz-border-radius":M,"-khtml-border-radius":M,"box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_MenuItem":{padding:d?"2px 2em":"1px 2em",background:"transparent"},".MathJax_MenuArrow":{position:"absolute",right:".5em","padding-top":".25em",color:"#666666","font-family":c?"'Arial unicode MS'":null,"font-size":".75em"},".MathJax_MenuActive .MathJax_MenuArrow":{color:"white"},".MathJax_MenuArrow.RTL":{left:".5em",right:"auto"},".MathJax_MenuCheck":{position:"absolute",left:".7em","font-family":c?"'Arial unicode MS'":null},".MathJax_MenuCheck.RTL":{right:".7em",left:"auto"},".MathJax_MenuRadioCheck":{position:"absolute",left:d?"1em":".7em"},".MathJax_MenuRadioCheck.RTL":{right:d?"1em":".7em",left:"auto"},".MathJax_MenuLabel":{padding:d?"2px 2em 4px 1.33em":"1px 2em 3px 1.33em","font-style":"italic"},".MathJax_MenuRule":{"border-top":d?"1px solid #CCCCCC":"1px solid #DDDDDD",margin:d?"4px 1px 0px":"4px 3px"},".MathJax_MenuDisabled":{color:"GrayText"},".MathJax_MenuActive":{"background-color":d?"Highlight":"#606872",color:d?"HighlightText":"white"},".MathJax_MenuDisabled:focus, .MathJax_MenuLabel:focus":{"background-color":"#E8E8E8"},".MathJax_ContextMenu:focus":{outline:"none"},".MathJax_ContextMenu .MathJax_MenuItem:focus":{outline:"none"},"#MathJax_AboutClose":{top:".2em",right:".2em"},".MathJax_Menu .MathJax_MenuClose":{top:"-10px",left:"-10px"},".MathJax_MenuClose":{position:"absolute",cursor:"pointer",display:"inline-block",border:"2px solid #AAA","border-radius":"18px","-webkit-border-radius":"18px","-moz-border-radius":"18px","-khtml-border-radius":"18px","font-family":"'Courier New',Courier","font-size":"24px",color:"#F0F0F0"},".MathJax_MenuClose span":{display:"block","background-color":"#AAA",border:"1.5px solid","border-radius":"18px","-webkit-border-radius":"18px","-moz-border-radius":"18px","-khtml-border-radius":"18px","line-height":0,padding:"8px 0 6px"},".MathJax_MenuClose:hover":{color:"white!important",border:"2px solid #CCC!important"},".MathJax_MenuClose:hover span":{"background-color":"#CCC!important"},".MathJax_MenuClose:hover:focus":{outline:"none"}}});e.Register.StartupHook("MathEvents Ready",function(){s=MathJax.Extension.MathEvents.Event.False,r=MathJax.Extension.MathEvents.Hover,u=MathJax.Extension.MathEvents.Event.KEY});var p=MathJax.Object.Subclass({Keydown:function(e,t){switch(e.keyCode){case u.ESCAPE:this.Remove(e,t);break;case u.RIGHT:this.Right(e,t);break;case u.LEFT:this.Left(e,t);break;case u.UP:this.Up(e,t);break;case u.DOWN:this.Down(e,t);break;case u.RETURN:case u.SPACE:this.Space(e,t);break;default:return}return s(e)},Escape:function(e,t){},Right:function(e,t){},Left:function(e,t){},Up:function(e,t){},Down:function(e,t){},Space:function(e,t){}},{}),x=MathJax.Menu=p.Subclass({version:"2.7.3",items:[],posted:!1,title:null,margin:5,Init:function(e){this.items=[].slice.call(arguments,0)},With:function(t){return t&&e.Insert(this,t),this},Post:function(e,o,n){e||(e=window.event||{});var i=document.getElementById("MathJax_MenuFrame");i||(i=x.Background(this),delete v.lastItem,delete v.lastMenu,delete x.skipUp,a.Post(["post",x.jax]),x.isRTL="rtl"===MathJax.Localization.fontDirection());var r=t.Element("div",{onmouseup:x.Mouseup,ondblclick:s,ondragstart:s,onselectstart:s,oncontextmenu:s,menuItem:this,className:"MathJax_Menu",onkeydown:x.Keydown,role:"menu"});"contextmenu"!==e.type&&"mouseover"!==e.type||(r.className+=" MathJax_ContextMenu"),n||MathJax.Localization.setCSS(r);for(var u=0,l=this.items.length;u<l;u++)this.items[u].Create(r);x.isMobile&&t.addElement(r,"span",{className:"MathJax_MenuClose",menu:o,ontouchstart:x.Close,ontouchend:s,onmousedown:x.Close,onmouseup:s},[["span",{},"×"]]),i.appendChild(r),this.posted=!0,r.offsetWidth&&(r.style.width=r.offsetWidth+2+"px");var h=e.pageX,c=e.pageY,m=document.body.getBoundingClientRect(),M=window.getComputedStyle?window.getComputedStyle(document.body):{marginLeft:"0px"},p=m.right-Math.min(0,m.left)+parseFloat(M.marginLeft);if(!h&&!c&&"clientX"in e&&(h=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,c=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),o){var b="left",g=o.offsetWidth;for(h=x.isMobile?30:g-2,c=0;o&&o!==i;)h+=o.offsetLeft,c+=o.offsetTop,o=o.parentNode;x.isMobile||(x.isRTL&&h-g-r.offsetWidth>this.margin||!x.isRTL&&h+r.offsetWidth>p-this.margin)&&(b="right",h=Math.max(this.margin,h-g-r.offsetWidth+6)),d||(r.style["borderRadiusTop"+b]=0,r.style["WebkitBorderRadiusTop"+b]=0,r.style["MozBorderRadiusTop"+b]=0,r.style["KhtmlBorderRadiusTop"+b]=0)}else{var w=x.CurrentNode()||e.target;if(("keydown"===e.type||!h&&!c)&&w){var C=window.pageXOffset||document.documentElement.scrollLeft,S=window.pageYOffset||document.documentElement.scrollTop,L=w.getBoundingClientRect();h=(L.right+L.left)/2+C,c=(L.bottom+L.top)/2+S}h+r.offsetWidth>p-this.margin&&(h=p-r.offsetWidth-this.margin),x.isMobile&&(h=Math.max(5,h-Math.floor(r.offsetWidth/2)),c-=20),x.skipUp=e.isContextMenu}r.style.left=h+"px",r.style.top=c+"px",document.selection&&document.selection.empty&&document.selection.empty();var E=window.pageXOffset||document.documentElement.scrollLeft,A=window.pageYOffset||document.documentElement.scrollTop;return x.Focus(r),"keydown"===e.type&&(x.skipMouseoverFromKey=!0,setTimeout(function(){delete x.skipMouseoverFromKey},f.delay)),window.scrollTo(E,A),s(e)},Remove:function(e,t){a.Post(["unpost",x.jax]);var o=document.getElementById("MathJax_MenuFrame");return o&&(o.parentNode.removeChild(o),this.msieFixedPositionBug&&detachEvent("onresize",x.Resize)),x.jax.hover&&(delete x.jax.hover.nofade,r.UnHover(x.jax)),x.Unfocus(t),"mousedown"===e.type&&x.CurrentNode().blur(),s(e)},Find:function(e){return this.FindN(1,e,[].slice.call(arguments,1))},FindId:function(e){return this.FindN(0,e,[].slice.call(arguments,1))},FindN:function(e,t,o){for(var n=0,i=this.items.length;n<i;n++)if(this.items[n].name[e]===t)return o.length?this.items[n].submenu?this.items[n].submenu.FindN(e,o[0],o.slice(1)):null:this.items[n];return null},IndexOf:function(e){return this.IndexOfN(1,e)},IndexOfId:function(e){return this.IndexOfN(0,e)},IndexOfN:function(e,t){for(var o=0,n=this.items.length;o<n;o++)if(this.items[o].name[e]===t)return o;return null},Right:function(e,t){x.Right(e,t)},Left:function(e,t){x.Left(e,t)},Up:function(e,t){var o=t.lastChild;o.menuItem.Activate(e,o)},Down:function(e,t){var o=t.firstChild;o.menuItem.Activate(e,o)},Space:function(e,t){this.Remove(e,t)}},{config:f,Remove:function(e){return x.Event(e,this,"Remove")},Mouseover:function(e){return x.Event(e,this,"Mouseover")},Mouseout:function(e){return x.Event(e,this,"Mouseout")},Mousedown:function(e){return x.Event(e,this,"Mousedown")},Mouseup:function(e){return x.Event(e,this,"Mouseup")},Keydown:function(e){return x.Event(e,this,"Keydown")},Touchstart:function(e){return x.Event(e,this,"Touchstart")},Touchend:function(e){return x.Event(e,this,"Touchend")},Close:function(e){return x.Event(e,this.menu||this.parentNode,this.menu?"Touchend":"Remove")},Event:function(e,t,o,n){if(x.skipMouseover&&"Mouseover"===o&&!n)return s(e);if(x.skipMouseoverFromKey&&"Mouseover"===o)return delete x.skipMouseoverFromKey,s(e);if(x.skipUp){if(o.match(/Mouseup|Touchend/))return delete x.skipUp,s(e);("Touchstart"===o||"Mousedown"===o&&!x.skipMousedown)&&delete x.skipUp}e||(e=window.event);var i=t.menuItem;return i&&i[o]?i[o](e,t):null},BGSTYLE:{position:"absolute",left:0,top:0,"z-index":200,width:"100%",height:"100%",border:0,padding:0,margin:0},Background:function(e){var o=t.addElement(document.body,"div",{style:this.BGSTYLE,id:"MathJax_MenuFrame"},[["div",{style:this.BGSTYLE,menuItem:e,onmousedown:this.Remove}]]),n=o.firstChild;return x.msieBackgroundBug&&(n.style.backgroundColor="white",n.style.filter="alpha(opacity=0)"),x.msieFixedPositionBug?(o.width=o.height=0,this.Resize(),attachEvent("onresize",this.Resize)):n.style.position="fixed",o},Resize:function(){setTimeout(x.SetWH,0)},SetWH:function(){var e=document.getElementById("MathJax_MenuFrame");e&&(e=e.firstChild,e.style.width=e.style.height="1px",e.style.width=document.body.scrollWidth+"px",e.style.height=document.body.scrollHeight+"px")},posted:!1,active:null,GetNode:function(e){var t=document.getElementById(e.inputID+"-Frame");return t.isMathJax?t:t.firstChild},CurrentNode:function(){return x.GetNode(x.jax)},AllNodes:function(){for(var e,t=MathJax.Hub.getAllJax(),o=[],n=0;e=t[n];n++)o.push(x.GetNode(e));return o},ActiveNode:function(){return x.active},FocusNode:function(e){x.active=e,e.focus()},Focus:function(e){x.posted?x.ActiveNode().tabIndex=-1:x.Activate(e),e.tabIndex=0,x.FocusNode(e)},Activate:function(e,t){x.UnsetTabIndex(),x.posted=!0},Unfocus:function(){x.ActiveNode().tabIndex=-1,x.SetTabIndex(),x.FocusNode(x.CurrentNode()),x.posted=!1},MoveHorizontal:function(e,t,o){if(e.shiftKey){var n=x.AllNodes(),i=n.length;if(0!==i){var a=n[x.Mod(o(x.IndexOf(n,x.CurrentNode())),i)];a!==x.CurrentNode()&&(x.menu.Remove(e,t),x.jax=MathJax.Hub.getJaxFor(a),x.FocusNode(a),x.menu.Post(null))}}},Right:function(e,t){x.MoveHorizontal(e,t,function(e){return e+1})},Left:function(e,t){x.MoveHorizontal(e,t,function(e){return e-1})},UnsetTabIndex:function(){for(var e,t=x.AllNodes(),o=0;e=t[o];o++)e.tabIndex>0&&(e.oldTabIndex=e.tabIndex),e.tabIndex=-1},SetTabIndex:function(){for(var t,o=x.AllNodes(),n=0;t=o[n];n++)void 0!==t.oldTabIndex?(t.tabIndex=t.oldTabIndex,delete t.oldTabIndex):t.tabIndex=e.getTabOrder(t)},Mod:function(e,t){return(e%t+t)%t},IndexOf:Array.prototype.indexOf?function(e,t,o){return e.indexOf(t,o)}:function(e,t,o){for(var n=o||0,i=e.length;n<i;n++)if(t===e[n])return n;return-1},saveCookie:function(){t.Cookie.Set("menu",this.cookie)},getCookie:function(){this.cookie=t.Cookie.Get("menu")}});MathJax.Menu.NAV=p;var v=x.ITEM=p.Subclass({name:"",node:null,menu:null,Attributes:function(t){return e.Insert({onmouseup:x.Mouseup,ondragstart:s,onselectstart:s,onselectend:s,ontouchstart:x.Touchstart,ontouchend:x.Touchend,className:"MathJax_MenuItem",role:this.role,menuItem:this},t)},Create:function(e){if(!this.hidden){var o=this.Attributes(),n=this.Label(o,e);t.addElement(e,"div",o,n)}},Name:function(){return l(this.name[0],this.name[1])},Mouseover:function(e,t){t.parentNode===x.ActiveNode().parentNode&&this.Deactivate(x.ActiveNode()),this.Activate(e,t)},Mouseout:function(e,t){this.Deactivate(t)},Mouseup:function(e,t){return this.Remove(e,t)},DeactivateSubmenus:function(e){for(var t=document.getElementById("MathJax_MenuFrame").childNodes,o=v.GetMenuNode(e).childNodes,n=0,i=o.length;n<i;n++){var a=o[n].menuItem;a&&a.submenu&&a.submenu.posted&&a!==e.menuItem&&a.Deactivate(o[n])}this.RemoveSubmenus(e,t)},RemoveSubmenus:function(e,t){t=t||document.getElementById("MathJax_MenuFrame").childNodes;for(var o=t.length-1;o>=0&&v.GetMenuNode(e).menuItem!==t[o].menuItem;)t[o].menuItem.posted=!1,t[o].parentNode.removeChild(t[o]),o--},Touchstart:function(e,t){return this.TouchEvent(e,t,"Mousedown")},Touchend:function(e,t){return this.TouchEvent(e,t,"Mouseup")},TouchEvent:function(e,t,o){return this!==v.lastItem&&(v.lastMenu&&x.Event(e,v.lastMenu,"Mouseout"),x.Event(e,t,"Mouseover",!0),v.lastItem=this,v.lastMenu=t),this.nativeTouch?null:(x.Event(e,t,o),!1)},Remove:function(e,t){return t=t.parentNode.menuItem,t.Remove(e,t)},With:function(t){return t&&e.Insert(this,t),this},isRTL:function(){return x.isRTL},rtlClass:function(){return this.isRTL()?" RTL":""}},{GetMenuNode:function(e){return e.parentNode}});x.ENTRY=x.ITEM.Subclass({role:"menuitem",Attributes:function(t){return t=e.Insert({onmouseover:x.Mouseover,onmouseout:x.Mouseout,onmousedown:x.Mousedown,onkeydown:x.Keydown,"aria-disabled":!!this.disabled},t),t=this.SUPER(arguments).Attributes.call(this,t),this.disabled&&(t.className+=" MathJax_MenuDisabled"),t},MoveVertical:function(e,t,o){for(var n,i=v.GetMenuNode(t),a=[],s=0,r=i.menuItem.items;n=r[s];s++)n.hidden||a.push(n);var u=x.IndexOf(a,this);if(-1!==u){var l=a.length,h=i.childNodes;do{u=x.Mod(o(u),l)}while(a[u].hidden||!h[u].role||"separator"===h[u].role);this.Deactivate(t),a[u].Activate(e,h[u])}},Up:function(e,t){this.MoveVertical(e,t,function(e){return e-1})},Down:function(e,t){this.MoveVertical(e,t,function(e){return e+1})},Right:function(e,t){this.MoveHorizontal(e,t,x.Right,!this.isRTL())},Left:function(e,t){this.MoveHorizontal(e,t,x.Left,this.isRTL())},MoveHorizontal:function(e,t,o,n){var i=v.GetMenuNode(t);if(i.menuItem===x.menu&&e.shiftKey&&o(e,t),!n){i.menuItem!==x.menu&&this.Deactivate(t);for(var a=i.previousSibling.childNodes,s=a.length;s--;){var r=a[s];if(r.menuItem.submenu&&r.menuItem.submenu===i.menuItem){x.Focus(r);break}}this.RemoveSubmenus(t)}},Space:function(e,t){this.Mouseup(e,t)},Activate:function(e,t){this.Deactivate(t),this.disabled||(t.className+=" MathJax_MenuActive"),this.DeactivateSubmenus(t),x.Focus(t)},Deactivate:function(e){e.className=e.className.replace(/ MathJax_MenuActive/,"")}}),x.ITEM.COMMAND=x.ENTRY.Subclass({action:function(){},Init:function(e,t,o){h(e)||(e=[e,e]),this.name=e,this.action=t,this.With(o)},Label:function(e,t){return[this.Name()]},Mouseup:function(e,t){return this.disabled||(this.Remove(e,t),a.Post(["command",this]),this.action.call(this,e)),s(e)}}),x.ITEM.SUBMENU=x.ENTRY.Subclass({submenu:null,marker:"►",markerRTL:"◄",Attributes:function(t){return t=e.Insert({"aria-haspopup":"true"},t),t=this.SUPER(arguments).Attributes.call(this,t)},Init:function(e,t){h(e)||(e=[e,e]),this.name=e;var o=1;t instanceof x.ITEM||(this.With(t),o++),this.submenu=x.apply(x,[].slice.call(arguments,o))},Label:function(e,t){return this.submenu.posted=!1,[this.Name()+" ",["span",{className:"MathJax_MenuArrow"+this.rtlClass()},[this.isRTL()?this.markerRTL:this.marker]]]},Timer:function(e,t){this.ClearTimer(),e={type:e.type,clientX:e.clientX,clientY:e.clientY},this.timer=setTimeout(n(["Mouseup",this,e,t]),f.delay)},ClearTimer:function(){this.timer&&clearTimeout(this.timer)},Touchend:function(e,t){var o=this.submenu.posted,n=this.SUPER(arguments).Touchend.apply(this,arguments);return o&&(this.Deactivate(t),delete v.lastItem,delete v.lastMenu),n},Mouseout:function(e,t){this.submenu.posted||this.Deactivate(t),this.ClearTimer()},Mouseover:function(e,t){this.Activate(e,t)},Mouseup:function(e,t){return this.disabled||(this.submenu.posted?this.DeactivateSubmenus(t):(this.ClearTimer(),this.submenu.Post(e,t,this.ltr),x.Focus(t))),s(e)},Activate:function(e,t){this.disabled||(this.Deactivate(t),t.className+=" MathJax_MenuActive"),this.submenu.posted||(this.DeactivateSubmenus(t),x.isMobile||this.Timer(e,t)),x.Focus(t)},MoveVertical:function(e,t,o){this.ClearTimer(),this.SUPER(arguments).MoveVertical.apply(this,arguments)},MoveHorizontal:function(e,t,o,n){if(!n)return void this.SUPER(arguments).MoveHorizontal.apply(this,arguments);if(!this.disabled){if(!this.submenu.posted)return void this.Activate(e,t);var i=v.GetMenuNode(t).nextSibling.childNodes;i.length>0&&this.submenu.items[0].Activate(e,i[0])}}}),x.ITEM.RADIO=x.ENTRY.Subclass({variable:null,marker:d?"●":"✓",role:"menuitemradio",Attributes:function(t){var o=f.settings[this.variable]===this.value?"true":"false";return t=e.Insert({"aria-checked":o},t),t=this.SUPER(arguments).Attributes.call(this,t)},Init:function(e,t,o){h(e)||(e=[e,e]),this.name=e,this.variable=t,this.With(o),null==this.value&&(this.value=this.name[0])},Label:function(e,t){var o={className:"MathJax_MenuRadioCheck"+this.rtlClass()};return f.settings[this.variable]!==this.value&&(o={style:{display:"none"}}),[["span",o,[this.marker]]," "+this.Name()]},Mouseup:function(e,t){if(!this.disabled){for(var o=t.parentNode.childNodes,n=0,i=o.length;n<i;n++){var r=o[n].menuItem;r&&r.variable===this.variable&&(o[n].firstChild.style.display="none")}t.firstChild.display="",f.settings[this.variable]=this.value,x.cookie[this.variable]=f.settings[this.variable],x.saveCookie(),a.Post(["radio button",this])}return this.Remove(e,t),this.action&&!this.disabled&&this.action.call(x,this),s(e)}}),x.ITEM.CHECKBOX=x.ENTRY.Subclass({variable:null,marker:"✓",role:"menuitemcheckbox",Attributes:function(t){var o=f.settings[this.variable]?"true":"false";return t=e.Insert({"aria-checked":o},t),t=this.SUPER(arguments).Attributes.call(this,t)},Init:function(e,t,o){h(e)||(e=[e,e]),this.name=e,this.variable=t,this.With(o)},Label:function(e,t){var o={className:"MathJax_MenuCheck"+this.rtlClass()};return f.settings[this.variable]||(o={style:{display:"none"}}),[["span",o,[this.marker]]," "+this.Name()]},Mouseup:function(e,t){return this.disabled||(t.firstChild.display=f.settings[this.variable]?"none":"",f.settings[this.variable]=!f.settings[this.variable],x.cookie[this.variable]=f.settings[this.variable],x.saveCookie(),a.Post(["checkbox",this])),this.Remove(e,t),this.action&&!this.disabled&&this.action.call(x,this),s(e)}}),x.ITEM.LABEL=x.ENTRY.Subclass({role:"menuitem",Init:function(e,t){h(e)||(e=[e,e]),this.name=e,this.With(t)},Label:function(e,t){return e.className+=" MathJax_MenuLabel",[this.Name()]},Activate:function(e,t){this.Deactivate(t),x.Focus(t)},Mouseup:function(e,t){}}),x.ITEM.RULE=x.ITEM.Subclass({role:"separator",Attributes:function(t){return t=e.Insert({"aria-orientation":"vertical"},t),t=this.SUPER(arguments).Attributes.call(this,t)},Label:function(e,t){return e.className+=" MathJax_MenuRule",null}}),x.About=function(o){var n=x.About.GetFont(),i=x.About.GetFormat(),a=["MathJax.js v"+MathJax.fileversion,["br"]];a.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]),x.About.GetJax(a,MathJax.InputJax,["InputJax","%1 Input Jax v%2"]),x.About.GetJax(a,MathJax.OutputJax,["OutputJax","%1 Output Jax v%2"]),x.About.GetJax(a,MathJax.ElementJax,["ElementJax","%1 Element Jax v%2"]),a.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]),x.About.GetJax(a,MathJax.Extension,["Extension","%1 Extension v%2"],!0),a.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}],["center",{},[e.Browser+" v"+e.Browser.version+(i?" — "+l(i.replace(/ /g,""),i):"")]]),x.About.div=x.Background(x.About);var s=t.addElement(x.About.div,"div",{id:"MathJax_About",tabIndex:0,onkeydown:x.About.Keydown},[["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+MathJax.version,["br"],l(n.replace(/ /g,""),"using "+n),["br"],["br"],["span",{style:{display:"inline-block","text-align":"left","font-size":"80%","max-height":"20em",overflow:"auto","background-color":"#E4E4E4",padding:".4em .6em",border:"1px inset"},tabIndex:0},a],["br"],["br"],["a",{href:"http://www.mathjax.org/"},["www.mathjax.org"]],["span",{className:"MathJax_MenuClose",id:"MathJax_AboutClose",onclick:x.About.Remove,onkeydown:x.About.Keydown,tabIndex:0,role:"button","aria-label":l("CloseAboutDialog","Close about MathJax dialog")},[["span",{},"×"]]]]);"mouseup"===o.type&&(s.className+=" MathJax_MousePost"),s.focus(),MathJax.Localization.setCSS(s);var r=document.documentElement||{},u=window.innerHeight||r.clientHeight||r.scrollHeight||0;x.prototype.msieAboutBug?(s.style.width="20em",s.style.position="absolute",s.style.left=Math.floor((document.documentElement.scrollWidth-s.offsetWidth)/2)+"px",s.style.top=Math.floor((u-s.offsetHeight)/3)+document.body.scrollTop+"px"):(s.style.marginLeft=Math.floor(-s.offsetWidth/2)+"px",s.style.top=Math.floor((u-s.offsetHeight)/3)+"px")},x.About.Remove=function(e){x.About.div&&(document.body.removeChild(x.About.div),delete x.About.div)},x.About.Keydown=function(e){e.keyCode!==u.ESCAPE&&("MathJax_AboutClose"!==this.id||e.keyCode!==u.SPACE&&e.keyCode!==u.RETURN)||(x.About.Remove(e),x.CurrentNode().focus(),s(e))},x.About.GetJax=function(e,t,o,n){var i=[];for(var a in t)t.hasOwnProperty(a)&&t[a]&&(n&&t[a].version||t[a].isa&&t[a].isa(t))&&i.push(l(o[0],o[1],t[a].id||a,t[a].version));i.sort();for(var s=0,r=i.length;s<r;s++)e.push(i[s],["br"]);return e},x.About.GetFont=function(){var e=MathJax.Hub.outputJax["jax/mml"][0]||{};return({SVG:"web SVG",CommonHTML:"web TeX","HTML-CSS":e.imgFonts?"image":(e.webFonts?"web":"local")+" "+e.fontInUse}[e.id]||"generic")+" fonts"},x.About.GetFormat=function(){var e=MathJax.Hub.outputJax["jax/mml"][0]||{};if("HTML-CSS"===e.id&&e.webFonts&&!e.imgFonts)return e.allowWebFonts.replace(/otf/,"woff or otf")+" fonts"},x.Help=function(e){o.Require("[MathJax]/extensions/HelpDialog.js",function(){MathJax.Extension.Help.Dialog({type:e.type})})},x.ShowSource=function(e){e||(e=window.event);var t={screenX:e.screenX,screenY:e.screenY};if(x.jax)if("MathML"===this.format){var i=MathJax.ElementJax.mml;if(i&&void 0!==i.mbase.prototype.toMathML)try{x.ShowSource.Text(x.jax.root.toMathML("",x.jax),e)}catch(e){if(!e.restart)throw e;n.After([this,x.ShowSource,t],e.restart)}else if(!o.loadingToMathML)return o.loadingToMathML=!0,x.ShowSource.Window(e),void n.Queue(o.Require("[MathJax]/extensions/toMathML.js"),function(){delete o.loadingToMathML,i.mbase.prototype.toMathML||(i.mbase.prototype.toMathML=function(){})},[this,x.ShowSource,t])}else if("Error"===this.format)x.ShowSource.Text(x.jax.errorText,e);else if(f.semanticsAnnotations[this.format]){var a=x.jax.root.getAnnotation(this.format);a.data[0]&&x.ShowSource.Text(a.data[0].toString())}else{if(null==x.jax.originalText)return void alert(l("NoOriginalForm","No original form available"));x.ShowSource.Text(x.jax.originalText,e)}},x.ShowSource.Window=function(e){if(!x.ShowSource.w){var t=[],o=f.windowSettings;for(var n in o)o.hasOwnProperty(n)&&t.push(n+"="+o[n]);x.ShowSource.w=window.open("","_blank",t.join(","))}return x.ShowSource.w},x.ShowSource.Text=function(e,t){var o=x.ShowSource.Window(t);delete x.ShowSource.w,e=e.replace(/^\s*/,"").replace(/\s*$/,""),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");var n=l("EqSource","MathJax Equation Source");if(x.isMobile)o.document.open(),o.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>"+n+"</title></head><body style='font-size:85%'>"),o.document.write("<pre>"+e+"</pre>"),o.document.write("<hr><input type='button' value='"+l("Close","Close")+"' onclick='window.close()' />"),o.document.write("</body></html>"),o.document.close();else{o.document.open(),o.document.write("<html><head><title>"+n+"</title></head><body style='font-size:85%'>"),o.document.write("<table><tr><td><pre>"+e+"</pre></td></tr></table>"),o.document.write("</body></html>"),o.document.close();var i=o.document.body.firstChild;setTimeout(function(){var e,n,a=o.outerHeight-o.innerHeight||30,s=o.outerWidth-o.innerWidth||30;s=Math.max(140,Math.min(Math.floor(.5*screen.width),i.offsetWidth+s+25)),a=Math.max(40,Math.min(Math.floor(.5*screen.height),i.offsetHeight+a+25)),x.prototype.msieHeightBug&&(a+=35),o.resizeTo(s,a);var r;try{r=t.screenX}catch(e){}t&&null!=r&&(e=Math.max(0,Math.min(t.screenX-Math.floor(s/2),screen.width-s-20)),n=Math.max(0,Math.min(t.screenY-Math.floor(a/2),screen.height-a-20)),o.moveTo(e,n))},50)}},x.Scale=function(){var t,o,n=["CommonHTML","HTML-CSS","SVG","NativeMML","PreviewHTML"],a=n.length,s=100;for(t=0;t<a;t++)if(o=i[n[t]]){s=o.config.scale;break}var r=prompt(l("ScaleMath","Scale all mathematics (compared to surrounding text) by"),s+"%");if(r)if(r.match(/^\s*\d+(\.\d*)?\s*%?\s*$/))if(r=parseFloat(r)){if(r!==s){for(t=0;t<a;t++)(o=i[n[t]])&&(o.config.scale=r);x.cookie.scale=e.config.scale=r,x.saveCookie(),e.Queue(["Rerender",e])}}else alert(l("NonZeroScale","The scale should not be zero"));else alert(l("PercentScale","The scale should be a percentage (e.g., 120%%)"))},x.Zoom=function(){MathJax.Extension.MathZoom||o.Require("[MathJax]/extensions/MathZoom.js")},x.Renderer=function(){var o=e.outputJax["jax/mml"];if(o[0]!==f.settings.renderer){var n,i,a=e.Browser,s=x.Renderer.Messages;switch(f.settings.renderer){case"NativeMML":f.settings.warnedMML||(a.isChrome&&"24."!==a.version.substr(0,3)?n=s.MML.WebKit:a.isSafari&&!a.versionAtLeast("5.0")?n=s.MML.WebKit:a.isMSIE?a.hasMathPlayer||(n=s.MML.MSIE):n=a.isEdge?s.MML.WebKit:s.MML[a],i="warnedMML");break;case"SVG":f.settings.warnedSVG||a.isMSIE&&!m&&(n=s.SVG.MSIE)}if(n){if(n=l(n[0],n[1]),n+="\n\n",n+=l("SwitchAnyway","Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)"),x.cookie.renderer=o[0].id,x.saveCookie(),!confirm(n))return x.cookie.renderer=f.settings.renderer=t.Cookie.Get("menu").renderer,void x.saveCookie();i&&(x.cookie.warned=f.settings.warned=!0),x.cookie.renderer=f.settings.renderer,x.saveCookie()}e.Queue(["setRenderer",e,f.settings.renderer,"jax/mml"],["Rerender",e])}},x.Renderer.Messages={MML:{WebKit:["WebkitNativeMMLWarning","Your browser doesn't seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable."],MSIE:["MSIENativeMMLWarning","Internet Explorer requires the MathPlayer plugin in order to process MathML output."],Opera:["OperaNativeMMLWarning","Opera's support for MathML is limited, so switching to MathML output may cause some expressions to render poorly."],Safari:["SafariNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."],Firefox:["FirefoxNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."]},SVG:{MSIE:["MSIESVGWarning","SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly."]}},x.AssistiveMML=function(e,t){var n=MathJax.Extension.AssistiveMML;if(!n)return void(t||o.Require("[MathJax]/extensions/AssistiveMML.js",["AssistiveMML",x,e,!0]));MathJax.Hub.Queue([(f.settings.assistiveMML?"Add":"Remove")+"AssistiveMathML",n])},x.Font=function(){i["HTML-CSS"]&&document.location.reload()},x.Locale=function(){MathJax.Localization.setLocale(f.settings.locale),MathJax.Hub.Queue(["Reprocess",MathJax.Hub])},x.LoadLocale=function(){var e=prompt(l("LoadURL","Load translation data from this URL:"));e&&(e.match(/\.js$/)||alert(l("BadURL","The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with '.js'")),o.Require(e,function(t){t!=o.STATUS.OK&&alert(l("BadData","Failed to load translation data from %1",e))}))},x.MPEvents=function(e){var t=f.settings.discoverable,o=x.MPEvents.Messages;if(m)!t&&"Menu Events"===e.name[1]&&f.settings.mpContext&&alert(l.apply(l,o.IE9warning));else{if(f.settings.mpMouse&&!confirm(l.apply(l,o.IE8warning)))return delete x.cookie.mpContext,delete f.settings.mpContext,delete x.cookie.mpMouse,delete f.settings.mpMouse,void x.saveCookie();f.settings.mpContext=f.settings.mpMouse,x.cookie.mpContext=x.cookie.mpMouse=f.settings.mpMouse,x.saveCookie(),MathJax.Hub.Queue(["Rerender",MathJax.Hub])}},x.MPEvents.Messages={IE8warning:["IE8warning","This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?"],IE9warning:["IE9warning","The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead."]},e.Browser.Select({MSIE:function(e){var t="BackCompat"===document.compatMode,o=e.versionAtLeast("8.0")&&document.documentMode>7;x.Augment({margin:20,msieBackgroundBug:(document.documentMode||0)<9,msieFixedPositionBug:t||!o,msieAboutBug:t,msieHeightBug:(document.documentMode||0)<9}),m&&(delete f.styles["#MathJax_About"].filter,delete f.styles[".MathJax_Menu"].filter)},Firefox:function(e){x.skipMouseover=e.isMobile&&e.versionAtLeast("6.0"),x.skipMousedown=e.isMobile}}),x.isMobile=e.Browser.isMobile,x.noContextMenu=e.Browser.noContextMenu,x.CreateLocaleMenu=function(){if(x.menu){var e=x.menu.Find("Language").submenu,t=e.items,o=[],n=MathJax.Localization.strings;for(var i in n)n.hasOwnProperty(i)&&o.push(i);o=o.sort(),e.items=[];for(var a=0,s=o.length;a<s;a++){var r=n[o[a]].menuTitle;r?r+=" ("+o[a]+")":r=o[a],e.items.push(v.RADIO([o[a],r],"locale",{action:x.Locale}))}e.items.push(t[t.length-2],t[t.length-1])}},x.CreateAnnotationMenu=function(){if(x.menu){var e=x.menu.Find("Show Math As","Annotation").submenu,t=f.semanticsAnnotations;for(var o in t)t.hasOwnProperty(o)&&e.items.push(v.COMMAND([o,o],x.ShowSource,{hidden:!0,nativeTouch:!0,format:o}))}},e.Register.StartupHook("End Config",function(){f.settings=e.config.menuSettings,void 0!==f.settings.showRenderer&&(f.showRenderer=f.settings.showRenderer),void 0!==f.settings.showFontMenu&&(f.showFontMenu=f.settings.showFontMenu),void 0!==f.settings.showContext&&(f.showContext=f.settings.showContext),x.getCookie(),x.menu=x(v.SUBMENU(["Show","Show Math As"],v.COMMAND(["MathMLcode","MathML Code"],x.ShowSource,{nativeTouch:!0,format:"MathML"}),v.COMMAND(["Original","Original Form"],x.ShowSource,{nativeTouch:!0}),v.SUBMENU(["Annotation","Annotation"],{disabled:!0}),v.RULE(),v.CHECKBOX(["texHints","Show TeX hints in MathML"],"texHints"),v.CHECKBOX(["semantics","Add original form as annotation"],"semantics")),v.RULE(),v.SUBMENU(["Settings","Math Settings"],v.SUBMENU(["ZoomTrigger","Zoom Trigger"],v.RADIO(["Hover","Hover"],"zoom",{action:x.Zoom}),v.RADIO(["Click","Click"],"zoom",{action:x.Zoom}),v.RADIO(["DoubleClick","Double-Click"],"zoom",{action:x.Zoom}),v.RADIO(["NoZoom","No Zoom"],"zoom",{value:"None"}),v.RULE(),v.LABEL(["TriggerRequires","Trigger Requires:"]),v.CHECKBOX(e.Browser.isMac?["Option","Option"]:["Alt","Alt"],"ALT"),v.CHECKBOX(["Command","Command"],"CMD",{hidden:!e.Browser.isMac}),v.CHECKBOX(["Control","Control"],"CTRL",{
hidden:e.Browser.isMac}),v.CHECKBOX(["Shift","Shift"],"Shift")),v.SUBMENU(["ZoomFactor","Zoom Factor"],v.RADIO("125%","zscale"),v.RADIO("133%","zscale"),v.RADIO("150%","zscale"),v.RADIO("175%","zscale"),v.RADIO("200%","zscale"),v.RADIO("250%","zscale"),v.RADIO("300%","zscale"),v.RADIO("400%","zscale")),v.RULE(),v.SUBMENU(["Renderer","Math Renderer"],{hidden:!f.showRenderer},v.RADIO(["HTML-CSS","HTML-CSS"],"renderer",{action:x.Renderer}),v.RADIO(["CommonHTML","Common HTML"],"renderer",{action:x.Renderer,value:"CommonHTML"}),v.RADIO(["PreviewHTML","Preview HTML"],"renderer",{action:x.Renderer,value:"PreviewHTML"}),v.RADIO(["MathML","MathML"],"renderer",{action:x.Renderer,value:"NativeMML"}),v.RADIO(["SVG","SVG"],"renderer",{action:x.Renderer}),v.RADIO(["PlainSource","Plain Source"],"renderer",{action:x.Renderer,value:"PlainSource"}),v.RULE(),v.CHECKBOX(["FastPreview","Fast Preview"],"FastPreview")),v.SUBMENU("MathPlayer",{hidden:!e.Browser.isMSIE||!f.showMathPlayer,disabled:!e.Browser.hasMathPlayer},v.LABEL(["MPHandles","Let MathPlayer Handle:"]),v.CHECKBOX(["MenuEvents","Menu Events"],"mpContext",{action:x.MPEvents,hidden:!m}),v.CHECKBOX(["MouseEvents","Mouse Events"],"mpMouse",{action:x.MPEvents,hidden:!m}),v.CHECKBOX(["MenuAndMouse","Mouse and Menu Events"],"mpMouse",{action:x.MPEvents,hidden:m})),v.SUBMENU(["FontPrefs","Font Preference"],{hidden:!f.showFontMenu},v.LABEL(["ForHTMLCSS","For HTML-CSS:"]),v.RADIO(["Auto","Auto"],"font",{action:x.Font}),v.RULE(),v.RADIO(["TeXLocal","TeX (local)"],"font",{action:x.Font}),v.RADIO(["TeXWeb","TeX (web)"],"font",{action:x.Font}),v.RADIO(["TeXImage","TeX (image)"],"font",{action:x.Font}),v.RULE(),v.RADIO(["STIXLocal","STIX (local)"],"font",{action:x.Font}),v.RADIO(["STIXWeb","STIX (web)"],"font",{action:x.Font}),v.RULE(),v.RADIO(["AsanaMathWeb","Asana Math (web)"],"font",{action:x.Font}),v.RADIO(["GyrePagellaWeb","Gyre Pagella (web)"],"font",{action:x.Font}),v.RADIO(["GyreTermesWeb","Gyre Termes (web)"],"font",{action:x.Font}),v.RADIO(["LatinModernWeb","Latin Modern (web)"],"font",{action:x.Font}),v.RADIO(["NeoEulerWeb","Neo Euler (web)"],"font",{action:x.Font})),v.SUBMENU(["ContextMenu","Contextual Menu"],{hidden:!f.showContext},v.RADIO(["MathJax","MathJax"],"context"),v.RADIO(["Browser","Browser"],"context")),v.COMMAND(["Scale","Scale All Math ..."],x.Scale),v.RULE().With({hidden:!f.showDiscoverable,name:["","discover_rule"]}),v.CHECKBOX(["Discoverable","Highlight on Hover"],"discoverable",{hidden:!f.showDiscoverable})),v.SUBMENU(["Accessibility","Accessibility"],v.CHECKBOX(["AssistiveMML","Assistive MathML"],"assistiveMML",{action:x.AssistiveMML}),v.CHECKBOX(["InTabOrder","Include in Tab Order"],"inTabOrder")),v.SUBMENU(["Locale","Language"],{hidden:!f.showLocale,ltr:!0},v.RADIO("en","locale",{action:x.Locale}),v.RULE().With({hidden:!f.showLocaleURL,name:["","localURL_rule"]}),v.COMMAND(["LoadLocale","Load from URL ..."],x.LoadLocale,{hidden:!f.showLocaleURL})),v.RULE(),v.COMMAND(["About","About MathJax"],x.About),v.COMMAND(["Help","MathJax Help"],x.Help)),x.isMobile&&function(){var e=f.settings,t=x.menu.Find("Math Settings","Zoom Trigger").submenu;t.items[0].disabled=t.items[1].disabled=!0,"Hover"!==e.zoom&&"Click"!=e.zoom||(e.zoom="None"),t.items=t.items.slice(0,4),navigator.appVersion.match(/[ (]Android[) ]/)&&x.ITEM.SUBMENU.Augment({marker:"»"})}(),x.CreateLocaleMenu(),x.CreateAnnotationMenu()}),x.showRenderer=function(e){x.cookie.showRenderer=f.showRenderer=e,x.saveCookie(),x.menu.Find("Math Settings","Math Renderer").hidden=!e},x.showMathPlayer=function(e){x.cookie.showMathPlayer=f.showMathPlayer=e,x.saveCookie(),x.menu.Find("Math Settings","MathPlayer").hidden=!e},x.showFontMenu=function(e){x.cookie.showFontMenu=f.showFontMenu=e,x.saveCookie(),x.menu.Find("Math Settings","Font Preference").hidden=!e},x.showContext=function(e){x.cookie.showContext=f.showContext=e,x.saveCookie(),x.menu.Find("Math Settings","Contextual Menu").hidden=!e},x.showDiscoverable=function(e){x.cookie.showDiscoverable=f.showDiscoverable=e,x.saveCookie(),x.menu.Find("Math Settings","Highlight on Hover").hidden=!e,x.menu.Find("Math Settings","discover_rule").hidden=!e},x.showLocale=function(e){x.cookie.showLocale=f.showLocale=e,x.saveCookie(),x.menu.Find("Language").hidden=!e},MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){MathJax.OutputJax["HTML-CSS"].config.imageFont||(x.menu.Find("Math Settings","Font Preference","TeX (image)").disabled=!0)}),n.Queue(e.Register.StartupHook("End Config",{}),["Styles",o,f.styles],["Post",e.Startup.signal,"MathMenu Ready"],["loadComplete",o,"[MathJax]/extensions/MathMenu.js"])}(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);