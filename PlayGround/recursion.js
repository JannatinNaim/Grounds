function pow(base, exponent) {
  if (exponent === 0) return 1;
  else return base * pow(base, exponent - 1);
}

const result = pow(2, 4);
