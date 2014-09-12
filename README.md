#Getting Started
* [Getting Started](#setting-up-and-getting-started "Setting up and getting started")
* [Sample API](API.md "Sample API document")

##Setting Up and Getting Started
* Download and install [NodeJS](http://nodejs.org/download)  
* Open installer and follow instructions  
* Install MongoDB:  
`brew install mongodb`  
	* If MongoDB fails to include appropriate symlinks, either include its location in your PATH environment variable—`export PAPTH=/usr/local/Cellar/mongodb/[version number]/bin:$PATH`—or manually link the files—`ln -s /usr/local/Cellar/mongodb/[version number]/bin/* /usr/local/bin/`
`cd simplestNodeExample/`  
* Install dependencies such as Express and Mongoose:  
`./install.sh`  
* Start MongoDB and Fake Server:  
`./start-server.sh <exampleX.js>` [`example1.js`|`example2.js`|`example3.js`]  

