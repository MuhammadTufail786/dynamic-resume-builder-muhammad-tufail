// Form aur display area ke references lena
let form = document.getElementById('resume-form') as HTMLFormElement;
let resumeDisplay= document.getElementById('resume-display') as HTMLDivElement;

// Form submit hone par action handle karna
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Page reload hone se rokna

    // Input values lena
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Resume ka content dynamically generate karna
    const htmlResume = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        
        <h3>Education</h3>
        <p>${education}</p>
        
        <h3>Experience</h3>
        <p>${experience}</p>
        
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Generated resume ko display karna
    if (resumeDisplay) {
        resumeDisplay.innerHTML = htmlResume;
    } else {
        console.error('Resume display element missing hai.');
    }
});
