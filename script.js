// Code goes here
var app = angular.module('myApp', []);
app.controller('myCtrl', function() {
    this.cardDetails = {
        currentStatus: 'ERROR',
        name:"Critical Vms",
        description : "All my business-critical Vms",
        path  : "/TINTRI/CRITICAL-VMS",
        virtualMachines : 16,
        errors : 2
    }
});
app.component("cardComponent",{
    templateUrl: 'cardComponent.html',
    bindings: {
        details: '<'
       }
});