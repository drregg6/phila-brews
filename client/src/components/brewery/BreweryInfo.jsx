function BreweryInfo ({
  phone,
  website,
  mailingList,
  happyHour
}) {
  return (
    <div>
      <h2 className='head underline'>Information</h2>
      <ul className='brewery-info'>
        <li><span className='strong'>Phone Number:</span><br /> {phone}</li>
        <li><span className='strong'>Checkout</span> their <a href={website} target='_blank' rel="noopener noreferrer">website</a></li>
        <li><span className='strong'>Mailing List: </span>{ mailingList ? 'Yep!' : 'Nope' }</li>
        <li><span className='strong'>Happy Hour: </span>{ !happyHour || happyHour.available ? 'Yep!' : 'Nope' }</li>
        { (!happyHour || happyHour.available) && (
          <>
            <li><span className='strong'>Begins: </span> { !happyHour || happyHour.happyOpen }</li>
            <li><span className='strong'>Ends: </span> { !happyHour || happyHour.happyClose }</li>
          </>
        )}
      </ul>
    </div>
  )
}

export default BreweryInfo;