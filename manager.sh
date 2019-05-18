#!/bin/bash
# Replace 'node app.js' with the command to start your server
# Originally called 'restarter.sh', this has change to 'manager.sh' as it is a far more suitible name to its role.

# NOTES:
# Instead of running your server directly, run this.

echo "Server Manager Started"

while true
do

if ! nc -vz 127.0.0.1 80 &> /dev/null; then
    echo "Server down"
    nohup node app.js &>/dev/null &
    echo "Server Down | $(date)" >> serverlog.txt
else
    echo "Server up"
fi

sleep 30

done
