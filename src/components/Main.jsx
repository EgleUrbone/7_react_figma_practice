import MainBtn from './MainBtn';

function Main() {
  const text = 'Get early access';
  return (
    <div className='mt-20 relative mx-36'>
      <img src='img/Pattern Dark.png' alt='background image' />
      <div className='absolute top-0 text-center mt-20 mx-36'>
        <p className='bg-green-500 px-2 rounded-md text-xs text inline-block text-white mb-6'>
          HEADER
        </p>
        <h1 className='text-6xl text-white font-bold mb-6'>
          A small business is only as good as its tools
        </h1>
        <p className='text-slate-400 mb-6 font-medium text-xl'>
          We’re different. Flex is the only saas business platform that lets you
          run your business on one platform, seamlessly across all digital
          channels.
        </p>
        <div className='flex gap-4 justify-center mb-4'>
          <div className='flex px-4 bg-white rounded-lg items-center gap-2 '>
            <img className='w-6 h-6 bg-white' src='img/Outline.png' alt='message icon' />
            <input
              className='w-64'
              type='email'
              placeholder='Enter your work email'
            />
          </div>
          <MainBtn text={text} />
        </div>
        <p className='text-slate-400 font-medium'>Start your free 14-day trial today, no credit card required.</p>
      </div>
    </div>
  );
}

export default Main;
