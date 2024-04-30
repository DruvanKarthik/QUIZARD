// Question.js
import React, {Component} from "react";
import Options from "./Options";
import '../App.css'
class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit} = this.props;

		return(
			<div className="Question-option">
				<h3>Question {question.id}</h3>
				<h5 className="mt-2">{question.question}</h5>
				<form onSubmit={onSubmit} className="mt">
					<Options
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
					/>
					<button type="submit" className="submit-button">
						SUBMIT
					</button>
				</form>
				
			</div>
		);
	};
}

export default Question;
