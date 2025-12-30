const SCRIPT_URL = ‘https://script.google.com/macros/s/AKfycbwkE9WHkiSqjMZBZsUYIF0BH3ivgbevnYzjqFzvCo0d-gBkje-_-fCwZmOs8vOtAxhO/exec’;

function bulkPrint(){
  fetch(SCRIPT_URL+"?action=bulkPrint")
    .then(r=>r.json())
    .then(d=>{
      if(d.docUrl){
        window.open(d.docUrl,"_blank");
      }
    });
}
function bulkPrint(){
  const status = document.getElementById("status").value;

  fetch(`${SCRIPT_URL}?action=bulkPrint&status=${encodeURIComponent(status)}`)
    .then(r=>r.json())
    .then(d=>{
      if(d.docUrl){
        window.open(d.docUrl,"_blank");
      }
    });
}
