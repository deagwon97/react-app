import { Component } from 'react';

class UpdateContent extends Component {
  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update_process"
          mothod="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
            alert('Submit!!!');
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="decription"></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;