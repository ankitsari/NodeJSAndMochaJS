var expect    = require("chai").expect;
var path = require('path')
var modCtrl = require("./mode.controller");

  describe("Mode 2 Testing", function() {
    it("return Array of all words from word-input text file", function(done) {
      modCtrl.readFile(path.resolve('./words-input.txt'))
             .then(function(words){
               expect(words).to.be.instanceof(Array);
               done();
             });
    });


    it("return Array of all words with processing using power", function(done) {
      var words = [ 'parsimoniously',
                    'johnny'                    
                  ]

            modCtrl.processing(words)
             .then(function(words){
               expect(words[1]).to.equal(64);
               done()
             }).catch(function(error){

             });
    });

    it("return Array of all words with processing if a word contains x", function(done) {
      var words = [ 'parsimoniously',
                    'johnny' ,
                    'sxxw'                   
                  ]

            modCtrl.processing(words)
             .then(function(words){
               expect(words[2]).to.equal(4782969);
               done()
             }).catch(function(error){

             });
      });

  });
