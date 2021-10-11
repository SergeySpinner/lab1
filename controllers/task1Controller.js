exports.getPage_task1 = (req, res) => {
    res.render('task1.hbs')
}

exports.answer_task1 = (req,res) => {
    let server_number = parseInt(req.body.number)
    let temp_number = server_number / 100000
    console.log('Number is: ', temp_number)

    if (temp_number > 1 && temp_number < 10) {
        let t =
            parseInt(server_number / 100000) + parseInt((server_number / 10000) % 10) + parseInt((server_number / 1000) % 10) ===
            parseInt((server_number / 100) % 10) + parseInt((server_number / 10) % 10) + parseInt(server_number % 10)
        if(t)
            res.render('task1.hbs', {answer: 'Yes'})
        else
            res.render('task1.hbs', {answer: 'No'})
    } else
        res.render('task1.hbs', {answer: 'Wrong number'})
}
