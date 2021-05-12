import React from "./SliderContentElements";
import { ContentContainer } from "./SliderContentElements";
const SliderContent = ({ translate, children }) => {
  return <ContentContainer translate={translate}>{children}</ContentContainer>;
};

export default SliderContent;
