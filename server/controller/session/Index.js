const Sessions = require("../../models/Session");


exports.session = async (req, res) => {
    Sessions
        .find({})
        .populate("programId")
        .populate("departmentId")
        .exec((err, data) => {
            if (err) {
                throw err;
            }
            res.json(data);
        });
};
