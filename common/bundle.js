// custom .js
window.addEventListener('load', function() {

	if (document.querySelector('.hero-slider')){
		document.querySelector('.hero-slider').style.visibility = "";
	  $('.hero-slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1100,
		adaptiveHeight: true,
		prevArrow: "<button type='button' class='slick-next slick-arrow ico-arrow-right'></button>",
		nextArrow: "<button type='button' class='slick-prev slick-arrow ico-arrow-right'></button>"
	  });
	}
	
	window.typescript = true;
	const navLeftElements = document.querySelectorAll('.nav-left li>div');
	let isDemo = document.querySelector('.hero-demo') !== null || document.querySelector('.demos-content') !== null;
	let demos = [];
	let triggeredClick = false;
	
	for(let i = 0; i < navLeftElements.length; i++) {
		 const li = navLeftElements[i];

		 li.addEventListener('click', function(event) {

			let target = event.currentTarget;
			let id = target.parentElement.id;
			let backButton = document.getElementById('back-forward');
			let navWrapper = document.querySelector('.nav-wrapper');
			const searchInput = document.querySelector('.search-form input');
		
				if (backButton.classList.contains('prev-nav')) {
						backButton.classList.remove('prev-nav');
						backButton.classList.add('forward-nav');
						backButton.setAttribute('title', 'See Right Menu');
						backButton.querySelector('strong').innerHTML = 'Right Menu';
						
						navWrapper.classList.add('go-right');
				}
				else {
					let titleText = isDemo ? "See all Components" : "See all topics";
					backButton.classList.remove('forward-nav');
					backButton.classList.add('prev-nav');
					backButton.setAttribute("title", titleText);
		
					navWrapper.classList.remove('go-right');
				
					var btnText = isDemo ? "All Components" : "All Topics";
					backButton.querySelector('strong').innerHTML = btnText;
				
					backButton.style.visibility = 'hidden';
				}
					
				backButton.style.visibility = 'visible';
				
				id = id.replace('left', 'right');
			
				if (searchInput) {
					searchInput.value = "";
					if (window.demo_search) {
						setTimeout(function () {
							window.demo_search();
						});
					}
				}
				const uls = document.querySelectorAll(".nav-right ul")
				
				if (demos.length === 0) {					
					for(let i = 0; i < uls.length; i++) {
						demos[uls[i].id] = uls[i];
						uls[i].parentNode.removeChild(uls[i]);
					}

					demos[id].style.display = '';
					document.querySelector(".nav-right").appendChild(demos[id]);								
					if (demos[id].querySelector('.current') && !triggeredClick) {
						demos[id].querySelector('.current').classList.remove('current');					
					}
				}
				else {
					for(let i = 0; i < uls.length; i++) {
						uls[i].parentNode.removeChild(uls[i]);
					}

					demos[id].style.display = '';
					document.querySelector(".nav-right").appendChild(demos[id]);	
					if (demos[id].querySelector('.current')) {
						demos[id].querySelector('.current').classList.remove('current');					
					}
				}
		 });
	}
	
	const backForward = document.querySelector('#back-forward');
		
	if (document.querySelector('.search-form')){
			const searchInput = document.querySelector('.search-form input');
			
			
			let timer = null;
			searchInput.onfocus = function () {
				searchInput.className = 'jqx-fill-state-focus';
			};
			searchInput.onblur = function () {
				searchInput.className = '';
			};
			
			let search = function () {
				const isRight = backForward.classList.contains('back-nav') && backForward.classList.contains('prev-nav');
				let searchString = searchInput.value;
				let items = !isRight ? document.querySelectorAll(".nav-left li") :   document.querySelectorAll(".nav-right li");
	
				Array.from(items).forEach(filter);

				function filter(item) {
					let itemText = item.textContent.trim();
					let match = itemText.toUpperCase().indexOf(searchString.toUpperCase()) != -1;
					if (!match) {
						item.style.display = 'none';
					}
					else {
						item.style.display = '';
					}
				}
			}
			window.demo_search = search;
		
			searchInput.onkeydown = function (event) {
				if (timer != undefined) clearTimeout(timer);
			

				timer = setTimeout(function () {
					search();
				}, 500);
				if (event.keyCode == 13) {
					search();
				}
				
			};
			if (backForward) {
				backForward.addEventListener('click', function() {
					const searchInput = document.querySelector('.search-form input');
				
					searchInput.value = "";
					setTimeout(function () {
						window.demo_search();
					});
			});
	}

	}
	
	if (document.querySelector(".nav-left li>div") ){
		var links = document.querySelectorAll(".nav-right li>a");
		var url = window.location.href.toString();
		
		for (let i = links.length - 1; i>= 0; i--) {
			var link = links[i];
			var text = link.href.toString();
			if (url.indexOf(text) >= 0) {
				link.classList.add('current');
			
				var id = link.parentNode.parentNode.id;
				id = id.replace('_right', '_left');
			
				document.getElementById(id).firstChild.classList.add('current');
				triggeredClick = true;
				document.getElementById(id).firstChild.click();
				triggeredClick = false;
				
				document.querySelector('.nav-wrapper').style.visibility = '';
				break;
			}
		}
		
		setTimeout(function() {
			document.querySelector('.nav-wrapper').classList.add('transition');		
			
			if (document.querySelector('.demos-content')) {
				document.querySelector('.demos-content').style.visibility = '';
			}
		});
	}
	
	
  //Toggle no-scroll for mobile menu
  let burger = document.querySelector('.mobile-nav-label'),
      header = document.querySelector('body');

  burger.onclick = function() {
    header.classList.toggle('no-scroll');
  }
  
 
  let updateSize = function() {
	let adminBarHeight = document.getElementById("wpadminbar") ? document.getElementById("wpadminbar").offsetHeight : 0;
  	if (!adminBarHeight) {
		adminBarHeight = 0;
	}

	if (document.body.offsetWidth > 1024) {
		var nav = document.getElementById("mobile-nav");
		
		if (nav) {
			nav.removeAttribute('checked');
		}
	}
	if (isDemo) {	
		 document.querySelector('.wide-sidebar').style.top = adminBarHeight + "px";
		
		const mobileSecNav = document.querySelector('.mobile-sec-nav ');
		
		 if ( window.getComputedStyle(mobileSecNav).display !== 'none') {
		  document.querySelector('.nav-main').style.height = window.innerHeight - 160 - adminBarHeight +'px';
	   }
	   else {
		  document.querySelector('.nav-main').style.height = 'auto';
	   }
	   
	//   return;
	}
		
	

	if (window.location.pathname === "demos" || window.location.pathname === "/demos/" || window.location.pathname === "demos/") {
		document.querySelector('.wide-sidebar').style.height = '50px';
		document.querySelector('.wide-sidebar').style.height = document.querySelector('.wide-content').offsetHeight + 'px';
		return;
	}
	
	if (window.location.pathname === "angular" || window.location.pathname === "/angular/" || window.location.pathname === "angular/") {
		document.querySelector('.wide-sidebar').style.height = '50px';
		document.querySelector('.wide-sidebar').style.height = document.querySelector('.wide-content').offsetHeight + 'px';
		return;
	}
	
	if (document.querySelector('.wide-content')) {
		document.querySelector('.wide-content').style.height = window.innerHeight - 70 - adminBarHeight +'px';
		document.querySelector('.wide-sidebar').style.height = window.innerHeight - 70 - adminBarHeight +'px';
		document.querySelector('.nav-main').style.height = window.innerHeight - 230 - adminBarHeight +'px';
		document.querySelector('.mobile-sec-nav').style.top = 70 + adminBarHeight + 'px';
		document.querySelector('.wide-sidebar').style.top = 70 + adminBarHeight + 'px';
  	}
 }
  
  if (document.querySelector('.wide-content') && document.querySelector('.wide-sidebar' )){
    updateSize();
  }
  
  //Get height on load & resize
  window.addEventListener('resize', function() {
		updateSize();
	});
	
  window.addEventListener('load', function() {
		updateSize();
	});

	const toggleClass = function(element, className) {
		if (!element){
			return;
		}
		
		if (element.classList.contains(className)){
			element.classList.remove(className);
		}
		else {
			element.classList.add(className);
		}
	}
	// Open side nav
	if (document.querySelector('.sidenav-btn')) {
		document.querySelector('.sidenav-btn').addEventListener('click', function() {
			toggleClass(document.querySelector('.wide-sidebar'), 'open');
			toggleClass(document.querySelector('.wide-content'), 'active');
			toggleClass(document.querySelector('.demo-inner aside'), 'active');
			document.querySelector('.mobile-sec-nav').style.zIndex = 0;
			updateSize();
		});

		document.querySelector('.close-sidenav').addEventListener('click', function() {
			toggleClass(document.querySelector('.wide-sidebar'), 'open');
			toggleClass(document.querySelector('.wide-content'), 'active');
			toggleClass(document.querySelector('.demo-inner aside'), 'active');
			document.querySelector('.mobile-sec-nav').style.zIndex = 999999;
			updateSize();
		});
}

// Ripple-effect animation
const rippleElements = document.querySelectorAll('.ripple');

for (let i = 0; i < rippleElements.length; i++) {	
	rippleElements[i].addEventListener('click',function(e) {
		var rippler = this;

		// create .ink element if it doesn't exist
		if(!rippler.querySelector('.ink')) {
			const ink = document.createElement('ink');

			ink.classList.add('ink');
			rippler.appendChild(ink);
		}
	
		var ink = rippler.querySelector('.ink');
	
		// prevent quick double clicks
		ink.classList.remove('animate');
	
		// set .ink diametr
		if(!ink.offsetHeight && !ink.offsetWidth)
		{
			var d = Math.max(rippler.offsetWidth, rippler.offsetHeight);
			ink.style.height = d + 'px';
			ink.style.width = d + 'px';
		}
	
		const rect = rippler.getBoundingClientRect();
	
		// get click coordinates
		var x = e.pageX - rect.left - ink.offsetWidth/2;
		var y = e.pageY - rect.top - ink.offsetHeight/2;
	
		// set .ink position and add class .animate
		ink.style.top = y + 'px';
		ink.style.left = x  +'px';
		ink.classList.add('animate');
	});
}


  // Home - Expand icon list
  Array.prototype.forEach.call(document.querySelectorAll('.icon-elem-list'), function(hideable) {
    hideable.style.maxHeight = hideable.scrollHeight +  'px';
  });
  Array.prototype.forEach.call(document.querySelectorAll('.toggle'), function(toggle) {
    toggle.checked = true;
  });

	if (document.querySelector('.pricing-cards')) {
			// License Pricing - show price form
			$('.pricing-cards .button').on('click', function () {
					if ($(this).hasClass('buy-team')) {
						$('#addCard').slideDown( 350, function () {
							var scrollY = $(this).offset().top;
							$('body, html').animate({scrollTop: scrollY - 200}, 600);
						}).addClass('team-active');
					} else {
				$('#contactUsWindow').jqxWindow({autoOpen: false, height: 300});
				$('#contactUsWindow').jqxWindow('hide');
						var winHeight = $(window).height();
						var winWidth = $(window).width();
						posX = (winWidth / 2) - ($('#contactUsWindow').width() / 2) + $(window).scrollLeft();
						posY = (winHeight / 2) - ($('#contactUsWindow').height() / 2) + $(window).scrollTop();
						$('#contactUsWindow').jqxWindow({ position: { x: posX, y: posY} });
						$('#contactUsWindow').jqxWindow('show');
					}
			});

			// License Pricing - show billing form
			document.querySelector('.add-cart').addEventListener('click', function () {
				$('#billingform').slideDown( 350, function () {
					var scrollY = $(this).offset().top;
					$('body, html').animate({scrollTop: scrollY}, 900);
				}).addClass('active');
			});
 }

  // License Pricing - Team counter
  var number = document.querySelector('.number'),
      inc = document.querySelector('.step.up'),
      dec = document.querySelector('.step.down');

  if (number) {
    inc.addEventListener('click', function() {
      number.stepUp(1);
    }, false);

    dec.addEventListener('click', function() {
      number.stepDown(1);
    }, false);
  }
});


// Mobile - close Sidebar on click outside menu
document.addEventListener('touchstart', function(e){
	var $sidebar = document.querySelector('.wide-sidebar');
	
  if (!$sidebar === e.target && !$sidebar.querySelector(e.target)) {
    $sidebar.classList.remove('open');
    document.querySelector('.wide-content').classList.remove('active');
  }
});
//prettify.js
!function(){var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function S(a){function d(e){var b=e.charCodeAt(0);if(b!==92)return b;var a=e.charAt(1);return(b=r[a])?b:"0"<=a&&a<="7"?parseInt(e.substring(1),8):a==="u"||a==="x"?parseInt(e.substring(2),16):e.charCodeAt(1)}function g(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return e==="\\"||e==="-"||e==="]"||e==="^"?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],a=
b[0]==="^",c=["["];a&&c.push("^");for(var a=a?1:0,f=b.length;a<f;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),l;a+2<f&&"-"===b[a+1]?(l=d(b[a+2]),a+=2):l=h;e.push([h,l]);l<65||h>122||(l<65||h>90||e.push([Math.max(65,h)|32,Math.min(l,90)|32]),l<97||h>122||e.push([Math.max(97,h)&-33,Math.min(l,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];f=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):b.push(f=h);for(a=0;a<b.length;++a)h=b[a],c.push(g(h[0])),
h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(g(h[1])));c.push("]");return c.join("")}function s(e){for(var a=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),c=a.length,d=[],f=0,h=0;f<c;++f){var l=a[f];l==="("?++h:"\\"===l.charAt(0)&&(l=+l.substring(1))&&(l<=h?d[l]=-1:a[f]=g(l))}for(f=1;f<d.length;++f)-1===d[f]&&(d[f]=++x);for(h=f=0;f<c;++f)l=a[f],l==="("?(++h,d[h]||(a[f]="(?:")):"\\"===l.charAt(0)&&(l=+l.substring(1))&&l<=h&&
(a[f]="\\"+d[l]);for(f=0;f<c;++f)"^"===a[f]&&"^"!==a[f+1]&&(a[f]="");if(e.ignoreCase&&m)for(f=0;f<c;++f)l=a[f],e=l.charAt(0),l.length>=2&&e==="["?a[f]=b(l):e!=="\\"&&(a[f]=l.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var x=0,m=!1,j=!1,k=0,c=a.length;k<c;++k){var i=a[k];if(i.ignoreCase)j=!0;else if(/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){m=!0;j=!1;break}}for(var r={b:8,t:9,n:10,v:11,
f:12,r:13},n=[],k=0,c=a.length;k<c;++k){i=a[k];if(i.global||i.multiline)throw Error(""+i);n.push("(?:"+s(i)+")")}return RegExp(n.join("|"),j?"gi":"g")}function T(a,d){function g(a){var c=a.nodeType;if(c==1){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)g(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)s[j]="\n",m[j<<1]=x++,m[j++<<1|1]=a}}else if(c==3||c==4)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[\t\n\r ]+/g," "),s[j]=c,m[j<<1]=x,x+=c.length,m[j++<<1|1]=
a)}var b=/(?:^|\s)nocode(?:\s|$)/,s=[],x=0,m=[],j=0;g(a);return{a:s.join("").replace(/\n$/,""),d:m}}function H(a,d,g,b){d&&(a={a:d,e:a},g(a),b.push.apply(b,a.g))}function U(a){for(var d=void 0,g=a.firstChild;g;g=g.nextSibling)var b=g.nodeType,d=b===1?d?a:g:b===3?V.test(g.nodeValue)?a:d:d;return d===a?void 0:d}function C(a,d){function g(a){for(var j=a.e,k=[j,"pln"],c=0,i=a.a.match(s)||[],r={},n=0,e=i.length;n<e;++n){var z=i[n],w=r[z],t=void 0,f;if(typeof w==="string")f=!1;else{var h=b[z.charAt(0)];
if(h)t=z.match(h[1]),w=h[0];else{for(f=0;f<x;++f)if(h=d[f],t=z.match(h[1])){w=h[0];break}t||(w="pln")}if((f=w.length>=5&&"lang-"===w.substring(0,5))&&!(t&&typeof t[1]==="string"))f=!1,w="src";f||(r[z]=w)}h=c;c+=z.length;if(f){f=t[1];var l=z.indexOf(f),B=l+f.length;t[2]&&(B=z.length-t[2].length,l=B-f.length);w=w.substring(5);H(j+h,z.substring(0,l),g,k);H(j+h+l,f,I(w,f),k);H(j+h+B,z.substring(B),g,k)}else k.push(j+h,w)}a.g=k}var b={},s;(function(){for(var g=a.concat(d),j=[],k={},c=0,i=g.length;c<i;++c){var r=
g[c],n=r[3];if(n)for(var e=n.length;--e>=0;)b[n.charAt(e)]=r;r=r[1];n=""+r;k.hasOwnProperty(n)||(j.push(r),k[n]=q)}j.push(/[\S\s]/);s=S(j)})();var x=d.length;return g}function v(a){var d=[],g=[];a.tripleQuotedStrings?d.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?d.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):d.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&g.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var b=a.hashComments;b&&(a.cStyleComments?(b>1?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),g.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,q])):d.push(["com",
/^#[^\n\r]*/,q,"#"]));a.cStyleComments&&(g.push(["com",/^\/\/[^\n\r]*/,q]),g.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));if(b=a.regexLiterals){var s=(b=b>1?"":"\n\r")?".":"[\\S\\s]";g.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+
s+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&g.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&g.push(["kwd",RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),q]);d.push(["pln",/^\s+/,q," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");g.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,
q],["pun",RegExp(b),q]);return C(d,g)}function J(a,d,g){function b(a){var c=a.nodeType;if(c==1&&!x.test(a.className))if("br"===a.nodeName)s(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((c==3||c==4)&&g){var d=a.nodeValue,i=d.match(m);if(i)c=d.substring(0,i.index),a.nodeValue=c,(d=d.substring(i.index+i[0].length))&&a.parentNode.insertBefore(j.createTextNode(d),a.nextSibling),s(a),c||a.parentNode.removeChild(a)}}function s(a){function b(a,c){var d=
c?a.cloneNode(!1):a,e=a.parentNode;if(e){var e=b(e,1),g=a.nextSibling;e.appendChild(d);for(var i=g;i;i=g)g=i.nextSibling,e.appendChild(i)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),d;(d=a.parentNode)&&d.nodeType===1;)a=d;c.push(a)}for(var x=/(?:^|\s)nocode(?:\s|$)/,m=/\r\n?|\n/,j=a.ownerDocument,k=j.createElement("li");a.firstChild;)k.appendChild(a.firstChild);for(var c=[k],i=0;i<c.length;++i)b(c[i]);d===(d|0)&&c[0].setAttribute("value",d);var r=j.createElement("ol");
r.className="linenums";for(var d=Math.max(0,d-1|0)||0,i=0,n=c.length;i<n;++i)k=c[i],k.className="L"+(i+d)%10,k.firstChild||k.appendChild(j.createTextNode("\u00a0")),r.appendChild(k);a.appendChild(r)}function p(a,d){for(var g=d.length;--g>=0;){var b=d[g];F.hasOwnProperty(b)?D.console&&console.warn("cannot override language handler %s",b):F[b]=a}}function I(a,d){if(!a||!F.hasOwnProperty(a))a=/^\s*</.test(d)?"default-markup":"default-code";return F[a]}function K(a){var d=a.h;try{var g=T(a.c,a.i),b=g.a;
a.a=b;a.d=g.d;a.e=0;I(d,b)(a);var s=/\bMSIE\s(\d+)/.exec(navigator.userAgent),s=s&&+s[1]<=8,d=/\n/g,x=a.a,m=x.length,g=0,j=a.d,k=j.length,b=0,c=a.g,i=c.length,r=0;c[i]=m;var n,e;for(e=n=0;e<i;)c[e]!==c[e+2]?(c[n++]=c[e++],c[n++]=c[e++]):e+=2;i=n;for(e=n=0;e<i;){for(var p=c[e],w=c[e+1],t=e+2;t+2<=i&&c[t+1]===w;)t+=2;c[n++]=p;c[n++]=w;e=t}c.length=n;var f=a.c,h;if(f)h=f.style.display,f.style.display="none";try{for(;b<k;){var l=j[b+2]||m,B=c[r+2]||m,t=Math.min(l,B),A=j[b+1],G;if(A.nodeType!==1&&(G=x.substring(g,
t))){s&&(G=G.replace(d,"\r"));A.nodeValue=G;var L=A.ownerDocument,o=L.createElement("span");o.className=c[r+1];var v=A.parentNode;v.replaceChild(o,A);o.appendChild(A);g<l&&(j[b+1]=A=L.createTextNode(x.substring(t,l)),v.insertBefore(A,o.nextSibling))}g=t;g>=l&&(b+=2);g>=B&&(r+=2)}}finally{if(f)f.style.display=h}}catch(u){D.console&&console.log(u&&u.stack||u)}}var D=window,y=["break,continue,do,else,for,if,return,while"],E=[[y,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],M=[E,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],N=[E,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
O=[N,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],E=[E,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],P=[y,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
Q=[y,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],W=[y,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],y=[y,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],R=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
V=/\S/,X=v({keywords:[M,O,E,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",P,Q,y],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),F={};p(X,["default-code"]);p(C([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);p(C([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],
["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);p(C([],[["atv",/^[\S\s]+/]]),["uq.val"]);p(v({keywords:M,hashComments:!0,cStyleComments:!0,types:R}),["c","cc","cpp","cxx","cyc","m"]);p(v({keywords:"null,true,false"}),["json"]);p(v({keywords:O,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:R}),
["cs"]);p(v({keywords:N,cStyleComments:!0}),["java"]);p(v({keywords:y,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);p(v({keywords:P,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);p(v({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);p(v({keywords:Q,
hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);p(v({keywords:E,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);p(v({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);p(v({keywords:W,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]);
p(C([],[["str",/^[\S\s]+/]]),["regex"]);var Y=D.PR={createSimpleLexer:C,registerLangHandler:p,sourceDecorator:v,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:D.prettyPrintOne=function(a,d,g){var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;g&&J(b,g,!0);K({h:d,j:g,c:b,i:1});
return b.innerHTML},prettyPrint:D.prettyPrint=function(a,d){function g(){for(var b=D.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;i<p.length&&c.now()<b;i++){for(var d=p[i],j=h,k=d;k=k.previousSibling;){var m=k.nodeType,o=(m===7||m===8)&&k.nodeValue;if(o?!/^\??prettify\b/.test(o):m!==3||/\S/.test(k.nodeValue))break;if(o){j={};o.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(a,b,c){j[b]=c});break}}k=d.className;if((j!==h||e.test(k))&&!v.test(k)){m=!1;for(o=d.parentNode;o;o=o.parentNode)if(f.test(o.tagName)&&
o.className&&e.test(o.className)){m=!0;break}if(!m){d.className+=" prettyprinted";m=j.lang;if(!m){var m=k.match(n),y;if(!m&&(y=U(d))&&t.test(y.tagName))m=y.className.match(n);m&&(m=m[1])}if(w.test(d.tagName))o=1;else var o=d.currentStyle,u=s.defaultView,o=(o=o?o.whiteSpace:u&&u.getComputedStyle?u.getComputedStyle(d,q).getPropertyValue("white-space"):0)&&"pre"===o.substring(0,3);u=j.linenums;if(!(u=u==="true"||+u))u=(u=k.match(/\blinenums\b(?::(\d+))?/))?u[1]&&u[1].length?+u[1]:!0:!1;u&&J(d,u,o);r=
{h:m,c:d,j:u,i:o};K(r)}}}i<p.length?setTimeout(g,250):"function"===typeof a&&a()}for(var b=d||document.body,s=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],p=[],m=0;m<b.length;++m)for(var j=0,k=b[m].length;j<k;++j)p.push(b[m][j]);var b=q,c=Date;c.now||(c={now:function(){return+new Date}});var i=0,r,n=/\blang(?:uage)?-([\w.]+)(?!\S)/,e=/\bprettyprint\b/,v=/\bprettyprinted\b/,w=/pre|xmp/i,t=/^code$/i,f=/^(?:pre|code|xmp)$/i,
h={};g()}};typeof define==="function"&&define.amd&&define("google-code-prettify",[],function(){return Y})})();}()
// demos.js
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	if (iOS) {
		document.addEventListener('touchmove', function (event) {
		  if (event.scale !== 1) { event.preventDefault(); }
		}, { passive: false });
	}
	
	const demoRequest = new (function () {	
		function requestPage (sURL) {	
			if( !window.processDemoLink) {
				window.open(sURL, '_self');
				return;
			}
			
			processDemoLink(sURL.replace('https://www.htmlelements.com', ''));				
		}

		function init () {
			const title = document.title;
			const url =	  location.href.replace('https://www.htmlelements.com', '');
			
			const stateObject = {url: url, title: title};
			history.pushState(stateObject, title, url);
		
			const navRight = document.querySelector('.nav-right');
			
			const links = document.querySelector('.nav-right a');
			
			navRight.addEventListener('click', function(event) {
				const anchor = event.target.parentNode;
				
				
				if (anchor.href) {
					requestPage(anchor.href);
				}
				else if (event.target.href) {
					requestPage(event.target.href);
				}
				
				event.stopPropagation();
				event.preventDefault();
				return false;
			});		
		}
		
		window.onpopstate = function (event) {
			if (event.state && window.processDemoLink) {
				const page = event.state;
						
				processDemoLink(page.url, true);
			} else {
				//No "history" 
			}
		};

		window.addEventListener ? addEventListener("load", init, false) : window.attachEvent ? attachEvent("onload", init) : (onload = init);

		// Public methods
		this.rebuildLinks = init;		
	})();

function setTheme() {
	var theme = document.querySelector('iframe').contentDocument.body.getAttribute('theme');
		
	Array.prototype.slice.call(document.querySelector('iframe').contentDocument.body.querySelectorAll('*')).filter(function (el) { 
	 if (el.tagName.match(/^smart-/i)) {
		 
		if (theme) {
			el.setAttribute('theme', theme);
		}
		else {
			el.setAttribute('theme', '');
		}
		 if (el.tagName.toLowerCase() === 'smart-chart' && theme.indexOf('dark-') >=0) {
			el.setAttribute('theme', 'dark');
		 }
		
	 }
	});
}
// custom select
function initCustomSelect() {
	var x, i, j, selElmnt, a, b, c;
	/*look for any elements with the class "custom-select":*/
	x = document.getElementsByClassName("custom-select");
	const arrow = document.querySelector('.custom-select .ico-arrow-up');
	
	if (arrow) {
		arrow.style.cursor = 'pointer';
	}
	
	for (i = 0; i < x.length; i++) {
	  selElmnt = x[i].getElementsByTagName("select")[0];
	  /*for each element, create a new DIV that will act as the selected item:*/
	  a = document.createElement("DIV");
	  a.setAttribute("class", "select-selected");
	  a.innerHTML = '<span class="scheme-color"></span><span>' + selElmnt.options[selElmnt.selectedIndex].innerHTML + '</span>';;
	  a.firstChild.style.background = selElmnt.options[selElmnt.selectedIndex].getAttribute('color');
	  a.firstChild.style.borderColor = selElmnt.options[selElmnt.selectedIndex].getAttribute('label') === 'dark' ? '#333' : '#fff';
	
 	  x[i].appendChild(a);
	  /*for each element, create a new DIV that will contain the option list:*/
	  b = document.createElement("DIV");
	  b.setAttribute("class", "select-items select-hide");
	
	  var light = document.createElement("DIV");
	  light.innerHTML = '<span>Light</span>';
	  b.appendChild(light);
	  
	  var darkGroup = false;
	  for (j = 0; j < selElmnt.length; j++) {
	    const element = selElmnt.options[j];
		/*for each option in the original select element,
		create a new DIV that will act as an option item:*/
		c = document.createElement("DIV");
		c.setAttribute('value', element.value);
		c.innerHTML = '<span class="scheme-color"></span><span>' + selElmnt.options[j].innerHTML + '</span>';
		if (j===0) {
			c.classList.add('same-as-selected');
		}
		c.firstChild.style.background = element.getAttribute('color');
        c.firstChild.style.borderColor = element.getAttribute('label') === 'dark' ? '#333' : '#fff';
		
		if (element.getAttribute('label') === 'dark' && !darkGroup) {
		    darkGroup = true;
		    var dark = document.createElement("DIV");
		    dark.innerHTML = '<span>Dark</span>';
		    b.appendChild(dark);		 
		}
		
		c.addEventListener("click", function(e) {
			/*when an item is clicked, update the original select box,
			and the selected item:*/
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
			  var value = this.getAttribute('value');
			  if (s.options[i].value == value){
				s.selectedIndex = i;
				h.innerHTML = this.innerHTML;
				y = this.parentNode.getElementsByClassName("same-as-selected");
				for (k = 0; k < y.length; k++) {
				  y[k].removeAttribute("class");
				}
				this.setAttribute("class", "same-as-selected");
				var theme = '';
				
				switch(value){
					case "0":
						theme = '';
						break;
					case "1":
						theme = 'red';
						break;
					case "2":
						theme = 'green';
						break;
					case "3":
						theme = 'purple';
						break;
					case "4":
						theme = 'pink';
						break;
					case "5":
						theme = 'turquoise';
						break;
					case "6":
						theme = 'orange';
						break;
					case "10":
						theme = 'dark';
						break;
					case "11":
						theme = 'dark-red';
						break;
					case "12":
						theme = 'dark-green';
						break;
					case "13":
						theme = 'dark-purple';
						break;
					case "14":
						theme = 'dark-pink';
						break;
					case "15":
						theme = 'dark-turquoise';
						break;
					case "16":
						theme = 'dark-orange';
						break;
				  }
					
					
					if (theme.indexOf('dark') >=0) {
						document.body.classList.add('dark-mode');		
						document.querySelector('iframe').contentDocument.body.classList.add('dark-mode');
					}
					else {
						document.body.classList.remove('dark-mode');
						document.querySelector('iframe').contentDocument.body.classList.remove('dark-mode');
					}
					
					if (theme && theme !== 'dark' && !document.querySelector('iframe').contentDocument.head.querySelector('[theme="' + theme + '"]')) {					
						const link = document.createElement('link');
						link.href = '../../source/styles/smart.' + theme + '.css';
						link.rel = 'stylesheet';
						link.type = 'text/css';
						link.setAttribute('theme', theme);
						document.body.setAttribute('selected-theme', theme);
						document.querySelector('iframe').contentDocument.head.appendChild(link);
						
						const iframe = document.querySelector('iframe');
						link.onload = function() {
							iframe.contentDocument.body.setAttribute('theme', theme);								
							setTheme();
						}
					}
					else {
						document.querySelector('iframe').contentDocument.body.setAttribute('theme', theme);				
						document.body.setAttribute('selected-theme', theme);
					}
				
				  setTheme();
				break;
			  }
			}
			h.click();
		});
		b.appendChild(c);
	  }
	  x[i].appendChild(b);
	  
		
	  a.addEventListener("click", function(e) {
		  /*when the select box is clicked, close any other select boxes,
		  and open/close the current select box:*/
		  e.stopPropagation();
		  closeAllSelect(this);
		  this.nextSibling.classList.toggle("select-hide");
		  
		  if (!this.nextSibling.classList.contains('select-hide')){
			document.querySelector('.custom-select').classList.add('open');
		  }
		  
		  this.classList.toggle("select-arrow-active");
		});
		
		if (arrow) {
			arrow.onclick = function(event) {
				event.stopPropagation(); 
				event.preventDefault();
				a.click(event);
			}
		}
	}
	function closeAllSelect(elmnt) {
	  /*a function that will close all select boxes in the document,
	  except the current select box:*/
	  var x, y, i, arrNo = [];
	  x = document.getElementsByClassName("select-items");
	  y = document.getElementsByClassName("select-selected");
	  if (!document.querySelector('.custom-select')){
		  return;
	  }
	  document.querySelector('.custom-select').classList.remove('open');
	  
	  for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
		  arrNo.push(i)
		} else {
		  y[i].classList.remove("select-arrow-active");
		}
	  }
	  for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
		  x[i].classList.add("select-hide");
		}
	  }
	}
	/*if the user clicks anywhere outside the select box,
	then close all select boxes:*/
	document.addEventListener("click", closeAllSelect);
}

window.updateTabTitles = function() {
	const tabItems = document.querySelectorAll('#sourceTabs .tab-item');
	
	switch(window.framework) {
		case 'angular': {
			tabItems[1].innerHTML = 'APP.COMPONENT.TS';
			tabItems[2].innerHTML = 'APP.COMPONENT.HTML';
			tabItems[3].innerHTML = 'APP.COMPONENT.CSS';
			tabItems[4].innerHTML = 'APP.MODULE.TS';
			tabItems[4].style.display = '';
			break;
		}
		case 'react': {
			tabItems[1].innerHTML = 'APP.TSX';
			tabItems[2].innerHTML = 'INDEX.HTM';
			tabItems[3].innerHTML = 'APP.CSS';
			tabItems[2].style.display = 'none';
			tabItems[4].style.display = 'none';
			break;
		}
		case 'vue': {
			tabItems[1].innerHTML = 'APP.VUE';
			tabItems[2].innerHTML = 'INDEX.HTM';
			tabItems[3].innerHTML = 'MAIN.JS';
			tabItems[2].style.display = 'none';
			tabItems[4].style.display = 'none';
			break;
		}
		default: {
			tabItems[1].innerHTML = 'SOURCE';
			tabItems[2].innerHTML = 'INDEX.HTM';
			tabItems[3].innerHTML = 'STYLES.CSS';
			tabItems[2].style.display = '';
			tabItems[4].style.display = 'none';
			break;
		}			
	}
}

window.addEventListener('load', function() {
	initCustomSelect();
	const tabs = document.getElementById('sourceTabs');
	
	if (!tabs) {
		return;
	}
	
	const escapeHtml = function(text) {
	  var map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;'
	  };

	  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
	}
		
	const indexjs = document.getElementById('indexjs');
	const indexhtm = document.getElementById('indexhtm');
	const styles = document.getElementById('styles');
	
	const navRight = document.querySelector('.nav-right');

  	function updateSourceTabs(href, pop) {
		const hrefParts = href.split('/');
		const elementName = (window.framework === 'react' || window.framework === 'vue') ? hrefParts[hrefParts.indexOf('dist') + 1] : hrefParts[hrefParts.indexOf('demos') + 1];
		const demoName =(window.framework === 'react' || window.framework === 'vue') ? hrefParts[hrefParts.indexOf('dist') + 2] : hrefParts[hrefParts.indexOf('demos') + 2];
		const header = document.querySelector('.demo-title');
		const imgURL = '/wp-content/design/assets/images/';
		
		document.querySelector('.wide-content').scrollTop = 0;
		
		const elementCurrent = document.querySelector('.nav-left .current');
		
		document.getElementById('submitToCodePenButton').style.display = "none";
		if (window.framework !== "angular" && window.framework !== "react" && window.framework !== "vue" ){
			document.getElementById('submitToCodePenButton').style.display = "";
		}

		if (elementCurrent) {
			elementCurrent.classList.remove('current');
		}
		
		const demoCurrent = document.querySelector('.nav-right .current');
		
		if (demoCurrent) {
			demoCurrent.classList.remove('current');
		}
		
		header.firstElementChild.className = elementName + '-icon';
		switch(elementName) {
			case 'framework':
			//	header.firstElementChild.src = imgURL + 'data_adapter.svg';
				header.lastElementChild.innerHTML = 'Smart is Framework for building user interfaces';
				header.firstElementChild.className = 'dataadapter-icon';
				break;
			case 'accordion':
			//	header.firstElementChild.src = imgURL + 'accordion.svg';
				header.lastElementChild.innerHTML = 'Smart.Accordion';
				break;
			case 'button':
		//		header.firstElementChild.src = imgURL + 'button.svg';
				header.lastElementChild.innerHTML = 'Smart.Button';
				break;
			case 'badge':
			//	header.firstElementChild.src = imgURL + 'badge.svg';
				header.lastElementChild.innerHTML = 'Smart.Badge';
				break;
			case 'calendar':
			//	header.firstElementChild.src = imgURL + 'calendar.svg';
				header.lastElementChild.innerHTML = 'Smart.Calendar';
				break;
			case 'carousel':
			//	header.firstElementChild.src = imgURL + 'scroll_view.svg';
				header.firstElementChild.className = 'scrollview-icon';
				header.lastElementChild.innerHTML = 'Smart.Carousel';
				break;
			case 'card':
			//	header.firstElementChild.src = imgURL + 'navigation_bar.svg';
				header.firstElementChild.className = 'navbar-icon';			
				header.lastElementChild.innerHTML = 'Smart.Card';
				break;
			case 'colorpanel':
				header.lastElementChild.innerHTML = 'Smart.ColorPanel';
				header.firstElementChild.className = 'draw-icon';			
		
				break;
			case 'colorpicker':
				header.lastElementChild.innerHTML = 'Smart.ColorPicker';
				break;
				
			case 'checkbox':
			//	header.firstElementChild.src = imgURL + 'check_box.svg';
				header.lastElementChild.innerHTML = 'Smart.CheckBox';
				break;
			case 'combobox':
			//	header.firstElementChild.src = imgURL + 'combo_box.svg';
				header.lastElementChild.innerHTML = 'Smart.ComboBox';
				break;
			case 'datetimepicker':
			//	header.firstElementChild.src = imgURL + 'date_time_input.svg';
				header.lastElementChild.innerHTML = 'Smart.DateTimePicker';
				break;
			case 'docking-layout':
			//	header.firstElementChild.src = imgURL + 'docking_layout.svg';
					header.firstElementChild.className = 'dockinglayout-icon';
		
				header.lastElementChild.innerHTML = 'Smart.DockingLayout';
				break;
			case 'cardview':
				header.firstElementChild.className = 'kanban-icon';	
				header.lastElementChild.innerHTML = 'Smart.CardView';
				break;
			case 'dropdownlist':
			//	header.firstElementChild.src = imgURL + 'dropdown_list.svg';
				header.lastElementChild.innerHTML = 'Smart.DropDownList';
				break;
			case 'chart':
			//	header.firstElementChild.src = imgURL + 'grid.svg';
				header.lastElementChild.innerHTML = 'Smart.Chart';
				break;
			case 'grid':
			//	header.firstElementChild.src = imgURL + 'grid.svg';
				header.lastElementChild.innerHTML = 'Smart.Grid';
				break;
			case 'fileupload':
			case 'file-upload':
			//	header.firstElementChild.src = imgURL + 'gauge.svg';
				header.lastElementChild.innerHTML = 'Smart.FileUpload';
				break;
			case 'gantt':
				header.firstElementChild.className =  'layout-icon';
	
			//	header.firstElementChild.src = imgURL + 'gauge.svg';
				header.lastElementChild.innerHTML = 'Smart.GanttChart';
				break;
			case 'gauge':
			//	header.firstElementChild.src = imgURL + 'gauge.svg';
				header.lastElementChild.innerHTML = 'Smart.Gauge';
				break;
			case 'listbox':
		//		header.firstElementChild.src = imgURL + 'list_box.svg';
				header.lastElementChild.innerHTML = 'Smart.ListBox';
				break;
			case 'listmenu':
		//		header.firstElementChild.src = imgURL + 'list_menu.svg';
				header.lastElementChild.innerHTML = 'Smart.ListMenu';
				break;
			case 'maskedtextbox':
			//	header.firstElementChild.src = imgURL + 'masked_input.svg';
				header.lastElementChild.innerHTML = 'Smart.MaskedTextBox';
				break;
			case 'menu':
			//	header.firstElementChild.src = imgURL + 'menu.svg';
				header.lastElementChild.innerHTML = 'Smart.Menu';
				break;
			case 'multilinetextbox':
			//	header.firstElementChild.src = imgURL + 'text_area.svg';
				header.firstElementChild.className = 'textarea-icon';
				header.lastElementChild.innerHTML = 'Smart.MultilineTextBox';
				break;
			case 'multisplitbutton':
			//	header.firstElementChild.src = imgURL + 'button.svg';
				header.firstElementChild.className = 'button-icon';
				header.lastElementChild.innerHTML = 'Smart.MultiSplitButton';
				break;
			case 'numerictextbox':
		//		header.firstElementChild.src = imgURL + 'numeric_input.svg';
				header.lastElementChild.innerHTML = 'Smart.NumericTextBox';
				break;
			case 'pager':
			//	header.firstElementChild.src = imgURL + 'pager.png';
				header.lastElementChild.innerHTML = 'Smart.Pager';
				break;
			case 'passwordtextbox':
			//	header.firstElementChild.src = imgURL + 'password_input.svg';
				header.lastElementChild.innerHTML = 'Smart.PasswordTextBox';
				break;
			case 'powerbutton':
			//	header.firstElementChild.src = imgURL + 'power_button.svg';
				header.lastElementChild.innerHTML = 'Smart.PowerButton';
				break;
			case 'progressbar':
			//	header.firstElementChild.src = imgURL + 'progress_bar.svg';
				header.lastElementChild.innerHTML = 'Smart.ProgressBar';
				break;
			case 'querybuilder':
				header.lastElementChild.innerHTML = 'Smart.QueryBuilder';
				break;
			case 'radiobutton':
			//	header.firstElementChild.src = imgURL + 'radio.svg';
				header.lastElementChild.innerHTML = 'Smart.RadioButton';
				break;
			case 'repeatbutton':
			//	header.firstElementChild.src = imgURL + 'repeat_button.svg';
				header.lastElementChild.innerHTML = 'Smart.RepeatButton';
				break;
			case 'scrollbar':
		//		header.firstElementChild.src = imgURL + 'scroll_bar.svg';
				header.lastElementChild.innerHTML = 'Smart.Scrollbar';
				break;
			case 'slider':
			//	header.firstElementChild.src = imgURL + 'slider.svg';
				header.lastElementChild.innerHTML = 'Smart.Slider';
				break;
			case 'switchbutton':
		//		header.firstElementChild.src = imgURL + 'switch_button.svg';
				header.lastElementChild.innerHTML = 'Smart.SwitchButton';
				break;
			case 'splitter':
			//	header.firstElementChild.src = imgURL + 'splitter.svg';
				header.lastElementChild.innerHTML = 'Smart.Splitter';
				break;
			case 'tabs':
			//	header.firstElementChild.src = imgURL + 'tabs.svg';
				header.lastElementChild.innerHTML = 'Smart.Tabs';
				break;
			case 'table':
			header.firstElementChild.className =  'datatable-icon';
	//			header.firstElementChild.src = imgURL + 'data_table.svg';
				header.lastElementChild.innerHTML = 'Smart.Table';
				break;
			case 'tank':
	//			header.firstElementChild.src = imgURL + 'tank.svg';
				header.lastElementChild.innerHTML = 'Smart.Tank';
				break;
			case 'textbox':
		//		header.firstElementChild.src = imgURL + 'input.svg';
				header.lastElementChild.innerHTML = 'Smart.TextBox';
				break;
			case 'timepicker':
		//		header.firstElementChild.src = imgURL + 'time_picker.svg';
				header.lastElementChild.innerHTML = 'Smart.TimePicker';
				break;
			case 'toast':
			//	header.firstElementChild.src = imgURL + 'notification.svg';
				header.firstElementChild.className = 'notification-icon';
				header.lastElementChild.innerHTML = 'Smart.Toast';
				break;
			case 'togglebutton':
		//		header.firstElementChild.src = imgURL + 'toggle_button.svg';
				header.lastElementChild.innerHTML = 'Smart.ToggleButton';
				break;
			case 'tooltip':
		//		header.firstElementChild.src = imgURL + 'tool_tip.svg';
				header.lastElementChild.innerHTML = 'Smart.Tooltip';
				break;
			case 'tree':
		//		header.firstElementChild.src = imgURL + 'tree.svg';
				header.lastElementChild.innerHTML = 'Smart.Tree';
				break;
			case 'validator':
				header.lastElementChild.innerHTML = 'Smart.Validator';
				break;
			case 'window':
	//			header.firstElementChild.src = imgURL + 'window.svg';
				header.lastElementChild.innerHTML = 'Smart.Window';
				break;	
			case 'sortable':
				header.lastElementChild.innerHTML = 'Smart.Sortable';
				break;				
			case 'query-builder':
				header.lastElementChild.innerHTML = 'Smart.QueryBuilder';
				break;	
			case 'dropdownbutton':
				header.firstElementChild.className = 'button-icon';			
				header.lastElementChild.innerHTML = 'Smart.DropDownButton';
				break;	
			case 'bootstrap':
				header.firstElementChild.className = 'bargauge-icon';			
				header.lastElementChild.innerHTML = 'Smart.Bootstrap';
				break;	
		}
		
		const anchors = document.querySelectorAll('.cards-listing a');
		
		anchors[1].href = '/docs/' + elementName + '-css/';
		anchors[2].href = '/docs/' + elementName + '-api/';
		
		header.firstElementChild.className += ' demo-header-icon';
		document.querySelector('.nav-left #' + elementName.replace('-', '') + '_left').firstElementChild.classList.add('current');
		let currentDemoList;
		
		
		if (window.framework === 'angular'){
			currentDemoList = document.querySelector('.nav-right #' + elementName.replace('-', '') + '_right a[href="/angular/demos/' + elementName + '/' + demoName + '/"]');
		}
		else if (window.framework === 'react'){
			currentDemoList = document.querySelector('.nav-right #' + elementName.replace('-', '') + '_right a[href="/react/dist/' + elementName + '/' + demoName + '/"]');
		}
		else if (window.framework === 'vue'){
			currentDemoList = document.querySelector('.nav-right #' + elementName.replace('-', '') + '_right a[href="/vue/dist/' + elementName + '/' + demoName + '/"]');
		}
		else {
			currentDemoList = document.querySelector('.nav-right #' + elementName.replace('-', '') + '_right a[href="/demos/' + elementName + '/' + demoName + '/"]');
		}
		
		if (currentDemoList) {
			currentDemoList.classList.add('current'); 
		}
		
	
		window.updateTabTitles();
	
		
		/*
		tabItems[0].dispatchEvent(new MouseEvent('click'));
		
		const index_httpRequest = new XMLHttpRequest()
		index_httpRequest.onload = function () {
 		    let data = index_httpRequest.response;

		  	document.getElementById('indexhtmvalue').value = data;
			indexhtm.firstElementChild.innerHTML = escapeHtml(data);
			indexhtm.firstElementChild.classList.remove('prettyprinted');
				
		
			
			requestAnimationFrame(() => {
				prettyPrint();
			});
		}
			
		const indexhtmlhref = window.framework === "angular" ? href.replace('demos/', 'src/') + '/app.component.html' : href + 'index.htm'; 
		
		
		
		index_httpRequest.open('GET', indexhtmlhref)
		index_httpRequest.send();

		// indexjs
		const indexjs_httpRequest = new XMLHttpRequest()
		indexjs_httpRequest.onload = function () {
		    let data = indexjs_httpRequest.response;
		
			data = data.replace(/</ig, '&lt;');
			data = data.replace(/>/ig, '&gt;');
			
			document.getElementById('indexjsvalue').innerHTML = '<pre>' + data + '</pre>';
			indexjs.firstElementChild.innerHTML = data;
			indexjs.firstElementChild.classList.remove('prettyprinted');
			requestAnimationFrame(() => {
				prettyPrint();
			});
		}
		
		const indexjshref = window.framework === "angular" ? href.replace('demos/', 'src/') + '/app.component.ts' : href + 'index.js' ; 
		indexjs_httpRequest.open('GET', indexjshref)
		indexjs_httpRequest.send();

		// styles
		const styles_httpRequest = new XMLHttpRequest()
		styles_httpRequest.onload = function () {
		    let data = styles_httpRequest.response;
			
			document.getElementById('stylesvalue').innerHTML = data;
			styles.firstElementChild.innerHTML = data;
			styles.firstElementChild.classList.remove('prettyprinted');
			requestAnimationFrame(() => {
				prettyPrint();
			});
	
		}
		
		const styleshref = window.framework === "angular" ? href.replace('demos/', 'src/') + '/app.component.css' : href + 'styles.css'; 
		styles_httpRequest.open('GET', styleshref)
		styles_httpRequest.send();
		*/
	}

	window.getURL = function(href, type) {
		if (type === 'indexcss') {
			switch(window.framework) {
				case 'angular':
					href = href.replace('demos/', 'src/') + '/app.component.css';
					break;
				case 'react':
					href = href.replace('dist/', 'src/') + '/App.css';
					break;
				case 'vue':
					href = href.replace('dist/', 'src/') + '/main.js';
					break;
				default:
					href =  href + 'styles.css'; 
					break;
			}
		}
		else if (type === 'indexjs') {
			switch(window.framework) {
				case 'angular':
					href = href.replace('demos/', 'src/') + '/app.component.ts' ;
					break;
				case 'react':
					href = href.replace('dist/', 'src/') + '/App.tsx' ;
					break;
				case 'vue':
					href = href.replace('dist/', 'src/') + '/App.vue' ;
					break;
				default:
					href =  href + (window.typescript ? 'index.ts' : 'index.js');
					break;
			}
		}
		else if (type === 'indexhtm') {
			switch(window.framework) {
				case 'angular':
					href = href.replace('demos/', 'src/') + '/app.component.html';
					break;
				case 'react':
					href = href.replace('dist/', 'dist/') + '/index.htm';
					break;
				case 'vue':
					href = href.replace('dist/', 'dist/') + '/index.htm';
					break;
				default:
					href = href + 'index.htm';
					break;
			}
		}
		else if (type === 'indexmodule'){
			switch(window.framework) {
				case 'angular':
					href = href.replace('demos/', 'src/') + '/app.module.ts';
					break;
				case 'react':
					break;
				case 'vue':
					break;
				default:
					href =  href + 'styles.css'; 
					break;
			}
		}
		
		return href;
	}
		
	window.processDemoLink = function(href, pop) {		
		const iFrameID = document.querySelector('iframe');
		
		if (href.indexOf('angular') >= 0){
			window.framework = "angular";
		}
		else if (href.indexOf('react') >= 0){
			window.framework = "react";
		}
		else if (href.indexOf('vue') >= 0){
			window.framework = "vue";
		}
		else {
			window.framework = null;
		}	
	
		updateSourceTabs(href, pop);	
	
		const demoTab = document.querySelector("#demoTab");
		demoTab.click();
		iFrameID.style.display = '';
		
		const sideBar = document.querySelector('.demos-sidebar');
		if (sideBar && sideBar.classList.contains('open')) {
			const closeSideNav = document.querySelector('.close-sidenav');
			
			closeSideNav.click();
		}
		const iframe = iFrameID.cloneNode();
		
		iframe.src = href + 'index.htm';	
		iframe.style.visibility = 'hidden';
		
		if (!window.addedIFrameListener) {
			
			iframe.addEventListener('load', function() {
				let title = iframe.contentDocument.querySelector('title').innerHTML;
				document.title = title;
				
				const description = document.querySelector('.demo-description');
				const header = document.querySelector('.demo-title');
				
				if (description) {
					description.innerHTML = header.lastElementChild.innerHTML + ' Custom Element: ' + title;
				}
				
				if (!pop) {
					const stateObject = {url :href, title: title};
					history.pushState(stateObject, title, href);
				}
			}
			);
		}
		
		if (pop) {
			iFrameID.setAttribute('pop', '');
		}
		else {
			iFrameID.removeAttribute('pop');
		}
				
		iFrameID.parentNode.appendChild(iframe);
		iFrameID.parentNode.removeChild(iFrameID);		
	};
	
	const demoFrame = document.querySelector('iframe');	
	let href = demoFrame.src.replace('index.html', '');
	href = href.replace('index.htm', '');
	
	// init tabs and toggle buttons
	if (href.indexOf('angular') >= 0){
		window.framework = "angular";
	}
	else if (href.indexOf('react') >= 0){
		window.framework = "react";
	}
	else if (href.indexOf('vue') >= 0){
		window.framework = "vue";
	}
	else {
		window.framework = null;
	}	
	
	window.updateTabTitles();
	const tabItems = document.querySelectorAll('#sourceTabs .tab-item');
	const selector = document.querySelector('#sourceTabs .tab-item-selector');
				
	selector.style.left = tabItems[0].offsetLeft +'px';	
	selector.style.width = tabItems[0].offsetWidth + 'px';
		
	const initTabContent = (tab) => {
		const demoFrame = document.querySelector('iframe');	
		const href = demoFrame.src.replace('index.htm', '');
		const indexcss = document.querySelector("#styles");
		const indexhtm = document.querySelector("#indexhtm");
		const indexjs = document.querySelector("#indexjs");
		const indexmodule = document.querySelector("#indexmodule");
		const api = document.querySelector("#api");
		
		api.style.display = 'none';
		indexcss.style.display = 'none';
		indexhtm.style.display = 'none';
		indexjs.style.display = 'none';
		indexmodule.style.display = 'none';
		api.style.display = 'none';
		demoFrame.style.display = 'none';
		
		switch(tab) {
			case "demoTab":
			default: {
				demoFrame.style.display = '';
				break;
			}
			case "htmlTab": {
				const index_httpRequest = new XMLHttpRequest();
				
				index_httpRequest.onload = function () {
					let data = index_httpRequest.response;

					document.getElementById('indexhtmvalue').value = data;
					indexhtm.firstElementChild.innerHTML = escapeHtml(data);
					indexhtm.firstElementChild.classList.remove('prettyprinted');
					indexhtm.style.display = '';
										
					requestAnimationFrame(() => {
						prettyPrint();
					});
				}
					
				let indexhtmlhref = window.getURL(href, 'indexhtm'); 
								
				index_httpRequest.open('GET', indexhtmlhref)
				index_httpRequest.send();
				break;
			}
			case "srcTab": {					
				// indexjs
				const indexjs_httpRequest = new XMLHttpRequest()
				indexjs_httpRequest.onload = function () {
					let data = indexjs_httpRequest.response;
				
					data = data.replace(/</ig, '&lt;');
					data = data.replace(/>/ig, '&gt;');
					
					let tabs = `<div class="source-viewer">
		<div id="typescript" class="ripple tab-item active">Typescript</div>
		<div id="javascript" class="ripple tab-item">Javascript</div>
	</div>
`;
					
					
					if (!window.typescript) {
						document.getElementById('indexjsvalue').value = data;	
					}
					
					indexjs.firstElementChild.innerHTML = data;
					indexjs.firstElementChild.classList.remove('prettyprinted');
					requestAnimationFrame(() => {
						prettyPrint();
						indexjs.firstElementChild.innerHTML = tabs + indexjs.firstElementChild.innerHTML;
						
						var javascript = document.querySelector("#javascript");
						var typescript = document.querySelector("#typescript");
						
						if (!window.typescript) {
							javascript.classList.add('active');
							typescript.classList.remove('active');
						}
						
						javascript.onclick = function() {
							if (window.typescript === false) {
								return;
							}
						
							javascript.classList.add("active");
							typescript.classList.remove("active");						
							window.typescript = false;
							tabItems[1].click();
						};
						typescript.onclick = function() {
							if (window.typescript === true) {
								return;
							}
							
							javascript.classList.remove("active");
							typescript.classList.add("active");
							window.typescript = true;
							tabItems[1].click();
						};
						
						indexjs.style.display = '';
					});
				}
				
				let indexjshref = window.getURL(href, 'indexjs'); 
			
				indexjs_httpRequest.open('GET', indexjshref)
				indexjs_httpRequest.send();	
				
				break;
			}
			case "cssTab": {	
				// styles
				const styles_httpRequest = new XMLHttpRequest()
				styles_httpRequest.onload = function () {
					let data = styles_httpRequest.response;
					
					document.getElementById('stylesvalue').innerHTML = data;
					styles.firstElementChild.innerHTML = data;
					styles.firstElementChild.classList.remove('prettyprinted');
					requestAnimationFrame(() => {
						prettyPrint();
						indexcss.style.display = '';
					});	
				}
						
				let styleshref = window.getURL(href, 'indexcss'); 
				
				styles_httpRequest.open('GET', styleshref)
				styles_httpRequest.send();
				break;
			}
			case "moduleTab": {	
				// indexmodule
				const httpRequest = new XMLHttpRequest()
				httpRequest.onload = function () {
					let data = httpRequest.response;
					
					indexmodule.firstElementChild.innerHTML = data;
					indexmodule.firstElementChild.classList.remove('prettyprinted');
					requestAnimationFrame(() => {
						prettyPrint();
						indexmodule.style.display = '';
					});	
				}
						
				let modulesshref = window.getURL(href, 'indexmodule'); 
								
				httpRequest.open('GET', modulesshref)
				httpRequest.send();
				break;
			}
		}
	}
	
	for(let i = 0; i < tabItems.length; i++) {
		tabItems[i].addEventListener('click', function(event) {
			for(let j = 0; j < tabItems.length; j++) {
				tabItems[j].classList.remove('active');
			}
			
			initTabContent(this.id);
				
			this.classList.add('active');
			
			selector.style.left = this.offsetLeft +'px';	
			selector.style.width = this.offsetWidth + 'px';

			var event = new CustomEvent('change', { detail: {index: Array.prototype.slice.call(tabItems).indexOf(this) }});
			
			document.querySelector('#sourceTabs').dispatchEvent(event);
		});
	}	
	
	const buttons = document.querySelectorAll('.device-button');
	
	for(let i = 0; i < buttons.length; i++) {
		const button = buttons[i];
		
		button.checked = false;
		
		if (button.hasAttribute('checked')) {
			button.checked = true;
		}
		
		button.addEventListener('click', function(event) {
			if (this.hasAttribute('checked')) {
				this.removeAttribute('checked');
				this.checked = false;
			}
			else {
				this.setAttribute('checked', '');
				this.checked = true;
			}
			
			var event = new CustomEvent('change', {detail: {value: this.checked}});
			this.dispatchEvent(event);
		});	
	}
		
    const osButtons = document.querySelectorAll('.os .device-button');
	const deviceButtons = document.querySelectorAll('.device .device-button');
	const settingsButtons = document.querySelectorAll('.settings .device-button');

	const updateFrame = function () {
		let os = 'web';
		let device = 'desktop';
		let orientation = 'portrait';

		if (osButtons[1].checked) {
			os = 'android';
		}

		if (osButtons[2].checked) {
			os = 'ios';
		}

		if (deviceButtons[1].checked) {
			device = 'phone';
		}

		if (deviceButtons[2].checked) {
			device = 'phone';
			orientation = 'landscape';
		}

		if (deviceButtons[3].checked) {
			device = 'tablet';
		}

		if (deviceButtons[4].checked) {
			device = 'tablet';
			orientation = 'landscape';
		}

		if (device === 'desktop') {
			osButtons[0].classList.add('hidden');
			osButtons[1].classList.add('hidden');
			osButtons[2].classList.add('hidden');
			osButtons[0].checked = true;
			osButtons[0].setAttribute('checked', '');
			os = 'web';
		}
		else {
			osButtons[1].classList.remove('hidden');
			osButtons[2].classList.remove('hidden');
			if (osButtons[0].checked) {
				osButtons[1].checked = true;
				osButtons[1].setAttribute('checked', '');
				os = 'android';
			}
		}

		const demoDevice = document.querySelector('.demo-device');

		demoDevice.className = 'demo-device demo-device-' + device + ' demo-' + orientation + '-' + os;
		
		
		resizeIframe();

	}

	updateFrame();

	const toggleHandler = function (toggleButtons) {
		for (let i = 0; i < toggleButtons.length; i++) {
			const toggleButton = toggleButtons[i];
			toggleButtons.isUpdating = false;

			(function (toggleButton) {
				toggleButton.addEventListener('change', function (event) {
					if (event.detail.value) {
						toggleButtons.isUpdating = true;
						for (let i = 0; i < toggleButtons.length; i++) {
							if (toggleButtons[i] !== toggleButton) {
								toggleButtons[i].checked = false;
								toggleButtons[i].removeAttribute('checked');
							}
						}
						toggleButtons.isUpdating = false;

						updateFrame();
					}
					else if (!toggleButtons.isUpdating) {
						toggleButton.checked = true;
						toggleButton.setAttribute('checked', '');
					}
				});
			})(toggleButton);
		}
	}

	toggleHandler(osButtons);
	toggleHandler(deviceButtons);
	toggleHandler(settingsButtons);
	
	const shouldProcess = href.indexOf('angular') >= 0 || href.indexOf('vue') >= 0 || href.indexOf('react') >= 0;
	
	if (shouldProcess){
		processDemoLink(window.location.href);
	}
});
  window.onresize = function() {
	resizeIframe();
  }
   window.addEventListener('orientationchange', function() {
	resizeIframe();
   });
   window.addEventListener('orientationchanged', function() {
	resizeIframe();
   });
  
    var demoItems = document.querySelectorAll('[demo-key]');
	var toggleSubItems = function(item, itemKey) {
	   item.addEventListener('click', function() {
			var subItems = document.querySelectorAll('[demo-root=' + itemKey + ']');
			if (item.classList.contains('closed')) {
				for(let j = 0; j < subItems.length; j++) {
					subItems[j].classList.remove('closed');
					
					if (subItems[j].querySelector('a')) {
						subItems[j].querySelector('a').classList.add('ripple');  
					}
				}
				item.classList.remove('closed');
			}
			else {
				for(let j = 0; j < subItems.length; j++) {
					subItems[j].classList.add('closed');

					if (subItems[j].querySelector('a')) {
						subItems[j].querySelector('a').classList.remove('ripple');  
					}
				}
				item.classList.add('closed');
			} 
		 });
	}
	
   for (let i = 0; i < demoItems.length; i++){
	   var item = demoItems[i];
	   var itemKey = item.getAttribute('demo-key');
	   	
		toggleSubItems(item, itemKey);
   }
  
  function loadIframe() {
	 resizeIframe();
	 
	 const demoFrame = document.querySelector('iframe');
	 
	if (document.body.classList.contains('dark-mode')) {
		demoFrame.contentDocument.body.setAttribute('theme','dark');
		demoFrame.contentDocument.body.classList.add('dark-mode');	
	}
		
	var theme = document.body.getAttribute('selected-theme');
	
	if (theme) {
		if (theme.indexOf('dark') >=0) {
			document.body.classList.add('dark-mode');		
			demoFrame.contentDocument.body.classList.add('dark-mode');
		}
		else {
			document.body.classList.remove('dark-mode');
			demoFrame.contentDocument.body.classList.remove('dark-mode');
		}
		
		demoFrame.contentDocument.body.setAttribute('theme', theme);
		document.body.setAttribute('selected-theme', theme);
		
		if (theme !== 'dark' && !document.querySelector('iframe').contentDocument.head.querySelector('[theme="' + theme + '"]')) {					
			const link = document.createElement('link');
			link.href = '../../source/styles/smart.' + theme + '.css';
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.setAttribute('theme', theme);
			demoFrame.style.visibility = 'hidden';
			link.onload = function() {
				demoFrame.style.visibility = 'visible';
			}
			demoFrame.contentDocument.head.appendChild(link);
		}
		else {
			demoFrame.style.visibility = 'visible';
		}
	}
	else {
		demoFrame.style.visibility = 'visible';
	}
	
	if (document.body.classList.contains('dark-mode')) {
		setTheme();
	}
  }
  
  function updateSize() {
	let adminBarHeight = document.getElementById("wpadminbar") ? document.getElementById("wpadminbar").offsetHeight : 0;
  	if (!adminBarHeight) {
		adminBarHeight = 0;
	}

	if (document.body.offsetWidth > 1024) {
		var nav = document.getElementById("mobile-nav");
		
		if (nav) {
			nav.removeAttribute('checked');
		}
	}
	
	document.querySelector('.wide-sidebar').style.top = adminBarHeight + "px";
		
	const mobileSecNav = document.querySelector('.mobile-sec-nav ');
		
	if ( window.getComputedStyle(mobileSecNav).display !== 'none') {
	  document.querySelector('.nav-main').style.height = window.innerHeight - 160 - adminBarHeight +'px';
   }
   else {
	  document.querySelector('.nav-main').style.height = 'auto';
   }
	   
   if (window.location.pathname === "demos" || window.location.pathname === "/demos/" || window.location.pathname === "demos/") {
		return;
	}
	
	document.querySelector('.wide-content').style.height = window.innerHeight - 70 - adminBarHeight +'px';
	document.querySelector('.wide-sidebar').style.height = window.innerHeight - 70 - adminBarHeight +'px';
	document.querySelector('.nav-main').style.height = window.innerHeight - 230 - adminBarHeight +'px';
	document.querySelector('.mobile-sec-nav').style.top = 70 + adminBarHeight + 'px';
	document.querySelector('.wide-sidebar').style.top = 70 + adminBarHeight + 'px';
 }
 
  function resizeIframe() {
	  document.querySelector('.wide-content').style.overflow = "";
	  var iFrameID = document.querySelector('iframe');
	  
	 const demoDevice = document.querySelector('.demo-device');

      if(iFrameID) {        
			// here you can make the height, I delete it first, then I make it again
            iFrameID.height = "";
			if (iFrameID.contentWindow && iFrameID.contentWindow.document && iFrameID.contentWindow.document.body) {
				iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + 150 + "px";
			}
			
			if (demoDevice.className.indexOf('web') === -1) {
				iFrameID.height = '100%';
			}
		} 
		
		updateSize();
  }
   
   
 function submitToCodepen () {
	let css_external = [
		'https://www.htmlelements.com/demos/source/styles/smart.default.css',
		'https://www.htmlelements.com/demos/styles/demos.css'
	];
	let js_external = [
		'https://www.htmlelements.com/demos/scripts/data.js',
		'https://www.htmlelements.com/demos/source/smart.elements.js'
	];
		
	const demoFrame = document.querySelector('iframe');	
	const href = demoFrame.src.replace('index.htm', '');
	
	if (href.indexOf('export') >= 0 || href.indexOf('data-import') >= 0 || href.indexOf('print') >= 0) {
		js_external.push('https://www.htmlelements.com/demos/scripts/jszip.min.js');
		js_external.push('https://www.htmlelements.com/demos/scripts/pdfmake.min.js');
		js_external.push('https://www.htmlelements.com/demos/scripts/vfs_fonts.js');		
		js_external.push('https://www.htmlelements.com/demos/scripts/html2canvas.min.js');			
	}	
	let title = document.title;

	const fillTabContent = (loaded) => {
		const indexcss = document.querySelector("#styles");
		const indexhtm = document.querySelector("#indexhtm");
		const indexjs = document.querySelector("#indexjs");
		const escapeHtml = function(text) {
			  var map = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#039;'
			  };

			  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
		}
		
	
		
		let index = 0;
		
		const index_httpRequest = new XMLHttpRequest();
		
		index_httpRequest.onload = function () {
			let data = index_httpRequest.response;

			document.getElementById('indexhtmvalue').value = data;
		
			index++;
			
			if (index === 3) {
				loaded();
			}
		}
			
		const indexhtmlhref = window.getURL(href, 'indexhtm'); 
			
		index_httpRequest.open('GET', indexhtmlhref)
		index_httpRequest.send();
		
			
		// indexjs
		const indexjs_httpRequest = new XMLHttpRequest()
		indexjs_httpRequest.onload = function () {
			let data = indexjs_httpRequest.response;
		
			data = data.replace(/</ig, '&lt;');
			data = data.replace(/>/ig, '&gt;');
			
			document.getElementById('indexjsvalue').value = data;
			index++;
			
			if (index === 3) {
				loaded();
			}
		}
		
		const typescript = window.typescript;
		window.typescript = false;
		
		const indexjshref = window.getURL(href, 'indexjs'); 
		indexjs_httpRequest.open('GET', indexjshref)
		indexjs_httpRequest.send();	
		window.typescript = typescript;
		// styles
		const styles_httpRequest = new XMLHttpRequest()
		styles_httpRequest.onload = function () {
			let data = styles_httpRequest.response;
			
			document.getElementById('stylesvalue').innerHTML = data;
			styles.firstElementChild.innerHTML = data;
			styles.firstElementChild.classList.remove('prettyprinted');
			requestAnimationFrame(() => {
				prettyPrint();
			});
			index++;
			
			if (index === 3) {
				loaded();
			}
		}
		
		const styleshref =  window.getURL(href, 'indexcss');  
		styles_httpRequest.open('GET', styleshref)
		styles_httpRequest.send();		
	}
	
	fillTabContent(() => {
		const codepen = document.getElementById("codepen");
		const htmlcontent = document.getElementById('indexhtmvalue').value;
		const jscontent = document.getElementById('indexjsvalue').value;
		
		let jsCode = jscontent ? jscontent : '// your code here';
		
		jsCode = jsCode.replace('import {smartGrid} from "../../source/modules/smart.grid.js";', '');
		jsCode = jsCode.replace('import {smartGantt} from "../../source/modules/smart.gantt.js";', '');
		jsCode = jsCode.replace('import {smartChart} from "../../source/modules/smart.chart.js";', '');
		jsCode = jsCode.replace('import {smartDockingLayout} from "../../source/modules/smart.dockinglayout.js";', '');
		
		const js = jsCode;
		const html = htmlcontent.match(/<body[^>]*>((.|[\n\r])*)<\/body>/i)[1];
		const css = "html, body { padding: 10px; }\n\n" + document.getElementById('stylesvalue').innerHTML.trim();
		  
		data = {
			title: title,
			html: html,
			css: css,
			js: js,
			css_external:css_external.join(";"),
			js_external: js_external.join(";")
		};

		content = JSON.stringify(data);
		
		content = content.replace(/&lt;/ig, '<');
		content = content.replace(/&gt;/ig, '>');
		content = content.replace(/&amp;/ig, '&');
		
		codepen.querySelector('input').value = content;
		codepen.submit();
	});
	

}
