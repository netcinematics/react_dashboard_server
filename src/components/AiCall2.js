import {useEffect, useState} from 'react'
import axios from 'axios'

const AiCall2 = () => {
  const [responses, setResponses] = useState(null)
  useEffect( () => {
    const options = {
        method: 'GET',
        url: 'https://node-dashboard-server.vercel.app/ai2',
        // url: 'http://localhost:8008/ai2',
        params: {prompt:'what time is it?'}
    }
    axios.request(options).then((response) => {
        setResponses(response.data)
    }).catch((error) => {
        console.error(error)
    })
  }, [])

  return (
    <aside style={{background:'black',color:'skyblue',display:'flex',justifyContent:'center'}}>
      <h2>ai 2</h2>
      {responses?.map((item, i) => (
        <div key={i}> <p>{item.message.content}</p> </div>
      ))}
    </aside>
  );
}
  
export default AiCall2