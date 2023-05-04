#!/bin/bash

concurrently -k -s first "yarn build"\
                         "node logger.mjs"