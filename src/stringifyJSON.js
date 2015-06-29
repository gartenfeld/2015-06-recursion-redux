// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var returnString = "";
  var containsWeird = false;
  var objectStringifier = function(obj){
  	//console.log(obj);

    if (Array.isArray(obj)){
    	returnString += "[";
    	for (var i=0; i<obj.length; i++) {
    		objectStringifier(obj[i]);
    		if (i<obj.length-1) {
    			returnString += ',';
    		}
    	}
    	//check and concatenate the elements of the array
    	returnString += "]";

    }else if(obj === null){
		returnString += 'null';
	}else if(typeof obj === 'function') {
		containsWeird = true;
	}else if(typeof obj ==='object'){

    	returnString += "{";
    	
    	if (obj !== null && Object.keys(obj).length) {
    		
    		for (var k in obj){
    			returnString += '"' + k + '":';
    			objectStringifier(obj[k]);
    			returnString += ',';
    		}
    		returnString = returnString.slice(0, -1);
    	}	
    	returnString += "}";
    }else if(typeof obj === 'string'){
    	returnString += '"' + obj + '"';
    }else if(typeof obj === 'boolean' || typeof obj === 'number'){
    	returnString += obj.toString();
    }else {
    	containsWeird = true;
    }


  // your code goes here
  };

  objectStringifier(obj);

  return containsWeird ? '{}' : returnString;
};
