chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "UPDATE_BADGE") {
        // change to tagname 
        chrome.action.setBadgeBackgroundColor({color: '#ff0000'});
        chrome.action.setBadgeText({ text: message.text.length.toString() });
    }
});