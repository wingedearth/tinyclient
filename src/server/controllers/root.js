import _ from 'lodash';

/**
 * Root controller for root router
 * @param {obj} req - request object
 * @param {obj} res - response object
 * @returns {obj} response with homepage
 */
export default function (req, res) {
  const markup = '<p>Testing some markup data</p>';
  const data = {markup};

  return res.render('index', data);
}
