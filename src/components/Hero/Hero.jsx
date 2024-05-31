import "./Hero.css";
function Hero() {
  return (
    <>
      <div className="hero"  id='home'>
        <div className="content">
          <h3>Hey !! Mario still here, But don’t forget that</h3>
          <p>
            At focal X agency, we are working to build somthing different. Here
            you’ll have a group of creative people who specialize in: Branding,
            Digital Marketing, Web/App Development, Ui/Ux Content creation,
            Graphic design, Social media and More........ So you can take a tour
            in our website, OR just Press Start :)
          </p>
        </div>
        <div className="footer">
          <div className="Images">
            <img
              src="https://www.focal-x.com/assets/img/home/fotter.svg"
              className="footer-img"
              alt=""
            />
            <img
              src="https://www.focal-x.com/assets/img/home/gameBoy-min.png"
              className="game"
            />
            <div id="gameImg-sm" href="https://www.focal-x.com/mario" className="gameboy">
            <img src="https://www.focal-x.com/assets/img/home/gamefor-mobile.png" alt=""/>
            </div>
            <img
              src="https://www.focal-x.com/assets/img/home/pressStart.svg"
              className="start"
            />
            <img
              src="https://www.focal-x.com/assets/img/home/pattren.png"
              className="pattren"
            />
          </div>
          <div className="links-footer">
                <ul className="social-hero">
                    <li className="facebook">
                      <a href="https://www.facebook.com/focal.x.agency/" target="_blank"><img src="https://www.focal-x.com/assets/img/icons/facebook.png" /></a>
                    </li>
                    <li className="be">
                      <a href="https://www.behance.net/focal-x-agency" target="_blank"><img src="https://www.focal-x.com/assets/img/icons/behance.png"/></a>
                    </li>
                    <li className="in">
                      <a href="https://www.linkedin.com/company/focal-x-agency" target="_blank"><img src="https://www.focal-x.com/assets/img/icons/linkedin.png"/></a>
                    </li>
                    <li className="instgram">
                      <a href="https://www.Instagram.com/focal.x.agency" target="_blank"><img src="https://www.focal-x.com/assets/img/icons/instgram.png"/></a>
                    </li>
                    <li className="twitter">
                      <a href="https://twitter.com/focal_x_agency" target="_blank"><img src="https://www.focal-x.com/assets/img/icons/twitter.png"/></a>
                    </li>
                </ul>
                <div className="copy-right-hero">
                   <p>&copy; 2023-2024 Focal X agency All Right Reserved</p>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
