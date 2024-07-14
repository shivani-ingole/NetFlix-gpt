export const checkValidateData = (email, password , name) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const nameRegex = /^[a-zA-Z\s'-]+$/;


    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
    // const isNameValid = name ? nameRegex.test(name) : true

    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
    // if (name && !isNameValid) return "Name is not valid"

    return null;
};
