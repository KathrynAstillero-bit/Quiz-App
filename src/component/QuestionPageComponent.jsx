import { useState } from 'react'
import ProgressComponent from './ProgressComponent.jsx'
import Question from './Question.jsx'
import './QuestionPageComponent.css'

const questions = [
	{
		qnum: 1,
		question: 'What is the largest planet in our solar system?',
		options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
		answer: 'C',
	},
	{
		qnum: 2,
		question: 'Who wrote the famous play Romeo and Juliet?',
		options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
		answer: 'B',
	},
	{
		qnum: 3,
		question: 'What is the capital city of Japan?',
		options: ['Seoul', 'Beijing', 'Bangkok', 'Tokyo'],
		answer: 'D',
	},
	{
		qnum: 4,
		question: 'Which gas do plants absorb from the atmosphere during photosynthesis?',
		options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
		answer: 'B',
	},
	{
		qnum: 5,
		question: 'How many continents are there in the world?',
		options: ['Five', 'Six', 'Seven', 'Eight'],
		answer: 'C',
	},
	{
		qnum: 6,
		question: 'Who was the first person to walk on the Moon?',
		options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'Michael Collins'],
		answer: 'C',
	},
	{
		qnum: 7,
		question: 'What is the chemical symbol for gold?',
		options: ['Ag', 'Au', 'Fe', 'Go'],
		answer: 'B',
	},
	{
		qnum: 8,
		question: 'Which ocean is the largest on Earth?',
		options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
		answer: 'D',
	},
	{
		qnum: 9,
		question: 'What is the square root of 144?',
		options: ['10', '11', '12', '14'],
		answer: 'C',
	},
	{
		qnum: 10,
		question: 'In which country are the Pyramids of Giza located?',
		options: ['Mexico', 'Greece', 'Egypt', 'India'],
		answer: 'C',
	},
]

function QuestionPageComponent({ onReturnToWelcome }) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [answers, setAnswers] = useState([])
	const [isQuizCompleted, setIsQuizCompleted] = useState(false)

	const question = questions[currentQuestionIndex]
	const selectedKey = answers[currentQuestionIndex] ?? null
	const isAnswered = selectedKey !== null
	const score = answers.reduce((total, answer, index) => total + Number(answer === questions[index].answer), 0)

	function selectOption(optionKey) {
		if (isAnswered) return
		setAnswers((currentAnswers) => {
			const nextAnswers = [...currentAnswers]
			nextAnswers[currentQuestionIndex] = optionKey
			return nextAnswers
		})
	}

	function continueQuiz() {
		if (!isAnswered) return
		if (currentQuestionIndex === questions.length - 1) {
			setIsQuizCompleted(true)
			return
		}
		setCurrentQuestionIndex((currentIndex) => currentIndex + 1)
	}

	return (
		<main className="quiz-page" aria-label="General Knowledge Quiz">
			<section className="quiz-window">
				<header className="window-titlebar">
					<div className="window-title"><span aria-hidden="true">♥</span> diva.exe</div>
					<div className="window-controls" aria-hidden="true"><span className="window-minimize" /><span>□</span><span>×</span></div>
				</header>
				<div className="quiz-toolbar">
					<div className="quiz-badge"><span aria-hidden="true">✦</span> General Knowledge Quiz</div>
				</div>
				<div className="quiz-window-body">
					<ProgressComponent currentStep={currentQuestionIndex + Number(isAnswered)} totalSteps={questions.length} />
					<Question
						currentQuestion={question}
						totalQuestions={questions.length}
						selectedKey={selectedKey}
						isAnswered={isAnswered}
						onSelect={selectOption}
						onNext={continueQuiz}
						isLastQuestion={currentQuestionIndex === questions.length - 1}
					/>
				</div>
				<footer className="window-status"><span>♥ YOU'VE GOT THIS</span><span>STARDUST QUIZ CLUB · 2004</span></footer>
			</section>
			{isQuizCompleted && (
				<div className="results-overlay">
					<div className="glitter-field" aria-hidden="true">
						{Array.from({ length: 18 }, (_, index) => <span className="falling-glitter" key={index} style={{ '--glitter-index': index }} />)}
					</div>
					<section className="results-window" role="dialog" aria-modal="true" aria-labelledby="results-title">
						<header className="results-titlebar">
							<span>★ QUIZ RESULTS ★</span>
							<button className="results-close" type="button" aria-label="Close results" onClick={() => setIsQuizCompleted(false)}>×</button>
						</header>
						<div className="results-content">
							<div className="results-star" aria-hidden="true">✦</div>
							<p className="results-kicker">THAT'S A WRAP, DIVA!</p>
							<h1 id="results-title">You Scored {score}/{questions.length}, Diva!</h1>
							<p className="results-detail">{score === questions.length ? 'Perfect score! You absolutely sparkled.' : `${score} correct answers. Keep shining and try again!`}</p>
							<button className="attempt-quiz" type="button" onClick={onReturnToWelcome}>Attempt Quiz <span aria-hidden="true">↻</span></button>
							<p className="diva-quote">A real diva knows that her mind is the most expensive thing she owns.</p>
						</div>
					</section>
				</div>
			)}
		</main>
	)
}

export default QuestionPageComponent
