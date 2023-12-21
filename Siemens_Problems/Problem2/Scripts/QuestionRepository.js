class QuestionRepository {
	constructor() {
		this.arr = [];
		this.currentQuestion = 0;
		this.lastId = 0;
		this.score = new ScoreHolder();
	}
	add(q) {
		// Adds a question to the repository
		// Parameters: Question Object
		// Returns: Nothing
		q.id = this.lastId;
		this.lastId += 1;
		this.arr.push(q);
	}
	getNextQuestion() {
		// Parameters: Nothing
		// Returns: next question if available, current question otherwise
		if (this.arr[this.currentQuestion].wasAnswered == true && this.currentQuestion < this.arr.length - 1) {
			this.currentQuestion++;
		}
		return this.arr[this.currentQuestion];
	}
	getCurrentQuestion() {
		// Parameters: Nothing
		// Returns: current question
		return this.arr[this.currentQuestion];
	}

	isTestDone() {
		// Parameters: Nothing
		// Returns: true if all questions were answered, false otherwise.
		for (let i = 0; i < this.arr.length; i++) {
			if (this.arr[i].wasAnswered == false) {
				return false;
			}
		}
		return true;
	}

	setQuestionState(state) {
		// Sets all questions' wasAnswered field to a given state.
		// Parameters: bool
		// Returns: Nothing
		for (let i = 0; i < this.arr.length; i++) {
			this.arr[i].wasAnswered = state;
		}
	}

	resetRepository() {
		// Resets the repository to the state before the test started.
		// Parameters: Nothing
		// Returns : Nothing
		this.setQuestionState(false);
		this.score.resetScore();
		this.currentQuestion = 0;
		console.log(this.currentQuestion);
	}

}