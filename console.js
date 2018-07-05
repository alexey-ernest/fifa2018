

//angular.element('#TOPSNavbar').scope().goToProductList();


// var productIndex = '0IMT58';
// var product = {
// 	MatchId: 57,
// 	ProductId: "IMT57"
// };
// var category = {
// 	PRPCategoryId: 14,
// 	PRPProductId: "IMT57",
// 	ProductTypeCode: "IMT",
// 	details: {
// 		Accessibility: false,
// 		CategoryId: 14,
// 	}
// };

// angular.element('[ng-controller="productBoxController"]').scope().setselectedProduct(productIndex, product, category);

angular.reloadWithDebugInfo();

var match = 58;
var cat = 14;
var amount = 2;

function reserveTicket() {

	var pr = {
		amount: amount,
		index: "0IMT" + match,
		product: {
			ProductId: "IMT" + match,
			validationSummary: {
				isProductCategoryAvailable: {
					apply: true,
					errors: [],
					isValid: true,
					extraData: {
						availableCategories: ["14", "15", "16"]
					}
				}
			}
		},
		category: {
			PRPCategoryId: cat,
			PRPProductId: "IMT" + match,
			ProductTypeCode: "IMT",
			details: {
				Accessibility: false,
				CategoryId: cat
			}
		}
	};

	angular.element('[ng-controller="productBoxController"]').scope().selectedProduct = pr;
	angular.element('[ng-controller="productBoxController"]').scope().addToCart(pr);

}

$('body').append('<button onclick="cat=14; reserveTicket();" style="position: absolute; top: 300px; left: 0; width: 100px; height: 60px;">Cat 1</button>');
$('body').append('<button onclick="cat=15; reserveTicket();" style="position: absolute; top: 300px; left: 100px; width: 100px; height: 60px;">Cat 2</button>');
$('body').append('<button onclick="cat=16; reserveTicket();" style="position: absolute; top: 300px; left: 200px; width: 100px; height: 60px;">Cat 3</button>');
$('body').append('<button onclick="cat=17; reserveTicket();" style="position: absolute; top: 300px; left: 300px; width: 100px; height: 60px;">Cat 4</button>');
$('body').append('<button onclick="cat=56; reserveTicket();" style="position: absolute; top: 300px; left: 400px; width: 100px; height: 60px;">OV</button>');


// var r = {
// 	CategoryId: 14,
// 	MatchId: undefined,
// 	PriceType: 155,
// 	ProductCode: undefined,
// 	ProductId: "IMT60",
// 	Quantity: 2,
// 	QuantityCompanions: undefined,
// 	SeatId: undefined,
// 	userAnswer: [498, 714, 928, 565]
// };


// setselectedProduct(productIndex,product,category); setselectedProductAmount(null);