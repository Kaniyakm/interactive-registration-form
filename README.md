1. How did event.preventDefault() help in handling form submission?

event.preventDefault() stops the browser from performing the default form submission action, that normally refreshes the page. I was able to run my own custom validation functions, show error messages, and control what happens when the form is submitted.

2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML5 validation attributes provides built-in browser validation with no extra code. They are fast, simple, and help catch basic input errors.

JavaScript validation allows for custom, dynamic, and real-time checks that HTML5 alone cannot perform.

Using both combines the strengths of each:HTML5 handles basic validation rules.JavaScript provides custom messages, real-time feedback, and more advanced logic.This creates a smoother and more user-friendly form experience.

3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

I used localStorage.setItem() to save the username when the form successfully submitted, and localStorage.getItem() to pre-fill the username field when the page reloads. This improves user convenience and experience.

The localStorage has limitations because it is not secure, because the data is stored in plain text.Anyone with access to the device can view or modify the stored information.

It should never be used to store sensitive personal data.


4. Describe a challenge you faced in implementing real-time validation and how you solved it.

A challenge was making sure that the real-time validation didn’t conflict with the final validation on form submission. Some errors would still show even after fixing the input. I solved this by creating separate validation functions for each field and attaching them to the input event listener. Each function clears the error when the input becomes valid. 

5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

I created helper functions (showError() and clearError()) to manage how error messages were displayed. Each function updated the <span> elements next to the inputs. I also wrote the messages in simple, direct language so users could understand what needed to be fixed. By combining these functions with real-time validation, the form showed helpful feedback at the right moment without confusing the user.