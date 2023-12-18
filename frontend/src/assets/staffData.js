export const staffData = {

    getStaffData() {
        
        return [
            {
                ID: '000',
                Name: 'John Doe',
                Job: 'Manager'
            },
            {
                ID: '001',
                Name: 'John Doe',
                Job: 'Customer Service'
            },
            {
                ID: '002',
                Name: 'John Doe',
                Job: 'Employee'
            },
            {
                ID: '003',
                Name: 'John Doe',
                Job: 'Employee'
            },
            {
                ID: '004',
                Name: 'John Doe',
                Job: 'Employee'
            }
        ]

    },

    getStaff() {
        return Promise.resolve(this.getStaffData());
    }
}