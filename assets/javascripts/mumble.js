(function() {
	Discourse.HeaderController = Discourse.Controller.extend(Discourse.HeaderController, {
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
  
  Discourse.HeaderView = Discourse.View.extend(Discourse.HeaderView, {
	  showMumble: function() {
		this.get("controller").send("showMumble", this);
	  }
  });
})();