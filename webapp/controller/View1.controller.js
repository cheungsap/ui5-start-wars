sap.ui.define(
[
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("ovly.star_wars.controller.View1", {
		
		identificador: null,
		
		onInit: function () { 
			//var oInput = this.byId("indentificador");
			this.identificador = this.byId("identificador");

		 	//var oModel = new sap.ui.model.json.JSONModel(this.pessoa);
		 	//var oModel = new JSONModel();
		 	this.oModel = new JSONModel();
		 	this.getView().setModel(this.oModel);			
		},
		/**
		 *@memberOf ovly.star_wars.controller.View1
		 */
		 
		 onPressBuscar: function(oEvent){
		 	var sId = this.identificador.getValue();
		 	
		 	//var oModel = this.getView().getModel();
		 	//oModel.loadData();
		 	this.oModel.loadData("https://swapi.co/api/people/" + sId);
		 },
		 
		onPressDocs: function (oEvent) { 
			//This code was generated by the layout editor.
		}
	});
});