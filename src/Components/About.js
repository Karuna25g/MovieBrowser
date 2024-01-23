import Hero from "./Hero";
const About = () => {
  return (
    <>
      <Hero text="About us" />
      {/* Here we are passing the prop (text) to the component */}
      {/* <h1>About us</h1> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 p-5">
            <p className="lead">
              This is a fun page to search for movies and get details about the movie
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
