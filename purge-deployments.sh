#!/bin/bash

# Script to purge deployments

# Delete deployment-related files
rm -f deployment-file1.txt
rm -f deployment-file2.txt

# Remove deployment-related directories
rm -rf /path/to/deployment-directory1
rm -rf /path/to/deployment-directory2

# Clean up deployment-related configurations
unset DEPLOYMENT_CONFIG1
unset DEPLOYMENT_CONFIG2

echo "Deployment purging completed."
