"use strict";

window.onload = async () => {

  const body = document.getElementsByTagName('body')[0];
  // update title
  const updateTitleButton = document.getElementById("updateTitle");
  const titleText = document.getElementById("titleText");
  updateTitleButton.addEventListener("click", () => {

    // logic to update the title
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
          type: "UPDATE_TITLE",
          text: titleText.value,
        });
      });
  });

    // update desc
    const updateDescButton = document.getElementById("updateDesc");
    const descText = document.getElementById("descText");
    updateDescButton.addEventListener("click", () => {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
          type: "UPDATE_DESCRIPTION",
          text: descText.value,
        });
      });
    });

  // update image
  const updateImgButton = document.getElementById("updateImg");
  updateImgButton.addEventListener("click", () => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        type: "UPDATE_IMAGE",
      });
    });
  });

  // options customization
  chrome.storage.local.get({ favoriteColor: "lightpink" }, (items) => {
    body.style.backgroundColor = items.favoriteColor;
  });

};
