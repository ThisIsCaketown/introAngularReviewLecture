angular.module("myApp")
.controller("mainCtrl", function($scope){
  
  $scope.sortingOptions = [
    {
      name:"Title",
      value: "title"
    },
    {
      name: "Bedrooms",
      value: "beds"
    },
    {
      name: "Bathrooms",
      value: "baths"
    },
    {
      name: "Rent per month",
      value: "rent"
    },
    {
      name: "Cost to own",
      value: "cost"
    },
    {
      name: "City",
      value: "location.city"
    },
    {
      name: "State",
      value: "location.state"
    }
  ];
  
  $scope.housing = [
    {
      "title": "4 bed 4 bath 4 rent 4 cheap",
      "beds": 4,
      "baths": 4,
      "rental": true,
      "rent": 1200,
      "cost": null,
      "location": {
        "city": "Provo",
        "state": "Utah"
      }
    },
    {
      "title": "2 pricey 4 u",
      "beds": 1,
      "baths": 1,
      "rental": false,
      "rent": null,
      "cost": 2500000,
      "location": {
        "city": "San Diego",
        "state": "California"
      }
    },
    {
      "title": "Never gonna sell",
      "beds": 5,
      "baths": 0,
      "rental": false,
      "rent": null,
      "cost": 500000,
      "location": {
        "city": "Gary",
        "state": "Indiana"
      }
    },
    {
      "title": "Literally a public bathroom",
      "beds": 0,
      "baths": 10,
      "rental": true,
      "rent": 900,
      "cost": null,
      "location": {
        "city": "Cleveland",
        "state": "Ohio"
      }
    },
    {
      "title": "The one you want, already sold",
      "beds": 2,
      "baths": 2,
      "rental": false,
      "rent": null,
      "cost": 350000,
      "location": {
        "city": "Seattle",
        "state": "Washington"
      }
    },
    {
      "title": "Who built this, anyway?",
      "beds": 1,
      "baths": 15,
      "rental": true,
      "rent": 2000,
      "cost": null,
      "location": {
        "city": "Provo",
        "state": "Utah"
      }
    }
  ]
  
})