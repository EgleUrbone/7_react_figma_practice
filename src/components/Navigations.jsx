function Navigation() {
  return (
    <nav className='flex justify-between mx-20'>
      <img className='h-8 mt-6' src='img/Logo (1).png' alt='logo' />
      <div className='flex gap-12 mt-7 font-medium'>
        <a className=" text-gray-700" href='product'>Product</a>
        <a className=" text-gray-700" href='features'>Features</a>
        <a className=" text-gray-700" href='pricing'>Pricing</a>
        <a className=" text-gray-700" href='resources'>Resources</a>
      </div>
      <div className='mt-5'>
        <button className=' text-gray-700"py-2 px-4 text-sm font-medium'>Log in</button>
        <button className='py-2 px-4 text-sm bg-green-500 rounded-md font-medium text-white'>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navigation;
