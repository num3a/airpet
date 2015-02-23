Structuring your application

A Meteor application is a mix of client-side JavaScript that runs inside a web browser or PhoneGap mobile app, server-side JavaScript that runs on the Meteor server inside a Node.js container, and all the supporting HTML templates, CSS rules, and static assets. Meteor automates the packaging and transmission of these different components, and it is quite flexible about how you choose to structure those components in your file tree.

Special Directories

By default, any JavaScript files in your Meteor folder are bundled and sent to the client and the server. However, the names of the files and directories inside your project can affect their load order, where they are loaded, and some other characteristics. Here is a list of file and directory names that are treated specially by Meteor:

client

Any directory named client is not loaded on the server. Similar to wrapping your code in if (Meteor.isClient) { ... }. All files loaded on the client are automatically concatenated and minified when in production mode. In development mode, JavaScript and CSS files are not minified, to make debugging easier. (CSS files are still combined into a single file for consistency between production and development, because changing the CSS file's URL affects how URLs in it are processed.)

HTML files in a Meteor application are treated quite a bit differently from a server-side framework. Meteor scans all the HTML files in your directory for three top-level elements: <head>, <body>, and <template>. The head and body sections are separately concatenated into a single head and body, which are transmitted to the client on initial page load.

server

Any directory named server is not loaded on the client. Similar to wrapping your code in if (Meteor.isServer) { ... }, except the client never even receives the code. Any sensitive code that you don't want served to the client, such as code containing passwords or authentication mechanisms, should be kept in the server directory.

Meteor gathers all your JavaScript files, excluding anything under the client, public, and private subdirectories, and loads them into a Node.js server instance. In Meteor, your server code runs in a single thread per request, not in the asynchronous callback style typical of Node. We find the linear execution model a better fit for the typical server code in a Meteor application.

public

All files inside a top-level directory called public are served as-is to the client. When referencing these assets, do not include public/ in the URL, write the URL as if they were all in the top level. For example, reference public/bg.png as <img src='/bg.png' />. This is the best place for favicon.ico, robots.txt, and similar files.

private

All files inside a top-level directory called private are only accessible from server code and can be loaded via the Assets API. This can be used for private data files and any files that are in your project directory that you don't want to be accessible from the outside.

client/compatibility

This folder is for compatibility JavaScript libraries that rely on variables declared with var at the top level being exported as globals. Files in this directory are executed without being wrapped in a new variable scope. These files are executed before other client-side JavaScript files.

tests

Any directory named tests is not loaded anywhere. Use this for any local test code.

Files outside special directories

All JavaScript files outside special directories are loaded on both the client and the server. That's the place for model definitions and other functions. Meteor provides the variables Meteor.isClient and Meteor.isServer so that your code can alter its behavior depending on whether it's running on the client or the server.

CSS and HTML files outside special directories are loaded on the client only, and cannot be used from server code.

Example File Structure

The file structure of your Meteor app is very flexible. Here is an example layout that takes advantage of some of the special folders mentioned above.

lib/                      # common code like collections and utilities
lib/methods.js            # Meteor.methods definitions
lib/constants.js          # constants used in the rest of the code

client/compatibility      # legacy libraries that expect to be global
client/lib/               # code for the client to be loaded first
client/lib/helpers.js     # useful helpers for your client code
client/body.html          # content that goes in the <body> of your HTML
client/head.html          # content for <head> of your HTML: <meta> tags, etc
client/style.css          # some CSS code
client/<feature>.html     # HTML templates related to a certain feature
client/<feature>.js       # JavaScript code related to a certain feature

server/lib/permissions.js # sensitive permissions code used by your server
server/publications.js    # Meteor.publish definitions

public/favicon.ico        # app icon

settings.json             # configuration data to be passed to meteor --settings
mobile-config.js          # define icons and metadata for Android/iOS
You can also model your directory structure after the example apps. Run meteor
create --example todos and explore the directories to see where all the files in a real app could go.

File Load Order

It is best to write your application in such a way that it is insensitive to the order in which files are loaded, for example by using Meteor.startup, or by moving load order sensitive code into packages, which can explicitly control both the load order of their contents and their load order with respect to other packages. However sometimes load order dependencies in your application are unavoidable.

When not using special filenames and directories:

Files in subdirectories are loaded before files in parent directories, so that files in the deepest subdirectory are loaded first, and files in the root directory are loaded last. - Within a directory, files are loaded in alphabetical order by filename.
Below is a complete list of special file and directory names that control file load order:

lib

After sorting as described above, all files under directories named lib are moved before everything else, preserving their order.

main.*

All files that match main.* are moved after everything else, preserving their order.

Organizing Your Project

There are three main ways to organize your files into features or components. Let's say we have two types of objects in our project: apples and oranges.

Method 1: Root-Level Folders
Since the special client, server, and lib directories work if they are anywhere in the path, you can use top-level folders to organize code into modules:

apples/lib/               # code for apple-related features
apples/client/
apples/server/

oranges/lib/              # code for orange-related features
oranges/client/
oranges/server/
Method 2: Folders inside client/ and server/
lib/apples/               # common code for apples
lib/oranges/              # and oranges

client/apples/            # client code for apples
client/oranges/           # and oranges

server/apples/            # server code for apples
server/oranges/           # and oranges
Method 3: Packages
This is the ultimate in code separation, modularity, and reusability. If you put the code for each feature in a separate package, the code for one feature won't be able to access the code for the other feature except through exports, making every dependency explicit. This also allows for the easiest independent testing of features. You can also publish the packages and use them in multiple apps with meteor add.

packages/apples/package.js     # files, dependencies, exports for apple feature
packages/apples/<anything>.js  # file loading is controlled by package.js

packages/oranges/package.js    # files, dependencies, exports for orange feature
packages/oranges/<anything>.js # file loading is controlled by package.js
