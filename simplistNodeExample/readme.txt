Install Node.js
	Download from http://nodejs.org/download/
	Open installer and follow instructions
Install MongoDB: 
	brew install mongodb
	sudo mkdir /data/db
	sudo chown `id -u` /data/db
Change directory to mockServer
	cd mockServer
Install Dependencies, such as Express and Mongoose:
	./install.sh
Start MongoDB and Fake Server:
	./start-server.sh <exampleX.js>
	(exampleX.js is either example1.js, example2.js, example3.js or example4.js)



