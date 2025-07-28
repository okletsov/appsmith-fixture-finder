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
		Select_outcome.setSelectedOption("home");
	},
	getTitleForBetsModal() {
		const buttonClicked = appsmith.store.parentButton;
		
		if(buttonClicked === 'future_bets') {
			return 'Future bets - ' + future_bets.data.length;
		} else if(buttonClicked === 'past_bets') {
			return 'Past bets - ' + summary.data[0].past;
		}
	}
}