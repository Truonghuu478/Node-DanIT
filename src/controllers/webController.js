
const getHomePage = (req, res)=>{
   
    //call model
    res.send("Hello Home page");
}

const getAboutPage = (req, res)=>{
    res.send("Hello About Page ");

}

const renderHomePage = (req, res)=>{
    res.render("sample.ejs");
}


module.exports = {
    getHomePage,
    getAboutPage,
    renderHomePage
}