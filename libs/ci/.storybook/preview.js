import '../src/scss/_bootstrap_import.scss';
import './story-styles.scss';

const mobileViewports = {
  mobile1: {
    name: 'iPhone 5',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  mobile2: {
    name: 'iPhone 6',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  mobile3: {
    name: 'iPhone 6 Plus',
    styles: {
      width: '414px',
      height: '736px',
    },
  },
  mobile4: {
    name: 'iPhone XR',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  mobile5: {
    name: 'iPhone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  mobile6: {
    name: 'iPhone 12',
    styles: {
      width: '390px',
      height: '844px',
    },
  },
  mobile7: {
    name: 'iPhone 12 mini',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  mobile8: {
    name: 'iPhone 12 Pro',
    styles: {
      width: '428px',
      height: '926px',
    },
  },
};

const tabletViewports = {
  tablet1: {
    name: 'Tablet 768 X 1024',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  tablet2: {
    name: 'Tablet 810 X 1080',
    styles: {
      width: '810px',
      height: '1080px',
    },
  },

  tablet3: {
    name: 'Tablet 834 X 1194',
    styles: {
      width: '834px',
      height: '1194px',
    },
  },

  tablet4: {
    name: 'Tablet 1024 X 1366',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
};

const customViewports = {
  laptop1: {
    name: 'Laptop 1280 X 800',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
  laptop2: {
    name: 'Laptop 1366 X 1024',
    styles: {
      width: '1366px',
      height: '1024px',
    },
  },
  laptop3: {
    name: 'Laptop 1440 X 900',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
  laptop4: {
    name: 'Laptop 1500 X 960',
    styles: {
      width: '1500px',
      height: '960px',
    },
  },
};

export const globalTypes = {};
export const parameters = {
  controls: { expanded: true },
  viewport: {
    viewports: {
      ...mobileViewports,
      ...tabletViewports,
      ...customViewports,
    },
  },
};
