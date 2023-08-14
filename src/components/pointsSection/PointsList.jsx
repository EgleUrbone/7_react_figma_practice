import SinglePoint from "./SinglePoint";


export default function PointsList() {
  const pointsArr = [
    {
      id: 1,
      img: 'img/icons/Frame 18.png',
      alt: 'icon',
      title: 'Measure your performance',
      text: 'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 2,
      img: 'img/icons/Frame 18 (1).png',
      alt: 'icon',
      title: 'Custom analytics',
      text: 'Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.',
    },
    {
      id: 3,
      img: 'img/icons/Frame 18 (2).png',
      alt: 'icon',
      title: 'Team Management',
      text: 'Our calendar lets you know what is happening with customer and projects so you',
    },
    {
      id: 4,
      img: 'img/icons/Frame 18 (3).png',
      alt: 'icon',
      title: 'Build your website',
      text: 'A tool that lets you build a dream website even if you know nothing about web design or programming.',
    },
    {
      id: 5,
      img: 'img/icons/Frame 18 (4).png',
      alt: 'icon',
      title: 'Connect multiple apps',
      text: 'The first business platform to bring together all of your products from one place.',
    },
    {
      id: 6,
      img: 'img/icons/Frame 18 (5).png',
      alt: 'icon',
      title: 'Easy setups',
      text: 'End to End Business Platform, Sales Management, Marketing Automation, Help Desk',
    },
  ];

  return (
    <div className="grid grid-cols-3 mx-36 gap-x-8 mb-24">
      {pointsArr.map((pObj) => (
        <SinglePoint key={pObj.id} item={pObj} />
      ))}
    </div>
  )
}