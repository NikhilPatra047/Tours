import React, {useContext} from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const {tours} = props;
  return (
    <section>
      <div className='title'>
        <h2>{tours.length ? `Our Tours`: `No Tours Left`}</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          const {id, name, info, price, image} = tour;
          return (
            <Tour key={id} tour={tour} />
          );
        })}
      </div>
    </section>
  )
};

export default Tours;
