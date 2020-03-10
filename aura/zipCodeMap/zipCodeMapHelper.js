({
    init: function (cmp, event) {
        var zipName = cmp.get("v.record.fields.Name.value");
        // var zipLat = cmp.get("v.record.fields.Geolocation__Latitude__s.value");
        // var zipLong = cmp.get("v.record.fields.Geolocation__Longitude__s.value");
        // to use geo coordinated, use latitude and longitude in location param
        var zipCounty = cmp.get("v.record.fields.County__c.value");
        var zipState = cmp.get("v.record.fields.State__c.value");
            cmp.set('v.mapMarkers', [
                {
                    location: {
                        'PostalCode': zipName
                    },
                    
                    title: zipName,
                    description: zipCounty + " | " + zipState
                }
            ]);
    }
})