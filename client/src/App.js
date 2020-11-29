import './App.css';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <span><svg className="background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 3240"><path d="M-.5-.5h1921v3240H-.5z" /><path d="M-.5 1728.5c338.595 172.79 583.271 169.768 741 138 259.227-52.211 390.591-203.616 836-351 145.621-48.185 267.25-76.895 343-93v-938a77649.246 77649.246 0 01-1919-12l-1 1256z" fill="#bf8034" /><path d="M-.5 971.5c109.491-66.266 280.883-151.835 502-186 279.38-43.168 423.181 28.938 661 18 182.526-8.395 443.786-66.783 757-305v-93l-1919 19-1 547z" fill="#d99e32" /><path d="M.5 850c270.807-148.492 494.028-184.03 645-190 289.251-11.437 424.011 81.289 700 55 254.551-24.247 451.682-132.825 574-216l1-499H-.5l1 850z" fill="#f2c744" /></svg></span>
      <Homepage />
    </div>
  );
}

export default App;
