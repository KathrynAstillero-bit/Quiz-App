import { useCallback, useRef, useState } from 'react'
import './App.css'
import mainBg from './images/main bg.jpg'
import consoleImage from './images/Ps5-transparent.png'
import welcomeImage from './images/welcome.gif'
import divaTextImage from './images/Diva text.png'
import divaGirlImage from './images/diva.png'
import QuestionPageComponent from './component/QuestionPageComponent.jsx'

function App() {
  const [screen, setScreen] = useState('intro')
  const [isIntroExiting, setIsIntroExiting] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [isLaunching, setIsLaunching] = useState(false)
  const isLeavingIntro = useRef(false)

  const exitIntro = useCallback(() => {
    if (isLeavingIntro.current) return

    isLeavingIntro.current = true
    setIsIntroExiting(true)
    window.setTimeout(() => setScreen('console'), 760)
  }, [])

  function startQuiz() {
    if (isLaunching) return

    setIsLaunching(true)
    window.setTimeout(() => setHasStarted(true), 160)
  }

  function returnToWelcome() {
    setHasStarted(false)
    setIsLaunching(false)
    setIsIntroExiting(false)
    isLeavingIntro.current = false
    setScreen('intro')
  }

  return (
    <main className="quiz-scene" style={{ backgroundImage: `url(${mainBg})` }}>
      {screen === 'intro' ? (
        <section className={`intro-stage${isIntroExiting ? ' is-exiting' : ''}`} aria-label="Welcome">
          <div className="intro-composition">
            <img className="intro-girl" src={divaGirlImage} alt="Y2K pixel-art girl holding a coffee and phone" />
            <div className="intro-title">
              <img className="intro-welcome" src={welcomeImage} alt="Welcome" />
              <img className="intro-diva" src={divaTextImage} alt="Diva" />
              <span className="intro-sparkle sparkle-one" aria-hidden="true">✦</span>
              <span className="intro-sparkle sparkle-two" aria-hidden="true">✧</span>
              <span className="intro-sparkle sparkle-three" aria-hidden="true">✧</span>
            </div>
          </div>
          <button className="intro-enter" type="button" onClick={exitIntro} disabled={isIntroExiting}>
            Enter +
          </button>
        </section>
      ) : hasStarted ? (
        <QuestionPageComponent onReturnToWelcome={returnToWelcome} />
      ) : (
        <div className={`console-stage${isLaunching ? ' is-pressing' : ''}`}>
          <img className="console-image" src={consoleImage} alt="Pink handheld gaming console" draggable="false" />
          <button
            className="console-start"
            type="button"
            aria-label="Start quiz"
            onClick={startQuiz}
            disabled={isLaunching}
          />
        </div>
      )}
    </main>
  )
}

export default App
