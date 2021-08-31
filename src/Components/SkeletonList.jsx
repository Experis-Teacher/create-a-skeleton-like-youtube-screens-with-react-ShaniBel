import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SkeletonCard from "./SkeletonCard";

const SkeletonList = ({ list }) => {
  return (
    <div>
      <SkeletonTheme>
        <h1>
          <Skeleton />
        </h1>
      </SkeletonTheme>
      <ul className="list">
        {list.items.map((item, index) => {
          return <SkeletonCard key={index} item={item} channel={list.channel} />;
        })}
      </ul>
    </div>
  );
};

export default SkeletonList;
