import { Component, Prop, Method } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  @Prop() name: string;

  @Method() sayHello() {
    console.log(`Hello ${this.name || 'World'}!`);
  }

  render() {
    return (
      <div>
        Hello {this.name || 'World'}!
      </div>
    );
  }
}
