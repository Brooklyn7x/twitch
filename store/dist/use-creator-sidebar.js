"use strict";
exports.__esModule = true;
exports.useCreatorSidebar = void 0;
var zustand_1 = require("zustand");
exports.useCreatorSidebar = zustand_1.create(function (set) { return ({
    collapsed: true,
    onExand: function () { return set(function () { return ({ collapsed: false }); }); },
    onCollapse: function () { return set(function () { return ({ collapsed: true }); }); }
}); });
