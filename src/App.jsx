
import './App.css'
import Cards from './components/Cards'


function App() {
  let myObj={
      username:Shweta,
      age:21,

  }
  let newArr = [1,2,3]

  return (
  <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>

<Cards username="shwetaChannel" btnClick="click Me"></Cards>
<Cards></Cards>
</>
  )
}

export default App
