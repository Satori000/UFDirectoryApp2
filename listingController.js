angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      var listing = {
        code: $scope.code,
        name: $scope.name,
        coordinates: {
          latitude: $scope.latitude,
          longitude: $scope.longitude
        },
        address: $scope.address
      };
      $scope.listings.push(listing);
    };
    $scope.deleteListing = function(index) {
      Listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
      var listing = $scope.listings[index];
      var summary = "Code: " + listing.code + "/n" + " Building: " + listing.name + "/n" + " Coordinates: " + listing.coordinates.latitude + "," + listing.coordinates.longitude + "/n" + " Address: " + listing.address;
      $scope.detailedInfo = summary;
    };
  }
]);
