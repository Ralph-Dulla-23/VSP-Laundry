import React, { useState } from "react";

import BasicServe from './assets/images/BasicServices.jpg'
import Rush from './assets/images/RushLaundry.jpg'
import DryClean from './assets/images/DryClean.jpeg'
import Special from './assets/images/SpecialLaundry.jpg'

import NavBar from './components/NavBar';
import MessageFab from './components/MessageFab';

import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

import Wave1 from './components/waves/Wave1';
import Wave2 from './components/waves/Wave2';
import Wave3 from './components/waves/Wave3';
import AboutRight from './components/AboutRight';

function App() {

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const header1 = (
    <img alt="Card" src={BasicServe} style={{ width: '100%', height: '8rem' }} />
  );
  const footer1 = (
    <>
      <Button label="Show More" onClick={() => setVisible1(true)} />
      <Dialog header="Basic Services" visible={visible1} style={{ width: '50vw' }} draggable={false} onHide={() => setVisible1(false)}>
        <p className="scard1">Wash'n Dry Fold</p>
        <p className="scard1">Wash'n Dry and Press</p>
        <p className="scard1">Washin Dry and Press with Hanger</p>
        <p className="scard1">Handwash-Dry-Fold</p>
        <p className="scard1">Handwash-Dry-Press</p>
        <p className="scard1">Taekwondo Uniform White Color</p>
        <p className="scard1">Blanckets/ToweIs/Pillowcase/</p>
        <p className="scard1">Seatcover / Linens / Bedsheet</p>
        <p className="scard1">Curtain Baga / Car Seat Cover</p>
        <p className="scard1">Curtain Handwash</p>
        <p className="scard1">Table Clothe Handwash</p>
        <p className="scard1">Children, infant clothe regular wash</p>
        <p className="scard1">Comforters min- of 3 kilos</p>
      </Dialog>
    </>
  );

  const header2 = (
    <img alt="Card" src={Rush} style={{ width: '100%', height: '8rem' }} />
  );
  const footer2 = (
    <>
      <Button label="Show More" onClick={() => setVisible2(true)} />
      <Dialog header="Rush Laundry" visible={visible2} style={{ width: '50vw' }} draggable={false} onHide={() => setVisible2(false)}>
        <p className="scard1">Wash'n Dry Fold</p>
        <p className="scard1">Wash'n Dry and Press</p>
      </Dialog>
    </>
  );

  const header3 = (
    <img alt="Card" src={DryClean} style={{ width: '100%', height: '8rem' }} />
  );
  const footer3 = (
    <>
      <Button label="Show More" onClick={() => setVisible3(true)} />
      <Dialog header="Dry Clean" visible={visible3} style={{ width: '50vw' }} draggable={false} onHide={() => setVisible3(false)}>
        <p className="scard3">Polo/ Barong Long Sleeves</p>
        <p className="scard3">Suit Jacket (w/lining)</p>
        <p className="scard3">Stacks/Pants</p>
        <p className="scard3">Trench Coat / Americana</p>
        <p className="scard3">Dress</p>
        <p className="scard3">Gown (Ordinary)</p>
        <p className="scard3">Long Down (w/beadwork)</p>
        <p className="scard3">Wedding Gown</p>
        <p className="scard3">Wedding Gown (w/trail beaded)</p>
      </Dialog>
    </>
  );

  const header4 = (
    <img alt="Card" src={Special} style={{ width: '100%', height: '8rem' }} />
  );
  const footer4 = (
    <>
      <Button label="Show More" onClick={() => setVisible4(true)} />
      <Dialog header="Special Laundry" visible={visible4} style={{ width: '70vw' }} draggable={false} onHide={() => setVisible4(false)}>
        <p className="scard4">Back Pack</p>
        <p className="scard4">Sleeping Bag</p>
        <p className="scard4">Shoes Pair</p>
        <p className="scard4">Pillow (Small)</p>
        <p className="scard4">Pillow (Medium)</p>
        <p className="scard4">Pillow (Large)</p>
        <p className="scard4">Stuffed Toy (Small)</p>
        <p className="scard4">Stuffed Toy (Medium)</p>
        <p className="scard4">Stuffed Toy (Large)</p>
        <p className="scard4">Stuffed Toy (X-Large)</p>
      </Dialog>
      </>
      );


  return (

    <>

<NavBar />

<MessageFab />

<div className="content" style={{ marginTop: '2.9em' }}>

  <div className="bannerCard">
  
    <h1>Wash Your Stress Away!</h1>
    <p>
      Wash your stress away, one load at a time,
      because every laundry day is a fresh start.
    </p>

  </div>

  <Wave1 />

</div>

<div className="content2">

  <div className="aboutContainer">

    <div className='aboutLeft'>

      <h1>About</h1>

      <p className="m-2">
        VSP Laundry Shop was founded in 2012 by a group of laundry enthusiasts who shared a
        common vision: to provide a comprehensive and customer-centric laundry experience.
        Their passion for laundry stemmed from the belief that doing laundry should be easy, efficient,
        and accessible to everyone. With that aspiration, VSP Laundry Shop was born.
      </p>

    </div>

    <AboutRight />

  </div>



</div>

<div className="content4">
<div className="serviceWrap">

<h1 className='stitle'>Services</h1>

<div className="Services">

<Card title="Basic Services" footer={footer1} header={header1} className="serviceCard">
<p className="m-0">
Embrace the simplicity of pristine laundry care with our basic services at VSP Laundry Shop. Our advanced washing and drying technologies, coupled with skilled hands, breathe new 
life into your everyday garments. 
</p>
</Card>

<Card title="Rush Laundry" footer={footer2} header={header2} className="serviceCard">
<p className="m-0">
Life moves fast, and so do we! Our Rush Laundry service is designed for those moments when time is of the essence. Drop off your laundry, and we'll prioritize it, ensuring a swift and thorough turnaround.
 
</p>
</Card>

<Card title="Dry Clean" footer={footer3} header={header3} className="serviceCard">
<p className="m-0">
Elevate your wardrobe with our professional dry cleaning services. Delicate fabrics, intricate designs, and special garments require special care, and that's exactly what we offer. 
Our dry cleaning process is tailored to preserve the integrity of your clothes.
</p>
</Card>

<Card title="Special Laundry" footer={footer4} header={header4} className="serviceCard">
<p className="m-0">
Your unique items deserve tailored care. Our Special Laundry service is crafted to handle specific needs such as linens, blankets, and other oversized or delicate items. 

</p>
</Card>

</div>

</div>

<Wave2 />
</div>



<div className="content3">

  <div className="faq">

    <h1>FAQs</h1>

    <Panel className='faqPanel' header="What are the services you offer?" style={{fontSize: '1.21rem'}} toggleable collapsed='false'>
      <p className="m-1">
      At VSP Laundry Shop, we offer comprehensive laundry solutions, including basic services for everyday wear, 
      expedited Rush Laundry, professional Dry Cleaning for delicate items, and specialized care with our Special Laundry service.
      </p>
    </Panel>

    <br />

    <Panel className='faqPanel' header="What kind of items do you cater for washing?"  style={{fontSize: '1.21rem'}} toggleable collapsed='false'>
      <p className="m-1">
        

Basic Services:
From everyday essentials like Wash'n Dry Fold to specialized care for Taekwondo Uniforms, Blankets, and Children's Clothing, our Basic Services cover all your regular laundry needs.
<br />
<br />
Rush Laundry:
Need it in a hurry? Our Rush Laundry service prioritizes quick turnaround for Wash'n Dry Fold, Press, and more, ensuring your laundry is ready when you need it.
<br />
<br />
Dry Clean:
For delicate and formal wear, trust our Dry Cleaning service. From Polo Shirts to Wedding Gowns, we provide meticulous care, leaving your garments crisp and well-maintained.
<br />
<br />
Special Laundry:
Our Special Laundry service caters to unique items such as Backpacks, Shoes, Pillows, and Stuffed Toys, ensuring they receive the specialized attention they deserve.
<br />
<br />
At VSP Laundry Shop, we offer a tailored approach to keep all your items looking their best.
      </p>
    </Panel>

    <br />

    <Panel className='faqPanel' header="What are your opening hours?" style={{fontSize: '1.21rem'}} toggleable collapsed='false'>
      <p className="m-1">
        7am - 6pm, Monday to Sunday
      </p>
    </Panel>

    <br />

    <Panel className='faqPanel' header="How many days will I receive my items back?"  style={{fontSize: '1.21rem'}} toggleable collapsed='false'>
      <p className="m-1">
      At VSP Laundry Shop, we understand the importance of a quick and reliable laundry service. With our commitment to efficiency, you can expect to have your freshly cleaned and perfectly pressed items back in your hands within just three days. Our streamlined processes, advanced equipment, and dedicated team ensure a swift turnaround without compromising on the quality of our services. Experience the convenience of prompt and professional laundry care, 
      where we prioritize your time and deliver your items back to you, freshly laundered and ready to wear, within a speedy three-day window.
      </p>
    </Panel>

  </div>

  <Wave3 />

</div>

<div className="footnote">
  <h1>Vsp Laundry Shop</h1>
  <h2>Quezon Street, Panabo City, Davao Region, 8105</h2>
  <h2>Contact Number na wala ko kabalo</h2>
</div>

</>
)
}

export default App
