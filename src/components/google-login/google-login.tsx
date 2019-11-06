import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "google-login",
  styleUrl: "google-login.css",
  shadow: true
})
export class GoogleLogin {
  @Prop() text: string;
  @Prop() type: string;
  @Prop() width: string;
  @Prop() animation: boolean;
  render() {
    return (
      <Host>
        <div class="WrapperDiv">
          <div
            style={{
              // backgroundColor: this.variant == "material" ? "white" : "#3b5998",
              animation: this.animation == false ? "none" : ""
            }}
            class="IconWrapperDiv"
          >
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
