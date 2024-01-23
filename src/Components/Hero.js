const Hero = ({text, backdrop}) => {

    return(
        <header className="bg-info-subtle text-dark p-5 hero-container">
            <h3 className="hero-text text-secondary">{text}</h3>
            {backdrop &&
          <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
        }
        {/* && operator makes sure that above div is executed only when backdrop has some value. if backdrop has null value then div is not executed */}
        </header>
    )
}

export default Hero;