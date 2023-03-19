import React from 'react'
import { toast } from 'react-toastify'

const Home = () => {
  return (
    <>
        <div>Home</div>
        <button onClick={() => toast("Clicked")}>Click Me!</button>
    </>
  )
}

export default Home