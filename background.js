console.log('background running');

// Add a listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
console.log("CLICKED")
 var msg = {
    message: "Back user clicked!"
  }
  chrome.tabs.sendMessage(tab.id, msg);
}
