function setup() {
  creatCanvas(200, 200);
  for (let i = 0; i < 200; i += 20) {
    line(i, 0, i, 200);
  }
}
