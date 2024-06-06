
export const validateLogin = (email, password)=>{
    //eslint-disable-next-line
    const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
    //eslint-disable-next-line
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if(!isEmailValid) return "Email not valid";
    if(!isPasswordValid) return "Password not valid";

    return null;

}