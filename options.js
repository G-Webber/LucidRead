var setupArr=[]
   let Activate = document.getElementById('AddChar');
   let Remove = document.getElementById('RemoveChar');
   let Clear = document.getElementById('ClearAll');
   let letterClick = document.getElementById('letter');
   let DefaultWM = document.getElementById('DefaultWM');
   let DefaultLW = document.getElementById('DefaultLW');
   let DefaultGW = document.getElementById('DefaultGW');
  // let page = document.getElementById('buttonDiv');
  // const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
  // function constructOptions(kButtonColors) {
    // for (let item of kButtonColors) {
      // let button = document.createElement('button');
      // button.style.backgroundColor = item;
      // button.addEventListener('click', function() {
        // chrome.storage.sync.set({color: item}, function() {
          // console.log('color is ' + item);
        // })
      // });
      // page.appendChild(button);
    // }
  // }
  // constructOptions(kButtonColors);
  
function mySelection(displayArr){
  outString = ""
        for (var j = 0; j < displayArr.length; j++){
outString += "<span style=\"color: "+ displayArr[j][1]+";\">"+displayArr[j][0]+", </span>";
}
return outString;
  }

function addChar() {

    var col = document.getElementById("html5colorpicker").value;
    var newChar = document.getElementById("letter").value;
console.log(setupArr)
for (var j = 0; j < setupArr.length; j++){
if (setupArr[j][0] === newChar){
setupArr[j][1] = col;
return;
}
}
setupArr.push([newChar,col])
}

function removeChar(){

    var remChar = document.getElementById("letter").value;

for (var j = 0; j < setupArr.length; j++){
if (setupArr[j][0] === remChar){
setupArr.splice(j, 1);
break;}
}
}

function removeAll(){
setupArr=[]
}

letterClick.onfocus = function() {
letterClick.value="";
}

  Activate.onclick = function() {
addChar()
document.getElementById("para").innerHTML = mySelection(setupArr);
chrome.storage.sync.set({myArr: setupArr}, function() {
        console.log('array is ' + setupArr);
         });

}

  DefaultWM.onclick = function() {
setupArr = [["b","#00ff00"],["d","#00ffff"],["r","#ff0000"],["f","#00ffff"],["p","#ff0000"],["q","#ff8000"]];//<span style="color: #00ff00;">b, </span><span style="color: #00ffff;">d, </span><span style="color: #ff0000;">r, </span><span style="color: #00ffff;">f, </span><span style="color: #ff0000;">p, </span><span style="color: #ff8000;">q </span>
document.getElementById("para").innerHTML = mySelection(setupArr);
chrome.storage.sync.set({myArr: setupArr}, function() {
        console.log('array is ' + setupArr);
         });

}

  DefaultLW.onclick = function() {
addChar()
document.getElementById("para").innerHTML = mySelection(setupArr);
chrome.storage.sync.set({myArr: setupArr}, function() {
        console.log('array is ' + setupArr);
         });

}

  DefaultGW.onclick = function() {
addChar()
document.getElementById("para").innerHTML = mySelection(setupArr);
chrome.storage.sync.set({myArr: setupArr}, function() {
        console.log('array is ' + setupArr);
         });

}

  Remove.onclick = function() {
removeChar()
document.getElementById("para").innerHTML = mySelection(setupArr);
chrome.storage.sync.set({myArr: setupArr}, function() {
        console.log('array is ' + setupArr);
         });

}

  Clear.onclick = function() {
removeAll()
document.getElementById("para").innerHTML = mySelection(setupArr);
chrome.storage.sync.set({myArr: setupArr}, function() {
        console.log('array is ' + setupArr);
         });

}

chrome.storage.sync.get('myArr',function(data){
console.log('myArray ' + data.myArr);
if(typeof data.myArr !== "undefined")
{
setupArr =  data.myArr;
document.getElementById("para").innerHTML = mySelection(setupArr);
}
});