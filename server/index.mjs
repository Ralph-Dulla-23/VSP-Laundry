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
        if ( (!login) && userdata["user"][i].email === username && userdata["user"][i].password === password ) {
            var usertype = userdata["user"][i].usertype;;
            var firstname = userdata["user"][i].firstname;
            var lastname = userdata["user"][i].lastname;
            person = {firstname: firstname, lastname:lastname, usertype: usertype };
            login = true;
        }
    }

    
    return { login: login, person: person };
}

const checkOrder = ( username, password ) => {
    var order = {};

    for ( var i in userdata["user"] ) {
        if ( (!login) && userdata["user"][i].email === username && userdata["user"][i].password === password ) {
            var usertype = userdata["user"][i].usertype;;
            var firstname = userdata["user"][i].firstname;
            var lastname = userdata["user"][i].lastname;
            person = {firstname: firstname, lastname:lastname, usertype: usertype };
            login = true;
        }
    }

    
    return { login: login, person: person };
}

/* To handle authentication request */
app.post("/api/auth", (req, res) => {
    console.log ( "AUTH: Received data ..." );
    console.log ( req.body );  
    let {user, password} = req.body;
    res.json ( checkPass(String(user).trim(), String(password).trim()) );
});
  
app.listen ( PORT, () => {
    console.log(`http://localhost:${PORT}`);
    
});