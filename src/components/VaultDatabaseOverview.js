import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import OverviewPanelTitle from './OverviewPanelTitle';
import { VerticalLine } from './Line';

function CaptionNumber(props) {
  const tooltip = <Tooltip id="">{props.tooltip}</Tooltip>;
  return (
    <OverlayTrigger overlay={tooltip} placement="bottom">
      <div className="badge-content">
        <div className="badge-caption">{props.caption}</div>
        <div className="badge-number">{props.number}</div>
      </div>
    </OverlayTrigger>
  );
}

function VaultDatabaseOverview(props) {
  const overviewPanelTitle = 'Vault Overview';
  const totalFilesTooltip = 'Total files available in the database';
  const totalIptFilesTooltip = '.ipt files available in the database';
  const totalIamFilesTooltip = '.iam files available in the database';
  const totalDwgFilesTooltip = '.dwg files available in the database';
  const totalFilesCaption = 'Total number of Files';
  const totalIptFilesCaption = 'Total number of .ipt Files';
  const totalIamFilesCaption = 'Total number of .iam Files';
  const totalDwgFilesCaption = 'Total number of .dwg Files';
  return (
    <div className="overview-panel">
      <OverviewPanelTitle title={overviewPanelTitle} />
      <div className="flex-container-space-between-flex-items">
        <CaptionNumber
          caption={totalFilesCaption}
          tooltip={totalFilesTooltip}
          number={props.vaultData.totalNumberOfFiles}
        />
        <VerticalLine />
        <CaptionNumber
          caption={totalIptFilesCaption}
          tooltip={totalIptFilesTooltip}
          number={props.vaultData.totalNumberOfIptFiles}
        />
        <VerticalLine />
        <CaptionNumber
          caption={totalIamFilesCaption}
          tooltip={totalIamFilesTooltip}
          number={props.vaultData.totalNumberOfIamFiles}
        />
        <VerticalLine />
        <CaptionNumber
          caption={totalDwgFilesCaption}
          tooltip={totalDwgFilesTooltip}
          number={props.vaultData.totalNumberOfDwgFiles}
        />
      </div>
    </div>
  );
}

export default VaultDatabaseOverview;
