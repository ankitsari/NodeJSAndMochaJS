var file = require('./mode.controller');
var path = require('path');


file.readFile(path.resolve('./words-input.txt'))
.then(function(words){
	return words;
}).then(function(words){
	return file.processing(words);
}).then(function(words){
	file.writeFile(path.resolve('./output.txt'), words);
});