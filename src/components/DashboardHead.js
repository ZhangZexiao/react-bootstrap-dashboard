import React, { Component } from 'react';
import { Dropdown, MenuItem } from 'react-bootstrap';

function DashboardDropdownMenu(props) {
  const viewSettings = 'View Duplicates Administrator Settings';
  const exportPdf = 'Export to PDF';
  const customizeDashboard = 'Customize Dashboard';
  return (
    <Dropdown id="" className="align-self-center" pullRight>
      <Dropdown.Toggle noCaret bsStyle="transparent">
        ...
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <MenuItem eventKey="1">{viewSettings}</MenuItem>
        <MenuItem eventKey="2">{exportPdf}</MenuItem>
        <MenuItem eventKey="3" disabled>
          {customizeDashboard}
        </MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

class DashboardHead extends Component {
  constructor(props) {
    super(props);
    this.state = props.scanningDates;
  }
  render() {
    const dashboardTitle = 'Dashboard';
    const currentScanningDateDescription = 'Data shown as of ';
    const separator = ' | ';
    const nextScanningDateDescription =
      'Next recurrence scan will take place on ';
    return (
      <div className="flex-container-space-between-flex-items">
        <div>
          <div className="dashboard-title">{dashboardTitle}</div>
          <div className="dashboard-scanning-dates-description">
            <span>{currentScanningDateDescription}</span>
            <span className="scanning-date">{this.state.currentDate}</span>
            <span>{separator}</span>
            <span>{nextScanningDateDescription}</span>
            <span className="scanning-date">{this.state.nextDate}</span>
          </div>
        </div>
        <DashboardDropdownMenu />
      </div>
    );
  }
}

export default DashboardHead;
