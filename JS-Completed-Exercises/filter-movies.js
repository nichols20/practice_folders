const movies = [
    { title: 'a', year:2018, rating: 4.5},
    { title: 'b', year:2018, rating: 4.7},
    { title: 'c', year:2018, rating: 3},
    { title: 'd', year:2017, rating: 4.5},
];

const pickMovie = orderMovies(movies)

function orderMovies(array){
    array.sort((a,b) => a - b)
    for (let i = 0; i < array.length; i++){
        const number = array[i]
        if (number.rating > 4 && number.year === 2018)console.log(number.title) 
    }
}