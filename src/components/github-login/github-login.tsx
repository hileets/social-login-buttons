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
  render() {
    return (
      <Host>
        <div class="WrapperDiv">
          <div class="IconWrapperDiv">
            <img
              class="img"
              src="https://mpng.pngfly.com/20180326/gxq/kisspng-github-computer-icons-icon-design-github-5ab8a31e334e73.4114704215220498222102.jpg"
              alt="Github"
            ></img>
          </div>
          <p class="ButtonText">{this.text || "Continue with Github"}</p>
        </div>
      </Host>
    );
  }
}
