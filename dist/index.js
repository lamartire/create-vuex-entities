'use strict';

var createVuexEntities = {
  createActions: createActions,
  createEntities: createEntities,
  createGetters: createGetters,
  createModules: createModules,
  createMutations: createMutations
};

/**
 * Create entities by type
 * @param {String} type - Entitity type
 * @param {String} prefix - Entities prefix
 * @param {Array} entitiesList - Array of entities list
 * @returns {Object} entities
 */
function createEntities(type, prefix, entitiesList) {
  var entityType = prefix + '/' + type + '/';
  var entities = {};

  entitiesList.map(function (entity) {
    return entities[entity] = '' + entityType + entity;
  });

  return entities;
}

/**
 * Create mutations list
 * @param {String} prefix - Entities prefix
 * @param {Array} mutations - List of mutations names
 */
function createMutations(prefix, mutations) {
  return createEntities('mutation', prefix, mutations);
}

/**
 * Create getters list
 * @param {String} prefix - Entities prefix
 * @param {Array} getters - List of getters names
 */
function createGetters(prefix, getters) {
  return createEntities('getter', prefix, getters);
}

/**
 * Create actions list
 * @param {String} prefix - Entities prefix
 * @param {Array} actions - List of actions names
 */
function createActions(prefix, actions) {
  return createEntities('action', prefix, actions);
}

/**
 * Create modules list
 * @param {String} prefix - Entities prefix
 * @param {Array} modules - List of modules names
 */
function createModules(prefix, modules) {
  return createEntities('module', prefix, modules);
}

module.exports = createVuexEntities;
