import React from "react";
import { Page, pageSelection } from "../types";
import { Dimensions, Text, TouchableHighlight, View, ViewStyle } from "react-native";
import { GRAY_1, GRAY_2, GRAY_3, GRAY_5 } from "../styles/colors";

type BackgroundProps = React.PropsWithChildren & {
  style: ViewStyle,
}
const Background = (props: BackgroundProps) => (
  <View style={{
    height: 54,
    paddingTop: 8,
    paddingLeft: 8,
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 1,
    borderStyle: "solid",
    borderTopColor: GRAY_3,
    backgroundColor: "#e6e6e6",
    width: Dimensions.get("window").width,
    ...props.style,
  }}>
    {props.children}
  </View>
)

type PageProps = {
  label: pageSelection,
  onPress: (pageName: pageSelection) => void,
}
const PageElement = (props: PageProps) => (
  <TouchableHighlight
    style={{
      height: 36,
      padding: 8,
      borderRadius: 4,
      backgroundColor: GRAY_1,
    }}
    underlayColor={GRAY_2}
    onPress={() => props.onPress(props.label)}
  >
    <Text style={{ color: GRAY_5 }}>
      {props.label}
    </Text>
  </TouchableHighlight>
)

/********************************************************************/

type PageSelectorProps = {
  pages: Page[],
  style: ViewStyle,
  selectedPage: string,
  onPageSelect: (selection: pageSelection) => void,
}

const PageSelector = (props: PageSelectorProps) => {
  const {pages, onPageSelect, style} = props;

  return (
    <Background style={style}>
      {
        pages.map((page) => (
          <PageElement onPress={onPageSelect} key={page.name} label={page.name}/>)
        )
      }
    </Background>
  )
}

export default PageSelector;
