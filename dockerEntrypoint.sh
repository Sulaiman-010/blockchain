#!/bin/bash

cd eth
truffle compile
truffle migrate --reset --network production
cd ../ && yarn start