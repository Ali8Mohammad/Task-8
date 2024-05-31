import './Footer.css'
function Footer() {
    return(
        <>
        <footer className='main-footer' id='footer'>
            <div className='footer-contact col'>
                <img className='footer-logo' src="../../../public/Img/logo.png" alt="" />
                <span>. agency</span>
                <h6>Head Office</h6>
                <a href="">Syria - Latakia - grh2+hjx35.5199518</a>
            </div>
            <div className='col'>
                <h6>Sales</h6>
                <p>contact@focal-x.com</p>
                <p className='numper-p'>+963 953 666 056</p>
                <h6>Public Relations</h6>
                <p>pr@focal-x.com</p>
                <p>+963 953 666 052</p>
            </div>
            <div className='col col-2'>
                <h6>Customer Support</h6>
                <p>info@focal-x.com</p>
                <p className='numper-p'>+963 953 666 054</p>
                <h6>Human Resources</h6>
                <p>hr@focal-x.com</p>
            </div>
            <div className='col col-2'>
                <h6>Useful Links</h6>
                <ul className='useful-links'>
                    <li><a href="">Clients & Partners</a></li>
                    <li><a href="">Check Certificat ID</a></li>
                    <li><a href="">Check for employee</a></li>
                    <li><a href="">Our Brand ID guidlines</a></li>
                </ul>
            </div>
            <div className='col'>
                <h6>Keep In Touch</h6>
                <ul className='social-main-footer'>
                    <li><a href="https://www.facebook.com/focal.x.agency/"><img src="https://www.focal-x.com/assets/img/iconFotter/facebook.png" alt=""/></a></li>
                    <li><a href="https://www.behance.net/focal-x-agency"><img src="https://www.focal-x.com/assets/img/iconFotter/behance.png" alt=""/></a></li>
                    <li><a href="https://www.linkedin.com/company/focal-x-agency"><img src="https://www.focal-x.com/assets/img/iconFotter/linkdin.png" alt=""/></a></li>
                    <li><a href="Www.Instagram.com/focal.x.agency"><img src="https://www.focal-x.com/assets/img/iconFotter/instgram.png" alt=""/></a></li>
                    <li><a href="https://twitter.com/focal_x_agency"><img src="https://www.focal-x.com/assets/img/iconFotter/twitter.png" alt=""/></a></li>
                </ul>   
            </div>
            <div className='last-footer'>
                <p className='copy-right'>&copy; 2021 - 2024 focal X L.L.C All Right Reserved</p>
                <span></span>
            </div>
        </footer>
        </>
    )
}
export default Footer