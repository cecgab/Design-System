import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import "./md-button.js";

export default {
  title: "Components/MdButton",
  tags: ["autodocs"],
  component: "md-button",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "danger", "success"],
    },
    disabled: { control: "boolean" },
    href: { control: "text" },
    label: { control: "text" },
  },
  args: {
    variant: "default",
    disabled: false,
    href: "",
    label: "Click me",
  },
  render: ({ variant, disabled, href, label }) =>
    html`<md-button
      variant=${variant}
      ?disabled=${disabled}
      href=${ifDefined(href || undefined)}
      text=${label}
    ></md-button>`,
};

export const Default = {};

export const Primary = {
  args: { variant: "primary" },
};

export const Danger = {
  args: { variant: "danger" },
};

export const Success = {
  args: { variant: "success" },
};

export const Disabled = {
  args: { disabled: true },
};

export const Link = {
  args: { href: "https://example.com", label: "Go to example" },
};
