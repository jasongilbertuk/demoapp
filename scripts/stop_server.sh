#!/bin/bash
echo "Stop Server Called"

# stop demo service, if it exists.    
if service --status-all | grep -Fq 'demo'; then    
	service demo stop
fi
