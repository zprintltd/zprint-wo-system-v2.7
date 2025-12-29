{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const SCRIPT_URL = ‘https://script.google.com/macros/s/AKfycbwkE9WHkiSqjMZBZsUYIF0BH3ivgbevnYzjqFzvCo0d-gBkje-_-fCwZmOs8vOtAxhO/exec’;\
\
function search()\{\
  fetch(SCRIPT_URL+"?action=searchWO&term="+encodeURIComponent(term.value))\
    .then(r=>r.json())\
    .then(rows=>\{\
      tbl.innerHTML="";\
      rows.forEach(r=>\{\
        const tr=document.createElement("tr");\
        tr.innerHTML=`\
          <td>$\{r.wo\}</td>\
          <td>$\{r.client\}</td>\
          <td>$\{r.category\}-$\{r.subcategory\}</td>\
          <td><button onclick="printWO('$\{r.wo\}')">Print</button></td>\
        `;\
        tbl.appendChild(tr);\
      \});\
    \});\
\}\
\
function printWO(wo)\{\
  window.open(SCRIPT_URL+"?action=printSingle&wo="+wo);\
\}}
