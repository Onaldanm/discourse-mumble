(function() {
	Discourse.HeaderController = Discourse.Controller.extend({
	  actions: {
		showMumble: function(headerView) {
		  var self = this;

		  Discourse.ajax("/notifications").then(function(result) {
			self.set("notifications", result);
			headerView.showDropdownBySelector("#user-notifications");
		  });
		}
	  }
  });
})();