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
		var PowerOFWordArray = [];
		_.each(words, function(word){
		 	if(word.length == 0)
		 		return true;

		 	var lowerCaseWord = word.toLowerCase();
		 	var pwrOfWord = 0;

		 	if(PowerOFWordArray.length > 0){
		 		pwrOfWord = lowerCaseWord.includes('x') && PowerOFWordArray[0] || Math.pow(words.length, lowerCaseWord.length)
		 	} else {
		 		pwrOfWord = Math.pow(words.length, lowerCaseWord.length)
		 	}
			PowerOFWordArray.push(pwrOfWord);

		 });

		return resove(PowerOFWordArray);
	});
}