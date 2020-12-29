let clicks = 0;

function addClick() {
    clicks += 1;
    document.getElementById("clicks").textContent = "Clicks: " + clicks
}