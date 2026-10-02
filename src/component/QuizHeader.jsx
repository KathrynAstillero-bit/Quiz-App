function QuizHeader() {
	return (
		<>
			<header className="window-titlebar">
				<div className="window-title"><span aria-hidden="true">♥</span> diva.exe</div>
				<div className="window-controls" aria-hidden="true"><span className="window-minimize" /><span>□</span><span>×</span></div>
			</header>
			<div className="quiz-toolbar">
				<div className="quiz-badge"><span aria-hidden="true">✦</span> General Knowledge Quiz</div>
			</div>
		</>
	)
}

export default QuizHeader