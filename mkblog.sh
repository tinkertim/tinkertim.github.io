#!/bin/bash

[ -z "$1" ] && {
    echo "Usage: ./mkblog.sh slug-name"
    echo "You always want to run this on a branch."
    exit 1
}

SLUG=$1

BRANCH=$(git branch --show-current)

[ -z "$BRANCH" ] || [ "$BRANCH" == "main" ] && {
    echo "Could not determine current branch, or current branch is main."
    echo "This script must be run on a branch that is NOT main."
    exit 1
}

echo "Ok! ${BRANCH}"
