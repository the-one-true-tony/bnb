export const convertPets = ({pets}) => (
  Object.keys(pets).map(key => pets[key])
);

export const asArray  = (prop) => (
  Object.keys(prop).map(key =>prop[key])
);

export const filterReviews  = (prop, id) => {
  let reviews = Object.keys(prop).map(key =>prop[key]);
  let filtered = [];
  for (let i = 0; i < reviews.length; i++) {
    if(reviews[i].location_id === id){
      filtered.push(reviews[i]);
    }
  }
  return filtered;
};
