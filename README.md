# Modern React with Redux

# ReduxSimpleStarter

We write js files inside this package, then babel and webpack bundle them together and convert them to ES5 which is something they can run through the browser, and then makes a local server available from which we can view all those files.

Now lets take a look at the files within the ReduxSimpleStarter folder. Let's open up the *index.html* file and take a look. You'll see that theres a *<script src>* tag that says *bundle.js*. If you open the *src* folder, you'll see three other existing folders that have javascript files including the lone javascript file in the *src* folder. webpack and babel takes all of those javascript files and bundles them up into a single javascript file known as *bundle.js* which is what we see here. Whenever we visit the localhost:8080, the index.html file is what we see.

# What is React?

React is a javascript library and it used to produce HTML that is shown to the user in the web browser. But when we write React code, we're writing individual components or views. Components are snippets of code that produce HTML. We write these mulitple and different coponents and we nest these components together by placing one inside the other in different fashions to make really complex applications relatively simple. A component is a collection of javascript functions that produce HTML. So when we're making a component, we're writing javascript but ultimately it'll convert into html.

Just now we've created a new src folder and deleted the old one and just created one index.js file. In that file, we want to create a component and then find a way to push it onto the page (or the DOM).

We just defined a const called *App* and assigned a function to it. Within the function we added a little HTML inside. The HTML inside is what we refer to as JSX. JSX is a dialect of javascript and allows us to write what looks like HTML but behind the scenes is just javascript. So this is coming back to the concept of how babel and webpack will be involved in some level of transpiring our code before it gets in the browser. When this code shows up in the browser, it doesn't actually look like *<div></div>*.

JSX is what produces the actual HTML that get inserted into the DOM when we render this component. When I say "render", I mean place this components HTML onto the page. The purpose of JSX is to have some javascript code that can produce ultimately HTML.

# Importing React

When we write ES6 JS, we have access to a concept called javascript modules. JS modules encapsulates the idea that when we write in separate files, is siloed from the other code that we write in. Code that is declared in other files that we produce will have zero contact with other files, unless we explicitly say we want that file to have access to some code in another file.

When I say silo, I mean to say that we can't make reference to any variables in that other file.

Now when it comes pushing the component we created into the DOM. We need to access React in order to do so. However, even though we installed React in this project as a dependency, we have to explicitly say we want access to react inside of this file.

  *import React from 'react';*

# ReactDOM vs React

We've imported a library called react. React is however, starting to diverge into two seperate libraries. The core react library which we've already imported here knows how to work with react components, so it knows how to render them, how to nest them together and so on. The functionality to actually render them to the DOM however is now a sepearate library called ReactDOM. So to render the component to the DOM requires the ReactDOM library.

  *import ReactDOM from 'react-dom';*

# Differences between Component Instances and Component Classes

When we create a component, we are creating a class of a component. The *const app* we created earlier on is a class of component, we can have many instances of *app*. So think of this function as a factory which produces instances of the actual components that get rendered to the DOM.

So what we need to do now is instantiate our components before we try to render them to the DOM.

# Render Targets

Last time, in our *index.js* file, we wrote the folowing:

  *ReactDOM.render(<App />);*

Basically we're saying put it on the page but we're not really telling react where to put that component the page. We're saying take the *App* component class and render it to the DOM, but where in the HTML do we put it?

We need a second argument which will reference to an existing DOM node on the page. Think of it like a target DOM node.

  *ReactDOM.render(<App />, document.querySelector('.container'));*

Now if we refresh *localhost:8080*, we'll see the page displaying "Hi!".


# Youtube API React Project

Youtube API Search. This package has one purpose. Given an API Key and a search term, it will make an API request for us and return some data such as a list of videos that match the search term. We'll install this using NPM: *npm install -save youtube-api-search*. This command will reach out to the NPM registry and install the package for us. When we use the *--save*, it means "please save this to our *package.json* file inside the project". The *package.json* is a file in our project that lists a number of dependencies that our project has.


# Search Bar Component

Before we delve into working with data we get from the Youtube API for this Youtube React Project. We're going to delve into the search bar component and cover three important topics: exporting modules, classes and states. Once we've covered these three concepts, we'll come back to working with the data from the Youtube API.

The purpose of this component is to make sure that we have an input at the top that the user can type in and in doing so it should update the video list on the right hand side. Basically, user types input and we need to make an API request to the Youtube API.

# Export Statements

Export and Import statements are how solo components within a project are able to make reference with one another.

# Class-Based Components

Its used whenever you want a component to have some type of internal record keeping, some ability for it to be aware of itself and what's happened to it since its been rendered. Because users are going to be typing into this input, our search bar component really needs to have some ability for introspecting itself. Some ability to tell other components that there has been user inputted in the search bar.

In order to do this, we need to upgrade this functional component to a more complex component: a class-based component which is an actual javascript object with actual properties and methods,

Moreover, we're going to enhance the class' behavior by extending it with react based component class. So we're defining a new class called *SearchBar* and giving it access to all of the functionality that *React.Component* has. We still need it to render somehow. Every class based component must have a defined render method to return some JSX.

# Event Handling

We just refactored our code turning the search bar parts into a class instead of a functional component. We did this so it could have other functionality which we'll discuss here such as handling user input.

# Controlled Components

In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

# Data Flow Downstream Flow

Means that only the most parent component in the application should be responsible for fetching data, be it from an API or from a flux framework or redux itself.

*index.js* should hence be responsible for fetching data for the app.
