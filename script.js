let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("mailPhone");
let password = document.getElementById("Password");
let errorMessage = document.getElementById("errorMessage");
let successMessage = document.getElementById("successMessage");

let student = []

if (localStorage.details) {
    let newStudent = JSON.parse(localStorage.details);
    student = newStudent
}

const submit = () => {
    if (firstName.value == "" || lastName.value == "" || email.value == "" || password.value == "") {
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000)
    } else {
        let stdObj = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        }
        let pushedStudent = student.push(stdObj);
        console.log(pushedStudent);
        if (pushedStudent) {
            successMessage.style.display = "block"
            setTimeout(() => {
                successMessage.style.display = "none"
            }, 5000);
            localStorage.setItem('details', JSON.stringify(student))
            window.location.href = "dashboard.html"
        } else {
            alert("Failed to submit, please try again")
        }
    }
}

