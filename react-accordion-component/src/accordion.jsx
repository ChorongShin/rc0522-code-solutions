import React from 'react';

const accordionData = [
  {
    id: '1',
    title: 'Hypertext Markup Language',
    content: `Hypertext Markup Language(HTML) is the standard markup language
            for documents designed to be displayed in a web browser.
            It can be assisted by technologies such as Cascading Style Sheets(CSS)
            and scripting languages such as JavaScript.`
  },
  {
    id: '2',
    title: 'Cascading Style Sheets',
    content: `Cascading Style Sheets (CSS) is a style sheet language used for
            describing the presentation of a document written in a markup
            language such as HTML. CSS is a cornerstone technology of the World Wide Web,
            alongside HTML and JavaScript.`
  },
  {
    id: '3',
    title: 'JavaScript',
    content: `JavaScript, often abbreviated as JS, is a programming language that
            conforms to the ECMAScript specification. JavaScript is high-level,
            often just-in-time compiled, and multi-paradigm. It has curly-bracket
            syntax, dynamic typing, prototype-based object-orientation, and
            first-class functions.`
  }
];

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      id: event.target.id
    });

    if (event.target.id === this.state.id) {
      this.setState({
        id: ''
      });
    }
  }

  render() {
    return (
    <div>
      {accordionData.map(language => (
        <div key={language.id}>
          <div className="topic">
            <h3
              id={language.id}
              onClick={this.handleClick}>
              {language.title}
            </h3>
          </div>
          <div className={`content ${this.state.id === language.id ? 'show' : 'hide'}`}>
            <p>{language.content}</p>
          </div>
        </div>
      ))}
    </div>
    );
  }
}
