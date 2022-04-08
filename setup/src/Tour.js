import React, { useState, useContext } from 'react';
import {DeleteId} from "./App.js";

const Tour = ({tour}) => {
  const {id, name, image, info, price} = tour
  const [readMore, setReadMore] = useState(false);

  const {deleteTour} = useContext(DeleteId);

  const show = () => {
    setReadMore(!readMore)
  }

  return (
      <article className="single-tour">
        <img src={image} alt="Image of a tour" />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>{readMore ? info: `${info.substring(0, 200)}...`}{readMore ? <button onClick={show}>show less</button>: <button onClick={show}>show more</button>}</p>
          <button className="delete-btn" onClick={() => {deleteTour(id)}}>Not Interested</button>
        </footer>
      </article>
  );
};

export default Tour;
