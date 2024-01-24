import DisplayInfo from './components/DisplayInfo'
import './App.css'

function App() {

  return (
    <>
      <h1>Simple web app</h1>
      <div className="card">
        <DisplayInfo></DisplayInfo>
      </div>
      <p className="comment">
        Paul Lestrat
      </p>
    </>
  )
}

export default App
