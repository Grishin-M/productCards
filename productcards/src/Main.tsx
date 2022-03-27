import React from "react";
import { Cards } from './components/Cards'

class Main extends React.Component{
  state = {
    cards: [],
  }
 
  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
        'X-RapidAPI-Key': '6eeb52144dmsh0d57ab0d76dd4eep1cd943jsnb32688adc6cc'
      }
    };

    fetch('https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100&gender=men&page=10&brand=new%20balance%2C%20nike%2C%20puma%2C%20adidas%2C%20asics', options)
      .then(response => response.json())
      .then(data => this.setState({cards: data.results}))
      .catch(err => console.error(err));
  }

  render() {
    const { cards } = this.state
    
    return (
      <div className="Main">
        {
          cards.length ? (<Cards cards={this.state.cards} />) : <h3>Loading...</h3>
        }
      </div>  
    );
  }
}

export default Main