import './ProgressComponent.css'

function ProgressComponent({ currentStep, totalSteps }) {
	const progress = totalSteps === 0 ? 0 : Math.min((currentStep / totalSteps) * 100, 100)

	return (
		<div className="quiz-progress" aria-label={`${currentStep} of ${totalSteps} questions answered`}>
			<div className="progress-track" aria-hidden="true">
				<div className="progress-fill" style={{ width: `${progress}%` }} />
			</div>
			<span className="progress-count">{currentStep}/{totalSteps} answered</span>
		</div>
	)
}

export default ProgressComponent
