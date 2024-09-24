const ph = {
    nom:(req, res)=>{
        res.render('index');
    },

    about:(req, res)=>{
        res.render('about');
    },

    cart:(req, res)=>{
        res.render('cart');
    },

    check:(req, res)=>{
        res.render('check');
    },

    contact:(req, res)=>{
        res.render('contact');
    }
};

module.exports =ph;
