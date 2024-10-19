import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
  return (
    <AnimatedCursor
    innerSize={8}
    outerSize={8}
    color='255,127,80'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link'
    ]}
  />
  );
}