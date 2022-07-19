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
      count: 0,
      images: ['001.png', '025.png', '039.png', '004.png', '007.png'],
      names: ['Bulbasaur', 'Pikachu', 'Jigglypuff', 'Charmander', 'Squrirtle']
    };
    this.previousClick = this.previousClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

  previousClick(evnet) {

    this.setState({
      count: this.state.count - 1
    });
  }

  nextClick(event) {
    this.setState({
      count: this.state.count + 1
    });

  }

  render() {
    // console.log('state:', this.state);
    if (this.state.count > this.state.images.length - 1) {
      this.setState({ count: 0 });
    }

    if (this.state.count <= -1) {
      this.setState({
        count: 4
      });
    }

    // work on dot here

    const on = 'on';
    return (
      <div>
        <div className="page-container">
          <div className="view-container">
            <div className="row">
              <div className="column-fourth">
                <span className="angle">
                  <i className="fa-solid fa-angle-left fa-2xl" onClick={this.previousClick}></i>
                  </span>
              </div>

              <div className="column-two-fourths">
                <div className="pokemon-div">
                  <img className="pokemon"
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.state.images[this.state.count]}`}
                  alt={`${this.state.names[this.state.count]}`} />
                </div>
              </div>
              <div className="column-fourth">
                <span className="angle"><i className="fa-solid fa-angle-right fa-2xl" onClick={this.nextClick}></i></span>
              </div>
            </div>
            <div className="row circle-row">
              <div className="column-one-thirds"></div>
              <div className="column-one-thirds dots-div">
                <span id="0" className={`dot ${on}`}></span>
                <span id="1" className={`dot ${on}`}></span>
                <span id="2" className={`dot ${on}`}></span>
                <span id="3" className={`dot ${on}`}></span>
                <span id="4" className={`dot ${on}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
