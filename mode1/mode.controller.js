var fs = require('fs');
var _ = require('lodash');
var lineReader = require('readline')

module.exports.readFile = function(fileName){

	return new Promise(function(resove,reject){
		var words = [];
		if(!fileName){
			return reject("FileName is required.")

		}

	  	var lr = lineReader.createInterface({
	    	input: fs.createReadStream(fileName)
		});

		lr.on('line', function (line) {
			words.push(line);		
		});

		lr.on('close', function (line) {
			return resove(words);		
		});

	});
}

module.exports.writeFile = function(fileName, array){

	return new Promise(function(resove,reject){
		if(!fileName){
			return reject("FileName is required.")
		}

		if(!array ||  array.length === 0){
			return reject("words not found!!!")
		}

		var output = fs.createWriteStream(fileName);
		_.each(array, function(word){
		 var strWord = word;	 	
	 		strWord += "\r\n";
	 		output.write(strWord);	 	
		 });
		output.end();
	});
}

module.exports.processing = function(words){
	return new Promise(function(resove,reject){
		if(!words ||  words.length === 0){
			return reject("words not found!!!")
		}
		
		words.sort(function(a,b){
		  return a.length - b.length || 
		         a.localeCompare(b);
		 });

		 var uniqWords = _.uniq(words)

	var filterWords = _.filter(uniqWords, function(word) { 
						    if(isVowel(word)){
						    	return true;		 		
							}	
						});

		return resove(filterWords);
	});
}
function isVowel(chr){ return 'aeiou'.indexOf( chr[0].toLowerCase()) !== -1 }