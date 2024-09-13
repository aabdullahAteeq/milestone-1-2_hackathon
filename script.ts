function generateCV() {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const fatherName = (document.getElementById('fatherName') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  const photo = (document.getElementById('photo') as HTMLInputElement).files?.[0];

  // Display the input in the CV section
  (document.getElementById('cvName') as HTMLElement).innerText = `Name:${name}`;
  (document.getElementById('cvFatherName') as HTMLElement).innerText = `Father's Name: ${fatherName}`;
  (document.getElementById('cvEmail') as HTMLElement).innerText = `Email: ${email}`;
  (document.getElementById('cvPhone') as HTMLElement).innerText = `Phone: ${phone}`;
  (document.getElementById('cvEducation') as HTMLElement).innerText = education;
  (document.getElementById('cvExperience') as HTMLElement).innerText = experience;
  (document.getElementById('cvSkills') as HTMLElement).innerText = skills;

  // Display the uploaded photo
  if (photo) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const cvPhoto = document.getElementById('cvPhoto') as HTMLImageElement;
          cvPhoto.src = e.target?.result as string;
          cvPhoto.style.display = 'block';
      };
      reader.readAsDataURL(photo);
  } else {
      (document.getElementById('cvPhoto') as HTMLImageElement).style.display = 'none';
  }
}