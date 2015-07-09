var AllQuestionBank = require('./questionBank');
var _ = require("./lodash.src.js");

function scoreGetter(infors){
  var questionBanks = AllQuestionBank();
  var sumScore = 0;

  _.forEach(infors,function(infor,key) {
    questionBanks.forEach(function(questionBank,i) {
      if(key == questionBank.name && infor == questionBank.answer) {
          sumScore +=  questionBank.score;
      }
    })
  });

  return sumScore;
}
module.exports = scoreGetter;
