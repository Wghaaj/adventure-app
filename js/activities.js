const smallContainer = document.getElementById('small-container')
// creating a loop that will go through each place in places array and for each place will create a card
places.forEach(place => {
    //create container for the card and add classes to it
    const placeDiv = document.createElement('div');
    placeDiv.classList.add('place-div');
    placeDiv.classList.add('d-grid');

    //create a number of the place 
    const number = document.createElement('div');
    number.classList.add('number');
    number.classList.add('trade-winds');
    number.classList.add('f-16');

    //create container for the image
    const placeImg = document.createElement('div');
    placeImg.classList.add('place-img');

    //create container for place details 
    const placeDetails = document.createElement('div');
    placeDetails.classList.add('place-details');
    placeDetails.classList.add('d-flex');

    //display number of the card
    let pNumber = document.createElement('p')
    pNumber.textContent = place.id;

    number.appendChild(pNumber);

    //add image to the image container
    placeImg.innerHTML = `<img src="${place.image}" alt="${place.title}">`;

    //add title
    let pTitle = document.createElement('p');
    pTitle.innerHTML = `Title: ${place.title}`;

    //add price
    let pPrice = document.createElement('p');
    pPrice.innerHTML = `Price: ${place.price}`;
    
    //add duration
    let pDuration = document.createElement('p');
    pDuration.innerHTML = `Duration: ${place.duration}`;

    //add small description
    let pDescription = document.createElement('p');
    pDescription.innerHTML = `${place.smallDescription}`;

    //add button 'more info' that will rediract the user to the page with information about the place clicked 
    let button = document.createElement('button');
    button.classList.add('more')
    button.textContent = 'more info ->';
    button.onclick = function() {
        if (place && place.id) {
            window.location.href = `activity.html?id=${place.id}`;
        } else {
            //if there is an error with finding the lace or id it will display the error in console 
            console.error("place or placeId is undefined", place);
        }
    }

    //add all details to details container
    placeDetails.append(pTitle, pPrice, pDuration, pDescription, button);
    //add image, number and details container to a card
    placeDiv.append(number, placeImg, placeDetails);
    //add card to main containr/wrapper
    smallContainer.appendChild(placeDiv);

});