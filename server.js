const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

app.listen(PORT, () => { 
    console.log(`server running on ${PORT}`)
})

let people = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
]

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/persons', (req, res) => {
    res.json(people)
})

app.get('/info', (req, res) => {
    let number = people.length
    let plural = 'people'
    if(number === 1){
        plural === person
    }
    date = new Date()
    res.send(`Phonebook has info for ${number} ${plural} <br> ${date}`)
    
})

app.get('/api/persons/:id', (req, res) => {
    paramID = Number(req.params.id)
    person = people.find(x => x.id === paramID)
    if(person){
        res.json(person)
    } else{
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) =>{
    id = Number(req.params.id)
    people = people.filter(x => x.id !== id)

    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    
})