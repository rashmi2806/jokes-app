import Button from './button';
import './jokes.css';
import {useState} from 'react';

function Jokes(){

  const [Joke, setJoke] = useState('Waiting for joke?');

  const fetchJoke = () =>{
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single").then((res) =>{
      return res.json()})
      .then((data) => {
        setJoke(data.joke);      
      })
    }

  return(
    <div>
      <Button jokesApiRes={fetchJoke}/>
      <p>{Joke}</p>
    </div>
  )
}

export default Jokes;