export default [
    {
        exchangeName: 'Binance',
        url:'https://www.binance.com/en/my/settings/api-management',
        keys : ['IP Address to Whitelist','API Key','Secret Key'],
        info :[
            {
                step:1,
                title:'Go On Your Binance Account',
                description:'Login to Binance, click on the top right on the "ON" button, and then click on “API Management”.',
                image_uri:'./images/im1.jpg'
            },
            {
                step:2,
                title:'Create an API Key',
                description:'On your API Key, enable "Reading" and "Spot & Margin Trading" and add the following Coinrule IP as a trusted IP on Binance',
                image_uri:'./images/im2.jpg',
                key:'3.121.67.74 18.156.88.234 3.68.22.15 3.68.24.139 3.67.251.235 3.67.128.205 3.68.154.20'
            },
            {
                step:3,
                title:'Copy and Paste Your Key',
                description:'As final step, copy/paste the API key and Secret Key eg. z3UPj1wmzjCoru4302 into Coinrule. You are set for trading!',
                image_uri:'./images/im3.jpg'
            }
        ]
    },
    {
        exchangeName: 'BitPanda Pro',
        url:'https://exchange.bitpanda.com/account/keys',
        keys : ['API Key'],
        info :[
            {
                step:1,
                title:'Go On Your Bitpanda Pro Account',
                description:'Login to Bitpanda, click on the Panda icon on the top right and select API. Then click on "New Api Key".',
                image_uri:'./images/im1.jpg'
            },
            {
                step:2,
                title:'Create an API Key',
                description:'Name your API Key and grant the required permissions, then click on “Create API Key”. You will receive a confirmation email, click on the link provided.',
                image_uri:'./images/im2.jpg'
            },
            {
                step:3,
                title:'Copy and Paste Your Key',
                description:'As final step, copy/paste the Key you created into Coinrule. You are set for trading!',
                image_uri:'./images/im3.jpg'
            }
        ]
    },
    {
        exchangeName: 'HitBts',
        url:'https://hitbtc.com/settings/api-keys',
        keys : ['API Key','Secret Key'],
        info :[
            {
                step:1,
                title:'Go On Your HitBTC Account',
                description:'Grant The Required Permissions',
                image_uri:'./images/im1.jpg',

            }
        ]
    }
]