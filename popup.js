 let changeColor = document.getElementById('Activate');
 let bug = document.getElementById('Bug');
 let options = document.getElementById('Options');

 chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });  
  let params = {
		active : true,
		currentWindow: true
		}
  changeColor.onclick = function(element) {
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
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };
  
  bug.onclick = function(element) {
	  
	chrome.tabs.query(params, gotTabs);
	
	function gotTabs(tabs) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "https://dweet.io/dweet/for/Lucid?from=Bugs", true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({
			url: tabs[0].url
		}));
	}
	
	  console.log("bug Clicked")
	  
	  
	var msg = {
		message: "Bug clicked!"
	}

  };
  
  options.onclick = function(element) {
	  chrome.runtime.openOptionsPage()

  };