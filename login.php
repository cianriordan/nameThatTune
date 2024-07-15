
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="style.css" />

  </head>

  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="index.html">Name That Tune</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="index.html">Return Home</a></li>
        </ul>
      </div>
    </nav>
    
    <div class="bodylogin">
    <form class="login-form" action="login.php" method="post">
      <h2>Welcome Back</h2>

  <div class="form-container">

    <input type="text" name="username" placeholder="Username" required />
    <input type="password" name="password" placeholder="Password" required />
    <input type="submit"></input>
    <span>
      Don't have an account yet?
      <a href="signup.php">Create One Today</a></span>
    </div>
    </form>
    </div>

    <!-- <?php
require 'db.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    // Check if all fields are filled
    if (empty($username) || empty($password)) {
        echo "All fields are required.";
    } else {
        // Check user credentials
        $sql = "SELECT id, username, password FROM users WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($id, $username, $hashed_password);
            $stmt->fetch();

            if (password_verify($password, $hashed_password)) {
                // Password is correct, start session
                $_SESSION['id'] = $id;
                $_SESSION['username'] = $username;
                echo "Login successful.";
                // Redirect to a protected page (e.g., dashboard.php)
                header("Location: profile.html");
                exit();
            } else {
                echo "Invalid password.";
            }
        } else {
            echo "No account found with that username.";
        }
        $stmt->close();
    }
}

$conn->close();
?> -->

    <!-- jQuery library -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
    <!-- Popper JS -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
