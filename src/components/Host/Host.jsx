import './Host.css'
function Host() {
    return(
        <>
        <div className='Host' id='host'>
            <h3 className="title">Host pricing</h3>
            <div className="cards-host">
                <div className='basic-card card-host'>
                    <div className='header-card'>
                        <h5 className='host-type'>Basic</h5>
                        <p>For very small businesses and freelancer.</p>
                    </div>
                    <div className="card-body">
                        <div className='price-card'>
                            <p>$2.5/mo</p>
                        </div>
                        <ul className='Benefits-list'>
                            <li>Disk space: 500 M.B</li>
                            <li>Bandwidth: 500 G.B</li>
                            <li>SubDomains: Unlimited</li>
                            <li>Parked Domains: Unlimited</li>
                            <li>E-mail Accounts: Unlimited</li>
                            <li>Cpanel (control panel): Yes</li>
                            <li>Money Back Guarantee: 14 Days</li>
                        </ul>
                        <button className='btn-subscribe'>You will have 1 gift</button>
                    </div>
                </div>
                <div className='pro-card card-host'>
                    <div className='header-card'>
                        <h5 className='host-type'>Pro</h5>
                        <p>for Individuals that need sharing vlogs or need huge portfolio.</p>
                    </div>
                    <div className="card-body">
                        <div className='price-card'>
                            <p>$2.5/mo</p>
                        </div>
                        <ul className='Benefits-list'>
                            <li>Disk space: 3000 M.B</li>
                            <li>Bandwidth: 3 TERA</li>
                            <li>SubDomains: Unlimited</li>
                            <li>Parked Domains: Unlimited</li>
                            <li>E-mail Accounts: Unlimited</li>
                            <li>Cpanel (control panel): Yes</li>
                            <li>Money Back Guarantee: 14 Days</li>
                        </ul>
                        <button className='btn-subscribe'>1 Gift per/mo for year</button>
                    </div>
                </div>
                <div className='business-card card-host'>
                    <div className='header-card'>
                        <h5 className='host-type'>Business</h5>
                        <p>for Team that need sharing and reporting.</p>
                    </div>
                    <div className="card-body">
                        <div className='price-card'>
                            <p>$2.5/mo</p>
                        </div>
                        <ul className='Benefits-list'>
                            <li>Disk space: 5000 M.B</li>
                            <li>Bandwidth: 5 TERA</li>
                            <li>SubDomains: Unlimited</li>
                            <li>Parked Domains: Unlimited</li>
                            <li>E-mail Accounts: Unlimited</li>
                            <li>Cpanel (control panel): Yes</li>
                            <li>Money Back Guarantee: 14 Days</li>
                        </ul>
                        <button className='btn-subscribe'>3 Gifts per/mo for year</button>
                    </div>
                </div>
                <div className='enterprice-card card-host'>
                    <div className='header-card'>
                        <h5 className='host-type'>Enterprise</h5>
                        <p>for large companies that need admins & security.</p>
                    </div>
                    <div className="card-body">
                        <div className='price-card'>
                            <p>$2.5/mo</p>
                        </div>
                        <ul className='Benefits-list'>
                            <li>Disk space: 10000 M.B</li>
                            <li>Bandwidth: 10 TERA</li>
                            <li>SubDomains: Unlimited</li>
                            <li>Parked Domains: Unlimited</li>
                            <li>E-mail Accounts: Unlimited</li>
                            <li>Cpanel (control panel): Yes</li>
                            <li>Money Back Guarantee: 14 Days</li>
                        </ul>
                        <button className='btn-subscribe'>Just Call Us</button>
                    </div>
                </div>
            </div>
            <div className='footer-host'>
                <p className='main-pargraph'>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.</p>
                <div className='text-host'>
                    <p>Go Online, choose your plan and Contact us on:</p>
                    <p>contact@focal-x.com </p>
                    <p>|</p>
                    <p> +963 935 033 139</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Host 