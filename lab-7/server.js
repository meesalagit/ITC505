const express = require('express');
const logger = require('morgan');
const path = require('path');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});

function renderMadLibPage(storyHtml = '') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Lab 7: Mad Lib</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/ITC505/lab-7/style.css">
</head>
<body>
  <div class="page-wrapper">
    <header class="site-header">
      <h1>Mad Libs</h1>
      <h2>A Custom Story Ad-Lib</h2>
    </header>
    <main>
      <section class="madlib-card">
        <h3 class="madlib-title">A Fun Story Ad-Lib</h3>
        <form id="madLibForm" action="/ITC505/lab-7" method="POST">
          <table class="madlib-table">
            <tr><td class="label-cell"><label for="animal">ANIMAL</label></td><td><input type="text" id="animal" name="animal" required></td></tr>
            <tr><td class="label-cell"><label for="noun1">NOUN</label></td><td><input type="text" id="noun1" name="noun1" required></td></tr>
            <tr><td class="label-cell"><label for="place">PLACE</label></td><td><input type="text" id="place" name="place" required></td></tr>
            <tr><td class="label-cell"><label for="pluralNoun">NOUN (PLURAL)</label></td><td><input type="text" id="pluralNoun" name="pluralNoun" required></td></tr>
            <tr><td class="label-cell"><label for="adjective1">ADJECTIVE</label></td><td><input type="text" id="adjective1" name="adjective1" required></td></tr>
            <tr><td class="label-cell"><label for="bodyPart">BODY PART</label></td><td><input type="text" id="bodyPart" name="bodyPart" required></td></tr>
            <tr><td class="label-cell"><label for="noun2">NOUN</label></td><td><input type="text" id="noun2" name="noun2" required></td></tr>
            <tr><td class="label-cell"><label for="noun3">NOUN</label></td><td><input type="text" id="noun3" name="noun3" required></td></tr>
            <tr><td class="label-cell"><label for="verbEd1">VERB ENDING IN "ED"</label></td><td><input type="text" id="verbEd1" name="verbEd1" required></td></tr>
            <tr><td class="label-cell"><label for="adjective2">ADJECTIVE</label></td><td><input type="text" id="adjective2" name="adjective2" required></td></tr>
            <tr><td class="label-cell"><label for="noun4">NOUN</label></td><td><input type="text" id="noun4" name="noun4" required></td></tr>
            <tr><td class="label-cell"><label for="verbEd2">VERB ENDING IN "ED"</label></td><td><input type="text" id="verbEd2" name="verbEd2" required></td></tr>
            <tr><td class="label-cell"><label for="adverb">ADVERB</label></td><td><input type="text" id="adverb" name="adverb" required></td></tr>
          </table>
          <div class="button-row"><button type="submit" class="go-button">Go Mad!</button></div>
        </form>
      </section>
      ${storyHtml ? `<section class="madlib-card result-card"><h3 class="madlib-title">Your Story</h3><div class="story-box">${storyHtml}</div></section>` : ''}
    </main>
    <footer><p>Last updated: <span id="lastModified"></span></p></footer>
  </div>
  <script>var x=document.lastModified;document.getElementById('lastModified').textContent=x;</script>
</body>
</html>`;
}

server.post('/ITC505/lab-7', (req, res) => {
  const {animal,noun1,place,pluralNoun,adjective1,bodyPart,noun2,noun3,verbEd1,adjective2,noun4,verbEd2,adverb}=req.body;
  if(!animal||!noun1||!place||!pluralNoun||!adjective1||!bodyPart||!noun2||!noun3||!verbEd1||!adjective2||!noun4||!verbEd2||!adverb){
    return res.send(renderMadLibPage('<p style="color:red;">Please fill out all fields.</p>'));
  }
  const story = `One night, a ${animal} and a ${noun1} were walking through ${place}. Suddenly, a group of ${pluralNoun} appeared, looking very ${adjective1}. With a brave ${bodyPart}, our hero grabbed a ${noun2} and ${verbEd1} forward. The ${noun3} nearby started to glow ${adjective2}, and a mysterious ${noun4} ${verbEd2} ${adverb} into the darkness. It was a night nobody would ever forget!`.replace(/\n/g,'<br>');
  res.send(renderMadLibPage(story));
});

const publicServedFilesPath=path.join(__dirname,'public');
server.use(express.static(publicServedFilesPath));

let port=80;if(process.argv[2]==='local'){port=8080;}
server.listen(port,()=>{console.log(`Ready on localhost, port ${port}!`)});
