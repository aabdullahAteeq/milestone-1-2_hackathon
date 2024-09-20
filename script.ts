
// function generateCV() {
//   const name = (document.getElementById('name') as HTMLInputElement).value;
//   const fatherName = (document.getElementById('fatherName') as HTMLInputElement).value;
//   const email = (document.getElementById('email') as HTMLInputElement).value;
//   const phone = (document.getElementById('phone') as HTMLInputElement).value;
//   const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//   const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
//   const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
//   const photo = (document.getElementById('photo') as HTMLInputElement).files?.[0];

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
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const fatherName = (document.getElementById('fatherName') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  const photo = (document.getElementById('photo') as HTMLInputElement).files?.[0];

  // Handle name display
  const nameElem = document.getElementById('cvName') as HTMLElement;
  if (name) {
    nameElem.innerText = `Name: ${name}`;
    nameElem.classList.remove('hidden');
  } else {
    nameElem.classList.add('hidden');
  }

  // Handle father's name display
  const fatherNameElem = document.getElementById('cvFatherName') as HTMLElement;
  if (fatherName) {
    fatherNameElem.innerText = `Father Name: ${fatherName}`;
    fatherNameElem.classList.remove('hidden');
  } else {
    fatherNameElem.classList.add('hidden');
  }

  // Handle email display
  const emailElem = document.getElementById('cvEmail') as HTMLElement;
  if (email) {
    emailElem.innerText = `Email: ${email}`;
    emailElem.classList.remove('hidden');
  } else {
    emailElem.classList.add('hidden');
  }

  // Handle phone display
  const phoneElem = document.getElementById('cvPhone') as HTMLElement;
  if (phone) {
    phoneElem.innerText = `Phone: ${phone}`;
    phoneElem.classList.remove('hidden');
  } else {
    phoneElem.classList.add('hidden');
  }

  // Handle education section
  const educationElem = document.getElementById('cvEducation') as HTMLElement;
  if (education) {
    (document.getElementById('educationHeading') as HTMLElement).classList.remove('hidden');
    educationElem.innerText = education;
  } else {
    (document.getElementById('educationHeading') as HTMLElement).classList.add('hidden');
    educationElem.innerText = '';
  }

  // Handle experience section
  const experienceElem = document.getElementById('cvExperience') as HTMLElement;
  if (experience) {
    (document.getElementById('experienceHeading') as HTMLElement).classList.remove('hidden');
    experienceElem.innerText = experience;
  } else {
    (document.getElementById('experienceHeading') as HTMLElement).classList.add('hidden');
    experienceElem.innerText = '';
  }

  // Handle skills section
  const skillsElem = document.getElementById('cvSkills') as HTMLElement;
  if (skills) {
    (document.getElementById('skillsHeading') as HTMLElement).classList.remove('hidden');
    skillsElem.innerText = skills;
  } else {
    (document.getElementById('skillsHeading') as HTMLElement).classList.add('hidden');
    skillsElem.innerText = '';
  }

  // Display the uploaded photo
  if (photo) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const cvPhoto = document.getElementById('cvPhoto') as HTMLImageElement;
      cvPhoto.src = e.target?.result as string;
      cvPhoto.style.display = 'block';
      cvPhoto.style.width = '150px'; 
      cvPhoto.style.height = '150px';
      cvPhoto.style.borderRadius = '50%';
      cvPhoto.style.objectFit = 'cover';
    };
    reader.readAsDataURL(photo);
  } else {
    (document.getElementById('cvPhoto') as HTMLImageElement).style.display = 'none';
  }

  // Show the CV section
  document.getElementById('cv')?.classList.remove('hidden');

  // Show the share link and download buttons
  document.getElementById('share-link')?.classList.remove('hidden');
  document.getElementById('download-container')?.classList.remove('hidden');
}

function downloadResume() {
  const cvContent = document.getElementById('cv')?.innerHTML;

  const blob = new Blob([`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generated CV</title>
      <style>
        body { font-family: Arial, sans-serif; }
        #cv img { 
          width: 150px; /* Image width fix */
          height: 150px; /* Image height fix */
          border-radius: 50%; /* Making the image circular */
          object-fit: cover; /* Ensure image fits within the circle */
        }
        h3 { color: #333; }
      </style>
    </head>
    <body>
      ${cvContent}
    </body>
    </html>
  `], { type: 'text/html' });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Generated_CV.html';
  link.click();
}

// Function to generate shareable link (for demo, using data URL)
function generateShareableLink() {
  const cvContent = document.getElementById('cv')?.outerHTML;

  const blob = new Blob([cvContent || ''], { type: 'text/html' });
  const resumeUrl = URL.createObjectURL(blob);

  const resumeInput = document.getElementById('resume-url') as HTMLInputElement;
  resumeInput.value = resumeUrl;

  // Automatically copy the link to clipboard
  resumeInput.select();
  document.execCommand('copy');
  alert('CV Link copied to clipboard!');
}

// Event listeners for buttons
document.getElementById('download-resume')?.addEventListener('click', downloadResume);
document.getElementById('copy-link')?.addEventListener('click', generateShareableLink);
