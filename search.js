const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkE9WHkiSqjMZBZsUYIF0BH3ivgbevnYzjqFzvCo0d-gBkje-_-fCwZmOs8vOtAxhO/exec";

/* ===============================
   SEARCH
================================ */
function searchWO() {

  const params = new URLSearchParams({
    action: "searchWO",
    status: document.getElementById("status").value,
    dateFrom: document.getElementById("dateFrom").value,
    dateTo: document.getElementById("dateTo").value,
    woFrom: document.getElementById("woFrom").value,
    woTo: document.getElementById("woTo").value
  });

  fetch(`${SCRIPT_URL}?${params}`)
    .then(res => res.json())
    .then(renderResults)
    .catch(err => {
      console.error(err);
      alert("Search failed. Check Apps Script deployment.");
    });
}

/* ===============================
   RENDER RESULTS
================================ */
function renderResults(rows) {

  const table = document.getElementById("resultsTable");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  if (!rows || rows.length === 0) {
    table.style.display = "none";
    return;
  }

  rows.forEach(r => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${r.wo}</td>
      <td>${r.date}</td>
      <td>${r.client}</td>
      <td>${r.category}</td>
      <td>${r.status}</td>
      <td class="actions">
        <button onclick="printWO('${r.wo}')">PRINT</button>
      </td>
    `;

    tbody.appendChild(tr);
  });

  table.style.display = "table";
}

/* ===============================
   PRINT SINGLE
================================ */
function printWO(wo) {
  window.open(
    `${SCRIPT_URL}?action=printSingle&wo=${encodeURIComponent(wo)}`,
    "_blank"
  );
}

/* ===============================
   AUTO SEARCH FROM QR
================================ */
const params = new URLSearchParams(window.location.search);
const woParam = params.get("wo");

if (woParam) {
  document.getElementById("woFrom").value = woParam;
  document.getElementById("woTo").value = woParam;
  searchWO();
}
