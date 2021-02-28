import './App.css';
import { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      mode : "welcome",
      subject : {title:"React", sub:"Hello react world!"},
      welcom : {title:"Hello!", desc:"Welcome to the react world"},
      contents : [
        {id:1, title:"HTML and CSS", desc:"HTML CSS is HyperText Markup Language"},
        {id:2, title:"HTML", desc:"HTML is HyperText Markup Language"},
        {id:3, title:" CSS", desc:"CSS is HyperText Markup Language"},
        {id:4, title:"Js", desc:"JS is HyperText Markup Language"}
      ]
      }
    }

    render() {
      console.log("App render")
      var _title, _desc = null;
      if(this.state.mode === "welcome"){
        _title = this.state.welcom.title;
        _desc = this.state.welcom.desc;
      }
      else if(this.state.mode === "read"){
        _title = this.state.contents[0].title;
        _desc = this.state.contents[0].desc;
      }
      return (
      <div className="App">

        {/* <Subject
         title = {this.state.subject.title}
         sub = {this.state.subject.sub}
         ></Subject> */}

         
        <header>
          <h1><a href = "/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            //this.state.mode = "welcome";
            //debugger;
            alert("Hi")
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>


        <TOC data = {this.state.contents}></TOC>
        <Content title={_title}
                 desc={_desc}
                 ></Content>
      </div>
      );
    }
}




export default App;
