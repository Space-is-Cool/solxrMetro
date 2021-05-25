import * as Astro from 'astronomy-engine';

const Vectors = (body) => {
  const vector = Astro.HelioVector(body, new Date());
  const {x, z} = vector;
  return [z, 0, x];
};

export default Vectors;
