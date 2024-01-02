import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import './App.css'

function App() {
  const [valueResearch, setValueResearch] = useState('')
  const [promt, setPromt] = useState('')
  const [message, setMessage] = useState(null)

  const handleClick = () => {
    setMessage(null)
    setPromt('')
    setValueResearch('')
  }

  const getMassages = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: `I want to research ${promt} and get a summary of their entire profile, news ets.`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      setMessage(data.choices[0].message)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log(promt, message)
  }, [promt, message])

  return (
    <div className="app">
      <Header />
      <section className="app-main">
        <Nav />
        <section className="app-main-promt">
          <label htmlFor="request">I want to </label>
          <input
            placeholder="Select reserch type"
            list="request-list"
            id="request"
            name="request"
            value={valueResearch}
            onChange={(e) => setValueResearch(e.target.value)}
          />
          <datalist id="request-list">
            <option value="Personal research" />
            <option value="Company research" />
          </datalist>
          {valueResearch === 'Personal research' ? (
            <p>
              I want to reserch
              <input
                placeholder="LinkedIn Profile Link URL "
                value={promt}
                onChange={(e) => setPromt(e.target.value)}></input>
              and get a summary of their entire profile, news ets.
            </p>
          ) : valueResearch === 'Company research' ? (
            <p>
              I want to reserch
              <input
                placeholder="Company name "
                value={promt}
                onChange={(e) => setPromt(e.target.value)}></input>
              and get a summary of their entire profile, news ets.
            </p>
          ) : (
            ' '
          )}
          {message && <p className="app-main-promt-answer">{message.content}</p>}
        </section>
        <div className="btns">
          <button className="btn-cancel" onClick={handleClick}>
            Cancel
          </button>
          <button className="btn-go" onClick={getMassages}>
            Let's Go
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
