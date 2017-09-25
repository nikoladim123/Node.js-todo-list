
<?php

$user = $_POST['nametest'];
$passt = $_POST['passtest'];

$handler = fopen("storeData",'w');
fwrite($handler,$user);
fwrite($handler,$passt);
fclose($handler);
?>
