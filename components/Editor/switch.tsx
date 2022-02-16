import { styled } from "@mui/material/styles";

const SwitchRoot = styled("span")(`
  display: inline-block;
  position: relative;
  width: 48px;
  height: 20px;
  padding: 7px;
  float: right;
  margin-right: 12px;
`);

const SwitchInput = styled("input")(`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`);

const SwitchThumb = styled("span")(
  ({ theme }) => `
  position: absolute;
  display: block;
  background-color: ${theme.palette.mode === "dark" ? "#003b63" : "#0085de"};
  width: 32px;
  height: 32px;
  border-radius: 16px;
  top: 1px;
  left: 7px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:before {
    display: block;
    content: "L";
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 32px;
    color: #FFF;
  }

  &.focusVisible {
    background-color: #79B;
  }

  &.checked {
    transform: translateX(16px);
    
    &:before {
      content: "R"
    }
  }
`
);

const SwitchTrack = styled("span")(
  ({ theme }) => `
  background-color: ${theme.palette.mode === "dark" ? "#8796A5" : "#003b63"};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: block;
`
);
