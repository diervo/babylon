class C {
  static x = 1, #y, [a];
  z, #w = 2, [b];

  a() {
    this.z;
    this.#w++;
    #w;
  }
}
