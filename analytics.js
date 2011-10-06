var _gaq = _gaq || [];
PAI(function() {
	var opt = PAI['getOptions']()['plugins']['analytics'];

	_gaq.push(['_setAccount', opt['account']]);
	if (opt['anonymizeIp']) { _gaq.push (['_gat._anonymizeIp']); }

	PAI['addListener']('pageload', function() {
		_gaq.push(['_trackPageview', PAI['LINK']]);
	});
});

PAI('loadScript', ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js');
