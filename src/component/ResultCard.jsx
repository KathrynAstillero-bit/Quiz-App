function ResultCard({ score, totalQuestions, onClose, onAttemptQuiz }) {
	return (
		<div className="results-overlay">
			<div className="glitter-field" aria-hidden="true">
				{Array.from({ length: 18 }, (_, index) => <span className="falling-glitter" key={index} style={{ '--glitter-index': index }} />)}
			</div>
			<section className="results-window" role="dialog" aria-modal="true" aria-labelledby="results-title">
				<header className="results-titlebar">
					<span>★ QUIZ RESULTS ★</span>
					<button className="results-close" type="button" aria-label="Close results" onClick={onClose}>×</button>
				</header>
				<div className="results-content">
					<div className="results-star" aria-hidden="true">✦</div>
					<p className="results-kicker">THAT'S A WRAP, DIVA!</p>
					<h1 id="results-title">You Scored {score}/{totalQuestions}, Diva!</h1>
					<p className="results-detail">{score === totalQuestions ? 'Perfect score! You absolutely sparkled.' : `${score} correct answers. Keep shining and try again!`}</p>
					<button className="attempt-quiz" type="button" onClick={onAttemptQuiz}>Attempt Quiz <span aria-hidden="true">↻</span></button>
					<p className="diva-quote">A real diva knows that her mind is the most expensive thing she owns.</p>
				</div>
			</section>
		</div>
	)
}

export default ResultCard