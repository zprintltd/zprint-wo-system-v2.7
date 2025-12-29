const SCRIPT_URL = ‘https://script.google.com/macros/s/AKfycbwkE9WHkiSqjMZBZsUYIF0BH3ivgbevnYzjqFzvCo0d-gBkje-_-fCwZmOs8vOtAxhO/exec’;

function search(){
  fetch(SCRIPT_URL+"?action=searchWO&term="+encodeURIComponent(term.value))
    .then(r=>r.json())
    .then(rows=>{
      tbl.innerHTML="";
      rows.forEach(r=>{
        const tr=document.createElement("tr");
        tr.innerHTML=`
          <td>${r.wo}</td>
          <td>${r.client}</td>
          <td>${r.category}-${r.subcategory}</td>
          <td><button onclick="printWO('${r.wo}')">Print</button></td>
        `;
        tbl.appendChild(tr);
      });
    });
}

function printWO(wo){
  window.open(SCRIPT_URL+"?action=printSingle&wo="+wo);
}
