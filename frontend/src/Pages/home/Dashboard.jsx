import React, { useState, useEffect, useRef } from 'react'

import NavBarAdmin from '../../components/NavBarAdmin'
import AddOrderForm from '../../components/AddOrderForm';
import EditProgress from '../../components/EditProgress';
import OrderDesc from '../../components/OrderDesc';

import { DataTable } from 'primereact/datatable';
import { Tag } from 'primereact/tag';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';


function Dashboard() {

  const [job, setJob] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  let jsonArray = [];

  const toast = useRef(null);

  const accept = () => {

    let userData = { ID: selectedOrder.ID };

    fetch('/api/removeOrder', {
      method: 'delete',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'Removed Job Order', life: 3000 });
          setSelectedOrder()
        }
      })

  }

  const cancel = () => {
    return;
  }

  const confirm = () => {

    confirmDialog({
      message: `Are you sure you want to remove Job Order #${selectedOrder.ID}?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept,
      cancel
    });
  };

  const header = (

    <div className="flex flex-wrap align-items-center justify-content-between gap-2" style={{ minWidth: '50rem', padding: '0.2rem 1.1rem' }}>

      <span className="m-2" style={{ margin: 'auto 0rem', fontSize: '1.9rem' }}>Job Orders</span>
      <Button style={{ float: 'right' }} label='Add Order' onClick={() => setVisible(true)} />
      <Button style={{ float: 'right', marginRight: '8px' }} onClick={confirm} severity='danger' label='Remove Order' />

      <Dialog header='Add Order' visible={visible} style={{ width: '50vw' }} draggable={false} onHide={() => setVisible(false)}>
        <AddOrderForm />
      </Dialog>

    </div>

  );

  useEffect(() => {
    fetch('/api/getJobOrders', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {

        jsonArray = data;
        setJob(jsonArray);
      })
  }, []);

  const statusBodyTemplate = (job) => {
    return (
      <div>
        <Tag value={job.Progress} onClick={() => setVisible2(true)} severity={getSeverity(job)} style={{ fontSize: '1rem', fontWeight: '100', width: '4.5em' }}></Tag>
        <Dialog header='Edit Position' visible={visible2} style={{ width: '50vw' }} draggable={false} onHide={() => setVisible2(false)}>
          <EditProgress data={selectedOrder} />
        </Dialog>
      </div>

    );
  };

  const onRowSelect = (event) => {
    <Dialog header='Job Order' visible={visible2} style={{ width: '50vw' }} draggable={false} onHide={() => setVisible2(false)}>
      <p>
        trst
      </p>
    </Dialog>

  };

  const getSeverity = (job) => {

    switch (job.Progress) {
      case 'Claimed':
        return 'success';

      case 'Ready':
        return 'info';

      case 'Drying':
        return 'primary';

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

      <ConfirmDialog />
      <Toast ref={toast} />

      <div className='content1' style={{ marginTop: '2.9rem' }}>

        <div className="tableCard">

          <DataTable value={job} paginator rows={5} selectionMode="single" header={header} stripedRows sortMode="multiple"
            selection={selectedOrder} onSelectionChange={(e) => setSelectedOrder(e.value)}
            tableStyle={{ height: '20rem' }}>

            <Column field="ID" header="ID" alignHeader={'center'} style={{ textAlign: 'center' }}></Column>
            <Column field="Service" header="Service" alignHeader={'center'} style={{ textAlign: 'center' }}></Column>
            <Column field="DateReceived" header="Date Received" alignHeader={'center'} style={{ textAlign: 'center' }}></Column>
            <Column field="Progress" header="Status" body={statusBodyTemplate} alignHeader={'center'} style={{ textAlign: 'center' }}></Column>

          </DataTable>

        </div>

      </div>

    </>

  )
}

export default Dashboard