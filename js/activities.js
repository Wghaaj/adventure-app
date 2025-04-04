const smallContainer = document.getElementById('small-container')

places.forEach(place => {
    const placeDiv = document.createElement('div');
    placeDiv.classList.add('place-div');
    placeDiv.classList.add('d-grid');

    const number = document.createElement('div');
    number.classList.add('number');
    number.classList.add('trade-winds');
    number.classList.add('f-16');

    const placeImg = document.createElement('div');
    placeImg.classList.add('place-img');

    const placeDetails = document.createElement('div');
    placeDetails.classList.add('place-details');
    placeDetails.classList.add('d-flex');

    let pNumber = document.createElement('p')
    pNumber.textContent = place.id;

    number.appendChild(pNumber);

    placeImg.innerHTML = `<img src="${place.image}" alt="${place.title}">`;

    let pTitle = document.createElement('p');
    pTitle.innerHTML = `Title: ${place.title}`;

    let pPrice = document.createElement('p');
    pPrice.innerHTML = `Price: ${place.price}`;

    let pDuration = document.createElement('p');
    pDuration.innerHTML = `Duration: ${place.duration}`;

    let pDescription = document.createElement('p');
    pDescription.innerHTML = `${place.smallDescription}`;

    let button = document.createElement('button');
    button.classList.add('more')
    button.textContent = 'more info ->';
    button.onclick = function() {
        if (place && place.id) {
            window.location.href = `activity.html?id=${place.id}`;
        } else {
            console.error("place or placeId is undefined", place);
        }
    }


    placeDetails.append(pTitle, pPrice, pDuration, pDescription, button);
    placeDiv.append(number, placeImg, placeDetails);
    smallContainer.appendChild(placeDiv);

});