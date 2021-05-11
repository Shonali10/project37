class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
this.bg=background("Yellow")

question.hide();
fill(0)
textSize(30);
    text("Result of the Quiz",340, 50);

Contestant.getPlayerInfo();
if(allContestants !== undefined){
  fill("Black");
  textSize(20);
  text("NOTE: Contestant who answered correctly is highlighed in green.")
}
    
  for(var plr in allContestants){
    var correctAns = "2";
    if (correctAns === allContestants[plr].answer)
    fill("green")
    else
    fill("red")
  }
  }

}
