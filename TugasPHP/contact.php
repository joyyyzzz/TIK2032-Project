<?php
// Database configuration
$servername = "localhost";
$username = "root";  // Your MySQL username
$password = "password";  // Your MySQL password
$dbname = "messages";  // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if all required fields are set and not empty
    $fullname = isset($_POST['fullname']) ? trim($_POST['fullname']) : null;
    $email = isset($_POST['email']) ? trim($_POST['email']) : null;
    $message = isset($_POST['message']) ? trim($_POST['message']) : null;

    if ($fullname && $email && $message) {
        // Sanitize input data
        $fullname = $conn->real_escape_string($fullname);
        $email = $conn->real_escape_string($email);
        $message = $conn->real_escape_string($message);

        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO contact_messages (fullname, email, message) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $fullname, $email, $message);

        // Execute the statement
        if ($stmt->execute()) {
            echo "Message sent successfully!";
            // Uncomment the following line to redirect to a thank you page
            // header("Location: thank_you.html");
            // exit();
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "All form fields are required.";
    }
}

// Close the connection
$conn->close();
?>
