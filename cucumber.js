module.exports = {
    default: [
        'tests/features',
        '--require', 'tests/step_definitions/*.js',
        '--require', 'tests/support/**/*.js',
    ].join(' ')
};
