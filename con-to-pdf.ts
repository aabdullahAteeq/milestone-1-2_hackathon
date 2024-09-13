import { jsPDF } from "jspdf";

export class CVComponent {

  constructor() {}

  // Function to download CV as PDF
  downloadCVAsPDF() {
    // Fetch form data from the input fields
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const fatherName = (document.getElementById("fatherName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const qualification = (document.getElementById("qualification") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    // Create new jsPDF document
    const doc = new jsPDF();

    // Add content dynamically from the form inputs
    doc.text(Name: ${name}, 10, 10);
    doc.text(Father's Name: ${fatherName}, 10, 20);
    doc.text(Email: ${email}, 10, 30);
    doc.text(Phone: ${phone}, 10, 40);
    doc.text(Qualification: ${qualification}, 10, 50);
    doc.text(Skills: ${skills}, 10, 60);

    // Save the generated PDF
    doc.save("CV.pdf");
  }
}