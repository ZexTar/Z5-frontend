const robots = [];

for (let i = 0; i < 19; i += 1) {
	if (i < 4) {
		robots.push({ id: i + 1, genKey: i + 1 });
	} else if (i > 3 && i < 10) {
		robots.push({ id: i + 1, genKey: i });
	} else if (i > 9 && i < 15) {
		robots.push({ id: i + 1, genKey: i - 9 });
	} else {
		robots.push({ id: i + 1, genKey: i - 10 });
	}
}

export default robots;
