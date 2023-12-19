import React, { useState, useEffect } from 'react'

import NavBarAdmin from '../../components/NavBarAdmin'
import AddOrderForm from '../../components/AddOrderForm';
import OrderDesc from '../../components/OrderDesc';

import { DataTable } from 'primereact/datatable';
import { Tag } from 'primereact/tag';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';


function Dashboard() {

  const [job, setJob] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const header = (

    <div className="flex flex-wrap align-items-center justify-content-between gap-2" style={{ minWidth: '50rem', padding: '0.2rem 1.1rem' }}>

      <span className="m-2" style={{ margin: 'auto 0rem', fontSize: '1.9rem' }}>Job Orders</span>
      <Button style={{ float: 'right' }} label='Add Order' onClick={() => setVisible(true)} />

      <Dialog header='Add Order' visible={visible} style={{ width: '50vw' }} draggable={false} onHide={() => setVisible(false)}>
        <AddOrderForm />
      </Dialog>

    </div>

  );


  useEffect(() => {
  DashboardData.getProductsMini().then(data => setJob(data));
  }, []);

  const statusBodyTemplate = (job) => {
    return <Tag value={job.Progress} severity={getSeverity(job)} style={{ fontSize: '1rem', fontWeight: '100', width: '4.5em' }}></Tag>;
  };

  const onRowSelect = (event) => {
    <Dialog header='Job Order' visible={visible2} style={{ width: '50vw' }} draggable={false} onHide={() => setVisible2(false)}>
      <p>
        {event.data.ID}
      </p>
    </Dialog>
  };

  const getSeverity = (job) => {

    switch (job.Status) {
      case 'Claimed':
        return 'success';

      case 'Ready':
        return 'info';

      case 'Drying':
        return 'help';

      case 'Washing':
        return 'primary';

      case 'Idle':
        return 'warning';

      case 'Lost':
        return 'danger';

      default:
        return null;
    }
  };

  return (

    <>

      <NavBarAdmin />

      <div className='content1' style={{ marginTop: '2.9rem' }}>

        <div className="tableCard">

          <DataTable value={job} paginator rows={5} selectionMode="single" header={header} stripedRows sortMode="multiple"
            selection={selectedProduct} onRowSelect={onRowSelect} onSelectionChange={(e) => setSelectedProduct(e.value)} 
            tableStyle={{ height: '20rem' }}>

            <Column field="Customer" header="ID" alignHeader={'center'} style={{ textAlign: 'center' }}></Column>
            <Column field="Service" header="Service" alignHeader={'center'} style={{ textAlign: 'center' }}></Column>
            <Column field="Datarecieved" header="Date Received" alignHeader={'center'} style={{ textAlign: 'center' }}></Column>
            <Column field="Progress" header="Status" body={statusBodyTemplate} alignHeader={'center'} style={{ textAlign: 'center' }}></Column>

          </DataTable>

        </div>

      </div>

    </>

  )
}

export default Dashboard