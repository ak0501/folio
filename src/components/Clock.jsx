import React, { useEffect, useState } from "react";
import Clock from "react-clock";

function Time(props) {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
  let interval= setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Current time:</p>
      <Clock time={value}/>
    </div>
  );
}
export default Time;