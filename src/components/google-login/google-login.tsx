import { Component, Host, h, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: "google-login",
  styleUrl: "google-login.css",
  shadow: true
})
export class GoogleLogin {
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
        <div
          // style={{ width: this.width }}
          class="WrapperDiv"
          onClick={this.handleclick}
        >
          <div class="IconWrapperDiv">
            <img
              class="img"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google"
            ></img>
          </div>
          <div class="ButtonText">{this.text || "Continue with Google"}</div>
        </div>
      </Host>
    );
  }
}
