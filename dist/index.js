"use strict";(self.webpackChunktibi_lp=self.webpackChunktibi_lp||[]).push([[826],{258:(n,r,t)=>{var e=t(974),i=t.n(e),o=t(379),a=t.n(o),l=t(795),p=t.n(l),s=t(569),d=t.n(s),c=t(565),g=t.n(c),h=t(216),x=t.n(h),m=t(589),f=t.n(m),u=t(489),b={};b.styleTagTransform=f(),b.setAttributes=g(),b.insert=d().bind(null,"head"),b.domAPI=p(),b.insertStyleElement=x(),a()(u.Z,b),u.Z&&u.Z.locals&&u.Z.locals;var w=t(402),v={};v.styleTagTransform=f(),v.setAttributes=g(),v.insert=d().bind(null,"head"),v.domAPI=p(),v.insertStyleElement=x(),a()(w.Z,v),w.Z&&w.Z.locals&&w.Z.locals;var y=t(568),k={};k.styleTagTransform=f(),k.setAttributes=g(),k.insert=d().bind(null,"head"),k.domAPI=p(),k.insertStyleElement=x(),a()(y.Z,k),y.Z&&y.Z.locals&&y.Z.locals;var z=t(850),Z={};Z.styleTagTransform=f(),Z.setAttributes=g(),Z.insert=d().bind(null,"head"),Z.domAPI=p(),Z.insertStyleElement=x(),a()(z.Z,Z),z.Z&&z.Z.locals&&z.Z.locals;var j=t(434),E={};function A(n,r,t,e,i,o,a){try{var l=n[o](a),p=l.value}catch(n){return void t(n)}l.done?r(p):Promise.resolve(p).then(e,i)}function F(n){return function(){var r=this,t=arguments;return new Promise((function(e,i){var o=n.apply(r,t);function a(n){A(o,e,i,a,l,"next",n)}function l(n){A(o,e,i,a,l,"throw",n)}a(void 0)}))}}E.styleTagTransform=f(),E.setAttributes=g(),E.insert=d().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=x(),a()(j.Z,E),j.Z&&j.Z.locals&&j.Z.locals,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t(588);var T;function B(){return B=F(regeneratorRuntime.mark((function n(r){var t,e,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t={method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},n.next=5,fetch("http://localhost:3000/register",t);case 5:return e=n.sent,n.next=8,e.json();case 8:return i=n.sent,console.log(i),n.abrupt("return",i);case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])}))),B.apply(this,arguments)}console.log(i().join(["Another","module","loaded!"]," ")),document.getElementById("subscribe").addEventListener("click",(function(){var n,r;n=document.getElementById("reg-modal"),r=document.getElementsByClassName("close")[0],T=document.getElementById("subscribe-form"),n.style.display="block",r.onclick=function(){n.style.display="none"},window.onclick=function(r){r.target==n&&(n.style.display="none")},T.addEventListener("submit",(function(n){return function(n){n.preventDefault(),console.log(Object.fromEntries(new FormData(n.target)));var r=function(n){return B.apply(this,arguments)}(Object.fromEntries(new FormData(n.target)));console.log(r)}(n)}))}))},568:(n,r,t)=>{t.d(r,{Z:()=>l});var e=t(738),i=t.n(e),o=t(705),a=t.n(o)()(i());a.push([n.id,'form{\r\n  width: 100%;\r\n  max-width: 320px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n}\r\n\r\nform label {\r\n  display: none;\r\n}\r\n\r\n\r\n.form-control {\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #80644E;\r\n  font-family: var(--content-fonts);\r\n}\r\n\r\n\r\ninput {\r\n  background: var(--form-control);\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  border: solid;\r\n  font-family: Neon;\r\n} \r\n\r\ninput[name~=name], input[type="email"] {\r\n  display: block;\r\n  height: 32px;\r\n  min-height: 32px;\r\n  font-size: 1.6rem;\r\n  /* color:white; */\r\n  padding: 0 10px;\r\n}\r\n\r\ninput[name~=name]:hover, input[type="email"]:hover, input[type="checkbox"]:hover {\r\n  border: 2px solid var(--highlight);\r\n}\r\n\r\ninput::placeholder{\r\n  color: #31271e;\r\n  opacity: 1;\r\n}\r\n\r\ninput:focus, input[name~=name]:not(:placeholder-shown),input[type="email"]:not(:placeholder-shown){\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #80644E;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\ninput[type="checkbox"] {\r\n  appearance: none;\r\n  -webkit-appearance: none; \r\n  -moz-appearance: none; \r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #80644E;\r\n  margin: 0;\r\n  font: 0.01px;\r\n  width: 20px;\r\n  height: 20px;\r\n  transform: translateY(-0.075em);\r\n  display: grid;\r\n  place-content: center;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\ninput[type="checkbox"]::before {\r\n  content: " ";\r\n  width: 24px;\r\n  height: 24px;\r\n  clip-path: polygon(10% 35%, 10% 50%, 40% 85%, 95% 15%, 90% 0%, 40% 55%);\r\n  transform: scale(0);\r\n  transition: 120ms transform ease-in-out;\r\n  box-shadow: inset 1em 1em white;\r\n  z-index: 10;\r\n}\r\n\r\ninput[type="checkbox"]:checked::before {\r\n  transform: scale(1);\r\n}\r\n\r\nspan.p {\r\n  font-size: 1.1rem;\r\n}\r\n\r\nlabel[for="tester"], label[for="policy"]{\r\n  display: flex;\r\n  align-items: center;\r\n  /* justify-content: stretch; */\r\n  width: 100%;\r\n  margin-top: 5px;\r\n  /* padding: 5px; */\r\n}\r\n\r\nlabel span{\r\n  padding-left: 10px;\r\n}\r\n\r\ninput[type="submit"] {\r\n  background-color: inherit;\r\n  margin: 20px auto;\r\n  /* color: var(--text-color); */\r\n  /* font-size: 1.3rem; */\r\n  /* text-transform: uppercase; */\r\n  /* padding: 25px 15px; */\r\n  letter-spacing: 2px;\r\n  /* font-size: 2rem; */\r\n  /* -webkit-text-fill-color: var(--text-color); */\r\n  /* -webkit-text-stroke-width: 1px; */\r\n  /* -webkit-text-stroke-color: white; */\r\n} \r\n\r\ninput[type="submit"]:hover, input[type="submit"]:active {\r\n  padding: 25px 15px;\r\n  height: 77px;\r\n}\r\n',""]);const l=a},850:(n,r,t)=>{t.d(r,{Z:()=>l});var e=t(738),i=t.n(e),o=t(705),a=t.n(o)()(i());a.push([n.id,"/* organised code according the dekstop, \r\nthen mobile, then wide screens, flow: parent to child */\r\n/* @import url(./style.css); */\r\n\r\n\r\n/* :root{\r\n    --text-color: var(--lightest-pink);\r\n    --link-padding: 15px;\r\n    --current: #321F52;\r\n} */\r\n\r\nheader {\r\n    order: 1;\r\n    position: fixed;\r\n    height: var(--nav-height);\r\n    font-family: var(--content-fonts);\r\n    font-size:18px;\r\n    display:flex;\r\n    flex-flow: row nowrap;\r\n    align-items:center;\r\n    justify-content: flex-start;\r\n\r\n    top:0;\r\n    width: 100vw;\r\n    padding: 0 20px 0 20px;\r\n\r\n    z-index: 10;\r\n}\r\n\r\n.nav-icon{\r\n    display: block;\r\n    z-index: 10;\r\n    padding-right: 20px;\r\n}\r\n\r\nnav .navbar {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n\r\nnav.navbar a {\r\n\r\n    padding: 0 20px;\r\n    color: var(--text-color);\r\n    text-decoration: none;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\r\n    padding: 5px 20px;\r\n    /* font-family: Neon; */\r\n}\r\n\r\nnav.navbar a:first-child {padding-left: 40px;} \r\n\r\nnav .navbar a.current{\r\n    color: var(--current);\r\n}\r\n\r\nnav a:hover, nav a:focus {\r\n    color: var(--highlight);\r\n    text-decoration: underline;\r\n    font-weight: 600;\r\n  }\r\n\r\n  \r\n\r\n@media screen and (max-width: 1024px) {\r\n\r\n    .nav-icon{\r\n        display: block;\r\n        z-index: 10;\r\n        padding-right: 20px;\r\n    }\r\n\r\n    nav .navbar a {\r\n        display: block;\r\n        /* padding: 0.5rem 1rem; */\r\n        color: var(--text-color);\r\n        text-decoration: none;\r\n        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\r\n        padding: 5px 5px;\r\n    }\r\n\r\n    /* #menu-list {display: none;}\r\n\r\n    .fa-bars {\r\n        color: black;\r\n        text-decoration: none;\r\n        padding: 10px;\r\n        border: 1px rgb(163, 163, 163) solid; \r\n    }\r\n\r\n    .open .fa-bars{\r\n        background-color: red;\r\n    }\r\n\r\n    nav.responsive #menu-list {\r\n        position: absolute;\r\n        display: block;\r\n        width: 100vw;\r\n        text-align: right;\r\n        top: 0;\r\n        right: 0;\r\n        height: 100vh;\r\n        padding:80px 40px; \r\n        z-index: 2;\r\n        background: radial-gradient(100% 100% at 0% 0%, rgba(207, 182, 243, 0.4) 0%, rgba(132, 1, 255, 0) 100%);\r\n        backdrop-filter: blur(5px);\r\n    }\r\n\r\n    header li:first-child, header li:nth-child(5){\r\n        border-right: none;\r\n        padding-right: 0;\r\n    } */\r\n\r\n}\r\n\r\n@media (min-width: 1750px) {\r\n    header {\r\n      padding-left: 5%;\r\n      padding-right: 5%; \r\n      \r\n    }\r\n  }\r\n\r\n\r\n",""]);const l=a},434:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(738),i=t.n(e),o=t(705),a=t.n(o),l=t(402),p=a()(i());p.i(l.Z),p.push([n.id,'main {\r\n    /* margin-top: 80px; */\r\n    font-family: var(--content-fonts);\r\n}\r\n\r\nsection {\r\n    padding: 0 20px;\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    height: 90vh;\r\n}  \r\n\r\n.full-width-img{\r\n    margin-top: -80px;\r\n    /* display: flex;.\r\n    flex-flow: column nowrap;\r\n    align-self: flex-end; */\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%; \r\n    z-index: -1;\r\n}\r\n\r\n.blur {\r\n    box-shadow: 0 0 20px 0 black outset;\r\n    mask-image: linear-gradient(to top, rgba(255,0,0,0), rgba(255,0,0,1));\r\n    -webkit-mask-image: linear-gradient(to top, rgba(255,0,0,0), rgba(255,0,0,1));\r\n}\r\n\r\n.intro {\r\n    justify-items: flex-start;\r\n    justify-content: center;\r\n    align-content: center; \r\n}\r\n\r\n.intro .slogan{\r\n    margin-top: 160px;\r\n}\r\nbutton.intro {\r\n    margin: 8px 0;\r\n}\r\n\r\n.horizontal-axis{\r\n    display: flex;\r\n    flex-flow: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.intro-ca div img:first-child {\r\n    /* align-self: center; */\r\n    margin-left: -35%;\r\n    margin-top: -10%;\r\n}\r\n\r\n.intro-ca div img:nth-child(3) {\r\n    margin-left: 29%;\r\n    margin-top: 10%;\r\n}\r\n\r\n#mockups {\r\n    width: 70%;\r\n    margin: 32px 0 32px -24px;\r\n    z-index: 10;\r\n    \r\n}\r\n\r\n.wrapper {\r\n    display: block;\r\n    width: 55%;\r\n}\r\n\r\n.info-section {\r\n    display: flex;\r\n    flex-direction: row nowrap;\r\n    justify-content:space-around;\r\n    align-content: flex-start;\r\n    margin:50px 0 100px 0;\r\n}\r\n\r\n.info-section div { padding-bottom: 10px;}\r\n.info-section h4 {\r\n    margin: 0 0 10px 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\n/* .intro-ca { padding-bottom: 100px;} */\r\n\r\n.ca {\r\n    color: var(--highlight);\r\n    border-color: var(--highlight);\r\n    width: 200px;\r\n    justify-self: flex-start;\r\n}\r\n\r\n.problem-container{\r\n    margin-top: -100px; \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: stretch;\r\n    justify-content: stretch;\r\n}\r\n\r\n.prbl-stats {\r\n    /* height:40%; */\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    gap: 10px;\r\n    justify-content: space-evenly;\r\n}\r\n.card {\r\n    width: auto;\r\n    height: auto; \r\n    text-align: center;\r\n    flex: 0 1 155px;\r\n }\r\n\r\n .card h2 {\r\n    color: var(--highlight);\r\n }\r\n\r\n .cntr-qt {\r\n    text-align: center;\r\n    margin: 100px 0; \r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n }\r\n\r\n .cntr-qt img {\r\n    overflow: hidden;\r\n }\r\n\r\n .cntr-qt img:first-of-type {\r\n    margin: -70px 120px;\r\n }\r\n\r\n .cntr-qt img:nth-last-of-type(1) {\r\n    margin: 60px 10px;\r\n    filter: linear-gradient(to right, #f1b1b100 , #82e6e8);\r\n }\r\n\r\n .cntr-qt h5{\r\n    align-self: flex-end;\r\n    margin: 0 0 0 10px\r\n }\r\n\r\n .cntr-qt h5 span{\r\n    text-align: center;\r\n}\r\n    .cntr-qt h5 span:after, \r\n    .cntr-qt h5 span:before {\r\n        background-color: red;\r\n        content: "";\r\n        display: inline-block;\r\n        height: 2px;\r\n        position: absolute;\r\n        vertical-align: middle;\r\n        width: 15px;\r\n        margin: 5px -5px  0;\r\n        transform: rotate(-45deg);\r\n\r\n }\r\n \r\n/* .prbl-stats > * {\r\n    flex: 2 1 180px;\r\n} */\r\n\r\n\r\n\r\n/* tablets */\r\n@media screen and (min-width: 765px){\r\n\r\n}\r\n\r\n/* one column split */\r\n@media screen and (min-width: 850px){\r\n    .intro-ca {\r\n        width: 100%; \r\n        flex-direction: row-reverse;  /* reverse the row*/\r\n    }\r\n    \r\n    .horizontal-axis {\r\n        width: 49%;\r\n    }\r\n\r\n    .intro-ca div img:first-child {\r\n        /* align-self: center; */\r\n        margin-left: -18%;\r\n        margin-top: -10%;\r\n    }\r\n    \r\n    .intro-ca div img:nth-child(3) {\r\n        margin-left: 15%;\r\n        margin-top: 5%;\r\n    }\r\n\r\n    .wrapper {\r\n        width: 45%;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* \r\n\r\n@media screen and (max-width: 1345px){\r\n    .intro-container .btn-partner{\r\n        grid-column: 8 / 12;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1082px){\r\n    .intro-container .btn-user-l{\r\n       \r\n        grid-column: 5 / span 4;\r\n    }\r\n    .intro-container .btn-secondary{\r\n        \r\n        grid-column: 6 / span 4;\r\n       \r\n    }\r\n}\r\n\r\n@media screen and (max-width: 638px){\r\n    .intro-container button{\r\n        grid-row: 5;\r\n    }\r\n\r\n    .intro-container .btn-user-l{\r\n        grid-column: 2 / span 4;\r\n        justify-self: stretch;\r\n        align-self: center;\r\n    }\r\n    .intro-container .btn-secondary{\r\n        grid-column: 2 / span 6;\r\n        margin-right: 5%;\r\n        margin-top: 25%;\r\n        align-self: center;\r\n    }\r\n\r\n    .intro-container .btn-partner{\r\n        grid-column: 8 / 1span 4;\r\n        grid-row: 5;\r\n        justify-self: stretch;\r\n        align-self: center;\r\n        font-size: 1.17rem;\r\n        padding: 7px 0;\r\n        \r\n    }\r\n    \r\n}\r\n\r\n@media screen and (max-width: 540px){\r\n    .intro-container{\r\n        height: calc(100vh - 80px);\r\n    }\r\n    \r\n    #slogans{\r\n        grid-column: 2 / 11;\r\n        grid-row: 1 / 4;\r\n        justify-self: center;\r\n        align-self: center;\r\n        z-index: 10;\r\n    }\r\n    \r\n    .intro-container button.btn-user-l{\r\n        grid-column: 2 / 12;\r\n        grid-row: 4 / 5;\r\n        align-self: flex-start;\r\n        justify-self: stretch;\r\n        align-self: flex-end;\r\n    }\r\n    \r\n    .intro-container .btn-secondary{\r\n        grid-column: 4 / 12;\r\n        grid-row: 5 / 6;\r\n        align-self: flex-start;\r\n        justify-self: flex-end;\r\n    } */\r\n   \r\n/*     \r\n\r\n\r\n\r\n.card img {\r\n margin-bottom: 10px;\r\n}\r\n\r\n.card h2{\r\n    color: var(--highlight);\r\n    margin-bottom: 60px;\r\n}\r\n.card h3{\r\n    color: white;\r\n    line-height: 98.5%;\r\n}\r\n\r\n\r\n\r\n.mission-container img{\r\n    height: 91px;\r\n    width:91px;\r\n    margin-top: -45.5px;\r\n    color: var(--primary);\r\n}\r\n\r\n.container-pt1{\r\n    padding: 170px 0 210px 0;\r\n    text-align: center;\r\n    background-color: var(--secondary-background);\r\n}\r\n\r\n.centered-wrapper{\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-flow: nowrap column;\r\n    width:40%;\r\n}\r\n\r\n.container-pt1 img{\r\n    height: 190px;\r\n    width: auto;\r\n    z-index: 0;\r\n}\r\n\r\n\r\n.mission-container h2{\r\n   z-index: 1;\r\n   margin-top: -150px;\r\n}\r\n\r\n.mission-pt2{\r\n    display:flex;\r\n    flex-flow: wrap row;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.mission-pt2 h3{\r\n    color: var(--header-color);\r\n    margin-bottom: 20px;\r\n}\r\n.mission-pt2 p{\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.app-prev{\r\n    margin-top: 200px;\r\n    display: flex;\r\n    flex-flow: column no-wrap;\r\n}\r\n.app-prev > div {\r\n    width: 45%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n.mock-app{\r\n    width: 300px;\r\n    margin: 0  auto;\r\n}\r\n\r\n.mock-app img{\r\n    width: 300px;\r\n}\r\n\r\n#development-progress {\r\n    position: absolute;\r\n    width: 140px;\r\n\r\n    border: 1px white solid;\r\n    border-radius: 5px;\r\n    margin: 120px  auto 0 48px;\r\n    transform: rotate(-12deg);\r\n}\r\n\r\n#progress-val {\r\n    width: 10%;\r\n    height: 30px;\r\n    background-color: white;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    color: white;\r\n}\r\n\r\np#countdown{\r\n    position: absolute;\r\n    transform: rotate(-12deg);\r\n    margin: 20px  auto 0 37px;\r\n    color: white;\r\n}\r\n\r\n  \r\n\r\n\r\n.app-prev h2,.app-prev p {\r\n    width: 90%;\r\n    margin: 0 auto 0 0 ;\r\n}\r\n\r\n.app-prev h2 {\r\n    margin-bottom: 30px;\r\n} \r\n.app-prev p {\r\n    margin-bottom: 10px;;\r\n}\r\n\r\n\r\n.empower-container .container-pt1{\r\n    padding: 210px 0 170px 0;\r\n    background-color: var(--lightest-pink);\r\n}\r\n\r\n.voices{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    flex: 2 0 21%;\r\n    margin: 0 5% 160px;\r\n} \r\n\r\n/* .voices h3{\r\n    display: block;\r\n    width: 100%;\r\n    text-align: center;\r\n} */\r\n\r\n/*\r\n.voices .container {\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 0; \r\n    flex: 1 0 33%;\r\n  }\r\n  \r\n  .voices .voices-img {\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n    \r\n  }\r\n  \r\n  .overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    transition: .5s ease;\r\n    background-color: var(--darkest-purple);\r\n  }\r\n  \r\n  .container:hover .overlay {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .text {\r\n    color: var(--lightest-pink);\r\n    font-size: 16px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 20%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    transform: translate(-10%, -50%);\r\n    text-align: center;\r\n  } */\r\n\r\n/* \r\n@media (min-width: 1750px) {\r\n    .xxl-cont {\r\n      padding-left: 5%;\r\n      padding-right: 5%; \r\n    }\r\n} */\r\n\r\n/* @media screen and (max-width: 912px){\r\n    .problem-container{\r\n        flex-flow: wrap;\r\n    }\r\n    .card{\r\n        width: 35%;\r\n        align-items: baseline;\r\n        text-align: center;\r\n    }\r\n\r\n    .card:first-child, .card:nth-child(2){\r\n        padding-bottom: 100px;\r\n     }\r\n     .card h2{\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .container-pt1{\r\n        padding: 150px 0 180px 0;\r\n    }\r\n    .centered-wrapper{\r\n        margin: 0 auto;\r\n        display: flex;\r\n        flex-flow: nowrap column;\r\n        width:50%;\r\n    }\r\n\r\n    .container-pt1 img{\r\n        height: 200px;\r\n        width: auto;\r\n    }\r\n\r\n    .empower-container .container-pt1{\r\n        padding: 120px 0 170px 0;\r\n    }\r\n\r\n    .voices{\r\n        margin: 0;\r\n    }\r\n\r\n    .voices .container {\r\n        flex: 1 0 49%;\r\n      }\r\n\r\n      .text {\r\n        font-size: 18px;\r\n      }\r\n} */\r\n\r\n/* @media screen and (max-width: 540px){\r\n    .centered-wrapper{\r\n        margin: 0 auto;\r\n        display: flex;\r\n        flex-flow: nowrap column;\r\n        width: 85%;\r\n    }\r\n\r\n    .card{\r\n        width: 45%;\r\n    }\r\n} */\r\n\r\n/* @media screen and (max-width: 600px){\r\n\r\n    \r\n    .intro-container #slogans{ \r\n        font-size: 96px;\r\n        grid-column: 2 / span 10;\r\n        grid-row: 1 / span 4;        \r\n    }\r\n\r\n    .intro-container #slogans h2{ \r\n        font-size: 1.6rem;\r\n        margin-bottom: 30px;\r\n        \r\n    }\r\n    \r\n    .intro-container #slogans h3{ \r\n        font-size: 1rem;\r\n        text-align: right;\r\n        margin-left: 20%;\r\n        max-width: 80%;\r\n    }\r\n\r\n    .intro-container #slogans h3:last-child{ \r\n        margin-left: 0;\r\n        max-width: 100%;\r\n\r\n    }\r\n} */\r\n\r\n/* @media screen and (max-width: 540px){\r\n    html, body, * {\r\n        max-width: 100vw;\r\n    }\r\n\r\n    .intro-container #slogans{ \r\n        font-size: 96px;\r\n        grid-column: 2 / span 10;\r\n        grid-row: 1 / span 4;        \r\n    }\r\n\r\n    .intro-container #slogans h2{ \r\n        font-size: 1.6rem;\r\n        margin-bottom: 30px;\r\n        \r\n    }\r\n    \r\n    .intro-container #slogans h3{ \r\n        font-size: 1rem;\r\n        text-align: right;\r\n        margin-left: 20%;\r\n        max-width: 80%;\r\n    }\r\n\r\n    .intro-container #slogans h3:last-child{ \r\n        margin-left: 0;\r\n        max-width: 100%;\r\n\r\n    }\r\n\r\n    .centered-wrapper{\r\n        width: 90%;\r\n    }\r\n\r\n    .empower-container .container-pt1{\r\n        padding: 120px 0 150px 0;\r\n    }\r\n    \r\n    .mission-pt2 .card{\r\n        width: 90%;\r\n    }\r\n\r\n    .mission-pt2 .card:nth-child(4){\r\n        padding-top: 100px;\r\n    }\r\n\r\n    .voices .container {\r\n        flex: 1 0 90%;\r\n      }\r\n} */\r\n\r\n',""]);const s=p},402:(n,r,t)=>{t.d(r,{Z:()=>l});var e=t(738),i=t.n(e),o=t(705),a=t.n(o)()(i());a.push([n.id,"/* @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:wght@400;500;600;700&family=Rubik:wght@500&display=swap'); */\r\n/* @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap'); */\r\n/* @import url('./header.css'); */\r\n/* @import url('./footer.css'); */\r\n\r\n/* body{\r\n  \r\n  margin: 0;  \r\n padding: 0;\r\n  \r\n}  */\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  font-size: 8px;\r\n} \r\n\r\nbody {margin: 0;}\r\nheader, main {\r\n  display: flex;\r\n  flex-flow: column;\r\n  /* margin: 0 15px;  */\r\n\r\n}\r\n\r\nbody, h1 {\r\n  font-family: Neon;\r\n  background-color: var(--background-primary);\r\n}\r\n\r\nmain {margin-top: var(--nav-height);}\r\n\r\nh1, .h1 {\r\n  font-family: Neon;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: var(--text-size);\r\n  letter-spacing: 0.05rem;\r\n  padding-left: 15px;\r\n  color: var(--text-color);\r\n  align-self: left;\r\n}\r\nh2, .h2 {\r\n  font-size: 2.5rem;\r\n  font-family: var(--content-fonts);\r\n  color: var(--text-color);\r\n}\r\n\r\nh3, .h3 {\r\n  font-size: 1.8rem;\r\n  font-family: var(--content-fonts);\r\n  color: var(--text-color);\r\n}\r\n\r\nh4, .h4 {\r\n  color: var(--text-color);\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 1.4rem;\r\n  line-height: 14px;\r\n  letter-spacing: 1.17727px;\r\n}\r\n\r\nh5{\r\n  color: var(--text-color);\r\n  font-size: 1rem;\r\n}\r\n\r\nsection > h3 {\r\n  padding-bottom: 30px;\r\n}\r\n\r\n\r\np, .p {\r\n  font-size: var(--text-size);\r\n  width: 100%;\r\n  color: var(--text-color);\r\n  font-size: 1.4rem;\r\n}\r\n\r\n/* p.intro {\r\n  margin: 15px 10px; \r\n} */\r\n\r\n.txt-highlight {\r\n  color: var(--highlight);\r\n}\r\n\r\n#logo-icon {\r\n  width: 120px;\r\n  align-self: flex-end;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* .slogan {\r\n  width: 90%;\r\n  max-width: 570px;\r\n  margin: var(--big-margin) 0 ;\r\n} */\r\n\r\n/* .intro {\r\n  color: var(--text-color);\r\n} */\r\n\r\nbutton, .btn {\r\n  border: 2px solid #FEFEFE;\r\n  border-radius: 15px;\r\n  width: 337px;\r\n  padding: 15px 15px;\r\n  /* align-self: center; */\r\n}\r\n\r\nbutton.intro {\r\n  background-color: inherit;\r\n  margin-top: var(--big-margin);\r\n  \r\n}\r\n\r\nbutton:hover, button:active, .btn:active, .btn:hover {\r\n  background-color: var(--highlight);\r\n}\r\n\r\n.circles {\r\n  width: 35%; \r\n  position: absolute;\r\n} \r\n\r\n.left-border {\r\n  padding: 0 10px 0 10px;\r\n  border-left: 2px solid var(--highlight);\r\n}\r\n\r\n\r\n@media screen and (min-width: 500px){ \r\n\r\n  :root {\r\n    --text-size: 2rem;\r\n  }\r\n\r\n  .slogan {\r\n    width: 90%;\r\n    max-width: 570px;\r\n    margin: 15px 0;\r\n  }\r\n\r\n  \r\n\r\n  button.intro {\r\n    align-self: flex-start;\r\n  }\r\n\r\n\r\n}\r\n\r\n@media screen and (min-width: 850px){ \r\n  .circles {\r\n    width: 15%; \r\n  } \r\n}\r\n\r\n/*\r\nbody {\r\n  margin: 0;\r\n  font-family: var(--content-fonts);\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  background-color: var(--lightest-pink);\r\n  -webkit-text-size-adjust: 100%;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  max-width: 100vw;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\nmain {\r\n  flex: 1 0 auto;\r\n}\r\nfooter {\r\n  flex-shrink: 0;\r\n} */\r\n\r\n/* hr {\r\n  margin: 1rem 0;\r\n  color: inherit;\r\n  background-color: currentColor;\r\n  border: 0;\r\n  opacity: 0.25;\r\n} */\r\n\r\n/* h6, h5, h4,  h3,  h2, h1{\r\n  font-family: var(--header-fonts);\r\n  font-weight: 400;\r\n  margin-bottom: 0.5rem;\r\n  line-height: 1.1; \r\n  letter-spacing: 0.05rem;\r\n  color: var(--header-color);\r\n} */\r\n\r\n/* h2 {\r\n  font-size: calc(1.6rem + 0.3vw);\r\n}\r\n\r\nh3{\r\n  font-size: calc(1.2rem + 0.3vw);\r\n} */\r\n/* \r\n.txt-highlight{\r\n  color: var(--highlight);\r\n}\r\n.flinta{\r\n  text-decoration: underline;\r\n}\r\n\r\n.flinta:hover{\r\n  background-color: var(--highlight);\r\n  color: white;\r\n} */\r\n/* \r\n@media (min-width: 1200px) {\r\n  h2 {\r\n    font-size: 2rem; \r\n  }\r\n\r\n  h3{\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n\r\np {\r\n  margin-top: 0;\r\n  font-size: 1.1rem;\r\n  letter-spacing: -0.045em;\r\n  line-height: 25px;\r\n}\r\n\r\na[href], input[type='submit'], input[type='image'], label[for], select, button, .pointer {\r\n  cursor: pointer;\r\n}\r\n\r\na {\r\n  color: var(--darkest-purple);\r\n  text-decoration: underline;\r\n  font-family: var(--content-fonts);\r\n}\r\n\r\na:hover {\r\n  color: var(--highlight);\r\n}\r\n\r\na:not([href]):not([class]), a:not([href]):not([class]):hover {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\nsection a{\r\n  color: var(--header-color);\r\n  display: inline-block;\r\n  text-align: end;\r\n  text-decoration: none;\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  font-family: 'Rubik';\r\n  z-index: 1;\r\n}\r\n\r\nsection a:hover{\r\n  padding-right: 10px;\r\n  padding-left:8px;\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n  text-decoration: underline;\r\n}\r\n\r\nsection a:hover::after{\r\n   content: ' »';\r\n}\r\n\r\nbutton{\r\n  font-family: 'Rubik', sans-serif;\r\n  background-color: inherit;\r\n  text-align: center;\r\n  border: none;\r\n  cursor: auto;\r\n  \r\n}\r\n\r\n.btn-standard {\r\n  font-size: 20px;\r\n  border: 2px solid var(--highlight);\r\n  border-radius: 10px;\r\n  padding: 5px 10px;\r\n  letter-spacing: 1px;\r\n  font-weight: 100;\r\n}\r\n\r\n.btn-partner{\r\n  border: 2px solid var(--partner-color);\r\n  color: var(--partner-color);\r\n  letter-spacing: 0px;\r\n  filter: drop-shadow(0px 9px 4px rgba(11, 101, 75, 0.3));\r\n}\r\n\r\n.btn-user-l{\r\n  -webkit-text-fill-color: var(--highlight);\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: white;\r\n  background-color: var(--highlight);\r\n  filter: drop-shadow(0px 9px 4px rgba(254, 1, 138, 0.25));\r\n}\r\n\r\n\r\n.btn-secondary{\r\n  filter: drop-shadow(0px 6px 2px rgba(97, 2, 54, 0.25));\r\n  color: var(--highlight);\r\n  font-size: 15px;\r\n  padding:5px;\r\n}\r\n\r\nbutton:after{\r\n  content: ' »';\r\n  position: absolute;\r\n  opacity: 0;  \r\n  top: 5px;\r\n  right: -20px;\r\n}\r\n\r\nbutton:hover{\r\n  padding-right: 24px;\r\n  padding-left:8px;\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n}\r\n\r\nbutton:hover:after {\r\n  opacity: 1;\r\n  right: 10px;\r\n}\r\n\r\n\r\n.btn-secondary:hover{\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n}\r\n\r\n.container,\r\n.container-fluid {\r\n  width: 100%;\r\n  padding-right: var(--gutter-x, 0.75rem);\r\n  padding-left: var(--gutter-x, 0.75rem);\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n@media (min-width: 1740px) {\r\n  .container {\r\n    max-width: 1740px;\r\n  }\r\n}\r\n\r\nlabel{\r\n  display:none;\r\n}\r\n\r\n@media screen and (max-width: 912px){\r\n\r\n    \r\n} */\r\n",""]);const l=a},489:(n,r,t)=>{t.d(r,{Z:()=>l});var e=t(738),i=t.n(e),o=t(705),a=t.n(o)()(i());a.push([n.id,":root {\r\n  --content-fonts: 'Inter', sans-serif; /* 'Lora', serif; */\r\n  --text-color: white;\r\n  --text-size: 1.7rem;\r\n  --header-color: #BA5277;\r\n  --big-margin: 35px;\r\n  --header-fonts: 'Bebas Neue', cursive; /*36px 2.25 rem h1 2.9rem*/\r\n  --background-primary: #212121;\r\n  --highlight: #F4A060;\r\n  --partner-color: #0B654B;\r\n  --darkest-purple: #1B1030;\r\n  --lightest-purple: #9EA3F7;\r\n  --lightest-pink: #FFFBFC;\r\n  --secondary-background: #F8EEF1;  \r\n  --purple-dark: #503088;\r\n  --purple-m: rgb(110, 69, 180, 0.4);\r\n  --nav-height: 80px;\r\n\r\n}\r\n\r\n",""]);const l=a}},n=>{n.O(0,[974,948],(()=>(258,n(n.s=258)))),n.O()}]);