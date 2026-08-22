export type BotProviderOptions = {
  id?: string | null;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  username?: string | null;
};

export type BotProviderGetNameOptions = {
  link?: boolean;
};

export type BotProviderGetBotLinkOptions = {
  deepLink?: string;
};
