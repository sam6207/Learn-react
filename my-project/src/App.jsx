import { useState } from "react"


function App() {
  const [color,  _setColor] = useState("red")
  return (
    
     <div className="w-full h-screen duration-200"
     style={{background: color}}
     
     ></div>
    
  )
}

export default App
