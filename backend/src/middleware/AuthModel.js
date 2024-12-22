const jwt = require('jsonwebtoken');

const secret_key = process.env.SECRET_KEY;


const validateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if(!token){
        return res.status(401).send('No autorizado');
    }
    try{
        const decoded = jwt.verify(token, secret_key);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).json({message: 'No autorizado'});
    }
}


module.exports = {validateToken};