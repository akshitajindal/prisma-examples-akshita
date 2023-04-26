#!/bin/sh

export $(cat .env.local)
echo Hello $NEXT_PUBLIC_TEMP
echo "$1"
echo Hey there