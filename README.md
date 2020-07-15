# NMS-translator
This translator is a small web app that easily translates from English to one of the four alien languages and vice versa in the video game No Man's Sky.

## How it looks
The site is hosted on Netlify: [nms-translator.netlify.app](http://nms-translator.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/9f655d17-a32b-47a0-b240-ab06ebcab027/deploy-status)](https://app.netlify.com/sites/nms-translator/deploys)

Well I'm not good with front end Web developpment so you just have 2 boxes and a language selector. If anyone is willing to improve this, feel free to contribute!

![Screenshot](https://raw.githubusercontent.com/Absolute-Arthur/NMS-translator/master/Screenshot.png)

## How it's made
The script ([script.js](../script.js)) is fully made in Javascript, and uses a page ([translator.html](../translator.html)) written in HTML. There's no CSS yet.
The dictionnary ([dictionnary.js](../dictionnary.js)) for all the translations is made of four JS associative arrays, named by the language they translate to.

## Where the data comes from
I've taken the data from the Gamepedia Wiki for No Man's Sky. The data has been data-mined and dates back from the version 1.38 (2017).

I am willing to use more up-to-date language data, but I don't know where to find it.

## How you can help
I'm open to contributions! I don't have any particular guideline or rules, however it is my personal project, all my decisions are arbitrary.
