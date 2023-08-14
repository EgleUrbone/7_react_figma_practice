import MainBtn from "./MainBtn";

function Main() {
  const text = 'Get early access'
  return (
    <div>
      <img src='img/Pattern Dark.png' alt='background image' />
      <p>HEADER</p>
      <h1>A small business is only as good as its tools</h1>
      <p>
        We’re different. Flex is the only saas business platform that lets you
        run your business on one platform, seamlessly across all digital
        channels.
      </p>
      <input type='email' placeholder='Enter your work email' />
      <MainBtn text={text}/>
      <p>Start your free 14-day trial today, no credit card required.</p>
    </div>
  );
}

export default Main;
