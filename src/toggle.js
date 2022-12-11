// Element IDs
const toggleButton = document.getElementById("toggleButton");
const modeLabel = document.getElementById("modeLabel");

let studyMode = false;

// Updates text in popup based on if study mode is turned on or off
function updateLabel() {
    modeLabel.textContent = "Study Mode: " + (studyMode ? "ON" : "OFF") + "!";
}

// Changes study mode when button is clicked
toggleButton.addEventListener("click", function () {
    studyMode = !studyMode;
    chrome.storage.sync.set({ mode: studyMode });
    updateLabel();
});

// Gets current data from chrome to asses if study mode is on for user
chrome.storage.sync.get({ mode: false }, function (result) {
    console.log("get:\n", result);
    studyMode = result.mode;
    updateLabel();
});