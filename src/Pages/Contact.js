import Footer from "./Footer";

function Contact() {
  return (
    <div className='homeContainer'>
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
}

export default Contact;
