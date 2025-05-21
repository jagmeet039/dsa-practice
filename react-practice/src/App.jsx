import Navbar from "./components/Navbar"
import ChipInput from "./questions/problem-1/ChipInput"
import GuessTheNumber from "./questions/problem-2/GuessTheNumber"
import DarkModeToggle from "./questions/problem-3/DarkModeToggle"

const App = () => {
  return (
    <div>
      <Navbar/>
      <ChipInput />
      <hr />
      <GuessTheNumber />
      <hr />
      <DarkModeToggle/>
    </div>
  )
}

export default App
