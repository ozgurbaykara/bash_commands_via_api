// there is no database so we get example tokens from .env file
const auth = async (req, res, next)=>{
    const {authorization: token} = req.headers;
    if(process.env.ADMIN !== token && process.env.TEST !== token){
        res.status(401).json({
            dialog: {
                message: 'Unauthorized',
            }
        })
    }
    req.data = {
        user: token === process.env.ADMIN ? 'admin' : 'test'
    };
    return next();
}
module.exports = {
    auth
};
