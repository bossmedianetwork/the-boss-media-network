"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[135],{7135:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var i=t(7563),r=t(1432),a=t(3740),s=t(3360),o=t(4649),l=t(189),d=t(1026),m=t(6167),c=t(1696),h=t(4214),p=t.n(h),x=function(n){var e=(0,m.useState)({}),t=(0,d.Z)(e,2),i=t[0],r=t[1],a=(0,m.useState)({}),s=(0,d.Z)(a,2),h=s[0],x=s[1],g=(0,m.useState)(!1),u=(0,d.Z)(g,2),f=u[0],Z=u[1];(0,m.useEffect)((function(){0===Object.keys(h).length&&f&&(r(""),c.Z.success({message:"Success",description:"Your message has been sent!"}))}),[h,f]);return{handleChange:function(n){n.persist(),r((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,o.Z)({},n.target.name,n.target.value))})),x((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,o.Z)({},n.target.name,""))}))},handleSubmit:function(e){e.preventDefault(),x(n(i));3===Object.keys(i).length&&p().post("https://droplet.marsbirds.art/form-submit",i).then((function(){Z(!0)})).catch((function(n){n.response?(console.error("Server responded with an error status:",n.response.status),console.error("Error data:",n.response.data)):n.request?console.error("No response received from the server:",n.request):console.error("Error setting up the request:",n.message)}))},values:i,errors:h}};function g(n){var e={};return n.name||(e.name="Name is required"),n.email?/\S+@\S+\.\S+/.test(n.email)||(e.email="Email address is invalid"):e.email="Email address is required",n.message||(e.message="Message is required"),e}var u,f,Z,j,v,y,w,b,P,C,S,k,z,E,q,F,M,W,D=t(3907),N=t(669),I=t(8924),O=(0,I.ZP)("h6")(u||(u=(0,N.Z)(["\n  font-size: 2.9em;\n  line-height: 1em;\n  font-weight: bold;\n  height: auto;\n  width: auto;\n  padding-top: 0rem;\n  text-align: center;\n\n  @media only screen and (max-width: 768px) {\n    margin-top: -5rem;\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n"]))),Y=(0,I.ZP)("p")(f||(f=(0,N.Z)(["\n  font-size: 1.5em;\n  line-height: 1.6em;\n  color: #707070;\n  height: auto;\n  margin-top: 0rem;\n  text-align: left;\n  margin-bottom: 1rem;\n\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    margin-bottom: 5rem;\n  }\n"]))),_=(0,I.ZP)("div")(Z||(Z=(0,N.Z)(["\n  position: relative;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: 0 auto;\n\n  @media only screen and (max-width: 768px) {\n    padding: 0 0rem;\n  }\n"]))),A=(0,I.ZP)("div")(j||(j=(0,N.Z)(["\n  border-radius: 3rem;\n  max-width: 600px;\n  margin: 0 auto;\n"]))),G=t(7878),L=(0,a.Z)()((function(n){var e=n.title,t=n.content,i=n.t;return(0,G.jsxs)(_,{children:[(0,G.jsx)(O,{children:i(e)}),(0,G.jsx)(A,{children:(0,G.jsx)(Y,{children:i(t)})})]})})),R=(0,I.ZP)("div")(v||(v=(0,N.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),B=(0,I.ZP)("input")(y||(y=(0,N.Z)(["\n  font-size: 0.875rem;\n"]))),H=(0,I.ZP)("div")(w||(w=(0,N.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),J=(0,I.ZP)("textarea")(b||(b=(0,N.Z)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),K=(0,I.ZP)("label")(P||(P=(0,N.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),Q=(0,a.Z)()((function(n){var e=n.name,t=n.placeholder,i=n.onChange,r=n.t;return(0,G.jsxs)(R,{children:[(0,G.jsx)(K,{htmlFor:e,children:r(e)}),(0,G.jsx)(B,{placeholder:r(t),name:e,id:e,onChange:i})]})})),T=(0,a.Z)()((function(n){var e=n.name,t=n.placeholder,i=n.onChange,r=n.t;return(0,G.jsxs)(H,{children:[(0,G.jsx)(K,{htmlFor:e,children:r(e)}),(0,G.jsx)(J,{placeholder:r(t),id:e,name:e,onChange:i})]})})),U=(0,I.ZP)("div")(C||(C=(0,N.Z)(["\n  padding: 0rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 2rem 0;\n  }\n"]))),V=(0,I.ZP)("form")(S||(S=(0,N.Z)(["\n  width: 80%;\n  max-width: 520px;\n  margin: auto;\n\n  @media only screen and (max-width: 1045px) {\n    margin-top: 1rem;\n    margin-right: auto;\n    margin-left: auto;\n  }\n"]))),X=(0,I.ZP)("span")(k||(k=(0,N.Z)(["\n  display: block;\n  font-weight: 600;\n  color: #4E4E4E;\n  height: 0.5rem;\n  padding: 0 0.675rem;\n"]))),$=(0,I.ZP)("div")(z||(z=(0,N.Z)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    text-align: center;\n    padding-top: 0.5rem;\n  }\n"]))),nn=((0,I.ZP)("h6")(E||(E=(0,N.Z)(["\n  font-size: clamp(1.5rem, 2.2vw, 22px);\n  line-height: 1.2em;\n  font-weight: bold;\n  text-align: left;\n  \n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    margin-top: calc(-1rem - 1.5vw);\n    margin-bottom: 3rem;\n  }\n"]))),(0,I.ZP)("p")(q||(q=(0,N.Z)(["\n  font-size: clamp(1rem, calc(1rem + 0.5vw), 1.5rem);\n  line-height: 1.4em;\n  color: #707070;\n  height: 20em; \n  text-align: left;\n  \n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    margin-bottom: calc(1rem + 1vw);\n  }\n"]))),(0,I.ZP)("div")(F||(F=(0,N.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: 0 auto;\n  max-width: 700px;\n  \n  @media only screen and (max-width: 768px) {\n    padding: 0 .2rem;\n  }\n"]))),(0,I.ZP)("div")(M||(M=(0,N.Z)(["\n  border-radius: 3rem;\n  max-width: 600px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),(0,I.ZP)("div")(W||(W=(0,N.Z)(["\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 0 1rem;\n"]))),(0,a.Z)()((function(n){var e=n.title,t=n.content,a=n.id,o=n.t,l=x(g),d=l.values,m=l.errors,c=l.handleChange,h=l.handleSubmit,p=function(n){var e=n.type,t=m[e];return(0,G.jsx)(s.LG,{direction:"left",children:(0,G.jsx)(X,{erros:m[e],children:t})})};return(0,G.jsx)(U,{id:a,children:(0,G.jsxs)(i.Z,{justify:"center",align:"middle",children:[(0,G.jsx)(r.Z,{lg:10,md:9,sm:20,xs:20,style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,G.jsxs)(s.Mi,{direction:"left",children:[(0,G.jsx)(L,{title:e,content:t}),(0,G.jsx)("div",{className:"image-container",style:{maxWidth:"100%",margin:"0rem"},children:(0,G.jsx)("img",{src:"/img/svg/contactform.svg",alt:"Contact Form Illustration",style:{width:"100%"}})})]})}),(0,G.jsx)(r.Z,{lg:12,md:12,sm:24,xs:24,children:(0,G.jsx)(s.Mi,{direction:"right",children:(0,G.jsxs)(V,{autoComplete:"off",onSubmit:h,children:[(0,G.jsxs)(r.Z,{span:24,children:[(0,G.jsx)(Q,{type:"text",name:"name",placeholder:"State Your Alias",value:d.name||"",onChange:c}),(0,G.jsx)(p,{type:"name"})]}),(0,G.jsxs)(r.Z,{span:24,children:[(0,G.jsx)(Q,{type:"text",name:"email",placeholder:"Where Should We Forward the Reply?",value:d.email||"",onChange:c}),(0,G.jsx)(p,{type:"email"})]}),(0,G.jsxs)(r.Z,{span:24,children:[(0,G.jsx)(T,{placeholder:"What\u2019s the Proposition?",value:d.message||"",name:"message",onChange:c}),(0,G.jsx)(p,{type:"message"})]}),(0,G.jsx)($,{children:(0,G.jsx)(D.z,{name:"submit",children:o("Dispatch Message")})})]})})})]})})})))}}]);
//# sourceMappingURL=135.feaf165e.chunk.js.map