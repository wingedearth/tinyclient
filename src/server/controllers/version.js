import pkg from '../../../package.json';

/**
 * Version Controller for /version router
 * @param {obj} req - request object
 * @param {obj} res - response object
 * @returns {obj} response with version JSON
 */
export default function (req, res) {
  return res.send({
    name: pkg.name,
    version: pkg.version
  });
}
