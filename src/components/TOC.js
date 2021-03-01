import { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log('toc update', newProps.data, this.props.data);

    if (this.props.data === newProps.data) {
      return false;
    }
    return true; // false이면 render()가 호출되지 않는다
  }
  render() {
    console.log('TOC render');
    var lists = [];
    var data = this.props.data;
    var i = 0;

    while (i < data.length) {
      // data는 상위 components에서 전달 받은 props
      // while문을 이용
      // props를 가공하여 li 태그를 생성
      lists.push(
        <li key={data[i].id}>
          <a
            href={'/content/' + data[i].id}
            onClick={function (id, e) {
              //console.log('haha', i);
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
