function find_numbers() {
    for (let i = 1000; i < 10000; i++) {
        const a = i % 100
        const b = parseInt(i / 100)
        if (i % 99 == 0 && ((a * 100) + b) % 49 == 0 && a > 9)
            return {
                number_1: a,
                number_2: b
            }
    }
}

exports.getPage_task5 = (req, res) => {
    res.render('task5.hbs')
}

exports.answer_task5 = (req, res) => {
    const result = find_numbers()
    const answer = 'Number 1 = ' + result.number_1 +
        ', Number 2 = ' + result.number_2

    res.render('task5.hbs', {
        answer: answer,
        result_text: 'Answer: '
    })
}
