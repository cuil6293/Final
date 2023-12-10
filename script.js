function showDetails(name) {
    window.location.href = `Random.html?name=${name}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    if (name) {
        displayDetails(name);
    }
});

function displayDetails(name) {
    
    const details = getDetailsByName(name);

    
    document.getElementById('name').textContent = details.name;
    document.getElementById('product').src = details.product;
    document.getElementById('price').textContent = details.price;
    document.getElementById('occupation').textContent = `Occupation: ${details.occupation}`;
    document.getElementById('relationships').textContent = `Relationships: ${details.relationships}`;
    document.getElementById('address').textContent = `Address: ${details.address}`;
    document.getElementById('phone').textContent = `Phone: ${details.phone}`;
    document.getElementById('fact').textContent = `Fun Fact: ${details.fact}`;
    
}

function getDetailsByName(name) {
    
    const detailsDatabase = {
        'People1': { name: 'Bethany Martin, 26', product: 'People1.png', price: '$10.00', occupation: 'Lawyer', relationships: '1 girlfriend, 10 close friends, close with family', address: '1525 Simons Hollow Road, Milton, PA, 17847', phone: '248-434-5508', fact: 'Loves cherries in any shape, way, or form. Has been looking for cherry-themed furniture and items.'},
        'People2': { name: 'Joe Hall, 32', product: 'People2.png', price: '$8.50', occupation: 'Unemployed', relationships: '3 girlfriends, 1 wife, strained relationship with family', address: '276 Seth Street, San Angelo, TX, 76903', phone: '605-475-6972', fact: 'Is about to be exposed for two(three? Four??)-timing on Tuesday after mixing up his bouquet orders.'},
        'People3': { name: 'Wendy Zhao, 23', product: 'People3.png',price: '$10.00', occupation: 'Software Engineer', relationships: '1 boyfriend, 3 close friends, amicable relationship with family', address: '864 Straford Park, Lexington, KY, 40505', phone: '603-413-4124', fact: 'Has an obsession with gacha games and has spent thousands on them.' },
        'People4': { name: 'Brandon Lee', product: 'People4.png', price: '$10.00', occupation: 'Game Developer', relationships: 'Single, but about to be in a relationship, 8 close friends, close with family', address: '4607 Rocket Drive, Saint Paul, MN, 55104', phone: '605-475-6961', fact: "Has 3 friends' birthdays coming up and still doesn't have their presents."},
        'People5': { name: 'Wilson Torres, 46', product: 'People5.png', price: '$4.75', occupation: 'Financial Analyst', relationships: 'Single, 1 close friend, no relationship with family', address: '4049 Glenwood Avenue, Cleveland, OH, 44114', phone: '605–475–6964', fact: "Has recently purchased an expensive car that he doesn't have the money for, but was able to pay it in full."},
        'People6': { name: 'Joanna Hills, 29', product: 'People6.png', price: '$10.00', occupation: 'Botanist', relationships: 'Divorced, 1 child, 4 close friends, close relationship with grandmother', address: '2102 Orphan Road, Appleton, WI, 54913', phone: '505-842-5662', fact: 'Husband mysteriously disappeared and she has been on trial, but was deemed not guilty.'},
        'People7': { name: 'Jaimie Warner, 27', product: 'People7.png', price: '$10.00', occupation: 'Cafe Owner', relationships: '1 boyfriend, 2 children, close relationship with parents, but not with siblings', address: '158 Briarwood Drive, Camden, NJ, 08102', phone: '605–475–6966', fact: 'She just bought a new house with her boyfriend who has been thinking about proposing to her recently, preferably during Christmas.'},
        'People8': { name: 'Gertrude Chambers, 56', product: 'People8.png', price: '$4.75', occupation: 'Nurse', relationships: 'Widowed, 3 grown children, 1 friend, close relationship with children', address: '1982 Monroe Avenue, Tampa, FL, 33602', phone: '646-926-6614', fact: "She's recently developed an alcohol addiction and is looking for a center to help treat it."},
        'People9': { name: 'Jonathan Musa, 47', product: 'People9.png', price: '$10.00', occupation: 'Marine Biologist', relationships: '1 husband, 2 children, 5 close friends, amicable relationship with family, hates his cousin Megan', address: '2632 Collins Avenue, Albany, NY, 43081', phone: '605–475–6973', fact: "Megan stole his car. He's been looking for a new car recently."},
        'People10': { name: 'Kyle Robertson, 67', product: 'People10.png', price: '$10.00', occupation: 'Unemployed', relationships: '3 close friends, no family', address: '4384 Wakefield Street, Philadelphia, PA, 19123', phone: '206-569-5829', fact: 'Has been looking for life insurance ever since his secret identity has been found out.'},
        'People11': { name: 'Lucie Maria, 52', product: 'People11.png', price: '$10.00', occupation: 'Doctor', relationships: '1 husband, 2 close friends, close with family', address: '2447 Myra Street, East Greenwich, RI, 02818', phone: '605–475–6959', fact: 'Is looking for a new place vacation at for the months of December to February.'},
        'People12': { name: 'Jakub Reid, 55', product: 'People12.png', price: '$4.50', occupation: 'Farmer', relationships: 'Single, 3 close friends, close with cousins not with the rest of the family though', address: '435 Mapleview Drive, Henry, TN, 38231', phone: '605–475–6958', fact: 'Has been looking for vets with experience with farm animals near his area but has yet to find one.'}
    };

    return detailsDatabase[name];
}


let cartCount = localStorage.getItem('cart') || 0;


document.getElementById('cart').innerText = cartCount;

function addToCart() {

    cartCount++;

    document.getElementById('cart').innerText = cartCount;

    localStorage.setItem('cart', cartCount);
}


AOS.init();


async function requestWebcamAccess() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('video');
        video.srcObject = stream;

        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    } catch (error) {
        console.error('Error', error);
    }
}

