document.querySelector("header nav a.edubutton").addEventListener('click', (event) =>{
    event.preventDefault();
    document.querySelector('section#education').scrollIntoView({'behavior' : 'smooth'});
})

document.querySelector("header nav a.skillsbutton").addEventListener('click', (event) =>{
    event.preventDefault();
    document.querySelector('section#skills').scrollIntoView({'behavior' : 'smooth'});
})

document.querySelector("header nav a.homebutton").addEventListener('click', (event) =>{
    event.preventDefault();
    document.querySelector('section#home').scrollIntoView({'behavior' : 'smooth'});
})