import Navbar from "./components/Navbar"
import ChipInput from "./questions/problem-1/ChipInput"
import GuessTheNumber from "./questions/problem-2/GuessTheNumber"

const App = () => {
  return (
    <div>
      <Navbar/>
      <ChipInput />
      <hr />
      <GuessTheNumber />
    </div>
  )
}

export default App
