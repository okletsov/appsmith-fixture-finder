export default {
	primaryColor: '#f4f4f5',
	secondaryColor: '#71717a',
	
	getAfColor(awayForm) {
		if(appsmith.store.strategy === 1 && awayForm >= 300) { return this.primaryColor;	}
		else if(appsmith.store.strategy === 2 && awayForm <= 199) { return this.primaryColor;	}
		else if(appsmith.store.strategy === 4 && awayForm >= 300) { return this.primaryColor;	}
		else { return this.secondaryColor; }
	},
	
	getHfColor(homeForm) {
		if(appsmith.store.strategy === 2 && homeForm >= 300) { return this.primaryColor;	} 
		else if(appsmith.store.strategy === 4 && homeForm < 400) { return this.primaryColor;	}
		else { return this.secondaryColor; }
	},
	
	getHccColor(homeClicksCount, homeClicksPct) {
		if(appsmith.store.strategy === 3 && homeClicksCount >= 30 && homeClicksPct >= 80) { return this.primaryColor;	} 
		else { return this.secondaryColor; }
	},
	evaluateStrategies(strategiesString, actualOutcome) {
    
		if(strategiesString === null) {
			return '';
		};
		
		// Hardcoded outcomes
    const strategyOutcomes = {
        S1: 'away',
        S2: 'home',
        S3: 'home',
        S4: 'draw'
    };

    // Split the string into an array of strategy names
    const strategies = strategiesString.split(" ");

    // Map each strategy to "Sx ✅" or "Sx ❌" depending on match
    const results = strategies.map(strategy => {
        const expected = strategyOutcomes[strategy];
        return expected === actualOutcome
            ? `✅${strategy}`
            : `❌${strategy}`;
    });

    // Join results back into a single string
    return results.join(" ");
	}
}