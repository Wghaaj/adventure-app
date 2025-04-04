//get id nfrom the url 
const urlParams = new URLSearchParams(window.location.search);
const placeId = urlParams.get('id');

const place = places.find(p => p.id === Number(placeId)); // cast placeId to number

const wrapper = document.getElementById('wrapper');

if (place) {
    //create image container and set backgorund image for the image associated with place id 
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    imgContainer.style.backgroundImage = `url(${place.image})`;

    //creating content
    const imgContainerContent = document.createElement('div');
    imgContainerContent.classList.add('img-container-content');
    imgContainerContent.classList.add('p-30');

    //title
    const title = document.createElement('p');
    title.classList.add('f-18');
    title.classList.add('trade-winds');
    title.textContent = place.title;

    //small description
    const smallDesc = document.createElement('p')
    smallDesc.textContent = place.smallDesciption;

    //line
    const line = document.createElement('hr');
    line.classList.add('line');

    //display grid with content containers that will include information about country, price, difficulty and duration
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('d-grid');
    gridContainer.classList.add('description-items');

    //grid-area: a 
    const contentA = document.createElement('div');
    contentA.classList.add('content-a');
    
    const descA = document.createElement('div');
    descA.classList.add('desc');
    descA.classList.add('d-flex');
    descA.innerHTML = `<img src="images/country.svg" alt="country svg">`;
    descA.innerHTML += `<p class="name">COUNTRY</p>`;

    const country = document.createElement('p');
    country.textContent = place.country;

    //adding country to contentA
    contentA.append(descA, country);

    //grid-area:b
    const contentB = document.createElement('div');
    contentB.classList.add('content-b');

    const descB = document.createElement('div');
    descB.classList.add('desc');
    descB.classList.add('d-flex');
    descB.innerHTML = `<img src="images/duration.svg" alt="duration svg">`;
    descB.innerHTML += `<p class="name">DURATION</p>`;

    const duration = document.createElement('p');
    duration.textContent = place.duration;

    //adding duration to contentB
    contentB.append(descB, duration);

    //grid-area:c 
    const contentC = document.createElement('div');
    contentC.classList.add('content-c');
   
    const descC = document.createElement('div');
    descC.classList.add('desc');
    descC.classList.add('d-flex');
    descC.innerHTML = `<img src="images/price.svg" alt="price svg">`;
    descC.innerHTML += `<p class="name">PRICE</p>`;

    const price = document.createElement('p');
    price.textContent = place.price;

    //adding price to contentC
    contentC.append(descC, price);

    //grid-area:d
    const contentD = document.createElement('div');
    contentD.classList.add('content-d');

    const descD = document.createElement('div');
    descD.classList.add('desc');
    descD.classList.add('d-flex');
    descD.innerHTML = `<img src="images/difficulty.svg" alt="difficulty svg">`;
    descD.innerHTML += `<p class="name">DIFFICULTY</p>`;

    const difficulty = document.createElement('p');
    difficulty.textContent = place.difficulty;

    //adding difficulty to contentD
    contentD.append(descD, difficulty);

    //adding contentA, contentB, contentC, contentD to gridContainer
    gridContainer.append(contentA, contentB, contentC, contentD);

    //adding title, smallDesc, line and gridContainer to imgContainerContent
    imgContainerContent.append(title, smallDesc, line, gridContainer);

    //adding main description about the olace and the button to big container 
    const mainDesc = document.createElement('p');
    mainDesc.textContent = place.description;
    const button = document.createElement('button');
    button.classList.add('more');
    button.innerHTML = `<a href="${place.more}">More info -></a>`

    const bigContainer = document.createElement('div');
    bigContainer.classList.add('big-container');
    bigContainer.classList.add('p-60');
    bigContainer.append(mainDesc, button);

    //adding imgContainer, imgContainerContent and bigContainer to wrapper 
    wrapper.append(imgContainer, imgContainerContent, bigContainer);
} else {
    //display an error message if there is ot information found about the place
    const error = document.createElement('div');
    error.innerHTML = `<p>Page not found</p>`;

    wrapper.append(error)
}