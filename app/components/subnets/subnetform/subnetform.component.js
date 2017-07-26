import template from './subnetform.html';
import controller from './subnetform.controller';

let subnetformComponent = {
	bindings : {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs : '$ctrl'
};


export default subnetformComponent;