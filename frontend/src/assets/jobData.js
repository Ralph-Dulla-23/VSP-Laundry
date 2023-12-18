export const jobData = {

    getJobData() {
        
        return [
            {
                ID: '100',
                Service: 'Basic Services',
                Date_Received: '11-10-2023',
                Status: 'Ready',
            },
            {
                ID: '101',
                Service: 'Rush Laundry',
                Date_Received: '11-10-2023',
                Status: 'Ready',
            },
            {
                ID: '102',
                Service: 'Special Laundry',
                Date_Received: '11-10-2023',
                Status: 'Claimed',
            },
            {
                ID: '103',
                Service: 'Special Laundry',
                Date_Received: '11-10-2023',
                Status: 'Drying',
            },
            {
                ID: '104',
                Service: 'Dry Clean',
                Date_Received: '11-11-2023',
                Status: 'Drying',
            },
            {
                ID: '105',
                Service: 'Basic Services',
                Date_Received: '11-12-2023',
                Status: 'Washing',
            },
            {
                ID: '106',
                Service: 'Special Laundry',
                Date_Received: '11-11-2023',
                Status: 'Lost',
            },
            {
                ID: '107',
                Service: 'Basic Services',
                Date_Received: '11-13-2023',
                Status: 'Idle',
            }
        
        ]

    },

    getJob() {
        return Promise.resolve(this.getJobData());
    }
}