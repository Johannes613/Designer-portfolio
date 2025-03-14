import React from 'react'
import './About.css'
import aboutImg from '../../img/about-us.png'
import Button from 'react-bootstrap/Button';


export default function About() {
  return (
    <div id='about' className='about'>
        <div className="container-fluid px-5 ">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img src={aboutImg} className='w-100' alt="" />
                </div>
                <div className="col-lg-6 g-5 d-flex flex-column gap-4 ps-5">
                    <h1 className='about-head'>let me <span className='d-block'>introduce </span> <span className='d-block'>my self</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores corporis amet nulla nisi. Magnam tenetur reiciendis eligendi distinctio neque?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt doloremque aspernatur deleniti. Autem ad iusto impedit doloribus inventore aperiam est iure mollitia voluptatum, nam, quisquam veritatis labore asperiores eveniet?</p>
                    <Button
                  variant="primary"
                  className="adv-button download text-uppercase px-4 py-2 text-uppercase"
                >
                  Download CV
                </Button>
                </div>
            </div>
        </div>
    </div>
  )
}
