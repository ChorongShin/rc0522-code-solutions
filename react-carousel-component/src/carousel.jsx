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
      running: false
    };
    this.previousClick = this.previousClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.dotClick = this.dotClick.bind(this);

  }

  previousClick() {

    this.setState({
      count: this.state.count - 1

    });
  }

  nextClick() {
    this.setState({
      count: this.state.count + 1

    });

  }

  handleDotClick() {
    this.intervalId = setInterval(this.nextClick, 3000);
    this.setState({ running: true });
  }

  dotClick() {
    clearInterval(this.intervalId);
    this.setState({ running: false });
  }

  render() {
    // console.log('state:', this.state);

    const running = this.state.running;
    const onClick = this.handleDotClick;

    if (this.state.count > pokedex.length - 1 && running) {
      this.setState({ count: 0 });

    }

    if (this.state.count <= -1) {
      this.setState({
        count: 4
      });
    }

    return (
      <div>
        <div className="page-container">
          <div className="view-container" onClick={onClick}>
            {pokedex.map(pokemon => (
                <div key={pokemon.id} className={`row ${this.state.count === pokemon.id ? 'active' : 'inactive'}`}>

                <span className="angle">
                  <i
                  className="fa-solid fa-angle-left fa-2xl"
                  onClick={this.previousClick}/>
                </span>

                <div className="pokemon-div">
                    <img className="pokemon"
                    id={pokemon.id}
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.image}`}
                    alt={`${pokemon.name}`} />
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
                className={`dot ${this.state.count === pokemon.id ? 'on' : ''}`}>
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

  // render() {
  //   console.log('state:', this.state);
  //   if (this.state.count > this.state.images.length - 1) {
  //     this.setState({ count: 0 });
  //   }

  //   if (this.state.count <= -1) {
  //     this.setState({
  //       count: 4
  //     });
  //   }

  //   return (
  //     <div>
  //       <div className="page-container">
  //         <div className="view-container">
  //           <div className="row">
  //             <div className="column-fourth">
  //               <span className="angle">
  //                 <i className="fa-solid fa-angle-left fa-2xl" onClick={this.previousClick}></i>
  //                 </span>
  //             </div>

  //             <div className="column-two-fourths" onClick={this.handleNext}>
  //               <div className="pokemon-div">
  //                 <img className="pokemon"
  //                 src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.state.images[this.state.count]}`}
  //                 alt={`${this.state.names[this.state.count]}`} />
  //               </div>
  //             </div>
  //             <div className="column-fourth">
  //               <span className="angle"><i className="fa-solid fa-angle-right fa-2xl" onClick={this.nextClick}></i></span>
  //             </div>
  //           </div>
  //           <div className="row circle-row">
  //             <div className="column-one-thirds"></div>
  //             <div className="column-one-thirds dots-div">
  //              {pokedex.map(pokemon =>
  //                (<span key={pokemon.id}
  //                className={`dot ${this.state.count === pokemon.id ? 'on' : ''}`}>
  //               </span>)
  //              )}
  //               </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

}

// export default class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       intervalId: null,
//       dot: ''
//     };
//     this.previousClick = this.previousClick.bind(this);
//     this.nextClick = this.nextClick.bind(this);
//   }

//   previousClick(evnet) {

//     this.setState({
//       count: this.state.count - 1
//     });
//   }

//   nextClick(event) {
//     this.setState({
//       count: this.state.count + 1
//     });

//   }

//   render() {
//     console.log('state:', this.state);
//     if (this.state.count > this.props.pokedex.length - 1) {
//       this.setState({ count: 0 });
//     }

//     if (this.state.count <= -1) {
//       this.setState({
//         count: 4
//       });
//     }

//     // work on dot here
//     let dot = this.state.dot;
//     if (this.state.count === this.props.pokedex.id) {
//       dot = 'on';
//     }

//     return (
//       <div>
//         <div className="page-container">
//           <div className="view-container">
//             <div className="row">
//               <div className="column-fourth">
//                 <span className="angle">
//                   <i className="fa-solid fa-angle-left fa-2xl" onClick={this.previousClick}></i>
//                 </span>
//               </div>

//               <div className="column-two-fourths">
//                 <div className="pokemon-div">
//                   <img className="pokemon"
//                     src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.state.images[this.state.count]}`}
//                     alt={`${this.state.names[this.state.count]}`} />
//                 </div>
//               </div>
//               <div className="column-fourth">
//                 <span className="angle"><i className="fa-solid fa-angle-right fa-2xl" onClick={this.nextClick}></i></span>
//               </div>
//             </div>
//             <div className="row circle-row">
//               <div className="column-one-thirds"></div>
//               <div className="column-one-thirds dots-div">
//                 <span id="0" className={`dot ${dot}`}></span>
//                 <span id="1" className={`dot ${dot}`}></span>
//                 <span id="2" className={`dot ${dot}`}></span>
//                 <span id="3" className={`dot ${dot}`}></span>
//                 <span id="4" className={`dot ${dot}`}></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

// }

// my thoughs: What about map mathod only on dots?
