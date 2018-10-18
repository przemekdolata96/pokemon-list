module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        'no-plusplus': 'off'
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
    },
};