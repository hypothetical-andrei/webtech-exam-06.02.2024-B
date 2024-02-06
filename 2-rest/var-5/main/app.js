const express = require('express')
const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my.db'
})

let Employee = sequelize.define('employees', {
    name : Sequelize.STRING,
    department : {
        type: Sequelize.STRING,
        validate: {
            len: [2, 10]
        },
        allowNull: false
    },
    salary : Sequelize.INTEGER
},{
    timestamps : false
})


const app = express()

app.use(express.json())

app.get('/create', async (req, res) => {
    try{
        await sequelize.sync({force : true})
        for (let i = 0; i < 10; i++){
            let employee = new Employee({
                name: 'name ' + i,
                department: ['ACCOUNTING', 'SALES', 'HR'][Math.floor(Math.random() * 3)],
                salary: Math.floor(Math.random() * 3) * 10000
            })
            await employee.save()
        }
        res.status(201).json({message : 'created'})
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})
    }
})

app.get('/employees', async (req, res, next) => {
    try{
        let employees = await Employee.findAll()
        res.status(200).json(employees)
    }
    catch(err){
      next(err)        
    }
})

app.post('/employees', async (req, res, next) => {
    try{
        // TODO
    }
    catch(err){
        next(err)
    }
})

app.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).json({ message: 'server error' })
})

module.exports = app