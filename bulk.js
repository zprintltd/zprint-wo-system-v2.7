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

  // OPEN instead of FETCH (CORS-SAFE)
  window.open(`${SCRIPT_URL}?${params.toString()}`, "_blank");
}
