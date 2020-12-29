import { Card, Pagination } from "antd";
import * as _ from "lodash";
import * as React from "react";
var useState = React.useState, useMemo = React.useMemo, useEffect = React.useEffect;
var CityCard = function (props) {
    var customPageSize = props.pageSize, data = props.data;
    // 当前页码
    var _a = useState(1), current = _a[0], setCurrent = _a[1];
    var _b = useState(customPageSize), pageSize = _b[0], setPageSize = _b[1];
    // 填充页数据
    var pageData = useMemo(function () {
        var result = {};
        var pages = Array.isArray(data) ? Math.ceil(data.length / pageSize) : 1;
        for (var i = 1; i <= pages; i++) {
            var start = (i - 1) * pageSize;
            result[i] = data.slice(start, start + pageSize);
        }
        console.log("pageData:", result);
        return result;
    }, [data, pageSize]);
    var onChange = function (page, newPageSize) {
        if (newPageSize !== pageSize) {
            setCurrent(1);
        }
        else {
            setCurrent(page);
        }
        newPageSize && setPageSize(newPageSize);
    };
    return (React.createElement("div", null,
        React.createElement(Card, { style: { width: "90%" } },
            React.createElement("div", { className: "city-panel" }, _.get(pageData, [current], []).map(function (n) { return (React.createElement("span", { className: "city-tag" }, n)); }))),
        React.createElement("div", { className: "paging" },
            React.createElement("span", null,
                "\u5171 ",
                React.createElement("span", { className: "total" },
                    data.length,
                    " "),
                " \u4E2A"),
            React.createElement(Pagination, { current: current, defaultCurrent: 1, pageSize: pageSize, total: data.length, onChange: onChange }))));
};
export default CityCard;
