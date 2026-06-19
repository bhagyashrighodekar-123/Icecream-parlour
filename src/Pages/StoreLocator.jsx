import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import './StoreLocator.css'

const StoreLocator = () => {
  return (
    <>
    <h1>StoreLocator</h1>

        <div className="container">
            <div className="row">
                <div className="col">
                        <h3>Natural Icecream Parlor</h3>
                        <address>
                            Shop 420; <br />
                            Xion Mall <br />
                            Pimpri Chichwad 
                                <br />
                            411010
                        </address>
                        <p>
                            <MdEmail /> ceo@naturalicecream.com
                        </p>
                        <p>
                            <FaPhoneAlt /> 8989898978
                        </p>
                </div>
                <div className="col">
                    {/* <iframe className='mapStore' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6239862289635!2d73.75057237525438!3d18.590983367019493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2beb5315379ab%3A0x7745e38574812a65!2sWisdom%20Sprouts%20IT%20Training%20Hub%20%7C%20Java%2C%20Python%2C%20MERN%20Full%20Stack%20IT%20Courses!5e0!3m2!1sen!2sin!4v1781517764451!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe className='mapStore' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6149057866164!2d73.74203957497745!3d18.591392382515945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbdefd1552e7%3A0xa3c0fbc9570da5ae!2sXion%20Mall!5e0!3m2!1sen!2sin!4v1781715054626!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div className="row">
                <div className="col">
                        <h3>Natural Icecream Parlor</h3>
                        <address>
                            Shop 420; <br />
                            Amanora Mall <br />
                            Kharadi,Pune.
                                <br />
                            411010
                        </address>
                        <p>
                            <MdEmail /> ceo@naturalicecream.com
                        </p>
                        <p>
                            <FaPhoneAlt /> 8989898988
                        </p>
                </div>
                <div className="col">  
                    <iframe className='mapStore' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2293746715063!2d73.93251687497555!3d18.51853398257464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c112a2e6836d%3A0xdf293a5408bc72bc!2sAmanora%20Mall!5e0!3m2!1sen!2sin!4v1781715611991!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                

            </div>
        </div>
    
    </>
  )
}

export default StoreLocator