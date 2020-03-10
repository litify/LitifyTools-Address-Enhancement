({
    initOne: function (cmp, event, helper) {
        cmp.set('v.mapMarkers', [
            {
                location: {
                    Street: '9130 S. Dadeland Blvd, Penthouse Suite',
                    City: 'Miami',
                    State: 'FL',
                    PostalCode: '33156'
                },

                title: 'Rubenstein Law'
            }
        ]);
    },
    
    handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "LOADED") {
            // record is loaded
            console.log("Message loaded successfully.");
            // this action triggers the notification after the record loads
            helper.init(component,event);       
        } else if(eventParams.changeType === "CHANGED") {
            // record is changed
            console.log("Record has been modified.");
            // this action reloads the record
            // component.find('recordLoader').reloadRecord();
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted
            console.log("Record has been deleted.");
        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving, or deleting the record
            console.log("There was an error loading the record.");
        }
    }
})