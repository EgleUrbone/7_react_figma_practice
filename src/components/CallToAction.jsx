import MainBtn from './UI/MainBtn';
import SecondaryBtn from './UI/SecondaryBtn';

function CallToAction() {
  return (
    <div className='mx-36 flex  relative mb-36'>
      <img src='img/Rectangle 1.png' alt='background' />
      <div className='absolute mx-24 flex gap-36 mt-16'>
        <div className='w-2/4'>
          <h2 className='text-white font-bold text-4xl leading-10 mb-4'>The fastest way from idea to live site. Period.</h2>
          <p className='text-xl text-slate-400'>
            Flex is a Small SaaS Business. Flex isn’t a traditional company.
          </p>
        </div>
        <div className='flex justify-center gap-4 items-center'>
          <MainBtn text={'Get Started'} />
          <SecondaryBtn text={'Learn More'} />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
