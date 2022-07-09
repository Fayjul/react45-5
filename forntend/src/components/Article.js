import React from 'react';
import './style.css';

export default function Article(props) {
  return (
    <div className="blog">
      <h1>My Article: {props.heading}</h1>
      <h2 style={{ color: 'white' }}>Auther: {props.auther}</h2>
      <p style={{ color: 'white' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        illo, neque quo provident qui laboriosam libero at quis est quia dolorum
        sit inventore fuga maiores voluptate magnam quam minima fugiat expedita
        accusamus voluptatem a. Mollitia sequi dolor quasi magnam assumenda
        error incidunt esse impedit architecto sunt! Perferendis autem quas
        animi. Eos, dolorum! Alias quidem, iste ipsa architecto a eveniet,
        explicabo dolorum libero at atque reprehenderit expedita molestiae,
        tenetur numquam fuga quo quae recusandae fugit minima consequuntur amet
        quas. Ratione fuga quo cupiditate, nostrum delectus incidunt, deserunt
        corporis quod repudiandae sint, totam ex laboriosam dolorum. Mollitia
        consequatur quis vitae repellat nesciunt?
      </p>
    </div>
  );
}
