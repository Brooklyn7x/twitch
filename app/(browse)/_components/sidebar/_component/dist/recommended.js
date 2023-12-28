"use client";
"use strict";
exports.__esModule = true;
var useSidebar_1 = require("@/store/useSidebar");
var user_item_1 = require("./user-item");
var Recommended = function (_a) {
    var data = _a.data;
    var collapsed = useSidebar_1.useSidebar(function (state) { return state; }).collapsed;
    var showLabel = !collapsed && data.length > 0;
    return (React.createElement("div", null,
        showLabel && (React.createElement("div", { className: "pl-6 mb-4" },
            React.createElement("p", { className: "text-sm text-muted-foreground" }, "Recommended"))),
        React.createElement("ul", { className: "space-y-2 px-2" }, data.map(function (user) { return (React.createElement(user_item_1["default"], { key: user.id, username: user.username, imgUrl: user.imageUrl, isLive: false })); }))));
};
exports["default"] = Recommended;
