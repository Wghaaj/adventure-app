document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const button = form.querySelector("button");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        let isValid = true;

        // Remove previous error messages
        form.querySelectorAll(".error-message").forEach(msg => msg.remove());
        form.querySelectorAll("input, textarea").forEach(input => input.style.border = "");

        // Validation rules
        form.querySelectorAll("input, textarea").forEach(input => {
            const value = input.value.trim();
            const label = input.closest("label").textContent.trim().split(":")[0]; // Extract label text
            const errorMsg = document.createElement("p");
            errorMsg.classList.add("error-message");
            errorMsg.style.color = "red";
            errorMsg.style.fontSize = "12px";
            errorMsg.style.marginTop = "5px";

            // Check if field is empty
            if (value === "") {
                errorMsg.textContent = `${label} is missing`;
                input.style.border = "2px solid red";
                input.insertAdjacentElement("afterend", errorMsg);
                isValid = false;
            }

            // Check if first name & second name contain numbers
            if ((input.id === "first-name" || input.id === "second-name") && /\d/.test(value)) {
                errorMsg.textContent = `${label} should not contain numbers`;
                input.style.border = "2px solid red";
                input.insertAdjacentElement("afterend", errorMsg);
                isValid = false;
            }
        });

        // If all fields are valid, send data to console and change button text
        if (isValid) {
            const formData = {
                firstName: form.querySelector("#first-name").value.trim(),
                secondName: form.querySelector("#second-name").value.trim(),
                email: form.querySelector("#email").value.trim(),
                query: form.querySelector("#query").value.trim()
            };

            console.log("Form Submitted:", formData);
            button.textContent = "Sent";
            button.style.backgroundColor = "green";
            button.style.color = 'white'
            button.disabled = true;
        }
    });
});
