import React from "react";
import { css } from "styled-components";

export default x => css`
  width: calc(99.9% * ${x} - (30px - 30px * ${x}));
  
  &:nth-child(1n) {
    float: left;
    margin-right: 30px;
    clear: none;
  }
  &:last-child {
    margin-right: 0;
  }
  &:nth-child(${x[2]}n) {
    margin-right: 0;
    float: right;
  }
  &:nth-child(${x[2]}n + 1) {
    clear: both;
  }
`;
