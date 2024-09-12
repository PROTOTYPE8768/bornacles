const banner = document.querySelector('.banner');
const images = [
    'url(/dist/img/slide1jape.jpg)',
    'url(/dist/img/slide2jape.jpg)',
    
];

let currentIndexx = 0;

function changeBackgroundImage() {
    currentIndexx = (currentIndexx + 1) % images.length;
    banner.style.backgroundImage = images[currentIndexx];
}

setInterval(changeBackgroundImage, 5000);


// Selecting the buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update background image manually via buttons
function updateBackgroundImage() {
    banner.style.backgroundImage = images[currentIndexx];
}

// Event listeners for the buttons
prevBtn.addEventListener('click', function() {
    // Subtract 1 to move to the previous image
    currentIndexx = (currentIndexx - 1 + images.length) % images.length; 
    updateBackgroundImage();
});

nextBtn.addEventListener('click', function() {
    // Add 1 to move to the next image
    currentIndexx = (currentIndexx + 1) % images.length;
    updateBackgroundImage();
});



const projectsContent = document.querySelector('.projects_grid_container .projects_content');
const buttons = document.querySelectorAll('.projcets_btn_content a');
let currentIndex = 0;

// Update the active button
function updateActiveButton(index) {
    buttons.forEach((button, idx) => {
        button.style.background = idx === index ? '#000' : '#BDBDBD';
    });
}

// Move to the next project
function moveToNext() {
    if (currentIndex < buttons.length - 1) {
        currentIndex++;
        projectsContent.style.transform = `translateX(-${currentIndex * 870}px)`;
        updateActiveButton(currentIndex);
    }
}

// Move to the previous project
function moveToPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        projectsContent.style.transform = `translateX(-${currentIndex * 870}px)`;
        updateActiveButton(currentIndex);
    }
}

// Handle button clicks
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        projectsContent.style.transform = `translateX(-${currentIndex * 1200}px)`;
        updateActiveButton(currentIndex);
    });
});

// Make the content draggable
let isDragging = false;
let startPos = 0;

projectsContent.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPos = e.clientX;
    projectsContent.style.transition = 'none';
});

projectsContent.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const currentPos = e.clientX;
    const moveBy = currentPos - startPos;
    projectsContent.style.transform = `translateX(${moveBy - currentIndex * 570}px)`;
});

projectsContent.addEventListener('mouseup', (e) => {
    isDragging = false;
    projectsContent.style.transition = 'transform 0.3s ease';
    const endPos = e.clientX;
    if (startPos > endPos + 100 && currentIndex < buttons.length - 1) {
        moveToNext();
    } else if (startPos < endPos - 100 && currentIndex > 0) {
        moveToPrev();
    } else {
        projectsContent.style.transform = `translateX(-${currentIndex * 570}px)`;
    }
});

projectsContent.addEventListener('mouseleave', () => {
    isDragging = false;
    projectsContent.style.transition = 'transform 0.3s ease';
    projectsContent.style.transform = `translateX(-${currentIndex * 570}px)`;
});



document.addEventListener('DOMContentLoaded', function () {
    // Elements to be modified
    const buttons = document.querySelectorAll('.var-btn');
    const contentTitle = document.querySelector('.var_content_text h2');
    const contentText = document.querySelector('.var_content_text p');
    const contentCheck = document.querySelectorAll('.var_content_check p');
    const contentImage = document.querySelector('.var_content img');

    // Data for each button
    const contentData = [
        {
            title: 'Unparalleled Experience in Lorem Ipsum',
            text: 'Our team provides exceptional experience in lorem ipsum development, ensuring quality in every passage.',
            checks: [
                'We have completed over 8000 projects globally.',
                'Working with the best lorem ipsum creators.',
                'Pioneers in randomised words for industries.'
            ],
            imgSrc: '/dist/img/va-img.png' // Replace with actual image paths
        },
        {
            title: 'Quality Construction for Lorem Ipsum',
            text: 'We build lorem ipsum text that stands the test of time and trends in the industry.',
            checks: [
                'Over 9000 lorem structures created.',
                'Our construction process is second to none.',
                'Partnering with industry leaders in randomised words.'
            ],
            imgSrc: '/dist/img/V8LC77U.jpg'
        },
        {
            title: 'Industry Solutions in Lorem Ipsum',
            text: 'We provide tailored lorem ipsum solutions that cater to diverse industries and needs.',
            checks: [
                'Innovative lorem ipsum solutions for all industries.',
                'Providing unmatched quality in word constructions.',
                'Delivering unique lorem ipsum based products globally.'
            ],
            imgSrc: '/dist/img/istockphoto-1155404876-612x612.jpg'
        }
    ];

    // Function to change content based on button clicked
    function changeContent(index) {
        // Update text content
        contentTitle.innerHTML = contentData[index].title;
        contentText.innerHTML = contentData[index].text;
        contentCheck.forEach((check, idx) => {
            check.innerHTML = contentData[index].checks[idx];
        });

        // Update image source
        contentImage.src = contentData[index].imgSrc;

        // Update button backgrounds
        buttons.forEach((button, idx) => {
            button.style.backgroundColor = idx === index ? 'white' : '#171717';
            button.style.color = idx === index ? '#000' : '#fff';
        });
    }

    // Add event listeners to buttons
    buttons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            changeContent(index);
        });
    });
});



const homies = document.querySelector(".dipindot");
const bastahome = document.querySelector(".shome_click");
const homiess = document.querySelector(".dipindot2");
const bastahomes = document.querySelector(".sshome_click");

homies.addEventListener("click", () => {
    if (homiess.classList.contains("open")) {
        homiess.classList.remove("open");
        bastahomes.classList.remove("open");
    }
    homies.classList.toggle("open");
    bastahome.classList.toggle("open");
});

homiess.addEventListener("click", () => {
    if (homies.classList.contains("open")) {
        homies.classList.remove("open");
        bastahome.classList.remove("open");
    }
    homiess.classList.toggle("open");
    bastahomes.classList.toggle("open");
});