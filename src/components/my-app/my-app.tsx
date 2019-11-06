import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "my-app",
  styleUrl: "my-app.css",
  shadow: true
})
export class MyApp {
  render() {
    return (
      <Host>
        <slot>
          <google-login></google-login>
          <facebook-login></facebook-login>
          <github-login></github-login>
        </slot>
      </Host>
    );
  }
}
