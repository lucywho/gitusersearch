module.exports = {
    target: "node",
    entry: "./src/server/server.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.png$/i, 
                use: ['file-loader'], 
            },
        ],
    },
}
