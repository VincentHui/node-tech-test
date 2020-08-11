# node-tech-test

This is a quick tech test which collects information from three different servers and outputs their sorted results. It uese express for quick http serving logic and axios for async requests.

use `npm i` to install the packages and `npm start` to start the express server, then input a command like such to get results
`http://localhost:3000/?sort=priority`
it returns a string with line breaks describing each servers id, category, priority and description. It also prints the output to the servers console.

![screenshot](https://git-repo-img.s3.eu-west-2.amazonaws.com/nodeTechTest.png)
