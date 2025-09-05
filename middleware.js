module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.flash("error", "Login required to create a listing");
        return res.redirect("/login");
    }
    next();
}