
# Social Login Buttons (Web Component)

**__social-login-buttons__** is a light weight and simple Web Component to display Social Login Buttons in your Angular, React, VueJS or Vanilla JS project.


## Why is _social-login-button_ the best choice for your project?
There are plenty of other packages that display social login buttons but our packkage offers following features.
1. One Component for all Platforms. **social-login-component** is a web component, it works on all platforms including **Angular, React, Vue Js and Vanilla Javascript**
2. Lightweight and easy to implement.
3. Fully customizable. Using props, You can set the button to use **Material UI design**, and remove animation with a minimum code changes.

## Install     
npm
```bash
npm install social-login-buttons
```
yarn
```bash
yarn add social-login-buttons
```



## Usage

### React Social Login
---

First of all, import the package into your class file
```javascript
import { applyPolyfills, defineCustomElements } from ‘social-login-buttons/loader’;
```

After imports, insert this code outside of your class declaration
```javascript
applyPolyfills().then(() => {
   defineCustomElements(window);
});
```

Currently we are only providing 3 login buttons but dont worry more buttons are coming soon. (yay)
To add the button to you page just add the following line where you want the button.
##### Google Login Button
```javascript
<google-login> </google-login>
```
##### Facebook Login Button
```javascript
<facebook-login> </facebook-login>
```

##### Github Login Button   
```javascript
 <github-login> </github-login>
```

#### Customization
By default the buttons display their own text however you can change them to say whatever you want.
```javascript
<facebook-login text={'Anything you write here will be the button text'} ></facebook-login>
```
By default Login Buttons are animated on hover. You can remove the animation by setting `animation` to `false`. For example,
```javascript
<facebook-login animation={false} ></facebook-login>
```
By default the buttons use custom styling it can be changed to material ui design by setting `variant` to `material` 

```javascript
<facebook-login variant={‘material’} ></facebook-login>
```



### Angular Social Login
---

In your project directory navigate to `app.module.ts` and do the following.
1. Import' `CUSTOM_ELEMENTS_SCHEMA` from `@angular/core`. Add this to the line where you are importing NGModule.
2. Edit you NGModule to set `CUSTOM_ELEMENTS_SCHEMA` in your `schemas`

Previously your `app.module.ts` file looked like this
```javascript
import { BrowserModule } from “@angular/platform-browser”;
import { NgModule} from “@angular/core”;
import { AppRoutingModule } from “./app-routing.module”;
import { AppComponent } from “./app.component”;
import { <YourComponentName>} from “./stencil-test/your-component-name”;
@NgModule({
 declarations: [AppComponent, <YourComponentName>],
 imports: [BrowserModule, AppRoutingModule],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule {}
```


Now your `app.module.ts` file should look like this
```javascript
import { BrowserModule } from “@angular/platform-browser”;
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from “@angular/core”;
import { AppRoutingModule } from “./app-routing.module”;
import { AppComponent } from “./app.component”;
import { StencilTestComponent } from “./stencil-test/stencil-test.component”;
@NgModule({
 declarations: [AppComponent, StencilTestComponent],
 imports: [BrowserModule, AppRoutingModule],
 providers: [],
 schemas: [CUSTOM_ELEMENTS_SCHEMA],
 bootstrap: [AppComponent]
})
export class AppModule {}

```

Navigate to your component's typescript file and import the package.
```javascript
import { applyPolyfills, defineCustomElements } from ‘social-login-buttons/loader’;
```

After imports, insert this code outside of your class declaration
```javascript
applyPolyfills().then(() => {
   defineCustomElements(window);
});
```

Now navigate to your component's HTML file and simply add the following line where you want to add the component.
##### Google Login Button
```javascript
<google-login> </google-login>
```
##### Facebook Login Button
```javascript
<facebook-login> </facebook-login>
```

##### Github Login Button   
```javascript
 <github-login> </github-login>
```

### Customization
By default the buttons display their own text however you can change them to say whatever you want.
```javascript
<facebook-login text={'Anything you write here will be the button text'} ></facebook-login>
```
By default Login Buttons are animated on hover. You can remove the animation by setting `animation` to `false`. For example,
```javascript
<facebook-login animation={false} ></facebook-login>
```
By default the buttons use custom styling it can be changed to material ui design by setting `variant` to `material` .

```javascript
<facebook-login variant={‘material’} ></facebook-login>
```


## Contribution
Issues and pull requests are welcome at https://github.com/hileets/social-login-buttons

 















