import Footer from '../Footer';

const Home = () => {
  return (
    <div className='mainContainer'>
      <div className='profileImage' />
      <h1 className='hello'>Hi There!</h1>
      <hr className='line'></hr>
      <h2 className='welcome'>Welcome to my Portfolio Coolio!</h2>
      <p className='info'>
        My name is Patrik, but you can call me Putte.<br></br>I am a songwriting
        graphic designer turned frontend developer.<br></br> I love my wife, my
        guitar, typography, beautiful words and<br></br> chicken tikka masala.
        In that exact order.
      </p>
      <Footer />
    </div>
  );
}

export default Home;
