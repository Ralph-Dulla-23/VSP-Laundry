import React, { useState, useEffect, useRef } from 'react'
import NavBarAdmin from '../../components/NavBarAdmin'
import AddStaffForm from '../../components/AddStaffForm'
import EditPosition from '../../components/EditPosition'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

function Staff() {

  const [staff, setStaff] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  let jsonArray = [];

  const toast = useRef(null);

  const accept = () => {

    let userData = { name: selectedProduct.name };

    fetch('/api/removeStaff', {
      method: 'delete',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'Removed Staff', life: 3000 });
          setSelectedProduct()
        }
      })

  }

  const cancel = () => {
    return;
  }

  const confirm = () => {

    confirmDialog({
      message: `Are you sure you want to remove this staff member ${selectedProduct.name}?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept,
      cancel
    });
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2" style={{ minWidth: '50rem', padding: '0.2rem 1.1rem' }}>
      <span className="m-2" style={{ fontSize: '1.9rem' }}>Staff</span>

      <Button style={{ float: 'right' }} label='Add Staff' onClick={() => setVisible(true)} />
      <Button style={{ float: 'right', marginRight: '8px' }} onClick={confirm} severity='danger' label='Remove Staff' />

      <Dialog header='Add Staff' visible={visible} style={{ width: '50vw' }} draggable={false} onHide={() => setVisible(false)}>
        <AddStaffForm/>
      </Dialog>
    </div>
  );

  useEffect(() => {
    fetch('/api/getStaff', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {
        jsonArray = data;
        setStaff(jsonArray);
      })

  }, []);

  const statusBodyTemplate = (staff) => {
    return (
      <div>
        <Tag value={staff.Position} onClick={() => setVisible2(true)} severity={getSeverity(staff)} style={{
          fontSize: '1rem', fontWeight: '100',
          width: '20%'
        }}></Tag>

        <Dialog header='Edit Position' visible={visible2} style={{ width: '50vw' }} draggable={false} onHide={() => setVisible2(false)}>
          <EditPosition data={selectedProduct}/>
        </Dialog>
      </div>

    );
  };

  const getSeverity = (staff) => {

    switch (staff.Position) {
      case 'Manager':
        return 'danger';

      case 'Customer Service':
        return 'success';

      case 'Staff':
        return 'help';

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

          <DataTable value={staff} paginator rows={5} selectionMode="single" header={header} stripedRows
            selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} tableStyle={{ height: '20rem' }}>
            <Column field="name" header="Name" alignHeader={'center'} style={{ textAlign: 'center' }}></Column>
            <Column field="Position" header="Job" body={statusBodyTemplate} alignHeader={'center'} style={{ textAlign: 'center' }}></Column>
          </DataTable>

        </div>

      </div>

    </>
  )
}

export default Staff