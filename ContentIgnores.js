chrome.runtime.onMessage.addListener(receiver);
	 
	  console.log("Content Go!")
// Callback for when a message is received
function receiver(request, sender, sendResponse) {
  if (request.message === "user clicked!") {
	console.log("hell yess");
	chrome.storage.sync.get('myArr', function(data) {
	console.log("duruing data length: " + data.myArr.length);
	if(typeof data.myArr !== "undefined" && data.myArr.length>0)
	{
		makeLucid(data.myArr);
	}
	else{
		alert("no setting found, Please go to options page");
		}
	
  });
	  
   // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   //   chrome.tabs.executeScript(
    //      tabs[0].id,
    //      {file: "the_b_d.js"});
	//  sendResponse({farewell:"it is done!"});
    // Do something!
	//});
  }
}

function isEntityChar(char1) {
  //var code, i, len;
    var code = char1.charCodeAt(0);

    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123) && // lower alpha (a-z)
        !(code == '#')) {
      return false;
  }
  return true;
}
function makeLucid(letterColours){
var content = document.body;

let textElements ={
"a":0,
"em":0,
"strong":0,
"small":0,
"s":0,
"cite":0,
"q":0,
"dfn":0,
"abbr":0,
"ruby":0, "rb":0, "rp":0, "rt":0,"rtc":0,
"data":0,
"time":0,
"code":0,
"var":0,
"samp":0,
"kbd":0,
"sub":0,
"sup":0,
"i":0,
"b":0,
"u":0,
"mark":0,
"bdi":0,
"bdo":0,
"span":0,
"br":0,
"wbr":0,
};

let allHtml = {
"g-header-menu":0,
"!--":0,
"!DOCTYPE":0, 
"a":0,
"abbr":0,
"acronym":0,
"address":0,
"applet":0,
"area":0,
"article":0,
"aside":0,
"audio":0,
"b":0,
"base":0,
"basefont":0,
"bdi":0,
"bdo":0,
"big":0,
"blockquote":0,
"body":0,
"br":0,
"button":0,
"canvas":0,
"caption":0,
"center":0,
"cite":0,
"code":0,
"col":0,
"colgroup":0,
"data":0,
"datalist":0,
"dd":0,
"del":0,
"details":0,
"dfn":0,
"dialog":0,
"dir":0,
"div":0,
"dl":0,
"dt":0,
"em":0,
"embed":0,
"fieldset":0,
"figcaption":0,
"figure":0,
"font":0,
"footer":0,
"form":0,
"frame":0,
"frameset":0,
"h1":0,
"h2":0,
"h3":0,
"h4":0,
"h5":0,
"h6":0,
"head":0,
"header":0,
"hr":0,
"html":0,
"i":0,
"iframe":0,
"img":0,
"input":0,
"ins":0,
"kbd":0,
"label":0,
"legend":0,
"li":0,
"link":0,
"main":0,
"map":0,
"mark":0,
"meta":0,
"meter":0,
"nav":0,
"noframes":0,
"noscript":0,
"object":0,
"ol":0,
"optgroup":0,
"option":0,
"output":0,
"p":0,
"param":0,
"picture":0,
"pre":0,
"progress":0,
"q":0,
"rp":0,
"rt":0,
"ruby":0,
"s":0,
"samp":0,
"script":0,
"section":0,
"select":0,
"small":0,
"source":0,
"span":0,
"strike":0,
"strong":0,
"style":0,
"sub":0,
"summary":0,
"sup":0,
"svg":0,
"table":0,
"tbody":0,
"td":0,
"template":0,
"textarea":0,
"tfoot":0,
"th":0,
"thead":0,
"time":0,
"title":0,
"tr":0,
"track":0,
"tt":0,
"u":0,
"ul":0,
"var":0,
"video":0,
"wbr":0};
var ignore = {"option":0,"style":0, "button":0, "script":0, "noscript":0, "iframe":0, "object":0,"OPTION":0, "BUTTON":0, "STYLE":0, "SCRIPT":0, "NOSCRIPT":0, "IFRAME":0, "OBJECT":0 };
console.log('gogo1');

var singletons = {
"area":0,
"base":0,
"br":0,
"col":0,
"command":0,
"embed":0,
"hr":0,
"img":0,
"input":0,
"keygen":0,
"link":0,
"meta":0,
"param":0,
"source":0,
"track":0,
"wbr":0,
"area":0,
"base":0,
"br":0,
"col":0,
"command":0,
"embed":0,
"hr":0,
"img":0,
"input":0,
"keygen":0,
"link":0,
"meta":0,
"param":0,
"source":0,
"track":0,
"wbr":0,
"AREA":0,
"BASE":0,
"BR":0,
"COL":0,
"COMMAND":0,
"EMBED":0,
"HR":0,
"IMG":0,
"INPUT":0,
"KEYGEN":0,
"LINK":0,
"META":0,
"PARAM":0,
"SOURCE":0,
"TRACK":0,
"WBR":0};

var html_entities = {"&quot;":0,
"&num;":0,
"&dollar;":0,
"&percnt;":0,
"&amp;":0,
"&apos;":0,
"&lpar;":0,
"&rpar;":0,
"&ast;":0,
"&plus;":0,
"&comma;":0,
"&minus;":0,
"&period;":0,
"&sol;":0,
"&colon;":0,
"&semi;":0,
"&lt;":0,
"&equals;":0,
"&gt;":0,
"&quest;":0,
"&commat;":0,
"&lsqb;":0,
"&bsol;":0,
"&rsqb;":0,
"&Hat;":0,
"&lowbar;":0,
"&grave;":0,
"&lcub;":0,
"&verbar;":0,
"&rcub;":0,
"&nbsp;":0,
"&iexcl;":0,
"&cent;":0,
"&pound;":0,
"&curren;":0,
"&yen;":0,
"&#x20B9;":0,
"&brvbar;":0,
"&sect;":0,
"&uml;":0,
"&copy;":0,
"&ordf;":0,
"&laquo;":0,
"&not;":0,
"&shy;":0,
"&reg;":0,
"&macr;":0,
"&deg;":0,
"&plusmn;":0,
"&sup2;":0,
"&sup3;":0,
"&acute;":0,
"&micro;":0,
"&para;":0,
"&middot;":0,
"&cedil;":0,
"&sup1;":0,
"&ordm;":0,
"&raquo;":0,
"&frac14;":0,
"&frac12;":0,
"&frac34;":0,
"&iquest;":0,
"&Agrave;":0,
"&Aacute;":0,
"&Acirc;":0,
"&Atilde;":0,
"&Auml;":0,
"&Aring;":0,
"&AElig;":0,
"&Ccedil;":0,
"&Egrave;":0,
"&Eacute;":0,
"&Ecirc;":0,
"&Euml;":0,
"&Igrave;":0,
"&Iacute;":0,
"&Icirc;":0,
"&Iuml;":0,
"&ETH;":0,
"&Ntilde;":0,
"&Ograve;":0,
"&Oacute;":0,
"&Ocirc;":0,
"&Otilde;":0,
"&Ouml;":0,
"&times;":0,
"&Oslash;":0,
"&Ugrave;":0,
"&Uacute;":0,
"&Ucirc;":0,
"&Uuml;":0,
"&Yacute;":0,
"&THORN;":0,
"&szlig;":0,
"&agrave;":0,
"&aacute;":0,
"&acirc;":0,
"&atilde;":0,
"&auml;":0,
"&aring;":0,
"&aelig;":0,
"&ccedil;":0,
"&egrave;":0,
"&eacute;":0,
"&ecirc;":0,
"&euml;":0,
"&igrave;":0,
"&iacute;":0,
"&icirc;":0,
"&iuml;":0,
"&eth;":0,
"&ntilde;":0,
"&ograve;":0,
"&oacute;":0,
"&ocirc;":0,
"&otilde;":0,
"&ouml;":0,
"&divide;":0,
"&oslash;":0,
"&ugrave;":0,
"&uacute;":0,
"&ucirc;":0,
"&uuml;":0,
"&yacute;":0,
"&thorn;":0,
"&yuml;":0,
"&OElig;":0,
"&oelig;":0,
"&Scaron;":0,
"&scaron;":0,
"&Yuml;":0,
"&fnof;":0,
"&circ;":0,
"&tilde;":0,
"&Alpha;":0,
"&Beta;":0,
"&Gamma;":0,
"&Delta;":0,
"&Epsilon;":0,
"&Zeta;":0,
"&Eta;":0,
"&Theta;":0,
"&Iota;":0,
"&Kappa;":0,
"&Lambda;":0,
"&Mu;":0,
"&Nu;":0,
"&Xi;":0,
"&Omicron;":0,
"&Pi;":0,
"&Rho;":0,
"&Sigma;":0,
"&Tau;":0,
"&Upsilon;":0,
"&Phi;":0,
"&Chi;":0,
"&Psi;":0,
"&Omega;":0,
"&alpha;":0,
"&beta;":0,
"&gamma;":0,
"&delta;":0,
"&epsilon;":0,
"&zeta;":0,
"&eta;":0,
"&theta;":0,
"&iota;":0,
"&kappa;":0,
"&lambda;":0,
"&mu;":0,
"&nu;":0,
"&xi;":0,
"&omicron;":0,
"&pi;":0,
"&rho;":0,
"&sigmaf;":0,
"&sigma;":0,
"&tau;":0,
"&upsilon;":0,
"&phi;":0,
"&chi;":0,
"&psi;":0,
"&omega;":0,
"&thetasym;":0,
"&upsih;":0,
"&piv;":0,
"&ensp;":0,
"&emsp;":0,
"&thinsp;":0,
"&zwnj;":0,
"&zwj;":0,
"&lrm;":0,
"&rlm;":0,
"&ndash;":0,
"&mdash;":0,
"&lsquo;":0,
"&rsquo;":0,
"&sbquo;":0,
"&ldquo;":0,
"&rdquo;":0,
"&bdquo;":0,
"&dagger;":0,
"&Dagger;":0,
"&permil;":0,
"&lsaquo;":0,
"&rsaquo;":0,
"&bull;":0,
"&hellip;":0,
"&prime;":0,
"&Prime;":0,
"&oline;":0,
"&frasl;":0,
"&weierp;":0,
"&image;":0,
"&real;":0,
"&trade;":0,
"&alefsym;":0,
"&larr;":0,
"&uarr;":0,
"&rarr;":0,
"&darr;":0,
"&harr;":0,
"&crarr;":0,
"&lArr;":0,
"&uArr;":0,
"&rArr;":0,
"&dArr;":0,
"&hArr;":0,
"&forall;":0,
"&part;":0,
"&exist;":0,
"&empty;":0,
"&nabla;":0,
"&isin;":0,
"&notin;":0,
"&ni;":0,
"&prod;":0,
"&sum;":0,
"&minus;":0,
"&lowast;":0,
"&radic;":0,
"&prop;":0,
"&infin;":0,
"&ang;":0,
"&and;":0,
"&or;":0,
"&cap;":0,
"&cup;":0,
"&int;":0,
"&there4;":0,
"&sim;":0,
"&cong;":0,
"&asymp;":0,
"&ne;":0,
"&equiv;":0,
"&le;":0,
"&ge;":0,
"&sub;":0,
"&sup;":0,
"&nsub;":0,
"&sube;":0,
"&supe;":0,
"&oplus;":0,
"&otimes;":0,
"&perp;":0,
"&sdot;":0,
"&lceil;":0,
"&rceil;":0,
"&lfloor;":0,
"&rfloor;":0,
"&lang;":0,
"&rang;":0,
"&loz;":0,
"&spades;":0,
"&clubs;":0,
"&hearts;":0,
"&diams;":0};

var html = content.innerHTML;
var new_html = "";
var brace_open = -1;
var tag_prop = 0;
var current_tags = [];
var this_tag = "";
var d_positions = [];
var offsets = 0;
var ignorance_level = 0;
var textelement = 0;
var is_entity = 0;
var is_entity_str = "";
var not_entity_str = "";
var is_tag_str = "";
var is_tag_Scritp = 0;
var not_tag_str = "";
let tagMax = 20;
let popped = "";
var htmlTagRe = /<\/?[\w\s="/.':;#-\/\?]+>/gi;


for (var i = 0; i < html.length; i++){
    var change_flag =0;
    character = html[i];
    
    if (is_entity>0){
        if (is_entity > 10){ //was not an entity
            is_entity = 0;
           new_html += not_entity_str;
			
          //console.log('too long ' + not_entity_str);
        }
        else 
		if ((is_entity_str + character) in html_entities)
        {
            is_entity = 0;
            new_html += is_entity_str;
            //console.log(is_entity_str);
        }
        else if (isEntityChar(character)){
            is_entity++;
        }
    }
    
    if (character == '&'){ // could be start of entity
        is_entity = 1;
        is_entity_str ="";
        not_entity_str = "";
    }

    if ((brace_open > -1) && (tag_prop == 0)){   // we are probably in a tag not confirmed
        if ((character == ' ')||(this_tag.substring(0, 3) == "!--")){   //the tag name is available now !!!! should stop looking for it // special case for ill formed comments 
            new_html += character;
			tag_prop = 1;
			continue;
            }

        else if (character != '>'){
        this_tag += character  //proc_tag
		}
    }
    if ((character == '>')&&(brace_open > -1)){
        brace_open= -1;
		tag_prop = 0;
        console.log(current_tags);
        console.log(is_tag_Scritp);
		console.log(ignorance_level);
        if (this_tag[0] == '/'){
			popped = current_tags.pop();
			if (popped.toLowerCase() == "script"){
				is_tag_Scritp = 0;
			}
			//while (this_tag.substr(1) != popped){
				if (!(popped == this_tag.substr(1))) console.log("tags don't match!!!" + popped + ",  ,/" + this_tag.substr(1));
				if (this_tag.substr(1) in ignore) {
				ignorance_level--;
				}
				else if (this_tag.substr(1) in textElements) {
				textelement--;
				}
				popped = current_tags.pop();
			//}
		}
        else if ((!(this_tag[0] == '!'))&&(!(this_tag in singletons))&&(is_tag_Scritp == 0)) { //(this_tag in allHtml) some seems redundand as is done when tag_prop is set
			//if (!(this_tag in allHtml)) console.log(" not a tag :" + this_tag);
            current_tags.push(this_tag);
			if (this_tag.toLowerCase() == "script") is_tag_Scritp = 1;
            if (this_tag in ignore) {
				ignorance_level++;
			}
			else if (this_tag in textElements) {
				textelement++;
			}
		}
		else {
			// console.log(" not closeable " + this_tag)
			// console.log("  in allHtml " + (this_tag in allHtml))
			// console.log(" this_tag[0] == '!' " + (!(this_tag[0] == '!')))
			// console.log("  in singletons " + (!(this_tag in singletons)))
		}
        this_tag = "";
    }
    else if (character == '<'){ //could be the start of a tag
	this_tag = "";
	brace_open = i; // fine as a tag cannot contaion <
	}
    else if ((ignorance_level == 0)&& (brace_open == -1)&& (textelement > 0)){
        for (var j = 0; j < letterColours.length; j++){
			
        if (character == letterColours[j][0]){
            if (is_entity){
                not_entity_str += "<span style=\"color: "+ letterColours[j][1]+";\">"+letterColours[j][0]+"</span>";
                is_entity_str += character;
            }
            else{
                new_html += "<span style=\"color: "+ letterColours[j][1]+";\">"+letterColours[j][0]+"</span>";
            }
			//console.log(current_tags);
            d_positions.push((offsets + i));
            offsets = offsets+19;
            //console.log(d_positions);
            //console.log(i);
            change_flag = 1;
        }
		}
    }
    if (change_flag == 0){
        if (is_entity){
                not_entity_str += character;
                is_entity_str += character;
            }
            else{
                new_html += character;
            }
    }


	}
document.body.innerHTML = new_html;
}


