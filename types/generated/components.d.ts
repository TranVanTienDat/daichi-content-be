import type { Schema, Struct } from '@strapi/strapi';

export interface NavigationNavigation extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigations';
  info: {
    displayName: 'navigation';
  };
  attributes: {
    badge: Schema.Attribute.String;
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isSingleLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.Text;
    subNav: Schema.Attribute.Component<'navigation.sub-nav', true>;
  };
}

export interface NavigationSubNav extends Struct.ComponentSchema {
  collectionName: 'components_navigation_sub_navs';
  info: {
    displayName: 'subNav';
  };
  attributes: {
    json: Schema.Attribute.JSON;
    label: Schema.Attribute.String;
    link: Schema.Attribute.Text;
  };
}

export interface SharedBannner extends Struct.ComponentSchema {
  collectionName: 'components_shared_bannners';
  info: {
    displayName: 'bannner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    file: Schema.Attribute.Media<'files'>;
    media: Schema.Attribute.Media<'images' | 'videos'>;
    subTitle: Schema.Attribute.Text;
    titile: Schema.Attribute.Text;
  };
}

export interface SharedConsultant extends Struct.ComponentSchema {
  collectionName: 'components_shared_consultants';
  info: {
    displayName: ' consultant';
  };
  attributes: {
    code: Schema.Attribute.String;
    contact: Schema.Attribute.Component<'shared.contact', true>;
    fullName: Schema.Attribute.String;
    philosophy: Schema.Attribute.Text;
    position: Schema.Attribute.String;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    contact: Schema.Attribute.Component<'shared.contact-channels', true>;
  };
}

export interface SharedContactChannels extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_channels';
  info: {
    displayName: 'contactChannels';
  };
  attributes: {
    channelType: Schema.Attribute.Enumeration<
      ['phone', 'zalo', 'messenger', 'email', 'map']
    >;
    description: Schema.Attribute.String;
    link: Schema.Attribute.Text;
    value: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'navigation.navigation': NavigationNavigation;
      'navigation.sub-nav': NavigationSubNav;
      'shared.bannner': SharedBannner;
      'shared.consultant': SharedConsultant;
      'shared.contact': SharedContact;
      'shared.contact-channels': SharedContactChannels;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
