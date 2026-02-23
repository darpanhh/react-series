import React from 'react'

function SumCard(props) {
    function calculateSum(){
        props.setRes(props.a + props.b);
    }
  return (
    <div>
        <p>a = {props.a}</p>
        <p>b = {props.b}</p>
        <button onClick={calculateSum}>Calculate</button>
    </div>
  )
}

export default SumCard