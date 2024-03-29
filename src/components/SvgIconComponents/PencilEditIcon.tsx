import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const PencilEditIcon = (props: any) => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 21 20">
      <Path
        d="M12.3641 3.34265L1.34821 14.3593C1.29279 14.4149 1.25277 14.4851 1.23372 14.5605L0.012718 19.4613C-0.0238057 19.6089 0.0195463 19.7657 0.127212 19.8734C0.208675 19.9549 0.319675 20 0.433216 20C0.467993 20 0.503564 19.9957 0.538182 19.987L5.43902 18.7658C5.5154 18.7467 5.5848 18.7069 5.64022 18.6515L16.657 7.63561L12.3641 3.34265Z"
        fill={props.color}
        fillRule="evenodd"
      />
      <Path
        d="M19.3862 1.84061L18.1599 0.614371C17.3404 -0.205187 15.912 -0.204393 15.0934 0.614371L13.5913 2.11645L17.8841 6.40924L19.3862 4.90717C19.7956 4.49795 20.0211 3.95327 20.0211 3.37397C20.0211 2.79467 19.7956 2.24999 19.3862 1.84061Z"
        fill={props.color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default PencilEditIcon;
