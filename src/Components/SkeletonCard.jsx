import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = ({ item, channel }) => {
  return (
    <div>
      <SkeletonTheme color="grey" highlightColor="#444">
        <li className="card">
          {/* <img src={item.image} alt={item.title} className="card-image" /> */}
          <Skeleton className="card-image" height={200} width={300} />
          {/* <img src={item.image} alt={item.title} className="channel-image" /> */}
          <Skeleton className="channel-image" circle />

          <h4 className="card-title">
            <Skeleton></Skeleton>
          </h4>
          <p className="card-channel">
            <Skeleton></Skeleton>
          </p>
          <div className="card-metrics">
            <Skeleton></Skeleton>
          </div>
        </li>
        {/* <p>
          <Skeleton height={250} width={300} count={1} />
        </p>
        <p>
          <Skeleton circle />
        </p> */}
      </SkeletonTheme>
      {/* <SkeletonTheme color="#990" highlightColor="#550">
        <p>
          <Skeleton height={250} width={300} count={1} />
        </p>
      </SkeletonTheme> */}
    </div>
  );
};

export default SkeletonCard;
