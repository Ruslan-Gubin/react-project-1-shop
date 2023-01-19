import React from 'react';

const Testings = () => {
  const [data, setData] = React.useState<null | {}>(null)
  const [toggle, setToggle] = React.useState(false)
  const [value, setValue] = React.useState('')

  const handlerToggle = () => setToggle(prev => !prev)

  React.useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100)
  },[])

  return (
    <div>
      <h1 data-testid='value-elem'>{value}</h1>
      {toggle && <div data-testid='toggle-elem'>toggle</div>}
      {data && <div style={{color: 'red'}} >data</div>}
      <h1>Hello world</h1>
      <button data-testid='toggle-btn' onClick={handlerToggle}>click me</button>
      <input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder='input text..'/>
    </div>
  );
};

export  {Testings};