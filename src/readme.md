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

