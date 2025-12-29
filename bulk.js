const SCRIPT_URL = "PASTE_V2_7_EXEC_URL_HERE";

function bulkPrint(){
  fetch(SCRIPT_URL+"?action=bulkPrint")
    .then(r=>r.json())
    .then(d=>{
      if(d.docUrl){
        window.open(d.docUrl,"_blank");
      }
    });
}
