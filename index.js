// Your code here
// adding an event listener
document.addEventListener('DOMContentLoaded', function())
    // making a GET request to retrieve movie details
fetch('http://localhost:3000/films')
.then(resonse => Response.json())
// handling JSON data
.then(data => {
    // access the movie
    const Movie = data;

    // extract the details from every movie by declaring them and assigning them a variable 

    const poster = Movie.poster;
    const title = Movie.title;
    const runtime = Movie.runtime;
    const showtime = Movie.showtime;
    const ticketsSold = Movie.tickets_sold;
    const capacity = Movie.theater_capacity;
    // calculating the number of available tickets based o the theaters capacity and the number of tickets sold 
    const availableTickets = capacity - ticketsSold;

    // updating the HTML elements with the retrieved details 
    document.getElementById('poster').src = poster;
    document.getElementById('title').textContent = title;
    document.getElementById('runtime').textContent = runtime;
    document.getElementById('showtime').textContent = showtime;
    document.getElementById('availableTickets').textContent = availableTickets;

})

.catch(error => {
    console.log(error);
});
    
// selects the html element
const filmsList = document.getElementById('films');

// remove the placeholder li elements
const placeholderLi = document.querySelector('#films .film-item');
placeholderLi.remove();

// Fetch movie data from the server
fetch("https://example.com/movies")
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Iterate through each movie in the data array
    data.forEach(movie => {
      // Create a new <li> element for each movie
      const li = document.createElement('li');
      // Set the text content of the <li> element to the movie title
      li.textContent = movie.title;
      // Add the class 'film-item' to the <li> element
      li.classList.add('film-item');
      // Append the <li> element to the filmsList
      filmsList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error fetching movie data:', error);
  });

// PATCH request to update tickets_sold for a film
fetch("/films/{film_id}", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "tickets_sold": 28 // Update with the new number of tickets sold
    })
})
.then(response => {
    // checking if the request was successful
    if (!response.ok) {
        throw new Error('Failed to update tickets sold');
    }
    console.log('Tickets sold updated successfully');
})
.catch(error => {
    console.error('Error updating tickets sold:', error);
});

// POST request to add new tickets
fetch("/tickets", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "film_id": "28", // ID of the film for which tickets are being purchased
        "number_of_tickets": 5 // Number of tickets being purchased
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to add new tickets');
    }
    console.log('New tickets added successfully');
})
.catch(error => {
    console.error('Error adding new tickets:', error);
});


// get all the delete buttons 
const deleteButtons = document.querySelectorAll('.delete-buttons');
// add event listener to each  delete button 
deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => {

    })
})