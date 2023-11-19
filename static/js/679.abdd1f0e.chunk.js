"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[679],{3805:function(n,e,t){t.d(e,{S:function(){return f}});var i,o,r=t(168),a=t(1191),s=(0,a.F4)(i||(i=(0,r.Z)(["\n  0% {\n    box-shadow: inset 0 0 0 0 #1b4f72;\n  }\n  100% {\n    box-shadow: inset 2px 2px 4px 0 #1b4f72, inset -2px -2px 4px 0 #1b4f72;  // Smoother and centered bevel effect\n  }\n"]))),f=(0,a.ZP)("button")(o||(o=(0,r.Z)(["\n  width: ",";\n  background: ",";\n  color: #FFFFFF;\n  font-size: 1.1rem;\n  font-weight: 700;\n  border: ",";  \n  border-radius: 8px;\n  padding: 13px 0;\n  cursor: pointer;\n  margin-top: 1rem;  // Increased top margin\n  max-width: 180px;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  outline: none;\n  box-shadow: ",";\n\n  &:hover {\n    box-shadow: 0 0 20px #286fff, 0 0 30px #286fff, 0 0 34px #7aa9ff;  // Crisper glow on hover\n  }\n\n  &:active {\n    animation: "," 0.1s forwards;  // Bevel effect on click\n  }\n\n  @media only screen and (max-width: 1025px) {\n    border: 2px solid #286fff;\n    box-shadow: 0 0 10px #286fff, 0 0 20px #286fff;\n    margin-bottom: 1rem;\n  }\n"])),(function(n){return n.fixedWidth?"180px":"100%"}),(function(n){return n.color?"linear-gradient(45deg, #286fff, #7aa9ff)":"radial-gradient(circle farthest-corner at center center, #286fff 0%, #397ad9 5%, #7aa9ff 90%, #7aa9ff 100%)"}),(function(n){return n.glowing?"2px solid #286fff":"1px solid #ccc"}),(function(n){return n.glowing?"0 0 10px #286fff, 0 0 20px #286fff":"none"}),s)},5829:function(n,e,t){t.d(e,{R:function(){return a},p:function(){return r}});var i=t(2791),o=t(184),r=function(n){return n.split(" ").map((function(n,e){return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)("span",{className:"word word-".concat(e),children:n})," "]},e)}))},a=function(n){var e=0,t=[],i=n.split(" ");return i.forEach((function(n,r){n.split("\n").forEach((function(n,a){if(a>0&&(t.push((0,o.jsx)("br",{},"br-".concat(e))),e++),n){var s=n,f=r<i.length-1?i[r+1]:"";n.endsWith(":")&&f&&(s+=f,i[r+1]="");var d=["Film\xa0Industry\xa0Expertise","Musical\xa0Legacy","Physical\xa0Health\xa0&\xa0Science\xa0Expertise","Our\xa0Impact"].includes(s)?"underline":"";t.push((0,o.jsx)("span",{className:"letter letter-".concat(e," ").concat(d),children:s},"part-".concat(e))),e++}})),r<i.length-1&&(t.push((0,o.jsx)("span",{className:"letter",children:"\xa0"},"space-".concat(e))),e++)})),t}},4679:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var i,o,r,a,s=t(9439),f=t(2791),d=t(4892),l=t(9603),c=t(4720),p=t(3805),h=t(168),u=t(1191),m=(0,u.F4)(i||(i=(0,h.Z)(["\n  from { opacity: 0; }\n  to { opacity: 1; }\n"]))),x=(0,u.F4)(o||(o=(0,h.Z)(["\n  from {\n    text-shadow: \n      0 0 1px #fff, \n      0 0 2px #286fff,\n      0 0 3px #286fff;\n  }\n  to {\n    text-shadow: \n      0 0 2px #fff, \n      0 0 3px #286fff,\n      0 0 6px #286fff;\n  }\n"]))),g=u.ZP.h2(r||(r=(0,h.Z)(["\n  font-size: 2em; // Default font size for larger screens\n  font-weight: bold;\n  text-align: center;\n  color: #fff;\n  margin: 20px 0;\n  animation: "," 4s ease-in-out infinite alternate;\n\n  &:hover {\n    color: rgb(40, 111, 255); // Blue color on hover\n  }\n\n  // Media query for mobile devices\n  @media only screen and (max-width: 768px) {\n    font-size: 1.3em; // Smaller font size for mobile screens\n    // Additional styles for mobile can be added here\n  }\n\n  // Add more media queries if needed for different breakpoints\n"])),x),b=(u.ZP.div(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px;\n  background-color: #000000; // Dark background for contrast\n  animation: "," 2s ease forwards;\n  animation-delay: 3s; // Delay the appearance\n  border: 2px solid #fff; // Basic border, replace with your color preference\n\n  // Glowing border effect with neon reds and pinks\n  box-shadow: \n    0 0 5px #98b9fd, // Innermost shadow for tight glow\n    0 0 15px #286fff, // Medium glow\n    0 0 30px #fff, // Larger glow with a pink hue\n\n  // Ensuring the glow effect is smooth and doesn't cause layout shift\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: -2px; // Align with the border size\n    right: -2px; // Align with the border size\n    bottom: -2px; // Align with the border size\n    left: -2px; // Align with the border size\n    z-index: -1;\n    background: inherit;\n    border-radius: inherit; // Adjust this if your block has rounded corners\n  }\n"])),m),t(282)),w=t(5829),v=t(184),y=(0,c.Z)()((function(n){var e=n.title,t=n.subtitle,i=n.content,o=n.button,r=n.id,a=n.t,c=(0,f.useState)(!1),h=(0,s.Z)(c,2),u=h[0],m=h[1],x=(0,f.useState)(0),y=(0,s.Z)(x,2),Z=y[0],k=y[1],F=(0,f.useRef)(null);(0,f.useEffect)((function(){var n=window.innerWidth<=768?[.3]:[.1],e=new IntersectionObserver((function(n){var e=(0,s.Z)(n,1)[0];m(e.isIntersecting),e.isIntersecting&&k((function(n){return n+1}))}),{threshold:n});return F.current&&e.observe(F.current),function(){F.current&&e.unobserve(F.current)}}),[]);return(0,v.jsx)(b.I6,{ref:F,id:r,isVisible:u,children:(0,v.jsxs)(d.Z,{justify:"start",align:"middle",children:[(0,v.jsx)(b.Dx,{children:(0,w.p)(a(e))},"title-".concat(Z)),(0,v.jsxs)(b.vs,{children:[(0,v.jsx)(l.Z,{lg:12,md:24,sm:24,xs:24,children:(0,v.jsxs)(b.wh,{isVisible:u,children:[(0,v.jsx)(g,{children:a(t)},"subtitle-".concat(Z))," ",(0,v.jsx)(b.VY,{children:(0,w.R)(a(i))},"content-".concat(Z)),(0,v.jsx)(p.S,{onClick:function(){var n;null===(n=document.getElementById("contact"))||void 0===n||n.scrollIntoView({behavior:"smooth"})},glowing:!0,fixedWidth:!0,children:a(o)})]},"grey-area-".concat(Z))}),(0,v.jsx)(l.Z,{lg:12,md:24,sm:24,xs:24,children:(0,v.jsx)(b.fb,{isVisible:u,children:(0,v.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"intro-video",children:[(0,v.jsx)("source",{src:"/img/video/phone-video-final.webm",type:"video/webm"}),"Your browser does not support the video tag."]})},"image-wrapper-".concat(Z))})]})]})})}))},282:function(n,e,t){t.d(e,{Dx:function(){return L},I6:function(){return C},VY:function(){return T},eu:function(){return V},fb:function(){return O},vs:function(){return X},wh:function(){return W}});var i,o,r,a,s,f,d,l,c,p,h,u,m,x,g,b,w,v,y,Z,k,F,z,j,A,P,I=t(168),S=t(1191),V=(0,S.F4)(i||(i=(0,I.Z)(["\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]))),D=(0,S.F4)(o||(o=(0,I.Z)(["\n  0% {\n    box-shadow: \n      0 0 4px #98b9fd,\n      0 0 12px #286fff, \n      0 0 30px #286fff;\n  }\n  100% {\n    box-shadow: \n      0 0 10px #98b9fd,\n      0 0 16px #286fff, \n      0 0 32px #286fff;\n  }\n"]))),E=(0,S.F4)(r||(r=(0,I.Z)(["\n  from {\n    text-shadow: \n      0 0 1px #fff,\n      0 0 2px #286fff, \n      0 0 3px #286fff;\n  }\n  to {\n    text-shadow: \n      0 0 2px #fff,\n      0 0 6px #286fff, \n      0 0 8px #286fff;\n  }\n"]))),Y=(0,S.F4)(a||(a=(0,I.Z)(["\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"]))),B=(0,S.F4)(s||(s=(0,I.Z)(["\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]))),M=(0,S.F4)(f||(f=(0,I.Z)(["\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]))),N=(0,S.F4)(d||(d=(0,I.Z)(["\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"]))),R=(0,S.F4)(l||(l=(0,I.Z)(["\n  0% {\n    visibility: hidden;\n    opacity: 0;\n  }\n  to {\n    visibility: visible;\n    opacity: 1;\n  }\n"]))),W=(S.ZP.section(c||(c=(0,I.Z)(['\n  position: relative;\n  padding: 1.5rem 0 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-radius: 20px;\n  visibility: hidden;\n  width: 100vw;\n  margin-left: calc(-50vw + 50%);\n  min-height: 600px;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100%;\n    background: url(\'/img/svg/middleblock-bg.svg\') no-repeat center center;\n    background-size: cover;\n    z-index: -1;\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(28, 28, 28, 0.9); // Dark gray overlay with 20% opacity\n    z-index: -2; // Ensure it\'s under the background image\n    border-radius: 20px; // Match the border-radius of the section\n  }\n\n  animation: ',";\n"])),(function(n){return n.isVisible?(0,S.iv)(p||(p=(0,I.Z)([""," 2s ease forwards, "," 1s ease forwards, "," 1.5s ease-in-out infinite alternate"])),R,Y,D):"none"})),S.ZP.div(h||(h=(0,I.Z)(["\n  background-color: #000000;\n  padding: 1rem;\n  margin-top: 2rem;\n  border-radius: 12px;\n  border: 2px solid #ccc;\n  box-shadow: 0 0 4px rgba(255, 255, 255, 0.2),\n               0 0 12px rgba(255, 255, 255, 0.2),\n               0 0 20px rgba(255, 255, 255, 0.2);\n  visibility: hidden;\n\n  // Apply the neon glow animation\n  animation: ",";\n"])),(function(n){return n.isVisible?(0,S.iv)(u||(u=(0,I.Z)([""," 2s ease forwards, "," 1s ease forwards, "," 1.5s ease-in-out infinite alternate"])),R,N,D):"none"}))),q=(S.ZP.button(m||(m=(0,I.Z)(["\n  padding: 10px 20px;\n  background-color: #ff2d2d;\n  color: white; // Text color\n  font-size: 1.2em;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  z-index: 2;\n  overflow: hidden;\n  visibility: ",";\n  animation: ",";\n\n  // Neon glow effect\n  box-shadow: \n    0 0 5px #ff2d2d,\n    0 0 15px #ff2d2d,\n    0 0 30px #ff69b4,\n    0 0 45px #ff69b4,\n\n  // Text glow effect on hover\n  &:hover {\n    box-shadow: \n      0 0 10px #ffffff,\n      0 0 20px #fff,\n      0 0 30px #fff,\n    color: #ff69b4;\n  }\n\n  // Fallback for browsers that do not support the glow effect\n  &:focus {\n    background-color: #ff2d2d;\n    color: white;\n  }\n\n  // Add media queries if you need to adjust the sizes on different screen sizes\n"])),(function(n){return n.animationsFinished?"visible":"hidden"}),(function(n){return n.animationsFinished?(0,S.iv)(x||(x=(0,I.Z)([""," 2s ease forwards"])),R):"none"})),function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.05;return(0,S.iv)(g||(g=(0,I.Z)(["\n  animation-delay: ","s;\n"])),n*e)}),C=S.ZP.section(b||(b=(0,I.Z)(['\n  position: relative;\n  padding: 1.5rem 0 3rem;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  margin-left: calc(-50vw + 50%);\n  margin-bottom: 50px;\n  min-height: 600px;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    // background: url(\'/img/svg/middleblock-bg.svg\') no-repeat center center;\n    background-size: cover;\n    z-index: -1;\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(28, 28, 28, 0.9);\n    z-index: -2; // Ensure it\'s under the background image\n  }\n\n  // The animation is applied based on the isVisible prop\n  animation: ',";\n"])),(function(n){return n.isVisible?(0,S.iv)(w||(w=(0,I.Z)([""," 2s ease forwards"])),R):"none"})),L=(0,S.ZP)("h6")(v||(v=(0,I.Z)(["\n  font-size: clamp(1.2rem, 2.4vw, 10em);\n  font-weight: bold;\n  background: -webkit-linear-gradient(right, #ffffff, #ffffff);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: 0 0 1.5px #ffffff;\n  padding-left: 1rem;\n  text-align: center;\n  margin: 0 0;\n  width: 100%;\n  white-space: nowrap;\n  position: relative;\n  margin-top: 5rem;\n  animation: "," 3s ease-in-out infinite alternate;\n\n  .word {\n    display: inline-block;\n    animation: "," 1.5s ease forwards;\n  }\n\n  ","\n\n  &:hover {\n    background: none; // Remove gradient background on hover\n    -webkit-text-fill-color: initial; // Reset text color\n    color: rgb(40, 111, 255); // Apply blue color on hover\n    text-shadow: none; // Optionally, remove text shadow on hover\n  }\n"])),E,V,Array.from({length:50},(function(n,e){return(0,S.iv)(y||(y=(0,I.Z)(["\n    .word-"," {\n      ",";\n    }\n  "])),e,q(e))}))),T=(0,S.ZP)("div")(Z||(Z=(0,I.Z)(["\n  padding: clamp(0rem, 0vw, 0rem) 0;\n  font-size: clamp(.85rem, 2.5vw, 1.5em);\n\n  .paragraph {\n    display: inline-block;\n    opacity: 0;\n    animation: "," 2s ease forwards;\n  }\n\n  // Apply delayed animations to each paragraph\n  ","\n\n  .subtitle {\n    font-weight: bold;\n    text-decoration: underline;\n    font-size: 1.1em; // Adjusted font size\n    margin-bottom: 0.3rem;\n    color: #FFFFFF; // Default color\n    animation: "," 4s ease-in-out infinite alternate;\n\n    &:hover {\n      color: rgb(40, 111, 255); // Blue hover color\n    }\n  }\n\n  \n  .underline {\n    // text-decoration: underline;\n    font-size: 1.3em; // Default font size for larger screens\n    color: #FFFFFF; // Default color\n  \n    animation: "," 1.5s ease-in-out infinite alternate;\n  \n    @media only screen and (max-width: 768px) {\n      font-size: 1.1em; // Smaller font size for mobile screens\n      color: #286fff; // Apply blue color for mobile screens\n    }\n  \n    &:hover {\n      color: rgb(40, 111, 255); // Blue hover color\n    }\n  }\n\n  .letter {\n    display: inline-block;\n    opacity: 0;\n    animation: "," 0.08s ease forwards;\n  }\n\n  // Apply dynamic delays for each letter\n  ","\n\n  // Styles for mobile screens\n  @media only screen and (max-width: 768px) {\n    margin: 0 1rem;\n    margin-top: 0em;\n  }\n\n  // Styles for desktop and larger screens\n  @media only screen and (min-width: 1024px) {\n    font-size: 1.2em !important; // Larger font size for desktop\n    text-align: left; // Align text to the left on larger screens\n    item-align: center;\n  }\n"])),Y,Array.from({length:10},(function(n,e){return(0,S.iv)(k||(k=(0,I.Z)(["\n    .paragraph-"," {\n      ",";\n    }\n  "])),e,q(e,2))})),E,D,M,Array.from({length:400},(function(n,e){return(0,S.iv)(F||(F=(0,I.Z)(["\n    .letter-"," {\n      ",";\n    }\n  "])),e,q(e,.01))}))),X=((0,S.ZP)("h2")(z||(z=(0,I.Z)(["\n  font-size: 1.4em;\n  font-weight: bold;\n  text-align: center;\n  color: #fff;\n  margin: 1rem 0;\n"]))),S.ZP.div(j||(j=(0,I.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1300px;\n  width: 90%;\n  margin: auto;\n  gap: 2rem; // Add this line to create a margin between the left and right sections\n  @media only screen and (max-width: 768px) {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n  @media only screen and (max-width: 993px) {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n"])))),O=S.ZP.div(A||(A=(0,I.Z)(["\n  animation: "," 1s ease forwards;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  overflow: hidden;\n  animation: ",";\n\n  .intro-video {\n    width: 100%; // Make the video responsive and cover the available width\n    height: auto; // Maintain aspect ratio\n    max-width: clamp(250px, 50vw, 500px); // Limit the width on larger screens\n  }\n\n  // Specific media query for the troublesome range\n  @media only screen and (min-width: 765px) and (max-width: 980px) {\n    .intro-video {\n      max-height: 100%; // Ensure it does not exceed the container's height\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    animation: "," 1s ease forwards;\n    .intro-video {\n      max-width: 300px; // Decrease the size for mobile devices\n    }\n  }\n  @media only screen and (max-width: 993px) {\n    order: -1; // This will move the ImageWrapper above the content if flex-direction is column\n    width: 100%; // Adjust the width as needed to center the video\n    margin-bottom: -2rem; // Add some space below the video\n    margin-top: 2rem;\n  }\n"])),Y,(function(n){return n.isVisible?(0,S.iv)(P||(P=(0,I.Z)([""," 1s ease forwards"])),Y):"none"}),B)}}]);
//# sourceMappingURL=679.abdd1f0e.chunk.js.map