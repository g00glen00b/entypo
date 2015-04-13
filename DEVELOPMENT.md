Development
===========
This project uses Grunt to build the original SVG files to fonts.

Installation
------------

### Node.js
First, make sure that you installed [Node.js](https://nodejs.org/). Then follow the instructions below to install the necessary tools:

1. Install Grunt
        npm install -g grunt-cli
2. Install project resources (make sure that the project is your working directory)
       npm install

### Fontforge

#### Mac OS X
Make sure that you installed [Brew](http://brew.sh/). Then install Fontforge using:

    brew install fontforge

#### Linux (Debian)
Install Fontforge using `apt-get`:

    sudo apt-get install fontforge

#### Windows
The grunt-webfont package does not officially support Windows.

Running the project
-------------------

Use the following command to create a build:

    grunt build
