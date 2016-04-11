<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><img src="http://i.imgur.com/6t9fvhp.png" class="img-responsive smaller-logo" alt="logo"></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <?php if (basename($_SERVER['PHP_SELF'])=='login.php') { ?>
          <li class="active"><a href="#">Login Page</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
        <?php } elseif (basename($_SERVER['PHP_SELF'])=='index.php') { ?>
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">My Profile</a></li>
          <li><a href="users.php">Users</a></li>
        <?php } elseif (basename($_SERVER['PHP_SELF'])=='users.php') { ?>
          <li><a href="index.php">Home</a></li>
          <li><a href="#">My Profile</a></li>
          <li class="active"><a href="#">Users</a></li>
        <?php } ?>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <?php if (basename($_SERVER['PHP_SELF'])=='login.php') { ?>
          <li><a href="login.php"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        <?php } elseif (basename($_SERVER['PHP_SELF'])!='login.php') { ?>
          <li><a href="login.php"><span class="glyphicon glyphicon-user"></span> Settings</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
          <?php } ?>
      </ul>
    </div>
  </div>
</nav>
