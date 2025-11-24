import { useState } from 'react'
import './styles/globals.css'
import './App.css'
import CVForm from './components/CVForm'
import CVPreview from './components/CVPreview'

function App() {
  const [cvData, setCvData] = useState({
    nom: '',
    email: '',
    telephone: '',
    education: [],
    experience: []
  })

  const handleDataChange = (newData) => {
    setCvData(newData)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Générateur de CV</h1>
      </header>
      <div className="main-content">
        <div className="form-section">
          <CVForm onDataChange={handleDataChange} />
        </div>
        <div className="preview-section">
          <CVPreview data={cvData} />
        </div>
      </div>
    </div>
  )
}

export default App
