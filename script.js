function generateCV() {
    var _a;
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('fatherName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var photo = (_a = document.getElementById('photo').files) === null || _a === void 0 ? void 0 : _a[0];
    // Display the input in the CV section
    document.getElementById('cvName').innerText = "Name:".concat(name);
    document.getElementById('cvFatherName').innerText = "Father's Name: ".concat(fatherName);
    document.getElementById('cvEmail').innerText = "Email: ".concat(email);
    document.getElementById('cvPhone').innerText = "Phone: ".concat(phone);
    document.getElementById('cvEducation').innerText = education;
    document.getElementById('cvExperience').innerText = experience;
    document.getElementById('cvSkills').innerText = skills;
    // Display the uploaded photo
    if (photo) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var cvPhoto = document.getElementById('cvPhoto');
            cvPhoto.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            cvPhoto.style.display = 'block';
        };
        reader.readAsDataURL(photo);
    }
    else {
        document.getElementById('cvPhoto').style.display = 'none';
    }
}
