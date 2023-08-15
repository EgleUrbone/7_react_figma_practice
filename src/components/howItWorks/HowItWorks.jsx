import MainBtn from '../MainBtn';
import SectionTitle from '../SectionTitle';

export default function HowItWorks() {
  return (
    <div className='ml-32 mr-36 mt-40'>
      <div className='flex items-center gap-24'>
        <img className='w-1/2' src='img/Image Container.png' alt='notes' />
        <div className='items-center'>
          <SectionTitle
            classN={'mb-8'}
            pill={'FEATURES'}
            title={'Gain more insight into how people use your'}
            subtitle={
              'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'
            }
          />
          <MainBtn text={'Get Started'} />
        </div>
      </div>
      <div className='flex items-center gap-24 mt-36'>
        <div className='items-center'>
          <SectionTitle
            classN={'mb-8'}
            pill={'FEATURES'}
            title={'Gain more insight into how people use your'}
            subtitle={
              'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'
            }
          />
          <MainBtn text={'Get Started'} />
        </div>
        <img className='w-1/2' src='img/Image Container.png' alt='notes' />
      </div>
    </div>
  );
}
