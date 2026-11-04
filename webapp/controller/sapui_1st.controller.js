sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("emp.employeedetails.controller.sapui_1st", {

        onInit() {

            // Employee data directly inside controller
            const employeeData = {
                employees: [
                    {
                        id: 101,
                        name: "Sai",
                        age: 25,
                        salary: 25000
                    },
                    {
                        id: 102,
                        name: "Preeti",
                        age: 28,
                        salary: 35000
                    },
                    {
                        id: 103,
                        name: "Jaspal",
                        age: 24,
                        salary: 30000
                    },
                    {
                        id: 104,
                        name: "Harish",
                        age: 27,
                        salary: 40000
                    }
                ]
            };

            // Create JSONModel
            const oModel = new JSONModel(employeeData);

            // Set model to view
            this.getView().setModel(oModel);

            // Calculate total salary
            let totalSalary = 0;

            employeeData.employees.forEach((employee) => {
                totalSalary += employee.salary;
            });

            // Display total salary
            this.byId("totalSalary").setNumber(
                totalSalary.toLocaleString("en-IN")
            );

            const nModel = this.getView().getModel("invoice");

        }

    });
});