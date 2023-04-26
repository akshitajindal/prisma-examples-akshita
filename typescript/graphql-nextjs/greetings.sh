#!/bin/sh

export $(cat .env.local)
if [ 0 != 0 ] && [ "$1" = "self-serve-app" ]
then
    echo Hello $NEXT_PUBLIC_TEMP
fi
echo $1
cp -rf packages/newpackages/standalone standalone
rm -rf packages
touch standalone/abc.txt
mkdir standalone/plugins
mv standalone packages