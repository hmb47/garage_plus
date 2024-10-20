// Copyright (c) 2024, Brahim BABEKER and contributors
// For license information, please see license.txt

 frappe.ui.form.on("Order Tracking", {
 	refresh(frm) {
 	frm.set_query("client",function() {
		return {
		"filters": [
			["GP Contacts","is_customer","=","1"]]
		}
	}),
	frm.set_query("shipment_company",function() {
		return {
		"filters": [
			["GP Contacts","is_shipment_company","=","1"]]
		}
	})
    }   
 });