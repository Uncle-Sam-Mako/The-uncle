
 module.exports = {
    "extends": [
        "react-app",
        "react-app/jest",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    
    rules: {
      
      // React scope no longer necessary with new JSX transform
      'react/react-in-jsx-scope': 'off',
      // Allow .js files to use JSX syntax
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

      "react/no-unescaped-entities": 0,
      "react/prop-types": 0
      
    }
  }

