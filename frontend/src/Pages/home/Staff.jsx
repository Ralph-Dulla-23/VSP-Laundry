import React, { useState, useEffect } from 'react'
import NavBarAdmin from '../../components/NavBarAdmin'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

function Staff() {

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2" style={{ minWidth: '50rem', padding: '0.2rem 1.1rem' }}>
            <span className="m-2" style={{ fontSize: '1.9rem' }}>Staff</span>
        </div>
    );

    const [staff, setStaff] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        StaffData.getProductsMini().then(data => setStaff(data));
    }, []);

    const statusBodyTemplate = (staff) => {
        return <Tag value={staff.position} severity={getSeverity(staff)} style={{ fontSize: '1rem', fontWeight: '100',
        width: '4.5em' }}></Tag>;
      };
    
      const getSeverity = (staff) => {
    
        switch (staff.Job) {
          case 'Manager':
            return 'danger';
    
          case 'Inquiry':
            return 'warning';
    
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
                    selection={selectedProduct} tableStyle={{height: '20rem'}}>
                        <Column field="id" header="ID" alignHeader={'center'} style={{textAlign: 'center'}}></Column>
                        <Column field="name" header="Name" alignHeader={'center'} style={{textAlign: 'center'}}></Column>
                        <Column field="position" header="Job" body={statusBodyTemplate} alignHeader={'center'} style={{textAlign: 'center'}}></Column>
                    </DataTable>

                </div>

            </div>

        </>
    )
}

export default Staff