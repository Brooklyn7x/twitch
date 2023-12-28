"use client";
"use strict";
exports.__esModule = true;
exports.FollowingSkeleton = void 0;
var useSidebar_1 = require("@/store/useSidebar");
var user_item_1 = require("./user-item");
var Following = function (_a) {
    var data = _a.data;
    var collapsed = useSidebar_1.useSidebar(function (state) { return state; }).collapsed;
    if (!data.length) {
        return null;
    }
    return (React.createElement("div", null,
        !collapsed && (React.createElement("div", { className: "pl-6 mb-4" },
            React.createElement("p", { className: "text-sm text-muted-foreground" }, "Following"))),
        React.createElement("ul", { className: "space-y-2 px-2" }, data.map(function (follow) { return (React.createElement(user_item_1["default"], { key: follow.following.id, username: follow.following.username, imgUrl: follow.following.imageUrl, isLive: true })); }))));
};
exports["default"] = Following;
exports.FollowingSkeleton = function () {
    return (React.createElement("ul", { className: "px-2 pt-2 lg:" }));
};
