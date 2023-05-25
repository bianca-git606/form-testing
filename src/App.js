import { FormFeedback } from './FormFeedback';
import './App.css';


function App() {

  const handleSubmit = () => {
    console.log("Feedback received!")
  };

  return (
    <FormFeedback onSubmit={handleSubmit}/>
  );
}

export default App;
