export default {
	primaryColor: '#f4f4f5',
	secondaryColor: '#71717a',
	
	getAfColor(awayForm) {
		if(appsmith.store.strategy === 1 && awayForm >= 300) { return this.primaryColor;	}
		else if(appsmith.store.strategy === 2 && awayForm <= 199) { return this.primaryColor;	}
		else { return this.secondaryColor; }
	},
	
	getHfColor(homeForm) {
		if(appsmith.store.strategy === 2 && homeForm >= 300) { return this.primaryColor;	} 
		else { return this.secondaryColor; }
	},
	
	getHccColor(homeClicksCount, homeClicksPct) {
		if(appsmith.store.strategy === 3 && homeClicksCount >= 30 && homeClicksPct >= 80) { return this.primaryColor;	} 
		else { return this.secondaryColor; }
	}
	
}