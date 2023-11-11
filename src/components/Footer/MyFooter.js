import React from 'react'
import './footer.css'
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoYoutube } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-12 mx-5 mt-4">
              <a href="#"><BiLogoInstagramAlt className='ion-icon'/></a>
              <a href="#"><BsFacebook className='ion-icon'/></a>
              <a href="#"><BiLogoTwitter className='ion-icon'/></a>
              <a href="#"><BiLogoYoutube className='ion-icon'/></a>
            </div>
          </div>
          <div class="row ftrrow">
            <div class="col-xl-3 col-md-6 col-6 mt-2">
              <a href="#"><p>Privacy</p></a>
              <a href="#"><p>Contact Us</p></a>
            </div>
            <div class="col-xl-3 col-md-6 col-6">
              <a href="#"><p>Audio Description</p></a>
              <a href="#"><p>Invenstor</p></a>
              <a href="#"><p>Legal Notices</p></a>
            </div>
            <div class="col-xl-3 col-md-6 col-6">
              <a href="#"><p>Help Center</p></a>
              <a href="#"><p>Jobs</p></a>
              <a href="#"><p>Codice Promotional</p></a>
            </div>
            <div class="col-xl-3 col-md-6 col-6">
              <a href="#"><p>Gift Cards</p></a>
              <a href="#"><p>Terms of Use</p></a>
              <a href="#"><p>Corporats Information</p></a>
            </div>
          </div>
          <div class="row mt-3 mb-2">
            <div class="col-12 mx-5">
              <button class="ftrbtn">Service code</button>
            </div>
          </div>
          <div class="row cpy">
            <div class="col-12 mx-5 mt-1">
              <p>@ 1997-2023 L'Oasi del Giocatore xxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MyFooter