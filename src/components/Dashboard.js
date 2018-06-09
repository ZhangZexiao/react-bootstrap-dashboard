import React, { Component } from 'react';
import DashboardHead from './DashboardHead';
import VaultDatabaseOverview from './VaultDatabaseOverview';
import DuplicatesOverview from './DuplicatesOverview';
import 'bootstrap/dist/css/bootstrap.css';
import '../Dashboard.css';
//todo: style to css
//todo: strings json
const mockData = {
  scanningDates: {
    currentDate: '19 April 2018, 15:32 GMT+8',
    nextDate: '25 May 2018, 15:32 GMT+8'
  },
  vaultData: {
    totalNumberOfFiles: '151K',
    totalNumberOfIptFiles: '50K',
    totalNumberOfIamFiles: '50K',
    totalNumberOfDwgFiles: '51K'
  },
  designGraphData: {
    newDuplicates: {
      count: '13',
      dateFrom: '04/16/2018, 10:00 (GMT_8)',
      dateTo: '04/20/2018, 15:32 (GMT_8)'
    },
    totalFilesScanned: '4325',
    foundDuplicates: '1441',
    duplicationRatio: '65',
    warnings: [
      {
        fileName: 'FileName1',
        fileFolderPath: 'File Folder Path or Location',
        failureReasonDetails: 'Failure Reason Details'
      },
      {
        fileName: 'FileName2',
        fileFolderPath: 'File Folder Path or Location',
        failureReasonDetails: 'Failure Reason Details'
      },
      {
        fileName: 'FileName3',
        fileFolderPath: 'File Folder Path or Location',
        failureReasonDetails: 'Failure Reason Details'
      }
    ],
    errors: [
      {
        fileName: 'FileName1',
        fileFolderPath: 'File Folder Path or Location',
        failureReasonDetails: 'Failure Reason Details'
      },
      {
        fileName: 'FileName2',
        fileFolderPath: 'File Folder Path or Location',
        failureReasonDetails: 'Failure Reason Details'
      },
      {
        fileName: 'FileName3',
        fileFolderPath: 'File Folder Path or Location',
        failureReasonDetails: 'Failure Reason Details'
      },
      {
        fileName: 'FileName4',
        fileFolderPath: 'File Folder Path or Location',
        failureReasonDetails: 'Failure Reason Details'
      },
      {
        fileName: 'FileName5',
        fileFolderPath: 'File Folder Path or Location',
        failureReasonDetails: 'Failure Reason Details'
      }
    ]
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = mockData;
  }
  render() {
    return (
      <div className="Dashboard">
        <DashboardHead scanningDates={this.state.scanningDates} />
        <VaultDatabaseOverview vaultData={this.state.vaultData} />
        <DuplicatesOverview designGraphData={this.state.designGraphData} />
      </div>
    );
  }
}

export default Dashboard;
