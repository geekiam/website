---
title: How to implement Form Validation in Vue
description:  learn how to create Forms in Vue.js from scratch and also going to cover how to do client-side Form validation in Vue application
summary: In this tutorial we'll learn how to create Forms in Vue.js from scratch and also going to cover how to do client-side Form validation in Vue application 
keywords:
  - Vue Form Validation Tutorial
  - How to do form validation with Vue.JS
  - basics of form validation Vue
feature:
  image: /uploads/posts/vue/vue-tutorials.png
  alt: Advanced git configuration options
cardImage:
  image: /uploads/twitter/vue/how-to-implement-form-validation-in-vue.png
  alt: Advanced git configuration options
date: 2020-11-18T17:31:47.672Z
author: garywoodfine
tags:
  - javascript
  - vue
categories:
  - software-development
---

A common requirement is most web and mobile based applications is to enable the input and collection of data from the
users. This will invariably enable and provide further functionality, and the data obtained will be used both parties in 
future transactions. 

Ensuring the data has been entered correctly and is free from errors is commonly referred to as  **Form Validation**. 
Validating input fields is imperative when creating forms to collect data and Form validation provides control 
of the customer experience and enables guiding the user through the desired path.

Web & Mobile applications should validate all data submitted by users. This ensures that data remains well-structured 
and unexpected errors don’t occur. Typically two forms of validation are conducted:

* **Server-side form validation** - Input submitted by the user is being sent to the server and validated using one of 
server side programming languages.
* **Client-side form validation** - User input validated in the user's browser itself, not requiring a round trip to the
 server, so the network traffic which will help your server perform better, typically using script languages such as 
 JavaScript.
 
 In this article, we're going to walk through the process of implementing some basic client-side validation using Vue.JS,
 in fact we are going to take a deeper look into a form that is used on this very site - The New User Registration Form.
 The form is one new members will use when signing up to our free community network-based education and social network for 
 software professionals.
 
 This site has been developed making use of [Gridsome - A Jamstack framework for Vue.js](https://gridsome.org/ "Gridsome - A Jamstack framework for Vue.js"),
 and we can use all the power and ease of [Vue - the progressive Javascript framework](https://vuejs.org/ "Vue - the progressive Javascript framework")
 to develop our website.
 
 ### Building the form
 
 We want to develop a basic form which will enable a user to enter their Email Address and Password, to create an account
 on our website. We make use of [nu_id - A trustless decentralised authentication protocol](https://nuid.io/ "Trustless Authentication | nu_id")
 
 The initial form below is fairly simple, but it has just enough complexity in it to provide some examples of validation
 that typically need to be conducted on forms to ensure the validity of data being entered. We have intentionally
 stripped out all the styling in order to make things simpler and to provide focus on the important aspects.
 
 To see the form in action [why not sign up to join our community](https://geekiam.io/auth/register "Join Geek.I.Am Community")
 
 ### Using HTML5 Validation
 
 Initially developers may be tempted to only make use of HTML5 validation, however there are some quirky drawbacks to
 only relying on HTML5 validation and much of it has nothing to do with HTML5 per se, but rather how different browsers 
 implement the standard.  In some cases you will still have users visiting your site using browsers that don't actually 
 support HTML5 or even still using outdated browsers. 
 
 The best solution is to implement a mix of both custom validation and HTML5. This way you will still leverage the semantic
 goodness of using HTML5 controls but also ensuring you implement robust, client side validation. 
 
```vue
 <template>
     <form @submit.prevent="register" method="POST" novalidate>
         <div>
             <label for="email"> Email address </label>
             <div>
                 <input
                     id="email"
                     type="email"
                     v-model="registration.email"
                 />
             </div>
         </div>
 
         <div>
             <label for="password"> Password </label>
             <div>
                 <input
                     id="password"
                     type="password"
                     v-model="registration.password"
                 />
             </div>
         </div>
         <div>
             <label for="confirm_password"> Confirm Password </label>
             <div>
                 <input
                     id="confirm_password"
                     type="password"
                     v-model="registration.confirmPassword"
                 />
             </div>
         </div>
         <div>
               <label for="terms">Accept Terms & Conditions</label>
               <p>By signing up you agree to our<g-link to="/legal/terms"> Terms & Conditions </g-link></p>
        </div>
         <div>
             <span>
                 <button type="submit">Join</button>
             </span>
         </div>
     </form>
 </template>
```

In the form above we have implemented the `@submit.prevent` to prevent the default submission of the form, and actually 
refer to our own Vue function to handle the functionality. We have also included the `novalidate` attribute to indicate 
that the form should not be validated making use of the HTML5 functionality because we will be handling the actual 
validation in our `register` function.

We have also added several controls, making use of the HTML5 semantic markup functionality and we have bound them making
use of the `v-model` to our data model items.

### Validation Rules
In this simple form there are a number of validation rules we need to implement and ensure the user enters the details 
correctly:

1. Ensure the user completes all the required fields
2. Ensure the user enters a valid email address
3. Ensure the user enters a sufficiently secure password
4. Ensure the user enters the same password in the confirm password box
5. Ensure the passwords match before submitting the form
6. Ensure the user confirms they have read the terms and conditions
7. Provide user with sufficient information to successfully complete the form if there are errors
8. If form is valid provide confirmation message the details are accepted
9. If registration is successful provide user with success message
10. Redirect user to stage of the journey

As you will no doubt notice there is a lot of work involved in even the most simple of web and mobile user input forms.

![Geek.I.Am User Registration](/uploads/vue-registration-form.png "Geek.I.Am User Registration")

### Install a Validation Library

In order to help us simply the task of validating the data in our form, we are going to install an additional library 
called [Vuelidate - Simple, lightweight model-based validation for Vue.js 2.0](https://vuelidate.js.org/ "Vuelidate").

Vuelidate provides some powerful features we can utilise:
* Model-based
* Decoupled from templates
* Support for nested models
* Support for function composition
* Support for collection validations
* Dependency free, minimalistic library
* Easy to use with custom validators
* Ability validate from different sources

Vuelidate works well with other libraries such as Moment and VueX and can be added easily added to your project.

### Installing Vuelidate

To install Vuelidate to your project you can simply use your [package manager](https://geekiam.io/how-to-use-package-management-in-java-script-projects/ "How To Use Package Management In JavaScript Projects | Geek.I.Am") 

```shell script
# install using Node Package Manager
npm i vuelidate

# install using yarn
yarn add vuelidate

```

We now need to import the vuelidate library in our `src/main.js` file and define it using `Vue.use()`. This will enable us to 
take advantage of the plugin and use it globally for all the components that require validation.

```javascript

import Vuelidate from 'vuelidate'

export default function (Vue, { router, head, isClient }) {
Vue.use(Vuelidate)
}
```

### Implement Validation

We can implement the validation rules in our `Register.vue` component, essentially what we will do is create a `Model` 
for the shape we like our data represented. This step includes creating an initial JSON object to hold the necessary 
data that will be collected in the form.

We do this by creating an object in the [vue data() function](https://v3.vuejs.org/api/options-data.html "Data function | Vue"), 
which returns a data object for the component instance. We'll create a `registration` object with `email`, `password`, `confirmPassword`,
and `accept`

```javascript
data() {
    return {
        registration: {
               email: '',
               confirmPassword: '',
               password: '',
               accept: '',
        },
        isSubmit: false,
    }
}
```

We can now start to implement the first phase of our validation effort and define the validations required on our object 
properties.  We will making use of methods that have been defined in Vuelidates powerful library to achieve this, so the
first step would be to import the functions we will be explicitly using. At the top of Vue script block we need to import
the functions.

```javascript
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
```

We can now define our validations be creating a new `validations: {}` object in our script block of Vue component.

 
 ```javascript

validations: {
        registration: {
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(10),
            },
            confirmPassword: {
                required,
                sameAsPassword: sameAs('password'),
            },
            accept: {
                required(val) {
                    return val
                },
            },
        },
```

 The validations property creates an object inside the `$v: Object` which you can view by making use of the [Vue Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd "Vue Dev Tools | Chrome Store")
 in the Developer Tools of your browser. Personally I make use of the [Brave Browser - Secure, Fast & Private web browser with Ad Blocker ](https://brave.com/gee392) and have Vue Dev Tools installed.
 
 ![Geek.I.Am User Registration Dev Tools](/uploads/vue-registration-form-dev-tools.png "Geek.I.Am User Registration Dev Tools")

We now need to update our form to update our controls to actually implement the validation logic. We also need to add some
additional controls to our form in order to provide detailed validation error information to assist the user to successfully 
complete the form if there are errors.

We make use of information on the validation state that is exposed through the Vuelidate property `$v`. In fact, 
by inserting `{{ $v }}` into your HTML you can see the entire object it returns, including its properties. 

[Vuelidate](https://vuelidate.netlify.com/#sub-v-values "$v values") `$v values` model represents the current state of 
validation. It does so by defining a set of properties which hold the output of user defined validation functions, 
following the validations option structure. 

### Displaying validation errors



Below is an example, of how this is implemented.

```html
<div>
      <label
           for="email"
           class="block text-sm font-medium leading-5 text-gray-700"
           >Email</label
           >
           <div class="mt-1 relative rounded-md shadow-sm">
             <input
                  id="email"
                  type="email"
                  v-model="registration.email"
                  class="form-input block w-full pr-10 sm:text-sm sm:leading-5"
                  placeholder="you@example.com"
                  aria-invalid="true"
                  aria-describedby="email-error"
                  required
                  :class="{
                     'is-invalid border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red':
                      isSubmit && $v.registration.email.$error,
                  }"
              />
     <div
         class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
        >
        <svg
          :class="{
          'h-5 w-5 text-red-500':
          isSubmit && $v.registration.email.$error,
         }"
       fill="currentColor"
       viewBox="0 0 20 20"
       >
       <path
           fill-rule="evenodd"
           d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
           clip-rule="evenodd"
       />
       </svg>
       </div>
    </div>
    <div v-if="isSubmit && $v.registration.email.$error">
       <p
         v-if="!$v.registration.email.required"
         class="mt-2 text-sm text-red-600"
        id="email-required-error"
      >
       An email is required
     </p>
     <p
       v-if="!$v.registration.email.email"
       class="mt-2 text-sm text-red-600"
       id="email-email-error"
       >
        A valid email address format required
       </p>
       </div>
   </div>
```

The same process will need to updated for all controls that require validation. For the sake of brevity I have not included
the entire code sample here, but you're welcome to view the latest update on our [Github Repository](https://github.com/threenine/geekiam/blob/master/src/pages/Auth/Register.vue "Geek.I.Am Registration Form on Github")

Once we have completed implementing our validation mark-up code, we can now implement the code that makes use of it.

```javascript
 methods: {
        register() {
            // Set the flag to indicate that form has now been submitted
            this.isSubmit = true

            this.$v.$touch()    // Detect the values to ensure they have been changed and have met their validation 

            if (this.$v.$invalid) {
                return     // if validation has failed, simply return and don't allow the user to continue.
            }
          // ......
         // Logic that actually handles the user the registration goes here           
        },
    },
```

### Conclusion 

We have now successfully implemented Form Validation in Vue.js making use of Vuelidate. This is not the end of our data
validation journey, just merely a successful first step in trying to ensure the user completes all the details we require
and in the format we need.
