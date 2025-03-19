// let lastScrollTop = 0;
// window.addEventListener("scroll", function() {
    
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {
//         header.style.top = "-60px";
//     } else {
//         header.style.top = "0";
//     }
//     lastScrollTop = scrollTop;
// });

function openFullscreen(event, videoId) {
    event.preventDefault(); // Prevent default link behavior

    let videoElement = document.getElementById(videoId);
    if (!videoElement) return;

    let fullscreenDiv = document.createElement("div");
    fullscreenDiv.classList.add("fullscreen");

    let clone = videoElement.cloneNode(true);
    fullscreenDiv.appendChild(clone);

    // Close button
    let closeButton = document.createElement("div");
    closeButton.classList.add("close-btn");
    closeButton.innerText = "X";
    closeButton.onclick = function () {
        gsap.to(fullscreenDiv, { opacity: 0, scale: 0.8, duration: 0.5, onComplete: () => document.body.removeChild(fullscreenDiv) });
    };

    fullscreenDiv.appendChild(closeButton);
    document.body.appendChild(fullscreenDiv);

    gsap.to(fullscreenDiv, { opacity: 1, scale: 1, duration: 0.5 });

    // Ensure video plays properly
    clone.muted = true; // Start muted
    clone.play();

    let soundButton = document.createElement("div");
    soundButton.classList.add("sound-btn");
    soundButton.innerText = "🔇";

    soundButton.onclick = function () {
        if (clone.muted) {
            clone.muted = false;
            soundButton.innerText = "🔊";
        } else {
            clone.muted = true;
            soundButton.innerText = "🔇";
        }
    };

    fullscreenDiv.appendChild(soundButton);
}


function toggleMenu() {
    const list = document.querySelector('.list');
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
}

// const pride = document.getElementById('pride');
// const cycle = document.getElementById('cycle');
// const blueVelvet = document.getElementById('blue-velvet');
// const PaperScraps = document.getElementById('paper-scraps');
// const flyer02 = document.getElementById('flyer02');
// const flyer01 = document.getElementById('flyer01');
// const kenetic = document.getElementById('kenetic');

// const mouseleaveBorder = ()=>{
//     pride.style.border = 'none';
//     pride.style.filter =  'drop-shadow(0 0 .75rem #212121)';
// }


// pride.addEventListener('mouseover', ()=>{
//     pride.style.border = 'var(--border) var(--pink_clr)';
//     pride.style.filter =  'drop-shadow(0 0 .75rem var(--pink_clr))';
    
// })
// pride.addEventListener('mouseleave', mouseleaveBorder('pride') )

// cycle.addEventListener('mouseover', ()=>{
//     cycle.style.border = 'var(--border) var(--yellow_clr)';
//     cycle.style.filter =  'drop-shadow(0 0 .75rem var(--pink_clr))';
    
// })

// cycle.addEventListener('mouseleave', mouseleaveBorder(cycle) )

const pride = document.getElementById('pride');
const cycle = document.getElementById('cycle');
const blueVelvet = document.getElementById('blue-velvet');
const paperScraps = document.getElementById('paper-scraps');
const flyer02 = document.getElementById('flyer02');
const flyer01 = document.getElementById('flyer01');
const kenetic = document.getElementById('kenetic');

const mouseleaveBorder = (element) => {
    element.style.border = 'none';
    element.style.filter = 'drop-shadow(0 0 .75rem #212121)';
};

const addHoverEffect = (element, borderColor) => {
    element.addEventListener('mouseover', () => {
        element.style.border = `var(--border) ${borderColor}`;
        element.style.filter = `drop-shadow(0 0 .75rem ${borderColor})`;
    });

    element.addEventListener('mouseleave', () => mouseleaveBorder(element));
};

// Apply to all elements
addHoverEffect(pride, 'var(--pink_clr)');
addHoverEffect(cycle, 'var(--yellow_clr)');
addHoverEffect(blueVelvet, 'var(--blue_clr)'); // Example
addHoverEffect(paperScraps, 'var(--green_clr)'); // Example
addHoverEffect(flyer02, 'var(--blue_clr)'); // Example
addHoverEffect(flyer01, 'var(--orange-clr)'); // Example
addHoverEffect(kenetic, 'var(--pink_clr)'); // Example
