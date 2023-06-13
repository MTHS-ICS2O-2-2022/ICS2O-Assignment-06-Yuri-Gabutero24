// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: June 2023
// This file contains the JS functions for index.html

"use strict"

const picture = async(URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    document.getElementById("duck").innerHTML = `<img src="${jsonData.url}" alt="random duck picture" />`
    } catch (error) {
    console.log(error)
  }
}

picture(
  "https://random-d.uk/api/randomimg"
)