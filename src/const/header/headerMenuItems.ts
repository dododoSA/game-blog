const MENU_ITEMS = [
  {
    label: '理論編',
    path: '/theory',
    child: [
      {
        label: 'プログラミング言語',
        path: '/theory/pglanguage',
        child: [
          {
            label: 'C言語',
            path: '/theory/pglanguage/c',
          },
        ],
      },
      {
        label: '当たり判定',
        path: '/theory/collision',
      },
    ],
  },
  {
    label: '実践編',
    path: '/practice',
  },
  {
    label: 'About',
    path: '/about',
  },
];

export { MENU_ITEMS };
