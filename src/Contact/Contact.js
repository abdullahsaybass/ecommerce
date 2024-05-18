import React from 'react'
import Nav from '../Header/Nav'
import Header from '../Header/Header'
import Term from '../Subpages/Term'
import Footer from '../Footer/Footer'
import '../Contact/Style.css'

const Contact = () => {
  return (
    <section className='contact-us-section'>
      <div className='contact-us-container'>
        <Header />
        <Nav/>
        <Term />
        <div className='contact-us-wrapper'>
          <h1>terms & conditions</h1>
          {/* 1 GENERAL CONDITIONS */}
          <h2>1. GENERAL CONDITIONS</h2>
          <p>We reserve the right to refuse service to anyone for any reason at any time.</p>
          <p>You understand that your content (not including credit card information), may be transferred 
            unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to
            technical requirements of connecting networks or devices. Credit card information is always encrypted 
            during transfer over networks.</p>
          <p>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of
             the Service, or access to the Service or any contact on the website through which the service is 
             provided, without express written permission by us.</p>
          <p>The headings used in this agreement are included for convenience only and will not limit or otherwise 
            affect these Terms.</p>
          {/* 1 GENERAL CONDITIONS end */}
          {/* 2 ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION */}
          <h2>2 ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h2>
          <p>We are not responsible if information made available on this site is not accurate, complete or current.
             The material on this site is provided for general information only and should not be relied upon or 
             used as the sole basis for making decisions without consulting primary, more accurate, more complete 
             or more timely sources of information. Any reliance on the material on this site is at your own risk.</p>
          <p>This site may contain certain historical information. Historical information, necessarily, is not current
             and is provided for your reference only. We reserve the right to modify the contents of this site at any 
             time, but we have no obligation to update any information on our site. You agree that it is your 
             responsibility to monitor changes to our site.</p>
           {/* 2 ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION end */}

            {/* 3 MODIFICATIONS TO THE SERVICE AND PRICES */}
            <h2>3 MODIFICATIONS TO THE SERVICE AND PRICES</h2>
            <p> Prices for our products are subject to change without notice.</p>
            <p>We reserve the right at any time to modify or discontinue the Service 
              (or any part or content thereof) without notice at any time.</p>
            <p>We shall not be liable to you or to any third-party for any modification, 
              price change, suspension or discontinuance of the Service.</p>
            {/* 3 MODIFICATIONS TO THE SERVICE AND PRICES end*/}

            {/* 4 PRODUCTS OR SERVICES (if applicable) */}
            <h2>4 PRODUCTS OR SERVICES (if applicable)</h2>
            <p>Certain products or services may be available exclusively online through the website. 
              These products or services may have limited quantities and are subject to return or exchange 
              only according to our Return Policy.</p>
            <p>We have made every effort to display as accurately as possible the colors and images of our products 
              that appear at the store. We cannot guarantee that your computer monitor's display of any color will 
              be accurate.</p>
            <p>We reserve the right, but are not obligated, to limit the sales of our products or Services to any 
              person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. 
              We reserve the right to limit the quantities of any products or services that we offer. 
              All descriptions of products or product pricing are subject to change at anytime without notice, 
              at the sole discretion of us. We reserve the right to discontinue any product at any time. 
              Any offer for any product or service made on this site is void where prohibited.</p>
            {/* 4 PRODUCTS OR SERVICES (if applicable) end*/}

        </div>
        <Footer />
      </div>
    </section>
  )
}

export default Contact