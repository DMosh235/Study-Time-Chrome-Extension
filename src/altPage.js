const minutesInput = document.getElementById("minutesInput");
const snoozeButton = document.getElementById("snooze");

// User can snooze the study mode for an input amount of time
snoozeButton.addEventListener("click", function () {
    const minutes = minutesInput.value;
    if (minutes < 0) minutes = 0;

    // Calculate the time snooze will end
    const now = new Date();
    const newDate = new Date(now.getTime() + 60000 * minutes);

    // Store the data
    chrome.storage.sync.set({ endSnooze: newDate.toJSON() }, function () {
        console.log("Snoozing until", newDate);
    });
});