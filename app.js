const express = require('express');
const expressLayouts= require('express-ejs-layouts');

const app= express ();

//EJS

app.use(expressLayouts);

app.set('view engine', 'ejs');

//Routes

app.use('/', require('./routes/index'));
app.use('/books',require('./routes/books'));

const PORT = process.env.PORT || 5000;

app.listen(PORT ,console.log('server started on port ${PORT}'));