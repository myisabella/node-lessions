# learn how to use external modules

## what is package.json?
package.json defines metadata for the project, including project name, location of git repo, authors, etc.. The most important thing is to define dependencies. In this way, during every deployment, we do not need to upload 'node_modules' to server and server just needs to do 'npm install' when gets our project and npm will read the dependencies in package.json and install them under 'node_modules' folder.

