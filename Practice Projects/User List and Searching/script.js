let userContainer = document.querySelector('.user-id-container');
let searchInput = document.querySelector('#searchInput');

let users = [
    {
        imageURL: "pics/Untitled-Project.jpg",
        name: "Amit Patel",
        email: "ak87890693@gmail.com"
    },
    {
        imageURL: "pics/Tony-Stark.webp",
        name: "Tony Stark",
        email: "stark143@gmail.com"
    },
    {
        imageURL: "pics/odinSon.jpg",
        name: "Thor OdinPutra",
        email: "chotimaster@gmail.com"
    },
    {
        imageURL: "pics/hulk-and-bruce-banner.jpg",
        name: "Bruce Banner",
        email: "greenmonster@gmail.com"
    },
    {
        imageURL: "pics/Hawkeye.jpg",
        name: "Clint Barton",
        email: "familyman231@gmail.com"
    },
    {
        imageURL: "pics/Natasha.jpg",
        name: "Natasha Romanoff",
        email: "hariyakividhwa@gmail.com"
    },
    {
        imageURL: "pics/steave-rogers.webp",
        name: "Steave Rogers",
        email: "hammerchor@gmail.com"
    },
    {
        imageURL: "pics/Peter-parker.jpg",
        name: "Peter Parker",
        email: "spidy143@gmail.com"
    }
];

function renderUsers(u) {
    userContainer.innerHTML = "";

    u.map(function (obj) {
    let { imageURL, name, email } = obj;

    let userDiv = document.createElement('div');
    userDiv.className = "user";
    userDiv.innerHTML = `
        <div class="dp">
            <img src=${imageURL} alt="User Image">
        </div>
        <div class="info">
            <span>${name}</span>
            <span>${email}</span>
         </div>
    `;

    userContainer.append(userDiv);
});
}

renderUsers(users);

function searching(event){
    let searchValue = event.target.value;
    let filteredUsers = users.filter(obj => {
        return obj.name.toLowerCase().includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase());
    });
    renderUsers(filteredUsers);
}

searchInput.addEventListener("input", searching);