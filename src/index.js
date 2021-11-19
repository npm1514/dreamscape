import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import cron from 'node-cron';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';import Cryptr from 'cryptr';
const cryptr = new Cryptr(config.key);
import config from './config';

import { HomeRoot, GardensRoot, LandscapingRoot, ServicesRoot, ContactRoot } from './roots';

var PORT = process.env.PORT || 3003;

const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

cron.schedule('* * 1 * *', () => {
  fetch('https://dreamscape.herokuapp.com/')
  .then(res => console.log("requested at " + new Date()));
});

var dataObj = {},
homeBundle = "",
gardensBundle = "",
landscapingBundle = "",
servicesBundle = "",
contactBundle = "";
fs.readFile('./dist/js/home.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  homeBundle = data || "";
})
fs.readFile('./dist/js/gardens.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  gardensBundle = data || "";
})
fs.readFile('./dist/js/landscaping.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  landscapingBundle = data || "";
})
fs.readFile('./dist/js/services.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  servicesBundle = data || "";
})
fs.readFile('./dist/js/contact.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  contactBundle = data || "";
})
app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "home"));
});
app.get('/gardens', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, gardensBundle, GardensRoot, "gardens"));
});
app.get('/landscaping', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, landscapingBundle, LandscapingRoot, "landscaping"));
});
app.get('/services', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, servicesBundle, ServicesRoot, "services"));
});
app.get('/contact', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contactBundle, ContactRoot, "contact"));
});;

app.post('/emailer', (req, res) => {
  let { email, name, description, phone } = req.body;
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(config.nodemailerEmail),
      pass: cryptr.decrypt(config.nodemailerPW)
    }
  });

  transporter.sendMail({
    from: email,
    to: cryptr.decrypt(config.nodemailerEmail),
    subject: 'Nelson Rozier: Online Inquiry',
    html: `
      <h3>Hi! The following person has submitted a message.<h3/>
      <h4>Name: ${name}</h4>
      <h4>Email: ${email}</h4>
      <h4>Phone: ${phone}</h4>
      <h4>Message: ${description}</h4>
    `
  }, (error, info) => {
    if (error) res.send({error: error});
    else res.send({response: info});
  });
})

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});



app.get('/health', (req, res) => res.send('OK'));


app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
        <html lang="en">
          <head>
            <link data-default-icon="/images/ico.ico" data-badged-icon="/images/ico.ico" rel="shortcut icon" href="/images/ico.ico">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>${title}</title>
            <meta name="Description" content="${title}">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">
            <style>
              body { margin: 0; font-family: 'Open Sans Condensed', sans-serif; cursor: url('/images/circle.png'); }
              a { text-decoration: none; color: #000; }
            </style>
            ${styles}
          </head>
          <body>
            <script>window.os = window.os || {};</script>
            <script>window.__DATA__=${dataString}</script>
            <div id="app" role="main">${body}</div>
            <script>${bundle}</script>
          </body>
        </html>
      `;
}

function errHandle(err){
    console.log(err);
}
