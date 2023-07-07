function BreweryAddress({
  building,
  street,
  city,
  state,
  zip
}) {
  return (
    <div className='brewery-addr'>
      <h2 className='head underline highlight'>Address</h2>
      <p>{building} {street}</p>
      <p>{city}, {state}</p>
      <p>{zip}</p>
    </div>
  )
}

export default BreweryAddress;