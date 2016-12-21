import constants from '../constants';

// To test importing files from cloud code
export default (req, res) => {
  res.success(constants.Port)
}
