// import React, {useCallback, useState} from 'react';
// import RangeSlider from 'rn-range-slider';
// import {Thumb, Rail, RailSelected, Label, Notch} from './RangeSliderItems';
// import {Text, View} from '@components';

// export function RangeSilder({
//   low,
//   high,
//   title,
//   handleValueChange,
// }: {
//   title?: string;
//   low: number;
//   high: number;
//   handleValueChange: (low: number, high: number) => void;
// }) {
//   const renderThumb = useCallback(() => <Thumb />, []);
//   const renderRail = useCallback(() => <Rail />, []);
//   const renderRailSelected = useCallback(() => <RailSelected />, []);
//   const renderLabel = useCallback(
//     (value: number) => <Label text={`$${value}`} />,
//     [],
//   );

//   const renderNotch = useCallback(() => <Notch />, []);

//   return (
//     <View paddingVertical>
//       <Text font="Medium" size="h6">
//         {title}
//       </Text>
//       <RangeSlider
//         min={0}
//         max={1000000}
//         step={1}
//         low={low}
//         high={high}
//         // floatingLabel
//         renderThumb={renderThumb}
//         renderRail={renderRail}
//         renderRailSelected={renderRailSelected}
//         // renderLabel={renderLabel}
//         renderNotch={renderNotch}
//         onValueChanged={handleValueChange}
//       />
//       <View row space="between" marginVertical="xs">
//         <Text
//           text={`${low}`}
//           size="small"
//           color="subHeading"
//           style={{opacity: 0.6}}
//           font="Medium"
//         />
//         <Text
//           text={`${high}`}
//           size="small"
//           color="subHeading"
//           style={{opacity: 0.6}}
//           font="Medium"
//         />
//       </View>
//     </View>
//   );
// }
