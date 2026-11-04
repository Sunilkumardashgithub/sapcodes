/*global QUnit*/

sap.ui.define([
	"emp/employeedetails/controller/sapui_1st.controller"
], function (Controller) {
	"use strict";

	QUnit.module("sapui_1st Controller");

	QUnit.test("I should test the sapui_1st controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
