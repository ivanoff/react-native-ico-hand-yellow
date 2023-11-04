declare module 'react-native-ico-hand-yellow' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'cactus-dry' |
      'call' |
      'chips-bet' |
      'clapping-clap' |
      'computer-mouse-51' |
      'computer-mouse' |
      'dial' |
      'dislike-bad' |
      'drag-1' |
      'drag-10' |
      'drag-104' |
      'drag-105' |
      'drag-119' |
      'drag-129' |
      'drag-143' |
      'drag-160' |
      'drag-161' |
      'drag-17' |
      'drag-172' |
      'drag-183' |
      'drag-186' |
      'drag-189' |
      'drag-4' |
      'drag-43' |
      'drag-49' |
      'drag-56' |
      'drag-57' |
      'drag-62' |
      'drag-69' |
      'drag-79' |
      'drag-95' |
      'drag-97' |
      'drag-down-arrow' |
      'drag-hands-and-gestures-114' |
      'drag-hands-and-gestures-171' |
      'drag-hands-and-gestures-31' |
      'drag-hands-and-gestures-46' |
      'drag-hands-and-gestures-6' |
      'drag-hands-and-gestures-72' |
      'drag-hands-and-gestures-80' |
      'drag-hands-and-gestures-99' |
      'drag-hands-and-gestures' |
      'drag-scroll-116' |
      'drag-scroll-190' |
      'drag-scroll-59' |
      'drag-scroll-60' |
      'drag-scroll' |
      'drag' |
      'email-mail' |
      'fingers-finger-185' |
      'fingers-finger-20' |
      'fingers-finger' |
      'fingers-hand' |
      'fingers-hands-and-gestures-134' |
      'fingers-hands-and-gestures-188' |
      'fingers-hands-and-gestures-27' |
      'fingers-hands-and-gestures-3' |
      'fingers-hands-and-gestures-34' |
      'fingers-hands-and-gestures' |
      'fingers' |
      'fist-107' |
      'fist-44' |
      'fist' |
      'gestures-hands-and-gestures' |
      'gestures-take' |
      'hand-catch-66' |
      'hand-catch' |
      'hand-cursor' |
      'hand-gesture-finger' |
      'hand-gesture-hands-and-gestures-115' |
      'hand-gesture-hands-and-gestures-75' |
      'hand-gesture-hands-and-gestures' |
      'hand-hold' |
      'hands-hold' |
      'heart-lover' |
      'hold-take' |
      'hygienic-washing' |
      'lightbulb' |
      'like-94' |
      'like' |
      'middle-finger-175' |
      'middle-finger-89' |
      'middle-finger' |
      'mouse' |
      'planet-earth-global' |
      'pointing-down-finger' |
      'pointing-down-hands-and-gestures' |
      'pointing-down' |
      'pointing-finger' |
      'pointing-hand-finger' |
      'pointing-hands-and-gestures-164' |
      'pointing-hands-and-gestures-196' |
      'pointing-hands-and-gestures-26' |
      'pointing-hands-and-gestures-36' |
      'pointing-hands-and-gestures' |
      'pointing-left-finger' |
      'pointing-left-hands-and-gestures' |
      'pointing-left' |
      'pointing-right-finger-16' |
      'pointing-right-finger' |
      'pointing-right-hands-and-gestures' |
      'pointing-up-finger-73' |
      'pointing-up-finger' |
      'pointing-up-hands-and-gestures-131' |
      'pointing-up-hands-and-gestures-152' |
      'pointing-up-hands-and-gestures' |
      'pointing-up' |
      'prohibition' |
      'rock-and-roll-concert' |
      'sheriff' |
      'smartphone-hands-and-gestures-187' |
      'smartphone-hands-and-gestures' |
      'smartphone-touch-screen' |
      'smartwatch-hands-and-gestures' |
      'smartwatch' |
      'sprout-farming-and-gardening' |
      'sprout-tree' |
      'sprout' |
      'stop' |
      'swear' |
      'tablet-ipad' |
      'tablet' |
      'tap-106' |
      'tap-109' |
      'tap-163' |
      'tap-167' |
      'tap-174' |
      'tap-176' |
      'tap-18' |
      'tap-28' |
      'tap-48' |
      'tap-54' |
      'tap-8' |
      'tap-88' |
      'tap-93' |
      'tap-add' |
      'tap-audio-123' |
      'tap-audio-128' |
      'tap-audio-14' |
      'tap-audio-157' |
      'tap-audio' |
      'tap-back' |
      'tap-bluetooth' |
      'tap-cloud' |
      'tap-export' |
      'tap-fast-forward' |
      'tap-finger-117' |
      'tap-finger-121' |
      'tap-finger-127' |
      'tap-finger-137' |
      'tap-finger-144' |
      'tap-finger-15' |
      'tap-finger-168' |
      'tap-finger-178' |
      'tap-finger-19' |
      'tap-finger-193' |
      'tap-finger-195' |
      'tap-finger-21' |
      'tap-finger-24' |
      'tap-finger-25' |
      'tap-finger-38' |
      'tap-finger-47' |
      'tap-finger-63' |
      'tap-finger-70' |
      'tap-finger-85' |
      'tap-finger' |
      'tap-hands-and-gestures-100' |
      'tap-hands-and-gestures-101' |
      'tap-hands-and-gestures-102' |
      'tap-hands-and-gestures-103' |
      'tap-hands-and-gestures-108' |
      'tap-hands-and-gestures-110' |
      'tap-hands-and-gestures-111' |
      'tap-hands-and-gestures-112' |
      'tap-hands-and-gestures-113' |
      'tap-hands-and-gestures-118' |
      'tap-hands-and-gestures-12' |
      'tap-hands-and-gestures-120' |
      'tap-hands-and-gestures-122' |
      'tap-hands-and-gestures-124' |
      'tap-hands-and-gestures-125' |
      'tap-hands-and-gestures-126' |
      'tap-hands-and-gestures-13' |
      'tap-hands-and-gestures-130' |
      'tap-hands-and-gestures-132' |
      'tap-hands-and-gestures-133' |
      'tap-hands-and-gestures-135' |
      'tap-hands-and-gestures-136' |
      'tap-hands-and-gestures-138' |
      'tap-hands-and-gestures-139' |
      'tap-hands-and-gestures-140' |
      'tap-hands-and-gestures-141' |
      'tap-hands-and-gestures-142' |
      'tap-hands-and-gestures-145' |
      'tap-hands-and-gestures-146' |
      'tap-hands-and-gestures-147' |
      'tap-hands-and-gestures-148' |
      'tap-hands-and-gestures-149' |
      'tap-hands-and-gestures-150' |
      'tap-hands-and-gestures-151' |
      'tap-hands-and-gestures-153' |
      'tap-hands-and-gestures-154' |
      'tap-hands-and-gestures-155' |
      'tap-hands-and-gestures-156' |
      'tap-hands-and-gestures-158' |
      'tap-hands-and-gestures-159' |
      'tap-hands-and-gestures-162' |
      'tap-hands-and-gestures-165' |
      'tap-hands-and-gestures-166' |
      'tap-hands-and-gestures-169' |
      'tap-hands-and-gestures-170' |
      'tap-hands-and-gestures-173' |
      'tap-hands-and-gestures-177' |
      'tap-hands-and-gestures-179' |
      'tap-hands-and-gestures-180' |
      'tap-hands-and-gestures-181' |
      'tap-hands-and-gestures-182' |
      'tap-hands-and-gestures-184' |
      'tap-hands-and-gestures-191' |
      'tap-hands-and-gestures-192' |
      'tap-hands-and-gestures-194' |
      'tap-hands-and-gestures-2' |
      'tap-hands-and-gestures-22' |
      'tap-hands-and-gestures-23' |
      'tap-hands-and-gestures-29' |
      'tap-hands-and-gestures-30' |
      'tap-hands-and-gestures-32' |
      'tap-hands-and-gestures-33' |
      'tap-hands-and-gestures-35' |
      'tap-hands-and-gestures-37' |
      'tap-hands-and-gestures-39' |
      'tap-hands-and-gestures-40' |
      'tap-hands-and-gestures-41' |
      'tap-hands-and-gestures-42' |
      'tap-hands-and-gestures-45' |
      'tap-hands-and-gestures-5' |
      'tap-hands-and-gestures-50' |
      'tap-hands-and-gestures-52' |
      'tap-hands-and-gestures-53' |
      'tap-hands-and-gestures-55' |
      'tap-hands-and-gestures-58' |
      'tap-hands-and-gestures-61' |
      'tap-hands-and-gestures-64' |
      'tap-hands-and-gestures-65' |
      'tap-hands-and-gestures-67' |
      'tap-hands-and-gestures-68' |
      'tap-hands-and-gestures-7' |
      'tap-hands-and-gestures-71' |
      'tap-hands-and-gestures-74' |
      'tap-hands-and-gestures-76' |
      'tap-hands-and-gestures-77' |
      'tap-hands-and-gestures-78' |
      'tap-hands-and-gestures-81' |
      'tap-hands-and-gestures-82' |
      'tap-hands-and-gestures-83' |
      'tap-hands-and-gestures-84' |
      'tap-hands-and-gestures-86' |
      'tap-hands-and-gestures-87' |
      'tap-hands-and-gestures-9' |
      'tap-hands-and-gestures-90' |
      'tap-hands-and-gestures-92' |
      'tap-hands-and-gestures-96' |
      'tap-hands-and-gestures-98' |
      'tap-hands-and-gestures' |
      'tap-import' |
      'tap-more' |
      'tap-mute-11' |
      'tap-mute-91' |
      'tap-mute' |
      'tap-pause' |
      'tap-play-button' |
      'tap-power-button' |
      'tap-rewind' |
      'tap-search' |
      'tap-share' |
      'tap-stop' |
      'tap' |
      'victory' |
      'zoom-in' |
      'zoom-out-hands-and-gestures' |
      'zoom-out';

    type iconColors = '#020202' |
      '#050505' |
      '#FDCC00' |
      '#FF8800' |
      '#FFA800' |
      '#FFE100' |
      '#FFFFFF';

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
