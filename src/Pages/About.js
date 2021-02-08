import Footer from "./Footer";


function About() {

  return (

    (
      
      <div className='homeContainer'>
       <div className='profileImage' />
        <h1 className='hello'>About me</h1>
        <hr className='line'></hr>
        <h2 className='welcome'>Yes I have no bananas!</h2>
        <p className='info'>
          My name is Patrik Fredlund and I am an aspiring Frontend developer.
          Right now I'm learning the skills at a 2 year program at KYH in Stockholm, Sweden. My background is in Graphic Design where I have a bachelor with honor after 3 years study in Farnham, Uk.<br></br> Besides Graphic design and UX, my big passion in life is music and songwritting. I am an recording artist, but I also write to other artists.
          My new favorite hobby though is frontend (sorry music) and my goal is to become an webdesigner. So hop along and join me on my journey from a songwriting graphic designer to a frontend developer. Lets Go!
        </p>
        <Footer />
      </div>
      
    )
  );
}

export default About;
