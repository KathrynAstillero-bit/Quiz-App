import { useState } from 'react'
import ProgressBar from './ProgressBar.jsx'
import QuestionCard from './QuestionCard.jsx'
import QuizHeader from './QuizHeader.jsx'
import ResultCard from './ResultCard.jsx'
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
				<QuizHeader />
				<div className="quiz-window-body">
					<ProgressBar currentStep={currentQuestionIndex + Number(isAnswered)} totalSteps={questions.length} />
					<QuestionCard
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
				<ResultCard
					score={score}
					totalQuestions={questions.length}
					onClose={() => setIsQuizCompleted(false)}
					onAttemptQuiz={onReturnToWelcome}
				/>
			)}
		</main>
	)
}

export default QuestionPageComponent
