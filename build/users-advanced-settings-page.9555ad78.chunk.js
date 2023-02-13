"use strict";(self.webpackChunkjm_portfolio_backend=self.webpackChunkjm_portfolio_backend||[]).push([[9460],{98352:(T,v,t)=>{t.r(v),t.d(v,{default:()=>G});var e=t(67294),E=t(23724),o=t(97132),c=t(80831),n=t(68547),g=t(14087),b=t(185),p=t(67838),O=t(49066),R=t(29728),y=t(41580),S=t(7681),f=t(91216),a=t(82562),l=t(75515),r=t(11276),s=t(74571),d=t(85018),h=t(81912),i=t(89031);const P=[{intlLabel:{id:(0,i.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,i.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,i.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,i.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,i.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,i.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,i.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,i.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,i.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,i.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,i.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,i.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var B=t(53209);const F=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),Z=B.Ry().shape({email_confirmation_redirection:B.nK().when("email_confirmation",{is:!0,then:B.Z_().matches(F).required(),otherwise:B.Z_().nullable()}),email_reset_password:B.Z_(n.translatedErrors.string).matches(F,n.translatedErrors.regex).nullable()}),N=async()=>{const{get:u}=(0,n.getFetchClient)(),{data:A}=await u((0,i.Gc)("advanced"));return A},U=u=>{const{put:A}=(0,n.getFetchClient)();return A((0,i.Gc)("advanced"),u)},W=()=>e.createElement(n.CheckPagePermissions,{permissions:h.Z.readAdvancedSettings},e.createElement(H,null)),H=()=>{const{formatMessage:u}=(0,o.useIntl)(),A=(0,n.useNotification)(),{lockApp:K,unlockApp:D}=(0,n.useOverlayBlocker)(),{notifyStatus:j}=(0,g.G)(),k=(0,E.useQueryClient)();(0,n.useFocusWhenNavigate)();const $=(0,e.useMemo)(()=>({update:h.Z.updateAdvancedSettings}),[]),{isLoading:Q,allowedActions:{canUpdate:V}}=(0,n.useRBAC)($),{status:X,data:I}=(0,E.useQuery)("advanced",()=>N(),{onSuccess(){j(u({id:(0,i.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){A({type:"warning",message:{id:(0,i.OB)("notification.error"),defaultMessage:"An error occured"}})}}),Y=Q||X!=="success",w=(0,E.useMutation)(M=>U(M),{async onSuccess(){await k.invalidateQueries("advanced"),A({type:"success",message:{id:(0,i.OB)("notification.success.saved"),defaultMessage:"Saved"}}),D()},onError(){A({type:"warning",message:{id:(0,i.OB)("notification.error"),defaultMessage:"An error occured"}}),D()},refetchActive:!0}),{isLoading:J}=w,q=async M=>{K();const L=M.email_confirmation?M.email_confirmation_redirection:"";await w.mutateAsync({...M,email_confirmation_redirection:L})};return Y?e.createElement(b.o,{"aria-busy":"true"},e.createElement(n.SettingsPageTitle,{name:u({id:(0,i.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(p.T,{title:u({id:(0,i.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(O.D,null,e.createElement(n.LoadingIndicatorPage,null))):e.createElement(b.o,{"aria-busy":J},e.createElement(n.SettingsPageTitle,{name:u({id:(0,i.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(c.Formik,{onSubmit:q,initialValues:I.settings,validateOnChange:!1,validationSchema:Z,enableReinitialize:!0},({errors:M,values:L,handleChange:z,isSubmitting:_})=>e.createElement(n.Form,null,e.createElement(p.T,{title:u({id:(0,i.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:e.createElement(R.z,{loading:_,type:"submit",disabled:!V,startIcon:e.createElement(d.Z,null),size:"S"},u({id:"global.save",defaultMessage:"Save"}))}),e.createElement(O.D,null,e.createElement(y.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(S.K,{spacing:4},e.createElement(l.Z,{variant:"delta",as:"h2"},u({id:"global.settings",defaultMessage:"Settings"})),e.createElement(r.r,{gap:6},e.createElement(s.P,{col:6,s:12},e.createElement(f.P,{label:u({id:(0,i.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:L.default_role,hint:u({id:(0,i.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:m=>z({target:{name:"default_role",value:m}})},I.roles.map(m=>e.createElement(a.W,{key:m.type,value:m.type},m.name)))),P.map(m=>{let C=L[m.name];return C||(C=m.type==="bool"?!1:""),e.createElement(s.P,{key:m.name,...m.size},e.createElement(n.GenericInput,{...m,value:C,error:M[m.name],disabled:m.name==="email_confirmation_redirection"&&L.email_confirmation===!1,onChange:z}))}))))))))},G=W},89031:(T,v,t)=>{t.d(v,{YX:()=>o,Gc:()=>g,OB:()=>b.Z});var e=t(96486);const o=p=>Object.keys(p).reduce((O,R)=>{const y=p[R].controllers,S=Object.keys(y).reduce((f,a)=>((0,e.isEmpty)(y[a])||(f[a]=y[a]),f),{});return(0,e.isEmpty)(S)||(O[R]={controllers:S}),O},{});var c=t(31498);const g=p=>`/${c.Z}/${p}`;var b=t(84757)},49066:(T,v,t)=>{t.d(v,{D:()=>c});var e=t(67294),E=t(45697),o=t(41580);const c=({children:n})=>e.createElement(o.x,{paddingLeft:10,paddingRight:10},n);c.propTypes={children:E.node.isRequired}},67838:(T,v,t)=>{t.d(v,{T:()=>y});var e=t(67294),E=t(71893),o=t(45697),c=t(75515),n=t(41580),g=t(11047);const b=a=>{const l=(0,e.useRef)(null),[r,s]=(0,e.useState)(!0),d=([h])=>{s(h.isIntersecting)};return(0,e.useEffect)(()=>{const h=l.current,i=new IntersectionObserver(d,a);return h&&i.observe(l.current),()=>{h&&i.disconnect()}},[l,a]),[l,r]};var p=t(98402);const O=(a,l)=>{const r=(0,p.useCallbackRef)(l);(0,e.useLayoutEffect)(()=>{const s=new ResizeObserver(r);return Array.isArray(a)?a.forEach(d=>{d.current&&s.observe(d.current)}):a.current&&s.observe(a.current),()=>{s.disconnect()}},[a,r])},R=()=>{const a=(0,e.useRef)(null),[l,r]=(0,e.useState)(null),[s,d]=b({root:null,rootMargin:"0px",threshold:0});return O(s,()=>{s.current&&r(s.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{a.current&&r(a.current.getBoundingClientRect())},[a]),{containerRef:s,isVisible:d,baseHeaderLayoutRef:a,headerSize:l}},y=a=>{const{containerRef:l,isVisible:r,baseHeaderLayoutRef:s,headerSize:d}=R();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:d?.height},ref:l},r&&e.createElement(f,{ref:s,...a})),!r&&e.createElement(f,{...a,sticky:!0,width:d?.width}))};y.displayName="HeaderLayout";const S=(0,E.default)(n.x)`
  width: ${a=>a.width}px;
`,f=e.forwardRef(({navigationAction:a,primaryAction:l,secondaryAction:r,subtitle:s,title:d,sticky:h,width:i,...x},P)=>{const B=typeof s=="string";return h?e.createElement(S,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:i,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(g.k,{justifyContent:"space-between"},e.createElement(g.k,null,a&&e.createElement(n.x,{paddingRight:3},a),e.createElement(n.x,null,e.createElement(c.Z,{variant:"beta",as:"h1",...x},d),B?e.createElement(c.Z,{variant:"pi",textColor:"neutral600"},s):s),r?e.createElement(n.x,{paddingLeft:4},r):null),e.createElement(g.k,null,l?e.createElement(n.x,{paddingLeft:2},l):void 0))):e.createElement(n.x,{ref:P,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:a?6:8,background:"neutral100","data-strapi-header":!0},a?e.createElement(n.x,{paddingBottom:2},a):null,e.createElement(g.k,{justifyContent:"space-between"},e.createElement(g.k,null,e.createElement(c.Z,{as:"h1",variant:"alpha",...x},d),r?e.createElement(n.x,{paddingLeft:4},r):null),l),B?e.createElement(c.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},s):s)});f.displayName="BaseHeaderLayout",f.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},f.propTypes={navigationAction:o.node,primaryAction:o.node,secondaryAction:o.node,sticky:o.bool,subtitle:o.oneOfType([o.string,o.node]),title:o.string.isRequired,width:o.number},y.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},y.propTypes={navigationAction:o.node,primaryAction:o.node,secondaryAction:o.node,subtitle:o.oneOfType([o.string,o.node]),title:o.string.isRequired}},185:(T,v,t)=>{t.d(v,{o:()=>n});var e=t(67294),E=t(45697),o=t(71893);const c=o.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,n=({labelledBy:g,...b})=>{const p=g||"main-content-title";return e.createElement(c,{"aria-labelledby":p,id:"main-content",tabIndex:-1,...b})};n.defaultProps={labelledBy:void 0},n.propTypes={labelledBy:E.string}}}]);
