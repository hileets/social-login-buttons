import { Component, Host, h, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: "facebook-login",
  styleUrl: "facebook-login.css",
  shadow: true
})
export class FacebookLogin {
  handleclick(e) {
    this.onClick.emit(e);
  }
  @Prop() text: string;
  @Prop() type: string;
  @Prop() width: string;
  @Event() onClick: EventEmitter;
  render() {
    return (
      <Host>
        <div class="WrapperDiv" onClick={this.handleclick}>
          <div class="IconWrapperDiv">
            <img
              class="img"
              src="https://www.freeiconspng.com/uploads/facebook-f-logo-white-background-21.jpg"
              alt="facebook"
            ></img>
          </div>
          <p class="ButtonText">{this.text || "Continue with Facebook"}</p>
        </div>
      </Host>
    );
  }
}
