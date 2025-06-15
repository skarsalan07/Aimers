import React, { useEffect, useState, useRef } from "react";
import '../assets/css/start_interview.css';

import forwardHandsVideo from '../assets/video/men_forward_hands_under_the_chin.webm';
import noddingVideo from '../assets/video/men noddingslow.webm';
import pushingChairVideo from '../assets/video/men pushing_chair_back.webm';
import restingVideo from '../assets/video/men resting_on_chair_arm.webm';
import sippingCoffeeVideo from '../assets/video/men sipping_coffee.webm';
import thinkingVideo from '../assets/video/men thinking.webm';
import typingVideo from '../assets/video/men typing.webm';
import writingVideo from '../assets/video/men writing_on_notepad.webm';

const MAX_QUESTIONS = 15;
const CORRECT_SOUND = 'https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3';
const WRONG_SOUND = 'https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3';
const TRANSITION_SOUND = 'https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3';

const GREETINGS = {
  welcome: [
    "Hello there! Welcome to your interview practice session. I'll be your coach today.",
    "Hi! Ready to practice some interview questions? Let's get started!",
    "Welcome! I'm excited to help you prepare for your interviews today.",
    "Greetings! Let's work on improving your interview skills together."
  ],
  correct: [
    "Great job! 🎉",
    "Perfect! 👏",
    "Excellent answer! 💯",
    "You nailed it! 🔥",
    "Brilliant! 🌟"
  ],
  wrong: [
    "Oops! Try again 💪",
    "Almost there! Keep going 🚀",
    "Not quite, but you're learning! 📚",
    "Good attempt! Let's try another one 🤓",
    "Don't worry, you'll get the next one! 👍"
  ],
  next: [
    "Moving to next question...",
    "Let's proceed...",
    "Next challenge coming up!",
    "Here we go!",
    "Ready for the next one?"
  ]
};

const ANIMATION_MAP = {
  greeting: noddingVideo,
  listening: forwardHandsVideo,
  thinking: thinkingVideo,
  evaluating: typingVideo,
  correct: pushingChairVideo,
  wrong: restingVideo,
  transition: sippingCoffeeVideo,
  writing: writingVideo
};

const TypingText = ({ text, speed = 30, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!text) {
      setDisplayedText('');
      setCurrentIndex(0);
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [text, currentIndex, speed, onComplete]);

  return <span>{displayedText}</span>;
};

const InterviewerVideo = ({ animationState }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Video play failed:", e));
    }
  }, [animationState]);

  return (
    <div className={`interviewer-video-container ${animationState ? animationState : ''}`}>
      <div className="video-wrapper">
        <video 
          ref={videoRef}
          src={ANIMATION_MAP[animationState] || forwardHandsVideo}
          muted
          loop
          playsInline
          className="interviewer-video"
          autoPlay
        />
      </div>
      <div className="video-label">Interviewer</div>
    </div>
  );
};

const QuestionBox = ({ question, index, category, difficulty, showSpeakingIndicator = false, speakingText = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [question]);

  return (
    <div className={`question-container ${isVisible ? 'visible' : ''}`}>
      <div className={`question-box ${isVisible ? 'visible' : ''}`}>
        <div className="question-meta">
          <span className="question-number">Question {index + 1}</span>
          {category && <span className="question-category">{category}</span>}
          {difficulty && <span className={`question-difficulty ${difficulty.toLowerCase()}`}>{difficulty}</span>}
        </div>
        <p className="question-text"><TypingText text={question} speed={10} /></p>
      </div>
    </div>
  );
};

const EvaluationResult = ({ result }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [result]);

  return (
    <div className={`result-box ${isVisible ? 'visible' : ''}`}>
      <div className="score-meter">
        <div 
          className="score-fill" 
          style={{ width: `${result.similarity * 100}%` }}
        ></div>
        <span className="score-text">{Math.round(result.similarity * 100)}% Match</span>
      </div>
      <div className="evaluation-details">
        <p><strong>Key Points:</strong> <TypingText text={result.key_points} speed={5} /></p>
        <p><strong>Feedback:</strong> <TypingText text={result.evaluation} speed={5} /></p>
      </div>
    </div>
  );
};

const ProgressBar = ({ current, total }) => (
  <div className="progress-container">
    <div 
      className="progress-bar" 
      style={{ width: `${(current / total) * 100}%` }}
    ></div>
    <span className="progress-text">{current}/{total} questions</span>
  </div>
);

const SessionSummary = ({ session, elapsedTime, onRestart }) => {
  const averageScore = session.results.length > 0 
    ? Math.round(session.results.reduce((sum, r) => sum + r.similarity, 0) / session.results.length * 100)
    : 0;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="evaluator-container">
      <div className="summary-container">
        <h2>🎉 Interview Session Complete!</h2>
        <div className="summary-stats">
          <div className="stat-box">
            <h3>Questions Answered</h3>
            <p>{session.questions.length}</p>
          </div>
          <div className="stat-box">
            <h3>Average Score</h3>
            <p>{averageScore}%</p>
          </div>
          <div className="stat-box">
            <h3>Total Time</h3>
            <p>{formatTime(elapsedTime)}</p>
          </div>
        </div>

        <div className="question-breakdown">
          <h3>Question-by-Question Results</h3>
          <ul>
            {session.questions.map((question, index) => (
              <li key={index}>
                <div className="question-result">
                  <span className="question-number">Q{index + 1}</span>
                  <div className="question-text">{question}</div>
                  {session.results[index] ? (
                    <div className="score-badge">
                      {Math.round(session.results[index].similarity * 100)}%
                    </div>
                  ) : (
                    <div className="score-badge unanswered">-</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="summary-actions">
          <button onClick={onRestart} className="primary-action">
            Start New Session
          </button>
        </div>
      </div>
    </div>
  );
};

function QuestionEvaluator() {
  const [session, setSession] = useState({
    questions: [],
    answers: [],
    results: [],
    currentIndex: 0,
    sessionId: null,
    history: []
  });
  const [answer, setAnswer] = useState("");
  const [animationState, setAnimationState] = useState("greeting");
  const [isListening, setIsListening] = useState(false);
  const [speakingText, setSpeakingText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [timerPaused, setTimerPaused] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedEvaluation, setExpandedEvaluation] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  
  const timerRef = useRef(null);
  const recognitionRef = useRef(null);
  const answerRef = useRef(null);
  const correctSoundRef = useRef(new Audio(CORRECT_SOUND));
  const wrongSoundRef = useRef(new Audio(WRONG_SOUND));
  const transitionSoundRef = useRef(new Audio(TRANSITION_SOUND));

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!timerPaused) {
        setElapsedTime(prev => prev + 1);
      }
    }, 1000);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setSpeechSupported(true);
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setAnswer(prev => prev + (prev ? " " : "") + transcript);
        setAnimationState("listening");
      };

      recognitionRef.current.onerror = (event) => {
        setError("Speech recognition error: " + event.error);
        setIsListening(false);
        setAnimationState("listening");
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        setAnimationState(session.currentIndex < session.questions.length ? "thinking" : "greeting");
      };
    } else {
      setSpeechSupported(false);
      setVoiceEnabled(false);
    }

    const savedSession = localStorage.getItem('interviewSession');
    if (savedSession) {
      const parsedSession = JSON.parse(savedSession);
      setSession(parsedSession);
      setAnswer(parsedSession.answers[parsedSession.currentIndex] || "");
    } else {
      startNewSession();
    }

    return () => {
      clearInterval(timerRef.current);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      window.speechSynthesis.cancel();
    };
  }, [timerPaused]);

  const getRandomGreeting = (type) => {
    const greetings = GREETINGS[type];
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const playSound = (soundRef) => {
    soundRef.current.currentTime = 0;
    soundRef.current.play().catch(e => console.log("Audio play failed:", e));
  };

  const showFeedback = (message, duration = 2000) => {
    setFeedbackMessage(message);
    setTimeout(() => setFeedbackMessage(""), duration);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const speak = (text) => {
    return new Promise(resolve => {
      if (!voiceEnabled || !speechSupported) {
        setSpeakingText(text);
        setTimeout(() => {
          setSpeakingText("");
          resolve();
        }, 3000);
        return;
      }
      
      const synth = window.speechSynthesis;
      synth.cancel();
      setAnimationState("greeting");

      let utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      setSpeakingText(text);

      utterance.onend = () => {
        setAnimationState(session.currentIndex < session.questions.length ? "thinking" : "greeting");
        setTimeout(() => setSpeakingText(""), 1000);
        resolve();
      };

      synth.speak(utterance);
    });
  };

  const startNewSession = () => {
    const newSessionId = Date.now().toString();
    const newSession = {
      questions: [],
      answers: [],
      results: [],
      currentIndex: 0,
      sessionId: newSessionId,
      history: [...session.history, {
        id: newSessionId,
        date: new Date().toLocaleString(),
        questions: 0,
        score: 0
      }]
    };
    setSession(newSession);
    setAnswer("");
    setShowSummary(false);
    localStorage.setItem('interviewSession', JSON.stringify(newSession));
    setElapsedTime(0);
    setTimerPaused(false);
    
    const welcomeMessage = getRandomGreeting('welcome');
    
    speak(welcomeMessage).then(() => {
      fetchQuestion();
    });
  };

  const fetchQuestion = async () => {
    if (session.questions.length >= MAX_QUESTIONS) {
      setShowSummary(true);
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnimationState("thinking");
    
    try {
      const res = await fetch("http://localhost:8000/question");
      if (!res.ok) throw new Error("Failed to fetch question");
      const data = await res.json();
      
      setSession(prev => {
        const updated = {
          ...prev,
          questions: [...prev.questions, data.question],
          answers: [...prev.answers, ""],
          currentIndex: prev.questions.length
        };
        localStorage.setItem('interviewSession', JSON.stringify(updated));
        return updated;
      });
      
      setAnswer("");
      
      if (voiceEnabled && speechSupported) {
        speak(`Question ${session.questions.length + 1}: ${data.question}`);
      } else {
        setSpeakingText(`Question ${session.questions.length + 1}: ${data.question}`);
        setTimeout(() => setSpeakingText(""), 3000);
      }
    } catch (err) {
      setError(err.message);
      setAnimationState("thinking");
    } finally {
      setIsLoading(false);
    }
  };

  const evaluateAnswer = async () => {
    if (!answer.trim()) {
      setError("Please provide an answer before submitting");
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnimationState("writing");
    
    try {
      const res = await fetch("http://localhost:8000/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: session.questions[session.currentIndex],
          user_answer: answer,
        }),
      });
      
      if (!res.ok) throw new Error("Evaluation failed");
      const data = await res.json();
      
      setSession(prev => {
        const updatedAnswers = [...prev.answers];
        updatedAnswers[prev.currentIndex] = answer;
        
        const updated = {
          ...prev,
          answers: updatedAnswers,
          results: [...prev.results, data],
          history: prev.history.map(item => 
            item.id === prev.sessionId ? {
              ...item,
              questions: prev.questions.length,
              score: Math.round((prev.results.reduce((sum, r) => sum + r.similarity, 0) + data.similarity) / (prev.results.length + 1) * 100)
            } : item
          )
        };
        localStorage.setItem('interviewSession', JSON.stringify(updated));
        return updated;
      });
      
      const isGoodAnswer = data.similarity >= 0.7;
      if (isGoodAnswer) {
        playSound(correctSoundRef);
        showFeedback(getRandomGreeting('correct'));
        setAnimationState("correct");
      } else {
        playSound(wrongSoundRef);
        showFeedback(getRandomGreeting('wrong'));
        setAnimationState("wrong");
      }

      if (voiceEnabled && speechSupported) {
        speak(`Evaluation: ${data.evaluation}. Score: ${Math.round(data.similarity * 100)}%`);
      } else {
        setSpeakingText(`Evaluation: ${data.evaluation}. Score: ${Math.round(data.similarity * 100)}%`);
        setTimeout(() => setSpeakingText(""), 5000);
      }
    } catch (err) {
      setError(err.message);
      setAnimationState("thinking");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSpeechRecognition = () => {
    if (!recognitionRef.current) {
      setError("Speech recognition not supported in your browser");
      return;
    }
    
    if (isListening) {
      recognitionRef.current.stop();
      setAnimationState("thinking");
    } else {
      recognitionRef.current.start();
      setIsListening(true);
      setAnimationState("listening");
    }
  };

  const navigateQuestion = async (direction) => {
    const newIndex = direction === 'next' 
      ? session.currentIndex + 1 
      : session.currentIndex - 1;

    if (newIndex >= 0 && newIndex <= session.questions.length) {
      setIsTransitioning(true);
      playSound(transitionSoundRef);
      showFeedback(getRandomGreeting('next'), 1500);
      setAnimationState("transition");

      // Save current answer before navigating
      const updatedAnswers = [...session.answers];
      updatedAnswers[session.currentIndex] = answer;
      
      setSession(prev => {
        const updated = { 
          ...prev, 
          currentIndex: newIndex,
          answers: updatedAnswers
        };
        localStorage.setItem('interviewSession', JSON.stringify(updated));
        return updated;
      });
      
      // Set the answer for the new question
      setAnswer(updatedAnswers[newIndex] || "");

      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (newIndex === session.questions.length) {
        if (session.questions.length < MAX_QUESTIONS) {
          await fetchQuestion();
        } else {
          setShowSummary(true);
        }
      } else {
        if (voiceEnabled && speechSupported) {
          speak(`Question ${newIndex + 1}: ${session.questions[newIndex]}`);
        } else {
          setSpeakingText(`Question ${newIndex + 1}: ${session.questions[newIndex]}`);
          setTimeout(() => setSpeakingText(""), 3000);
        }
      }
      
      setIsTransitioning(false);
      setAnimationState("thinking");
    }
  };

  const toggleVoice = () => {
    setVoiceEnabled(prev => !prev);
  };

  const toggleTimer = () => {
    setTimerPaused(prev => !prev);
  };

  const goHome = () => {
    startNewSession();
  };

  const currentQuestion = session.questions[session.currentIndex];
  const currentResult = session.results[session.currentIndex];

  if (showSummary) {
    return <SessionSummary session={session} elapsedTime={elapsedTime} onRestart={startNewSession} />;
  }

  if (isLoading && !currentQuestion) {
    return (
      <div className="evaluator-container">
        <div className="loading-spinner"></div>
        <p>Preparing your interview session...</p>
      </div>
    );
  }

  return (
    <div className={`evaluator-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
      <button className="home-button" onClick={goHome}>
        🏠
      </button>

      <div className="options-bar">
        <div className="options-left">
           <div className="header">
            <h1>🧠 AI Interview Coach</h1>
            <p className="subtitle">Practice your interview skills with AI-powered feedback</p>
          </div>
          
          {showHistory && (
            <div className="dropdown-menu">
              <div className="menu-section">
                <h4>Session History</h4>
                <ul className="history-list">
                  {session.history.map(item => (
                    <li key={item.id}>
                      <span>{item.date}</span>
                      <span>{item.questions} Qs</span>
                      <span>{item.score}%</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="menu-actions">
                <button onClick={startNewSession}>
                  <span>🆕</span> New Session
                </button>
                <button onClick={toggleVoice}>
                  <span>{voiceEnabled ? '🔊' : '🔇'}</span> 
                  {voiceEnabled ? 'Disable Voice' : 'Enable Voice'}
                </button>
                <button onClick={toggleTimer}>
                  <span>{timerPaused ? '▶️' : '⏸️'}</span> 
                  {timerPaused ? 'Resume Timer' : 'Pause Timer'}
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="timer-display">
          <span role="img" aria-label="timer">⏱️</span> {formatTime(elapsedTime)}
        </div>
      </div>

      <div className="interview-screen">
        <div className="interviewer-video-section">
          <InterviewerVideo animationState={animationState} />
        </div>
        
        <div className="user-interaction-section">
          <ProgressBar 
            current={session.currentIndex + 1} 
            total={MAX_QUESTIONS} 
          />

          {error && (
            <div className="error-message">
              <span role="img" aria-label="error">⚠️</span> {error}
              <button onClick={() => setError(null)}>×</button>
            </div>
          )}

          {feedbackMessage && (
            <div className={`feedback-message ${feedbackMessage.includes('Oops') ? 'error' : 'success'}`}>
              {feedbackMessage}
            </div>
          )}

          <div className="question-container-wrapper">
            {currentQuestion && (
              <QuestionBox 
                question={currentQuestion}
                index={session.currentIndex}
                category="Technical"
                difficulty="Easy"
                showSpeakingIndicator={!!speakingText}
                speakingText={speakingText}
              />
            )}
          </div>

          {currentResult && (
            <div className="collapsible-section">
              <div 
                className="collapsible-header"
                onClick={() => setExpandedEvaluation(!expandedEvaluation)}
              >
                <h3>📊 Evaluation Result (Click to {expandedEvaluation ? 'collapse' : 'expand'})</h3>
                <span>{expandedEvaluation ? '▼' : '▶'}</span>
              </div>
              {expandedEvaluation && (
                <div className="collapsible-content">
                  <EvaluationResult result={currentResult} />
                </div>
              )}
            </div>
          )}

          <div className={`answer-section ${expandedEvaluation ? 'compact-answer' : ''}`}>
            <textarea
              ref={answerRef}
              className="answer-box"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here or use voice input..."
              rows={expandedEvaluation ? 3 : 4}
              disabled={isListening}
            />
            
            {speechSupported && (
              <div className="voice-controls">
                <button 
                  onClick={toggleSpeechRecognition}
                  className={`voice-btn ${isListening ? 'active' : ''}`}
                  disabled={animationState === "greeting"}
                >
                  <span role="img" aria-label="microphone">
                    {isListening ? '🛑' : '🎤'}
                  </span> {isListening ? 'Stop Listening' : 'Voice Answer'}
                </button>
                {isListening && <div className="pulse-ring"></div>}
              </div>
            )}
          </div>

          <div className="button-row">
            <button 
              onClick={() => navigateQuestion('prev')} 
              disabled={session.currentIndex <= 0 || animationState === "greeting" || isTransitioning}
              className="nav-button"
            >
              <span role="img" aria-label="previous">⬅️</span> Previous
            </button>
            
            <button 
              onClick={evaluateAnswer} 
              disabled={!answer.trim() || animationState === "greeting" || currentResult || isTransitioning}
              className={`primary-action ${currentResult ? 'answered' : ''}`}
            >
              <span role="img" aria-label="submit">
                {currentResult ? '✅' : '📤'}
              </span> {currentResult ? 'Answered' : 'Submit Answer'}
            </button>
            
            <button 
              onClick={() => navigateQuestion('next')} 
              disabled={animationState === "greeting" || isTransitioning || (session.currentIndex === session.questions.length && session.questions.length >= MAX_QUESTIONS)}
              className="nav-button"
            >
              <span role="img" aria-label="next">➡️</span> 
              {session.currentIndex === session.questions.length 
                ? session.questions.length < MAX_QUESTIONS ? 'New Question' : 'Finish'
                : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionEvaluator;