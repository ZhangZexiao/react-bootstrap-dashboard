import React, { Component } from "react";
import { OverlayTrigger, Tooltip, Panel, Glyphicon, ListGroup, ListGroupItem } from "react-bootstrap";
import OverviewPanelTitle from "./OverviewPanelTitle"
import { VerticalLine, ThinHorizontalLine } from "./Line"
import DuplicationRatio from "./DuplicationRatio"
import NewDuplicatesImage from "../imgs/light_search_16.png"
import TotalFilesScannedImage from "../imgs/light_search_16.png"
import FoundDuplicatesImage from "../imgs/light_search_16.png"

function CaptionIconNumber(props) {
    const badgeNumberClass = props.orange ? "badge-number badge-number-orange" : "badge-number"
    const tooltip = <Tooltip id="">{props.tooltip}</Tooltip>
    return (
        <OverlayTrigger overlay={tooltip} placement="bottom">
            <div className="badge-content">
                <div className="badge-caption">{props.caption}</div>
                <div className="flex-container-center-flex-item">
                    <img className="badge-image" src={props.image} alt="" />
                    <div className={badgeNumberClass}>{props.number}</div>
                </div>
            </div>
        </OverlayTrigger>
    )
}

class FileInfoList extends Component {
    constructor(props) {
        super(props)
        this.state = { collapsed: true }
    }
    render() {
        return (
            <Panel bsStyle="transparent">
                <Panel.Toggle componentClass="div">
                    <Panel.Heading bsStyle="transparent">
                        <Panel.Title>
                            <div className="flex-container-space-between-flex-items">
                                <div className="flex-container">
                                    <img src={this.props.image} alt="" className="normal-img-height-width file-info-list-img" />
                                    <div className="file-info-list-head-text">
                                        <span className="file-info-list-number">{this.props.number}</span>
                                        <span className="prepend-space">{this.props.description}</span>
                                    </div>
                                </div>
                                <Glyphicon className="align-self-center glyph-padding-left" glyph={this.state.collapsed ? 'menu-down' : 'menu-up'} />
                            </div>
                        </Panel.Title>
                    </Panel.Heading>
                </Panel.Toggle>
                <Panel.Collapse onEntered={() => this.setState({ collapsed: false })} onExited={() => this.setState({ collapsed: true })}>
                    <Panel.Body>{/*bsStyle and bsClass no effect, why?*/}
                        <ListGroup bsStyle="margin">
                            {this.props.fileInfos.map((fileInfo) => <ListGroupItem bsStyle="transparent" key={fileInfo.fileName}>{fileInfo.fileName} | {fileInfo.fileFolderPath} | {fileInfo.failureReasonDetails}</ListGroupItem>)}
                        </ListGroup>
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        )
    }
}

function DuplicatesOverview(props) {
    const overviewPanelTitle = "Duplicates Overview"
    const newDuplicatesTooltip = "Newly added between 04/16/2018, 10:00(GMT+8) and 04/20/2018, 15:32(GMT+8)"
    const totalFilesScannedTooltip = "Total files scanned in the database for duplicates"
    const foundDuplicatesTooltip = "Found duplicates from total files scanned"
    const duplicatonRatioTooltip = "Available duplicates divided by total files scanned"
    const newDuplicatesCaption = "New Duplicates"
    const totalFilesScannedCaption = "Total Files Scanned"
    const foundDuplicatesCaption = "Found Duplicates"
    const warningDescription = "files are newly checked in and were not scanned when the recurrence takes place. Please wait for the scheduled recurrence to generate the latest data."
    const errorDescription = "files failed to be scanned. Please wait for the scheduled recurrence for latest updates of information."
    return (
        <div className="overview-panel">
            <OverviewPanelTitle title={overviewPanelTitle} />
            <div className="flex-container-space-between-flex-items">
                <CaptionIconNumber caption={newDuplicatesCaption} tooltip={newDuplicatesTooltip} number={props.designGraphData.newDuplicates.count} orange image={NewDuplicatesImage} />
                <VerticalLine />
                <CaptionIconNumber caption={totalFilesScannedCaption} tooltip={totalFilesScannedTooltip} number={props.designGraphData.totalFilesScanned} image={TotalFilesScannedImage} />
                <VerticalLine />
                <CaptionIconNumber caption={foundDuplicatesCaption} tooltip={foundDuplicatesTooltip} number={props.designGraphData.foundDuplicates} image={FoundDuplicatesImage} />
            </div>
            <ThinHorizontalLine />
            <div className="flex-container-center-flex-item">
                <DuplicationRatio duplicationRatio={props.designGraphData.duplicationRatio} tooltip={duplicatonRatioTooltip} />
            </div>
            <ThinHorizontalLine />
            <FileInfoList image={NewDuplicatesImage} number={props.designGraphData.warnings.length} description={warningDescription} fileInfos={props.designGraphData.warnings} />
            <ThinHorizontalLine />
            <FileInfoList image={NewDuplicatesImage} number={props.designGraphData.errors.length} description={errorDescription} fileInfos={props.designGraphData.errors} />
        </div>
    )
}

export default DuplicatesOverview