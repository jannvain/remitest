'use strict';

describe('Controller: ItemCtrl', function () {
	
	// load the controller's module
	beforeEach(module('rem2App'));
	
	var ItemCtrl,
	    scope;
	
	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		    scope = $rootScope.$new();
		    ItemCtrl = $controller('ItemCtrl', {
			    $scope: scope
			    // place here mocked dependencies
			});
		}));
	
	it('should attach a list of awesomeThings to the scope', function () {
		expect(ItemCtrl.list[2]).toBe("Item3");
	    });

	it('should attach a list of awesomeThings to the scope', function () {
		expect(ItemCtrl.list[3]).toBe("Item5");
	    });

    });
