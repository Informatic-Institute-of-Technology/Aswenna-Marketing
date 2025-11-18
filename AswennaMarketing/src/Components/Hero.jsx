
const Hero = () => {
    return (
        <div className="hero min-vh-100 d-flex align-items-center justify-content-center bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12 text-center">
                        <h1 className="display-4 fw-bold text-white">
                            Future with Aswenna
                        </h1>
                        <p className="lead text-white-50">
                            Aswenna is a leading provider of digital marketing solutions for small and medium-sized businesses.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a href="#" className="btn btn-primary btn-lg px-4 me-sm-3">
                                Get Started
                            </a>
                            <a href="#" className="btn btn-outline-light btn-lg px-4">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12 col-12 text-center">
                        <img src="https://via.placeholder.com/500x500" className="img-fluid rounded-start" alt="hero" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero