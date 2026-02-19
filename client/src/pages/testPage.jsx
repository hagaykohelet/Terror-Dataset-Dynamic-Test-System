import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"

function TestPage() {
    const navigate = useNavigate()
  return (
    <div>
        <NavBar text="Quiz" />
        <p>when <b>country= {}</b> and <b>year={}</b> what is the <b>attack type</b></p>

        <b>your answer:</b>
        <textarea name="" id=""></textarea>
        <button>Aubmit Answer</button>
        <footer><button onClick={navigate('/')}>Back to Data Page</button>
        <button>Next Question</button></footer>
    </div>
  )
}

export default TestPage