(function() {
	Discourse.HeaderController = Discourse.Controller.extend({
	  actions: {
		showMumble: function(headerView) {
		  var self = this;

		  Discourse.ajax("/notifications").then(function(result) {
			self.set("mumble", result);
			headerView.showDropdownBySelector("#user-mumble");
		  });
		}
	  }
  });
})();