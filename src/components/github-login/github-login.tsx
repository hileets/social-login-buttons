import { Component, Host, h, Prop } from "@stencil/core";
@Component({
  tag: "github-login",
  styleUrl: "github-login.css",
  shadow: true
})
export class GithubLogin {
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
            backgroundColor: this.variant == "material" ? "white" : "black"
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
              src={
                this.variant == "material"
                  ? "https://i.ibb.co/wKxXP22/Git-Hub-Mark-64px.png"
                  : "https://i.ibb.co/GdCmwbg/Git-Hub-Mark-Light-64px.png"
              } //https://salman-ahmed2.imgbb.com/ uploaded here
              // src="https://mpng.pngfly.com/20180326/gxq/kisspng-github-computer-icons-icon-design-github-5ab8a31e334e73.4114704215220498222102.jpg"
              alt="Github"
            ></img>
          </div>
          <p
            style={{
              color: this.variant == "material" ? "#757575" : "white"
            }}
            class="ButtonText"
          >
            {this.text || "Continue with Github"}
          </p>
        </div>
      </Host>
    );
  }
}
