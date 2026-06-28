// SSR stubs for design system components — replaced by real DS on the client after hydration
import React from 'react';

export const Logo = () => React.createElement('span', { className: 'lp-nav__logo-img' }, 'No Judge Story');
export const Button = ({ children, className, ...props }) =>
  React.createElement('button', { className, ...props }, children);
export const Input = ({ placeholder, ...props }) =>
  React.createElement('input', { placeholder, ...props });
export const TopicChip = ({ children }) =>
  React.createElement('span', { className: 'topic-chip' }, children);
export const AvatarStack = () => null;
