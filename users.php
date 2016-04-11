<?php

include_once 'model/user.php';

if ($_COOKIE) {
  $credentials = true;
  $guest = false;
}

?>

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
  <?php include "views/header.php" ?>

  <div class="container-fluid">
    <?php if ($credentials) { ?>
    <div class="col-xs-12 col-md-3">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="panel panel-success">
            <div class="panel-heading padding-bottom-0">
              <div class="row">
                <div class="col-xs-3">
                  <img class="thumbnail thumbnail-md" src="https://www.junkfreejune.org.nz/themes/base/production/images/default-profile.png"
                    alt="photo">
                </div>
                <div class="col-xs-9">
                  <p>Damian Ali</p>
                </div>
              </div>
            </div>
            <div class="panel-body">sum dolor sit amet, consectetur adipisicing elit. Debitis ratione delectus veniam
              eligendi porro recusandae, placeat necessitatibus optio deserunt ducimus aspernatur
              ullam nobis, vitae natus</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="panel panel-success">
            <div class="panel-heading padding-bottom-0">
              <div class="row">
                <div class="col-xs-3">
                  <img class="thumbnail thumbnail-md" src="https://www.junkfreejune.org.nz/themes/base/production/images/default-profile.png"
                    alt="photo">
                </div>
                <div class="col-xs-9">
                  <p>Rudy Rigot</p>
                </div>
              </div>
            </div>
            <div class="panel-body">sum dolor sit amet, consectetur adipisicing elit. Debitis ratione delectus veniam
              eligendi porro recusandae, placeat necessitatibus optio deserunt ducimus aspernatur
              ullam nobis, vitae natus</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-6 panel-group">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="panel panel-default">
            <div class="panel-heading padding-bottom-0">
              <div class="row">
                <div class="col-xs-9 padding-side-10">
                  <p>All Users</p>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <?php foreach ($users as &$user) { ?>
                <p><?php echo $user["full_name"]; ?></p>
              <?php } ?>
            </div>
          </div>
        </div>
      </div>
      <br>
    </div>
    <div class="col-xs-12 col-md-3">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="panel panel-success">
            <div class="panel-heading padding-bottom-0">
              <div class="row">
                <div class="col-xs-3">
                  <img class="thumbnail thumbnail-md" src="https://www.junkfreejune.org.nz/themes/base/production/images/default-profile.png"
                    alt="photo">
                </div>
                <div class="col-xs-9">
                  <p>Damian Ali</p>
                </div>
              </div>
            </div>
            <div class="panel-body">sum dolor sit amet, consectetur adipisicing elit. Debitis ratione delectus veniam
              eligendi porro recusandae, placeat necessitatibus optio deserunt ducimus aspernatur
              ullam nobis, vitae natus</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="panel panel-success">
            <div class="panel-heading padding-bottom-0">
              <div class="row">
                <div class="col-xs-3">
                  <img class="thumbnail thumbnail-md" src="https://www.junkfreejune.org.nz/themes/base/production/images/default-profile.png"
                    alt="photo">
                </div>
                <div class="col-xs-9">
                  <p>Rudy Rigot</p>
                </div>
              </div>
            </div>
            <div class="panel-body">sum dolor sit amet, consectetur adipisicing elit. Debitis ratione delectus veniam
              eligendi porro recusandae, placeat necessitatibus optio deserunt ducimus aspernatur
              ullam nobis, vitae natus</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <?php } else { ?>
  <div class="container-fluid">
    <div class="jumbotron">
      <h1 class="padding-side-20">VentLog - Let it out!</h1>
      <p class="padding-side-10">VentLog is the leading website to vent to world. Post under different aliases for any reason
        and see that you're not alone!</p>
    </div>
  </div>
  <?php } ?>

  <?php include 'views/footer.php'; ?>

</body>

</html>
