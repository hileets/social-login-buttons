import { Component, Host, h, Prop, EventEmitter, Event } from "@stencil/core";
@Component({
  tag: "github-login",
  styleUrl: "github-login.css",
  shadow: true
})
export class GithubLogin {
  handleclick = (event: any) => {
    this.onclick.emit(event);
  };
  @Prop() text: string;
  @Prop() type: string;
  @Prop() width: string;
  @Event() onclick: EventEmitter;
  render() {
    return (
      <Host>
        <div class="WrapperDiv" onClick={this.handleclick.bind(this)}>
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
