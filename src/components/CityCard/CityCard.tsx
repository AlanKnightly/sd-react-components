import { Card, Pagination } from "antd";
import * as _ from "lodash";
import * as React from "react";
type PageDataType = {
  [pname: number]: any;
};

export type CityCardProps = {
  pageSize: number;
  data: any[];
};
const { useState, useMemo, useEffect } = React;

const CityCard = (props: CityCardProps) => {
  const { pageSize: customPageSize, data } = props;
  // 当前页码
  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(customPageSize);
  // 填充页数据
  const pageData = useMemo(() => {
    const result: PageDataType = {};
    const pages = Array.isArray(data) ? Math.ceil(data.length / pageSize) : 1;
    for (let i = 1; i <= pages; i++) {
      const start = (i - 1) * pageSize;
      result[i] = data.slice(start, start + pageSize);
    }
    console.log("pageData:", result);

    return result;
  }, [data, pageSize]);

  const onChange = (page: number, newPageSize: number | undefined) => {
    if (newPageSize !== pageSize) {
      setCurrent(1);
    } else {
      setCurrent(page);
    }
    newPageSize && setPageSize(newPageSize);
  };
  return (
    <div className="sd-tagcard">
      <Card style={{ width: "90%" }}>
        <div className="city-panel">
          {_.get(pageData, [current], []).map((n: string | number) => (
            <span className="city-tag">{n}</span>
          ))}
        </div>
      </Card>
      <div className="paging">
        <span>
          共 <span className="total">{data.length} </span> 个
        </span>
        <Pagination
          current={current}
          defaultCurrent={1}
          pageSize={pageSize}
          total={data.length}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CityCard;
