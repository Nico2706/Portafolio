const Error = ({mensaje}) => {
    return (
      <div className='font-bold text-white text-center mb-3 rounded-md bg-red-700 uppercase'>
          <p>{mensaje}</p>
      </div>
    )
  }
  
  export default Error