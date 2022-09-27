import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
            <div>
          <div class="container-fluid baner-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5 home-banner-left-section">
              <div class="baner-wrapper" data-aos="fade-up" data-aos-delay="200">
                <h4>FUN : BATTLE RACING : EARNING</h4>
                <h3>Backhoe
                  Kart</h3>
                <p>The racing spirit in the backhoe, the fight for victory, and the freedom in BAHO world.</p>
                <h5>BAHO Tokens Address:</h5>
                <div class="baner-btn">
              <a href="#">Sffd,dljjdf3555sdfsg3232f2fvbjttr3322 
                  <img src="images/union-icon.png" class="img-fluid"  alt="" />
                  F</a></div>
                <img src="images/img-1.png" class="img-fluid" alt="" /> </div>
            </div>
            <div class="mobile-view-imgss"><img src="images/top-banner.png" class="img-fluid" alt="" /></div>
          </div>
        </div>
      </div>
      <div class="container-fluid section-baho-common">
        <div class="container">
          <div class="row">
            <div class="heading-section" data-aos="fade-up" data-aos-delay="200">
              <h3>BAHO CHARACTERS</h3>
              <p>WHICH ONE IS YOUR FAVORITE?</p>
            </div>
            <div class="baho-common-section" data-aos="fade-up" data-aos-delay="200">
              <h3>BAHO COMMON</h3>
              <div class="slick-wrapper-slider">
                <div class="vehicle-detail-banner banner-content clearfix">
                  <div class="banner-slider">
                    <div class="slider slider-nav thumb-image">
                      <div class="thumbnail-image">
                        <div class="thumbImg"> <img src="images/thumbnail-1.png" class="img-fluid" /> </div>
                      </div>
                      <div class="thumbnail-image">
                        <div class="thumbImg"> <img src="images/thumbnail-2.png" class="img-fluid" /> </div>
                      </div>
                      <div class="thumbnail-image">
                        <div class="thumbImg"> <img src="images/thumbnail-3.png" class="img-fluid" /> </div>
                      </div>
                      <div class="thumbnail-image">
                        <div class="thumbImg"> <img src="images/thumbnail-4.png" class="img-fluid" /> </div>
                      </div>
                    </div>
                    <div class="slider slider-for">
                      <div class="slider-banner-image"> <img src="images/slider1.png" class="img-fluid" /> </div>
                      <div class="slider-banner-image"> <img src="images/slider1.png" class="img-fluid" /> </div>
                      <div class="slider-banner-image"> <img src="images/slider1.png" class="img-fluid" /> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid play-mode-section">
        <div class="container">
          <div class="heading-section">
            <h3>PLAY MODE</h3>
          </div>
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="play-mode-content">
                <h3><span>PVE</span> SINGLE PLAYER</h3>
                <p>Have fun completing the competitive missions. Get the best rank to get more rewards.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="play-mode-img" data-aos="fade-up" data-aos-delay="200"><img src="images/img-3.png" class="img-fluid" alt="" /></div>
            </div>
            <div class="Connector-line-img"><img src="images/Connector-line.png" class="img-fluid" alt="" /> </div>
          </div>
          <div class="row align-items-center row2">
            <div class="col-md-6">
              <div class="play-mode-img" data-aos="fade-up" data-aos-delay="300"><img src="images/img-6.png" class="img-fluid" alt="" /></div>
            </div>
            <div class="col-md-6">
              <div class="play-mode-content">
                <h3><span>PVE</span> MULTIPLAYER</h3>
                <p><span>Meet variety of players</span></p>
                <p>Are you ready to compete in the field of speed with tactics, strategies, and your available weapons to stop other fighters and protect your rank of leadership?</p>
              </div>
            </div>
            <div class="Connector-line-img"><img src="images/Connector-line-2.png" class="img-fluid" alt="" /> </div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="play-mode-content">
                <h3><span>TOURNAMENT</span></h3>
                <p>Monthly scoring and ranking contest 30 matches in 1 tournament. Many rewards for high scores 1-200 …ranking Let's test your abilities.</p>
                <div class="baner-btn"><a href="#">What are you ranking this month?</a></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="play-mode-img" data-aos="fade-up" data-aos-delay="400"><img src="images/img-5.png" class="img-fluid" alt="" /></div>
            </div>
          </div>
        </div>
        <div class="right-liner-img"><img src="images/liner-imgs.png" class="img-fluid" alt="" /></div>
      </div>
      <div class="container-fluid bahoverse-section">
        <div class="container">
          <div class="row" data-aos="fade-up" data-aos-delay="300">
            <div class="bahoverse-info"> <img src="images/img-4.png" class="img-fluid"  alt="" />
              <p>World of vehicles and heavy equipment <span>that is ready to build a new world,</span> NFT Landing, NFT Building </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid icon-wrapper-section">
        <div class="container">
          <div class="heading-section" data-aos="fade-up" data-aos-delay="300">
            <h3><img src="images/01.png" class="img-fluid" alt="" />BACKHOEKART TOKEN FEATURE</h3>
            <p>Compete in Monster Backhoe races with various abilities. Tested with multiple skill levels and various attacks.</p>
          </div>
          <div class="row icon-wrapper-info" data-aos="fade-up" data-aos-delay="300">
            <div class="col-md-4">
              <div class="icon-box">
                <div class="icon-img"><img src="images/icon-1.png" class="img-fluid"  alt="" /></div>
                <h3>GACHAPON</h3>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-box">
                <div class="icon-img"><img src="images/icon-2.png" class="img-fluid"  alt="" /></div>
                <h3>GACHAPON</h3>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-box">
                <div class="icon-img"><img src="images/icon-3.png" class="img-fluid"  alt="" /></div>
                <h3>GACHAPON</h3>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-box">
                <div class="icon-img"><img src="images/icon-4.png" class="img-fluid"  alt="" /></div>
                <h3>GACHAPON</h3>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-box">
                <div class="icon-img"><img src="images/icon-5.png" class="img-fluid"  alt="" /></div>
                <h3>GACHAPON</h3>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-box">
                <div class="icon-img"><img src="images/icon-6.png" class="img-fluid"  alt="" /></div>
                <h3>GACHAPON</h3>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-box">
                <div class="icon-img"><img src="images/icon-7.png" class="img-fluid"  alt="" /></div>
                <h3>GACHAPON</h3>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-box">
                <div class="icon-img"><img src="images/icon-8.png" class="img-fluid"  alt="" /></div>
                <h3>GACHAPON</h3>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-box">
                <div class="icon-img"><img src="images/icon-9.png" class="img-fluid"  alt="" /></div>
                <h3>GACHAPON</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid analysis-section">
        <div class="container">
          <div class="heading-section" data-aos="fade-up" data-aos-delay="300">
            <h3>CHART ANALYSIS</h3>
            <p>Tokenomic</p>
          </div>
          <div class="row align-items-center analysis-row">
            <div class="col-md-6">
              <div class="analysis-img" data-aos="fade-up" data-aos-delay="200"><img src="images/Graphic-img.png" class="img-fluid" alt="" /></div>
            </div>
            <div class="col-md-6">
              <div class="analysis-details" data-aos="fade-up" data-aos-delay="400">
                <ul>
                  <li>Search Engine<span>2234</span></li>
                  <li>Direct<span>243</span></li>
                  <li>Email<span>641</span></li>
                  <li>Video Ads<span>1554</span></li>
                  <li>Video Ads<span>1554</span></li>
                  <li>Video Ads<span>1554</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="left-liner-img"><img src="images/liner-imgs-left.png" class="img-fluid" alt="" /></div>
      </div>
      <div class="container-fluid roadmap-section">
        <div class="container">
          <div class="heading-section" data-aos="fade-up" data-aos-delay="200">
            <h3>Roadmap</h3>
            <div class="roadmap-img-top" data-aos="fade-up" data-aos-delay="300"><img src="images/roadmap-img-1.png" class="img-fluid"  alt="" /></div>
          </div>
          <div class="row roadmap-row">
            <div class="col-md-4">
              <div class="roadmap-box" data-aos="fade-up" data-aos-delay="200">
                <h3>Phase 1</h3>
                <ul>
                  <li>Backhoe Kart Design</li>
                  <li>Beginning Backhoe Kart Development</li>
                  <li>Community</li>
                  <li>Tokenomic Design</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="roadmap-box" data-aos="fade-up" data-aos-delay="300">
                <h3>Phase 2</h3>
                <ul>
                  <li>Backhoe Kart Design</li>
                  <li>Beginning Backhoe Kart Development</li>
                  <li>Community</li>
                  <li>Tokenomic Design</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="roadmap-box" data-aos="fade-up" data-aos-delay="400">
                <h3>Phase 3</h3>
                <ul>
                  <li>Backhoe Kart Design</li>
                  <li>Beginning Backhoe Kart Development</li>
                  <li>Community</li>
                  <li>Tokenomic Design</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row roadmap-row2">
            <div class="col-md-6">
              <div class="roadmap-box" data-aos="fade-up" data-aos-delay="500">
                <h3>Phase 4</h3>
                <ul>
                  <li>Backhoe Kart Design</li>
                  <li>Beginning Backhoe Kart Development</li>
                  <li>Community</li>
                  <li>Tokenomic Design</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="roadmap-box" data-aos="fade-up" data-aos-delay="600">
                <h3>Phase 5</h3>
                <ul>
                  <li>Backhoe Kart Design</li>
                  <li>Beginning Backhoe Kart Development</li>
                  <li>Community</li>
                  <li>Tokenomic Design</li>
                </ul>
              </div>
            </div>
            <div class="roadmap-img-bottom" data-aos="fade-up" data-aos-delay="300"><img src="images/roadmap-img-2.png" class="img-fluid"  alt="" /></div>
          </div>
        </div>
      </div>
      </div>
      // <div className="landing">
      //   <div className="dark-overlay landing-inner text-light">
      //     <div className="container">
      //       <div className="row">
      //         <div className="col-md-12 text-center">
      //           <h1 className="display-3 mb-4">Developer Connector</h1>
      //           <p className="lead">
      //             {' '}
      //             Create a developer profile/portfolio, share posts and get help
      //             from other developers
      //           </p>
      //           <hr />
      //           <Link to="/register" className="btn btn-lg btn-info mr-2">
      //             Sign Up
      //           </Link>
      //           <Link to="/login" className="btn btn-lg btn-light">
      //             Login
      //           </Link>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
