async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];

    document.getElementById('userImage').src = user.picture.large;
    document.getElementById('userName').innerText = `${user.name.first} ${user.name.last}`;
    document.getElementById('userEmail').innerText = user.email;
    document.getElementById('userPhone').innerText = user.phone;
    document.getElementById('userLocation').innerText = `${user.location.city}, ${user.location.country}`;
}

window.onload = getRandomUser;