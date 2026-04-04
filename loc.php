<?php
$port = $_GET['p'] ?? '80';
$path = $_GET['path'] ?? '';

header("Location: http://127.0.0.1:$port/$path");
exit();
