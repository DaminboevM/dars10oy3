import  Jwt  from "jsonwebtoken";

export default {
    sign: (paylaod) => Jwt.sign(paylaod, process.env.JWT_SECRET, {expiresIn: '10m'}),
    signRef: (paylaod) => Jwt.sign(paylaod, process.env.JWT_SECRET, {expiresIn: '24h'}),
    verify: (token) => Jwt.verify(token, process.env.JWT_SECRET)
}