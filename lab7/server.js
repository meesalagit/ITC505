const express = require('express')
const logger = require('morgan')
const path = require('path')

const server = express()

server.use(express.urlencoded({ 'extended': true }))
server.use(logger('dev'))

// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})

// Mad Lib POST route for Lab 7 styled like multi-slot Mad Lib
server.post('/ITC505/lab-7/index.html', (req, res) => {
  const {
    animal,
    noun1,
    place,
    pluralNoun,
    adjective1,
    bodyPart,
    noun2,
    noun3,
    verbEd1,
    adjective2,
    noun4,
    verbEd2,
    adverb
  } = req.body

  // basic validation
  if (!animal || !noun1 || !place || !pluralNoun || !adjective1 ||
      !bodyPart || !noun2 || !noun3 || !verbEd1 || !adjective2 ||
      !noun4 || !verbEd2 || !adverb) {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Mad Lib Submission Failed</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 2rem auto; background-color: #f0f0ff; }
          .card { border: 1px solid #999; padding: 1.5rem; border-radius: 8px; background: #ffffff; }
          a { display: inline-block; margin-top: 1rem; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Submission Failed</h1>
          <p>Please fill out <strong>all</strong> fields before submitting.</p>
          <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
        </div>
      </body>
      </html>
    `)
    return
  }

  const madLib = `
    It was a quiet night in ${place} when a ${animal} walked into town carrying a ${noun1}.
    Everyone stopped and stared, their ${pluralNoun} completely ${adjective1}.
    The ${animal} lifted its ${bodyPart}, placed the ${noun2} on the ${noun3}, and ${verbEd1} loudly.
    The crowd, feeling ${adjective2}, grabbed a nearby ${noun4} and ${verbEd2} ${adverb} down the street.
    From that day on, no one in ${place} ever forgot the night a ${animal} changed everything.
  `

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Your Mad Lib Story</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 2rem auto; background-color: #e4e4ff; }
        .card { border: 1px solid #666; padding: 1.5rem; border-radius: 8px; background: #ffffff; line-height: 1.6; }
        h1 { text-align: center; }
        a { display: inline-block; margin-top: 1rem; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>A Wild Story</h1>
        <p>${madLib}</p>
        <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
      </div>
    </body>
    </html>
  `)
})

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))

let port = 80
if (process.argv[2] === 'local') {
  port = 8080
}
server.listen(port, () => console.log('Ready on localhost!'))
