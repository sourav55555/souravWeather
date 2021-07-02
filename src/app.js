const express= require('express');
const app= express();
const path= require('path');
const port=process.env.PORT || 5000;
const hbs= require('hbs');

//static
const  templates_path= path.join(__dirname,"../tamplates/views");
const partial_path= path.join(__dirname,"../tamplates/partials");


app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partial_path);


const static_path= path.join(__dirname,"../public");
app.use(express.static(static_path));

//routing
app.get('',(req,res)=>{
    res.render("index");
});
app.get('/about',(req,res)=>{
    res.render("about");
});
app.get('/weather',(req,res)=>{
    res.render('Weather');
});
app.get('*',(req,res)=>{
    res.render('404error',{
        errmsg: 'Oops! page not found'
    });
});

app.listen(port,()=>{
    console.log("listening to port 5000")
})