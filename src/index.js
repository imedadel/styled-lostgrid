import React from "react";
import { css } from "styled-components";

// TODO: Use a single string input and split based on space and search in the new array
export default (fr=`1/3`,cycle=``,gutter=`30px`,flex=`no-flex`) => css`
  ${flex===`flex` && css`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(99.9% * ${fr} - (${gutter?gutter:`30px`} - ${gutter?gutter:`30px`} * ${fr}));
    max-width: calc(99.9% * ${fr} - (${gutter?gutter:`30px`} - ${gutter?gutter:`30px`} * ${fr}));
  `}
  width: calc(99.9% * ${fr} - (${gutter?gutter:`30px`} - ${gutter?gutter:`30px`} * ${fr}));
  
  &:nth-child(1n) {
    float: left;
    margin-right: 30px;
    clear: none;
  }
  &:last-child {
    margin-right: 0;
  }
  &:nth-child(${cycle?cycle:fr[fr.length-1]}n) {
    margin-right: 0;
    float: right;
  }
  &:nth-child(${cycle?cycle:fr[fr.length-1]}n + 1) {
    clear: both;
  }
`;
