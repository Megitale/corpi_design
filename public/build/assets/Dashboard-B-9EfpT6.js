import{j as e,Y as t}from"./app-BOocliNB.js";import{A as d}from"./AuthenticatedLayout-CXhTMGKj.js";import"./ApplicationLogo-eVRDhcfI.js";import"./transition-Fc-T5-sb.js";const o=[{projectId:1,projectName:"Proyecto A",code:"PA-001",status:"Activo",startDate:"2023-01-01",responsible:"Juan Pérez"},{projectId:1,projectName:"Proyecto A",code:"PA-001",status:"Activo",startDate:"2023-01-01",responsible:"Juan Pérez"},{projectId:2,projectName:"Proyecto B",code:"PB-002",status:"En progreso",startDate:"2023-02-15",responsible:"María Gómez"}],c=({projects:r})=>e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full bg-white",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-200",children:[e.jsx("th",{className:"border px-4 py-2",children:"Project"}),e.jsx("th",{className:"border px-4 py-2",children:"Nombre proyecto"}),e.jsx("th",{className:"border px-4 py-2",children:"Código"}),e.jsx("th",{className:"border px-4 py-2",children:"Estado"}),e.jsx("th",{className:"border px-4 py-2",children:"Fecha inicio"}),e.jsx("th",{className:"border px-4 py-2",children:"Responsable"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:r.map((s,a)=>e.jsxs("tr",{className:a%2===0?"bg-gray-100":"bg-white",children:[e.jsx("td",{className:"border px-4 py-2",children:s.projectId}),e.jsx("td",{className:"border px-4 py-2",children:s.projectName}),e.jsx("td",{className:"border px-4 py-2",children:s.code}),e.jsx("td",{className:"border px-4 py-2",children:s.status}),e.jsx("td",{className:"border px-4 py-2",children:s.startDate}),e.jsx("td",{className:"border px-4 py-2",children:s.responsible}),e.jsx("td",{children:e.jsx("button",{children:"..."})})]},a))})]})});function p({auth:r}){return e.jsxs(d,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Dashboard"}),children:[e.jsx(t,{title:"Dashboard"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsx("div",{className:"p-6 text-gray-900",children:"Listado de proyectos"}),e.jsx(c,{projects:o})]})})})]})}export{p as default};