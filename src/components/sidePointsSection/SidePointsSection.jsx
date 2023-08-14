import SidePoint from './SidePoint';

function SidePointsSection() {
  const list = [
    {
      id: 1,
      img: 'img/icons/Frame 18.png',
      alt: 'icon',
      title: 'Measure your performance',
      text: 'Stay connected with your team and make quick decisions wherever you are.',
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
  ];

  return (
    <div>
      <div>
        {list.map((lObj) => (
          <SidePoint key={lObj.id} item={lObj} />
        ))}
      </div>
      <img src='img/Image Container.png' alt='working person' />
    </div>
  );
}

export default SidePointsSection;
