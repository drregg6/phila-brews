const imgUrls = [
  'https://images.unsplash.com/photo-1465857862841-737f24ba8ba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
  'https://images.unsplash.com/photo-1415087121655-4e6882234096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
  'https://images.unsplash.com/photo-1528057393590-70f0a82af9a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1502181355239-7466fa0104c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
  'https://images.unsplash.com/photo-1485899746080-bca038f6e593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1485777675307-6dd50e4485b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1509330860649-160543d0d8ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'
];
const randomNumber = Math.floor(Math.random() * imgUrls.length);
const image = imgUrls[randomNumber];

function NotFound() {
  return (
    <div className='notfound' style={{backgroundImage: `url(${image})`}}>
      <h1 className='halo large'>Page Not Found</h1>
      <p className="halo head">Sorry, this page does not exist.</p>
    </div>
  )
}

export default NotFound;