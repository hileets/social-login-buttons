/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface FacebookLogin {
    'text': string;
    'type': string;
    'width': string;
  }
  interface GithubLogin {
    'text': string;
    'type': string;
    'width': string;
  }
  interface GoogleLogin {
    'text': string;
    'type': string;
    'width': string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
}

declare global {


  interface HTMLFacebookLoginElement extends Components.FacebookLogin, HTMLStencilElement {}
  var HTMLFacebookLoginElement: {
    prototype: HTMLFacebookLoginElement;
    new (): HTMLFacebookLoginElement;
  };

  interface HTMLGithubLoginElement extends Components.GithubLogin, HTMLStencilElement {}
  var HTMLGithubLoginElement: {
    prototype: HTMLGithubLoginElement;
    new (): HTMLGithubLoginElement;
  };

  interface HTMLGoogleLoginElement extends Components.GoogleLogin, HTMLStencilElement {}
  var HTMLGoogleLoginElement: {
    prototype: HTMLGoogleLoginElement;
    new (): HTMLGoogleLoginElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'facebook-login': HTMLFacebookLoginElement;
    'github-login': HTMLGithubLoginElement;
    'google-login': HTMLGoogleLoginElement;
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface FacebookLogin {
    'onOnClick'?: (event: CustomEvent<any>) => void;
    'text'?: string;
    'type'?: string;
    'width'?: string;
  }
  interface GithubLogin {
    'onOnClick'?: (event: CustomEvent<any>) => void;
    'text'?: string;
    'type'?: string;
    'width'?: string;
  }
  interface GoogleLogin {
    'onOnClick'?: (event: CustomEvent<any>) => void;
    'text'?: string;
    'type'?: string;
    'width'?: string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface IntrinsicElements {
    'facebook-login': FacebookLogin;
    'github-login': GithubLogin;
    'google-login': GoogleLogin;
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'facebook-login': LocalJSX.FacebookLogin & JSXBase.HTMLAttributes<HTMLFacebookLoginElement>;
      'github-login': LocalJSX.GithubLogin & JSXBase.HTMLAttributes<HTMLGithubLoginElement>;
      'google-login': LocalJSX.GoogleLogin & JSXBase.HTMLAttributes<HTMLGoogleLoginElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}

