# Twitter Bot Tutorial

## Twitter

First, you need a Twitter Account and Login Keys. In case you have

Step 1: Set Up a New Account With Twitter
Go to https://twitter.com and create a new account. In case you already have an account, use a different email address. You can only have one account connected with it.

Step 2: Create a Twitter App for Your Bot
Go to https://apps.twitter.com to get this started. Click “Create New App.”

Step 3: Create Major Keys and Tokens
Click on the “Keys and Access Tokens” Tab. Scroll down and click “Create my access token”. Leave this window open, you need the information in a later step.

## Setup your computer

This project uses Node.js, a JavaScript runtime. The easiest way ist to download and install it on your own computer.
Go to https://nodejs.org/en/download/, download the version for your system and install it.

In case you never worked before with your command line, look at introduction for [Mac OSX](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line) and [Windows](http://www.bleepingcomputer.com/tutorials/windows-command-prompt-introduction/).

In case you don't have a text editor installed, just download https://atom.io.

That's all we need: Node.js and a text editor.

## Building the bot

Download the [files](https://github.com/silvioheinze/twitter-bot-example/archive/master.zip) of this project and unpack it.

Open your command line and go to this folder. There should be some files there like `README.md`, `bot1.js` and `config.js`.
Run `npm install twit` in that directory. This installs some helpers we need to communicate with Twitter.

Open the file `config.js` with your text editor and copy the keys and tokens from https://apps.twitter.com in there.

Now type the following in the command line in your project directory: `node bot1.js`


## Bot examples

### bot1 - Send a tweet with a random number every hour

To run, type the following in the command line in your project directory: `node bot1.js`

### bot2 - Search for tweets with a hashtag and retweets the latest one

To run, type the following in the command line in your project directory: `node bot2.js`

### bot3 - Send a tweet mentioning another account

To run, type the following in the command line in your project directory: `node bot3.js`

### bot4 - Send a tweet mentioning every follower of an account

To run, type the following in the command line in your project directory: `node bot4.js`


## More resources

https://www.npmjs.com/package/twit
