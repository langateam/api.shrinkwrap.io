'use strict'

const Model = require('trails-model')

/**
 * @module Module
 * @description TODO document Model
 */
module.exports = class Module extends Model {

  static config () {
  }

  static schema (table) {
    table.increments('id').primary()
    table.string('name')
  }
}
