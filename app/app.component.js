import template from './app.html';
import controller from './app.controller';

controller.$inject = ['$rootScope', '$http', '$location', 'ipamService'];


let appComponent = {
	template,
	controller
};

export default appComponent;