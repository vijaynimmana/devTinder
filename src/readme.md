install the postman app
create a workspace
create a collection
select a http method and do a api testing


in mac open termial to check git is installed or not
type gitinit
it will check and install the software
now open your git repo and crete a new repo and sync with the branch


use routes different methods , get, post, delete
use query and params types in routing
use regex in routes
know the sequence of the routes, how important it is to undestand.


multiple route handlers
what is next() in express
what if we dont send response
sequence of next
can be passed in array [h, h2, h3] or (h [h2]) etc
this can be hanlded in multiple ways as shown above
but at the end any response cant be sent when there is no res.send() and it goes to infinite loop
if there is any next() and it dosent have another RH then it will throw router not found, cannot get /USER. 


create a middle for seperate Route handlers.
what is middleware
how express js handles the middleware
create a dummy middle wares 
create a dummy rh for middle wares.
create error handling cases
wild card routes accepting error as a parameter app.use("/", (err, req, res, next)=> {})


installed mongoose
connect to the cluster through connection string
then created a config file and db.js for configurations
export them and use them
write in such a way that the connection string always returns a promise so the sever call should be DOne only after the DB connection.

create a user schema, model.
create the instance of the user model.
create a post api, add the model
save the model data to the DB
always handle adding data to the DB in try and catch
check wether the data is stored in the Document it not.

difffernces between js object and JSON
use of express json() middleware
saving data in DB dynamically

