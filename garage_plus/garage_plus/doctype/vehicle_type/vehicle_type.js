// Copyright (c) 2024, Brahim BABEKER and contributors
// For license information, please see license.txt

 frappe.ui.form.on("Vehicle type", {
	refresh(frm) {
	frm.set_query("body_style",function() {
		return {
		"filters": [
			["Organ","organ","=","C"]]
		}
	}),
	frm.set_query("engine",function() {
		return {
		"filters": [
			["Organ","organ","=","M"]]
		}
	}),
	frm.set_query("gearbox",function() {
		return {
		"filters": [
			["Organ","organ","=","B.V"]]
		}
	}),
	frm.set_query("front_axle",function() {
		return {
		"filters": [
			["Organ","organ","=","E.AV"]]
		}
	}),
	frm.set_query("rear_axle",function() {
		return {
		"filters": [
			["Organ","organ","=","E.AR"]]
		}
	}),
	frm.set_query("transfer_gear",function() {
		return {
		"filters": [
			["Organ","organ","=","B.T"]]
		}
	})
	}
 });
