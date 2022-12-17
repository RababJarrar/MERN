// import faker
const { faker } = require('@faker-js/faker');
// import express 
const express = require("express");
const app = express();
const port = 8000;


// Create 2 functions: createUser:password ,email.. phoneNumber..lastName..firstName.._id
const createUser = () => {
    const newFake = {
        
        password:faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.datatype.number(),
    };
    return newFake;
};   
const newFakeUser = createUser();
console.log(newFakeUser);


const createCompany = () => {
    const newFake2 = {
        id: faker.datatype.number(),
        name: faker.company.companyName(),
        address : {            
            street : faker.address.street(),
            city : faker.address.city(),
            state : faker.address.state() ,
            zipCode : faker.address.zipCode() ,
            county : faker.address.county() ,            
        } 
    };
    return newFake2;
};   
const newFakeCompany = createCompany();
console.log(newFakeCompany);

// req is shorthand for request , res is shorthand for response
app.get("/api/users/new", (req, res) => {
    res.json(newFakeCompany);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeUser);
});

app.get("/api/user/company", (req,res) =>{
    res.json({user:newFakeUser,
    company:newFakeCompany});
  });


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );