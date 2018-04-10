import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import PropsLists from '../components/PropsLists'
import Features from '../components/Features'
import MediaLists from '../components/MediaLists'
import SlideItems from '../components/Slider/SlideItems'
import Footer from '../components/Footer'
import Link from 'gatsby-link'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../static/assets/css/fonts/fonts.css'
import './index.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Art Tracks"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header/>
    <section className="hero-section">
      <div className="hero">
        <div className="content">
          <h1>Turn your audio into video.</h1>
          <p>Quickly and easily generate video versions of your sound recordings to share on video networks, social media, and mobile.</p>
          <Link to="javascript:;" className="btn-started"><span>Get Started</span></Link>
        </div>
      </div>
    </section>
    <section className="integrations">
      <div className="social-lists">
        <ul>
          <li><p>Cool Integrations:</p></li>
          <li><Link to="javascript;;"><img src="../../assets/image/homepage@2x/youtube.svg"/></Link></li>
          <li><Link to="javascript;;"><img src="../../assets/image/homepage@2x/soundcloud.svg"/></Link></li>
          <li><Link to="javascript;;"><img src="../../assets/image/homepage@2x/facebook.svg"/></Link></li>
          <li><Link to="javascript;;"><img src="../../assets/image/homepage@2x/instagram.svg"/></Link></li> 
          <li><Link to="javascript;;"><img src="../../assets/image/homepage@2x/google.svg"/></Link></li> 
        </ul>
      </div>
    </section>
    <section className="props">
      <div className="container">
        <PropsLists block='first'/>
      </div>
    </section>
    <section className="why-invisible">
      <div className="container text-center">
        <div className="row">
          <h1>Why? You’re invisible.</h1>
          <p>Today’s popular platforms where people hang out focus on visual content. Your sounds are invisible. To attract people and get attention you need to be visual or get lost in the sauce.</p>
        </div>  
      </div>
    </section>
    <section className="how-it-works">
      <div className="container">
        <div className="row content text-center">
          <h6>how it works</h6>
          <h2>It's simple, really</h2>
          <p>Essentially, we sync your sound recording with any image, photo, or artwork you choose and package it as a stream-friendly video.</p>
        </div>
      </div>
    </section>
    <section className="step-items">
      <div className="container">
        <PropsLists block='second'/>
      </div>
    </section>
    <section className="endless">
      <div className="container">
        <div className="row text-center">
          <h1>Endless possibilties.</h1>
          <p>Now that your audio can wear many faces, use your visual canvas to help tell better stories and assist the listener’s understanding of your sounds.</p>
        </div>
      </div>  
    </section>
    <section className="see-action">
      <div className="row">
        <div className="col-md-7">
          <iframe width="547" height="315" src="//www.youtube.com/embed/DZfCPEn6L6g?ecver=1"></iframe>
        </div>
        <div className="col-md-5">
          <div className="content">
            <h6>audio to video</h6>
            <h2>See it in action</h2>
            <p>We’re on a mission to cure the most complex chronic diseases. Founded by experienced scientists, Virta develops and delivers clinically proven, individualized therapies to restore metabolic health in chronic disease patients.</p>
            <Link to="javascipt:;"><span className="play-icon"></span><span>watch demo</span></Link>
          </div>
        </div>
      </div>
    </section>
    <section className="new-rules">
      <div className="container">
        <div className="head-title text-center">
          <h1>New rules. New tools.</h1>
          <p>We offer a collection of simple tools to help music artists and other audio content creators quickly and affordably create video content.</p>
        </div>
        <div className="content">
          <Features />
        </div>
      </div>
    </section>
    <section className="see-what">
      <div className="container head-title text-center">
        <div className="row">
          <div className="wrap">
            
          </div>
        </div>
      </div>
      <MediaLists />
    </section>
    <section className="back-forth">
      <div className="popular">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="content">
                <h6>STUFF</h6>
                <h2>Popular shapes</h2>
                <p>Quickly and easily generate video versions of your sound recordings to share on video networks, social media, and mobile.</p>
              </div>
            </div>
            <div className="col-md-7">
              <img src="../../assets/image/homepage@2x/popular-shapes.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="publish">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="easy-publish"><img src="../../assets/image/homepage@2x/easy-to-publish.svg" /></div>
            </div>
            <div className="col-md-5">
              <div className="content">
                <h6>YOUR CONTENT</h6>
                <h2>Easy to publish</h2>
                <p>Quickly and easily generate video versions of your sound recordings to share on video networks, social media, and mobile.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hd-mobile">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="content">
                <h6>VIDEOS</h6>
                <h2>HD & mobile-ready</h2>
                <p>Quickly and easily generate video versions of your sound recordings to share on video networks, social media, and mobile.</p>
              </div>
            </div>
            <div className="col-md-7">
              <img src="../../assets/image/homepage@2x/hd-ready.svg" />
            </div>
          </div>
        </div>
      </div>  
    </section>
    <section className="started">
      <div className="container">
        <div className="content text-center">
          <h1>Get Started</h1>
          <p>Sign up to test-drive our art track video creation platform and automate your audio visual creations before everyone else.</p>
          <Link to="javascipt:;"><span>Create Account</span></Link>
        </div>
      </div>
    </section>
    <section className="expert-slides">
      <div className="container">
        <div className="row">
          <SlideItems />
        </div>
      </div>
    </section>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
