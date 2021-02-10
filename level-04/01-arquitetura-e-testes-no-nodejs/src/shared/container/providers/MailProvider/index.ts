import { container } from 'tsyringe';
import mailConfig from '@config/mail';

import IMailProvider from './models/IMailProvider';

import EtherealMailProvider from './implementations/EtherealMailProvider';
import MAILGUNMailProvider from './implementations/MAILGUNMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  mailgun: container.resolve(MAILGUNMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
