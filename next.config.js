const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  cssLoaderOptions: {
    esModule: false,
    sourceMap: false,
    modules: {
      mode: 'local',
    },
  },
  poweredByHeader: false,
  future: {
    webpack5: false,
  },
});

// module.exports = {
//   poweredByHeader: false,
//   future: {
//     webpack5: true,
//   },
// }
