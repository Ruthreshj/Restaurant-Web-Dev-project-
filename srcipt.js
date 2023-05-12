function submitForm(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var people = document.getElementById('people').value;
    var comments = document.getElementById('comments').value;
  
    // Process form data (e.g., send it to a server or display a confirmation message)
    // ...
  
    // Reset the form
    event.target.reset();
  }
  