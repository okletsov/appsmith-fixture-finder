export default {
	commaSeparate(passedArray) {
    if(passedArray.length === 0) {
			return `''`;
		} else { 
		return passedArray.map(e => `'${e}'`).join();	
		}
	},
	commaSeparateIn(passedArray) {
    if(passedArray.length === 0) {
			return `''`;
		} else { 
		return passedArray.map(e => `psr.market LIKE '%${e}%'`).join(` OR `);	
		}
	},
	customWidgetData() {
		return {
			"summary": summary.data
		}
	},
	setDefaultOutcome() {
		Select_outcome.setSelectedOption("home");
		storeValue('expectedOutcome', 'home');
		storeValue('timeStamp', new Date());
	},
	clearInputs() {
		Input_home_clicks_count_above.setValue("");
		Input_home_clicks_count_below.setValue("");
		Input_home_clicks_pct_above.setValue("");
		Input_home_clicks_pct_below.setValue("");
		Input_dropping_odds_count_ab.setValue("");
		Input_dropping_odds_count_be.setValue("");
		Input_dropping_odds_pct_above.setValue("");
		Input_dropping_odds_pct_below.setValue("");
		Input_home_league_pos.setValue("");
		Input_home_league_pos_pct.setValue("");
		Input_away_league_pos.setValue("");
		Input_away_league_pos_pct.setValue("");
		Input_home_form_above.setValue("");
		Input_home_form_below.setValue("");
		Input_away_form_above.setValue("");
		Input_away_form_below.setValue("");
		Input_max_h2h_away_odds.setValue("");
	},
	runAllQueries() {
		future_bets.run();
		summary.run();
		running_sum.run();
		last_update.run();
		strategy_bets.run();
		bets_per_month.run();
	},
	setInputsByStrategy() {
		if(appsmith.store.strategy === 1) {
			Select_outcome.setSelectedOption('away');
			storeValue('expectedOutcome', 'away');
			Input_away_form_above.setValue(300);
		} else if (appsmith.store.strategy === 2) {
			Select_outcome.setSelectedOption('home');
			storeValue('expectedOutcome', 'home');
			Input_home_form_above.setValue(300);
			Input_away_form_below.setValue(199);
		} else if (appsmith.store.strategy === 3) {
			Select_outcome.setSelectedOption('home');
			storeValue('expectedOutcome', 'home');
			Input_home_clicks_count_above.setValue(30);
			Input_home_clicks_pct_above.setValue(80);
		} else if (appsmith.store.strategy === 4) {
			Select_outcome.setSelectedOption('draw');
			storeValue('expectedOutcome', 'draw');
			Input_home_form_below.setValue(400);
			Input_away_form_above.setValue(300);
		} else if (appsmith.store.strategy === 5) {
			Select_outcome.setSelectedOption('home');
			storeValue('expectedOutcome', 'home');
			Input_home_form_above.setValue(210);
			Input_away_form_below.setValue(100);
		}
	},
	getTitleForBetsModal() {
		const buttonClicked = appsmith.store.parentButton;
		
		if(buttonClicked === 'future_bets') {
			return 'Future bets - ' + future_bets.data.length;
		} else if(buttonClicked === 'past_bets') {
			return 'Past bets - ' + summary.data[0].past;
		}
	},
	getPredictionsForModal() {
		const buttonClicked = appsmith.store.parentButton;
		
		if(buttonClicked === 'past_bets') {
			return past_bets.data;
		} else if(buttonClicked === 'future_bets') {
			return future_bets.data;
		}
	},
	formatDateTimeWithYear(dateTime) {
		if(dateTime === null) {return null;}
		 
      const date = new Date(dateTime);
      
      const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
      const formattedDateTime = date.toLocaleString('en-US', options).replace(',', ',');
      
      return formattedDateTime;	
	},
	timeSince(dateTime) {
		if(dateTime === null) {return null;}
		
		const past = new Date(dateTime);
		const diffMs = appsmith.store.timeStamp - past; // difference in milliseconds

		const diffMinutes = Math.floor(diffMs / 60000);
		const hours = Math.floor(diffMinutes / 60);
		const minutes = diffMinutes % 60;

		return `${hours}h ${minutes}m`;
	}
}