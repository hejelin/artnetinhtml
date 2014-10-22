var app = angular.module('artnet');

app.controller('sortsiteController', ['$scope', function ($scope){
	$scope.chipsdata = [
        {
            value: 5,
            color:"#2b2a33",
            label: "Vet ej",
            highlight: '#35343D'
        },
        {
            value : 67,
            color : "#945662",
            label: "Mjukplast",
            highlight: '#9E606C'
        },
        {
            value : 19,
            color : "#c9a9b1",
            label: "Metall",
        	highlight: '#D3B3BB'
        },
        {
            value : 6,
            color : "#ede5dc",
            label: "Restavfall",
            highlight: '#F7EFE6'
        } //, a6a6b0, 6b6778, , 
    ];

    $scope.pringlesdata = [
        {
            value: 4,
            color:"#2b2a33",
            label: "Vet ej",
            highlight: '#35343D'
        },
        {
            value : 62,
            color : "#945662",
            label: "Pappersförpackning",
            highlight: '#9E606C'
        },
        {
            value : 23,
            color : "#c9a9b1",
            label: "Wellpap",
        	highlight: '#D3B3BB'
        },
        {
            value : 8,
            color : "#ede5dc",
            label: "Restavfall",
            highlight: '#F7EFE6'
        }
    ];

    $scope.glasdata = [
        {
            value: 5,
            color:"#2b2a33",
            label: "Vet ej",
            highlight: '#35343D'
        },
        {
            value : 21,
            color : "#945662",
            label: "Restavfall",
            highlight: '#9E606C'
        },
        {
            value : 68,
            color : "#c9a9b1",
            label: "Dryckesglas",
        	highlight: '#D3B3BB'
        },
        {
            value : 3,
            color : "#ede5dc",
            label: "Farligt avfall",
            highlight: '#F7EFE6'
        }
    ];

    $scope.frigolitdata = [
        {
            value: 1,
            color:"#2b2a33",
            label: "Vet ej",
            highlight: '#35343D'
        },
        {
            value : 65,
            color : "#945662",
            label: "Mjukplast",
            highlight: '#9E606C'
        },
        {
            value : 25,
            color : "#c9a9b1",
            label: "Restavfall",
        	highlight: '#D3B3BB'
        },
        {
            value : 6,
            color : "#ede5dc",
            label: "Pappersförpackning",
            highlight: '#F7EFE6'
        }
    ];

    $scope.gummidata = [
        {
            value: 12,
            color:"#2b2a33",
            label: "Vet ej",
            highlight: '#35343D'
        },
        {
            value : 19,
            color : "#945662",
            label: "Restavfall",
            highlight: '#9E606C'
        },
        {
            value : 58,
            color : "#c9a9b1",
            label: "Lämna på återvinningscentral",
        	highlight: '#D3B3BB'
        },
        {
            value : 8,
            color : "#ede5dc",
            label: "Mjukplast",
            highlight: '#F7EFE6'
        }
    ];

    $scope.kaffedata = [
        {
            value: 3,
            color:"#2b2a33",
            label: "Vet ej",
            highlight: '#35343D'
        },
        {
            value : 75,
            color : "#945662",
            label: "Matavfall",
            highlight: '#9E606C'
        },
        {
            value : 14,
            color : "#c9a9b1",
            label: "Restavfall",
        	highlight: '#D3B3BB'
        },
        {
            value : 5,
            color : "#ede5dc",
            label: "Pappersförpackning",
            highlight: '#F7EFE6'
        }
    ];

    $scope.korkdata = [
        {
            value: 1,
            color:"#2b2a33",
            label: "Vet ej",
            highlight: '#35343D'
        },
        {
            value : 12,
            color : "#945662",
            label: "Kvar på tuben",
            highlight: '#9E606C'
        },
        {
            value : 84,
            color : "#c9a9b1",
            label: "Hårdplast",
        	highlight: '#D3B3BB'
        },
        {
            value : 0,
            color : "#ede5dc",
            label: "Restavfall",
            highlight: '#F7EFE6'
        }
    ];

    $scope.kollegiedata = [
        {
            value: 4,
            color:"#2b2a33",
            label: "Vet ej",
            highlight: '#35343D'
        },
        {
            value : 21,
            color : "#945662",
            label: "Returpapper, spiralen kvar, kartong som wellpap",
            highlight: '#9E606C'
        },
        {
            value : 67,
            color : "#c9a9b1",
            label: "Returpapper, spiral bort",
        	highlight: '#D3B3BB'
        },
        {
            value : 5,
            color : "#ede5dc",
            label: "Restavfall",
            highlight: '#F7EFE6'
        }
    ];

    $scope.kuvertdata = [
        {
            value: 0,
            color:"#2b2a33",
            label: "Vet ej",
            highlight: '#35343D'
        },
        {
            value : 57,
            color : "#945662",
            label: "Restavfall",
            highlight: '#9E606C'
        },
        {
            value : 17,
            color : "#c9a9b1",
            label: "Pappersförpackning",
        	highlight: '#D3B3BB'
        },
        {
            value : 23,
            color : "#ede5dc",
            label: "Tidningar/returpapper",
            highlight: '#F7EFE6'
        }
    ];

    $scope.lamineraddata = [
        {
            value: 19,
            color:"#2b2a33",
            label: "Vet ej",
            highlight: '#35343D'
        },
        {
            value : 36,
            color : "#945662",
            label: "Restavfall",
            highlight: '#9E606C'
        },
        {
            value : 23,
            color : "#c9a9b1",
            label: "Mjukplast",
        	highlight: '#D3B3BB'
        },
        {
            value : 19,
            color : "#ede5dc",
            label: "Hårdplast",
            highlight: '#F7EFE6'
        }
    ];

    $scope.smordata = [
        {
            value: 7,
            color:"#2b2a33",
            label: "Vet ej",
            highlight: '#35343D'
        },
        {
            value : 45,
            color : "#945662",
            label: "Pappersförpackning",
            highlight: '#9E606C'
        },
        {
            value : 32,
            color : "#c9a9b1",
            label: "Restavfall",
        	highlight: '#D3B3BB'
        },
        {
            value : 13,
            color : "#ede5dc",
            label: "Metall",
            highlight: '#F7EFE6'
        }
    ];

    $scope.medicindata = [
        {
            value: 14,
            color:"#2b2a33",
            label: "Vet ej",
            highlight: '#35343D'
        },
        {
            value : 23,
            color : "#945662",
            label: "Mjukplast",
            highlight: '#9E606C'
        },
        {
            value : 33,
            color : "#c9a9b1",
            label: "Lämna på apotek",
        	highlight: '#D3B3BB'
        },
        {
            value : 27,
            color : "#ede5dc",
            label: "Restavfall",
            highlight: '#F7EFE6'
        }
    ];

    $scope.showAnswer = function() {
    	$('.svar-btn').hide();
    	$('.svar').show();
    }

}]);
