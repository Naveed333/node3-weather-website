const hbs = require('hbs')
const express = require('express')
const path = require('path')
console.log('hello')
const app = express()

//Define path for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

//Setup handlebar engin and views engin
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

//Setup static directory to Serve
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Naveed Ashfaq'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Weather App',
        name:'Naveed Ashfaq'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        helptext:'This is some helpfull text',
        name:'Naveed Ashfaq'
    })
})

app.get('/weather',(req,res)=>{
    res.send('Your Weather!')
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Naveed',
        errorMessage:'Help article not found'
    }) 
})


app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Naveed',
        errorMessage:'Page is not available'
    }) 
})


app.listen(3000,()=>{
    console.log('Serever is up 3000.')
})