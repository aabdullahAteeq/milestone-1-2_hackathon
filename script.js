// function generateCV() {
//   const name = (document.getElementById('name') as HTMLInputElement).value;
//   const fatherName = (document.getElementById('fatherName') as HTMLInputElement).value;
//   const email = (document.getElementById('email') as HTMLInputElement).value;
//   const phone = (document.getElementById('phone') as HTMLInputElement).value;
//   const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//   const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
//   const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
//   const photo = (document.getElementById('photo') as HTMLInputElement).files?.[0];
var _a, _b;
//   // Display the input in the CV section
//   (document.getElementById('cvName') as HTMLElement).innerText = `Name: ${name}`;
//   (document.getElementById('cvFatherName') as HTMLElement).innerText = `Father's Name: ${fatherName}`;
//   (document.getElementById('cvEmail') as HTMLElement).innerText = `Email: ${email}`;
//   (document.getElementById('cvPhone') as HTMLElement).innerText = `Phone: ${phone}`;
//   // Display sections only if there's content
//   const educationElem = document.getElementById('cvEducation') as HTMLElement;
//   const experienceElem = document.getElementById('cvExperience') as HTMLElement;
//   const skillsElem = document.getElementById('cvSkills') as HTMLElement;
//   if (education) {
//     (document.getElementById('educationHeading') as HTMLElement).classList.remove('hidden');
//     educationElem.innerText = education;
//   } else {
//     (document.getElementById('educationHeading') as HTMLElement).classList.add('hidden');
//     educationElem.innerText = '';
//   }
//   if (experience) {
//     (document.getElementById('experienceHeading') as HTMLElement).classList.remove('hidden');
//     experienceElem.innerText = experience;
//   } else {
//     (document.getElementById('experienceHeading') as HTMLElement).classList.add('hidden');
//     experienceElem.innerText = '';
//   }
//   if (skills) {
//     (document.getElementById('skillsHeading') as HTMLElement).classList.remove('hidden');
//     skillsElem.innerText = skills;
//   } else {
//     (document.getElementById('skillsHeading') as HTMLElement).classList.add('hidden');
//     skillsElem.innerText = '';
//   }
//   // Display the uploaded photo
//   if (photo) {
//     const reader = new FileReader();
//     reader.onload = function(e) {
//       const cvPhoto = document.getElementById('cvPhoto') as HTMLImageElement;
//       cvPhoto.src = e.target?.result as string;
//       cvPhoto.style.display = 'block';
//       cvPhoto.style.width = '150px'; 
//       cvPhoto.style.height = '150px';
//       cvPhoto.style.borderRadius = '50%';
//       cvPhoto.style.objectFit = 'cover';
//     };
//     reader.readAsDataURL(photo);
//   } else {
//     (document.getElementById('cvPhoto') as HTMLImageElement).style.display = 'none';
//   }
//   // Show the CV section
//   document.getElementById('cv')?.classList.remove('hidden');
//   // Show the share link and download buttons
//   document.getElementById('share-link')?.classList.remove('hidden');
//   document.getElementById('download-container')?.classList.remove('hidden');
// }
// function downloadResume() {
//   const cvContent = document.getElementById('cv')?.innerHTML;
//   const blob = new Blob([`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Generated CV</title>
//       <style>
//         body { font-family: Arial, sans-serif; }
//         #cv img { 
//           width: 150px; /* Image width fix */
//           height: 150px; /* Image height fix */
//           border-radius: 50%; /* Making the image circular */
//           object-fit: cover; /* Ensure image fits within the circle */
//         }
//         h3 { color: #333; }
//       </style>
//     </head>
//     <body>
//       ${cvContent}
//     </body>
//     </html>
//   `], { type: 'text/html' });
//   const link = document.createElement('a');
//   link.href = URL.createObjectURL(blob);
//   link.download = 'Generated_CV.html';
//   link.click();
// }
// // Function to generate shareable link (for demo, using data URL)
// function generateShareableLink() {
//   const cvContent = document.getElementById('cv')?.outerHTML;
//   const blob = new Blob([cvContent || ''], { type: 'text/html' });
//   const resumeUrl = URL.createObjectURL(blob);
//   const resumeInput = document.getElementById('resume-url') as HTMLInputElement;
//   resumeInput.value = resumeUrl;
//   // Automatically copy the link to clipboard
//   resumeInput.select();
//   document.execCommand('copy');
//   alert('CV Link copied to clipboard!');
// }
// // Event listeners for buttons
// document.getElementById('download-resume')?.addEventListener('click', downloadResume);
// document.getElementById('copy-link')?.addEventListener('click', generateShareableLink);
function generateCV() {
    var _a, _b, _c, _d;
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('fatherName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var photo = (_a = document.getElementById('photo').files) === null || _a === void 0 ? void 0 : _a[0];
    // Handle name display
    var nameElem = document.getElementById('cvName');
    if (name) {
        nameElem.innerText = "Name: ".concat(name);
        nameElem.classList.remove('hidden');
    }
    else {
        nameElem.classList.add('hidden');
    }
    // Handle father's name display
    var fatherNameElem = document.getElementById('cvFatherName');
    if (fatherName) {
        fatherNameElem.innerText = "Father Name: ".concat(fatherName);
        fatherNameElem.classList.remove('hidden');
    }
    else {
        fatherNameElem.classList.add('hidden');
    }
    // Handle email display
    var emailElem = document.getElementById('cvEmail');
    if (email) {
        emailElem.innerText = "Email: ".concat(email);
        emailElem.classList.remove('hidden');
    }
    else {
        emailElem.classList.add('hidden');
    }
    // Handle phone display
    var phoneElem = document.getElementById('cvPhone');
    if (phone) {
        phoneElem.innerText = "Phone: ".concat(phone);
        phoneElem.classList.remove('hidden');
    }
    else {
        phoneElem.classList.add('hidden');
    }
    // Handle education section
    var educationElem = document.getElementById('cvEducation');
    if (education) {
        document.getElementById('educationHeading').classList.remove('hidden');
        educationElem.innerText = education;
    }
    else {
        document.getElementById('educationHeading').classList.add('hidden');
        educationElem.innerText = '';
    }
    // Handle experience section
    var experienceElem = document.getElementById('cvExperience');
    if (experience) {
        document.getElementById('experienceHeading').classList.remove('hidden');
        experienceElem.innerText = experience;
    }
    else {
        document.getElementById('experienceHeading').classList.add('hidden');
        experienceElem.innerText = '';
    }
    // Handle skills section
    var skillsElem = document.getElementById('cvSkills');
    if (skills) {
        document.getElementById('skillsHeading').classList.remove('hidden');
        skillsElem.innerText = skills;
    }
    else {
        document.getElementById('skillsHeading').classList.add('hidden');
        skillsElem.innerText = '';
    }
    // Display the uploaded photo
    if (photo) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var cvPhoto = document.getElementById('cvPhoto');
            cvPhoto.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            cvPhoto.style.display = 'block';
            cvPhoto.style.width = '150px';
            cvPhoto.style.height = '150px';
            cvPhoto.style.borderRadius = '50%';
            cvPhoto.style.objectFit = 'cover';
        };
        reader.readAsDataURL(photo);
    }
    else {
        document.getElementById('cvPhoto').style.display = 'none';
    }
    // Show the CV section
    (_b = document.getElementById('cv')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
    // Show the share link and download buttons
    (_c = document.getElementById('share-link')) === null || _c === void 0 ? void 0 : _c.classList.remove('hidden');
    (_d = document.getElementById('download-container')) === null || _d === void 0 ? void 0 : _d.classList.remove('hidden');
}
function downloadResume() {
    var _a;
    var cvContent = (_a = document.getElementById('cv')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var blob = new Blob(["\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <title>Generated CV</title>\n      <style>\n        body { font-family: Arial, sans-serif; }\n        #cv img { \n          width: 150px; /* Image width fix */\n          height: 150px; /* Image height fix */\n          border-radius: 50%; /* Making the image circular */\n          object-fit: cover; /* Ensure image fits within the circle */\n        }\n        h3 { color: #333; }\n      </style>\n    </head>\n    <body>\n      ".concat(cvContent, "\n    </body>\n    </html>\n  ")], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Generated_CV.html';
    link.click();
}
// Function to generate shareable link (for demo, using data URL)
function generateShareableLink() {
    var _a;
    var cvContent = (_a = document.getElementById('cv')) === null || _a === void 0 ? void 0 : _a.outerHTML;
    var blob = new Blob([cvContent || ''], { type: 'text/html' });
    var resumeUrl = URL.createObjectURL(blob);
    var resumeInput = document.getElementById('resume-url');
    resumeInput.value = resumeUrl;
    // Automatically copy the link to clipboard
    resumeInput.select();
    document.execCommand('copy');
    alert('CV Link copied to clipboard!');
}
// Event listeners for buttons
(_a = document.getElementById('download-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', downloadResume);
(_b = document.getElementById('copy-link')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', generateShareableLink);
