// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: June 2023
// This file contains the JS functions for index.html

"use strict"

const quote = async(URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("quote").innerHTML = "<div>" + jsonData.text + "</div>"
  } catch (error) {
    console.log(error)
    document.getElementById("quote").innerHTML = "<div> Error </div>"
  }
}

quote("https://www.jcquotes.com/api/quotes/random")