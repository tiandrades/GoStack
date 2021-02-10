interface IMailConfig {
  driver: 'ethereal' | 'mailgun';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'postmaster@sandbox858c5fea26e14e6dbf2701cd1be24882.mailgun.org',
      name: 'Tyzer do GoBarber',
    },
  },
} as IMailConfig;
