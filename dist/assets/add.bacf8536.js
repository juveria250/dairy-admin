import{b as l,j as e,a as s,r as a,g as u}from"./vendor.2cd1dd4a.js";import{i as h}from"./lib.9f9f3aed.js";function x(n){const[c,g]=l.exports.useState(localStorage.getItem("auth_token")),[t,i]=l.exports.useState({remark:"",amount:""}),o=()=>{i({remark:"",amount:""}),n.setIsAddOpen(!1)},m=r=>{i({...t,[r.target.name]:r.target.value})},d=()=>{t.remark?t.amount?u.post("http://localhost:8000/api/expenses",{remark:t.remark,amount:t.amount},{headers:{"Content-Type":"application/json",Authorization:"Bearer "+c}}).then(r=>{r.status===200&&(n.refreshTable(),alert("Remark added"),o()),console.log("see res",r)}).catch(r=>{console.log("hi show  me err",r.response),alert("Please try again")}):alert("Please enter amount"):alert("Please enter remark")};return e(l.exports.Fragment,{children:s(a.Dialog,{size:h?"xxl":"md",className:"overflow-scroll z-40",open:n.isAddOpen,handler:o,children:[e(a.DialogHeader,{className:"bg-gray-100 text-center",children:"Add Remark"}),e(a.DialogBody,{divider:!0,children:s("div",{className:"flex flex-col gap-3 w-full",children:[e(a.Input,{label:"Remark *",name:"remark",value:t.remark,onChange:m}),e(a.Input,{type:"number",label:"Amount *",name:"amount",value:t.amount,onChange:m})]})}),s(a.DialogFooter,{className:"bg-gray-100",children:[e(a.Button,{variant:"text",color:"red",onClick:o,className:"mr-1",children:e("span",{children:"Cancel"})}),e(a.Button,{variant:"gradient",color:"green",onClick:d,children:e("span",{children:"Add"})})]})]})})}export{x as default};
