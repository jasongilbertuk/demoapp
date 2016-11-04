#!/bin/bash
echo "After Install Called"
cd /home/ec2-user/demo
npm install
forever-service install demo --script app.js