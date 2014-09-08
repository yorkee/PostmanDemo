#! /bin/bash

type node >/dev/null 2>&1 || { echo >&2 "I require node.js, but it's not installed.  Aborting."; exit 1; }
type mongo >/dev/null 2>&1 || { echo >&2 "I require MongoDB, but it's not installed.  Aborting."; exit 1; }

git pull
echo >&2 "Found node.js and MongoDB..."
echo >&2 "Invoking node.js package manager for dependencies..."
npm install
mkdir mongodb
MONGO_RUNNING=$(ps -ef | grep "mongod" | grep -v "grep" | wc -l)
if [ $MONGO_RUNNING != '1' ]; then
	echo 2>&1 "Starting MongoDB..."
	mongod --config ./mongodb.config --dbpath ./mongodb &
else
	echo 2>&1 "MongoDB is already running"
fi

node demo.js



# research
#npm forever
#redis