const form = document.getElementById("form");
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const phone = document.getElementById("phone");
    const description = document.getElementById("description");

    form.addEventListener("submit", (e)=> {
        e.preventDefault();

        verifyFormular();
    });

    function verifyFormular() {
        const firstnameValue = firstname.value.trim();
        const lastnameValue = lastname.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
        const phoneValue = phone.value.trim();
        const descriptionValue = description.value.trim();

        if (firstnameValue === "") {
            setErrorFor(firstname, "First Name cannot be empty");
        } else if (firstnameValue.length > 30 ) {
            setErrorFor(firstname, "First Name should be less than 30 characters")
        } else {
            setSuccessFor(firstname);
        }

        if (lastnameValue === "") {
            setErrorFor(lastname, "Last Name cannot be empty");
        } else if (lastnameValue.length > 30 ) {
            setErrorFor(lastname, "Last Name should be less than 30 characters")
        } else {
            setSuccessFor(lastname);
        }

        if (emailValue === "") {
            setErrorFor(email, "Email cannot be empty");
        } else if (!isEmailValid (emailValue)) {
            setErrorFor(email, "Email is not valid!")
        } else {
            setSuccessFor(email);
        }

        if (passwordValue === "") {
            setErrorFor(password, "Password cannot be empty");
        } else if (!validator.isStrongPassword(passwordValue)) {
            setErrorFor(password, "Must have +8 characters, at least 1 lowercase, 1 uppercase, 1 number, and 1 special character in (!@#$%^&*)")
         }else {
            setSuccessFor(password);
        }

        if (password2Value === "") {
            setErrorFor(password2, "Password check cannot be empty");
        } else if (passwordValue !== password2Value) {
            setErrorFor(password2, "Passwords are different")
        } else {
            setSuccessFor(password2);
        }

        if (phoneValue === "") {
            setErrorFor(phone, "Phone number cannot be empty");
        } else if (!validator.isMobilePhone(phoneValue)) {
            setErrorFor(phone, "Phone number is not valid!");
        } else {
            setSuccessFor(phone);
        }

        if (descriptionValue === "") {
            setErrorFor(description, "Description cannot be empty");
        } else if (!validator.isLength(descriptionValue, {min:25, max:100})) {
            setErrorFor(description, "Description must have more than 25 characters!");
        } else {
            setSuccessFor(description);
        }

    }

    function setErrorFor(input, message) {
        const formField = input.parentElement;
        const error = formField.querySelector("small");
        error.innerText = message;
        formField.classList.add("error");
    }

    function setSuccessFor(input) {
        const formField = input.parentElement;
        formField.classList.add("success");
    };

    function isEmailValid(email) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
