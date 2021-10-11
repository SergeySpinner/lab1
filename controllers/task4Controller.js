function square(a, b, c) {
    const p = (a + b + c) / 2
    if (a + b > c && b + c > a && a + c > b) {
        return Math.sqrt(p * (p - a) * (p - b) * (p - c))
    } else
        return 'No such triangle exists'
}

exports.getPage_task4 = (req, res) => {
    res.render('task4.hbs')
}

exports.answer_task4 = (req, res) => {
    const side1 = parseInt(req.body.side_a)
    const side2 = parseInt(req.body.side_b)
    const side3 = parseInt(req.body.side_c)

    const square_triangle = (square(side1, side2, side3)).toFixed(4)

    res.render('task4.hbs', {result: square_triangle})
}
