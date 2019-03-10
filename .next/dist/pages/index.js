'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vallabhiaf/kickstart/pages/index.js?entry';


var CampaignIndex = function (_Component) {
	(0, _inherits3.default)(CampaignIndex, _Component);

	function CampaignIndex() {
		(0, _classCallCheck3.default)(this, CampaignIndex);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignIndex, [{
		key: 'renderCampaigns',
		value: function renderCampaigns() {
			var items = this.props.campaigns.map(function (address) {
				return {
					header: address,
					description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
							fileName: _jsxFileName,
							lineNumber: 19
						}
					}, _react2.default.createElement('a', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 20
						}
					}, _react2.default.createElement('p', { style: { color: 'teal' }, __source: {
							fileName: _jsxFileName,
							lineNumber: 20
						}
					}, 'View Campaign ', _react2.default.createElement(_semanticUiReact.Icon, { name: 'right arrow', __source: {
							fileName: _jsxFileName,
							lineNumber: 20
						}
					})))),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement('img', { src: '../static/crowdfunding.png', style: { width: 400, height: 350 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}), _react2.default.createElement('section', { style: { maxWidth: 550, color: 'grey', marginLeft: 500, marginTop: -250 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, 'Raising funds for your project from the public without an intermediary.')), _react2.default.createElement('h2', { style: { marginTop: 200 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, 'Start funding your ideas'), _react2.default.createElement('section', { style: { color: 'teal', marginTop: 10 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, 'Sometimes a good idea takes a lot of funds and collective effort. You could ask for donations, but donors prefer to give to projects they are more certain will get traction and proper funding. This is an example where a crowdfunding would be ideal: you set up a goal and a deadline for reaching it. If you miss your goal, the donations are returned, therefore reducing the risk for donors. Since the code is open and auditable, there is no need for a centralized, trusted platform and therefore the only fees everyone will pay are just the gas fees.'))), _react2.default.createElement('div', { style: { margin: 100 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, textAlign: 'center', color: 'teal', __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { name: 'users', circular: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}), _react2.default.createElement(_semanticUiReact.Header.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, 'Open Campaigns!!!'))), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', floated: 'right', basic: true, color: 'teal', __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement('p', { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, 'Create Campaigns')), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add circle', color: 'teal', __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}))))), this.renderCampaigns()));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var campaigns;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _factory2.default.methods.getDeployedCampaigns().call();

							case 2:
								campaigns = _context.sent;
								return _context.abrupt('return', { campaigns: campaigns });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkljb24iLCJIZWFkZXIiLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiY29sb3IiLCJmbHVpZCIsIndpZHRoIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2luIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBTSxBQUFRLEFBQUs7O0FBQzVCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOzs7Ozs7O0lBRWIsQTs7Ozs7Ozs7Ozs7b0NBT2EsQUFDakI7T0FBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUNqRDs7YUFBTyxBQUNDLEFBQ1A7a0NBQ0MsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjtpQkFBM0I7bUJBQUEsQUFDQTtBQURBO01BQUEsa0JBQ0EsY0FBQTs7aUJBQUE7bUJBQUEsQUFBRztBQUFIO0FBQUEsd0JBQUcsY0FBQSxPQUFHLE9BQU8sRUFBQyxPQUFYLEFBQVUsQUFBTztpQkFBakI7bUJBQUE7QUFBQTtRQUF3QyxrQ0FBQSxBQUFDLHVDQUFLLE1BQU4sQUFBVztpQkFBWDttQkFKdEMsQUFHTCxBQUNBLEFBQUcsQUFBd0MsQUFHNUM7QUFINEM7O1lBSjdDLEFBQU8sQUFPQyxBQUVSO0FBVE8sQUFDTjtBQUZGLEFBQWMsQUFZZCxJQVpjOzt3Q0FZUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO2VBQW5CO2lCQUFQLEFBQU8sQUFDUDtBQURPO0lBQUE7Ozs7MkJBR0EsQUFDUDswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBRUE7QUFGQTtBQUFBLDZDQUVLLEtBQUwsQUFBUyw4QkFBNkIsT0FBTyxFQUFDLE9BQUQsQUFBTyxLQUFLLFFBQXpELEFBQTZDLEFBQW1CO2VBQWhFO2lCQUZBLEFBRUEsQUFDQztBQUREO3VCQUNDLGNBQUEsYUFBUyxPQUFPLEVBQUMsVUFBRCxBQUFVLEtBQUssT0FBZixBQUFxQixRQUFPLFlBQTVCLEFBQXVDLEtBQUksV0FBVSxDQUFyRSxBQUFnQixBQUFzRDtlQUF0RTtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFKRixBQUdDLEFBQ0MsQUFHRCw2RkFBQSxjQUFBLFFBQUksT0FBTyxFQUFDLFdBQVosQUFBVyxBQUFXO2VBQXRCO2lCQUFBO0FBQUE7TUFQRCxBQU9DLEFBRUEsNkNBQUEsY0FBQSxhQUFTLE9BQU8sRUFBRSxPQUFGLEFBQVEsUUFBUSxXQUFoQyxBQUFnQixBQUEyQjtlQUEzQztpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFYSCxBQUNDLEFBU0MsQUFDQyxBQUdGLDRqQkFBQSxjQUFBLFNBQUssT0FBTyxFQUFDLFFBQWIsQUFBWSxBQUFRO2VBQXBCO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLE1BQWhCLE1BQXFCLFdBQXJCLEFBQStCLFVBQVMsT0FBeEMsQUFBOEM7ZUFBOUM7aUJBQUEsQUFDUTtBQURSO3NCQUNRLEFBQUMsdUNBQUssTUFBTixBQUFXLFNBQVMsVUFBcEI7ZUFBQTtpQkFEUixBQUNRLEFBQ0E7QUFEQTt1QkFDQyxjQUFELHdCQUFBLEFBQVE7O2VBQVI7aUJBQUE7QUFBQTtBQUFBLE1BakJWLEFBY0MsQUFDQyxBQUVRLEFBS1Qsd0NBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDLHlDQUFPLFVBQVIsQUFBaUIsUUFBTyxTQUF4QixBQUFnQyxTQUFRLE9BQXhDLE1BQThDLE9BQTlDLEFBQW9EO2VBQXBEO2lCQUFBLEFBQ0U7QUFERjtzQkFDRyxjQUFELHdCQUFBLEFBQVEsV0FBUSxTQUFoQjtlQUFBO2lCQUFBLEFBQXdCO0FBQXhCO3NCQUF3QixjQUFBLE9BQUcsT0FBTyxFQUFDLE9BQVgsQUFBVSxBQUFPO2VBQWpCO2lCQUFBO0FBQUE7TUFEMUIsQUFDRSxBQUF3QixBQUNuQixzQ0FBQyxjQUFELHdCQUFBLEFBQVEsV0FBUSxRQUFoQjtlQUFBO2lCQUFBLEFBQ0c7QUFESDtzQkFDRyxBQUFDLHVDQUFLLE1BQU4sQUFBVyxjQUFhLE9BQXhCLEFBQThCO2VBQTlCO2lCQTNCYixBQXNCQyxBQUNDLEFBQ0MsQUFFTyxBQUNHLEFBS1Y7QUFMVTtnQkE3QmYsQUFDQyxBQUNDLEFBZ0NHLEFBQUssQUFJVjs7Ozs7Ozs7Ozs7O2VBNUR3QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O1lBQXpEO0E7eUNBRUMsRUFBRSxXQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKbUIsQSxBQWlFNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvdmFsbGFiaGlhZi9raWNrc3RhcnQifQ==