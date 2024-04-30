// Score.js

import React, { Component } from 'react';
import '../App.css'

class Score extends Component {
	render() {
		const { score, onNextQuestion } = this.props;

		return (
			<div className='Score'>
				<h1>Your score: {score}</h1>
			</div>
		);
	}
}
export default Score;
