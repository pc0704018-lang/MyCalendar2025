let currentYear = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    updateYear();
    generateCalendar(currentYear);
});

function updateYear() {
    document.getElementById("yearDisplay").textContent = currentYear;
}

function prevYear() {
    currentYear--;
    updateYear();
    generateCalendar(currentYear);
}

function nextYear() {
    currentYear++;
    updateYear();
    generateCalendar(currentYear);
}

function generateCalendar(year) {
    const calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "";

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    for (let m = 0; m < 12; m++) {
        let firstDay = new Date(year, m, 1).getDay();
        let daysInMonth = new Date(year, m + 1, 0).getDate();

        let monthDiv = document.createElement("div");
        monthDiv.className = "month";

        monthDiv.innerHTML = `<h2>${months[m]}</h2>`;

        let table = "<table><tr>";
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        days.forEach(d => table += `<th>${d}</th>`);
        table += "</tr><tr>";

        for (let i = 0; i < firstDay; i++) {
            table += "<td></td>";
        }

        for (let day = 1; day <= daysInMonth; day++) {
            if ((firstDay + day - 1) % 7 === 0) {
                table += "</tr><tr>";
            }
            table += `<td>${day}</td>`;
        }

        table += "</tr></table>";
        monthDiv.innerHTML += table;

        calendarDiv.appendChild(monthDiv);
    }
}
