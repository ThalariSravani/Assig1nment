<script>
    document.getElementById('jobForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Gather form data
        const jobData = {
            title: document.getElementById('title').value,
            type: document.getElementById('type').value,
            department: document.getElementById('department').value,
            country: document.getElementById('country').value,
            description: document.getElementById('description').value,
            openingDate: document.getElementById('openingDate').value,
        };

        // Log the data (for demonstration)
        console.log('Job data submitted:', jobData);

        // Here you can add code to send data to a server
        // e.g., using fetch() or XMLHttpRequest

        alert('Job data submitted successfully!');
        // Optionally, reset the form
        this.reset();
    });
</script>
```

