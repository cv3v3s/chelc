import { useState, useRef } from 'react'
import './App.css'

const messages = [
  'i love u',
  'hello baby',
  'im okie',
  'sorry i didnt',
  'mean to not',
  'answer you',
  '....',
  'i deleted insta',
  'i ws not',
  'in the right',
  'headspace',
  'have fun tdy',
  'if u want',
  'call me tn',
  'use dc or ft',
  'im nt gnna',
  'reinstall and',
  'open instagram',
  'again',
  'for a while..',
  'uhm',
  'i hope u call tn',
]

function App() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [showChatBubble, setShowChatBubble] = useState(false)
  const [gifPlaying, setGifPlaying] = useState(false)
  const [heartbeat, setHeartbeat] = useState(false)
  const gifRef = useRef(null)
  const chatBubbleRef = useRef(null)

  
  const handleTap = () => {
    setHeartbeat(true)
    setTimeout(() => setHeartbeat(false), 300)

    if (!gifPlaying) {
      setGifPlaying(true)
    }

    if (!showChatBubble) {
      setShowChatBubble(true)
    }

    setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
  }

  const currentMessage = messages[currentMessageIndex]

  return (
    <div className="container">

      <div
        className={`avatar-wrapper ${heartbeat ? 'heartbeat' : ''} ${gifPlaying ? 'playing' : ''}`}
        onClick={handleTap}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleTap()}
        aria-label="Tap to interact"
      >
        <img
          ref={gifRef}
          src="/celin.gif"
          className="avatar-gif"
          alt="Celin"
        />
      </div>

      <div
        ref={chatBubbleRef}
        className={`chat-bubble ${showChatBubble ? 'visible' : ''}`}
        role="status"
        aria-live="polite"
      >
        <div className="chat-text" style={{ fontFamily: "'Kallum', cursive" }}>
          {currentMessage}
        </div>
        <div className="chat-tail"></div>
      </div>

      <div className="tap-hint">spam pixel celin</div>
    </div>
  )
}

export default App