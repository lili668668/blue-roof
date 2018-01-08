const express = require('express')

var handleError = (err, req, res, next) => {
  res.status(500).json({error: err.name})
}

module.exports = handleError
