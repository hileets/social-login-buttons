import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "facebook-login",
  styleUrl: "facebook-login.css",
  shadow: true
})
export class FacebookLogin {
  @Prop() text: string;
  @Prop() type: string;
  @Prop() width: string;
  @Prop() variant: string;
  @Prop() animation: boolean;

  render() {
    return (
      <Host>
        <div
          style={{
            backgroundColor: this.variant == "material" ? "white" : "#3b5998"
            // animation: this.animation == false ? "none" : "none"
          }}
          class="WrapperDiv"
        >
          <div
            style={{
              // backgroundColor: this.variant == "material" ? "white" : "#3b5998",
              animation: this.animation == false ? "none" : ""
            }}
            class="IconWrapperDiv"
          >
            <img
              class="img"
              //https://salman-ahmed2.imgbb.com/ uploaded here
              src="https://i.ibb.co/9Gh4cgd/facebook.png"
              alt="facebook"
            ></img>
          </div>
          <p
            style={{
              color: this.variant == "material" ? "#757575" : "white"
            }}
            class="ButtonText"
          >
            {this.text || "Continue with Facebook"}
          </p>
        </div>
      </Host>
    );
  }
}
