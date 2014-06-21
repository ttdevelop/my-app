/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {

    createBeacon: function(){
         console.log('create beacon');
           var identifier = 'beaconAtTheMacBooks'; // optional
           var major = 1111; // optional
           var minor = 2222; // optional
           var uuid = '9C3B7561-1B5E-4B80-B7E9-31183E73B0FB'; // mandatory

           // throws an error if the parameters are not valid
           var beacon = new IBeacon.CLBeaconRegion(uuid, major, minor, identifier);
           return beacon;   
    },
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        // var onDidDetermineStateCallback = function (result) {
        //     console.log(result.state);
        //     alert('DETERMINE MONITOR');
        //     alert(result.state);
        // };

        // var onDidRangeBeacons = function (result) {
        //     alert('DETERMINE RANGE');
        //     console.log('onDidRangeBeacons() ', result);
        // };

        // var beacon = createBeacon();
        // IBeacon.startMonitoringForRegion(beacon, onDidDetermineStateCallback);
        // IBeacon.startRangingBeaconsInRegion(beacon, onDidRangeBeacons);
        var beacon = app.createBeacon();
        var onPeripheralManagerDidStartAdvertising = function(pluginResult) {
            console.log('onPeripheralManagerDidStartAdvertising() pluginResult: ', pluginResult);
        }

        IBeacon.startAdvertising(beacon, onPeripheralManagerDidStartAdvertising);

        IBeacon.isAdvertising(function(pluginResult) {
            var isAdvertising = pluginResult.isAdvertising;
            console.log('isAdvertising:' + isAdvertising);
        });

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
