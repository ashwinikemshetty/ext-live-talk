// Saves options to chrome.storage
const saveOptions = () => {
    const color = document.getElementById("color").value;

    chrome.storage.local.set(
        { favoriteColor: color},
        () => {
        // Update status to let user know options were saved.
        const status = document.getElementById("status");
        status.textContent = "Options saved.";
        setTimeout(() => {
            status.textContent = "";
        }, 750);
        }
    );
};
  
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
chrome.storage.local.get({ favoriteColor: "lightpink" }, (items) => {
    document.getElementById("color").value = items.favoriteColor;
});
};
  
document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
