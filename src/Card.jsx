import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='card-container'>
          <header className='card-header'>
            <span initials="JS"></span>
            <h2>박희원</h2>
          </header>
          <main>
            <ul>
              <li><span>생일</span> June 24, 1993 </li>
              <li><span>주소</span> 712-16 연희동 </li>
              <li><span>전화번호</span> 010 9570 0093 </li>
            </ul>
          </main>
        </section>
      </React.Fragment>
    )
  }
}

export default Card;