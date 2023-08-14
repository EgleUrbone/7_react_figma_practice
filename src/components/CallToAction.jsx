import MainBtn from "./MainBtn";
import SecondaryBtn from "./SecondaryBtn";

function CallToAction() {
  return (
    <div>
      <div>
        <h2>The fastest way from idea to live site. Period.</h2>
        <p>Flex is a Small SaaS Business. Flex isn’t a traditional company.</p>
      </div>
      <div>
        <MainBtn text={'Get Started'} />
        <SecondaryBtn text={'Learn More'} />
      </div>
    </div>
  )
}

export default CallToAction;