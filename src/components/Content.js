import { Component } from "react";

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <div className="mainDesc">
          {/* 부모 컴포넌트로부터 전달받은 desc(설명)을 렌더링합니다. */}
          {this.props.desc}
          {/* div 요소를 사용하여 이미지를 감싸고, img 태그를 통해 이미지를 렌더링합니다. */}
          <div>
            {/* img 태그의 src 속성은 부모 컴포넌트로부터 전달받은 img 값을 사용하며, alt 속성은 이미지에 대한 대체 텍스트로 title을 사용합니다. */}
            <img src={this.props.img} alt={this.props.title}></img>
          </div>
        </div>
      </article>
    );
  }
}

export default Content;
