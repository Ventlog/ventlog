<!DOCTYPE html>
<html lang="en">

<head>
  <title>VentLog</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script src="accessibility-BS/plugins/js/bootstrap-accessibility.js"></script>
  <script src="post_a_status.js"></script>
  <script src="toggle.js"></script>
  <script src="reply.js"></script>
  <script src="load_more.js"></script>
  <script src="ajax.js"></script>
  <link rel="stylesheet" href="accessibility-BS/plugins/css/bootstrap-accessibility.css">
  <link rel="stylesheet" href="ventlogBS.css">
</head>

<body>
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
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">My Profile</a></li>
          <li><a href="#">Users</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="jumbotron">
    <h1 class="padding-side-20">VentLog - Let it out!</h1>
    <p class="padding-side-10">VentLog is the leading website to vent to world. Post under different aliases for any reason
      and see that you're not alone!</p>
  </div>
  <div class="container"
    <div class="row">
      <div class="col-xs-12 col-sm-4">
        <form role="form" action="index.php" method="post">
          <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" name="login">
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" name="pwd">
          </div>
          <div class="checkbox">
            <label><input type="checkbox"> Remember me</label>
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    </div>

    <br>
  </div>

  <div class="footer container-fluid">
    <h5 class="">&copy; 2016 VentLog, Inc.</h5>
  </div>

</body>

</html>
