const Permission = require("../models/permission");

exports.cretePermission = (req, res, next) => {
    console.log("per--")
    console.log("per body"+req.body.module);
    const permission = new Permission({
        module: req.body.module,
        name: req.body.name,
        description: req.body.description,
        creator: req.userData.userId
    });
    console.log("-User Data--"+permission);
    
    permission
        .save()
        .then(createdPermission => {
            console.log("success per--")
            res.status(201).json({
                message: "Permission added successfully",
                permission: {
                    ...createdPermission,
                    id: createdPermission._id
                }
            })
        })
        .catch(error => {
            console.log("error per--")
            res.status(500).json({
                message: "Creating a permission failed!"
            });
        });

};