import { Component } from "solid-js";
import { styled } from "solid-styled-components";

const LoaderCircle = styled("div")`
  margin: 200px auto;
  .lds-bars {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-bars div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 6px;
    background: #ff5858;
    animation: lds-bars 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-bars div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  .lds-bars div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  .lds-bars div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes lds-bars {
    0% {
      top: 8px;
      height: 100px;
    }
    50%,
    100% {
      top: 24px;
      height: 50px;
    }
  }
`;
/**
 * Loading graphic
 * @see https://loading.io/css/
 */
const Loader: Component = () => {
  return (
    <LoaderCircle>
      <div class="lds-bars">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderCircle>
  );
};
export default Loader;
