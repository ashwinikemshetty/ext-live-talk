"use strict";

window.onload = async () => {
    const header = document.querySelector("h1");
  
    console.log("Inside the content file");
    if (header) {
      console.log(header);
      header.innerText = "Hello, this is from React play on page load";
    }

    // listening to the message
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === "UPDATE_TITLE") {
        const header = document.querySelector("h1");
  
        console.log("Inside the content file");
        if (header) {
          console.log(header);
          header.innerText = message.text;
        }
      }
      if (message.type === "UPDATE_DESCRIPTION") {
        const header2 = document.querySelector("h2");
  
        console.log("Inside the content file");
        if (header2) {
          console.log(header2);
          header2.innerText = message.text;
        }
      }

      if (message.type === "UPDATE_IMAGE") {
        const header = document.querySelector("h1");
  
        const img = document.createElement("img");
        img.src = chrome.runtime.getURL("icons/pikachu.png");
  
        console.log("Inside the content file");
        if (header) {
          header.after(img);
        }
      }

    })


      // text selection
  window.addEventListener("mouseup", (e) => {
    chrome.runtime.sendMessage({
      type: "UPDATE_BADGE",
      text: e.target.innerText,
      tagName: e.target.tagName,
    });
  });
}