import './CallToAction.css';

const CallToAction = () => {
    return (
        <section className="text-center py-5 px-3 mt-5" style={{ backgroundColor: '#000000' }}>
            <div className="container max-width-lg">
                <h2 className="display-6 fw-bold text-white mb-3">Ready to Grow with Aswenna?</h2>
                <p className="lead text-white mb-4">
                    Sign up today and start your journey towards a more productive and sustainable farming future.
                </p>

                <div className="d-flex justify-content-center">
                    <form className="d-flex align-items-center w-100 position-relative" style={{ maxWidth: '500px' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="form-control email-input-placeholder"
                            style={{
                                backgroundColor: '#2E3829',
                                border: '1px solid #2E3829',
                                color: '#b8c7b8',
                                paddingRight: '130px',
                                borderRadius: '8px',
                                padding: '16px 20px',
                                fontSize: '1rem'
                            }}
                        />
                        <button
                            type="submit"
                            className="btn fw-bold position-absolute"
                            style={{
                                backgroundColor: '#7CFC00',
                                color: '#000000',
                                right: '6px',
                                padding: '12px 28px',
                                borderRadius: '6px',
                                border: 'none',
                                fontSize: '1rem'
                            }}
                        >
                            Join Us
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;