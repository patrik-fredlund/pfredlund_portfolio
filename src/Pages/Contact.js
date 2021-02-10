import Footer from '../Footer';

const Contact = () => {
  return (
    <div className='mainContainer'>
      <div className='profileImage' />
      <h1 className='hello'>Contact</h1>
      <hr className='line'></hr>
      <h2 className='welcome'>For any inquires feel free to contact me at:</h2>
      <a href='mailto:patrikfredlunds@gmail.com' className='email'>
        patrikfredlunds@gmail.com
      </a>

      <Footer />
    </div>
  );
};

export default Contact;
