 let Activate = document.getElementById('Activate');
 let options = document.getElementById('Options');

 chrome.storage.sync.get('color', function(data) {
    Activate.style.backgroundColor = data.color;
    Activate.setAttribute('value', data.color);
  });  
  let params = {
active : true,
currentWindow: true
}
  Activate.onclick = function(element) {
var msg = {
message: "user clicked!"
}

chrome.tabs.query(params, gotTabs);

function gotTabs(tabs) {
console.log(tabs)
console.log(tabs[0].id)
chrome.tabs.sendMessage(tabs[0].id, msg);
}
    
let color = element.target.value;
//    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 //     chrome.tabs.executeScript(
  //        tabs[0].id,
  //        makeLucid());
 //   });
  };
  
  options.onclick = function(element) {
  chrome.runtime.openOptionsPage()

  };