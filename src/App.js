// import logo from './logo.svg';
// import './App.css';
import AiCall1 from './components/AiCall1'
import AiCall2 from './components/AiCall2'
import NewsFeed from './components/NewsFeed'

const App = () => {
  return (
    <main style={{background:'black',color:'skyblue',display:'flex',justifyContent:'center'}}>
      Ai | FrontEnd | Server | crypto
      <AiCall1/>
      <AiCall2/>
      <NewsFeed/>
    </main>
  );
}

export default App
