import React from 'react';

const menu = [
  { number: '001', name: 'About' },
  { number: '002', name: 'Get Started' },
  { number: '003', name: 'Sign In' }
];

const menuList = menu.map(link => {
  return (
    <li key={link.number}><a href="#">{link.name}</a></li>
  );
});

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      icon: 'fa-solid fa-bars',
      overlay: 'overlay hide',
      menu: 'hide',
      text: ''
    };
    this.clickedIcon = this.clickedIcon.bind(this);
    this.clickedOther = this.clickedOther.bind(this);
  }

  clickedIcon() {
    this.setState({
      isClicked: true,
      overlay: 'overlay',
      icon: '',
      menu: '',
      text: 'Menu'
    });
  }

  clickedOther() {
    this.setState({
      isClicked: false,
      icon: 'fa-solid fa-bars',
      overlay: 'overlay hide',
      menu: 'hide',
      text: ''
    });
  }

  render() {
    const isClicked = this.state.isClicked;
    const icon = this.state.icon;
    const text = this.state.text;
    const overlay = this.state.overlay;
    const menu = this.state.menu;
    let onClick = this.clickedIcon;

    if (isClicked) {
      onClick = this.clickedOther;
    } else if (!isClicked) {
      onClick = this.clickedIcon;
    }

    return (
      <div>
        <div className={`ease ${icon}`} onClick={onClick}>
          <h3>{text}</h3>
          <ul className={menu}>{menuList}</ul>
          </div>
          <div className={overlay} onClick={this.clickedOther}></div>
      </div>
    );
  }
}
