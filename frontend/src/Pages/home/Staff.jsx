import React, { useState, useEffect } from 'react'
import NavBarAdmin from '../../components/NavBarAdmin'
import AddStaffForm from '../../components/AddStaffForm'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Dialog } from 'primereact/dialog';

function Staff() {

  const [staff, setStaff] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visible, setVisible] = useState(false);
  let jsonArray = [];

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2" style={{ minWidth: '50rem', padding: '0.2rem 1.1rem' }}>
      <span className="m-2" style={{ fontSize: '1.9rem' }}>Staff</span>
      
      <Button style={{ float: 'right' }} label='Add Staff' onClick={() => setVisible(true)} />
      <Button style={{ float: 'right', marginRight: '8px' }} severity='danger' label='Remove Staff' />

      <Dialog header='Add Staff' visible={visible} style={{ width: '50vw' }} draggable={false} onHide={() => setVisible(false)}>
        <AddStaffForm />
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
    return <Tag value={staff.Position} severity={getSeverity(staff)} style={{
      fontSize: '1rem', fontWeight: '100',
      width: '20%'
    }}></Tag>;
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

      <div className='content1' style={{ marginTop: '2.9rem' }}>

        <div className="tableCard">

          <DataTable value={staff} paginator rows={5} selectionMode="single" header={header} stripedRows
            selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)}  tableStyle={{ height: '20rem' }}>
            <Column field="name" header="Name" alignHeader={'center'} style={{ textAlign: 'center' }}></Column>
            <Column field="Position" header="Job" body={statusBodyTemplate} alignHeader={'center'} style={{ textAlign: 'center' }}></Column>
          </DataTable>

        </div>

      </div>

    </>
  )
}

export default Staff