/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
// eslint-disable-next-line linebreak-style
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // eslint-disable-next-line linebreak-style
  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  // eslint-disable-next-line linebreak-style
  };
}