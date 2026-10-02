import Option from './Option.jsx'
import './Question.css'

function Question({ currentQuestion, totalQuestions, selectedKey, isAnswered, onSelect, onNext, isLastQuestion }) {
	const correctKey = currentQuestion.answer
	const questionNumber = currentQuestion.qnum
	const optionKeys = ['A', 'B', 'C', 'D']

	return (
		<section className="question-content" aria-live="polite">
			<div className="question-heading">
				<span className="question-index">QUESTION {String(questionNumber).padStart(2, '0')}</span>
				<span className="question-total">OF {String(totalQuestions).padStart(2, '0')}</span>
			</div>
			<h1 className="question-prompt">{currentQuestion.question}</h1>
			<div className="question-options">
				{currentQuestion.options.map((optionText, index) => (
					<Option
						key={optionKeys[index]}
						optionText={optionText}
						optionKey={optionKeys[index]}
						isSelected={selectedKey === optionKeys[index]}
						isCorrect={correctKey === optionKeys[index]}
						isAnswered={isAnswered}
						onClick={() => onSelect(optionKeys[index])}
					/>
				))}
			</div>
			<div className="question-actions">
				<p className={`answer-hint${isAnswered ? ' is-visible' : ''}`} role="status">
					{isAnswered ? (selectedKey === correctKey ? 'Correct answer, diva!' : `The answer is ${correctKey}.`) : 'Choose one answer to continue.'}
				</p>
				<button className="next-question" type="button" onClick={onNext} disabled={!isAnswered}>
					{isLastQuestion ? 'Finish' : 'Next Question'}
					<span aria-hidden="true">✦</span>
				</button>
			</div>
		</section>
	)
}

export default Question
