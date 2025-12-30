/* ===============================
   CONFIG
================================ */
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkE9WHkiSqjMZBZsUYIF0BH3ivgbevnYzjqFzvCo0d-gBkje-_-fCwZmOs8vOtAxhO/exec";

/* ===============================
   BULK PRINT
================================ */
function bulkPrint() {
  const status = document.getElementById("status").value;
  const statusMsg = document.getElementById("statusMsg");

  statusMsg.style.color = "black";
  statusMsg.textContent = "Generating bulk preview…";

  const url =
    `${SCRIPT_URL}?action=bulkPrint&status=${encodeURIComponent(status)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.success || !data.docUrl) {
        throw new Error("Bulk print failed");
      }

      statusMsg.style.color = "green";
      statusMsg.textContent =
        `Generated ${data.count} job cards. Opening preview…`;

      window.open(data.docUrl, "_blank");
    })
    .catch(err => {
      statusMsg.style.color = "red";
      statusMsg.textContent =
        "Error generating bulk job cards. Check Apps Script deployment.";
      console.error(err);
    });
}
