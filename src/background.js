// Define the websites that we want the webNavigation listener to block
filter = [
    // Any of the following will trigger the web block
    { hostContains: "youtube.com" },
    { hostContains: "instagram.com" },
    { hostContains: "twitter.com" },
    { hostContains: "reddit.com" },
];

// When a blocked website is accessed (if study mode is on) user is redirected to alternate page to snooze if wanted
chrome.webNavigation.onBeforeNavigate.addListener(
    (details) => {
        chrome.storage.sync.get(
            { mode: false, endSnooze: null },
            function (result) {
                if (
                    result.mode &&
                    (!result.endSnooze ||
                        new Date(result.endSnooze) < new Date())
                ) {
                    // Redirects to alternate page
                    chrome.tabs.update(details.tabId, {
                        url: chrome.runtime.getURL("/html/altPage.html"),
                    });
                }
            }
        );
    },
    { url: filter }
);