#!/bin/bash
cd /home/kavia/workspace/code-generation/landing-page-for-tourist-4392-4991/LandingpagefortouristMonolithicContainer
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

