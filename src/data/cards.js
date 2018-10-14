import robots from './robots';

const cards = () => {
	robots.forEach((robot) => {
		robot.flipped = 'false';
		robot.solved = 'false';
	});

	((shuffle) => {
		for (let i = shuffle.length - 1; i > 0; i -= 1) {
			if (i !== 4 && i !== 9 && i !== 14) {
				const j = Math.floor(Math.random() * (i + 1));
				if (j !== 4 && j !== 9 && j !== 14) {
					[shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
				}
			}
		}
	})(robots);

	return robots;
};

export default cards();
