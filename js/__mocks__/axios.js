jest.unmock('../pages/login/login'); // unmock to use the actual implementation of sum
jest.unmock('../pages/wg/SearchWG');

import Login from '../pages/login/login';
import JoinWg from '../pages/wg/SearchWG';

let urls = [
  "http://10.0.2.2:1337/parse/login/",
  "http://10.0.2.2:1337/parse/classes/wgs/"
]

let params = [
  "",
]

function mock_show_roommates(data)
{
   if(data.params.where.objectId == '') {
   return Promise.resolve({"results": [ {"users": [
     {
        "id": "w6IWnikUqm",
        "username": "abc",
        "email": "abc@abc"
      } ] } ] } );
    }
}

function mock_login(data)
{
  if(data.params.username === '')
    return Promise.reject({ "data" : {"code":200,"error":"username is required."}})
  if(data.params.password === '')
    return Promise.reject({"data" : {"code":201,"error":"password is required."}})
  if(data.params.username === "CorrectUsername" &&
     data.params.password === "CorrectPassword")
    return Promise.resolve({"data" : {

        "ACL": {
          "*": {
            "read": true
          },
          "e2R5FTHl3Q": {
            "read": true,
            "write": true
          }
        },
        "username": "CorrectUsername",
        "email": "correct@cor.co",
        "updatedAt": "2016-06-08T11:25:26.046Z",
        "createdAt": "2016-06-08T11:25:26.046Z",
        "objectId": "e2R5FTHl3Q",
        "sessionToken": "r:1a587e298b9b69b5b2b2ba47a12e9a67"
    }})
  else
    return Promise.reject({"data" : {"code":201,"error":"Invalid username/password."}})
}

function mock_joinweg(data)
{
  if(data.params.searchterm === '')
    return Promise.reject({ "data" : {"code":200,errormessage: "Couldn't find wg"}})
  if(data.params.name === "newElement" &&
     data.params.shoppinglistid === "CorrectID")
    return Promise.resolve({"data" : {

        "ACL": {
          "*": {
            "read": true
          },
          "ji90Rxs0EB": {
            "read": true,
            "write": true
          }
        },
        "name": "newElement",
        "state": "0",
        "shoppinglistid": "CorrectID",
        "updatedAt": "2016-06-08T11:25:26.046Z",
        "createdAt": "2016-06-08T11:25:26.046Z",
        "objectId": "ji90Rxs0EB",
        "sessionToken": "r:1a587e298b9b69b5b2b2ba47a12e9a67"
    }})
  else
    return Promise.reject({"data" : {"code":401,"error":"Invalid element."}})
}


module.exports = {
  get: function(url,data){
    switch(url)
    {
      case urls[0]: return mock_login(data);
      case urls[1]: return mock_show_roommates(data);
      //If you want to add another request url, add a case here and a function above ;)
    }
  }
}
