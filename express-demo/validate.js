const validate = (req, res) => {
    if(!req.body.lesson || req.body.lesson.length < 3) {
        res
        .status(400)
        .send("lesson required and should be 3 or more characters long.")
        return
    }
}

module.exports = validate