!function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;$(function(){return $("body").on("click",".dismissible",function(){var a=this;return $(this).addClass("dismiss animated"),setTimeout(function(){return $(a).hide(250,function(){return $(this).remove()})},1e3)})}),$(window).on("load resize",function(){return i()}),i=function(){return $(".row.equalize").each(function(){var a,b,c;return a=$(this),c=0,b=!1,a.children().each(function(){var d;d=$(this),d.css("minHeight","1px"),b=d.outerWidth()===a.outerWidth(),b||(d.hasClass("equal")||d.addClass("equal"),d.outerHeight()>c&&(c=d.outerHeight()))}),b?void 0:a.children().css("min-height",c)})},$(function(){var a;a=$("body"),a.on("click",[".error input",".error textarea",".invalid input",".invalid textarea","input.error","textarea.error ","input.invalid","textarea.invalid "].join(","),function(){return $(this).focus().select()}),$(".select select").each(function(){var a;a=$(this),""===a.children("option").first().val()&&a.children("option").first().attr("selected")?a.addClass("unselected"):a.removeClass("unselected")}),a.on("change",".select select",function(){var a;a=$(this),""===a.children("option").first().val()&&a.children("option").first().attr("selected")?a.addClass("unselected"):a.removeClass("unselected")})}),$(function(){var a;return a=$("body"),a.on("dropdown",function(a){var b;b=$(a.target),$(".dropdown").not(b).removeClass("on"),b[b.hasClass("on")?"removeClass":"addClass"]("on")}),a.on("click",".dropdown",function(a){var b;b=$(a.currentTarget),b.is("a")||a.stopPropagation(),b.hasClass("focused")?b.removeClass("focused"):b.trigger("dropdown")}),a.on("click",function(){var a;a=$(".dropdown.on"),a.length&&a.removeClass("on")}),a.on("focus",".dropdown",function(a){var b;b=$(a.currentTarget),$(a.target).is("a")?a.stopPropagation():b.hasClass("dropdown")&&b.addClass("focused").trigger("dropdown")}),a.on("focusout",".dropdown li:last-child a",function(){return $(".dropdown.on").removeClass("on")})}),j=0,e=[],a=function(){function a(a){this.index=j++,this.el=$(a),this.init()}return a.prototype.init=function(){return this.defaultLabel(),this.setupMarkers(),this.hamburgerHelper(),this.touchBindings(),Modernizr.touch?void 0:this.mouseBindings()},a.prototype.defaultLabel=function(){return void 0===this.el.attr("title")?this.el.attr("title","Menu"):void 0},a.prototype.setupMarkers=function(){return this.el.find("li").each(function(){return $(this).find("ul").length?$(this).addClass("menu"):void 0})},a.prototype.hamburgerHelper=function(){return this.el.prepend('<button><i class="icon-list-ul" /></button>')},a.prototype.mouseBindings=function(){return $("body").on("mouseenter","li.menu",function(){return $(this).parents(".nav").find("button").is(":visible")?void 0:(clearTimeout(e[this.index]),$(this).siblings().children("ul").removeClass("open"),$(this).children("ul").addClass("open"))}),$("body").on("mouseleave","li.menu, ul.open",function(){var a=this;return $(this).parents(".nav").find("button").is(":visible")?void 0:e[this.index]=setTimeout(function(){return $(a).find("ul").removeClass("open")},500)})},a.prototype.touchBindings=function(){return $("body").on("click","li.menu > a",function(a){return $(this).closest(".menu").children("ul").toggleClass("open"),$(this).closest(".menu").toggleClass("on"),$(this).closest(".menu").hasClass("on")||($(this).closest(".menu").find(".menu").removeClass("on"),$(this).closest(".menu").find("ul").removeClass("open")),a.preventDefault(),!1})},a}(),$(function(){var b;return b=[],$(".nav").each(function(){return b.push(new a(this))}),$("body").on("click",".nav button",function(a){var b;return b=$(this).siblings("ul"),b.toggleClass("open"),b.hasClass("on")||(b.find(".menu").removeClass("on"),b.find("ul").removeClass("open")),a.preventDefault(),!1})}),f=[],k=0,b=function(){function a(a){this.index=k++,this.el=a,this.compression=$(this.el).data("compression")||5,this.minFontSize=$(this.el).data("min")||10,this.maxFontSize=$(this.el).data("max")||Number.POSITIVE_INFINITY,this.width=$(this.el).data("width")||"100%",this.height=$(this.el).data("height")||"auto",this.adjustParents=$(this.el).data("adjust-parents")||!0,this.styled=$(this.el).data("styled")||!0,this.columns=$("tbody tr",$(this.el)).first().find("th, td").length,this.rows=$("tbody tr",$(this.el)).length,this.init()}return a.prototype.init=function(){return this.setupTable(),this.adjustOnLoad(),this.adjustOnResize()},a.prototype.fontSize=function(){var a;return a="auto"===this.height?$("tbody td",$(this.el)).first().width()/this.compression:$(this.el).height()/this.rows/this.compression,Math.min(this.maxFontSize,Math.max(a,this.minFontSize))},a.prototype.setupTable=function(){return $(this.el).css("width",this.width),"auto"!==this.height&&$(this.el).css("height",this.height),$("th, td",$(this.el)).css("width",100/this.columns+"%"),this.styled&&$(this.el).addClass("responsiveTable"),"auto"!==this.height&&($("th, td",$(this.el)).css("height",100/this.rows+"%"),this.adjustParents&&$(this.el).parents().each(function(){return $(this).css("height","100%")})),$(this.el).css("font-size",this.fontSize())},a.prototype.resizeTable=function(){return $(this.el).css("font-size",this.minFontSize).css("font-size",this.fontSize())},a.prototype.adjustOnLoad=function(){var a=this;return $(window).on("load",function(){return a.resizeTable()})},a.prototype.adjustOnResize=function(){var a=this;return $(window).on("resize",function(){return clearTimeout(f[a.index]),f[a.index]=setTimeout(function(){return a.resizeTable()},20)})},a}(),function(a){var c;return c=[],a.fn.responsiveTables=function(){return this.each(function(){return c.push(new b(this))})}}(jQuery),$(document).ready(function(){return $("table.responsive").responsiveTables()}),g=[],l=0,c=function(){function a(a){this.index=l++,this.el=a,this.compression=$(this.el).data("compression")||10,this.minFontSize=$(this.el).data("min")||Number.NEGATIVE_INFINITY,this.maxFontSize=$(this.el).data("max")||Number.POSITIVE_INFINITY,this.scrollable=$(this.el).data("scrollable")||!1,this.scrollSpeed=$(this.el).data("scrollspeed")||650,this.scrollReset=$(this.el).data("scrollreset")||200,this.init()}return a.prototype.init=function(){return $(this.el).wrapInner('<span class="responsiveText-wrapper" />'),this.adjustOnLoad(),this.adjustOnResize(),this.scrollable?this.scrollOnHover():void 0},a.prototype.resizeText=function(){return $(this.el).css("font-size",Math.floor(Math.max(Math.min($(this.el).width()/this.compression,this.maxFontSize),this.minFontSize)))},a.prototype.adjustOnLoad=function(){var a=this;return $(window).on("load",function(){return a.resizeText()})},a.prototype.adjustOnResize=function(){var a=this;return $(window).on("resize",function(){return clearTimeout(g[a.index]),g[a.index]=setTimeout(function(){return a.resizeText()},20)})},a.prototype.scrollOnHover=function(){var a=this;return $(this.el).css({overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}),$(this.el).hover(function(){return a.difference=a.el.scrollWidth-$(a.el).width(),a.difference>a.scrollSpeed&&(a.scrollSpeed=a.difference),a.difference>0?($(a.el).css("cursor","e-resize"),$(a.el).stop().animate({"text-indent":-a.difference},a.scrollSpeed,function(){return $(a.el).css("cursor","text")})):void 0},function(){return $(a.el).stop().animate({"text-indent":0},a.scrollReset)})},a}(),function(a){var b;return b=[],a.fn.responsiveText=function(){return this.each(function(){return b.push(new c(this))})}}(jQuery),$(document).ready(function(){return $(".responsive").not("table").responsiveText()}),h=[],m=0,d=function(){function a(a){this.el=a,this.index=m++,this.text=$(this.el).text(),$(this.el).attr("data-text",this.text),this.words=this.text.trim().split(" "),this.lines=parseInt($(this.el).attr("data-truncate")),this.truncate(),this.adjustOnResize()}return a.prototype.truncate=function(){return this.measure(),this.setContent()},a.prototype.reset=function(){return $(this.el).text(this.text).css("max-height","none").attr("data-truncated","false")},a.prototype.measure=function(){var a;for(this.reset(),$(this.el).html("."),this.singleLineHeight=$(this.el).outerHeight(),a=1;a++<this.lines;)$(this.el).append("<br>.");return this.maxLinesHeight=$(this.el).outerHeight()},a.prototype.empty=function(){return $(this.el).html("")},a.prototype.setContent=function(){var a;return this.reset(),a=!1,this.addWords(this.words.length),this.tooBig()?(this.addNumberWordsThatFit(),$(this.el).css("max-height",this.maxLinesHeight+"px"),$(this.el).attr("data-truncated",!0)):void 0},a.prototype.addNumberWordsThatFit=function(){var a,b,c;for(b=this.words.length,a=0,c=Math.floor(this.words.length/2);a+1!==b;)this.addWords(a+c),this.tooBig()?b=a+c:a+=c,c=Math.floor(c/2)||1;return this.addWords(a),$(this.el).html(this.trimTrailingPunctuation($(this.el).html()))},a.prototype.addWords=function(a){return $(this.el).html(this.words.slice(0,a).join(" "))},a.prototype.tooBig=function(){return $(this.el).outerHeight()>this.maxLinesHeight},a.prototype.adjustOnResize=function(){var a=this;return $(window).on("resize",function(){return clearTimeout(h[a.index]),h[a.index]=setTimeout(function(){return a.truncate()},20)})},a.prototype.trimTrailingPunctuation=function(a){return a.replace(/(,$)|(\.$)|(\:$)|(\;$)|(\?$)|(\!$)/g,"")},a}(),function(a){var b,c;return b=!1,c=[],a.fn.truncateLines=function(){return b||a("head").append('<style type="text/css"> [data-truncated="true"] { overflow: hidden; } [data-truncated="true"]:after { content: "..."; position: absolute; } </style>'),this.each(function(){return c.push(new d(this))})}}(jQuery),$(window).load(function(){return $("[data-truncate]").truncateLines()})}.call(this);