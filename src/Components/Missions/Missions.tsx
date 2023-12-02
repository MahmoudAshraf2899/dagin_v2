import React from "react";
import { Pending } from "./Types/Pending";
import { UnderImplementation } from "./Types/UnderImplementation";
import { Late } from "./Types/Late";
import { Evaluation } from "./Types/Evaluation";
import { Finished } from "./Types/Finished";
type MissionsProps = {
  type: number;
  //onDataReceived: (data: number) => void;
};
export const Missions = (props: MissionsProps) => {
  return (
    <div style={{ width: "100%" }}>
      {props.type === 0 ? (
        <Pending />
      ) : props.type === 1 ? (
        <UnderImplementation />
      ) : props.type === 2 ? (
        <Late />
      ) : props.type === 3 ? (
        <Evaluation />
      ) : props.type === 4 ? (
        <Finished />
      ) : null}
    </div>
  );
};
