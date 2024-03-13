// @ts-check

const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
    output: "standalone",
    images: {
        domains: ['cms.yhh.ae'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cms.yhh.ae',
            },
        ],
    },
};

module.exports = withNextIntl(config);