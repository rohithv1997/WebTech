<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>
<html>
    <head>
        <title>
            Feedback Response
        </title>
    </head>
    <body>

        <center>
            <br><br><br><br><br><br><br><br><br><br>
            <?php
                $first_name=$_POST['first_name'];
                $last_name=$_POST['last_name'];
                $contact=$_POST['Contact'];
                $email=$_POST['email'];
                $comment=$_POST['comments'];
                
                print ('<p style="font-size: 22px; text-align: center; color: white; font-style: italic;">');
                print("Hello $first_name $last_name!<br>");
                print("Thanks for your Feedback<br><br><br><br><br><br><br>");
                print("</p>");
                print ('<p style="font-size: 17px; text-align: center; color: white; font-style: italic;">');
                print("For further assistance, well contact you via your Contact Number $contact <br>");
                print("Check your Email $email for upcoming news and features!");
                print("</p>");
            ?>
        </center>
    </body>
</html>