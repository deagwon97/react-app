import { Component } from 'react';


class TOC extends Component{
  render() {
    console.log("TOC render")
    var lists = [];
    var data = this.props.data;
    var i = 0;

    while(i < data.length){
      // data는 상위 components에서 전달 받은 props
      // while문을 이용
      // props를 가공하여 li 태그를 생성
      lists.push(<li key = {data[i].id} ><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
      i = i + 1;
    }

    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;