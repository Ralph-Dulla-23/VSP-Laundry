import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation("common");

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

          <h1>{t('app.banner.title')}</h1>
          <p>
          {t('app.banner.text')}
          </p>

        </div>

        <Wave1 />

      </div>

      <div className="content2">

        <div className="aboutContainer">

          <div className='aboutLeft'>

            <h1>About</h1>

            <p className="m-2">
            {t('app.about.text')}
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
              {t('app.services.1.text')}
              </p>
            </Card>

            <Card title="Rush Laundry" footer={footer2} header={header2} className="serviceCard">
              <p className="m-0">
              {t('app.services.2.text')}
              </p>
            </Card>

            <Card title="Dry Clean" footer={footer3} header={header3} className="serviceCard">
              <p className="m-0">
              {t('app.services.3.text')}
              </p>
            </Card>

            <Card title="Special Laundry" footer={footer4} header={header4} className="serviceCard">
              <p className="m-0">
              {t('app.services.4.text')}
              </p>
            </Card>

          </div>

        </div>

        <Wave2 />
      </div>



      <div className="content3">

        <div className="faq">

          <h1>FAQs</h1>

          <Panel className='faqPanel' header={t('app.faq.1.question')} style={{ fontSize: '1.21rem' }} toggleable collapsed='false'>
            <p className="m-1">
            {t('app.faq.1.answer')}
            </p>
          </Panel>

          <br />

          <Panel className='faqPanel' header={t('app.faq.2.question')} style={{ fontSize: '1.21rem' }} toggleable collapsed='false'>
            <p className="m-1">

              {t('app.faq.2.answer.1')}
              <br />
              <br />
              {t('app.faq.2.answer.2')}
              <br />
              <br />
              {t('app.faq.2.answer.3')}
              <br />
              <br />
              {t('app.faq.2.answer.4')}
              <br />
              <br />
              {t('app.faq.2.answer.5')}
            </p>
          </Panel>

          <br />

          <Panel className='faqPanel' header={t('app.faq.3.question')} style={{ fontSize: '1.21rem' }} toggleable collapsed='false'>
            <p className="m-1">
            {t('app.faq.3.answer')}
            </p>
          </Panel>

          <br />

          <Panel className='faqPanel' header={t('app.faq.4.question')} style={{ fontSize: '1.21rem' }} toggleable collapsed='false'>
            <p className="m-1">
            {t('app.faq.4.answer')}
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
