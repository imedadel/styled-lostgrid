import React from "react";
import { css } from "styled-components";

export default (fr=`1/3`,cycle=``,gutter=`30px`,flex=``) => css`
  width: calc(99.9% * ${fr} - (30px - 30px * ${fr}));
  
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
