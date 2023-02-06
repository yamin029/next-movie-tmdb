"use client"
const Error = ({error, reset}) => {
  return (
    <div>
        <button onClick={()=> reset()}>Reset</button>
    </div>
  )
}

export default Error