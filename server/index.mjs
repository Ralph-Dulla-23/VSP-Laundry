import express from 'express';
import bodyParser from 'body-parser'
import jsonfile from 'jsonfile';

const PORT = process.env.PORT || 3001;
const DATABASE = './server/database/db.json';
let userdata = {};
const app = express();
app.use(bodyParser.json());

jsonfile.readFile(DATABASE, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    userdata = data;
    // test pass check
    // console.log(checkPass('sample01@email.com','password1234'));
  });

const writeUserData = ( ) => ( 
    jsonfile.writeFile(DATABASE, userdata, function (err) {
        if (err) console.error(err)
}) );

/* For testing the server */
app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

const checkPass = ( username, password ) => {
    var login = false;
    var person = {};

    for ( var i in userdata["user"] ) {

        if ( (!login) && userdata["user"][i].email == username && userdata["user"][i].password == password ) {
            var usertype = userdata["user"][i].usertype;
            var firstname = userdata["user"][i].firstname;
            var lastname = userdata["user"][i].lastname;
            person = {firstname: firstname, lastname:lastname, usertype: usertype };
            login = true;
            break;
        }
    }

    
    return { login: login, person: person };
}

const checkExist = ( username, email, password ) => {

    var person = {};

    for ( var i in userdata["user"] ) {
        if ( userdata["user"][i].email == email) {
            return person;
        }
    }

    var name = username;
    var email = email;
    var password = password;

    person = {
        name: name,
        email: email,
        password: password,
        usertype: "User",
        Position: "n/a"
    }   
    
    userdata["user"].push(person);

    jsonfile.writeFileSync(DATABASE, userdata, function (err) {
        if (err) console.error(err)
    });

    return { person: person };
}

const checkExistStaff = ( username, email, password ) => {

    var person = {};

    for ( var i in userdata["user"] ) {
        if ( userdata["user"][i].email == email) {
            return person;
        }
    }

    var name = username;
    var email = email;
    var password = password;

    person = {
        name: name,
        email: email,
        password: password,
        usertype: "Admin",
        Position: "Staff"
    }   

    userdata["user"].push(person);
    jsonfile.writeFileSync(DATABASE, userdata, function (err) {
        if (err) console.error(err)
    });

    return { person: person };
}

const checkID = ( ID, Customer, Service, DateReceived, Datetoclaim ) => {

    var jobOrder = {};

    for ( var i in userdata["jobOrders"] ) {
        if ( userdata["jobOrders"][i].ID === ID) {
            return false;
        }
    }

    console.log(1)
    jobOrder = {
        ID: ID,
        Customer: Customer,
        Service: Service,
        DateReceived: DateReceived,
        Datetoclaim: Datetoclaim,
        Progress: "Idle",
        Report: null
    }   

    console.log(jobOrder)
    userdata["jobOrders"].push(jobOrder);
    jsonfile.writeFileSync(DATABASE, userdata, function (err) {
        if (err) console.error(err)
    });

    return true;
}

const updateStaff = ( name, Position ) => {

    for ( var i in userdata["user"] ) {
        if ( userdata["user"][i].name === name) {
            userdata["user"][i].Position = Position;
            break
        }
    }  

    jsonfile.writeFileSync(DATABASE, userdata, function (err) {
        if (err) console.error(err)
    });

    return true;
}

const updateOrder = ( ID, Progress ) => {

    for ( var i in userdata["jobOrders"] ) {

        if ( userdata["jobOrders"][i].ID === ID) {
            userdata["jobOrders"][i].Progress = Progress;
            break
        }
    }  

    jsonfile.writeFileSync(DATABASE, userdata, function (err) {
        if (err) console.error(err)
    });

    return true;
}

const removeStaff = ( name ) => {

    for ( var i in userdata["user"] ) {
        if ( userdata["user"][i].name == name) {
            console.log(1)
            userdata["user"].splice(i,1);
            break
        }
    }

    console.log(2)
    jsonfile.writeFileSync(DATABASE, userdata, function (err) {
        if (err) console.error(err)
    });

    return true;
}

const removeOrder = ( ID ) => {

    for ( var i in userdata["jobOrders"] ) {
        if ( userdata["jobOrders"][i].ID === ID) {
            console.log(1)
            userdata["jobOrders"].splice(i,1);
            break
        }
    }

    console.log(2)
    jsonfile.writeFileSync(DATABASE, userdata, function (err) {
        if (err) console.error(err)
    });

    return true;
}

const getStaff = () => {

    var staff = [];
    
    for ( var i in userdata["user"] ) {
        if (userdata["user"][i].usertype === "Admin" ) {
            staff.push(userdata["user"][i]);
        }
    }

    return staff;
}

const getJobOrders = () => {
    
    var orders = userdata["jobOrders"];
    return orders;
}

/* To handle authentication request */
app.post("/api/auth", (req, res) => {
    console.log ( "AUTH: Received data ..." );
    console.log ( req.body);  
    let {user, password} = req.body;
    res.json ( checkPass(String(user).trim(), String(password).trim()) ); 
});

// To see exisitng account once register
app.post("/api/reg", (req, res) => {
    console.log ( "AUTH: Received data ..." );
    console.log (req.body);  
    let {user, email, password} = req.body;
    console.log(1);
    res.json ( checkExist(String(user), String(email).trim(), String(password).trim()) ); 
});

app.post("/api/regStaff", (req, res) => {
    console.log ( "AUTH: Received data ..." );
    console.log (req.body);  
    let {user, email, password} = req.body;
    res.json ( checkExistStaff(String(user), String(email).trim(), String(password).trim()) ); 
});

app.post("/api/addOrder", (req, res) => {
    console.log ( "AUTH: Received data ..." );
    console.log (req.body);  
    let {ID, Customer, Service, DateReceived, Datetoclaim} = req.body;
    res.json ( checkID(parseInt(ID), String(Customer), String(Service), String(DateReceived), String(Datetoclaim)) ); 
});

app.put("/api/updatePosition", (req, res) => {
    console.log ( "AUTH: Received data ..." );
    console.log (req.body);  
    let {name, Position} = req.body;
    res.json ( updateStaff(String(name), String(Position))); 
});

app.put("/api/updateOrder", (req, res) => {
    console.log ( "AUTH: Received data ..." );
    console.log (req.body);  
    let {ID, Progress} = req.body;
    res.json ( updateOrder(ID, String(Progress))); 
});

app.delete("/api/removeStaff", (req,res) => {
    console.log ( "AUTH: Received data ..." );
    console.log (req.body);  
    let {name} = req.body;
    res.json ( removeStaff(String(name)) ); 
})

app.delete("/api/removeOrder", (req,res) => {
    console.log ( "AUTH: Received data ..." );
    console.log (req.body);  
    let {ID} = req.body;
    res.json ( removeOrder(ID) ); 
})

app.post("/api/getStaff", (req, res) => {
    res.json ( getStaff() ); 
});

app.post("/api/getJobOrders", (req, res) => {
    res.json ( getJobOrders() ); 
});
  
app.listen ( PORT, () => {
    console.log(`http://localhost:${PORT}`);
    
});