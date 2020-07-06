'use strict';

/**
 * Jugador.js controller
 *
 * @description: A set of functions called "actions" for managing `Jugador`.
 */

module.exports = {

  /**
   * Retrieve jugador records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.jugador.search(ctx.query);
    } else {
      return strapi.services.jugador.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a jugador record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.jugador.fetch(ctx.params);
  },

  /**
   * Count jugador records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.jugador.count(ctx.query);
  },

  /**
   * Create a/an jugador record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.jugador.add(ctx.request.body);
  },

  /**
   * Update a/an jugador record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.jugador.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an jugador record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.jugador.remove(ctx.params);
  }
};
