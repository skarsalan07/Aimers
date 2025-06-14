import React, { useEffect, useState, useRef } from "react";
import '../assets/css/start_interview.css';

const MAX_QUESTIONS = 15;

// Typing animation component
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

// Subcomponents
const SpeakingIndicator = ({ text }) => (
  <div className="speaking-box">
    <div className="speaking-indicator">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
    <p><TypingText text={text} speed={20} /></p>
  </div>
);

const QuestionBox = ({ question, index, category, difficulty }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [question]);

  return (
    <div className={`question-box ${isVisible ? 'visible' : ''}`}>
      <div className="question-meta">
        <span className="question-number">Question {index + 1}</span>
        {category && <span className="question-category">{category}</span>}
        {difficulty && <span className={`question-difficulty ${difficulty.toLowerCase()}`}>{difficulty}</span>}
      </div>
      <p className="question-text"><TypingText text={question} speed={10} /></p>
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
      <h3>📊 Evaluation Result</h3>
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

// Main Component
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
  const [isSpeaking, setIsSpeaking] = useState(false);
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
  
  const timerRef = useRef(null);
  const recognitionRef = useRef(null);
  const answerRef = useRef(null);

  // Initialize speech recognition and timer
  useEffect(() => {
    // Timer setup
    timerRef.current = setInterval(() => {
      if (!timerPaused) {
        setElapsedTime(prev => prev + 1);
      }
    }, 1000);

    // Speech recognition setup
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
      };

      recognitionRef.current.onerror = (event) => {
        setError("Speech recognition error: " + event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      setSpeechSupported(false);
      setVoiceEnabled(false);
    }

    // Load session from localStorage if exists
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

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
    if (voiceEnabled && speechSupported) {
      speak("New session started. Let's begin with the first question.");
    }
    fetchQuestion();
  };

  const speak = (text) => {
    if (!voiceEnabled || !speechSupported) return;
    
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsSpeaking(true);

    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    setSpeakingText(text);

    utterance.onend = () => {
      setIsSpeaking(false);
      setTimeout(() => setSpeakingText(""), 1000);
    };

    synth.speak(utterance);
  };

  const fetchQuestion = async () => {
    if (session.questions.length >= MAX_QUESTIONS) {
      setShowSummary(true);
      return;
    }

    setIsLoading(true);
    setError(null);
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
      
      if (voiceEnabled && speechSupported) {
        speak(`Evaluation: ${data.evaluation}. Score: ${Math.round(data.similarity * 100)}%`);
      } else {
        setSpeakingText(`Evaluation: ${data.evaluation}. Score: ${Math.round(data.similarity * 100)}%`);
        setTimeout(() => setSpeakingText(""), 5000);
      }
    } catch (err) {
      setError(err.message);
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
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const navigateQuestion = (direction) => {
    const newIndex = direction === 'next' 
      ? session.currentIndex + 1 
      : session.currentIndex - 1;

    if (newIndex >= 0 && newIndex <= session.questions.length) {
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

      if (newIndex === session.questions.length) {
        if (session.questions.length < MAX_QUESTIONS) {
          fetchQuestion();
        } else {
          setShowSummary(true);
        }
      } else if (voiceEnabled && speechSupported) {
        speak(`Question ${newIndex + 1}: ${session.questions[newIndex]}`);
      } else {
        setSpeakingText(`Question ${newIndex + 1}: ${session.questions[newIndex]}`);
        setTimeout(() => setSpeakingText(""), 3000);
      }
    }
  };

  const endSession = () => {
    setShowSummary(true);
  };

  const toggleVoice = () => {
    setVoiceEnabled(prev => !prev);
  };

  const toggleTimer = () => {
    setTimerPaused(prev => !prev);
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
    <div className="evaluator-container">
      <div className="options-bar">
        <div className="options-left">
          <button 
            className="menu-button"
            onClick={() => setShowHistory(!showHistory)}
          >
            <span>☰</span> Menu
          </button>
          
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

      <div className="header">
        <h1>🧠 AI Interview Coach</h1>
        <p className="subtitle">Practice your interview skills with AI-powered feedback</p>
      </div>

      <ProgressBar 
        current={session.currentIndex + 1} 
        total={Math.min(session.questions.length + 1, MAX_QUESTIONS)} 
      />

      {speakingText && <SpeakingIndicator text={speakingText} />}

      {error && (
        <div className="error-message">
          <span role="img" aria-label="error">⚠️</span> {error}
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      {currentQuestion && (
        <QuestionBox 
          question={currentQuestion}
          index={session.currentIndex}
          category="Technical"
          difficulty="Easy"
        />
      )}

      <div className="answer-section">
        <textarea
          ref={answerRef}
          className="answer-box"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here or use voice input..."
          rows="6"
          disabled={isListening}
        />
        
        {speechSupported && (
          <div className="voice-controls">
            <button 
              onClick={toggleSpeechRecognition}
              className={`voice-btn ${isListening ? 'active' : ''}`}
              disabled={isSpeaking}
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
          disabled={session.currentIndex <= 0 || isSpeaking}
          className="nav-button"
        >
          <span role="img" aria-label="previous">⬅️</span> Previous
        </button>
        
        <button 
          onClick={evaluateAnswer} 
          disabled={!answer.trim() || isSpeaking || currentResult}
          className={`primary-action ${currentResult ? 'answered' : ''}`}
        >
          <span role="img" aria-label="submit">
            {currentResult ? '✅' : '📤'}
          </span> {currentResult ? 'Answered' : 'Submit Answer'}
        </button>
        
        <button 
          onClick={() => navigateQuestion('next')} 
          disabled={isSpeaking || (session.currentIndex === session.questions.length && session.questions.length >= MAX_QUESTIONS)}
          className="nav-button"
        >
          <span role="img" aria-label="next">➡️</span> 
          {session.currentIndex === session.questions.length 
            ? session.questions.length < MAX_QUESTIONS ? 'New Question' : 'Finish'
            : 'Next'}
        </button>
      </div>

      <div className="end-session-row">
        <button 
          onClick={endSession}
          className="end-session-button"
        >
          <span role="img" aria-label="end">⏹️</span> End Session
        </button>
      </div>

      {currentResult && <EvaluationResult result={currentResult} />}
    </div>
  );
}

export default QuestionEvaluator;