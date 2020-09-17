
import React,{useState} from 'react'

const Forecast=({city,getForcast})=>{}

const [responseObj,setResponseObj]=useState({});
function getForecast(){
    .then(response=>response.json())
    .then(response=>{setResponseObj(response)})

}
    return(
        <div>
            Weather in <span>city={city}</span> is {getForcast};
        </div>

    )

export default Forecast;