(function () {
    angular
        .module('ShowtimeApp')
        .controller('FindAllShowtimesController',FindAllShowtimesController);

    function FindAllShowtimesController($scope, $location, $http, $routeParams) {    
    	var loct;
    	var cinemaId;
    	var movieId
    	this.movieDetails = movieDetails;
    	
        function init() {
        	
        	var url1 = 'https://api.internationalshowtimes.com/v4/movies/?countries=US&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5';
        	var url2 = 'https://api.internationalshowtimes.com/v4/cinemas/?'+loct+'&limit=10&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5';
        	var url3 = 'http://localhost:8080/#!/findAllShowtimes/cinemaId='+ cinemaId +'&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5';
        	
           
        	cinemaId = $routeParams.cinemaId.substring(1,$routeParams.cinemaId.length);
        	var url4 = 'https://api.internationalshowtimes.com/v4/movies/?cinema_id='+ cinemaId +'&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5';
        	console.log("inshowtimes controller");
        	console.log(cinemaId);
        	
        	$http.get(url4).
        	then(function(response) {
                console.log(response.data);
                $scope.allShowtimes = response.data;
            });
        }
        init();
        
        function movieDetails(mId){
        	movieId = mId;
        	$http.get('https://api.internationalshowtimes.com/v4/showtimes/?cinema_id=' +cinemaId+ '&movie_id=' +movieId+ '&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
            then(function(response) {
            	console.log(response.data);
                $scope.allMovieShowtimes = response.data;
            });
        }
    }
})();
