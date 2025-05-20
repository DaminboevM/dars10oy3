import path from "path"
import fs from "fs"

let errorHeandler = (error, req, res, next) => {
    try {
        if (error.status < 500) {
            return res.status(error.status || 400).json({ message: error.message })
        } else {
            let manzil = path.join(process.cwd(),"logger.txt")
            let errorText = ` ${error.message}\n` 
            fs.appendFileSync(manzil, errorText) 
        }

    } catch (error) {
        console.log(error)  
    }
}

export default errorHeandler