import React from 'react'
import Nav from '../Header/Nav'
import Header from '../Header/Header'
import Faqq from '../Subpages/Faqq'
import Footer from '../Footer/Footer'
import './Style.css'
import { useState } from "react";
import Faqs from './Faqs'
import './Style.css'

const Faq = () => {
  const[faqs,setFaqs] = useState([
    {
       question: "How to setup a page with custom fields?",
       ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
       open: false,
    },

    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },

    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },
    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },
    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },
    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },
    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },
    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },
    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },
    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },
    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },
    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },
    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },
    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    },
    {
      question: "How to setup a page with custom fields?",
      ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
      open: false,
    }
  ])

  const toggleFaq = index => {
    setFaqs(
      faqs.map((faq,i) =>{
        if(i === index){
            faq.open = !faq.open 
        }
        else{
          faq.open = false
        }

        return faq
      })
    )
  }
  return (
    <section className='Faq-section'>
        <div className='Faq-container'>
            <Header />
            <Nav />
            <Faqq />

          <div className='Faq-wrapper'>
            <h1>About Shop</h1>
          </div>
            <div className='faqs'>
                {faqs.map((faq,index) =>( <Faqs faq={faq} index={index} key={index} toggleFaq={toggleFaq}/> ))}
            </div>
            <Footer />
        </div>
    </section>
  )
}

export default Faq