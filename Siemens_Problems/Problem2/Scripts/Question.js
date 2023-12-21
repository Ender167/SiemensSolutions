class Question {

	constructor(id, question, options, answer) {
		this.id = id;
		this.question = question;
		this.options = options;
		this.answer = answer;
		this.wasAnswered = false;
	}
	checkAnswer(receivedAnswer) {
		// Checks if a given answer is the same as the question's answer.
		// Parameters: int
		// Returns: true if given answer is correct, false otherwise
		if (this.answer == receivedAnswer && this.wasAnswered == false)
			return true;
		return false;
	}

}