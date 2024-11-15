
import './App.css'
import StaticCodeExample from './Displaying Static Code Examples/Displaying'
import DynamicCodeExample from './Dynamically Rendering Code Snippets/Dynamically';

function App() {
  const pythonCode = `
  def greet(name):
      print(f"Hello, {name}!")

  greet("World")
`;

  return (
   <div>
    <StaticCodeExample/>
    <DynamicCodeExample code={pythonCode} />
   </div>
  )
}

export default App
