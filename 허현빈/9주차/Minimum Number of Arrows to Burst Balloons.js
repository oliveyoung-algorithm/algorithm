var findMinArrowShots = function (points) {
  if (!points || points.length === 0) return 0;

  points.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let arrows = 1;
  let end = points[0][1];

  for (let i = 1; i < points.length; i++) {
    const [start, e] = points[i];
    if (start > end) {
      arrows++;
      end = e;
    }
  }

  return arrows;
};
