
function openWeek(number, title, description, file) {

    document.getElementById("detail-week").textContent =
        "WEEK " + String(number).padStart(2, "0");

    document.getElementById("detail-title").textContent = title;

    document.getElementById("detail-description").textContent =
        description;

    document.getElementById("document-frame").src = file;

    document.getElementById("week-detail").style.display = "block";

    document.getElementById("week-detail").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function closeWeek() {

    document.getElementById("document-frame").src = "";

    document.getElementById("week-detail").style.display = "none";

    document.getElementById("weeks").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
