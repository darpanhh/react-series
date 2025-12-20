

import './App.css'
import Card from './components/Card'
function App() {
//  let myObj = {
//   username:"darpan",
//   age:21
//  }
//  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* <Card channel='chaiaurcode' someObje = {newArr}/> */}
      <Card username='darpan' btnText ='click me'/>
      <Card username='coder'/>
    </>
  )
}

export default App
