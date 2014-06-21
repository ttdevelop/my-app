cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.ibeacon/www/IBeacon.js",
        "id": "org.apache.cordova.ibeacon.device",
        "clobbers": [
            "IBeacon"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.ibeacon": "1.0.0"
}
// BOTTOM OF METADATA
});