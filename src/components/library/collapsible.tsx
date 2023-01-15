import React, {Component} from 'react';
import {Animated, Easing} from 'react-native';

const ANIMATED_EASING_PREFIXES = ['easeInOut', 'easeOut', 'easeIn'];

export default class Collapsible extends Component {
  static defaultProps = {
    align: 'top',
    collapsed: true,
    collapsedHeight: 0,
    enablePointerEvents: false,
    duration: 300,
    easing: 'easeOutCubic',
    onAnimationEnd: () => null,
  };

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      measuring: false,
      measured: false,
      height: new Animated.Value(props.collapsedHeight),
      contentHeight: 0,
      animating: false,
    };
  }

  componentDidUpdate(prevProps: {collapsed: any}) {
    if (prevProps.collapsed !== this.props.collapsed) {
      this.setState({measured: false}, () =>
        this._componentDidUpdate(prevProps),
      );
    } else {
      this._componentDidUpdate(prevProps);
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  _componentDidUpdate(prevProps: {collapsed: any; collapsedHeight: any}) {
    if (prevProps.collapsed !== this.props.collapsed) {
      this._toggleCollapsed(this.props.collapsed);
    } else if (
      this.props.collapsed &&
      prevProps.collapsedHeight !== this.props.collapsedHeight
    ) {
      this.state.height.setValue(this.props.collapsedHeight);
    }
  }

  contentHandle = null;

  _handleRef = (ref: null) => {
    this.contentHandle = ref;
  };

  _measureContent(callback: {(contentHeight: any): void; (arg0: any): void}) {
    this.setState(
      {
        measuring: true,
      },
      () => {
        requestAnimationFrame(() => {
          if (!this.contentHandle) {
            this.setState(
              {
                measuring: false,
              },
              () => callback(this.props.collapsedHeight),
            );
          } else {
            let ref;
            if (typeof this.contentHandle.measure === 'function') {
              ref = this.contentHandle;
            } else {
              ref = this.contentHandle.getNode();
            }
            ref.measure((x: any, y: any, width: any, height: any) => {
              this.setState(
                {
                  measuring: false,
                  measured: true,
                  contentHeight: height,
                },
                () => callback(height),
              );
            });
          }
        });
      },
    );
  }

  _toggleCollapsed(collapsed: any) {
    if (collapsed) {
      this._transitionToHeight(this.props.collapsedHeight);
    } else if (!this.contentHandle) {
      if (this.state.measured) {
        this._transitionToHeight(this.state.contentHeight);
      }
      return;
    } else {
      this._measureContent((contentHeight: any) => {
        this._transitionToHeight(contentHeight);
      });
    }
  }

  _transitionToHeight(height: any) {
    const {duration} = this.props;
    let {easing} = this.props;
    if (typeof easing === 'string') {
      let prefix;
      let found = false;
      for (let i = 0; i < ANIMATED_EASING_PREFIXES.length; i++) {
        prefix = ANIMATED_EASING_PREFIXES[i];
        if (easing.substr(0, prefix.length) === prefix) {
          easing =
            easing.substr(prefix.length, 1).toLowerCase() +
            easing.substr(prefix.length + 1);
          prefix = prefix.substr(4, 1).toLowerCase() + prefix.substr(5);
          easing = Easing[prefix](Easing[easing || 'ease']);
          found = true;
          break;
        }
      }
      if (!found) {
        easing = Easing[easing];
      }
      if (!easing) {
        throw new Error('Invalid easing type "' + this.props.easing + '"');
      }
    }

    if (this._animation) {
      this._animation.stop();
    }
    this.setState({animating: true});
    this._animation = Animated.timing(this.state.height, {
      useNativeDriver: false,
      toValue: height,
      duration,
      easing,
    }).start(() => {
      if (this.unmounted) {
        return;
      }
      this.setState({animating: false}, () => {
        if (this.unmounted) {
          return;
        }
        this.props.onAnimationEnd();
      });
    });
  }

  _handleLayoutChange = (event: {nativeEvent: {layout: {height: any}}}) => {
    const contentHeight = event.nativeEvent.layout.height;
    if (
      this.state.animating ||
      this.props.collapsed ||
      this.state.measuring ||
      this.state.contentHeight === contentHeight
    ) {
      return;
    }

    this.state.height.setValue(contentHeight);
    this.setState({contentHeight});
  };

  render() {
    const {collapsed, enablePointerEvents} = this.props;
    const {height, contentHeight, measuring, measured} = this.state;
    const hasKnownHeight = !measuring && (measured || collapsed);
    const style = hasKnownHeight && {
      overflow: 'hidden',
      height,
    };
    const contentStyle = {};
    if (measuring) {
      contentStyle.position = 'absolute';
      contentStyle.opacity = 0;
    } else if (this.props.align === 'center') {
      contentStyle.transform = [
        {
          translateY: height.interpolate({
            inputRange: [0, contentHeight],
            outputRange: [contentHeight / -2, 0],
          }),
        },
      ];
    } else if (this.props.align === 'bottom') {
      contentStyle.transform = [
        {
          translateY: height.interpolate({
            inputRange: [0, contentHeight],
            outputRange: [-contentHeight, 0],
          }),
        },
      ];
    }
    return (
      <Animated.View
        style={style}
        pointerEvents={!enablePointerEvents && collapsed ? 'none' : 'auto'}>
        <Animated.View
          ref={this._handleRef}
          style={[this.props.style, contentStyle]}
          onLayout={
            this.state.animating ? undefined : this._handleLayoutChange
          }>
          {this.props.children}
        </Animated.View>
      </Animated.View>
    );
  }
}
