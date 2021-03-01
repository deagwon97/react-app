import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject';
import Control from './components/Control';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
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
  getContent() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcom.title;
      _desc = this.state.welcom.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
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
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
      console.log('state content', this.state.id, this.state.contents);
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            var newContents = Array.from(this.state.contents);
            newContents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: newContents,
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === 'update') {
      _article = (
        <UpdateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            var newContents = Array.from(this.state.contents);
            newContents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: newContents,
            });
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }

  render() {
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
        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}
export default App;
