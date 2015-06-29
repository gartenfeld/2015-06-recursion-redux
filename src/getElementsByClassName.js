// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];

  var classChecker = function(elem){
  	if (elem.classList && elem.classList.contains(className)) {
  		results.push(elem);
  	}
  };

  var searchChildren = function(node){
  	for (var i = 0; i<node.childNodes.length; i++){
  	  classChecker(node.childNodes[i]);
  	  searchChildren(node.childNodes[i]);
  	}
  };

  classChecker(document.body);
  searchChildren(document.body);
  // your code here
  return results;
};