function random(exception1, exception2) {
    let max = 'z'.charCodeAt(0)
    let min = 'a'.charCodeAt(0)
    while (true) {
        var rand = Math.floor(Math.random() * (max - min + 1)) + min
        if (rand != exception1.charCodeAt(0) && rand != exception2.charCodeAt(0))
            break
    }
    return String.fromCharCode(rand)
}

exports.getPage_task2 = (req, res) => {
    res.render('task2.hbs')
}

exports.answer_task2 = (req, res) => {
    const string = req.body.string;
    const len = string.length;
    const temp_array = []

    for(let i = 0; i < len; i+=3){
        temp_array.push(string.slice(i, i+3))
    }
    console.log(temp_array)
    const result_array = []
    for(const temp_string of temp_array){
        let symbol1 = temp_string[0]
        let symbol3 = temp_string[2]
        if(symbol1 == null || symbol3 == null){
            result_array.push(temp_string)
            break
        }
        else
            result_array.push(symbol1 + random(symbol1,symbol3) + symbol3)
    }
    res.render('task2.hbs', {answer: result_array.sort()})
}
