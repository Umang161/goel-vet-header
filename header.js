// const breeds = {
//     dogs: [
//         { name: 'Australian Shepherd', image: './pet_images/10.png' },
//         { name: 'Beagle', image: './pet_images/11.png' },
//         { name: 'German Shepherd', image: './pet_images/12.png' },
//         { name: 'Golden Retriever', image: './pet_images/13.png' },
//         { name: 'Labrador', image: './pet_images/14.png' },
//         { name: 'Poodle', image: './pet_images/15.png' },
//         { name: 'Husky', image: './pet_images/16.png' },
//         { name: 'Bulldog', image: './pet_images/17.png' },
//         { name: 'Rottweiler', image: './pet_images/18.png' },
//         { name: 'Pug', image: './pet_images/10.png' }
//     ],
//     cats: [
//         { name: 'Persian', image: './pet_images/Siberian-cat.png' },
//         { name: 'Siamese', image: './pet_images/Siberian-cat.png' },
//         { name: 'Maine Coon', image: './pet_images/Siberian-cat.png' },
//         { name: 'British Shorthair', image: './pet_images/Siberian-cat.png' },
//         { name: 'Ragdoll', image: './pet_images/Siberian-cat.png' },
//         { name: 'Bengal', image: './pet_images/Siberian-cat.png' },
//         { name: 'Sphynx', image: './pet_images/Siberian-cat.png' },
//         { name: 'Scottish Fold', image: './pet_images/Siberian-cat.png' },
//         { name: 'Russian Blue', image: './pet_images/Siberian-cat.png' },
//         { name: 'Abyssinian', image: './pet_images/Siberian-cat.png' }
//     ]
// };

// function displayBreeds(type) {
//     const breedGrid = document.getElementById('breedGrid');
//     breedGrid.innerHTML = '';
    
//     breeds[type].forEach(breed => {
//         const breedCard = document.createElement('div');
//         breedCard.className = 'breed-card';
//         breedCard.innerHTML = `
//             <img src="${breed.image}" alt="${breed.name}" class="breed-image">
//             <div class="breed-name">${breed.name}</div>
//         `;
//         breedGrid.appendChild(breedCard);
//     });
// }

// displayBreeds('dogs');

// Add click handlers for tabs
// document.querySelectorAll('.breed-tab').forEach(tab => {
//     tab.addEventListener('click', () => {
//         // Update active state
//         document.querySelector('.breed-tab.active').classList.remove('active');
//         tab.classList.add('active');
        
//         // Display breeds for selected type
//         displayBreeds(tab.dataset.type);
//     });
// });

document.querySelectorAll('.breed-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Update active state
        document.querySelector('.breed-tab.active').classList.remove('active');
        tab.classList.add('active');

        // Toggle visibility of breed grids
        document.getElementById('breedGridDogs').style.display = tab.dataset.type === 'dogs' ? 'grid' : 'none';
        document.getElementById('breedGridCats').style.display = tab.dataset.type === 'cats' ? 'grid' : 'none';
    });
});


const menuButtons = document.querySelectorAll('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link')
// Toggle mobile menu
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });
})
// Toggle mobile nav items
mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const content = link.nextElementSibling;
        const arrow = link.querySelector('.arrow-icon');
        
        if (content) {
            e.preventDefault();
            
            // Remove active class from all other links and content
            mobileNavLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.remove('active');
                    const otherArrow = otherLink.querySelector('.arrow-icon');
                    const otherContent = otherLink.nextElementSibling;
                    if (otherArrow) otherArrow.classList.remove('active');
                    if (otherContent) otherContent.classList.remove('active');
                }
            })
            // Toggle current link and content
            link.classList.toggle('active');
            content.classList.toggle('active');
            if (arrow) arrow.classList.toggle('active');
        }
    });
});

const searchBar = document.querySelector('.search-bar');
const responsiveSearchBar = document.querySelector('.responsive-search-bar');

// Sync input values between the two search bars
searchBar.addEventListener('input', () => {
    responsiveSearchBar.value = searchBar.value;
});

responsiveSearchBar.addEventListener('input', () => {
    searchBar.value = responsiveSearchBar.value;
});

// Optionally, handle form submission
document.getElementById('desktopSearchForm').addEventListener('submit', (e) => {
    // Prevent the default behavior if needed
    // e.preventDefault();
    console.log('Desktop form submitted with:', searchBar.value);
});

document.getElementById('mobileSearchForm').addEventListener('submit', (e) => {
    // Prevent the default behavior if needed
    // e.preventDefault();
    console.log('Mobile form submitted with:', responsiveSearchBar.value);
});
