export default {
	commaSeparate(passedArray) {
    if(passedArray.length === 0) {
			return `''`;
		} else { 
		return passedArray.map(e => `'${e}'`).join();	
		}
	} ,
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
	},
	clearInputs() {
		Input_home_clicks_count.setValue("");
		Input_home_clicks_pct.setValue("");
		Input_dropping_odds_count.setValue("");
		Input_dropping_odds_pct.setValue("");
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
			Input_home_clicks_count.setValue(30);
			Input_home_clicks_pct.setValue(80);
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
	}
}