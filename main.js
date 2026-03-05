// <!DOCTYPE html>
// <html lang="ka">
// <head>
// <meta charset="UTF-8">
// <title>Movie System</title>

// <style>

// body{
// font-family:Arial;
// margin:0;
// background:white;
// color:black;
// transition:0.3s;
// }

// .dark{
// background:#121212;
// color:white;
// }

// header{
// display:flex;
// flex-wrap:wrap;
// gap:10px;
// padding:20px;
// background:#222;
// color:white;
// align-items:center;
// justify-content:space-between;
// }

// .header-controls{
// display:flex;
// gap:10px;
// flex-wrap:wrap;
// }

// input{
// padding:8px;
// border-radius:5px;
// border:none;
// }

// button{
// padding:8px 12px;
// border:none;
// border-radius:5px;
// cursor:pointer;
// }

// #sort-buttons{
// padding:15px;
// display:flex;
// gap:10px;
// flex-wrap:wrap;
// }

// #moviesContainer{
// display:grid;
// grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
// gap:20px;
// padding:20px;
// }

// .movie-card{
// border:1px solid #ccc;
// padding:15px;
// border-radius:10px;
// background:#f5f5f5;
// }

// .dark .movie-card{
// background:#1e1e1e;
// }

// .discount-badge{
// background:red;
// color:white;
// padding:4px 8px;
// border-radius:5px;
// display:inline-block;
// margin-top:5px;
// }

// .book-btn{
// margin-top:10px;
// background:black;
// color:white;
// }

// #statistics{
// padding:20px;
// font-weight:bold;
// }

// </style>
// </head>

// <body>

// <header>

// <h1>🎬 Movie System</h1>

// <div class="header-controls">

// <input id="searchInput" placeholder="Search movie">

// <button id="searchBtn">Search</button>

// <button id="darkMode">Dark Mode</button>

// </div>

// </header>

// <div id="sort-buttons">

// <button id="sort-rating-asc">Rating ↑</button>

// <button id="sort-rating-desc">Rating ↓</button>

// <button id="sort-genre">Genre A-Z</button>

// </div>

// <div id="statistics"></div>

// <div id="moviesContainer"></div>

// <script>

// let movies=[]

// function createMoviesDatabase(){

// movies=[

// {
// title:"Inception",
// genre:"action",
// duration:148,
// rating:9,
// ticketPrice:20,
// availableSeats:10,
// vipPrice:0,
// isDiscounted:false
// },

// {
// title:"Joker",
// genre:"drama",
// duration:122,
// rating:8,
// ticketPrice:18,
// availableSeats:30,
// vipPrice:0,
// isDiscounted:false
// },

// {
// title:"Hangover",
// genre:"comedy",
// duration:110,
// rating:7,
// ticketPrice:15,
// availableSeats:8,
// vipPrice:0,
// isDiscounted:false
// },

// {
// title:"Conjuring",
// genre:"horror",
// duration:112,
// rating:8,
// ticketPrice:16,
// availableSeats:40,
// vipPrice:0,
// isDiscounted:false
// },

// {
// title:"Matrix",
// genre:"sci-fi",
// duration:136,
// rating:9,
// ticketPrice:22,
// availableSeats:12,
// vipPrice:0,
// isDiscounted:false
// }

// ]

// return movies

// }

// createMoviesDatabase()

// function applyAutoDiscount(movies){

// movies.forEach(movie=>{

// if(movie.availableSeats<15){
// movie.isDiscounted=true
// }else{
// movie.isDiscounted=false
// }

// })

// return movies

// }

// function calculateVipPrice(movies){

// movies.forEach(movie=>{

// if(movie.isDiscounted){
// movie.vipPrice=movie.ticketPrice*1.5
// }else{
// movie.vipPrice=movie.ticketPrice
// }

// })

// return movies

// }

// applyAutoDiscount(movies)
// calculateVipPrice(movies)

// function displayMovies(moviesList){

// let container=document.getElementById("moviesContainer")

// container.innerHTML=""

// moviesList.forEach(movie=>{

// container.innerHTML+=`

// <div class="movie-card">

// <h2>${movie.title}</h2>

// <p>Genre: ${movie.genre}</p>

// <p>Duration: ${movie.duration} min</p>

// <p>Rating: ⭐ ${movie.rating}</p>

// <p>Ticket: ${movie.ticketPrice} ₾</p>

// <p>VIP: ${movie.vipPrice} ₾</p>

// <p>Seats: ${movie.availableSeats}</p>

// ${movie.isDiscounted ? `<span class="discount-badge">Discount</span>` : ""}

// <button class="book-btn">Book</button>

// </div>

// `

// })

// }

// displayMovies(movies)

// function displayStatistics(){

// let total=movies.length

// let discounted=movies.filter(m=>m.isDiscounted).length

// let avgRating=(movies.reduce((sum,m)=>sum+m.rating,0)/movies.length).toFixed(2)

// let topMovie=movies.reduce((a,b)=>a.rating>b.rating?a:b).title

// let totalSeats=movies.reduce((sum,m)=>sum+m.availableSeats,0)

// document.getElementById("statistics").innerHTML=`

// Total Movies: ${total} <br>
// Discounted Movies: ${discounted} <br>
// Average Rating: ${avgRating} <br>
// Top Movie: ${topMovie} <br>
// Total Seats: ${totalSeats}

// `

// }

// displayStatistics()

// document.getElementById("sort-rating-asc").onclick=()=>{

// movies.sort((a,b)=>a.rating-b.rating)

// displayMovies(movies)

// }

// document.getElementById("sort-rating-desc").onclick=()=>{

// movies.sort((a,b)=>b.rating-a.rating)

// displayMovies(movies)

// }

// document.getElementById("sort-genre").onclick=()=>{

// movies.sort((a,b)=>a.genre.localeCompare(b.genre))

// displayMovies(movies)

// }

// document.getElementById("searchBtn").onclick=()=>{

// let value=document.getElementById("searchInput").value.toLowerCase()

// let result=movies.filter(movie=>movie.title.toLowerCase().includes(value))

// if(result.length===0){

// document.getElementById("moviesContainer").innerHTML="<h2>პროდუქტი ვერ მოიძებნა</h2>"

// }else{

// displayMovies(result)

// }

// }

// document.getElementById("darkMode").onclick=()=>{

// document.body.classList.toggle("dark")

// }

// </script>

// </body>
// </html>