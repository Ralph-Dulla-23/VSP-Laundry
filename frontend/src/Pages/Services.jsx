import React, { useState } from "react";

import NavBar from '../components/NavBar';
import Wave1 from '../components/waves/Wave1'

import BasicServe from '../assets/images/BasicServices.jpg'
import Rush from '../assets/images/RushLaundry.jpg'
import DryClean from '../assets/images/DryClean.jpeg'
import Special from '../assets/images/SpecialLaundry.jpg'

import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function Services() {

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
      <Dialog header="Special Laundry" visible={visible4} style={{ width: '50vw' }} draggable={false} onHide={() => setVisible4(false)}>
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

      <div className="content" style={{ marginTop: '2.9em' }}>

        <div className="serviceWrap">

          <h1 className='stitle'>Services</h1>

          <div className="Services">

            <Card title="Basic Services" footer={footer1} header={header1} className="serviceCard">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
              </p>
            </Card>

            <Card title="Rush Laundry" footer={footer2} header={header2} className="serviceCard">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
              </p>
            </Card>

            <Card title="Dry Clean" footer={footer3} header={header3} className="serviceCard">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
              </p>
            </Card>

            <Card title="Special Laundry" footer={footer4} header={header4} className="serviceCard">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
              </p>
            </Card>

          </div>

        </div>

        <Wave1/>

      </div>
    </>
  )
}
export default Services