class ScoreHolder{
	constructor(){
		this._score = 0;
	}
	alterScore(q, ans){
		// Increases the score by one if answer is correct.
		// Parameters: Question Object, int
		// Returns: Nothing
		if(q.checkAnswer(ans) == true)
			this._score ++;
	}
	getScore(){
		// Parameters: Nothing
		// Returns: score
		return this._score;
	}
	resetScore(){
		// Parameters: Nothing
		// Returns: Nothing
		this._score = 0;
	}
	
}