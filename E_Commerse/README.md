# Final_60Evaluation

By using the following tools and technologies: React (useState, useContext, useEffect, useRef), Chakra UI, React Router, and Axios, 
we build a web application with the following features:

The web application has multiple pages as,

    Login Page
    Home Page
    Product Details Page

This web application makes use of context API to manage authentication state. The initial/default state is,
    isAuthenticated: false,
    token: null,
    email: null .

The Navbar will be visible on all pages and have the following features:

When the user is authenticated/logged-in:

- The logged-in user's email will be displayed on the left side of the navbar.
- A link to the Home Page on the right side will be displayed.
- A LOGOUT button right side of the Home Page that logs out the user and redirects to the login page when clicked.
- When the user is not authenticated/logged-out:
- All pages except the Login Page will be accessible only to logged-in users. If a user is not logged in, they will be redirected to the Login - Page. 

Home Page: As soon as the user visits the Home Page, it will make an API call using Axios to the products endpoint API Docs to get the list of products and then displayed that list of products as cards in a grid layout:

the features included as the page width varris as,
   - 3 cards per row for large screens and above
   - 2 cards per row for medium screens and above
   - 1 card per row for small screens

Each product card will display the Title, Category, and Price, and include a More Details button that redirects to the Product Details page. Include three select buttons for sorting and filtering products:

    Sort by Price with options "Ascending" and "Descending"
    Filter by Category with options "Men", "Women", "Kids", and "Home Decor"
    The products will be rearranged based on the selected sort and filter criteria.

Some Other Features:

- Included loading indicators and error message components to show appropriate loading and error messages as needed.

- Product Details Page: This page will display all the details of a single product. The page will the following features:

- A visually appealing card containing all the details of the product. As soon as the page loads, 

An Add to Cart button that opens an Alert Dialog and two buttons Cancel and Confirm. Clicking Cancel will close the Alert Dialog. by clicking Confirm will show a toast message and the Alert Dialog will then closed. The toast message will be visible for 2 seconds. 

Login Page: This page will contain the following elements:

- An input box for email (focus property is applied on this input box as soon as the page loads).
- An input box for password.
- A login button that make a POST request to the login API endpoint API Docs. If the request is successful, it will redirect to the Home Page.     If the request is unsuccessful, it will display an error message. The successful response returns a token, which can be saved in the AuthContext. 
