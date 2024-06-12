"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    index(ctx) {
        ctx.body = strapi
            .plugin('dashboard')
            .service('myService')
            .getWelcomeMessage();
    },
});
