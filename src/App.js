import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: { title: 'Web', sub: 'Hello react world!' },
      welcom: { title: 'Hello!', desc: 'Welcome to the react world' },
      contents: [
        {
          id: 0,
          title: 'HTML and CSS',
          desc: 'HTML CSS is HyperText Markup Language',
        },
        { id: 1, title: 'HTML', desc: 'HTML is HyperText Markup Language' },
        { id: 2, title: ' CSS', desc: 'CSS is HyperText Markup Language' },
        { id: 3, title: 'Js', desc: 'JS is HyperText Markup Language' },
      ],
    };
  }

  chageId = (id) => {
    console.log('id', id);
    console.log('before this id', this.state.id);
    this.setState({ id: id });
    console.log('after this id', this.state.id);
  };

  render() {
    console.log('App render');
    var _title,
      _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcom.title;
      _desc = this.state.welcom.desc;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      console.log('state content', this.state.id, this.state.contents);
    }

    console.log('render', this);

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            alert('hihihi');
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        ></Subject>
        <TOC
          onChangePage={function (id) {
            alert('hi');
            this.setState({
              mode: 'read',
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
