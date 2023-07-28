# Newsletter sign-up form with success message solution

The component returns JSX elements that represent a newsletter sign-up form with various text, images, and an input field for the email address. It also shows an error message if the entered email is invalid

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Mobile View](./src/design/mobile-design.jpg)
![Desktop View](./src/design/desktop-design.jpg)

### Links

- Solution URL: [Github]()
- Live Site URL: [Netlify]()

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- Tailwind CSS

### What I learned

It also imports the useNavigate function from the 'react-router-dom' module.

Inside this component, it initializes state variables using the useState hook: email, errorMsg.

It also initializes the navigate constant with the value returned by the useNavigate hook from the 'react-router-dom' module.

The regular expression validEmail is defined to validate email addresses.

The handleClick function is defined to handle the button click event. It checks if the entered email is valid using the validEmail regex pattern. If the email is not valid or empty, it sets the errorMsg state variable to true. Otherwise, it sets errorMsg to false and navigates to the '/success' route.

To see how you can add code snippets, see below:

```css
.placeholder-tomato::placeholder{
    color: hsl(4, 100%, 67%);
}
```

```js
const [email, setEmail] = useState("");
const navigate = useNavigate();
const [errorMsg, setErrorMsg] = useState(false);
const validEmail = /^[\w0-9_./%+-]+@[\w]+\.[\w]{2,4}$/;
const handleClick = () => {
  if (!email || !validEmail.test(email)) {
    setErrorMsg(true);
  } else {
    setErrorMsg(false);
    navigate("/success");
  }
};
```

## Author

- Frontend Mentor - [@AJstyles903](https://www.frontendmentor.io/profile/AJstyles903)
- Twitter - [@aryanjay903](https://www.twitter.com/aryanjay903)