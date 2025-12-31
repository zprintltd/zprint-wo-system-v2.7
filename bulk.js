const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkE9WHkiSqjMZBZsUYIF0BH3ivgbevnYzjqFzvCo0d-gBkje-_-fCwZmOs8vOtAxhO/exec";

function bulkPrint() {
  const params = new URLSearchParams({
    action: "bulkPrint",
    status: status.value,
    dateFrom: dateFrom.value,
    dateTo: dateTo.value,
    woFrom: woFrom.value,
    woTo: woTo.value,
    client: client.value,
    phone: phone.value
  });

  fetch(`${SCRIPT_URL}?${params}`)
    .then(r => r.json())
    .then(d => {
      if (d.docUrl) {
        window.open(d.docUrl, "_blank");
      } else {
        alert("No records found.");
      }
    });
}
