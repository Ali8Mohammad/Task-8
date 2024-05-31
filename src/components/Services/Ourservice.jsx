import './ourservice.css'
function Ourservice() {
    return (
        <>
        <section className='first-section' id='services'>
        <div className='services'>
        <h3 className="title">Our Service</h3>
            <div className="cards-ser">
                <div className="branding">
                        <img src="https://www.focal-x.com/assets/img/ourservices/brandingpattren.png" alt="" className="pattren-service" />
                    <div className='branding-content'>
                        <h4 className='title-card'>Branding</h4>
                        <p className='card-pargraph'>
                            The brand is hope, it is also the source of inspiration for everything you do when you deal with your 
                            customers and that is important and emotional thing. Your Brand and Visual identity represents an intrinsic
                            Value to your company.
                        </p>
                        <h4 className='bold-text-card'>In focal X agency, we provide:</h4>
                            <ul>
                                <li>Visual identity design</li>
                                <li>Define brand identity</li>
                                <li>Define brand personality</li>
                                <li>Building Your brand strategy</li>
                                <li>Market research and competitors study</li>
                            </ul>
                        <h4 className='bold-text-card'>We walk from A to Z.</h4>
                        <img className='brand-card' src="https://www.focal-x.com/assets/img/ourservices/brandingOrange.png" alt="" />
                        <img className='for-mobile' src="https://www.focal-x.com/assets/img/ourservices/forMobile/brandingx.svg"/>
                    </div>
                </div>
                <div className="Marketing">
                    <img src="https://www.focal-x.com/assets/img/ourservices/markrtingpattren.png" className="pattren-service" alt="" />
                <div className='marketing-content'>
                    <h4 className='title-card marketing'>Marketing</h4>
                    <p className='card-pargraph'>
                       Talk to you customers and tell them about <strong>you and your company&#65040;s story</strong> through us the way you want.
                       let us plan the content that will bring your audience closer to you.
                    </p>
                    <h4 className='bold-text-card'>In our marketing agency, we provide:</h4>
                        <ul>
                            <li>E-mail marketing.</li>
                            <li>Affiliate marketing.</li>
                            <li>Influencer marketing.</li>
                            <li>Copy & content writing.</li>
                            <li>Market research and analysis.</li>
                            <li>App store optimization (ASO).</li>
                            <li>Search engine marketing (SEM).</li>
                            <li>Search engine optimization (SEO).</li>
                            <li>Social media marketing & campaigns.</li>
                        </ul>
                        <img className='brand-card' src="https://www.focal-x.com/assets/img/ourservices/markiting.png" alt="" />
                        <img className='for-mobile' src="https://www.focal-x.com/assets/img/ourservices/forMobile/marketingx.svg"/>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}
export default Ourservice