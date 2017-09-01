/*
 *  Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

import axios from 'axios';

class DashboardsAPIS {

    /**
     * This method will return the AXIOS http client.
     * @returns httpClient
     */
    getHTTPClient() {
        let httpClient = axios.create({
            baseURL: window.location.origin + '/dashboards',
            timeout: 2000
        });
        httpClient.defaults.headers.post['Content-Type'] = 'application/json';
        return httpClient;
    }

    /**
     * This method will create a dashboard with given dashboard json.
     * @param dashboard
     * @returns {*}
     */
    createDashboard(dashboard) {
        return this.getHTTPClient().post("", dashboard)
    }

    /**
     * This method will return a list of dashboards meta data.
     */
    getDashboardList() {
        return this.getHTTPClient().get();
    }

    /**
     * This method will return the dashboard with given ID.
     * @param dashboardId
     */
    getDashboardByID(dashboardId) {
        return this.getHTTPClient().get(dashboardId);
    }

    /**
     * This method will update the dashboard with given ID.
     * @param dashboardId
     * @param dashboard
     */
    updateDashboardByID(dashboardId, dashboard) {
        return this.getHTTPClient().put(dashboardId, dashboard);
    }

    /**
     * This method will delete the dashboard with given ID
     * @param dashboardId
     * @returns {boolean}
     */
    deleteDashboardByID(dashboardId) {
        return this.getHTTPClient().delete(dashboardId);
    }

}

export default DashboardsAPIS;