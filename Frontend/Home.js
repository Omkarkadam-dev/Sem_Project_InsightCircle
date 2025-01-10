document.getElementById('counselingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Your message has been submitted successfully!');
    this.reset();  // Reset form fields after submission
});
