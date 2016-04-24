'use strict'

const Model = require('trails-model')

/**
 * @module Slug
 * @description A shrinkwrapped tarball
 */
module.exports = class Slug extends Model {

  static config () {
  }

  static schema (table) {
    table.increments('id').primary()
    table.foreign('module').references('module.id')
    table.jsonb('env')
  }
}
