const webpack = require("webpack");
const WebpackModules = require("webpack-modules");
const path = require("path");
const config = require("sapper/config/webpack.js");
const pkg = require("./package.json");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const alias = { svelte: path.resolve("node_modules", "svelte") };
const extensions = [".mjs", ".js", ".json", ".svelte", ".html"];
const mainFields = ["svelte", "module", "browser", "main"];
const fileLoaderRule = {
  test: /\.(png|jpe?g|gif|svg)$/i,
  use: ["file-loader"],
};

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: "svelte-loader-hot",
            options: {
              dev,
              hydratable: true,
              // hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377

              // NOTE emitCss: true is currently not supported with HMR
              emitCss: false,
              // Enable HMR
              hotReload: true, // Default: false
              // Extra HMR options
              hotOptions: {
                // Prevent preserving local component state
                noPreserveState: false,

                // If this string appears anywhere in your component's code, then local
                // state won't be preserved, even when noPreserveState is false
                noPreserveStateKey: "@!hmr",

                // Prevent doing a full reload on next HMR update after fatal error
                noReload: false,

                // Try to recover after runtime errors in component init
                optimistic: false,

                // --- Advanced ---

                // Prevent adding an HMR accept handler to components with
                // accessors option to true, or to components with named exports
                // (from <script context="module">). This have the effect of
                // recreating the consumer of those components, instead of the
                // component themselves, on HMR updates. This might be needed to
                // reflect changes to accessors / named exports in the parents,
                // depending on how you use them.
                acceptAccessors: true,
                acceptNamedExports: true,
              },
            },
          },
        },
        fileLoaderRule,
      ],
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
    ].filter(Boolean),
    devtool: dev && "inline-source-map",
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: "node",
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat("encoding"),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: "svelte-loader",
            options: {
              css: false,
              generate: "ssr",
              hydratable: true,
              dev,
            },
          },
        },
        fileLoaderRule,
      ],
    },
    mode,
    plugins: [new WebpackModules()],
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },

  serviceworker: {
    entry: config.serviceworker.entry(),
    output: config.serviceworker.output(),
    mode,
  },
};
