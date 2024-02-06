const express = require('express')
const {faker} = require('@faker-js/faker')
const app = express()


  const createUser = {
      password: faker.internet.password({ length: 10}),
      email:faker.internet.email(),
      phoneNumber:faker.phone.number(),
      lastName:faker.person.lastName(),
      firstName:faker.person.firstName(),
      _id:faker.database.mongodbObjectId()
  };

  const createCompany = {
    _id:faker.database.mongodbObjectId(),
    firstName:faker.person.firstName(),
    adress:{
      street:faker.location.street(),
      city:faker.location.city(),
      state:faker.location.state(),
      zipCode:faker.location.zipCode(),
      country:faker.location.country()
    }
  }

app.get('/api/users/new',(req,res)=>{
  res.json(createUser)
})

app.get('/api/companies/new',(req,res)=>{
  res.json(createCompany)
})
app.get('/api/user/company',(req,res)=>{
  res.json({user:createUser,
  Company:createCompany})
})

app.listen(8000, () => console.log('Listening on Port 8000'))