(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{13:function(e,n,t){"use strict";var r=t(17),o=t.n(r),i=t(9),a=t(16),c=(t(38),function(){try{var e=localStorage.getItem("".concat("gd-local-stats","-program-opening"));if(null!==e)return parseInt(e,10)}catch(n){console.warn("Unable to load stored program opening count",n)}return 0});t.d(n,"a",function(){return l}),t.d(n,"i",function(){return d}),t.d(n,"d",function(){return f}),t.d(n,"h",function(){return p}),t.d(n,"n",function(){return h}),t.d(n,"f",function(){return g}),t.d(n,"g",function(){return m}),t.d(n,"c",function(){return v}),t.d(n,"j",function(){return w}),t.d(n,"k",function(){return b}),t.d(n,"l",function(){return y}),t.d(n,"m",function(){return E}),t.d(n,"b",function(){return _}),t.d(n,"e",function(){return A});var u=i.a.isDev(),s=null,l=function(e){if(u)console.info("Development build - Analytics disabled");else{var n=o.a.utils.cookie("visitor-stats"),t=o.a.utils.timer();t.start(),(s=new o.a({projectId:"593d9f0595cfc907a1f8126a",writeKey:"B917F1DB50EE4C8949DBB374D2962845A22838B425AA43322A37138691A5270EB0358AEE45A4F61AFA7713B9765B4980517A1E276D4973A2E546EA851BF7757523706367ED430C041D2728A63BF61B5D1B2079C75E455DDDFAAC4324128AC2DB"})).extendEvents(function(){var r=e.getUserProfileSync();return{user:{uuid:Object(a.a)(),uid:r?r.uid:void 0,providerId:r?r.providerId:void 0,email:r?r.email:void 0,emailVerified:r?r.emailVerified:void 0},localStats:{programOpeningCount:c()},page:{title:document.title,url:document.location.href},referrer:{url:document.referrer},tech:{browser:o.a.helpers.getBrowserProfile(),ip:"${keen.ip}",ua:"${keen.user_agent}"},time:o.a.helpers.getDatetimeIndex(),visitor:{id:n.get("user_id"),time_on_page:t.value()},keen:{timestamp:(new Date).toISOString(),addons:[{name:"keen:ip_to_geo",input:{ip:"tech.ip"},output:"geo"},{name:"keen:ua_parser",input:{ua_string:"tech.ua"},output:"tech.info"},{name:"keen:url_parser",input:{url:"page.url"},output:"page.info"},{name:"keen:referrer_parser",input:{page_url:"page.url",referrer_url:"referrer.url"},output:"referrer.info"}]}}})}},d=function(){!u&&s&&(!function(){var e=c()+1;try{localStorage.setItem("".concat("gd-local-stats","-program-opening"),""+e)}catch(n){console.warn("Unable to store program opening count",n)}}(),s.recordEvent("program_opening"))},f=function(e){!u&&s&&s.recordEvent("export_launched",{platform:"GDevelop JS Platform",exportKind:e})},p=function(e){!u&&s&&s.recordEvent("new_game_creation",{platform:"GDevelop JS Platform",templateName:e})},h=function(e){!u&&s&&s.recordEvent("tutorial_opened",{tutorialName:e})},g=function(){!u&&s&&s.recordEvent("help_finder_opened",{})},m=function(e){console.log("sendHelpSearch",e),!u&&s&&s.recordEvent("help_search",{searchText:e})},v=function(e,n,t){!u&&s&&s.recordEvent("error_message",{message:e,type:n,rawError:t})},w=function(e){!u&&s&&s.recordEvent("signup",{email:e})},b=function(e){var n=e.mode,t=e.id;!u&&s&&s.recordEvent("subscription-check-dialog-shown",{mode:n,title:t})},y=function(){!u&&s&&s.recordEvent("subscription-check-dialog-dismiss")},E=function(){!u&&s&&s.recordEvent("subscription-dialog-shown",{})},_=function(e){!u&&s&&s.recordEvent("choose-plan-click",{planId:e})},A=function(e){!u&&s&&s.recordEvent("open_external_editor",{editorName:e})}},134:function(e,n,t){},151:function(e,n,t){e.exports=t(318)},16:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=function(){try{var e=localStorage.getItem("gd-user-uuid");if(e)return e}catch(t){console.warn("Unable to load stored user UUID",t)}var n=function e(n){return n?(n^16*Math.random()>>n/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}();try{localStorage.setItem("gd-user-uuid",n)}catch(t){console.warn("Unable to save user UUID",t)}return n}},318:function(e,n,t){"use strict";t.r(n);var r=t(12),o=t(25),i=t(64),a=t(63),c=t(65),u=(t(152),t(24)),s=t.n(u),l=t(66),d=t.n(l),f=t(38),p=t(13),h=t(118),g=t.n(h),m=t(16),v=t(8),w=t.n(v),b=t(9),y=w()("electron");t(134);var E=t(67),_=w()("electron"),A=function(e){function n(){var e,t;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];return(t=Object(i.a)(this,(e=Object(a.a)(n)).call.apply(e,[this].concat(c)))).state={App:null},t.authentification=new f.a,t}return Object(c.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(p.a)(this.authentification),g.a.config("https://e10c176ee68f432199cd292ba181e03b@sentry.io/233519",{}).install().setUserContext({id:Object(m.a)()}),function(){var e,n,t,r,o,i,a,c;y||b.a.isDev()?console.info("Electron or development build - Fullstory disabled"):(window._fs_debug=!1,window._fs_host="fullstory.com",window._fs_org="8DWZ1",window._fs_namespace="FS",e=window,n=document,t=window._fs_namespace,r="script",o="user",t in e?e.console&&e.console.log&&e.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'):((a=e[t]=function(e,n){a.q?a.q.push([e,n]):a._api(e,n)}).q=[],(i=n.createElement(r)).async=1,i.src="https://"+_fs_host+"/s/fs.js",(c=n.getElementsByTagName(r)[0]).parentNode.insertBefore(i,c),a.identify=function(e,n){a(o,{uid:e}),n&&a(o,n)},a.setUserVars=function(e){a(o,e)},a.identifyAccount=function(e,n){i="account",(n=n||{}).acctId=e,a(i,n)},a.clearUserCookie=function(e,t,r){if(!e||document.cookie.match("fs_uid=[`;`]*`[`;`]*`[`;`]*`"))for(t=n.domain;n.cookie="fs_uid=;domain="+t+";path=/;expires="+new Date(0).toUTCString(),!((r=t.indexOf("."))<0);)t=t.slice(r+1)})),window.FS&&window.FS.identify(Object(m.a)(),{})}(),_?Promise.all([t.e(0),t.e(1),t.e(4)]).then(t.bind(null,1951)).then(function(n){return e.setState({App:n.create(e.authentification)})}).catch(this.handleLoadError):Promise.all([t.e(0),t.e(57),t.e(1),t.e(3)]).then(t.bind(null,2001)).then(function(n){return e.setState({App:n.create(e.authentification)})}).catch(this.handleLoadError)}},{key:"handleLoadError",value:function(e){var n=_?"Please restart the application or reinstall the latest version if the problem persists.":"Please reload the page and check your internet connectivity.";Object(E.a)("Unable to load GDevelop. ".concat(n),e)}},{key:"render",value:function(){var e=this.state.App;return e||null}}]),n}(u.Component),k=document.getElementById("root");k?d.a.render(s.a.createElement(A,null),k):console.error("No root element defined in index.html"),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),Object(p.i)()},38:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(12),o=t(11),i=(t(159),t(68)),a=function e(){var n=this;Object(r.a)(this,e),this.user=null,this._onUserChangeCb=null,this.onUserChange=function(e){n._onUserChangeCb=e},this.createAccount=function(e){return o.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(e){n.user=e.user}).catch(function(e){throw console.error("Error while creating account:",e),e})},this.login=function(e){return o.auth().signInWithEmailAndPassword(e.email,e.password).then(function(e){n.user=e.user}).catch(function(e){throw console.error("Error while login:",e),e})},this.forgotPassword=function(e){return o.auth().sendPasswordResetEmail(e.email)},this.getUserProfile=function(e){if(!n.isAuthenticated())return e({unauthenticated:!0});e(null,n.user)},this.getUserProfileSync=function(){return n.user},this.logout=function(){o.auth().signOut().then(function(){console.log("Logout successful")}).catch(function(e){console.log("An error happened during logout",e)})},this.getAuthorizationHeader=function(){return n.user?n.user.getIdToken().then(function(e){return"Bearer ".concat(e)}):Promise.reject(new Error("User is not authenticated"))},this.isAuthenticated=function(){return!!n.user},o.initializeApp(i.c),o.auth().onAuthStateChanged(function(e){n.user=e||null,n._onUserChangeCb&&n._onUserChangeCb()})}},55:function(e,n){},67:function(e,n,t){"use strict";t.d(n,"b",function(){return i}),t.d(n,"a",function(){return a}),t.d(n,"c",function(){return c});var r=t(9),o=t(13),i=function(e){r.a.showMessageBox(e,"info")},a=function(e,n){r.a.showMessageBox(e,"error"),Object(o.c)(e,"error",n),console.error(e,"raw error:",n)},c=function(e,n){r.a.showMessageBox(e,"warning"),Object(o.c)(e,"warning",n),console.warn(e,"raw error:",n)}},68:function(e,n,t){"use strict";t.d(n,"e",function(){return o}),t.d(n,"d",function(){return a}),t.d(n,"c",function(){return c}),t.d(n,"g",function(){return u}),t.d(n,"a",function(){return s}),t.d(n,"h",function(){return l}),t.d(n,"f",function(){return d}),t.d(n,"b",function(){return f});var r=t(161),o={deployEndpoint:"https://nik50aqlp6.execute-api.eu-west-1.amazonaws.com/Production/deploy",gamesHost:"http://gd-games.s3-website-eu-west-1.amazonaws.com"},i={destinationBucket:"gd-games-preview",accessKeyId:"AKIAIAW3GGIHHOMURSAQ",secretAccessKey:"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",region:"eu-west-1",destinationBucketBaseUrl:"https://s3-".concat("eu-west-1",".amazonaws.com/").concat("gd-games-preview","/")},a={options:i,awsS3Client:new r({accessKeyId:i.accessKeyId,secretAccessKey:i.secretAccessKey,region:i.region,correctClockSkew:!0})};i.accessKeyId&&i.secretAccessKey||(console.warn("Either REACT_APP_PREVIEW_S3_ACCESS_KEY_ID or REACT_APP_PREVIEW_S3_SECRET_ACCESS_KEY are not defined. Preview in browsers won't be working"),console.info("Copy .env.dist file to .env and fill the values to fix this warning."));var c={apiKey:"AIzaSyAnX9QMacrIl3yo4zkVFEVhDppGVDDewBc",authDomain:"gdevelop-services.firebaseapp.com",databaseURL:"https://gdevelop-services.firebaseio.com",projectId:"gdevelop-services",storageBucket:"gdevelop-services.appspot.com",messagingSenderId:"44882707384"},u={baseUrl:"https://api.gdevelop-app.com/usage"},s={baseUrl:"https://api.gdevelop-app.com/build"},l={key:"pk_live_4N7H3nYlkZV4ylpKlzhmM8fN",image:"https://raw.githubusercontent.com/4ian/GDevelop/gh-pages/res/icon128linux.png"},d={baseUrl:"https://api.gdevelop-app.com/release"},f={baseUrl:"https://raw.githubusercontent.com/4ian/GDevelop-extensions/master"}},73:function(e,n,t){"use strict";t.d(n,"c",function(){return u}),t.d(n,"a",function(){return s}),t.d(n,"b",function(){return l});var r=t(8),o=t.n(r)()("electron"),i=!1;o&&(i=o.remote.require("electron-is").windows());var a=!!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i),c=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),u=function(){return i},s=function(){return a},l=function(){return c}},8:function(e,n,t){(function(n){var r=t(312)();e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{rethrowException:!1};try{return n.require?n.require(e):r?r(e):null}catch(o){if(t.rethrowException)throw o;return console.error("Exception while requiring module (from optionalRequire):",o),null}}}).call(this,t(3))},9:function(e,n,t){"use strict";t.d(n,"a",function(){return p});var r=t(12),o=t(25),i=t(8),a=t.n(i),c=t(117),u=t.n(c),s=t(73),l=a()("electron"),d=l?l.shell:null,f=l?l.remote.dialog:null,p=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,null,[{key:"setTitle",value:function(e){if(l)try{l.remote.getCurrentWindow().setTitle(e)}catch(n){console.error("Caught an error while calling browserWindow.setTitle",n)}else document.title=e}},{key:"setBounds",value:function(e,n,t,r){if(l){var o=1;if(Object(s.c)()){var i={x:e,y:n,width:t,height:r};o=l.remote.screen.getDisplayMatching(i).scaleFactor}var a=l.remote.getCurrentWindow();try{a.setBounds({x:Math.round(e/o),y:Math.round(n/o),width:Math.round(t/o),height:Math.round(r/o)})}catch(c){console.warn("Unable to change window bounds",c)}this.show()}}},{key:"show",value:function(){if(l){var e=l.remote.getCurrentWindow();e.showInactive(),e.setAlwaysOnTop(!0)}}},{key:"hide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(l){var n=l.remote.getCurrentWindow();n.isFocused()&&!e||(n.setAlwaysOnTop(!1),n.hide())}}},{key:"onFocus",value:function(e){if(l)return l.remote.getCurrentWindow().on("focus",e)}},{key:"onBlur",value:function(e){if(l)return l.remote.getCurrentWindow().on("blur",e)}},{key:"onClose",value:function(e){if(l)return l.remote.getCurrentWindow().on("close",e)}},{key:"getArguments",value:function(){if(l)return l.remote.getGlobal("args");var e={};return new u.a(window.location.search).forEach(function(n,t){return e[t]=n}),e._=e.project?[e.project]:[],e}},{key:"showMessageBox",value:function(e,n){if(f&&l){var t=l.remote.getCurrentWindow();f.showMessageBox(t,{message:e,type:n,buttons:["OK"]})}else alert(e)}},{key:"setUpContextMenu",value:function(){if(l){var e=l.remote.require("electron-editor-context-menu");window.addEventListener("contextmenu",function(n){if(n.target.closest('textarea, input, [contenteditable="true"]')){var t=e();setTimeout(function(){t.popup({window:l.remote.getCurrentWindow()})},30)}})}else document&&document.addEventListener("contextmenu",function(e){return!!e.target.closest('textarea, input, [contenteditable="true"]')||(e.preventDefault(),!1)})}},{key:"openExternalURL",value:function(e){l?d&&d.openExternal(e):window.open(e,"_blank")}},{key:"hasMainMenu",value:function(){return!!l}},{key:"isDev",value:function(){return!!l&&l.remote.require("electron-is").dev()}}]),e}()}},[[151,54,55]]]);
//# sourceMappingURL=main.c4b36447.chunk.js.map