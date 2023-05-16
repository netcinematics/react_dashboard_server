import {useEffect, useState} from 'react'
import axios from 'axios'

const AiCall2 = () => {
  const [responses, setResponses] = useState(null)
  const [prompt, setPrompt] = useState('how are you?')
  useEffect( () => {
    sendAiMSG();
  }, [])

  function sendAiMSG(){
    if(!prompt)return;
    const options = {
      method: 'GET',
      url: 'https://node-dashboard-server.vercel.app/ai2',
      params: {'prompt':prompt}
      // url: 'http://localhost:8008/ai2',
      // params: {prompt:'what time is it?'}
    }
    axios.request(options).then((response) => {
        setResponses(response.data)
    }).catch((error) => {
        console.error(error)
    })    
  }

  function handleClick(){
    sendAiMSG();
  }
  return (
    <aside style={{background:'black',color:'skyblue',display:'flex',justifyContent:'center'}}>
      <h2>ai 2</h2>
      <input value={prompt} onChange={(e)=>setPrompt(e.target.value)} style={{height:'2em'}}/>
      {responses?.map((item, i) => (
        <div key={i}> <p>{item.message.content}</p> </div>
      ))}
      <button onClick={handleClick}>SEND</button>
    </aside>
  );
}
  
export default AiCall2