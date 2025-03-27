const express = require('express');
const cors = require('cors');
// const { mergeSchemas } = require('@graphql-tools/merge');
const { graphqlHTTP } = require("express-graphql");
const CFG = require('./cfg');
const userSchema = require('../schemas/user');
const employeeSchema = require('../schemas/employee');
const auth = require('./auth');

const app = express();

app.use(cors());
app.use(express.json());

// const mergedSchema = mergeSchemas({
//     schemas: [userSchema, employeeSchema],
// });

app.use(
  CFG['USER_API'], 
  graphqlHTTP({
    schema: userSchema,
    graphiql: true
  })
);

app.use(
  CFG['EMPLOYEE_API'], 
  auth,
  graphqlHTTP({
    schema: employeeSchema,
    graphiql: true
  })
);

module.exports = app;