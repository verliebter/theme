!function(a,b,c,d){"use strict";var e,f=0,g=function(){var a,b=d.userAgent,c=/msie\s\d+/i;return b.search(c)>0&&(a=c.exec(b).toString(),a=a.split(" ")[1],9>a)?!0:!1}(),h="ontouchstart"in c||d.msMaxTouchPoints>0,i=function(a){return"number"==typeof a?isNaN(a)?null:a:(a=parseFloat(a),isNaN(a)?null:a)},j={init:function(d){var j='<span class="irs"><span class="irs-line"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>',k='<span class="irs-slider single"></span>',l='<span class="irs-diapason"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>',m='<span class="irs-disable-mask"></span>';return this.each(function(){var n=a.extend({min:null,max:null,from:null,to:null,type:"single",step:null,prefix:"",postfix:"",maxPostfix:"",hasGrid:!1,gridMargin:0,hideMinMax:!1,hideFromTo:!1,prettify:!0,disable:!1,values:null,onLoad:null,onChange:null,onFinish:null},d),o=a(this),p=this,q=!1,r=null;if(!o.data("isActive")){o.data("isActive",!0),f+=1,this.plugin_count=f,o.prop("value")&&(r=o.prop("value").split(";")),"single"===n.type?r&&r.length>1?("number"!=typeof n.min?n.min=parseFloat(r[0]):"number"!=typeof n.from&&(n.from=parseFloat(r[0])),"number"!=typeof n.max&&(n.max=parseFloat(r[1]))):r&&1===r.length&&"number"!=typeof n.from&&(n.from=parseFloat(r[0])):"double"===n.type&&(r&&r.length>1?("number"!=typeof n.min?n.min=parseFloat(r[0]):"number"!=typeof n.from&&(n.from=parseFloat(r[0])),"number"!=typeof n.max?n.max=parseFloat(r[1]):"number"!=typeof n.to&&(n.to=parseFloat(r[1]))):r&&1===r.length&&("number"!=typeof n.min?n.min=parseFloat(r[0]):"number"!=typeof n.from&&(n.from=parseFloat(r[0])))),"number"==typeof o.data("min")&&(n.min=parseFloat(o.data("min"))),"number"==typeof o.data("max")&&(n.max=parseFloat(o.data("max"))),"number"==typeof o.data("from")&&(n.from=parseFloat(o.data("from"))),"number"==typeof o.data("to")&&(n.to=parseFloat(o.data("to"))),o.data("step")&&(n.step=parseFloat(o.data("step"))),o.data("type")&&(n.type=o.data("type")),o.data("prefix")&&(n.prefix=o.data("prefix")),o.data("postfix")&&(n.postfix=o.data("postfix")),o.data("maxpostfix")&&(n.maxPostfix=o.data("maxpostfix")),o.data("hasgrid")&&(n.hasGrid=o.data("hasgrid")),o.data("gridmargin")&&(n.gridMargin=+o.data("gridmargin")),o.data("hideminmax")&&(n.hideMinMax=o.data("hideminmax")),o.data("hidefromto")&&(n.hideFromTo=o.data("hidefromto")),o.data("prettify")&&(n.prettify=o.data("prettify")),o.data("disable")&&(n.disable=o.data("disable")),o.data("values")&&(n.values=o.data("values").split(",")),n.min=i(n.min),n.min||0===n.min||(n.min=10),n.max=i(n.max),n.max||0===n.max||(n.max=100),"[object Array]"!==Object.prototype.toString.call(n.values)&&(n.values=null),n.values&&n.values.length>0&&(n.min=0,n.max=n.values.length-1,n.step=1,q=!0),n.from=i(n.from),n.from||0===n.from||(n.from=n.min),n.to=i(n.to),n.to||0===n.to||(n.to=n.max),n.step=i(n.step),n.step||(n.step=1),n.from<n.min&&(n.from=n.min),n.from>n.max&&(n.from=n.min),n.to<n.min&&(n.to=n.max),n.to>n.max&&(n.to=n.max),"double"===n.type&&(n.from>n.to&&(n.from=n.to),n.to<n.from&&(n.to=n.from));var s=function(a){var b=a.toString();return n.prettify&&(b=b.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")),b},t='<span class="irs" id="irs-'+this.plugin_count+'"></span>';o[0].style.display="none",o.before(t);var u,v,w,x,y,z,A,B,C,D,E,F,G=o.prev(),H=a(b.body),I=a(c),J=!1,K=!1,L=!0,M={},N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0;parseInt(n.step,10)!==parseFloat(n.step)&&(X=n.step.toString().split(".")[1],X=Math.pow(10,X.length)),this.updateData=function(b){a.extend(n,b),Y()},this.removeSlider=function(){G.find("*").off(),I.off("mouseup.irs"+p.plugin_count),H.off("mouseup.irs"+p.plugin_count),H.off("mouseleave.irs"+p.plugin_count),H.off("mousemove.irs"+p.plugin_count),G.html("").remove(),o.data("isActive",!1),o.show()};var Y=function(){G.find("*").off(),I.off("mouseup.irs"+p.plugin_count),H.off("mouseup.irs"+p.plugin_count),H.off("mouseleave.irs"+p.plugin_count),H.off("mousemove.irs"+p.plugin_count),G.html(""),Z()},Z=function(){G.html(j),u=G.find(".irs"),v=u.find(".irs-min"),w=u.find(".irs-max"),x=u.find(".irs-from"),y=u.find(".irs-to"),z=u.find(".irs-single"),F=G.find(".irs-grid"),n.hideFromTo&&(x[0].style.visibility="hidden",y[0].style.visibility="hidden",z[0].style.visibility="hidden"),n.hideFromTo||(x[0].style.visibility="visible",y[0].style.visibility="visible",z[0].style.visibility="visible"),n.hideMinMax&&(v[0].style.visibility="hidden",w[0].style.visibility="hidden",O=0,P=0),n.hideMinMax||(v[0].style.visibility="visible",w[0].style.visibility="visible",n.values?(v.html(n.prefix+n.values[0]+n.postfix),w.html(n.prefix+n.values[n.values.length-1]+n.maxPostfix+n.postfix)):(v.html(n.prefix+s(n.min)+n.postfix),w.html(n.prefix+s(n.max)+n.maxPostfix+n.postfix)),O=v.outerWidth(!1),P=w.outerWidth(!1)),$()},$=function(){"single"===n.type?(u.append(k),A=u.find(".single"),A.on("mousedown",function(b){b.preventDefault(),b.stopPropagation(),ab(b,a(this),null),J=!0,K=!0,e=p.plugin_count,g&&a("*").prop("unselectable",!0)}),h&&A.on("touchstart",function(b){b.preventDefault(),b.stopPropagation(),ab(b.originalEvent.touches[0],a(this),null),J=!0,K=!0,e=p.plugin_count})):"double"===n.type&&(u.append(l),B=u.find(".from"),C=u.find(".to"),E=u.find(".irs-diapason"),bb(),B.on("mousedown",function(b){b.preventDefault(),b.stopPropagation(),a(this).addClass("last"),C.removeClass("last"),ab(b,a(this),"from"),J=!0,K=!0,e=p.plugin_count,g&&a("*").prop("unselectable",!0)}),C.on("mousedown",function(b){b.preventDefault(),b.stopPropagation(),a(this).addClass("last"),B.removeClass("last"),ab(b,a(this),"to"),J=!0,K=!0,e=p.plugin_count,g&&a("*").prop("unselectable",!0)}),h&&(B.on("touchstart",function(b){b.preventDefault(),b.stopPropagation(),a(this).addClass("last"),C.removeClass("last"),ab(b.originalEvent.touches[0],a(this),"from"),J=!0,K=!0,e=p.plugin_count}),C.on("touchstart",function(b){b.preventDefault(),b.stopPropagation(),a(this).addClass("last"),B.removeClass("last"),ab(b.originalEvent.touches[0],a(this),"to"),J=!0,K=!0,e=p.plugin_count})),n.to===n.max&&B.addClass("last"));var b=function(){e===p.plugin_count&&J&&(K=!1,J=!1,D.removeAttr("id"),D=null,"double"===n.type&&bb(),db(),g&&a("*").prop("unselectable",!1))};I.on("mouseup.irs"+p.plugin_count,function(){b()}),g&&H.on("mouseleave.irs"+p.plugin_count,function(){b()}),H.on("mousemove.irs"+p.plugin_count,function(a){J&&(N=a.pageX,cb())}),G.on("mousedown",function(){e=p.plugin_count}),G.on("mouseup",function(a){e===p.plugin_count&&(J||n.disable||fb(a.pageX))}),h&&(I.on("touchend",function(){J&&(K=!1,J=!1,D.removeAttr("id"),D=null,"double"===n.type&&bb(),db())}),I.on("touchmove",function(a){J&&(N=a.originalEvent.touches[0].pageX,cb())})),_(),eb(),n.hasGrid&&ib(),n.disable?jb():kb()},_=function(){Q=u.width(),S=A?A.width():B.width(),R=Q-S},ab=function(a,b,c){_(),L=!1,D=b,D.prop("id","irs-active-slider");var d=D.offset().left,e=a.pageX-d;W=d+e-D.position().left,"single"===n.type?T=u.width()-S:"double"===n.type&&("from"===c?(U=0,V=parseInt(C.css("left"),10)):(U=parseInt(B.css("left"),10),V=u.width()-S))},bb=function(){var b=B.width(),c=a.data(B[0],"x")||parseInt(B[0].style.left,10)||B.position().left,d=a.data(C[0],"x")||parseInt(C[0].style.left,10)||C.position().left,e=c+b/2,f=d-c;E[0].style.left=e+"px",E[0].style.width=f+"px"},cb=function(b){var c,d=N-W;d=b?b:N-W,"single"===n.type?(0>d&&(d=0),d>T&&(d=T)):"double"===n.type&&(U>d&&(d=U),d>V&&(d=V),bb()),a.data(D[0],"x",d),db(),c=Math.round(d),D[0].style.left=c+"px"},db=function(){var b,c,d={input:o,slider:G,min:n.min,max:n.max,fromNumber:0,toNumber:0,fromPers:0,toPers:0,fromX:0,fromX_pure:0,toX:0,toX_pure:0},e=n.max-n.min;"single"===n.type?(d.fromX=a.data(A[0],"x")||parseInt(A[0].style.left,10)||A.position().left,d.fromPers=d.fromX/R*100,b=e/100*d.fromPers+n.min,d.fromNumber=Math.round(b/n.step)*n.step,d.fromNumber<n.min&&(d.fromNumber=n.min),d.fromNumber>n.max&&(d.fromNumber=n.max),X&&(d.fromNumber=parseInt(d.fromNumber*X,10)/X),q&&(d.fromValue=n.values[d.fromNumber])):"double"===n.type&&(d.fromX=a.data(B[0],"x")||parseInt(B[0].style.left,10)||B.position().left,d.fromPers=d.fromX/R*100,b=e/100*d.fromPers+n.min,d.fromNumber=Math.round(b/n.step)*n.step,d.fromNumber<n.min&&(d.fromNumber=n.min),d.toX=a.data(C[0],"x")||parseInt(C[0].style.left,10)||C.position().left,d.toPers=d.toX/R*100,c=e/100*d.toPers+n.min,d.toNumber=Math.round(c/n.step)*n.step,d.toNumber>n.max&&(d.toNumber=n.max),X&&(d.fromNumber=parseInt(d.fromNumber*X,10)/X,d.toNumber=parseInt(d.toNumber*X,10)/X),q&&(d.fromValue=n.values[d.fromNumber],d.toValue=n.values[d.toNumber])),M=d,gb()},eb=function(){var b={input:o,slider:G,min:n.min,max:n.max,fromNumber:n.from,toNumber:n.to,fromPers:0,toPers:0,fromX:0,fromX_pure:0,toX:0,toX_pure:0},c=n.max-n.min;"single"===n.type?(b.fromPers=0!==c?(b.fromNumber-n.min)/c*100:0,b.fromX_pure=R/100*b.fromPers,b.fromX=Math.round(b.fromX_pure),A[0].style.left=b.fromX+"px",a.data(A[0],"x",b.fromX_pure)):"double"===n.type&&(b.fromPers=0!==c?(b.fromNumber-n.min)/c*100:0,b.fromX_pure=R/100*b.fromPers,b.fromX=Math.round(b.fromX_pure),B[0].style.left=b.fromX+"px",a.data(B[0],"x",b.fromX_pure),b.toPers=0!==c?(b.toNumber-n.min)/c*100:1,b.toX_pure=R/100*b.toPers,b.toX=Math.round(b.toX_pure),C[0].style.left=b.toX+"px",a.data(C[0],"x",b.toX_pure),bb()),M=b,gb()},fb=function(a){L=!1;var b=a-G.offset().left,c=M.toX-M.fromX,d=M.fromX+c/2;U=0,T=u.width()-S,V=u.width()-S,"single"===n.type?(D=A,D.prop("id","irs-active-slider"),cb(b)):"double"===n.type&&(D=d>=b?B:C,D.prop("id","irs-active-slider"),cb(b),bb()),D.removeAttr("id"),D=null},gb=function(){var a,b,c,d,e,f,g,h,i,j=S/2,k="";"single"===n.type?(k=M.fromNumber===n.max?n.maxPostfix:"",x[0].style.display="none",y[0].style.display="none",g=q?n.prefix+n.values[M.fromNumber]+k+n.postfix:n.prefix+s(M.fromNumber)+k+n.postfix,z.html(g),h=z.outerWidth(!1),i=M.fromX-h/2+j,0>i&&(i=0),i>Q-h&&(i=Q-h),z[0].style.left=i+"px",n.hideMinMax||n.hideFromTo||(v[0].style.display=O>i?"none":"block",w[0].style.display=i+h>Q-P?"none":"block"),o.prop("value",parseFloat(M.fromNumber))):"double"===n.type&&(k=M.fromNumber===n.max?n.maxPostfix:"",k=M.toNumber===n.max?n.maxPostfix:"",q?(a=n.prefix+n.values[M.fromNumber]+n.postfix,d=n.prefix+n.values[M.toNumber]+k+n.postfix,g=M.fromNumber!==M.toNumber?n.prefix+n.values[M.fromNumber]+" — "+n.prefix+n.values[M.toNumber]+k+n.postfix:n.prefix+n.values[M.fromNumber]+k+n.postfix):(a=n.prefix+s(M.fromNumber)+n.postfix,d=n.prefix+s(M.toNumber)+k+n.postfix,g=M.fromNumber!==M.toNumber?n.prefix+s(M.fromNumber)+" — "+n.prefix+s(M.toNumber)+k+n.postfix:n.prefix+s(M.fromNumber)+k+n.postfix),x.html(a),y.html(d),z.html(g),b=x.outerWidth(!1),c=M.fromX-b/2+j,0>c&&(c=0),c>Q-b&&(c=Q-b),x[0].style.left=c+"px",e=y.outerWidth(!1),f=M.toX-e/2+j,0>f&&(f=0),f>Q-e&&(f=Q-e),y[0].style.left=f+"px",h=z.outerWidth(!1),i=M.fromX+(M.toX-M.fromX)/2-h/2+j,0>i&&(i=0),i>Q-h&&(i=Q-h),z[0].style.left=i+"px",f>c+b?(z[0].style.display="none",x[0].style.display="block",y[0].style.display="block"):(z[0].style.display="block",x[0].style.display="none",y[0].style.display="none"),n.hideMinMax||n.hideFromTo||(v[0].style.display=O>i||O>c?"none":"block",w[0].style.display=i+h>Q-P||f+e>Q-P?"none":"block"),o.prop("value",parseFloat(M.fromNumber)+";"+parseFloat(M.toNumber))),n.from=M.fromNumber,n.to=M.toNumber,hb()},hb=function(){"function"!=typeof n.onFinish||K||L||n.onFinish.call(this,M),"function"!=typeof n.onChange||L||n.onChange.call(this,M),"function"==typeof n.onLoad&&!K&&L&&(n.onLoad.call(this,M),L=!1)},ib=function(){G.addClass("irs-with-grid");var a,b="",c=0,d=0,e="",f=20,g=4,h=Q-2*n.gridMargin;for(a=0;f>=a;a+=1)c=Math.floor(h/f*a),c>=h&&(c=h-1),e+='<span class="irs-grid-pol small" style="left: '+c+'px;"></span>';for(a=0;g>=a;a+=1)c=Math.floor(h/g*a),c>=h&&(c=h-1),e+='<span class="irs-grid-pol" style="left: '+c+'px;"></span>',X?(b=n.min+(n.max-n.min)/g*a,b=b/n.step*n.step,b=parseInt(b*X,10)/X):(b=Math.round(n.min+(n.max-n.min)/g*a),b=Math.round(b/n.step)*n.step,b=s(b)),q&&(n.hideMinMax?(b=Math.round(n.min+(n.max-n.min)/g*a),b=Math.round(b/n.step)*n.step,b=0===a||a===g?n.values[b]:""):b=""),0===a?(d=c,e+='<span class="irs-grid-text" style="left: '+d+'px; text-align: left;">'+b+"</span>"):a===g?(d=c-100,e+='<span class="irs-grid-text" style="left: '+d+'px; text-align: right;">'+b+"</span>"):(d=c-50,e+='<span class="irs-grid-text" style="left: '+d+'px;">'+b+"</span>");F.html(e),F[0].style.left=n.gridMargin+"px"},jb=function(){G.addClass("irs-disabled"),G.append(m)},kb=function(){G.removeClass("irs-disabled"),G.find(".irs-disable-mask").remove()};Z()}})},update:function(a){return this.each(function(){this.updateData(a)})},remove:function(){return this.each(function(){this.removeSlider()})}};a.fn.ionRangeSlider=function(b){return j[b]?j[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist for jQuery.ionRangeSlider"):j.init.apply(this,arguments)}}(jQuery,document,window,navigator);