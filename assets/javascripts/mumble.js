(function() {
	Discourse.StaticController.reopenClass({
		PAGES: ['faq', 'tos', 'privacy', 'login', 'bar'],
		CONFIGS: {
			'faq': 'faq_url',
			'tos': 'tos_url',
			'privacy': 'privacy_policy_url',
			'bar': 'bar_url'
		}
	});
})();