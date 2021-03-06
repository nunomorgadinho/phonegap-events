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
 var count = 0; //number of secs app has been paused
 var pauseInterval;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        
        $(app.onDOMLoad());
    },
    onDOMLoad: function() {
        $('#appdata').append("DOM Loaded <br><br>");
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {

         $('#appdata').append("Device Ready <br><br>");

         document.addEventListener("pause", onPause, false);
         document.addEventListener("resume", onResume, false);
         document.addEventListener("menubutton", onMenuBtnDown, false);
         document.addEventListener("backbutton", onBackBtnDown, false);
    },
    onPause: function() {

        $('#appdata').append("App Paused <br><br>");
        pauseInterval = setInterval(app.countPause, 1000);

    },
    onResume: function() {

        $('#appdata').append("App Resumed <br><br>");
        clearInterval(pauseInterval);
        count = 0;

    },
    countPause: function() {
        count++;
    },
    onMenuBtnDown: function(e) {
         e.preventDefault();
         $('#appdata').append("Menu Button Pressed <br><br>");
    },
    onBackBtnDown: function(e) {
        e.preventDefault();
        $('#appdata').append("Back Button Pressed <br><br>");
    }
};
