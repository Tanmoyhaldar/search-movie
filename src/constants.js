export const LIVE = 0;
// http://www.omdbapi.com/?
// t=${title}&y=${year}&plot=${plot}&i=tt3896198&apikey=16725244
export const API_KEY = `fac3e7f`
export const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`


export const CONSOLE_LOG = (heading, message) => {
    if(!LIVE){
        console.log(heading, message)
    }
}