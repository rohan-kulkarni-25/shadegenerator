import './Generator.css'
import React, { useState } from 'react'

export default function Generator() {

  const [r, setr] = useState(0)
  const [g, setg] = useState(0)
  const [b, setb] = useState(0)


  const getRed = (event) => {
    const redValue = event.target.value;
    setr(redValue)
    colorGenerator();
  }
  const getGreen = (event) => {
    const greenValue = event.target.value;
    setg(greenValue)
    colorGenerator();
  }
  const getBlue = (event) => {
    const blueValue = event.target.value;
    setb(blueValue)
    colorGenerator();
  }
  const colorGenerator = () => {
    document.body.style.backgroundColor = `rgba(${r},${g},${b})`
  }
  colorGenerator();



  return (
    <section>
      <div className="container">
        <label htmlFor="">RED<input type="range" min="0" max="255" value={r} className="slider" onChange={getRed}></input></label>
        <label htmlFor="">GREEN<input type="range" min="0" max="255" value={g} className="slider" onChange={getGreen}></input></label>
        <label htmlFor="">BLUE<input type="range" min="0" max="255" value={b} className="slider" onChange={getBlue}></input></label>
        <div className="display">
          <p className="red">R-{r}</p><p className="green">G-{g}</p>
          <p className="blue">B-{b}</p>
        </div>
      </div>
    </section>
  )
}
