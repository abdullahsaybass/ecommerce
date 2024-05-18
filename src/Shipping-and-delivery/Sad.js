import React from 'react'
import Nav from '../Header/Nav'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Shad from '../Subpages/Shad'
import '../Shipping-and-delivery/Style.css'

const Sad = () => {
  return (
    <section className='shipping-and-delivery-section'>
        <div className='shipping-and-delivery-container'>
            <Header />
            <Nav />
            <Shad />
            <div className='shipping-and-delivery-wrapper'>

                {/* Shipping & Delivery start */}
                <h1>Shipping & Delivery</h1>
                <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, 
                    unfortunately we can't offer you a refund or exchange.</p>
                <p>To be eligible for a return, your item must be unused and in the same condition 
                    that you received it. It must also be in the original packaging.</p>
                <p>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, 
                    newspapers or magazines cannot be returned. We also do not accept products that are hazardous 
                    materials, or flammable liquids or gases.</p>
                <div>
                    <p>Additional non-returnable items: </p>
                    <p>Gift cards </p>
                    <p>Downloadable software products</p>
                    <p>Some health and personal care items</p>
                </div>
                <p>To complete your return, we require a receipt or proof of purchase.</p>
                <p>Please do not send your purchase back to the manufacturer.</p>
                <div>
                    <p>There are certain situations where only partial refunds are granted (if applicable) </p>
                    <p>Book with obvious signs of use</p>
                    <p>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened</p>
                    <p>Any item not in its original condition, is damaged or missing parts for reasons not due to our error</p>
                    <p>Any item that is returned more than 30 days after delivery</p>
                </div>
                {/* Shipping & Delivery end */}

                {/* Refunds (if applicable) start */}
                <h2>Refunds (if applicable)</h2>
                <div>
                    <p>Once your return is received and inspected, we will send you an email to notify you that we 
                        have received your returned item. We will also notify you of the approval or rejection of 
                        your refund. </p>
                    <p>If you are approved, then your refund will be processed, and a credit will automatically be 
                        applied to your credit card or original method of payment, within a certain amount 
                        of days.</p>
                </div>

                <div>
                    <p>Late or missing refunds (if applicable) </p>
                    <p>If you haven't received a refund yet, first check your bank account again. </p>
                    <p>Then contact your credit card company, it may take some time before your refund is officially posted.</p>
                    <p>Next contact your bank. There is often some processing time before a refund is posted.</p>
                    <p>If you've done all of this and you still have not received your refund yet, please contact us at themesupport@shopify.com.</p>
                </div>

                <div>
                    <p>Sale items (if applicable)</p>
                    <p>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>
                </div>
                {/* Refunds (if applicable) end */}

                {/* Exchanges (if applicable) start */}
                <h2>Exchanges (if applicable)</h2>
                <p>We only replace items if they are defective or damaged. If you need to exchange it for the same 
                    item, send us an email at themesupport@shopify.com and send your item to: 150 Elgin Street, 
                    Ottawa ON K2P1L4, Canada.</p>
                {/* Exchanges (if applicable) end */}

                {/* Gifts start */}
                <h2>Gifts</h2>
                <p>If the item was marked as a gift when purchased and shipped directly to you, 
                    you'll receive a gift credit for the value of your return. Once the returned item is received, 
                    a gift certificate will be mailed to you.</p>
                <p>If the item wasn't marked as a gift when purchased, or the gift giver had the order shipped to 
                    themselves to give to you later, we will send a refund to the gift giver and he will find out 
                    about your return.</p>
                {/* Gifts end */}

                {/* Shipping start */}
                <h2>Shipping</h2>
                <p>To return your product, you should mail your product to: 150 Elgin Street, Ottawa ON K2P1L4, Canada</p>
                <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping 
                    costs are non-refundable. If you receive a refund, the cost of return shipping will be 
                    deducted from your refund.</p>
                <p>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p>
                <p>If you are shipping an item over $75, you should consider using a trackable shipping service or 
                    purchasing shipping insurance. We don't guarantee that we will receive your returned item.</p>
            </div>
            <Footer />
        </div>
    </section>
  )
}

export default Sad