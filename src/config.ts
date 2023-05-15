const config = {
    port: process.env.PORT || "3002",
    ethUrl: process.env.ETH_URL || "HTTP://127.0.0.1:7545",
    wallet_passphrase:
        process.env.HD_WALLET_PASSPHRASE ||
        "boil job erosion benefit equip photo bracket north vanish innocent slam adjust",
    network_id: 5777,
    hs_contract_address: "0x1C4Da423971b983062F0301dcf479a3D9A2c2C24",
    ipfs_api_address: "127.0.0.1",
    ipfs_api_port: "5001",
    ipfs_url: "http://127.0.0.1:8080",
    clientUrl: "http://127.0.0.1:3002",
    apiServerAddress: "http://127.0.0.1:3002",
    ipfsApiUrl: "/ip4/127.0.0.1/tcp/5001",
};

export default config;
