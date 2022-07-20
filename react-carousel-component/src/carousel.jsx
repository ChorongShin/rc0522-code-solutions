import React from 'react';

const pokedex = [
  {
    id: 0,
    image: '001.png',
    name: 'Bulbasaur'
  },
  {
    id: 1,
    image: '025.png',
    name: 'Pikachu'
  },
  {
    id: 2,
    image: '039.png',
    name: 'Jigglypuff'
  },
  {
    id: 3,
    image: '004.png',
    name: 'Charmander'
  },
  {
    id: 4,
    image: '007.png',
    name: 'Squirtle'
  }
];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      dot: false
    };
    this.previousClick = this.previousClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.dotClick = this.dotClick.bind(this);

  }

  previousClick(event) {
    const dot = this.state.dot;
    this.setState({
      count: this.state.count - 1
    });

    if (this.state.count <= 0) {
      this.setState({
        count: pokedex.length - 1
      });
    }

    if (dot) {
      this.setState({
        count: event.target.id,
        dot: false
      });

    }
  }

  nextClick(event) {
    // const dot = this.state.dot;

    this.setState({
      count: this.state.count + 1
    });

    if (this.state.count >= pokedex.length - 1) {
      this.setState({
        count: 0
      });
    }

  }

  dotClick(event) {
    // console.log('event.target.id', event.target.id);
    const dot = this.state.dot;

    if (dot) {
      this.setState({
        count: event.target.id,
        dot: false
      });

    }
  }

  componentDidMount() {
    setInterval(this.nextClick, 3000);
  }

  render() {
    // console.log('state:', this.state);

    return (
      <div>
        <div className="page-container">
          <div className="view-container">
            {pokedex.map(pokemon => (
                <div key={pokemon.id}
                     className={`row ${this.state.count === pokemon.id ? 'active' : 'inactive'}`}
                  >

                <span className="angle">
                  <i
                  className="fa-solid fa-angle-left fa-2xl"
                  onClick={this.previousClick}/>
                </span>

                <div className="pokemon-div">
                    <img className="pokemon"
                    id={pokemon.id}
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.image}`}
                    alt={`${pokemon.name}`}
                   />
                    </div>
                <span className="angle">
                  <i
                  className="fa-solid fa-angle-right fa-2xl"
                  onClick={this.nextClick} />
                  </span>
              </div>
            ))}
              <div className="row circle-row">
                <div className="column-one-thirds"></div>
              <div className="column-one-thirds dot-div">
              {pokedex.map(pokemon =>
                (<span
                key={pokemon.id}
                id={pokemon.id}
                className={`dot ${this.state.count === pokemon.id ? 'on' : ''}`}
                onClick={`${this.state.count ? this.nextClick : this.previousClick}`}
               >
                </span>
                )
              )}
              </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

// if dot is clicked, move to that dot and change image
