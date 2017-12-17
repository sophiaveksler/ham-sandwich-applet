
function findTriangle(point1, point2) {
	var height = 1000000;
	var point3 = new customPointDataStructure();
	return [height, point1, point2, point3];
}


function getAllIntersections() {
	for (let i = 0; i < totalSet.length; i++) {
		for (let j = i+1; j < totalSet.length; j++) {
			findIntersection(totalSet[i], totalSet[j]);
		}
	}
	console.log(intersectionSet);
}


function findIntersection(point1, point2)
{
	let a1 = point1.dualSlope;
	let b1 = point1.dualIntercept;
	let a2 = point2.dualSlope;
	let b2 = point2.dualIntercept;

	var intersectionA, intersectionB;

	if (point1.dualSlope - point2.dualSlope == 0) {
		alert("Two of your lines are parallel and will never intersect. Please reset and try again.");
		return [-1000, -1000];
	}

	intersectionA = (b2-b1)/(a1-a2)
	intersectionB = a1 * intersectionA + b1;

	let interS = new intersection();
	fillIntersectionData(interS, point1, point2, intersectionA, intersectionB);
	[xA, yB] = scaleDualPointDataReverse(intersectionA, intersectionB)


	p = new fabric.Circle(	{
												radius: 5,
												fill: 'darkmagenta',
												left: xA - 5,
												top: yB - 5,
											});
	p.selectable=false;
	dualCanvas.add(p);
	interS.fabricPoint = p;
	intersectionSet.push(interS);

	return intersection;
	}
