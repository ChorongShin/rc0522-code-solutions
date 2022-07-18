import React from 'react';

// const pokedex = [
//   {
//     names: ['Bulbasaur', 'Pikachu', 'Jigglypuff', 'Charmander', 'Squrirtle'],
//     id: ['1', '2', '3', '4', '5'],
//     images: ['001.png', '025.png', '039.png', '004.png', '007.png']
//   }
// ];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      count: 0,
      images: ['001.png', '025.png', '039.png', '004.png', '007.png'],
      names: ['Bulbasaur', 'Pikachu', 'Jigglypuff', 'Charmander', 'Squrirtle']
    };
  }

  previousClick(evnet) {

  }

  nextClick(event) {

  }

  render() {
    const images = this.state.images;
    let index;
    for (let i = 0; i < images.length; i++) {
      index = i;
    }
    return (
      <div>

        <div className="page-container">
          <div className="view-container">
            <div className="row">
              <div className="column-fourth">
                <span className="angle"><i className="fa-solid fa-angle-left fa-2xl"></i></span>
              </div>

              <div className="column-two-fourths">
                <div className="pokemon-div">
                  <img className="pokemon"
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.state.images[index]}`}
                  alt={`${this.state.names[index]}`} />
                </div>
              </div>
              <div className="column-fourth">
                <span className="angle"><i className="fa-solid fa-angle-right fa-2xl"></i></span>
              </div>
            </div>
            <div className="row circle-row">
              <div className="column-one-thirds"></div>
              <div className="column-one-thirds dots-div">
                <span id="1" className="dot"></span>
                <span id="2" className="dot"></span>
                <span id="3" className="dot"></span>
                <span id="4" className="dot"></span>
                <span id="5" className="dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
