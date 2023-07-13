#!/bin/sh

# Front
echo "Running frontend"
npm start --prefix front

# Back
echo "Running backend"
./gradlew :auth-service-model:jsNodeProductionLibraryDistribution :auth-service-web:bootRun

