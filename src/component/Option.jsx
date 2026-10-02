import './Option.css'

function Option({ optionText, optionKey, isSelected, isCorrect, isAnswered, onClick }) {
	const classes = [
		'quiz-option',
		isSelected && 'is-selected',
		isAnswered && isCorrect && 'is-correct',
		isSelected && isAnswered && !isCorrect && 'is-incorrect',
	].filter(Boolean).join(' ')

	return (
		<button className={classes} type="button" onClick={onClick} disabled={isAnswered}>
			<span className="option-key">{optionKey}</span>
			<span className="option-text">{optionText}</span>
			{isAnswered && isCorrect && <span className="option-mark" aria-hidden="true">✓</span>}
			{isSelected && isAnswered && !isCorrect && <span className="option-mark" aria-hidden="true">×</span>}
		</button>
	)
}

export default Option
