#!/bin/sh

# Invalid
./auth-service-model/build/bin/native/releaseExecutable/auth-service-model.kexe 2200770212727078

echo ""

# Valid
./auth-service-model/build/bin/native/releaseExecutable/auth-service-model.kexe 2200770212727079
