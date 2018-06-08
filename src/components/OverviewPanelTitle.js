import React from "react";
import { HorizontalLine } from "./Line";

function OverviewPanelTitle(props) {
    return (
        <div className="overview-panel-title">
            <div>{props.title}</div>
            <HorizontalLine />
        </div>
    )
}

export default OverviewPanelTitle