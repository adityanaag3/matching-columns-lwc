export const data = [
    {
        theme: 'Dreamforce',
        question: 'Match the celebrity speaker to the Dreamforce year',
        iconurl:
            '/resources/icons/utility-sprite/svg/symbols.svg#swarm_request',
        column1: [
            {
                key: 'srb',
                value: 'Sir Richard Branson'
            },
            {
                key: 'mo',
                value: 'Michelle Obama'
            },
            {
                key: 'sn',
                value: 'Satya Nadella'
            },
            {
                key: 'ws',
                value: 'Will Smith'
            },
            {
                key: 'ec',
                value: 'Emilia Clarke'
            }
        ],
        column2: [
            {
                key: 'df17',
                value: 'Dreamforce 2017'
            },
            {
                key: 'df19',
                value: 'Dreamforce 2019'
            },
            {
                key: 'df21',
                value: 'Dreamforce 2021'
            },
            {
                key: 'df15',
                value: 'Dreamforce 2015'
            },
            {
                key: 'df12',
                value: 'Dreamforce 2012'
            }
        ],
        ans: ['df12', 'df17', 'df15', 'df21', 'df19']
    },
    {
        theme: 'Product Names',
        question:
            "Match the product's original name to its current rebranded name",
        iconurl: '/resources/icons/utility-sprite/svg/symbols.svg#fallback',
        column1: [
            {
                key: 'et',
                value: 'ExactTarget'
            },
            {
                key: 'cc',
                value: 'CloudCraze'
            },
            {
                key: 'sb',
                value: 'SteelBrick'
            },
            {
                key: 'ma',
                value: 'MapAnything'
            },
            {
                key: 'dw',
                value: 'Demandware'
            }
        ],
        column2: [
            {
                key: 'b2cc',
                value: 'B2C Commerce'
            },
            {
                key: 'sfmaps',
                value: 'Salesforce Maps'
            },
            {
                key: 'mc',
                value: 'Marketing Cloud'
            },
            {
                key: 'b2bc',
                value: 'B2B Commerce'
            },
            {
                key: 'cpq',
                value: 'Salesforce CPQ'
            }
        ],
        ans: ['mc', 'b2bc', 'cpq', 'sfmaps', 'b2cc']
    },
    {
        theme: 'Trailhead Ranks',
        question:
            'Match the Trailhead Rank with the minimum number of badges needed to achieve it',
        iconurl:
            '/resources/icons/utility-sprite/svg/symbols.svg#animal_and_nature',
        column1: [
            {
                key: 'adv',
                value: 'Adventurer'
            },
            {
                key: 'ran',
                value: 'Ranger'
            },
            {
                key: 'mtnr',
                value: 'Mountaineer'
            },
            {
                key: 'hik',
                value: 'Hiker'
            },
            {
                key: 'exp',
                value: 'Explorer'
            }
        ],
        column2: [
            {
                key: 'h',
                value: '100'
            },
            {
                key: 'tf',
                value: '25'
            },
            {
                key: 'ten',
                value: '10'
            },
            {
                key: 'five',
                value: '5'
            },
            {
                key: 'one',
                value: '1'
            }
        ],
        ans: ['ten', 'h', 'tf', 'one', 'five']
    },
    {
        theme: 'Governor Limits',
        question:
            'Match the governor limit description with its corresponding number',
        iconurl: '/resources/icons/utility-sprite/svg/symbols.svg#warning',
        column1: [
            {
                key: 'qc',
                value: 'Maximum number of query cursors open concurrently per user'
            },
            {
                key: 'api',
                value: 'Maximum number of external email addresses per day for API or Apex single emails'
            },
            {
                key: 'baj',
                value: 'Maximum number of batch Apex jobs queued or active concurrently '
            },
            {
                key: 'soql',
                value: 'Total number of records retrieved by SOQL queries'
            },
            {
                key: 'qlr',
                value: 'Maximum number of records returned for a Batch Apex query in Database.QueryLocator'
            }
        ],
        column2: [
            {
                key: '50m',
                value: '50 million'
            },
            {
                key: '50k',
                value: '50,000'
            },
            {
                key: '5k',
                value: '5,000'
            },
            {
                key: 'fifty',
                value: '50'
            },
            {
                key: 'five',
                value: '5'
            }
        ],
        ans: ['fifty', '5k', 'five', '50k', '50m']
    },
    {
        theme: 'Superbadges',
        question:
            'Match the superbadge with the number of points gained by completing it',
        iconurl:
            '/resources/icons/utility-sprite/svg/symbols.svg#trailhead_alt',
        column1: [
            {
                key: 'as',
                value: 'Apex Specialist'
            },
            {
                key: 'pas',
                value: 'Process Automation Specialist'
            },
            {
                key: 'lwcs',
                value: 'Lightning Web Components Specialist'
            },
            {
                key: 'bas',
                value: 'Business Administration Specialist'
            },
            {
                key: 'hcs',
                value: 'Health Cloud Specialist'
            }
        ],
        column2: [
            {
                key: '55h',
                value: '5,500'
            },
            {
                key: '5k',
                value: '5,000'
            },
            {
                key: '10k',
                value: '10,000'
            },
            {
                key: '16k',
                value: '16,000'
            },
            {
                key: '13k',
                value: '13,000'
            }
        ],
        ans: ['13k', '55h', '16k', '5k', '10k']
    },
    {
        theme: 'SFDX Commands',
        question:
            "Match the parameter names of the force:source:deploy command with it's purpose",
        iconurl:
            '/resources/icons/utility-sprite/svg/symbols.svg#collection_variable',
        column1: [
            {
                key: 'un',
                value: 'A username or alias for the target org'
            },
            {
                key: 'ig',
                value: 'Ignores the deploy errors, and continues with the deploy operation'
            },
            {
                key: 'csv',
                value: 'A comma-separated list of names of metadata components to deploy to the org'
            },
            {
                key: 'ac',
                value: 'Lists the Apex classes containing the deployment tests to run'
            },
            {
                key: 'val',
                value: 'Validates the deployed metadata and runs all Apex tests, but prevents the deployment from being saved to the org'
            }
        ],
        column2: [
            {
                key: 'o',
                value: '-o'
            },
            {
                key: 'r',
                value: '-r'
            },
            {
                key: 'u',
                value: '-u'
            },
            {
                key: 'c',
                value: '-c'
            },
            {
                key: 'm',
                value: '-m'
            }
        ],
        ans: ['u', 'o', 'm', 'r', 'c']
    }
];
