import { useEffect, useState } from 'react'
import Gif from './Gif/Gif'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [giphy, setGiphy] = useState('');

  useEffect(() => {
    const giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=oZbX2wdXlex3dMC4JV2I4K3UGUXSma6r&tag=&rating=r`;

    async function makeApiCall(){
      try {
        const responseJson = await fetch(giphyUrl)
        console.log(responseJson)
        const data = await responseJson.json()
        console.log(data)
        setGiphy(data.data)
      } catch(err){
        console.log(err)
      }

    }
    makeApiCall();
  }, []);







  return (
    <div className="App">
      <Gif gifLink={giphy}/>
    </div>
  )
}

export default App;
