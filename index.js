const express = require('express');
const app = express();

const batches = [
    {name: 'Batch-1', endpoint: '/batch/1'},
    {name: 'Batch-2', endpoint: '/batch/2'},
    {name: 'Batch-3', endpoint: '/batch/3'}
];

const batch = [
    {
        name: 'Batch-1',
        strength: 22,
        subjects: ['Maths', 'Physics', 'Chemistry'],
        students: [
            {name:"dhruv" ,age: 22 , gender:"Male" },
            {name:"pallavi" ,age: 25 , gender:"Female"},
            {name:"Rishabh" ,age: 22 , gender:"Male" }
        ]
    },
    {
        name: 'Batch-2',
        strength: 26,
        subjects: ['Maths', 'Physics', 'Chemistry'],
        students: [
            {name:"karan" ,age: 22 , gender:"Male" },
            {name:"Sanvi" ,age: 14 , gender:"FeMale" },
            {name:"Manas sir" ,age: 24 , gender:"Male" }
        ]
    },
    {
        name: 'Batch-3',
        strength: 25,
        subjects: ['Maths', 'Physics', 'Chemistry'],
        students: [
            {name:"dhruv" ,age: 22 , gender:"Male" },
            {name:"pallavi" ,age: 25 , gender:"FeMale" },
            {name:"Rishabh" ,age: 22 , gender:"Male" }
        ]
    }
];

app.get('/', (req, res) => {
    res.send('Api is running Successfully');
});

app.get('/batches', (req, res) => {
    // res.send(batches);
    res.send(batches);
});

app.get('/batch/:num', (req, res) => {
    // res.send(batches);
    res.send(batch[req.params.num - 1]);
});

app.listen('3000', console.log('Listening to PORT 3000'));