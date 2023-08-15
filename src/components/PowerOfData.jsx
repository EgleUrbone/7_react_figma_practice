import SectionTitle from './SectionTitle'

export default function PowerOfData() {
  return (
    <div className='mx-36 relative mt-20'>
      <img src="img/Pattern (2).png" alt="background pattern" />
      <div className='absolute top-0 text-center'>
        <SectionTitle classN={'w-3/4 mx-auto mt-20'} pill={'NUMBERS'} title={'We believe in the power of data'} subtitle={'Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels.'} />
        <div className='flex gap-8 justify-between mt-24'>
          <div >
            <h2 className='text-green-500 font-bold text-5xl'>235.000</h2>
            <p className='text-gray-500 font-medium text-xl'>Projects completed</p>
          </div>
          <div>
            <h2 className='text-green-500 font-bold text-5xl'>$10m</h2>
            <p className='text-gray-500 font-medium text-xl'>APR</p>
          </div>
          <div>
            <h2 className='text-green-500 font-bold text-5xl'>+50.000</h2>
            <p className='text-gray-500 font-medium text-xl'>Hours Saved Annually</p>
          </div>
          <div>
            <h2 className='text-green-500 font-bold text-5xl'>3.500</h2>
            <p className='text-gray-500 font-medium text-xl'>Unique Users</p>
          </div>
        </div>
      </div>
    </div>
  )
}