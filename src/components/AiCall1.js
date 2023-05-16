import {useEffect, useState} from 'react'
import axios from 'axios'

const AiCall1 = () => {
  const [responses, setResponses] = useState(null)
  useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://node-dashboard-server.vercel.app/ai1'
        // url: 'http://localhost:8008/ai'
    }
    axios.request(options).then((response) => {
        setResponses(response.data)
    }).catch((error) => {
        console.error(error)
    })
  }, [])

  return (
    <aside style={{background:'black',color:'skyblue',display:'flex',justifyContent:'center'}}>
      {responses?.map((item, i) => (
        <div key={i}> <p>{item.text}</p> </div>
      ))}
    </aside>
  );
}
  
export default AiCall1