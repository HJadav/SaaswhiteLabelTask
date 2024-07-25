#!/bin/bash

# Determine the environment file based on the build configuration
ENVFILE=${ENVFILE:-$(SRCROOT)/../.env}

# Log the environment file being used
echo "Using environment file: ${ENVFILE}"

# Ensure the environment file exists
if [ ! -f "${ENVFILE}" ]; then
  echo "Error: Environment file ${ENVFILE} does not exist."
  exit 1
fi

# Set up the environment for react-native-config
export ENVFILE=${ENVFILE}

# Run the react-native-config build script
../../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb

# Print the environment variables to verify
echo "Environment Variables:"
env
