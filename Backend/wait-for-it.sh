#!/usr/bin/env bash
#   Use this script to test if a TCP host/port is available

set -e

host="$1"
port="$2"
shift 2
cmd="$@"

until nc -z "$host" "$port"; do
  echo "En attente de $host:$port..."
  sleep 1
done

>&2 echo "$host:$port est disponible !"
exec $cmd
