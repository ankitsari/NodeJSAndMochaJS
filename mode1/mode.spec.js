var expect    = require("chai").expect;
var path = require('path')
var modCtrl = require("./mode.controller");

  describe("Mode 1 Testing", function() {
    it("return Array of all words from word-input text file", function(done) {
      modCtrl.readFile(path.resolve('./words-input.txt'))
             .then(function(words){
               expect(words).to.be.instanceof(Array);
               done();
             });
    });


    it("return Array of all words with processing using sort word, alphabetically, unique, vowel", function(done) {
      var words = [ 'parsimoniously',
                    'johnny',
                    'polyurethan',
                    'children',
                    'crossability',
                    'unobdurate',
                    'truncheon',
                    'compassionless']

            modCtrl.processing(words)
             .then(function(words){
               expect(words.length).to.equal(1);
               done()
             }).catch(function(error){

             });
    });

  });
