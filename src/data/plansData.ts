export const plans = [
  {
    tier: 'Free',
    popular: false,
    priceMonth: 0,
    title: 'Great for starters',
    description: 'Discover how to create your first projects',
    btnText: 'Get started',
    features: [
      {
        text: '3 new projects/month',
        checked: true,
      },
      {
        text: 'Basic interactions',
        checked: false,
      },
      {
        text: 'Assets library',
        checked: false,
      },
    ],
  },

  {
    tier: 'Pro',
    popular: true,
    priceMonth: 8,
    title: 'For small teams',
    description: 'Create projects for multiple clients',
    btnText: 'Join Now',
    features: [
      {
        text: '6 new projects/month',
        checked: true,
      },
      {
        text: 'Basic interactions',
        checked: true,
      },
      {
        text: 'Assets library',
        checked: true,
      },
    ],
  },

  {
    tier: 'Enterprise',
    popular: false,
    priceMonth: 12,
    title: 'For dev agencies',
    description: 'Expand into a full web dev agency',
    btnText: 'Get started',
    features: [
      {
        text: '10 new projects/month',
        checked: true,
      },
      {
        text: 'Advanced interactions',
        checked: true,
      },
      {
        text: 'Assets library',
        checked: true,
      },
    ],
  },
];
