import { useState } from 'react'
import logo from './logo.svg'
import { Tweet } from '../src/components/tweet'

function App() {
  
  // Tipagemmmmm Typescript
  // o <strinng[]> indica que vai Salvar dentro desse array uma lista de strings
  const [tweets, setTweets] = useState<string[]>([
    'Tweet1',
    'Tweet2',
    'Tweet3',
  ])

  function createTweet(){
    setTweets([...tweets,'Tweet X'])
  }
  
  return (
    <div>
    {tweets.map(tweet =>{
      return <Tweet text={tweet} />
    })}
    
    <button onClick={createTweet}> Add a tweet </button>
    </div>
  )
}

export default App
