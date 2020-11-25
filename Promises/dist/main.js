$.get('/randomWord', function (word) {
    $.get(`/synonyms/${word}`, function (synonyms) {
        $.get(`/sentiment/${word}`, function (sentiment) {
            console.log(`
            The word ${word} has a 
            ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
            its synonyms are: ${synonyms}`)
        })
    })
})

$.get('/randomWord')
    .then(function (word) {
        console.log(word)
    })


$.get('/sentiment/Ploy')
    .then(function (response) {
        console.log(response)
    })

    const printResults = function (word, synonyms, sentiment) {
        console.log(`
            The word ${word} has a 
            ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
            its synonyms are: ${synonyms}`
        )
    }
    
    $.get('/randomWord')
        .then(function (word) {
            let synonymsPromise = $.get(`/synonyms/${word}`)
            let sentimentPromise = $.get(`/sentiment/${word}`)
            Promise.all([synonymsPromise, sentimentPromise])
                .then(function (results) {
                    printResults(word, results[0], results[1])
                })
        })
$.get('/randomWord')
    .then(function(word) {
        return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
    }) 
    .then(function(book){
        console.log(book)
    })
    
$.get('/randomword')
    .then(function(word) {
        let bookPromise = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        let gifPromise = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`)
        Promise.all([bookPromise, gifPromise])
            .then(function(result) {
                $("body").append(`<div>${result[0].items[0].volumeInfo.title}</div>`)
	                $("body").append(`<iframe src="${result[1].data[0].embed_url}">`)
            })
    })