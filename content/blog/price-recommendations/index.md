---
title: Price Recommendations
date: "2019-08-24"
description: "Used as a backend to a recommendation price system. The project is based on an NodeJS AWS lambda which receives parameters and returns a price value. This price is updated multiple times a year using a python scraper that fetch information from a crowd-sourced global database of reported consumer prices, and then has some business logic on top of those results. The final results are then store on a DyanmoDB table and serve has response for the API."
technologies: "NodeJS, Python, AWS Lambda, API Gateway, DynamoDB, Serverless"
---

