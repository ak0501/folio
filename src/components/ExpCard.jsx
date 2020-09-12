import React from 'react';
const ExpCard=(props) => {
  return(
      <div className="col-md-4 text-center animate-box">
<div className="services color-6">
<span className="icon">
    <i className={ props.icon} />
</span>
<div className="desc">
  <h3>{props.heading}</h3>
    <p>{props.content} </p>
</div>
</div>
</div>
  )
}

export default ExpCard;
