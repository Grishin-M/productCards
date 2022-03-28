import { useState, useEffect } from "react";
import { Cards } from './components/Cards'
import Input from "./components/Input";

export default function Main() {
  const [cards, setData] = useState([]);
  
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
        'X-RapidAPI-Key': '6eeb52144dmsh0d57ab0d76dd4eep1cd943jsnb32688adc6cc'
      }
    };

    fetch('https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=99&gender=men&page=10&brand=new%20balance%2C%20nike%2C%20puma%2C%20adidas%2C%20asics', options)
      .then(response => response.json())
      .then(data => setData(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
      <div className="Main">
        <Input />
        {
          cards.length ? (<Cards cards={cards} />) : <h3>Loading...</h3>
        }
      </div>  
    );
} 