function counter(iter_array = []) {
    const arr = ['b', 'c', 'd', 'f',
        'g', 'h', 'j', 'k', 'l',
        'm', 'n', 'p', 'q', 'r',
        's', 't', 'v', 'w', 'x',
        'y', 'z']
    const set = new Set(arr)
    // const result_map = new Map()
    const result_map = []
    let count_consonants = 0

    for (const temp_string of iter_array) {
        for (const temp_char of temp_string) {
            if (set.has(temp_char))
                count_consonants++
        }
        result_map.push({string: temp_string, count: count_consonants})
        count_consonants = 0
    }
    result_map.sort((a,b) => {
        return b.count - a.count
    })
    return result_map
}

exports.getPage_task3 = (req, res) => {
    res.render('task3.hbs')
}
exports.answer_task3 = (req, res) => {
    const string = req.body.string
    const temp_array = string.split(' ')

    const result_map = counter(temp_array)



    console.log(result_map)
    res.render('task3.hbs', {
        result: result_map,
        result_keys: result_map.keys(),
        result_values: result_map.values()
    })
}