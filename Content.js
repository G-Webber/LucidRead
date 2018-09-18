chrome.runtime.onMessage.addListener(receiver);
	 
	  console.log("Content Go!")
// Callback for when a message is received
function receiver(request, sender, sendResponse) {
  if (request.message === "user clicked!") {
	  console.log("hell yess")
	//  sendResponse({farewell:"it is done!"});
    // Do something!
  }
}
