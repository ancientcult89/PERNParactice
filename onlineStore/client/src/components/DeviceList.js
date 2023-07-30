import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import Row from "react-bootstrap/Row";
import {DeviceItem} from "./DeviceItem";

export const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem device={device}></DeviceItem>
      ))}
    </Row>
  );
});
