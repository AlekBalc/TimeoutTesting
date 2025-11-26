const airportString = `{

    "airports": [

        {

            "fs": "62GA",

            "faa": "62GA",

            "name": "Seven Lakes Airport",

            "street1": "",

            "street2": "",

            "city": "Jackson",

            "stateCode": "GA",

            "postalCode": "",

            "countryCode": "US",

            "countryName": "United States",

            "regionName": "North America",

            "timeZoneRegionName": "America/New_York",

            "localTime": "2025-11-26T01:58:10.195",

            "utcOffsetHours": -5.0,

            "latitude": 33.3246,

            "longitude": -83.916298,

            "elevationFeet": 642,

            "classification": 4,

            "active": true,

            "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/62GA?codeType=fs",

            "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/62GA?codeType=fs"

        },

        {

            "fs": "A2O",

            "iata": "ACO",

            "name": "Cobano Airport",

            "street1": "",

            "street2": "",

            "city": "Cobano",

            "cityCode": "ACO",

            "stateCode": "",

            "postalCode": "",

            "countryCode": "CR",

            "countryName": "Costa Rica",

            "regionName": "Central America",

            "timeZoneRegionName": "America/Costa_Rica",

            "localTime": "2025-11-26T00:58:10.196",

            "utcOffsetHours": -6.0,

            "latitude": 9.6919,

            "longitude": -85.0964,

            "elevationFeet": 519,

            "classification": 4,

            "active": true,

            "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/A2O?codeType=fs",

            "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/A2O?codeType=fs"

        },

        {

            "fs": "AAA",

            "iata": "AAA",

            "icao": "NTGA",

            "faa": "",

            "name": "Anaa Airport",

            "city": "Anaa",

            "cityCode": "AAA",

            "countryCode": "PF",

            "countryName": "French Polynesia",

            "regionName": "Oceania",

            "timeZoneRegionName": "Pacific/Tahiti",

            "weatherZone": "",

            "localTime": "2025-11-25T20:58:10.196",

            "utcOffsetHours": -10.0,

            "latitude": -17.355648,

            "longitude": -145.50913,

            "elevationFeet": 23,

            "classification": 4,

            "active": true,

            "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/AAA?codeType=fs",

            "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/AAA?codeType=fs"

        },

        {

            "fs": "AAB",

            "iata": "AAB",

            "icao": "YARY",

            "faa": "",

            "name": "Arrabury Airport",

            "city": "Arrabury",

            "cityCode": "AAB",

            "stateCode": "QLD",

            "countryCode": "AU",

            "countryName": "Australia",

            "regionName": "Oceania",

            "timeZoneRegionName": "Australia/Brisbane",

            "weatherZone": "",

            "localTime": "2025-11-26T16:58:10.196",

            "utcOffsetHours": 10.0,

            "latitude": -26.691196,

            "longitude": 141.047509,

            "elevationFeet": 348,

            "classification": 4,

            "active": true,

            "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/AAB?codeType=fs",

            "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/AAB?codeType=fs"

        }

    ]

}`;

export const airportData = JSON.parse(airportString);
