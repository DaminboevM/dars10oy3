import PermissionModel from "../module/Permision.module.js"

async function chekPermision (req, res, next) {
    try {
        
        if (!req.user.email) return res.status(401).json({ message: "email not found", succsess: false })
    
        if (user.role = 'SuperAdmin') return next()

        const permisionName = req.url.split('/')[1]

        const data = await PermissionModel.findOne({email, permisionName})
        if(!data || !data.actions.includes(req.method)) return res.status(403).json({ message: "No permission" })

        next()
    } catch (error) {
        res.status(500).json({ message: "Internal server error !", error: error.message })
    } 
}

export default chekPermision