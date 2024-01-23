import Hero from "./Hero";

const Home = () => {

    return(
        <>
        <Hero text="Welcome! Search to know about a movie"/>
        {/* <h1>This is a home component</h1> */}
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 pt-4">
                    <p className="lead">
                        Welcome to movie browser website. Let the fun begin by searching your favorite movies
                    </p>

                </div>
            </div>

        </div>

        </>
    )

}

export default Home;